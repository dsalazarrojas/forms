<thinking>...</thinking>

# COVID 19 Leave Form - Help Guide

## Purpose
This form is designed to collect information for COVID-19 related leave requests from employees. It gathers essential details such as employee information, leave type, dates, and manager approval status.

## How To Complete This Form
1. Select the type of COVID-19 related leave requested (e.g., COVID-19 Infection, Exposure to COVID-19, etc.).
2. Enter your employee details, including full name, employee ID, department, job position, email address, and phone number.
3. Provide the dates for the leave start and end, and specify the number of days requested.
4. Choose whether the leave is paid or unpaid.
5. Select the type of certification required (e.g., Doctor's Note, Test Results, etc.).
6. Determine if you can work from home during the leave period.
7. Indicate if work coverage has been arranged.
8. Choose the status of manager approval.
9. Enter any additional comments or details for the manager's review.

## Field-by-Field Explanation

* **Full Name** (`employee_name`, `text`, **required**): Enter your full name as it appears on your official documents.
* **Employee ID** (`employee_id`, `text`, **required**): Provide your employee ID number or code.
* **Department** (`department`, `text`, **required**): Enter your department name or code.
* **Job Position** (`position`, `text`, **required**): Specify your job title or position.
* **Email Address** (`email`, `email`, **required**): Enter your official email address.
* **Phone Number** (`phone`, `text`, **required**): Provide your phone number.
* **Direct Supervisor Name** (`supervisor_name`, `text`, **required**): Enter your direct supervisor's name.
* **Type of Leave Requested** (`leave_type`, `select_one`, **required**): Select the type of COVID-19 related leave you are requesting (e.g., COVID-19 Infection, Exposure to COVID-19, etc.).
* **Start Date of Leave** (`leave_start_date`, `date`, **required**): Enter the start date of your leave.
* **Expected End Date** (`leave_end_date`, `date`, **required**): Enter the expected end date of your leave.
* **Number of Days Requested** (`total_days`, `number`, **required**): Specify the number of days you are requesting for leave.
* **Paid or Unpaid Leave** (`paid_unpaid`, `select_one`, **required**): Choose whether the leave is paid or unpaid.
* **Detailed Reason for Leave** (`detailed_reason`, `text`, **required**): Enter a detailed reason for your leave request.
* **Medical Certification Attached** (`medical_certification`, `select_one`, **required**): Check if you are attaching a medical certification.
* **Type of Certification** (`certification_type`, `select_one`, **optional**): If medical certification is attached, select the type of certification (e.g., Doctor's Note, Test Results, etc.).
* **Can work from home during leave** (`work_from_home`, `select_one`, **required**): Determine if you can work from home during the leave period.
* **Work coverage arranged** (`coverage`, `select_one`, **required**): Indicate if work coverage has been arranged.
* **Person covering responsibilities** (`coverage_person`, `text`, **optional**): If work coverage is not arranged, enter the person covering your responsibilities.
* **Manager Approval Status** (`manager_approval`, `select_one`, **required**): Select the status of manager approval (e.g., Approved, Pending Review, etc.).
* **Approval Date** (`approval_date`, `date`, **optional**): If manager approval status is pending, enter the date for the approval review.
* **Additional comments or details** (`reason_section`, `note`, **optional**): Enter any additional comments or details for the manager's review.
