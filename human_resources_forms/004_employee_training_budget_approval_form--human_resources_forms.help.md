# employee_training_budget_approval_form - Help Guide
## Purpose
This form is used for employees to request and managers to approve training budgets for professional development.

## How To Complete This Form

1. Ensure you have the latest version of the form.
2. Fill out the form accurately and thoroughly.
3. Enter your employee ID number and name in the `employee_requesting_training` and `employee_name` fields.
4. Enter the date of the training in the `training_date` field.
5. Enter the start and end dates of the training in the `start_date` and `end_date` fields.
6. Enter the number of training hours you plan to attend in the `training_hours` field.
7. Select the type of training you are requesting in the `training_type` field (Online Course, Classroom Course, or Workshop).
8. Select the location of the training in the `training_location` field (Online or In-Person).
9. If the training is conducted by an internal provider, select "In-house" in the `training_cost` field. Otherwise, select "External".
10. If you are an employee requesting training, select "HR" as the `submitted_by` field. If you are a manager approving the training, select "Other".
11. Select the status of the request in the `status` field (Active, Inactive, or Completed).
12. Optionally, add any additional comments in the `comments` field.
13. If you are a manager, select the approval status in the `approval_status` field (Approved, Rejected, or In Progress).
14. If you are a manager and rejecting the request, enter the reason for rejection in the `reason_for_rejection` field.
15. Enter the name of the person approving the request in the `approver_name` field.
16. Enter the email of the person approving the request in the `approver_email` field.
17. Enter the phone number of the person approving the request in the `approver_phone` field.
18. If you are a manager, enter your signature in the `approver_signature` field.
19. Enter the date and time the request was approved in the `approval_date` and `approval_time` fields.
20. Select the current status of the request in the `status_notes` field (In Progress, Approved, or Rejected).
21. Enter any additional status notes in the `status_notes` field.

## Field-by-Field Explanation

* **Employee Requesting Training** (`employee_requesting_training`, text, required): Enter your employee ID number and name.
* **Employee Name** (`employee_name`, text, required): Enter your name.
* **Training Date** (`training_date`, date, required): Enter the date of the training.
* **Start Date** (`start_date`, date, required): Enter the start date of the training.
* **End Date** (`end_date`, date, required): Enter the end date of the training.
* **Training Hours** (`training_hours`, number, required): Enter the number of training hours you plan to attend.
* **Training Type** (`training_type`, select_multiple, required): Select the type of training you are requesting (Online Course, Classroom Course, or Workshop).
* **Training Location** (`training_location`, select_multiple, required): Select the location of the training (Online or In-Person).
* **Training Cost** (`training_cost`, select_multiple, required): If the training is conducted by an internal provider, select "In-house". Otherwise, select "External".
* **Approval Status** (`approval_status`, select_one, required): If you are a manager, select "Approved" to approve the request. If you are an employee, select "In Progress" or "Rejected" depending on the status of your request.
* **Reason for Rejection** (`reason_for_rejection`, text, required if approval status is rejected): Enter the reason for rejection if your request is rejected.
* **Approver Name** (`approver_name`, text, required if approval status is approved): Enter the name of the person approving the request.
* **Approver Email** (`approver_email`, email, required if approval status is approved): Enter the email of the person approving the request.
* **Approver Phone** (`approver_phone`, text, required if approval status is approved): Enter the phone number of the person approving the request.
* **Approver Signature** (`approver_signature`, note, required if approval status is approved): Enter your signature as the person approving the request.
* **Comments** (`comments`, note, optional): Optionally, enter any additional comments regarding the request.
* **Approval Date** (`approval_date`, date, required if approval status is approved): Enter the date the request was approved.
* **Approval Time** (`approval_time`, time, required if approval status is approved): Enter the time the request was approved.
* **Status** (`status`, select_one, required): Select the current status of the request (Active, Inactive, or Completed).
* **Status Notes** (`status_notes`, select_multiple, optional): Select any additional status notes regarding the request.
* **Submitted By** (`submitted_by`, select_one, required): Select whether you are an employee (HR) or a manager (Other).
* **Submitted At** (`submitted_at`, date, required): Enter the date and time the request was submitted.
* **Submitted Time** (`submitted_time`, time, required): Enter the time the request was submitted.
* **Approval Date** (`approval_date`, date, required if approval status is approved): Enter the date the request was approved.
* **Approval Time** (`approval_time`, time, required if approval status is approved).
* **Status Notes** (`status_notes`, select_multiple, optional): Select any additional status notes regarding the request.
* **Approver Name** (`approver_name`, text, required if approval status is approved): Enter the name of the person approving the request.
* **Approver Email** (`approver_email`, email, required if approval status is approved): Enter the email of the person approving the request.
* **Approver Phone** (`approver_phone`, text, required if approval status is approved): Enter the phone number of the person approving the request.
* **Approver Signature** (`approver_signature`, note, required if approval status is approved): Enter your signature as the person approving the request.

## Tips

* Ensure you have filled out the form accurately and thoroughly.
* Review your request carefully before submitting.
* If you are a manager, review the request carefully before approving or rejecting it.
* If you are an employee, be aware that submitting duplicate requests can cause confusion and delay the approval process.
* Keep your comments and status notes clear and concise.
* If you are a manager, ensure you enter the correct approval status and date/time.
* If you are an employee, be patient and wait for the approval process to be completed before resubmitting your request.
