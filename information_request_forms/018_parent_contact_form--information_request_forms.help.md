# Parent Contact Form - Help Guide
## Purpose
The Parent Contact Form is designed to collect information from parents or legal guardians to schedule a contact or meeting.

## How To Complete This Form
To complete this form, simply follow the steps below:
1. Fill out your name and contact information.
2. Provide a brief reason for your contact.
3. Fill out your contact information, including email and phone number.
4. Select a preferred date and time for the contact.
5. Add any additional comments or notes you'd like to share.
6. Finally, select the reason for your contact from the provided options, or choose "Other" if it's not listed.

## Field-by-Field Explanation

* **Parent Name** (`parent_name`, text, required): Please enter your name as it appears on your ID or identification documents.
* **Contact Reason** (`contact_reason`, text, optional): Provide a brief description of the reason for your contact.
* **Email Address** (`email_address`, email, optional): Enter your email address for us to reach you.
* **Phone Number** (`phone_number`, text, optional): Enter your phone number so we can call you at your preferred time.
* **Date** (`date`, date, optional): Select a date for the contact. Please note that we will try to accommodate your preferred date.
* **Time** (`time`, time, optional): Select a time for the contact. Please note that we will try to accommodate your preferred time.
* **Note** (`note`, note, optional): Add any additional comments or notes you'd like to share with us.
* **Consent** (`parent_contact_form_consent`, select_one, required): Please select one of the provided options:
	+ Parent Contact Form: This is the correct reason for your contact.
	+ Other: Select this option if your reason is not listed above.
