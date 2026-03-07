<thinking>Before creating the help guide, I need to ensure that the form's purpose and requirements are clear. This form appears to be for students to request an extension on an assignment, providing details about their original due date, requested extension duration, and reasons for the request. The form also asks about previous extensions, understanding of the late submission policy, and academic standing. It's essential to review the form carefully and create a guide that accurately represents these requirements in a clear and concise manner.</thinking>

# Assignment Submission Extension Form - Help Guide
## Purpose
The Assignment Submission Extension Form is a tool for students to request an extension on an assignment. To use this form, please fill out the fields as requested, providing accurate and honest information about your situation.

## How To Complete This Form
1. Enter your name and student identification number.
2. Provide your email address and course details.
3. Specify the assignment you are requesting an extension for, including its original due date.
4. Explain why you need the extension and how many days you require.
5. Confirm that you understand the late submission policy and that you are making this request in good faith.
6. If applicable, provide additional comments or information.
7. Confirm your submission date and time.

## Field-by-Field Explanation

* **First Name** (`student_first_name`, text, required): Enter your first name.
* **Last Name** (`student_last_name`, text, required): Enter your last name.
* **Student ID** (`student_id`, text, required): Enter your student identification number.
* **Email Address** (`student_email`, email, required): Enter your university email address.
* **Course Name** (`course_name`, text, required): Enter the name of the course.
* **Course Number** (`course_number`, text, required): Enter the course identification number.
* **Instructor Name** (`instructor_name`, text, required): Enter the professor or instructor's name.
* **Assignment Name** (`assignment_name`, text, required): Enter the title or description of the assignment.
* **Assignment Number** (`assignment_number`, text, required): Enter the assignment's sequence number.
* **Original Due Date** (`original_due_date`, date, required): Enter the original due date of the assignment.
* **Date of This Request** (`submission_date_today`, date, required): Enter today's date.
* **Requested Extension (number of days)** (`requested_extension_days`, number, required): Enter how many days you require for the extension.
* **Proposed New Due Date** (`new_proposed_due_date`, date, required): Enter the new due date you propose.
* **Reason for Extension Request** (`extension_reason`, select_one, required): Choose a reason from the list for requesting an extension:
	+ Illness or Health Issue
	+ Family Emergency
	+ Work Conflict
	+ Technical Issues
	+ Lack of Understanding
	+ Multiple Deadlines
	+ Other
* **Detailed Explanation** (`reason_details`, text, required): Explain your situation in detail.
* **Current Progress on Assignment** (`work_progress`, select_one, required): Choose how much progress you have made on the assignment:
	+ Just Starting
	+ 25% Complete
	+ 50% Complete
	+ 75% Complete
	+ Nearly Done
* **Plan to Complete Assignment** (`plan_to_complete`, text, required): Explain how you plan to complete the assignment.
* **Have You Requested Extensions Before?** (`previous_extensions`, select_one, required): Choose if you have requested extensions before:
	+ No
	+ Yes
* **Number of Previous Extensions** (`previous_extension_count`, number, optional): If applicable, enter the number of previous extensions.
* **Understand Late Submission Policy** (`late_submission_policy_understood`, select_one, required): Confirm that you understand the late submission policy:
	+ Yes
	+ No
* **Your Academic Standing** (`academic_standing`, select_one, required): Choose your academic standing:
	+ Excellent
	+ Good
	+ Average
	+ Below Average
* **Additional Comments or Information** (`additional_comments`, text, optional): Enter any additional comments or information.
* **Confirm Request** (`student_acknowledgment`, select_one, required): Confirm that you are making this request in good faith:
	+ I Confirm
	+ Other
* **Request Submission Date and Time** (`submission_date`, date, required): Enter the date and time when you submit this request.
