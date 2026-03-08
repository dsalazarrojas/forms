# healthcare_billing_issue_report_form - Help Guide
## Purpose
The healthcare billing issue report form is used for patients to report any issues they're experiencing with their healthcare billing. This helps the healthcare provider to quickly identify and resolve the issue.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name as it appears on your records.
2. Provide the date of service associated with the issue you're reporting.
3. Briefly describe the issue you're experiencing with your billing.
4. Select how you'd like to be contacted to discuss the issue (email, phone, or chat).
5. If you have a specific issue status, please select it from the dropdown menu.
6. If you have a healthcare provider that you'd like to report the issue to, please enter their name.
7. Finally, submit the form to report the issue.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter your name as it appears on your records.
* **Date of Service** (`date_of_service`, date, required): The date when the service was provided that's causing the issue.
* **Billing Issue** (`billing_issue`, text, required): Briefly describe the issue you're experiencing with your billing.
* **Contact Preferences** (`contact_preferences`, select_multiple, required): Select how you'd like to be contacted to discuss the issue: Contact us by email, Contact us by phone, or Contact us through chat.
* **Email** (`email`, email, optional): If you have a preferred email address to contact you, enter it here. (Note: This field is optional, but if you do not provide a valid email, we may not be able to contact you.)
* **Phone** (`phone`, text, optional): If you have a preferred phone number to contact you, enter it here. (Note: This field is optional, but if you do not provide a valid phone number, we may not be able to contact you.)
* **Issue Status** (`issue_status`, select_one, required): Select the status of the issue you're experiencing: New, In Progress, or Resolved.
* **Healthcare Provider** (`healthcare_provider`, text, optional): If you have a specific healthcare provider you'd like to report the issue to, enter their name. (Note: This field is optional, but if you do not provide a healthcare provider, we will contact you to determine who to contact.)
* **Issue Description** (`issue_description`, text, required): Describe the issue you're experiencing with your billing in as much detail as possible.
* **Document Upload** (`document_upload`, text, required): If you have any relevant documents or images to support your issue, upload them here. (Note: This field is required, but if you do not have any documents, you can leave it blank.)
* **Document Upload** (Note: This field was not included in the original YAML, but I've kept it as it is in the original form)

## Tips

* Please make sure to provide as much detail as possible in the Issue Description field, as this will help us to quickly understand and resolve your issue.
* If you're experiencing multiple issues with your billing, please submit one report for each issue.
* If you have any other questions or concerns, feel free to contact us after submitting this report.
