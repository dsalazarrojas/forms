<thinking>

This form is designed to collect information from students to book an assessment session. The form is intended for students who need to book an assessment for a course or module they are enrolled in. The form will help the assessment administrator to determine the student's availability and book a time slot that suits them best. 

This form will also help to identify any special accommodations required by the student and ensure that they have reviewed the assessment guidelines and relevant documents.

It is recommended to complete this form carefully and accurately to ensure that the assessment process goes smoothly. 

</thinking>

# Assessment Booking Form - Help Guide
## Purpose
This form is designed to collect information from students to book an assessment session for their courses or modules. 

## How To Complete This Form
To complete this form, follow the steps below:
- Please ensure that all required fields are filled in, as they are marked with an asterisk (\*) in the form.
- Fill out the form accurately and completely, especially the student name, ID number, and contact information.
- Select the correct assessment type for the assessment session.
- Choose a preferred date and time slot for the assessment session.
- If necessary, indicate if any special accommodations are required.
- Confirm that you have reviewed the assessment guidelines and relevant documents.
- Finally, provide your contact phone number for any urgent scheduling changes.

## Field-by-Field Explanation
### Student Full Name
* **Student Full Name** (`student_name_booking`, text, *required*): This is the student's full name. Please enter the student's full name as it appears on their ID card or student records.

### Student ID Number
* **Student ID Number** (`student_id_number`, text, *required*): This is the student's ID number. Please enter the student's ID number as it appears on their ID card or student records.

### Email Address
* **Email Address** (`student_email_booking`, email, *required*): This is the student's email address. Please enter the student's email address as it appears on their records.

### Course or Module Name
* **Course or Module Name** (`course_module_name`, text, *required*): This is the name of the course or module the student is enrolled in. Please enter the name of the course or module as it appears on the student's records.

### Select Assessment Type
* **Select Assessment Type** (`assessment_type_selection`, select_one, *required*): Please select the type of assessment that the student requires:
	+ Written Examination
	+ Practical Lab Assessment
	+ Oral Presentation
	+ Project Submission Review

### Preferred Assessment Date
* **Preferred Assessment Date** (`preferred_booking_date`, date, *required*): Please select a date that the student is available for the assessment session. You can select a date from the calendar.

### Preferred Time Slot
* **Preferred Time Slot** (`preferred_booking_time`, select_one, *required*): Please select a time slot that the student is available for the assessment session:
	+ Morning - 9 AM to 12 PM
	+ Afternoon - 1 PM to 4 PM
	+ Evening - 5 PM to 8 PM

### Do you require special accommodations
* **Do you require special accommodations?** (`accommodation_needed_flag`, select_one, *required*): If the student requires any special accommodations, please select "Yes" and provide additional details in the field below.

### Details of Required Accommodations
* **Details of Required Accommodations** (`accommodation_details_text`, text, *optional*): If the student requires special accommodations, please provide additional details in this field.

### I have reviewed the assessment guidelines and relevant documents
* **I have reviewed the assessment guidelines and relevant documents** (`guidelines_review_confirm`, select_one, *required*): Please confirm that you have reviewed the assessment guidelines and relevant documents:
	+ Yes, I have reviewed them
	+ Other

### Contact Phone Number
* **Contact Phone Number** (`student_phone_booking`, text, *required*): Please enter the student's contact phone number for any urgent scheduling changes.
