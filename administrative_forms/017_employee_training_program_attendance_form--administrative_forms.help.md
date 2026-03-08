# Employee Training Program Attendance Form - Help Guide
## Purpose
This form is used to record and track employee training attendance, allowing for the collection of relevant details about employee participation in training sessions.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your employee ID in the `Employee ID` field.
2. Enter the ID of the training session you attended in the `Training Session ID` field.
3. Enter your name in the `Employee Name` field.
4. Enter the date of the training session in the `Training Session Date` field.
5. Select your attendance status by choosing from the options provided in the `Attendance Status` field.
6. (Optional) Enter the start and end times of the training session in the `Session Start Time` and `Session End Time` fields.
7. (Optional) Enter the total attendance for the session in the `Total Attendance` field.
8. (Optional) Add any comments about your attendance in the `Comments` field.
9. (Optional) Enter your email address in the `Email` field.
10. (Optional) Enter your phone number in the `Phone` field.
11. (Optional) If applicable, select the assigned tool for the session in the `Assigned Tool` field.

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, number, required): Enter your unique employee ID.
* **Training Session ID** (`training_session_id`, number, required): Enter the ID of the training session you attended.
* **Employee Name** (`employee_name`, text, required): Enter your name as it appears on your employee ID.
* **Training Session Date** (`training_session_date`, date, required): Enter the date of the training session.
* **Attendance Status** (`attendance_status`, select_one, required): Select your attendance status:
	+ Absent: You did not attend the training session.
	+ Present: You attended the training session.
	+ Late: You attended the training session, but arrived late.
* **Session Start Time** (`session_start_time`, time, optional): Enter the start time of the training session. This field is only required if you're reporting for attending the session.
* **Session End Time** (`session_end_time`, time, optional): Enter the end time of the training session. This field is only required if you're reporting for attending the session.
* **Total Attendance** (`total_attendance`, number, optional): Enter the total attendance for the training session.
* **Comments** (`comments`, note, optional): Add any comments about your attendance.
* **Email** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Assigned Tool** (`assigned_tool`, text, optional): If applicable, select the assigned tool for the session.
