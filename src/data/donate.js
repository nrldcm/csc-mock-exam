/* Donation options shown in the app (About screen and Home).
   The Donate section stays hidden until at least one method is filled in.

   Method fields:
     label   - shown on the button/tab, e.g. 'GCash'
     number  - account or mobile number (shows a Copy button)
     name    - account name shown under the number
     qr      - optional QR image placed in /public, e.g. 'donate/gcash-qr.png'
     url     - for link-based methods (Ko-fi, PayPal.me, GitHub Sponsors) */
export const DONATE = {
  message: 'This reviewer is free for everyone. If it helped you prepare, you can support its development and the cost of keeping it updated.',
  methods: [
    { label: 'GCash', number: '0910 227 1670', name: 'Norell Mantilla' },
    { label: 'Maya', number: '0910 227 1670', name: 'Norell Mantilla' },
    { label: 'PayPal', url: 'https://paypal.me/nrldcm' },
    { label: 'GitHub Sponsors', url: 'https://github.com/sponsors/nrldcm' }
    // Add a QR image: put it in public/donate/ and set qr: 'donate/gcash-qr.png'
  ]
}
