# Audit Participation Approval Application - Help Guide
## Purpose
The Audit Participation Approval Application is a form used to request participation in an audit process. This form is submitted by individuals or teams to express their interest in participating in a specific audit.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Ensure all required fields are filled out.
3. Double-check the information before submitting.

## Field-by-Field Explanation
* **Audit Participation Request --** (`section_header`, `note`, false): This is the title of the form section where you can briefly describe the audit participation request.
* **Applicant Name** (`applicant_name`, `text`, true): Enter the full name of the individual requesting participation.
* **Applicant Email** (`applicant_email`, `email`, true): Enter the email address associated with the individual's request.
* **Role or Title** (`role_or_title`, `text`, true): Provide the job title or role within the organization.
* **Audit Name** (`audit_name`, `text`, true): Enter the name or reference of the audit to participate in.
* **Reason for Participation** (`participation_reason`, `text`, true): Explain why participation is requested and expected contributions.
* **Availability Dates** (`availability_dates`, `text`, false): Enter the dates or date range the individual is available.
* **Manager Approval Required** (`manager_approval_required`, `select_one`, true): Choose whether direct manager approval is required for this participation.
* **Manager Approval Status** (this field is not present in the yaml, but likely a checkbox or status indicator for `manager_approval_required` field): If manager approval is required, you will need to get approval from your direct manager before submitting this form.
