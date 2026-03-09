# Leave Application Form For School - Help Guide
## Purpose
The Leave Application Form For School is a tool for teachers to formally request leave from their duties. It helps ensure that all necessary information is provided and that the leave process is completed in a timely and organized manner.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of leave you are requesting (Sick Leave, Vacation Leave, or Personal Leave).
2. Enter the duration of your leave.
3. Provide the dates of your absence.
4. Add any additional details about your leave.
5. Enter your ID number (for school record-keeping purposes).
6. Choose an approver from the list provided.
7. Record the date and time of approval.
8. Specify the status of your leave request (Pending, Approved, or Rejected).
9. Add any remarks or comments about your leave request.
10. Enter the dates the form was created and updated.

## Field-by-Field Explanation

* **leave_application_form** (`leave_application_form_for_school`, text, required/optional): 
  This is the main content field where you will enter your leave application details.
* **type_of_leave** (`leave_type`, select_one, required/optional): 
  Select the type of leave you are requesting (Sick Leave, Vacation Leave, or Personal Leave).
* **duration_of_leave** (`duration`, number, required/optional): 
  Enter the number of days or hours you need for your leave.
* **from_date** (`from_date`, date, required/optional): 
  Enter the start date of your leave.
* **to_date** (`to_date`, date, required/optional): 
  Enter the end date of your leave.
* **leave_details** (`leave_details`, note, required/optional): 
  Add any additional details or explanations about your leave request.
* **submitter** (`submitter`, number, required/optional): 
  Enter your employee ID number for school record-keeping purposes.
* **approver** (`approver`, number, required/optional): 
  Choose a person authorized to approve or deny your leave request.
* **approval_date** (`approval_date`, date, required/optional): 
  Record the date the approval or rejection was made.
* **approval_time** (`approval_time`, time, required/optional): 
  Record the time the approval or rejection was made.
* **status** (`status`, select_one, required/optional): 
  Specify the status of your leave request (Pending, Approved, or Rejected).
* **remarks** (`remarks`, note, required/optional): 
  Add any remarks or comments about your leave request.
* **created_at** (`created_at`, date, required/optional): 
  Automatically generated date the form was created.
* **updated_at** (`updated_at`, date, required/optional): 
  Automatically generated date the form was last updated.
* **user_id** (`user_id`, number, required/optional): 
  Automatically generated ID for the teacher submitting the form.

## Tips
- Make sure to review your form carefully before submission.
- Provide accurate and complete information for efficient processing.
- Follow school policies and procedures for leave requests.
