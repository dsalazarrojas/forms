# timesheet_dispute_review_request_form - Help Guide
## Purpose
The timesheet dispute review request form is used to document and manage employee timesheet disputes. This form ensures that any discrepancies or errors are addressed and resolved in a fair and timely manner.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the Employee field and enter the employee's name.
2. Enter the Start Date and End Date of the disputed period.
3. Provide a brief Reason for Dispute and detailed Dispute Details.
4. If necessary, attach supporting documents to provide evidence.
5. Select the Manager Review option for the manager who will review your dispute.
6. Enter your Manager Notes and confirm that the manager has reviewed the dispute.
7. Select the Approved By option for the manager who will approve the dispute resolution.
8. Enter the Approved Date and confirm that the resolution is approved.
9. Select the Status option to indicate whether the dispute is Open, Closed, or Pending.
10. Enter the Closed Date, Closed By, and Closed Notes if the dispute has been closed.

## Field-by-Field Explanation

* **Employee** (`employee`, `text`, **required**): Enter the name of the employee who is submitting the dispute.
* **Start Date** (`start_date`, `date`, **required**): Enter the start date of the disputed period.
* **End Date** (`end_date`, `date`, **required**): Enter the end date of the disputed period.
* **Reason for Dispute** (`reason_for_dispute`, `text`, **required**): Provide a brief reason for the dispute.
* **Dispute Details** (`dispute_details`, `text`, **required**): Provide a detailed description of the dispute.
* **Supporting Documents** (`supporting_documents`, `text`, **optional**): Attach supporting documents to help facilitate the resolution process.
* **Submitted By** (`submitted_by`, `text`, **required**): Enter your name and title.
* **Submitted Date** (`submitted_date`, `date`, **required**): Enter the date the form was submitted.
* **Manager Review** (`manager_review`, `select_one`, **required**): Select the manager who will review the dispute.
* **Manager Notes** (`manager_notes`, `text`, **required**): Enter any notes from the manager's review.
* **Submitted By Manager** (`submitted_by_manager`, `text`, **required**): Enter your name and title as the manager.
* **Manager Comments** (`manager_comments`, `text`, **required**): Enter the manager's comments on the dispute resolution.
* **Approved By** (`approved_by`, `select_one`, **required**): Select the manager who approved the resolution.
* **Approved Date** (`approved_date`, `date`, **required**): Enter the date the resolution was approved.
* **Status** (`status`, `select_one`, **required**): Select whether the dispute is Open, Closed, or Pending.
* **Closed Date** (`closed_date`, `date`, **required**): Enter the date the dispute was closed.
* **Closed By** (`closed_by`, `text`, **required**): Enter your name and title as the person closing the dispute.
* **Closed Notes** (`closed_notes`, `text`, **required**): Enter the reason for closing the dispute.
* **Created By** (`created_by`, `text`, **required**): Enter your name and title as the person creating the form.
* **Created Date** (`created_date`, `date`, **required**): Enter the date the form was created.
* **Last Updated By** (`last_updated_by`, `text`, **required**): Enter your name and title as the person last updating the form.
* **Last Updated Date** (`last_updated_date`, `date`, **required**): Enter the date the form was last updated.
* **Last Updated Reason** (`last_updated_reason`, `text`, **required**): Enter the reason for the last update.
* **Last Updated Notes** (`last_updated_notes`, `text`, **required**): Enter any notes from the last update.
* **Timesheet ID** (`timesheet_id`, `text`, **required**): Enter the ID of the timesheet being disputed.
* **Manager Comments** (`manager_comments`, `text`, **required**): Enter the manager's comments on the dispute resolution.
