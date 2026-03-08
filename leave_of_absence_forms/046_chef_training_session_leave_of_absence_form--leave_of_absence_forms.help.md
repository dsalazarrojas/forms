# Chef Training Session Leave Of Absence Form - Help Guide
## Purpose
This form is designed to help trainees request a leave of absence for a Chef Training Session.

## How To Complete This Form
To complete this form, please follow these steps:

1. Provide your full name in the "Trainee Full Name" field.
2. Enter the current training module you are in in the "Current Training Module" field.
3. Choose a valid reason for your leave in the "Reason for Leave" field.
4. Select whether you are interested in a makeup session in the "Are you interested in a makeup session" field.
5. Provide your digital signature in the "Trainee Digital Signature" field.
6. Enter the date you will be away in the "Start Date of Absence" field.
7. Enter the date you will return in the "End Date of Absence" field.
8. Enter the date you are submitting this form in the "Date of Request" field.

## Field-by-Field Explanation
* **Trainee Full Name** (`trainee_full_name_leave`, text, required): Enter your full name as it appears on your government-issued ID.
* **Current Training Module** (`current_training_module`, text, required): Enter the name of the training module you are currently in, e.g. "Sauce Station", "Pastry 101".
* **Lead Instructor Name** (`lead_instructor_name`, text, required): Enter the name of your lead instructor for the session.
* **Start Date of Absence** (`leave_start_date`, date, required): Enter the first day you will be away.
* **End Date of Absence** (`leave_end_date`, date, required): Enter the last day you will be away.
* **Reason for Leave** (`reason_for_leave_category`, select_one, required): Choose a valid reason for your leave:
	+ Medical / Health
	+ Family Emergency
	+ Personal Reasons
	+ Work Conflict
	+ Jury Duty / Legal
* **Are you interested in a makeup session** (`makeup_session_interest`, select_one, required): Select:
	+ Yes, please schedule
	+ No, I will catch up independently
	+ Not applicable
* **Trainee Digital Signature** (`trainee_digital_signature_ack`, text, required): Type your name to acknowledge your request.
* **Date of Request** (`leave_request_submission_date`, date, required): Enter the date you are submitting this form.
* **Approval Status** (`approval_status_staff`, select_one, optional): This field is for staff use only.
* **Staff Review Comments** (`staff_review_comments`, text, optional): This field is for staff use only.
* **Are you interested in a makeup session** (`makeup_session_interest`, select_one, required): Select whether you are interested in a makeup session.
* **Staff Use Only** (`section_staff_only`, note, required): This section is for staff use only.
* **Supporting Details** (`supporting_details_explanation`, text, optional): Provide more context if necessary.
