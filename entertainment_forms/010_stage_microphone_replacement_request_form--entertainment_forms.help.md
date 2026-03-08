# stage_microphone_replacement_request_form - Help Guide
## Purpose

This form is designed to collect information about a stage microphone replacement request. It is meant for users to report issues with stage microphones and to provide necessary details for processing the request.

## How To Complete This Form

1. Fill out the form completely and accurately.
2. Select the correct microphone type that is experiencing issues.
3. Enter the date when the issue occurred.
4. Choose the urgency level of the issue.
5. Enter your contact information for follow-up.

## Field-by-Field Explanation

* **Venue Name** (`venue_name`, `text`, required: false): Enter the name of the venue where the issue occurred.
* **Microphone Type** (`microphone_type`, `select_multiple`, required: true): Choose the type of microphone that is experiencing issues. Options are Handheld, Lavalier, Shotgun, and Wireless.
* **Issue Date** (`issue_date`, `date`, required: true): Enter the date when the issue occurred.
* **Urgency Level** (`urgency_level`, `select_one`, required: true): Choose the urgency level of the issue, with options 1, 2, 3, 4, or 5.
* **Photo** (`photo`, `text`, required: false): If available, provide a photo of the issue.
* **Notes** (`notes`, `note`, required: false): Add any additional notes about the issue.
* **Assignee** (`assignee`, `select_one`, required: true): Choose the staff member assigned to handle the request.
* **Contact Info** (`contact_info`, `email`, required: true): Enter your contact information for follow-up.
* **Output Format** (`output_format`, `select_one`, required: false): Choose the format of the report to be generated.
* **Output Path** (`output_path`, `text`, required: false): Enter the path where the report should be saved.
* **Submitter** (`submitter`, `text`, required: false): Enter your name.
* **Submit Date** (`submit_date`, `date`, required: true): Enter the date of submission.
* **Submit Time** (`submit_time`, `time`, required: false): Enter the time of submission.
* **Submitter Email** (`submitter_email`, `email`, required: false): Enter your email address.
* **Submitter Phone** (`submitter_phone`, `text`, required: false): Enter your phone number.
* **Submitter Notes** (`submitter_notes`, `note`, required: false): Add any additional notes about the submission.
* **Staff Notes** (`staff_notes`, `note`, required: false): Add any additional notes from staff.
* **Submitter Signature** (`submitter_signature`, `text`, required: false): Enter your signature.
* **Photo URL** (`photo_url`, `text`, required: false): Enter the URL of a photo of the issue.
* **Attach Photo** (`photo_attach`, `text`, required: false): Attach a photo of the issue.
* **Submitter ID** (`submitter_id`, `text`, required: false): Enter your ID number.
* **Submitter Role** (`submitter_role`, `text`, required: false): Enter your role.
* **Submitter Department** (`submitter_department`, `text`, required: false): Enter your department.
* **Submitter Position** (`submitter_position`, `text`, required: false): Enter your position.
* **Submitter Company** (`submitter_company`, `text`, required: false): Enter your company.
