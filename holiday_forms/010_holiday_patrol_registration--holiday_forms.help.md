<thinking>
To provide a user-friendly help guide for the Holiday Patrol Registration form, we need to understand the purpose and requirements of the form. This form is likely used for registering holiday patrols, which involves a series of steps and data collection. It's essential to ensure that users fill out the form correctly to ensure accurate and complete information is collected. 

We can infer that the form is required for security and administrative purposes, and it's crucial to follow the guidelines carefully to avoid duplication or missing critical information. 

Let's assume that the form is used to gather information about holiday patrols, including categories, descriptions, travel dates, property owner details, security contact information, and submission details. Users need to provide accurate and relevant information to ensure the form is completed correctly. 

Before proceeding, let's consider the following: 

* The "Holiday Forms" category might be a subcategory within a larger category system. If users are unsure, they can choose the top-level category "Holiday Forms" for general holiday-related purposes.
* Users might be required to choose between "ChatJimmy" and "Another Security" for the assigned security contact. This could be a hierarchical system where users are assigned to specific contacts based on their holiday patrol roles or locations.
* The "Submit Date" field might be a timestamp, indicating when the form was submitted, not the dates the holiday patrol will take place.
* Users might need to provide a description of the holiday patrol in the "Description" field.
* "Travel Dates Start" and "Travel Dates End" likely refer to the duration of the holiday patrol.
* "Property Owner Name" and "Security Contact Name" are essential for contact and coordination purposes.
* "Security Contact Phone" should be a working phone number.
* "Security Notes" can be used for any additional information or concerns.
</thinking>

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
