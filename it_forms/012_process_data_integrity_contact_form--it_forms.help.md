<thinking>
This form is used to collect contact information and classify the urgency of data integrity issues that require staff attention. This form is meant for internal use only and is not intended for general public submission. 
The form will be used by IT, Quality, and Governance teams to track and address data integrity concerns.
</thinking>

# process_data_integrity_contact_form - Help Guide
## Purpose
The purpose of this form is to provide a centralized platform for staff to report and track data integrity concerns. This form will help ensure that issues are addressed in a timely and efficient manner.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the type of data integrity concern you are reporting (e.g., High, Medium, Low).
2. Provide a brief description of the concern (in the "comments" field).
3. If applicable, attach any supporting files related to the concern.
4. Select the teams to which the concern should be escalated (e.g., IT, Quality, Governance).
5. Enter your contact information (email and phone number).

## Field-by-Field Explanation
* **Data Integrity Concern** (`data_integrity_concern`, note, required: false): Describe the data integrity concern that requires staff attention.
* **Classify Urgency** (`classify_urgency`, select_one, required: false): Classify the urgency of the concern as High, Medium, or Low.
* **Share Details** (`share_details`, text, required: false): Provide a brief description of the concern (optional).
* **Staff Name** (`staff_name`, text, required: false): Enter your name for contact purposes.
* **Contact Email** (`contact_email`, email, required: false): Enter your email address for contact purposes.
* **Contact Phone** (`contact_phone`, text, required: false): Enter your phone number for contact purposes.
* **Team** (`team`, select_multiple, required: false): Select the teams that should be notified of the concern (e.g., IT, Quality, Governance).
* **Comments** (`comments`, text, required: false): Provide any additional comments or details regarding the concern.
* **Report Type** (`report_type`, select_one, required: false): Classify the type of report as High, Medium, or Low.
* **Report Reason** (`report_reason`, select_multiple, required: false): Check off the reasons why this concern requires attention (e.g., Yes, No).
* **Supporting Files** (`supporting_files`, text, required: false): Attach any files related to the concern.
* **Urgency** (`report_type`, select_one, required: false): Classify the urgency of the concern.
 

Note: Please ensure that all fields are optional unless marked as required.
