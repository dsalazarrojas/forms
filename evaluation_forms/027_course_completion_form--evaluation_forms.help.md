# Course Completion Form - Help Guide
## Purpose
The Course Completion Form is used to record and track course completions, including student information, course details, and completion dates.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling out the required fields, which include:
	* First Name
	* Last Name
	* Email
	* Student ID
	* Course Name
	* Course Section (choose from the options provided)
	* Completed Units
	* Form ID
	* Created Date is automatically generated and cannot be edited
2. Optional fields, such as Completion Date, Completion Time, Notes, Comments, Submitted At, Completed At, and Updated At, can be filled out as needed.
3. Ensure you fill out all required fields accurately and completely.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name as it appears on official documents or as you would like it to be displayed.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on official documents or as you would like it to be displayed.
* **Email** (`email`, email, required): Enter your email address for communication and course updates.
* **Student ID** (`student_id`, number, required): Enter your student ID number as assigned by the institution.
* **Course Name** (`course_name`, text, required): Enter the name of the course you completed.
* **Course Section** (`course_section`, select_one, required): Choose the course section from the options provided, such as morning or evening classes.
* **Completed Units** (`completed_units`, number, required): Enter the number of units completed for the course.
* **Form ID** (`form_id`, number, required): A unique identifier for the course completion form.
* **Assigned Tool** (`assigned_tool`, text, required): Enter the tool or resource assigned to you for the course.
* **Submission Information**
	+ **Completion Date** (`completion_date`, date, optional): Enter the date you completed the course.
	+ **Completion Time** (`completion_time`, time, optional): Enter the time you completed the course.
	+ **Comments** (`comments`, text, optional): Enter any additional comments or feedback about the course.
* **Submission Tracking**
	+ **Submitted At** (`submitted_at`, date, optional): Automatically populated with the date and time you submitted the form.
	+ **Completed At** (`completed_at`, date, optional): Automatically populated with the date and time you completed the form.
	+ **Updated At** (`updated_at`, date, optional): Automatically populated with the date and time the form was last updated.

Note: The **Created At** field is automatically populated and cannot be edited.
