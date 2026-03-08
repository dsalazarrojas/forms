# Virtual Consult - Help Guide
## Purpose
The Virtual Consult form is designed to gather information for a virtual consultation, allowing users to schedule and prepare for an online appointment with a healthcare professional.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "name" field.
2. Enter your email address in the "email" field.
3. Confirm your email address in the "email confirmation" field (this is to ensure the email address you provided is correct).
4. Select your email type (Business or Personal) in the "email type" dropdown menu.
5. Enter any additional notes about your schedule preferences in the "schedule a virtual consult" field.
6. If you want to schedule a virtual consultation, select a date and time in the "schedule virtual consult date" and "schedule virtual consult time" fields, respectively.
7. Choose the duration of the virtual consultation in the "schedule virtual consult duration" field.

## Field-by-Field Explanation
* **Virtual Consult Form Data**: 
  * (`virtual_consult_form_data`, text, required: false)
  This field is not used in this form and should be ignored.
* **name**:
  * (`name`, text, required: false)
  Enter your full name as it appears on your identification.
* **email**:
  * (`email`, email, required: false)
  Enter your email address, ensuring it's accurate and up-to-date.
* **email confirmation**:
  * (`email confirmation`, email, required: false)
  Re-enter your email address to confirm it's correct.
* **email type**:
  * (`email type`, select_one, required: true)
  Select whether your email address is for business or personal use.
* **phone**:
  * (`phone`, text, required: false)
  This field is not currently used in the form and should be ignored.
* **schedule a virtual consult**:
  * (`schedule_virtual_consult`, note, required: false)
  Enter any additional notes about your schedule preferences.
* **schedule virtual consult date**:
  * (`schedule_virtual_consult_date`, date, required: false)
  Select a date for the virtual consultation.
* **schedule virtual consult time**:
  * (`schedule_virtual_consult_time`, time, required: false)
  Select a time for the virtual consultation.
* **schedule virtual consult duration**:
  * (`schedule_virtual_consult_duration`, number, required: false)
  Choose the duration of the virtual consultation.

## Tips
- Ensure your email address is accurate and up-to-date.
- Be clear about your schedule preferences to ensure a smooth consultation process.
