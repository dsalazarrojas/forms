# Chronic Condition Time Off Form - Help Guide

## Purpose
This form is for requesting time off due to a chronic condition. It will help the employee's manager understand the reason for the request and provide necessary information to approve or deny the request.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required fields with accurate information.
2. Select the correct options for the type of leave requested and the chronic condition type.
3. Enter the start and end dates of the requested leave period.
4. Provide the estimated number of days needed for the leave.
5. Enter the name, phone number, and address of your healthcare provider.
6. Confirm that you will submit a medical certification or need to request one from your provider.
7. Provide any necessary information about work limitations and accommodations.
8. Confirm whether you have requested leave in the past.
9. Provide suggestions for work coverage while you are on leave.
10. Enter the name and phone number of an emergency contact.
11. Finally, certify that the information provided is accurate and complete.

## Field-by-Field Explanation

* **Full Name** (`employee_name`, Text, Required): Enter your full name as it appears on your company ID.
* **Employee ID** (`employee_id`, Text, Required): Enter your employee identification number.
* **Email Address** (`email_address`, Email, Required): Enter your company email address.
* **Phone Number** (`phone_number`, Text, Required): Enter your phone number for urgent contact.
* **Department** (`department`, Select One, Required): Select your work department from the list.
* **Manager Name** (`manager_name`, Text, Required): Enter your direct supervisor's name.
* **Hire Date** (`hire_date`, Date, Required): Enter the date you started working at the company.
* **Employment Type** (`employment_type`, Select One, Required): Select your employment status (full-time, part-time, etc.).
* **Type of Leave Requested** (`leave_type`, Select One, Required): Select the type of leave you are requesting (intermittent, etc.).
* **Chronic Condition Type** (`chronic_condition_type`, Select One, Required): Select the general category of your condition (autoimmune, etc.).
* **How Long Diagnosed** (`condition_duration`, Select One, Required): Select the time since your condition was diagnosed (less than 6 months, etc.).
* **Requested Start Date** (`requested_start_date`, Date, Required): Enter the date you need leave to start.
* **Requested End Date** (`requested_end_date`, Date, Required): Enter the expected return date.
* **Estimated Days Needed** (`estimated_days_needed`, Number, Required): Enter the total number of days needed for the leave.
* **Intermittent Schedule** (`intermittent_schedule`, Text, Optional): If applicable, describe your intermittent schedule.
* **Healthcare Provider Name** (`healthcare_provider_name`, Text, Required): Enter the name of your treating physician.
* **Healthcare Provider Phone** (`healthcare_provider_phone`, Text, Required): Enter the phone number of your doctor's office.
* **Healthcare Provider Address** (`healthcare_provider_address`, Text, Required): Enter the address of your doctor's office.
* **Medical Certification** (`medical_certification`, Select One, Required): Confirm whether you have already submitted a medical certification or need to request one from your provider.
* **Work Limitations** (`work_limitations`, Text, Optional): Provide any limitations you may have during work hours.
* **Accommodations Needed** (`accommodations_needed`, Select Multiple, Optional): Select any workplace accommodations you require.
* **Previous Leave Requests** (`previous_leave_requests`, Select One, Required): Confirm whether you have requested leave in the past.
* **Coverage Plan** (`coverage_plan`, Text, Optional): Provide suggestions for work coverage while you are on leave.
* **Emergency Contact** (`emergency_contact`, Text, Required): Enter the name and phone number of an emergency contact.
* **Employee Acknowledgment** (`employee_signature`, Select One, Required): Certify that the information provided is accurate and complete.
* **Date Submitted** (`date_submitted`, Date, Required): Enter the date you submit this form.
