# Student Transfer Request Form - Help Guide
## Purpose
The Student Transfer Request Form is a form used to request a student's transfer to a different class or school. This form is intended for teachers to submit their requests for student transfers.

## How To Complete This Form
To complete this form, please follow these steps:

* Enter the student's name in the `student_name` field.
* Enter the teacher's name in the `teacher_name` field.
* Select the class the student is currently in from the `class_from` field.
* Select the class the student wishes to be transferred to from the `class_to` field.
* Provide a valid reason for the transfer in the `reason_for_transfer` field.
* Enter any additional comments in the `comment` field (optional).
* Select the date for the transfer request in the `date_requested` field.
* Enter the assigned tool for the transfer request in the `assigned_tool` field.

## Field-by-Field Explanation
* **Student Name** (`student_name`, `text`, required): Please enter the student's name who is being transferred.
* **Teacher Name** (`teacher_name`, `text`, required): Please enter the name of the teacher submitting the request.
* **Class From** (`class_from`, `select_one`, required): Select the current class the student is in.
* **Class To** (`class_to`, `select_one`, required): Select the class the student wishes to be transferred to.
* **Reason for Transfer** (`reason_for_transfer`, `text`, required): Enter a valid reason for the transfer request.
* **Comment** (`comment`, `note`, optional): Add any additional comments related to the transfer request (optional).
* **Date of Transfer** (`date_of_transfer`, `date`, optional): Enter the date of the transfer request (optional).
* **Date Requested** (`date_requested`, `date`, required): Select the date the request was made.
* **Assigned Tool** (`assigned_tool`, `text`, required): Enter the tool assigned for the transfer request.
