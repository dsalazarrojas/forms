# Class Sign In Form - Help Guide
## Purpose
This form is designed to collect attendance and participation information from students in a class. It helps instructors keep track of student attendance, participation levels, and other relevant details.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter your student name as your first and last name.
2. If your student ID number is applicable, enter it in the corresponding field.
3. Enter your email address.
4. Select the class name or section you are enrolled in.
5. Enter the name of your instructor.
6. Enter the class date.
7. Select the time of class when it started.
8. Choose your attendance status (Present, Late arrival, Left early, Excused absence, Unexcused absence).
9. If you arrived late, enter the reason for your late arrival.
10. If you were absent, enter the reason for your absence or early departure.
11. If you have any special notes or comments, enter them in the "Special Notes or Comments" field.
12. Finally, confirm that the attendance information you entered is accurate by selecting "Yes, confirmed" from the "I confirm this attendance information is accurate" field.

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, required): This field is for entering your full name as you want it to appear on the attendance record.
* **Student ID Number** (`student_id`, text, optional): If you have a student ID number, enter it here. If not, you can skip this field.
* **Email Address** (`email_address`, email, optional): Enter your email address if you have one.
* **Class Name or Section** (`class_name`, text, required): Select the name of your class or section from the available options.
* **Instructor Name** (`instructor_name`, text, required): Enter the name of your instructor.
* **Class Date** (`class_date`, date, required): Enter the date of your class.
* **Class Time** (`class_time`, time, required): Select the time your class started.
* **Time of Arrival** (`arrival_time`, time, required): Select the time you actually arrived at class.
* **Attendance Status** (`attendance_status`, select_one, required): Choose your attendance status from the options provided (Present, Late arrival, Left early, Excused absence, Unexcused absence).
* **Reason for Late Arrival** (`reason_if_late`, text, optional): If you were late, enter the reason for your late arrival.
* **Reason for Absence or Early Departure** (`reason_if_absent`, text, optional): If you were absent or left early, enter the reason for your absence or early departure.
* **Level of Participation** (`participation_level`, select_one, optional): Select your level of participation from the options provided (Active participation, Moderate participation, Minimal participation, Did not participate, Not applicable).
* **Had access to required technology and equipment** (`equipment_access`, select_one, optional): If you were in an online or hybrid class, select whether you had access to required technology and equipment.
* **Special Notes or Comments** (`special_notes`, text, optional): Enter any special notes or comments you have about your attendance.
* **Health and Wellness Status** (`health_status`, text, optional): Enter your health and wellness status, including any concerns.
* **I confirm this attendance information is accurate** (`acknowledgment`, select_one, required): Select "Yes, confirmed" to confirm that the attendance information you entered is accurate.
