# systems_support_log_form - Help Guide
## Purpose
This form is used to record and track system support issues.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the system ID to identify the system related to the issue.
2. Select a category to classify the issue.
3. Provide a detailed description of the issue.
4. Enter the report date.
5. Select who reported the issue.
6. Describe the resolution status.
7. If applicable, attach any relevant files or documents related to the issue.
8. Enter the issue details, including issue reported on, issue last updated, issue status, priority, severity, and other relevant information.

## Field-by-Field Explanation

* **System ID** (`system_id`, text, required): Enter the system ID related to the issue.
* **Category** (`category`, select_one, required): Select a category to classify the issue.
* **Description** (`description`, text, required): Provide a detailed description of the issue.
* **Report Date** (`report_date`, date, required): Enter the date the issue was reported.
* **Reported By** (`reported_by`, select_one, required): Select who reported the issue.
* **Issue Description** (`issue_description`, text, required): Describe the issue in detail.
* **Resolution Status** (`resolution_status`, select_multiple, required): Select the resolution status of the issue.
* **Attachment URL** (`attachment_url`, text, required): Enter the URL of any relevant files or documents related to the issue.
* **Attachment Name** (`attachment_name`, text, required): Provide a name for the attached file or document.
* **Attachment Content** (`attachment_content`, text, required): Enter the content of the attached file or document.
* **Attachment MIME Type** (`attachment_mime_type`, text, required): Enter the MIME type of the attached file or document.
* **Attachment Size** (`attachment_size`, text, required): Enter the size of the attached file or document.
* **Attachment Last Updated** (`attachment_last_updated`, time, required): Enter the date and time the attachment was last updated.
* **Issue Reported On** (`issue_reported_on`, date, required): Enter the date and time the issue was reported.
* **Issue Reported On Timezone** (`issue_reported_on_tz`, select_one, required): Select the time zone of the issue.
* **Issue Reported By** (`issue_reported_by`, select_one, required): Select who reported the issue.
* **Issue Last Updated** (`issue_last_updated`, time, required): Enter the date and time the issue was last updated.
* **Issue Last Updated Timezone** (`issue_last_updated_tz`, select_one, required): Select the time zone of the issue last updated.
* **Issue Status** (`issue_status`, select_multiple, required): Select the status of the issue.
* **Issue Priority** (`issue_priority`, select_one, required): Select the priority of the issue.
* **Issue Severity** (`issue_severity`, select_multiple, required): Select the severity of the issue.
* **Reported By Department** (`reported_by_department`, text, required): Enter the department of the person who reported the issue.
* **Reported By Email** (`reported_by_email`, text, required): Enter the email of the person who reported the issue.
* **Reported By Phone** (`reported_by_phone`, text, required): Enter the phone number of the person who reported the issue.
* **Comments** (`comments`, text, required): Provide any additional comments or notes about the issue.
