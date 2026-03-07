<thinking>
The form purpose is to provide a daily report of the Tds system's performance. This form is likely used for administrators or users to report any issues or concerns they've encountered during the day. The form might also serve as a general feedback mechanism for users to share their opinions or suggestions. 

The form's design appears to be based on the system's metadata, providing details such as creation and update timestamps, creator and updater identities, and other metadata. This suggests that the form might be used for reporting and tracking changes to the system. It's possible that the form is used for quality assurance or maintenance activities. 
</thinking>

# Tds Daily Performance Report - Help Guide
## Purpose
The Tds Daily Performance Report form is designed to provide a daily report of the Tds system's performance. This form is intended for administrators or users to report any issues or concerns they've encountered during the day.

## How To Complete This Form

1. Select the correct "category" for your report, such as "Report Forms".
2. Provide a brief "description" of the issue or concern.
3. Choose the "assignedTool" responsible for the issue (if applicable).
4. Enter the "output_file" if necessary.
5. Optionally, select the "last_updated_by" and "form_status" fields, depending on your role in the system.
6. Review the form's metadata fields, such as "form_id", "created_by", and "last_updated_time", for reference.

## Field-by-Field Explanation

* **category** (`category`, select_one, required: false):
	+ Select the relevant category for your report (e.g., "Report Forms").
* **description** (description, text, required: false):
	+ Briefly describe the issue or concern you've encountered.
* **assignedTool** (assignedTool, select_one, required: false):
	+ Choose the tool or system component responsible for the issue (e.g., "chatjimmy").
* **output_file** (output_file, text, required: false):
	+ If applicable, provide the output file related to the issue.
* **form_id** (form_id, select_one, required: false):
	+ Select "Yes" or "No" to confirm the form status.
* **created_by** (created_by, text, required: false):
	+ View the creator's name.
* **last_updated** (last_updated, date, required: false):
	+ View the last update time.
* **last_updated_by** (last_updated_by, select_one, required: false):
	+ Select the last updater's identity (e.g., "admin", "moderator", "user").
* **form_id_original** (form_id_original, text, required: false):
	+ View the original form ID.
* **form_title** (form_title, text, required: false):
	+ View the form title.
* **form_description** (form_description, text, required: false):
	+ View the form description.
* **created_by_original** (created_by_original, select_one, required: false):
	+ View the original creator's identity (e.g., "admin", "moderator", "user").
* **form_version** (form_version, text, required: false):
	+ View the form version.
* **form_version_original** (form_version_original, text, required: false):
	+ View the original form version.
* **created_time** (created_time, time, required: false):
	+ View the creation time.
* **updated_time** (updated_time, time, required: false):
	+ View the last update time.
* **updated_by** (updated_by, select_one, required: false):
	+ Select the last updater's identity (e.g., "admin", "moderator", "user").
* **last_updated_time** (last_updated_time, time, required: false):
	+ View the last update time.
* **form_status** (form_status, select_one, required: false):
	+ Select the form status (e.g., "published", "draft", "deleted").
* **form_status_original** (form_status_original, select_one, required: false):
	+ View the original form status.
* **last_updated_by_original** (last_updated_by_original, select_one, required: false):
	+ View the original last updater's identity.
* **version** (version, number, required: false):
	+ View the form version.
* **category** (category, select_one, required: false):
	+ Select the category (e.g., "Report Forms").
