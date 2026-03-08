<thinking>
This form is used to document the discharge of a student from an education course. The purpose of this form is to provide a structured way to gather necessary information for the student's discharge process. This form should only be used when a student is being discharged from a course due to non-attendance or academic reasons. Please do not complete this form unless a student's discharge is necessary. Non-duplicative submissions are appreciated.
</thinking>

# Education Course Discharge Form - Help Guide
## Purpose
This form is used to document the discharge of a student from an education course. It is to be completed in cases where a student is being discharged due to non-attendance or academic reasons.

## How To Complete This Form
To complete this form, follow these steps:

* Make sure you have a valid reason for discharging the student from the course.
* Fill out the form with the student's ID, course ID, date of discharge, reason for discharge, and other relevant information.
* Answer the questions regarding student and school admin feedback, if applicable.
* Specify who submitted the form and the date it was submitted.

## Field-by-Field Explanation
### Page 1: Course Discharge Form
* **education_course_discharge_form** (`education_course_discharge_form`, note, optional): This is the main page of the form. It contains the basic information regarding the student's discharge from the course.
* **student_id** (`student_id`, number, optional): Enter the student's ID number.
* **course_id** (`course_id`, number, optional): Enter the course ID number.
* **date_discharged** (`date_discharged`, date, optional): Enter the date when the student was discharged from the course.
* **reason_discharged** (`reason_discharged`, select_one, optional): Choose the reason for discharging the student from the course. You can select either 'Yes' or 'No'.
* **student_feedback** (`student_feedback`, text, optional): Enter any comments or feedback from the student regarding their discharge.
* **school_admin_feedback** (`school_admin_feedback`, text, optional): Enter any comments or feedback from the school admin regarding the student's discharge.

### Page 2
* **submitted_by** (`submitted_by`, select_one, optional): Indicate who submitted this form. You can select either 'Yes' or 'No'.
* **submitted_date** (`submitted_date`, date, optional): Enter the date this form was submitted.
