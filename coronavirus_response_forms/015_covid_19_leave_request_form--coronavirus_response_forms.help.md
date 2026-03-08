# COVID 19 Leave Request Form - Help Guide
## Purpose
The COVID-19 Leave Request Form is a tool used by employees to request leave due to COVID-19-related reasons. This form will be used by the employer to assess and manage leave requests, ensuring that the employee's health and well-being are taken care of during this time.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required fields with accurate and truthful information.
2. Choose the correct leave start and end dates.
3. Select the reason for your leave from the provided options.
4. Provide a detailed reason for your leave.
5. Select your current health status and describe your symptoms if you are symptomatic.
6. Certify that the information provided is truthful and accurate.
7. Agree to comply with all quarantine and health guidelines.
8. Authorize your employer to contact your healthcare provider if needed.
9. Provide any additional information that may be helpful for the employer to know.

## Field-by-Field Explanation

* **Full Name** (`requestor_name`, `text`, required): Enter your full name as it appears on your official identification.
* **Email Address** (`requestor_email`, `email`, required): Enter your work email address.
* **Phone Number** (`requestor_phone`, `text`, optional): Enter your work phone number.
* **Employee ID** (`employee_id`, `text`, required): Enter your employee ID number.
* **Department** (`department`, `text`, required): Enter the department you belong to.
* **Leave Start Date** (`leave_start_date`, `date`, required): Enter the date you would like to start your leave.
* **Leave End Date** (`leave_end_date`, `date`, required): Enter the date you would like to end your leave.
* **Number of Days Requested** (`number_of_days`, `number`, optional): Enter the number of days you are requesting for leave.
* **Reason for COVID-19 Leave** (`leave_reason`, `select_one`, required): Select one of the following reasons for your leave:
	+ Self-quarantine - exposure
	+ Self-quarantine - diagnosis
	+ Caring for family member
	+ Vaccine appointment
	+ Vaccine side effects
	+ Symptomatic and being tested
	+ Doctor recommendations
	+ Other
* **Detailed Reason** (`reason_description`, `text`, required): Provide a detailed reason for your leave.
* **Current Health Status** (`health_status`, `select_one`, required): Select one of the following options for your current health status:
	+ Asymptomatic
	+ Symptomatic
	+ COVID-19 positive
	+ Recovering
	+ Close contact exposure
* **If Symptomatic, Describe Symptoms** (`symptoms`, `text`, optional): If you are symptomatic, describe your symptoms.
* **I Certify...** (`truthful_information`, `select_one`, required): Select 'True' to certify that the information provided is truthful and accurate.
* **Will Comply** (`will_comply`, `select_one`, required): Select 'True' to agree to comply with all quarantine and health guidelines.
* **Authorize Employer Contact** (`authorization`, `select_one`, required): Select 'True' to authorize your employer to contact your healthcare provider if needed.
* **Additional Information** (`contact_during_leave`, `text`, optional): If you have any additional information to provide, enter it here.
* **Request Submission Date** (`request_date`, `date`, required): Enter the date you are submitting this request.
