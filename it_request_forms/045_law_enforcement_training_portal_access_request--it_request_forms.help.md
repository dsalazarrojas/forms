# law_enforcement_training_portal_access_request - Help Guide
## Purpose
The law enforcement training portal access request form is used to request access to the law enforcement training portal for law enforcement personnel. This form is used to verify the accuracy of the request and ensure the correct training areas are selected.

## How To Complete This Form
1. Fill in the required fields for the supervisor's information, employee's information, training area, date of birth, years of service, and request date.
2. Select the correct training status (Approved, Denied, Pending) and verification status (True, False).
3. Enter any additional notes or reason for the request.
4. Review and submit the form.

## Field-by-Field Explanation

* **Supervisor Name** (`supervisor_name`, text, required): Enter the name of the supervisor.
* **Supervisor Title** (`supervisor_title`, text, required): Enter the title of the supervisor (e.g., Captain, Sergeant, etc.).
* **Employee Name** (`employee_name`, text, required): Enter the name of the employee requesting access.
* **Training Area** (`training_area`, text, required): Select the area for which the employee is requesting access.
* **Date of Birth** (`date_of_birth`, date, required): Enter the employee's date of birth in the format mm/dd/yy.
* **Years of Service** (`years_of_service`, number, required): Enter the employee's years of service.
* **Email** (`email`, email, optional): Enter the email of the employee, if available.
* **Phone** (`phone`, text, optional): Enter the phone number of the employee, if available.
* **Supervisor Phone** (`supervisor_phone`, text, optional): Enter the phone number of the supervisor, if available.
* **Supervisor Email** (`supervisor_email`, email, optional): Enter the email of the supervisor, if available.
* **Supervisor Title (Other)** (`supervisor_title_other`, text, optional): Enter any other title of the supervisor.
* **Employee Phone** (`employee_phone`, text, optional): Enter the phone number of the employee, if available.
* **Employee Email** (`employee_email`, email, optional): Enter the email of the employee, if available.
* **Supervisor Department** (`supervisor_department`, text, optional): Enter the department of the supervisor, if available.
* **Employee Department** (`employee_department`, text, optional): Enter the department of the employee, if available.
* **Training Status** (`training_status`, select_one, required): Select the status of the training request (Approved, Denied, Pending).
* **Verification** (`verification`, select_multiple, required): Select whether this request is for verification.
* **Reason** (`reason`, text, optional): Enter any reason or additional notes.
* **Additional Notes** (`additional_notes`, note, optional): Enter any additional notes or comments.
* **Request Date** (`request_date`, date, required): Enter the date of the request in the format mm/dd/yy.
* **Supervisor Notes** (`supervisor_notes`, note, optional): Enter any notes or comments from the supervisor.
* **Reviewer Notes** (`reviewer_notes`, note, optional): Enter any notes or comments from the reviewer.
* **Approved By** (`approved_by`, select_one, required): Select the user that approved the request (Approved, Denied, Pending).
