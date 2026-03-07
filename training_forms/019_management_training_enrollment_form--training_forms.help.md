<thinking>
This form is used for enrolling participants in management training programs. It is intended for internal use within the organization. The form collects information about the participant, the training category, and the training details. It is essential to fill out the form accurately to ensure that the participant is enrolled correctly and that the training is recorded correctly in the system.
</thinking>

# management_training_enrollment_form - Help Guide
## Purpose
This form is used to enroll participants in management training programs.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the training category from the dropdown menu.
2. Enter the participant's name, email, and phone number.
3. Enter any additional notes or comments about the participant.
4. Choose the training location from the dropdown menu.
5. Enter the participant's hours and attendance status.
6. Choose the training program manager and location manager.
7. Enter the training start and end dates, duration, and hours.
8. Enter the participant's location.

## Field-by-Field Explanation

* **Training Category** (`training_category`, `select_one`, required): Select the category of the training program from the dropdown menu.
* **Participant Name** (`participant_name`, `text`, required): Enter the name of the participant.
* **Participant Email** (`participant_email`, `email`, required): Enter the participant's email address.
* **Participant Phone** (`participant_phone`, `text`, required): Enter the participant's phone number.
* **Participant Note** (`participant_note`, `note`, optional): Add any additional notes or comments about the participant.
* **Training Date** (`training_date`, `date`, required): Enter the date of the training.
* **Training Time** (`training_time`, `time`, required): Enter the start time of the training.
* **Training Location** (`training_location`, `select_one`, required): Select the location of the training from the dropdown menu.
* **Participant Enrolled** (`participant_enrolled`, `number`, required): Enter the number of participants enrolled.
* **Participant Status** (`participant_status`, `select_multiple`, required): Choose the status of the participant (Active, Inactive, or Pending).
* **Training Program** (`training_program`, `select_one`, optional): Select the training program from the dropdown menu.
* **Training Coordinator** (`training_coordinator`, `select_one`, required): Select the training coordinator from the dropdown menu.
* **Training Start Date** (`training_start_date`, `date`, required): Enter the start date of the training.
* **Training End Date** (`training_end_date`, `date`, required): Enter the end date of the training.
* **Training Duration** (`training_duration`, `number`, required): Enter the duration of the training in hours.
* **Training Hours** (`training_hours`, `number`, required): Enter the total hours of the training.
* **Training Days** (`training_days`, `number`, required): Enter the number of training days.
* **Participant Hours** (`participant_hours`, `number`, required): Enter the total hours of the participant's attendance.
* **Participant Attendance** (`participant_attendance`, `number`, required): Enter the participant's attendance status.
* **Participant Status Comments** (`participant_status_comments`, `text`, optional): Add any comments about the participant's status.
* **Participant Notes** (`participant_notes`, `note`, optional): Add any additional notes about the participant.
* **Training Program Manager** (`training_program_manager`, `select_one`, optional): Select the training program manager from the dropdown menu.
* **Training Location Manager** (`training_location_manager`, `select_one`, required): Select the location manager from the dropdown menu.
* **Participant Location** (`participant_location`, `select_one`, required): Select the location of the participant from the dropdown menu.
* **Training Start Time** (`training_start_time`, `time`, required): Enter the start time of the training.
