<thinking>
The purpose of the "Worker Timesheet And Tracking Form" is to collect time tracking data from workers, including clock-in and clock-out times, lunch breaks, total hours worked, time zone, and other relevant information. This data is crucial for managing worker hours, payroll, and performance metrics. To ensure accurate and complete data, it's essential to understand each field's purpose. This guide will walk you through the process of filling out the form and explain each field in detail.

</thinking>

# Worker Timesheet And Tracking Form - Help Guide
## Purpose
This form is designed to collect time tracking data from workers, which is essential for managing worker hours, payroll, and performance metrics.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form's layout, which includes sections for clock-in and clock-out times, lunch breaks, total hours worked, time zone, and other relevant information.
2. For each field, refer to the field-by-field explanations below for guidance.

## Field-by-Field Explanation

* **Timesheet Form** (`timesheet_form`, text, optional): This field is used to enter any additional comments or notes about the time worked. You can add any relevant information that isn't covered by other fields.
* **Clock In** (`clock_in`, date, optional): Enter the date and time you started work. Please format the date as YYYY-MM-DD and the time as HH:MM:SS.
* **Clock Out** (`clock_out`, date, optional): Enter the date and time you finished work. Please format the date as YYYY-MM-DD and the time as HH:MM:SS.
* **Lunch Break** (`lunch_break`, time, optional): Enter the duration of your lunch break in the format HH:MM (hours and minutes).
* **Total Hours Worked** (`total_hours_worked`, number, optional): Enter the total hours you worked, including breaks and time off. Please format the number as a decimal value (e.g., 8.5 for 8 hours and 30 minutes).
* **Time Zone** (`time_zone`, select_one, optional):
	+ **Pacific**: Enter your time zone as Pacific.
	+ **Mountain**: Enter your time zone as Mountain.
	+ **Central**: Enter your time zone as Central.
	+ **Eastern**: Enter your time zone as Eastern.
* **Time Zone Other** (`time_zone_other`, text, optional): Enter your time zone if it's not listed above.
* **Time Zone Offset** (`time_zone_offset`, text, optional): Enter the offset from the selected time zone (e.g., -5 for Pacific).
* **Assigned Tool** (`assigned_tool`, select_one, optional):
	+ **chatjimmy**: Select the assigned tool.
	+ **Other**: Select Other if the assigned tool is not listed.
* **Created By** (`created_by`, select_multiple, optional):
	+ **admin**: Select the user who created this record.
	+ **user1**: Select the user who created this record.
	+ **user2**: Select the user who created this record.
* **Created At** (`created_at`, date, optional): Enter the date this record was created. Please format the date as YYYY-MM-DD.
* **Updated At** (`updated_at`, date, optional): Enter the date this record was last updated. Please format the date as YYYY-MM-DD.
* **Deleted At** (`deleted_at`, date, optional): Enter the date this record was deleted. Please format the date as YYYY-MM-DD.

## Tips
* Double-check your inputs for accuracy and completeness.
* Ensure you have entered the correct time zone and time zone offset.
* If you're unsure about any field, refer to this guide or consult with your supervisor/administrator.
