<thinking>
This form is used by employees to report errors or failures in the automation process. It is essential to provide as much detail as possible when submitting this form to help the IT team troubleshoot and resolve the issue efficiently. 
Please ensure you have permission to submit this form, and make sure you have not already submitted a report for this issue. If you are unsure or need help, please reach out to your supervisor or IT department.
Before completing this form, ensure that you have all necessary information and screenshots/logs ready for the IT team to review.
</thinking>

# Automation Error Report Request Form - Help Guide
## Purpose
The Automation Error Report Request Form is a tool used to report errors or failures in the automation process. This form is designed to gather information about the issue, its impact, and any steps taken to resolve it. Providing accurate and detailed information helps the IT team to quickly identify and resolve the issue.

## How To Complete This Form
1. Start by filling out the reporter's information, including their first name, last name, email, phone number, and department.
2. Choose the department you belong to from the list of options.
3. Provide a brief title for the error, describing what happened.
4. Describe the error in detail, including when it occurred and what was happening at the time.
5. Choose the type of error that occurred from the list of options.
6. Identify the affected system and specific component, if known.
7. If available, provide error codes or exact error messages.
8. Indicate the severity level of the error, from Critical to Informational.
9. Choose the priority level of the error, from Critical to Low.
10. Select how often the error occurs, from First Time to Constant.
11. Indicate if the error has had any impact on production, and how many users were affected.
12. Determine if data was affected and if there are any safety concerns.
13. Estimate the financial impact of the error, if known.
14. Describe any temporary fixes that have been applied.
15. Indicate if you can reproduce the error and provide steps to do so.
16. If available, attach screenshots or logs to help the IT team with troubleshooting.
17. Provide any related tickets or numbers for reference.
18. Choose the team who should handle the issue, from IT Support to Not Sure.
19. Indicate the expected resolution time and date.
20. Update your notification preferences for the resolution process.
21. Add any additional comments or details.
22. Sign with your digital signature to confirm submission.
23. Enter the current date for the report.

## Field-by-Field Explanation

* **Reporter Information (Page 1)** (`reporter_info`, note, required/optional): Your details as the reporter of the error.
* **Reporter Name (Page 1)** (`first_name`, text, required): Your first name.
* **Last Name (Page 1)** (`last_name`, text, required): Your last name.
* **Email Address (Page 1)** (`email`, email, required): Your contact email address.
* **Phone Number (Page 1)** (`phone`, text, required): Your contact phone number.
* **Department (Page 1)** (`department`, select_one, required): Your department, from the list of options.
* **Job Title (Page 1)** (`job_title`, text, optional): Your job title.
* **Error Information (Page 1)** (`error_info`, note, optional): Details about the error.
* **Error Date (Page 2)** (`error_date`, date, required): When the error occurred.
* **Error Time (Page 2)** (`error_time`, time, required): What time the error occurred.
* **Error Title (Page 2)** (`error_title`, text, required): A brief title of the error.
* **Error Description (Page 2)** (`error_description`, text, required): A detailed description of the error.
* **Error Type (Page 2)** (`error_type`, select_one, required): The type of error from the list of options.
* **Affected System (Page 3)** (`affected_system`, text, required): The system affected by the error.
* **System Component (Page 3)** (`system_component`, text, optional): A specific component of the system affected.
* **Error Code (Page 3)** (`error_code`, text, optional): If available, provide error codes.
* **Error Message (Page 3)** (`error_message`, text, optional): If available, provide the exact error message.
* **Severity (Page 4)** (`severity`, select_one, required): The severity level of the error, from Critical to Informational.
* **Priority (Page 4)** (`priority`, select_one, required): The priority level of the error, from Critical to Low.
* **Error Frequency (Page 4)** (`frequency`, select_one, required): How often the error occurs, from First Time to Constant.
* **Production Impact (Page 4)** (`production_impact`, select_one, required): Indicate if the error has impacted production.
* **Number of Users Affected (Page 4)** (`users_affected`, select_one, required): How many users were affected.
* **Data Impact (Page 5)** (`data_impact`, select_one, required): If data was affected by the error.
* **Safety Impact (Page 5)** (`safety_impact`, select_one, required): If there are any safety concerns.
* **Financial Impact (Page 5)** (`financial_impact`, select_one, optional): Estimate the financial impact, if known.
* **Temporary Fix (Page 5)** (`temporary_fix`, select_one, optional): If a temporary fix was applied, indicate yes or no.
* **Temporary Fix Description (Page 5)** (`workaround_description`, text, optional): Describe the temporary fix.
* **Reproduction (Page 5)** (`reproduction`, select_one, required): If you can reproduce the error, select yes or no.
* **Reproduction Steps (Page 5)** (`reproduction_steps`, text, optional): Describe the steps to reproduce the error, if known.
* **Attachments (Page 5)** (`attachments`, note, optional): Attach any screenshots or logs to help the IT team.
* **Attachments Available (Page 5)** (`screenshots_available`, select_one, optional): If you have screenshots available, select yes or no.
* **Logs Available (Page 5)** (`logs_available`, select_one, optional): If you have logs available, select yes or no.
* **Related Tickets (Page 5)** (`related_tickets`, text, optional): Provide any related tickets or numbers.
* **Assignment (Page 6)** (`assignment`, note, optional): Choose the team who should handle the issue.
* **Assigned Team (Page 6)** (`assigned_team`, select_one, optional): Choose the team who should handle the issue.
* **Expected Resolution (Page 6)** (`expected_resolution`, text, optional): Describe what you expect for the resolution.
* **Resolution Deadline (Page 6)** (`resolution_deadline`, date, optional): If known, enter the resolution deadline.
* **Notifications (Page 6)** (`notifications`, select_one, required): Update your notification preferences for the resolution process.
* **Additional Comments (Page 6)** (`additional_comments`, text, optional): Provide any additional comments or details.
* **Reporter Signature (Page 6)** (`reporter_signature`, text, required): Sign with your digital signature to confirm submission.
* **Report Date (Page 6)** (`report_date`, date, required): Enter the current date.
