<thinking>
The form is designed to collect data on training events, specifically attendance information for both students and employees. This form is meant to be filled out by trainers or administrators to record the attendance of attendees at a training session. The form is used to track the percentage of students and employees who attended the training, as well as their respective counts. This data can be used to monitor attendance patterns and identify areas for improvement.
</thinking>

# Training Attendance Form - Help Guide
## Purpose

This form is used to record the attendance of students and employees at a training session. It collects data on the percentage of attendees and their respective counts.

## How To Complete This Form

1. Fill out the form with the required fields, marked by an asterisk (\*).
2. Select the correct answer for each field from the available options.
3. Enter dates in the correct format (YYYY-MM-DD).
4. Enter numbers in whole numbers.

## Field-by-Field Explanation

* **What is the training?** (`what_is_training`, text, required: false): This field is a text field where you can describe the training session.
* **Employee Name** (`employee_name`, select_one, required: false): This field is a dropdown menu where you can select the name of the employee who attended the training.
* **Training Start Date** (`training_start_date`, date, required: false): This field is a date field where you can enter the start date of the training session.
* **Training End Date** (`training_end_date`, date, required: true): This field is a date field where you can enter the end date of the training session. *Note: This field is required.*
* **Training Hours** (`training_hours`, number, required: false): This field is a number field where you can enter the total hours of the training session. *Note: This field is not required, so you can leave it blank if not applicable.*
* **Training Location** (`training_location`, text, required: false): This field is a text field where you can describe the location of the training session.
* **Training Notes** (`training_notes`, note, required: false): This field is an optional note field where you can add any additional information about the training session.
* **Student Attendance Percentage** (`student_attendance_percentage`, number, required: true): This field is a number field where you can enter the percentage of students who attended the training session. *Note: This field is required.*
* **Student Attendance Count** (`student_attendance_count`, number, required: true): This field is a number field where you can enter the total number of students who attended the training session. *Note: This field is required.*
* **Employee Attendance Percentage** (`employee_attendance_percentage`, number, required: true): This field is a number field where you can enter the percentage of employees who attended the training session. *Note: This field is required.*
* **Employee Attendance Count** (`employee_attendance_count`, number, required: true): This field is a number field where you can enter the total number of employees who attended the training session. *Note: This field is required.*
