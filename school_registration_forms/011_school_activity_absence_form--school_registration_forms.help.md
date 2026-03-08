# school_activity_absence_form - Help Guide
## Purpose
The school activity absence form is used to record student absences from school activities. This form helps administrators track attendance and communicate with parents or guardians.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the `school_id` to associate the absence with the correct school.
2. Select the `school_activity_id` to identify the specific school activity the student is absent from.
3. Fill in the `first_name` and `last_name` fields with the student's name.
4. Choose the `date_of_absence` and `time` fields to record the date and time of the absence.
5. Select the `reason_for_absence` field to describe the reason for the absence.
6. Provide the `contact_number` and `comments` fields with any relevant contact information or additional comments.
7. Mark `notification_sent` to indicate if a notification was sent to the guardian.
8. Add any other comments in the `comments` field.
9. Sign and date the form by filling in the `signature` field.
10. Enter the unique `form_id` provided by the school.
11. Submit the form by filling in the `submit` field.

## Field-by-Field Explanation
* **first_name** (`name`, `text`, required): Enter the student's first name.
* **last_name** (`name`, `text`, required): Enter the student's last name.
* **date_of_absence** (`name`, `date`, required): Choose the date of the absence.
* **reason_for_absence** (`name`, `text`, optional): Describe the reason for the absence.
* **start_time** (`name`, `time`, optional): Record the start time of the absence.
* **end_time** (`name`, `time`, optional): Record the end time of the absence.
* **school_id** (`name`, `select_one`, optional): Select the school ID to associate the absence with.
* **teacher_name** (`name`, `text`, optional): Enter the teacher's name associated with the activity.
* **student_id** (`name`, `text`, optional): Enter the student ID associated with the activity.
* **guardian_id** (`name`, `text`, optional): Enter the guardian ID associated with the activity.
* **contact_number** (`name`, `text`, optional): Enter the contact number for the guardian.
* **notification_sent** (`name`, `select_multiple`, optional): Mark to indicate if a notification was sent to the guardian.
* **comments** (`name`, `text`, optional): Add any other comments or information.
* **signature** (`name`, `text`, optional): Sign and date the form by filling in the signature field.
* **form_id** (`name`, `text`, required): Enter the unique form ID provided by the school.
* **date** (`name`, `date`, optional): Record the date of the form submission.
* **time** (`name`, `time`, optional): Record the time of the form submission.
* **school_activity_id** (`name`, `select_one`, optional): Select the school activity ID associated with the absence.
* **school_activity_name** (`name`, `text`, optional): Enter the school activity name.
* **school_activity_description** (`name`, `text`, optional): Describe the school activity.
* **school_activity_start_date** (`name`, `date`, optional): Record the start date of the school activity.
* **school_activity_end_date** (`name`, `date`, optional): Record the end date of the school activity.
* **school_activity_time** (`name`, `time`, optional): Record the time of the school activity.

Note: Please ensure that all fields are filled in accurately and consistently, and that the form is used for its intended purpose.
