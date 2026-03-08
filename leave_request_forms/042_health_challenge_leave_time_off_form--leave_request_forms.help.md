# health-challenge-leave-time-off-form - Help Guide
## Purpose
This form is used by employees to request time off due to health reasons, requiring a doctor's note or certification for approval.

## How To Complete This Form
To complete this form, follow the steps below:

* Ensure you have a doctor's note or certification for your time off request.
* Double-check that you haven't already submitted a leave request for the same time period.
* Fill out the form with your information and attachments (if required).

## Field-by-Field Explanation
### Employee ID
* **Employee ID** (`employee_id`, `number`, required: false): Enter your unique employee ID number.
### Reason
* **Reason** (`reason`, `text`, required: false): Enter a brief description of your reason for requesting time off.
### Start Date
* **Start Date** (`start_date`, `date`, required: false): Enter the date you would like to start your time off.
### End Date
* **End Date** (`end_date`, `date`, required: false): Enter the date you would like to end your time off.
### Doctor Certification
* **Doctor Certification** (`doctor_certification`, `text`, required: false): Upload a copy of your doctor's certification or note (if required).
### Medical Records
* **Medical Records** (`medical_records`, `text`, required: false): Attach a copy of your medical records (if required).
### Doctor's Note
* **Doctor's Note** (`doctor_note`, `text`, required: false): Enter any additional information from your doctor (if required).
### Employee Status
* **Employee Status** (`employee_status`, `select_one`, required: false): Select your current status as an employee.
  * Options: Active, Inactive, Retired
### Leave Type
* **Leave Type** (`leave_type`, `select_one`, required: false): Select the type of leave you are requesting.
  * Options: Sick Leave, Family Leave, Bereavement Leave, Military Leave, Jury Duty Leave, Vacation Leave, Parental Leave, Other
### Approver Name
* **Approver Name** (`approver_name`, `text`, required: false): Enter the name of the approver (if required).
### Approver Approvals
* **Approver Approvals** (`approver_approvals`, `select_multiple`, required: false): Select the approval status from the approver.
  * Options: Approve, Reject, Hold
### Review Note
* **Review Note** (`review_note`, `text`, required: false): Enter any additional comments or notes for review.
### Employee Name
* **Employee Name** (`employee_name`, `text`, required: false): Enter your name as an employee.

## Tips
* Ensure all required fields are filled out before submitting the form.
* Attach any supporting documentation or attachments as required.
* Review the form carefully before submitting to ensure accuracy and completeness.
* If you have any questions or concerns, please contact your HR department.
