<thinking> 
A facility usage form is used to record and report information about facility usage. This form is for internal staff to report on facilities that they have visited or have access to. It's meant to track who requested access, dates, and other relevant details to help with facility management and planning. This form shouldn't be used for external requests or general facility booking. Ensure you're filling out this form for internal facility usage only. If you're unsure, contact your supervisor or facility manager for guidance.</thinking>

# Facility Usage Form - Help Guide
## Purpose
The facility usage form is used by internal staff to report on facilities they have visited or have access to. This form helps with facility management and planning.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a brief description of your facility usage request in the `usage_request` field.
2. Select whether the facility was requested from the `user_requester` field.
3. Enter the dates when you visited or have access to the facility in the `access_dates` field.
4. Enter the start date of your visit in the `start_date` field.
5. Enter the end date of your visit in the `end_date` field.
6. Select whether you have access to the facility in the `facility_name` field.
7. Enter the hours of access in the `access_hours` field.
8. Add any additional notes or comments about your visit in the `notes` field.

## Field-by-Field Explanation
* **usage_request** (`usage_request`, `text`, required/optional): Enter a brief description of your facility usage request.
* **user_requester** (`user_requester`, `select_one`, required/optional): Select whether the facility was requested.
* **access_dates** (`access_dates`, `date`, required/optional): Enter the dates when you visited or have access to the facility.
* **start_date** (`start_date`, `text`, required/optional): Enter the start date of your visit.
* **end_date** (`end_date`, `text`, required/optional): Enter the end date of your visit.
* **facility_name** (`facility_name`, `select_one`, required/optional): Select whether you have access to the facility.
* **access_hours** (`access_hours`, `text`, required/optional): Enter the hours of access.
* **notes** (`notes`, `note`, required/optional): Add any additional notes or comments about your visit.

## Tips
- Be sure to fill out all required fields.
- Enter dates and times accurately.
- Select the correct options from the select fields.
- Keep your notes concise and relevant to your visit.
