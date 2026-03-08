# Covid Contact Tracing Form Template - Help Guide
## Purpose
The Covid Contact Tracing Form Template is designed to gather relevant information from patients about their contact details and exposure to potential Covid-19 cases. This form is intended for healthcare professionals to collect accurate and timely data to track and manage Covid-19 outbreaks.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with the patient's contact and exposure details.
2. Select "Yes" or "No" for each contact in the contact list.
3. Enter the names of contacts with "Yes" selected.
4. Enter the email and phone numbers of contacts with "Yes" selected (if applicable).
5. Enter the date of contact (if applicable).

## Field-by-Field Explanation

* **Contact Tracing Form** (`contact_tracing_form`, text, required: false)
	+ This is the main section of the form where you can enter the patient's contact and exposure details.
* **Patient Details** (`patient_details`, text, required: true)
	+ This section is used to enter the patient's details. This information is mandatory.
* **Contact Details** (`contact_details`, text, required: true)
	+ Enter the details of the contact you're tracing.
* **Exposure Details** (`exposure_details`, text, required: true)
	+ Describe the circumstances of the exposure.
* **Contact List** (`contact_list`, select_multiple, required: true)
	+ Select "Yes" for each contact that has been exposed to Covid-19.
* **Names** (`contact_list_name`, text, required: false)
	+ Enter the names of contacts with "Yes" selected.
* **Emails** (`contact_list_email`, text, required: false)
	+ Enter the email addresses of contacts with "Yes" selected.
* **Phones** (`contact_list_phone`, text, required: false)
	+ Enter the phone numbers of contacts with "Yes" selected.
* **Date** (`contact_list_date`, date, required: false)
	+ Enter the date of contact (if applicable).

## Tips
- Make sure to enter accurate and complete information for all fields.
- Select "Yes" for all contacts that have been exposed to Covid-19.
- Use the provided fields to enter all relevant contact information (names, emails, phones, dates).
- Review the form carefully before submitting to ensure accuracy.
