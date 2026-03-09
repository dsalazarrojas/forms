# Day Off Request Form - Help Guide
## Purpose

This form is used to make requests for time off, such as vacation, sick leave, or other absences from work.

## How To Complete This Form

1. Answer the questions in this form truthfully and completely.
2. Select "Yes" or "No" for the "Employee Request" question, depending on whether you are making the request.
3. Enter the start and end dates of your time off request.
4. Provide a reason for your request in the "Reason" field.
5. If applicable, select "Yes" or "No" for the "Manager Approval" question.
6. Select "Active" or "Inactive" for the "Request Status" question.
7. If applicable, add any comments from your manager in the "Manager Comments" field.
8. If applicable, add any comments from the employee in the "Employee Comments" field.
9. Select "Yes" or "No" for the "Employee Approval" question.

## Field-by-Field Explanation

* **Employee Request** (`employee_request`, select_one, **required**: false): Check "Yes" to indicate that you are making a time off request, or check "No" if you are not.
* **Start Date** (`start_date`, date, **required**: false): Enter the start date of your time off request.
* **End Date** (`end_date`, date, **required**: false): Enter the end date of your time off request.
* **Reason** (`reason`, text, **required**: false): Provide a brief explanation for your time off request.
* **Manager Approval** (`manager_approval`, select_one, **required**: false): Select "Yes" to indicate that your manager has approved your time off request, or select "No" if they have not.
* **Request Status** (`request_status`, select_one, **required**: false): Select "Active" to indicate that your time off request is active, or select "Inactive" if it is not.
* **Signature** (`signature`, note, **required**: false): This field is for adding a signature, but it is not required.
* **Manager Comments** (`manager_comments`, note, **required**: false): This field is for comments from your manager, but it is not required.
* **Employee Comments** (`employee_comments`, note, **required**: false): This field is for comments from the employee, but it is not required.
* **Employee Approval** (`employee_approval`, select_one, **required**: false): Select "Yes" to indicate that you have approved your time off request, or select "No" if you have not.
* **Approved By** (`approved_by`, email, **required**: false): Enter the email of the person who approved your time off request.
* **Declined By** (`declined_by`, email, **required**: false): Enter the email of the person who declined your time off request.
* **Declined Reason** (`declined_reason`, text, **required**: false): Enter a reason why your time off request was declined.
* **Request ID** (`request_id`, text, **required**: false): Enter a unique ID for your time off request.
* **Date Submitted** (`date_submitted`, date, **required**: false): Enter the date when you submitted your time off request.
* **Submitted By** (`submitted_by`, email, **required**: false): Enter your email address.
* **Updated By** (`updated_by`, email, **required**: false): Enter the email of the person who updated your time off request.
* **Updated Date** (`updated_date`, date, **required**: false): Enter the date when your time off request was updated.
* **Form ID** (`form_id`, text, **required**: false): Enter a unique ID for the form.
* **Form Version** (`form_version`, text, **required**: false): Enter the version of the form.
* **Submitted To** (`submitted_to`, text, **required**: false): Enter the person or team you submitted your time off request to.
* **Assigned Tool** (`assigned_tool`, text, **required**: false): Enter the tool used for your time off request.
* **Email** (`email`, email, **required**: false): Enter your email address.

Note: The fields marked as "required: false" are not required fields and can be left blank if not applicable.
