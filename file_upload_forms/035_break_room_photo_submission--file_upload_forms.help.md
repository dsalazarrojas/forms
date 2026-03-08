<thinking>
To ensure the break room photos submission process is accurate, we need to prevent duplicates. The form is for employees to submit photos of the break room, providing details on the state of the area. This form should only be filled out once for each new photo submission. To confirm this is a new submission, check that the photo date is different from previous submissions. This form is not intended for submitting photos of equipment or other areas of the building, so please only submit photos of the break room.
</thinking>

# Break Room Photo Submission - Help Guide
## Purpose
The Break Room Photo Submission form is for employees to submit photos of the break room, helping the facilities team to keep the area clean and well-maintained. Please submit photos of any issues or concerns you have, and provide detailed descriptions to help us address the issues promptly.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your full name, email address, and employee ID.
2. Select the department and office location where the break room is located.
3. Provide the date and time the photo was taken (if possible).
4. Describe what the photo shows and the condition of the break room.
5. Choose the issue category and condition status of the break room.
6. Enter any additional comments or photos if necessary.

## Field-by-Field Explanation
* **Employee Full Name** (`employee_name`, text, required): Enter your full legal name.
* **Email Address** (`employee_email`, email, required): Enter your work email address.
* **Employee ID** (`employee_id`, text, required): Enter your employee ID number.
* **Department** (`department`, select_one, required): Select the department where the break room is located.
* **Office Location** (`office_location`, select_one, required): Select the office location where the break room is located.
* **Break Room Location** (`break_room_location`, text, required): Enter the location of the break room.
* **Floor or Level** (`floor_or_level`, text, optional): Enter the floor number or level of the break room (if applicable).
* **Photo Date** (`photo_date`, date, required): Enter the date the photo was taken.
* **Photo Time** (`photo_time`, time, optional): Enter the time the photo was taken (if possible).
* **Photo Type** (`photo_type`, select_one, required): Select what the photo shows (e.g., Overall Break Room, Seating Area, etc.).
* **Photo Description** (`photo_description`, text, required): Describe what is in the photo.
* **Condition Status** (`condition_status`, select_one, required): Choose the condition of the break room.
* **Issue Category** (`issue_category`, select_multiple, required): Select any issue categories that apply to the photo.
* **Issue Description** (`issue_description`, text, optional): Provide detailed descriptions of any issues.
* **Priority Level** (`priority_level`, select_one, required): Select the level of urgency for the issue.
* **Suggested Improvements** (`suggested_improvements`, text, optional): Enter any suggested improvements for the break room.
* **Follow-Up Needed** (`follow_up_needed`, select_one, required): Indicate if follow-up is necessary.
* **Additional Photos** (`additional_photos`, select_one, required): Choose if you have additional photos to submit.
* **Additional Comments** (`additional_comments`, text, optional): Enter any other feedback or notes.
