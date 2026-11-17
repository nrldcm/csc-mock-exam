import { BANK } from '../data/bank.js'
import { NOTES } from '../data/notes.js'
import { DEVELOPER, Icon, LINKEDIN, Masthead } from './common.jsx'

export default function About() {
  return (
    <>
      <Masthead title="About this app" sub="CSC Mock Exam and Reviewer" />
      <main className="wrap has-nav narrow" id="main">
        <div className="disclaimer card" role="note">
          <b>Disclaimer</b>
          <p style={{ margin: '6px 0 0' }}>
            This app is an independent study aid for the Philippine Civil Service Commission (CSC) Career Service Examination,
            Professional and Subprofessional levels. It is <b>not affiliated with, endorsed by, or connected to the Civil Service Commission</b> or
            any government agency.
          </p>
          <p style={{ margin: '8px 0 0' }}>
            All questions are original practice items written to match the published exam coverage. They are <b>not actual exam questions</b>.
            Scores in this app do not predict or guarantee your result in the actual examination.
          </p>
          <p style={{ margin: '8px 0 0' }}>
            Laws and facts are summarized for review and may change. Always check exam schedules, requirements and rules on the official CSC
            website, and refer to the full text of the laws for exact provisions.
          </p>
        </div>

        <div className="card">
          <h2>What’s inside</h2>
          <ul style={{ margin: '6px 0 0', paddingLeft: 20 }}>
            <li>{BANK.length} written items with explanations, plus unlimited generated practice items</li>
            <li>{NOTES.length} study note topics covering verbal, numerical, analytical, clerical and general information</li>
            <li>Realistic mock exams: 170 items for Professional, 165 for Subprofessional, timed like the real exam</li>
            <li>Practice modes, weakest-subject drills, daily trivia, streaks and achievements</li>
            <li>Works offline after the first visit and can be installed on your phone or tablet</li>
          </ul>
        </div>

        <div className="card">
          <h2>Your data and privacy</h2>
          <p className="sub" style={{ margin: 0 }}>
            Everything you do in this app (sessions, answers, points, the name you type) is saved only on this device. There are no accounts,
            no tracking and nothing is sent to a server. Use <b>My sessions → Back up to a file</b> to keep a copy or move it to another device.
          </p>
        </div>

        <div className="card">
          <h2>Install on your phone or tablet</h2>
          <ul style={{ margin: '6px 0 0', paddingLeft: 20 }}>
            <li><b>Android (Chrome):</b> open the menu (⋮) and tap <i>Install app</i> or <i>Add to Home screen</i>.</li>
            <li><b>iPhone or iPad (Safari):</b> tap Share, then <i>Add to Home Screen</i>.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Developer</h2>
          <div className="dev" style={{ marginTop: 8 }}>
            <div className="av" aria-hidden="true">NM</div>
            <div>
              <b>Developed by {DEVELOPER}</b>
              <div><a className="linkbtn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn: linkedin.com/in/nrldcm <Icon.link /></a></div>
            </div>
          </div>
        </div>
        <p className="foot">Version 1.0</p>
      </main>
    </>
  )
}
