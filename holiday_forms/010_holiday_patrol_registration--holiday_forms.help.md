# Holiday Patrol Registration - Help Guide
## Purpose
The Holiday Patrol Registration form is used to collect information for holiday patrols, ensuring accurate and efficient management of security and administrative tasks.

## How To Complete This Form
To complete this form correctly, follow these steps:

1. Ensure you have chosen the correct "Category" for the holiday patrol, or select "Holiday Forms" if unsure.
2. Provide a clear and concise "Description" of the holiday patrol.
3. Enter the start and end dates of the holiday patrol in the "Travel Dates Start" and "Travel Dates End" fields.
4. Enter the "Property Owner Name" and "Security Contact Name" for contact and coordination purposes.
5. Choose the correct "Assigned Security Contact" from the dropdown list (if applicable).
6. Enter the "Submit Date" to record when the form is submitted.
7. Enter your name and any "Submitter Comments" in the "Submitted By" field.
8. Add any additional "Travel Dates Note" or "Security Notes" as required.

## Field-by-Field Explanation
* **Holiday Patrol Registration** (`holiday_patrol_registration`, text, required): A brief title for the holiday patrol.
* **Category** (`category`, select_multiple, optional): Choose a category or select "Holiday Forms" for general holiday-related purposes.
* **Description** (`description`, text, optional): A clear and concise description of the holiday patrol.
* **Travel Dates Start** (`travel_dates_start`, date, required): The start date of the holiday patrol.
* **Travel Dates End** (`travel_dates_end`, date, required): The end date of the holiday patrol.
* **Property Owner Name** (`property_owner_name`, text, required): The name of the property owner or manager.
* **Security Contact Name** (`security_contact_name`, text, required): The name of the security contact person.
* **Security Contact Phone** (`security_contact_phone`, text, required): A working phone number for the security contact person.
* **Assigned Security Contact** (`assigned_security_contact`, select_one, optional): Choose the correct security contact from the dropdown list (if applicable).
* **Submit Date** (`submit_date`, date, required): A timestamp indicating when the form is submitted.
* **Submitted By** (`submitted_by`, text, required): Your name and any comments about the submission.
* **Submitter Comments** (`submitter_comments`, text, required): Additional comments about the submission.
* **Travel Dates Note** (`travel_dates_note`, text, required): Any additional travel dates-related information.
* **Security Notes** (`security_notes`, text, required): Additional security-related notes or comments.
