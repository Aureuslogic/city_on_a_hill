/**
 * City on a Hill | Growth Partner Application Form
 *
 * Builds a Google Form that prospects complete themselves, plus a linked
 * Google Sheet for responses, and emails you each time someone applies.
 *
 * SETUP (about 3 minutes)
 * 1. Go to script.google.com and click New project.
 * 2. Delete the sample code, paste in this whole file, and click Save.
 * 3. Choose buildForm from the function list at the top, then click Run.
 * 4. Approve the permissions Google asks for (it is your own script).
 * 5. Open View > Logs (or Execution log). Copy the SHARE LINK and send it to prospects.
 *
 * Run it once only. Running it again creates a second form.
 */

const FORM_TITLE = 'City on a Hill | Growth Partner Application';

function buildForm() {
  const form = FormApp.create(FORM_TITLE);
  form.setDescription(
    'Thank you for your interest in partnering with City on a Hill.\n\n' +
    'We work with established, Christian-led businesses that are ready to grow. ' +
    'This form takes about 15 minutes. There are no documents to upload.\n\n' +
    'Please answer honestly. Clear answers help us serve you well.'
  );
  form.setProgressBar(true);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(
    'Thank you. Your application has been received. We will review it and contact you with next steps.'
  );

  // ---------- Your details ----------
  form.addSectionHeaderItem().setTitle('Your details');

  form.addTextItem().setTitle('Full name').setRequired(true);
  form.addTextItem().setTitle('Your role in the business').setRequired(true);

  form.addTextItem()
    .setTitle('Email address')
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .setHelpText('Please enter a valid email address.')
      .requireTextIsEmail()
      .build());

  form.addTextItem()
    .setTitle('Phone number')
    .setHelpText('Include your country code if outside the UK, for example +234.')
    .setRequired(true)
    .setValidation(FormApp.createTextValidation()
      .setHelpText('Please enter a phone number of 10 to 15 digits.')
      .requireTextMatchesPattern('^\\+?[0-9 ()]{10,20}$')
      .build());

  form.addTextItem().setTitle('Registered business name').setRequired(true);
  form.addTextItem().setTitle('Trading name, if different').setRequired(false);
  form.addTextItem()
    .setTitle('Company or charity registration number')
    .setHelpText('Leave blank if you are a sole trader.')
    .setRequired(false);
  form.addTextItem()
    .setTitle('Website or public business page')
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('How we use your details')
    .setHelpText('We use your name, email and phone number only to assess this application and to contact you about it.')
    .setChoiceValues(['I agree to City on a Hill storing my details for this purpose.'])
    .setRequired(true);

  // ---------- A. Your business ----------
  form.addPageBreakItem().setTitle('A. Your business');

  form.addTextItem().setTitle('Who owns the business?').setRequired(true);
  form.addTextItem()
    .setTitle('When did you start trading?')
    .setHelpText('Month and year, for example March 2021.')
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('How many paying customers have you served in the last 12 months?')
    .setChoiceValues(['None yet', '1 to 10', '11 to 50', '51 to 250', 'Over 250'])
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('Tell us about your three most recent customers. What did they buy, and how did they pay?')
    .setHelpText('No names needed. For example: "A local school, a website build, paid by invoice."')
    .setRequired(true);

  // ---------- B. Turnover ----------
  form.addPageBreakItem().setTitle('B. Turnover');

  form.addMultipleChoiceItem()
    .setTitle('Which band was your turnover in the last full 12 months?')
    .setChoiceValues(['Under £50k', '£50k to £250k', '£250k to £1m', '£1m to £5m', 'Over £5m'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Roughly what share of your revenue comes from repeat customers?')
    .setChoiceValues(['Under 25%', '25% to 50%', '50% to 75%', 'Over 75%', 'Not sure'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Who prepares your accounts?')
    .setChoiceValues(['An accountant', 'A bookkeeper', 'I do', 'No one yet'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('Are your company, tax and statutory filings up to date?')
    .setChoiceValues(['Yes', 'No', 'Not yet due'])
    .setRequired(true);

  // ---------- C. Leadership ----------
  form.addPageBreakItem().setTitle('C. Leadership');

  form.addParagraphTextItem()
    .setTitle('Apart from you, who makes decisions in the business?')
    .setHelpText('Their role and what they decide. Write "Only me" if that is the case.')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('If you were away for two weeks, what would keep running, and who would run it?')
    .setRequired(true);
  form.addGridItem()
    .setTitle('Who owns each of these areas?')
    .setRows(['Sales', 'Delivery', 'Finance'])
    .setColumns(['Me', 'Another team member', 'Outsourced', 'No one yet'])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('How often does your leadership team meet?')
    .setChoiceValues(['Weekly', 'Fortnightly', 'Monthly', 'Rarely', 'We do not meet'])
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('What did you decide at your last leadership meeting?')
    .setRequired(false);

  // ---------- D. Growth ----------
  form.addPageBreakItem().setTitle('D. Growth');

  form.addParagraphTextItem()
    .setTitle('Where do you want the business to be in 12 months? Please use numbers.')
    .setHelpText('For example revenue, customers or team size.')
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle('What have you invested in growth in the last six months?')
    .setChoiceValues(['A new hire', 'Marketing spend', 'A new system or software', 'Training or coaching', 'Nothing yet'])
    .showOtherOption(true)
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('What is the main thing stopping you getting there today?')
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('What happens if nothing changes in the next 12 months?')
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle('If you found the right support, when would you want to start?')
    .setChoiceValues(['Within 30 days', 'Within 3 months', 'Within 6 months', 'Not sure yet'])
    .setRequired(true);
  form.addTextItem()
    .setTitle('Who else would need to agree before you start?')
    .setHelpText('Write "No one" if the decision is yours alone.')
    .setRequired(true);

  // ---------- E. Kingdom alignment ----------
  form.addPageBreakItem().setTitle('E. Kingdom alignment');

  form.addMultipleChoiceItem()
    .setTitle('Are you a Christian-led business?')
    .setHelpText('Owned or led by a Christian who holds real responsibility for its direction.')
    .setChoiceValues(['Yes', 'No'])
    .setRequired(true);
  form.addTextItem()
    .setTitle('If yes, who is that leader, and what is their role?')
    .setRequired(false);
  form.addMultipleChoiceItem()
    .setTitle('Are you mindful to meet and add value to other Christian businesses?')
    .setChoiceValues([
      'Yes, and I can give a recent example',
      'Yes, but I have no example yet',
      'Not currently a priority'
    ])
    .setRequired(true);
  form.addParagraphTextItem()
    .setTitle('If you have a recent example, please share it.')
    .setRequired(false);

  // ---------- F. Policies and cover ----------
  form.addPageBreakItem().setTitle('F. Policies and cover')
    .setHelpText('Tell us what is in place today. "In progress" is a fine answer.');
  form.addMultipleChoiceItem().setTitle('Do you have public liability insurance?')
    .setChoiceValues(['Yes', 'No', 'In progress', 'Not applicable to my business']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Do you have a written GDPR (data protection) policy or privacy notice?')
    .setChoiceValues(['Yes', 'No', 'In progress']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Do you have a written refund policy for customers?')
    .setChoiceValues(['Yes', 'No', 'In progress', 'Not applicable to my business']).setRequired(true);
  form.addTextItem().setTitle('Anything you would like to add about these?')
    .setHelpText('For example, your insurer, or where your policies are published.').setRequired(false);

  // ---------- Declaration ----------
  form.addPageBreakItem().setTitle('Declaration');
  form.addCheckboxItem()
    .setTitle('Please confirm')
    .setChoiceValues(['The information I have given is accurate and complete to the best of my knowledge.'])
    .setRequired(true);

  // ---------- Response sheet ----------
  const sheet = SpreadsheetApp.create(FORM_TITLE + ' (Responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  // Make sure the form accepts responses (newer Google Forms setting).
  try { form.setPublished(true); } catch (err) { /* older accounts: already published */ }

  // Email you whenever someone applies.
  ScriptApp.newTrigger('notifyNewApplication').forForm(form).onFormSubmit().create();
  PropertiesService.getScriptProperties().setProperty('SHEET_URL', sheet.getUrl());

  const shareLink = form.shortenFormUrl(form.getPublishedUrl());
  Logger.log('SHARE LINK (send to prospects): ' + shareLink);
  Logger.log('EDIT THE FORM: ' + form.getEditUrl());
  Logger.log('RESPONSES SHEET: ' + sheet.getUrl());
}

function notifyNewApplication(e) {
  const answers = {};
  e.response.getItemResponses().forEach(function (r) {
    answers[r.getItem().getTitle()] = r.getResponse();
  });
  const to = Session.getEffectiveUser().getEmail();
  const business = answers['Registered business name'] || 'Unknown business';
  const body =
    'New Growth Partner application\n\n' +
    'Business: ' + business + '\n' +
    'Name: ' + (answers['Full name'] || '') + '\n' +
    'Role: ' + (answers['Your role in the business'] || '') + '\n' +
    'Email: ' + (answers['Email address'] || '') + '\n' +
    'Phone: ' + (answers['Phone number'] || '') + '\n' +
    'Turnover band: ' + (answers['Which band was your turnover in the last full 12 months?'] || '') + '\n' +
    'Christian-led: ' + (answers['Are you a Christian-led business?'] || '') + '\n\n' +
    'Full responses: ' + PropertiesService.getScriptProperties().getProperty('SHEET_URL');
  MailApp.sendEmail(to, 'New application: ' + business, body);
}
