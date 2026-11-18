/* Donation options shown in the app (About screen and Home).
   The Donate section stays hidden until at least one method is filled in.

   Method fields:
     label   - shown on the button/tab, e.g. 'GCash'
     num     - account/mobile number, ENCODED so it never appears as plain text in the page or source:
               base64 of the digits written backwards. Make one with:
               node -e "console.log(Buffer.from('09XXXXXXXXX'.split('').reverse().join('')).toString('base64'))"
               The page shows only a masked form (0910 ••• ••70); the Copy button copies the full number.
     name    - account name shown under the number
     qr      - optional QR image placed in /public, e.g. 'donate/gcash-qr.png'
     url     - for link-based methods (PayPal.me, GitHub Sponsors) */
export const DONATE = {
  message: 'This reviewer is free for everyone. If it helped you prepare, you can support its development and the cost of keeping it updated.',
  methods: [
    { label: 'GCash', num: 'MDc2MTcyMjAxOTA=', name: 'Norell Mantilla' },
    { label: 'Maya', num: 'MDc2MTcyMjAxOTA=', name: 'Norell Mantilla' },
    { label: 'PayPal', url: 'https://paypal.me/nrldcm' },
    { label: 'GitHub Sponsors', url: 'https://github.com/sponsors/nrldcm' }
    // Add a QR image: put it in public/donate/ and set qr: 'donate/gcash-qr.png'
  ]
}

/* Decode only when copying */
export const revealNumber = enc => {
  try { return atob(enc).split('').reverse().join('') } catch { return '' }
}
/* What the page shows: first 4 and last 2 digits */
export const maskNumber = enc => {
  const n = revealNumber(enc)
  return n.length >= 7 ? `${n.slice(0, 4)} ••• ••${n.slice(-2)}` : '•••'
}
