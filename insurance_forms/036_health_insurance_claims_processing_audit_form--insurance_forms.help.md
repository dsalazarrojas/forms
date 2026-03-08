# Health Insurance Claims Processing Audit Form - Help Guide
## Purpose
This form is used to collect information about insurance claims submitted for processing. It helps in tracking and managing the claims processing workflow.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the `Form Title` field with a brief description of the claim.
2. Select the relevant `Category` of the claim (e.g., Insurance Forms, Health Insurance, Financial).
3. Provide a detailed `Description` of the claim.
4. Specify the `Assigned Tool` used for processing the claim.
5. Enter the `Form ID` (if applicable).
6. Attach the `Form File` related to the claim.
7. Enter the `Submitted Date` when the claim was submitted.
8. Specify the `Submitter` who submitted the claim.
9. Select the `Submitted By` team or user who submitted the claim (e.g., Insurance Teams, Administrators, Users).
10. Choose the `Review Outcome` of the claim (e.g., Passed, Failed, Pending).
11. Add any additional `Notes` related to the claim.
12. Select the `Submission Status` of the claim (e.g., Approved, Rejected, Pending).
13. Enter the `Submitted Count` of claims submitted.
14. Enter the `Updated Count` of claims updated.

## Field-by-Field Explanation
* **Form Title** (`form_title`, text, required: false): Enter a brief description of the claim.
* **Category** (`category`, select_one, required: false): Select the category of the claim (e.g., Insurance Forms, Health Insurance, Financial).
* **Description** (`description`, text, required: false): Provide a detailed description of the claim.
* **Assigned Tool** (`assigned_tool`, text, required: false): Specify the tool used for processing the claim.
* **Form ID** (`form_id`, number, required: false): Enter the form ID (if applicable).
* **Form File** (`form_file`, text, required: false): Attach the relevant file related to the claim.
* **Submitted Date** (`submitted_date`, date, required: false): Enter the date the claim was submitted.
* **Submitter** (`submitter`, text, required: false): Specify the person who submitted the claim.
* **Submitted By** (`submitted_by`, select_multiple, required: false): Select the team or user who submitted the claim (e.g., Insurance Teams, Administrators, Users).
* **Review Outcome** (`review_outcome`, select_one, required: false): Choose the review outcome of the claim (e.g., Passed, Failed, Pending).
* **Notes** (`notes`, note, required: false): Add any additional notes related to the claim.
* **Submission Status** (`submission_status`, select_one, required: false): Select the submission status of the claim (e.g., Approved, Rejected, Pending).
* **Submitted Count** (`submitted_count`, number, required: false): Enter the count of submitted claims.
* **Updated Count** (`updated_count`, number, required: false): Enter the count of updated claims.
