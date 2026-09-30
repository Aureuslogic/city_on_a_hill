# City on a Hill: Growth Partner application form

Developer brief. Please read this first.

## Website integration status

The live form is on the main City on a Hill site at:

- Application: `/apply/` (`source/public/apply/index.html`)
- Thank you: `/apply/thanks.html` (`source/public/apply/thanks.html`)

Field names are unchanged so submissions still map to `data/field-dictionary.csv` and the tracker.

Privacy notice links to `/data-protection`. Netlify form attributes are kept (`growth-partner-application`).

## What this is

A public application form that prospective Growth Partners complete themselves. It captures their contact details (name, role, email, phone), their business details, and their answers to six sections of questions (A to F). City on a Hill staff review each submission and score it in the tracker spreadsheet.

The form is plain HTML and CSS with no JavaScript framework. It works on any site.

## What is in this pack

| Folder | Contents |
|---|---|
| `../source/public/apply/` | Live form and thank-you page on the website |
| `data/` | `field-dictionary.csv`: every field name, question, type, required flag, allowed values and tracker mapping |
| `reference/` | Qualification guide (Word), tracker (Excel), dashboard to share (Excel and PNG). For context only, not for the website |
| `alternative/` | Google Apps Script that builds the same form as a Google Form, if hosting is not possible |

## After deploy (Netlify)

1. Confirm Netlify detects the form named `growth-partner-application`.
2. Under Forms → Form notifications, add an email notification to Sam.
3. Submit a test application and check Forms + email.

## Requirements

1. **Validation on the server as well as the browser.** Required fields, a valid email, and a phone number matching `^\+?[0-9 ()]{10,20}$`. Browser validation alone can be bypassed.
2. **Spam protection.** Keep the honeypot. Add a rate limit or a privacy-friendly challenge if spam appears.
3. **Notification email to Sam** for each submission. Include: business name, full name, role, email, phone, turnover band, Christian-led answer, and a link to the full submission.
4. **Personal data (UK GDPR).**
   * Store submissions where access is restricted to City on a Hill staff.
   * Do not send form contents to analytics or marketing tools.
   * Privacy notice: `/data-protection`.
   * Agree a retention period with Sam for unsuccessful applications.
   * The page loads fonts from Google Fonts, which shares visitor IP addresses with Google. Self-hosting the two fonts avoids this.
5. **HTTPS only.**
6. **Export.** Sam needs submissions as CSV or a spreadsheet so they can be scored in the tracker.

## Design

Match the colours to the live website if they differ. Current values:

| Token | Hex | Use |
|---|---|---|
| Night | `#16213A` | Header background |
| Navy | `#1F2A44` | Headings, buttons, selected states |
| Gold | `#C9A24B` | Section letters, focus rings, hill line |
| Lamp | `#E7C66E` | The light on the hill |
| Paper | `#FBFAF7` | Page background |

Fonts: Cormorant Garamond (headings), Source Sans 3 (body). Responsive down to 320px. Visible keyboard focus. The single animation respects reduced-motion settings.

## Test before launch

1. Submit with everything blank: every required field should block.
2. Enter an invalid email and a short phone number: both should be rejected.
3. Fill the hidden `bot-field` manually: the submission should be discarded.
4. Submit a complete, valid application: check the thank-you page, the stored record and the notification email.
5. Test on a phone, and using the keyboard only.
6. Export the submissions and check every column in `data/field-dictionary.csv` is present.
