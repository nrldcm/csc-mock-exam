// Full click-through of the app as a user would, at phone and tablet sizes.
// Any uncaught error or console error on any screen fails the test.
import { expect, test } from '@playwright/test'

let errors = []
test.beforeEach(async ({ page }) => {
  errors = []
  page.on('pageerror', e => errors.push(`pageerror: ${e.message}`))
  page.on('console', m => { if (m.type() === 'error') errors.push(`console: ${m.text()}`) })
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Civil Service Mock Exam' })).toBeVisible()
  const newHere = page.getByRole('button', { name: /new here/ })
  if (await newHere.isVisible()) await newHere.click()
})
test.afterEach(async () => { expect(errors, errors.join('\n')).toEqual([]) })

const nav = (page, name) => page.getByRole('navigation', { name: 'Main' }).getByRole('button', { name })
const dialog = page => page.getByRole('alertdialog')

/* Answer every item: pick the first available choice, then Next/Skip/Finish/Submit, confirming dialogs */
async function answerAll(page, max = 400) {
  for (let i = 0; i < max; i++) {
    if (await page.getByText('General rating').isVisible()) return
    if (await page.getByText('Something went wrong on this screen').isVisible()) {
      throw new Error('Screen crashed: ' + await page.locator('[role=alert] pre').innerText() + '\n' + errors.join('\n'))
    }
    if (await dialog(page).isVisible()) { await dialog(page).getByRole('button').last().click(); continue }
    const opt = page.locator('.opt:not([disabled])').first()
    if (await opt.count()) await opt.click()
    await page.locator('.dock .btn').last().click()
  }
  throw new Error('did not reach results')
}

test('home shows every section and the bottom navigation', async ({ page }) => {
  for (const t of ['Exam level', 'Choose an exam', 'Study and review', 'Review streak', 'Daily trivia', 'Achievements']) {
    await expect(page.getByText(t, { exact: true }).first()).toBeVisible()
  }
  for (const n of ['Home', 'Study', 'Reviewer', 'Sessions', 'About']) await expect(nav(page, n)).toBeVisible()
  await expect(page.getByText(/Developed by/).first()).toBeVisible()
})

test('practice with answers: answer, feedback, full explanation, results, share, review', async ({ page }) => {
  await page.getByRole('button', { name: /Practice with answers/ }).click()
  await page.getByRole('button', { name: 'Start practice' }).click()
  await expect(page.getByText(/Item 1 of 30/)).toBeVisible()
  await page.locator('.opt').first().click()
  await expect(page.locator('.fb')).toBeVisible()
  const more = page.getByRole('button', { name: 'Show full explanation' })
  if (await more.isVisible()) { await more.click(); await expect(page.locator('.fb .xfull')).toBeVisible() }
  await answerAll(page)
  await expect(page.locator('.stamp').first()).toBeVisible()
  await expect(page.getByText('By subject')).toBeVisible()

  // Share: on a browser without a share sheet it saves the image instead
  const share = page.getByRole('button', { name: /Share my result/ })
  await share.click()
  await expect(share).toBeEnabled({ timeout: 15_000 })

  await page.getByRole('button', { name: 'Review every item with explanations' }).click()
  await expect(page.getByText('Every item explained')).toBeVisible()
  await expect(page.locator('.ritem').first()).toBeVisible()
  await expect(page.getByText('Step by step').first()).toBeVisible()

  // Lesson link opens the study note and comes back to the same item
  await page.getByRole('button', { name: /Study the lesson/ }).first().click()
  await expect(page.getByRole('button', { name: 'Mark as read' })).toBeVisible()
  await page.getByRole('button', { name: 'Back to item' }).click()
  await expect(page.getByText('Every item explained')).toBeVisible()
})

test('realistic exam: briefing, answer sheet, leave and resume, submit', async ({ page }) => {
  await page.getByRole('button', { name: 'Continue to instructions' }).click()
  await expect(page.locator('.facts').getByText('150')).toBeVisible()
  await page.getByRole('button', { name: 'Begin examination' }).click()
  await expect(page.getByText(/Item 1 of 150/)).toBeVisible()
  await expect(page.locator('.timer')).toBeVisible()

  await page.locator('.opt').nth(1).click()
  await page.getByRole('button', { name: 'Open answer sheet' }).click()
  await expect(page.getByRole('dialog', { name: 'Answer sheet' })).toBeVisible()
  await page.locator('.orow').nth(2).locator('.ob').first().click()
  await expect(page.getByText('2 of 150 shaded')).toBeVisible()
  await page.getByRole('button', { name: 'Close' }).click()

  await page.getByRole('button', { name: 'Exit' }).click()
  await dialog(page).getByRole('button', { name: 'Leave' }).click()
  await expect(page.getByText('You have an exam in progress')).toBeVisible()
  await page.getByRole('button', { name: 'Continue', exact: true }).click()
  await expect(page.getByText(/of 150/)).toBeVisible()

  await answerAll(page)
  await expect(page.getByText('Exam difficulty')).toBeVisible()
  await expect(page.getByText('Points earned')).toBeVisible()
})

test('subprofessional level uses 145 items and the clerical part', async ({ page }) => {
  await page.getByRole('button', { name: 'Subprofessional', exact: true }).click()
  await page.getByRole('button', { name: 'Continue to instructions' }).click()
  await expect(page.locator('.facts').getByText('145')).toBeVisible()
  await expect(page.getByText(/Clerical operations/)).toBeVisible()
})

test('daily trivia and unlimited practice', async ({ page }) => {
  await page.getByRole('button', { name: 'Play' }).click()
  await answerAll(page)
  await expect(page.getByText('Points earned')).toBeVisible()
  await page.getByRole('button', { name: 'Back to home' }).click()
  await expect(page.getByRole('button', { name: 'Done' })).toBeVisible()

  await page.getByRole('button', { name: /Unlimited practice/ }).click()
  await page.getByRole('button', { name: 'Start unlimited practice' }).click()
  for (let i = 0; i < 3; i++) { await page.locator('.opt').first().click(); await page.locator('.dock .btn').last().click() }
  await page.getByRole('button', { name: 'Finish' }).first().click()
  await dialog(page).getByRole('button', { name: 'Finish' }).click()
  await expect(page.getByText('General rating')).toBeVisible()
})

test('reviewer: written items, hide answers, unlimited and abstract figures', async ({ page }) => {
  await nav(page, 'Reviewer').click()
  await expect(page.locator('.ritem').first()).toBeVisible()
  await expect(page.getByText('Step by step').first()).toBeVisible()
  await page.getByRole('switch', { name: 'Hide answers' }).click()
  await page.getByRole('button', { name: 'Show answer' }).first().click()
  await page.getByPlaceholder('Search a word, law or topic').fill('Constitution')
  await expect(page.getByText(/\d+ items?/).first()).toBeVisible()
  await page.getByRole('button', { name: 'Unlimited new items' }).click()
  await expect(page.locator('.ritem').first()).toBeVisible()
  await page.getByRole('button', { name: 'Abstract figures' }).click()
  await expect(page.locator('.ritem svg.fig').first()).toBeVisible()
  await page.getByRole('button', { name: 'Show more items' }).click()
  await page.goBack()
  await expect(page.getByRole('heading', { name: 'Civil Service Mock Exam' })).toBeVisible()
})

test('study notes: math lessons with worked examples, abstract practice with figures', async ({ page }) => {
  await nav(page, 'Study').click()
  await page.getByRole('button', { name: /^Percent/ }).click()
  await expect(page.locator('.wex').first()).toBeVisible()
  await page.getByRole('button', { name: 'Mark as read' }).click()
  await page.getByRole('button', { name: 'Next topic' }).click()
  await page.getByRole('button', { name: 'Back' }).click()
  await page.getByRole('button', { name: /Abstract reasoning/ }).click()
  await page.getByRole('button', { name: /Practice abstract reasoning/ }).click()
  await expect(page.locator('.figopts svg.fig').first()).toBeVisible()
  await page.locator('.opt').first().click()
  await expect(page.locator('.fb')).toBeVisible()
  await page.getByRole('button', { name: 'Exit' }).click()
  await dialog(page).getByRole('button', { name: 'Leave' }).click()
})

test('sessions, backup controls, detail filters and delete', async ({ page }) => {
  await page.getByRole('button', { name: 'Play' }).click()
  await answerAll(page)
  await page.getByRole('button', { name: 'Back to home' }).click()
  await nav(page, 'Sessions').click()
  await expect(page.getByText('Saved exams')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Back up to a file' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Restore from file' })).toBeVisible()
  await page.locator('.slist button').first().click()
  await expect(page.getByRole('button', { name: 'Share this result' })).toBeVisible()
  await page.getByRole('button', { name: /^Correct \(/ }).click()
  await page.getByRole('button', { name: 'Delete this session' }).click()
  await dialog(page).getByRole('button', { name: 'Delete' }).click()
  await expect(page.getByText('Saved exams')).toBeVisible()
})

test('about: disclaimer, developer credit, donate, updates', async ({ page }) => {
  await nav(page, 'About').click()
  await expect(page.getByText('Disclaimer')).toBeVisible()
  await expect(page.getByText(/not affiliated with, endorsed by/)).toBeVisible()
  await expect(page.getByText('Developed by Norell Mantilla')).toBeVisible()
  await expect(page.locator('a[href="https://linkedin.com/in/nrldcm"]').first()).toBeVisible()
  await expect(page.getByText('0910 227 1670')).toBeVisible()
  await page.getByRole('tab', { name: 'PayPal' }).click()
  await expect(page.locator('a[href="https://paypal.me/nrldcm"]')).toBeVisible()
  await expect(page.getByText('App version and updates')).toBeVisible()
})
