# it_support_check_in_form - Help Guide
## Purpose
This form is used for IT support check-in purposes, gathering information from users about their IT-related issues or questions.

## How To Complete This Form
To complete this form, follow these steps:
1. Review the form fields below and ensure you have all the necessary information to complete them.
2. Fill out the form by providing the required information in the corresponding fields.
3. Make sure to review the fields for any optional information that can be filled out to provide more details about your issue.

## Field-by-Field Explanation
* **User Info** (`user_info`, `text`, required: false): Please enter a brief description of who you are and what issue or question you have. This field is optional.
* **Contact Info** (`contact_info`, `select_multiple`, required: false): If you want to be contacted by the IT team, please select one or more of the options below. You can select multiple options by holding down the Ctrl key while clicking on the options.
	+ Yes: We would like to be contacted by phone.
	+ No: We do not want to be contacted by phone.
	+ Email: We would like to be contacted by email.
	+ Other (please specify): We would like to be contacted by other means (e.g. chat, SMS, etc.).
* **Issue Description** (`issue_description`, `text`, required: false): Please describe your issue or question in detail. This field is optional.
* **Issue Priority** (`issue_priority`, `select_one`, required: false): If you know the urgency level of your issue, you can select from the options below. Note that you do not need to fill out this field if you are not sure of the priority level.
	+ High: The issue is urgent and needs immediate attention.
	+ Medium: The issue is relatively important but not urgent.
	+ Low: The issue is not urgent and can be dealt with in a more relaxed pace.
* **Submit Date** (`submit_date`, `date`, required: false): If you know the date you would like your issue to be resolved, please select it from the calendar below. This field is optional.
* **Resolution** (`resolution`, `note`, required: false): Please provide any additional information about the resolution of your issue. This field is optional.
* **Assigned To** (`assigned_to`, `select_one`, required: false): If you know which IT staff member is assigned to your issue, you can select from the options below. Please note that this field is not always populated.
* **IT Ticket Number** (`it_ticket_number`, `number`, required: false): If you were assigned a ticket number for your issue, please enter it below. This field is optional.

## Tips
* Please fill out the form as accurately and thoroughly as possible to ensure the IT team can better understand and assist with your issue.
* If you are unsure of any field, please do not hesitate to ask the IT team for clarification.
* Please note that the IT team will follow up with you to discuss the status of your issue.
