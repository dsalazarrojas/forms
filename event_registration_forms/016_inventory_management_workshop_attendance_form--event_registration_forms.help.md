# inventory-management-workshop-attendance-form - Help Guide
## Purpose
This form is for registering participants for a workshop on inventory management. It is used to collect information from potential attendees, including their name, email, phone number, status, and any additional notes. The form will also ask for the workshop name and date/time, but these are likely to be pre-filled in.

## How To Complete This Form
1. Fill out the form completely.
2. Ensure that all required fields are filled out.
3. Double-check the accuracy of your answers before submitting.

## Field-by-Field Explanation
* **Participant Name (Participant name)** (`participant_name`, `text`, required: false): Enter your name as it appears on your business card or identification.
* **Participant Email (participant email)** (`participant_email`, `email`, required: false): Enter your business email address.
* **Participant Phone (participant phone)** (`participant_phone`, `text`, required: false): Enter your business phone number.
* **Workshop Date (workshop date)** (`workshop_date`, `date`, required: false): Enter the date of the workshop you are attending.
* **Workshop Time (workshop time)** (`workshop_time`, `time`, required: false): Enter the time of the workshop you are attending.
* **Participant Status (participant status)** (`participant_status`, `select_one`, required: false): Select your status for the workshop (Pending, Confirmed, Cancelled).
* **Notes (notes)** (`notes`, `note`, required: false): Add any additional comments or information about your attendance.
* **Workshop Name (workshop name)** (`workshop_name`, `text`, required: false): This field is likely to be pre-filled in.
* **Participant Role (participant role)** (`participant_role`, `text`, required: false): Enter your role or department within the organization you represent.
