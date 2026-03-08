<thinking>...checking the provided YAML fields for relevance and non-duplication...it seems like the form is for employees to request leave from work, and it's likely used by HR departments to manage leave applications. The form is fairly straightforward, with fields for employee information, leave details, and managerial approval. I've reviewed the fields and won't be duplicating any information in the help guide... </thinking>

# Application For Leave - Help Guide
## Purpose
This form is used to submit a leave application to your manager for approval.

## How To Complete This Form
To complete the application for leave form, follow these steps:

* Review the form carefully and ensure you have all necessary information before submitting.
* Enter your employee name and ID to identify yourself as the leave applicant.
* Choose the type of leave you are applying for (e.g. Annual, Sick, Medical, etc.).
* Select the start and end dates of your leave period.
* Specify the total number of working days you will be taking off.
* Provide a brief reason for your leave (optional).
* Enter any contact information for someone who can be reached during your leave (optional).
* Finally, submit the form for managerial approval.

## Field-by-Field Explanation
* **Employee name** (`employee_name`, text, required): Enter your full name as it appears on your employee ID.
* **Employee ID** (`employee_id`, text, required): Enter your internal employee number as found in the company directory.
* **Leave type** (`leave_type`, select_one, required): Choose the type of leave you are applying for (e.g. Annual, Sick, Medical, etc.). This will help your manager understand the nature of your leave.
* **Start date** (`start_date`, date, required): Enter the first day you will be taking leave from.
* **End date** (`end_date`, date, required): Enter the last day you will be taking leave until.
* **Total days** (`total_days`, number, required): Specify the total number of working days you will be taking off.
* **Reason for leave** (`reason`, text, optional): Provide a brief explanation for your leave application (e.g. doctor's appointment, family emergency, etc.).
* **Contact during leave** (`contact_during_leave`, text, optional): Enter any contact information for someone who can be reached during your leave (e.g. phone number, email, etc.).
* **Manager approval status** (`manager_approval`, select_one, required): This field is for managerial use only and will be updated automatically after approval or denial.
* **Manager comments** (`manager_comments`, text, optional): Your manager may leave notes or instructions for you after reviewing your application.
