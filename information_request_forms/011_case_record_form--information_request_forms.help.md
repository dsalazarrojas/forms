# Case Record Form - Help Guide
## Purpose
The Case Record Form is used by case workers or coordinators to collect and manage essential information about a case. This form helps track and update case details, ensuring that all relevant information is accurately recorded and easily accessible.

## How To Complete This Form
To complete the Case Record Form, follow these steps:

1. Ensure you are familiar with the case and its background.
2. Enter the case number in the "Record Number" field (required).
3. Enter the record date in the "Record Date" field (required).
4. Fill out the participant information section, including their full name, date of birth, age, and gender (all required).
5. Enter the participant's contact phone number and email address (both required).
6. Record the participant's primary address (required).
7. Select the type of case (e.g., Medical, Social Services, Legal, etc.) (required).
8. Enter the case opened date (required).
9. If applicable, enter the referring agency or organization.
10. Select the assigned case worker or coordinator (required).
11. Provide a brief summary of the case history (if relevant).
12. Indicate if the participant has had previous cases or records (required).
13. Select the current case status (e.g., Active, On Hold, Under Review, etc.) (required).
14. Enter the last contact date (if applicable).
15. Record any progress notes and updates (if applicable).
16. Set the next scheduled review date (if applicable).

## Field-by-Field Explanation

* **Record Number** (`record_number`, text, required): Enter the unique case identifier.
* **Record Date** (`record_date`, date, required): Enter the date the case was opened.
* **Full Name** (`full_name`, text, required): Enter the participant's legal name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the participant's date of birth in MM/DD/YYYY format.
* **Age** (`age`, number, required): Enter the participant's age.
* **Gender** (`gender`, select_one, required): Select the participant's gender from the available options (Male, Female, Non-binary, Prefer to Specify, Prefer not to answer).
* **Phone Number** (`contact_phone`, text, required): Enter the participant's contact phone number.
* **Email Address** (`contact_email`, email, optional): Enter the participant's email address (if available).
* **Primary Address** (`primary_address`, text, required): Enter the participant's full street address.
* **Type of Case** (`case_type`, select_one, required): Select the type of case (e.g., Medical, Social Services, Legal, etc.).
* **Case Opened Date** (`case_opened_date`, date, required): Enter the date the case was opened.
* **Referring Agency** (`referring_agency`, text, optional): Enter the referring agency or organization (if applicable).
* **Assigned Case Worker** (`assigned_worker`, text, required): Select the assigned case worker or coordinator.
* **Case History** (`background_information`, text, required): Provide a brief summary of the case history.
* **Previous Cases** (`previous_cases`, select_one, required): Indicate if the participant has had previous cases or records.
* **Current Case Status** (`current_case_status`, select_one, required): Select the current case status (e.g., Active, On Hold, Under Review, etc.).
* **Last Contact Date** (`last_contact_date`, date, optional): Enter the last contact date (if applicable).
* **Progress Notes** (`progress_notes`, text, optional): Record any progress notes and updates.
* **Next Scheduled Review Date** (`next_review_date`, date, optional): Set the next scheduled review date (if applicable).
