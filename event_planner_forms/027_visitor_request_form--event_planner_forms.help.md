# Visitor Request Form - Help Guide
## Purpose
The Visitor Request Form is designed to collect information about visitors who wish to visit the organization. This form will be used to gather details such as the visitor's contact information and purpose of visit.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields as indicated by the label.
2. Choose the visit purpose and type from the select boxes.
3. Enter any additional information or comments in the "Note" field.
4. Review your submission before clicking the submit button to ensure all fields are accurate and complete.

## Field-by-Field Explanation
* **User Info** (`user_info`, `text`, optional): Enter the name of the visitor and any other relevant personal details.
* **Contact Info** (`contact_info`, `text`, optional): Enter the visitor's contact information, including name and phone number.
* **Visit Date** (`visit_date`, `date`, optional): Select the date the visitor wishes to visit the organization.
* **Visit Time** (`visit_time`, `time`, optional): Select the time the visitor wishes to visit the organization.
* **Contact Person** (`contact_person`, `text`, optional): If there is a specific person the visitor would like to meet with, enter their name.
* **Contact Phone** (`contact_phone`, `text`, optional): Enter the phone number of the contact person.
* **Visit Purpose** (`visit_purpose`, `select_one`, optional): Choose the purpose of the visit from the options provided:
	+ Meeting
	+ Tour
	+ Meeting and Tour
	+ Other
* **Visit Type** (`visit_type`, `select_multiple`, optional): Choose the type of visit from the options provided:
	+ Event
	+ Tour
	+ Meeting
* **Note** (`note`, `note`, optional): Enter any additional information or comments about the visit.
