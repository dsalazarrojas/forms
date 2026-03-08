# Student Training Details Form - Help Guide
## Purpose
This help guide is designed to assist users in completing the Student Training Details Form. The form is used to collect information about a student's training details, including program, status, and progress.

## How To Complete This Form
1. Start by selecting the relevant fields to complete, as most fields are optional.
2. Select "Yes" or "No" for the "Training Program" field, indicating whether the student is part of a training program.
3. Enter the student's name in the "Student Name" field.
4. Enter the student's date of birth in the "Date Of Birth" field.
5. Enter the student's date of enrollment in the "Date Of Enrollment" field.
6. Enter the start and end dates of the training program in the "Training Program Start Date" and "Training Program End Date" fields.
7. Select the current status of the student's training in the "Training Status" field, either "Active" or "Inactive".
8. Select the level of the student's training in the "Training Level" field, either "High" or "Low".
9. Enter the duration of the student's training in the "Training Duration" field.

## Field-by-Field Explanation
* **Student Training Details** (`student_training_details_form`, text, required: false): 
  * This is the title of the form, which serves as a header.
* **Training Program** (`training_program`, select_one, required: false):
  * This field asks whether the student is part of a training program. Select "Yes" if the student is part of a program, and "No" otherwise.
* **Student Name** (`student_name`, text, required: false):
  * This field asks for the student's name.
* **Date Of Birth** (`student_date_of_birth`, date, required: false):
  * This field asks for the student's date of birth.
* **Date Of Enrollment** (`student_date_of_enrollment`, date, required: false):
  * This field asks for the student's date of enrollment.
* **Training Program Start Date** (`student_training_program_start_date`, date, required: false):
  * This field asks for the start date of the training program.
* **Training Program End Date** (`student_training_program_end_date`, date, required: false):
  * This field asks for the end date of the training program.
* **Training Status** (`student_training_status`, select_one, required: false):
  * This field asks for the current status of the student's training. Select "Active" if the training is ongoing, and "Inactive" otherwise.
* **Training Level** (`student_training_level`, select_multiple, required: false):
  * This field asks for the level of the student's training. Select "High" for more advanced or complex training, and "Low" for less advanced or simple training.
* **Training Duration** (`student_training_duration`, number, required: false):
  * This field asks for the duration of the student's training.
