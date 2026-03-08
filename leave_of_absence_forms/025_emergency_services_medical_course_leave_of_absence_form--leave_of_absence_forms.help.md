<thinking>
This is a critical section that explains the internal reasoning behind creating this form.
The form is designed to capture essential information regarding a student's leave of absence for a medical reason or other emergencies. The form aims to gather details such as the student's name, start and end dates of the leave, reason for the leave, and other relevant information. This form is likely to be used by instructors or staff to approve or process student leaves. The form's fields are designed to ensure that all necessary information is captured to facilitate efficient processing and approval of the leave request.
</thinking>

# Emergency Services Medical Course Leave Of Absence Form - Help Guide
## Purpose
This form is designed to request a leave of absence for a medical course or other emergencies. It is intended for students or staff to provide essential information to facilitate the approval or processing of their leave request.

## How To Complete This Form
1.  Please enter your student name.
2.  Select the start date of your leave.
3.  Enter the end date of your leave.
4.  Choose the type of leave you are requesting (medical or other emergencies).
5.  Provide a reason for your leave (optional).
6.  Enter your contact email and phone number for communication purposes.
7.  Select the instructor approval date.
8.  Provide an optional comment for the instructor's reference.
9.  Indicate who submitted the request (student or staff).
10. Enter the course name, section, and course status.
11.  Enter your student ID, grade, section, and program name.
12.  Select the semester and year of your enrollment.
13.  Finally, enter the date you submitted the request.

## Field-by-Field Explanation
*   **Student Name** (`student_name`, `text`, required): Enter your full student name.
*   **Start Date** (`leave_start_date`, `date`, required): Select the date you wish to start your leave.
*   **End Date** (`leave_end_date`, `date`, required): Enter the date you expect your leave to end.
*   **Leave Type** (`leave_type`, `select_one`, required): Choose between medical or other emergencies as the reason for your leave.
*   **Reason For Leave** (`reason_for_leave`, `text`, optional): Provide a brief explanation for your leave request.
*   **Contact Email** (`contact_email`, `email`, optional): Enter a contact email for communication purposes.
*   **Contact Phone** (`contact_phone`, `text`, optional): Enter a contact phone number for communication purposes.
*   **Instructor Approval Date** (`instructor_approval_date`, `date`, required): This field is used to track the date the instructor approves or denies your leave request.
*   **Instructor Comment** (`instructor_comment`, `note`, optional): Provide an optional comment for the instructor's reference.
*   **Submitted By** (`submitted_by`, `select_multiple`, required): Indicate whether you are a student or staff submitting the request.
*   **Course Name** (`course_name`, `text`, optional): Enter the name of the course you are taking.
*   **Section** (`course_section`, `text`, optional): Enter the section of the course you are taking.
*   **Course Status** (`course_status`, `select_one`, required): Select the status of the course you are enrolled in (active, completed, inactive, or pending).
*   **Leave Start Date** (`leave_start_date`, `date`, optional): Enter the date you wish to start your leave (if not already selected in the start date field).
*   **Leave End Date** (`leave_end_date`, `date`, optional): Enter the date you expect your leave to end (if not already selected in the end date field).
*   **Student ID** (`student_id`, `text`, required): Enter your student ID number.
*   **Student Grade** (`student_grade`, `text`, optional): Enter your student grade level.
*   **Section** (`student_section`, `text`, optional): Enter your student section.
*   **Program** (`program`, `select_one`, required): Select your program name.
*   **Program Name** (`student_program`, `text`, required): Enter the name of your program.
*   **Student Course** (`student_course`, `text`, required): Enter the name of your course.
*   **Semester** (`student_semester`, `text`, required): Enter the semester of your enrollment.
*   **Year** (`student_year`, `text`, optional): Enter the year of your enrollment.
*   **Submitted At** (`submitted_at`, `date`, optional): Enter the date you submitted the request.

Note: This help guide is based on the provided YAML fields. Some fields might have been renamed for clarity or to match the original labels.
