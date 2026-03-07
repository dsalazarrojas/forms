<thinking>...
To create a comprehensive help guide for the "separation_form", I will first consider the purpose of the form. Based on the provided YAML, this form seems to be related to the separation or resignation of an employee, as it includes various fields such as "Exit Reason", "Departure Date", "Reason for Leaving", "New Employer", "New Job Title", and "Final Paycheck". This form likely serves as a template for documenting and processing employee separation information, including details about the reason for separation, new employment details, and benefits.
The form appears to be divided into multiple pages, each with its own set of fields. Page 1 is for employee details, page 2 for exit reason, page 3 for departure date, and so on. This suggests that the form is meant to be filled out in a sequential manner, one page at a time.
The various fields within the form suggest that it is meant for both the employee and the employer to provide information about the separation. This includes details such as the employee's ID, job title, job location, outplacement assistance, and final pay period.
To prevent duplication, it's likely that this form will be used to update or create a record in a database or other system. To prevent incorrect or incomplete form submissions, it's essential to provide clear guidelines for the user to follow.
</thinking>

# separation_form - Help Guide
## Purpose
The separation_form is a template used to document and process employee separation information. It provides a systematic way for employees to provide details about their separation, including exit reason, departure date, reason for leaving, new employment details, and benefits.

## How To Complete This Form
1. Fill out the form in a sequential manner, one page at a time.
2. Ensure that all required fields are filled out.
3. Provide accurate and complete information in each field.
4. Review the form carefully before submitting it.

## Field-by-Field Explanation
* **Employee Details** (`separation_form_page_1`, `text`, optional): Enter the employee's name, ID number, and other personal information.
* **Exit Reason** (`separation_form_page_2`, `select_one`, required): Choose the reason for the employee's exit from the provided options (Termination, Resignation, Other).
* **Departure Date** (`separation_form_page_3`, `date`, optional): Enter the date of the employee's departure.
* **Reason for Leaving** (`separation_form_page_4`, `text`, optional): Provide a brief explanation for the employee's departure.
* **New Employment Details** (`separation_form_page_5`, `text`, optional): Enter the details of the employee's new job or employment.
* **New Employer** (`separation_form_page_6`, `text`, optional): Enter the name and details of the employee's new employer.
* **New Job Title** (`separation_form_page_7`, `text`, optional): Enter the employee's new job title.
* **New Job Location** (`separation_form_page_8`, `text`, optional): Enter the location of the employee's new job.
* **Notice Period** (`separation_form_page_10`, `select_one`, optional): Choose the notice period for the employee's departure from the provided options (2 weeks, 4 weeks, 6 weeks, 8 weeks).
* **Final Paycheck** (`separation_form_page_11`, `number`, optional): Enter the final pay amount for the employee.
* **Outplacement Assistance** (`separation_form_page_12`, `select_multiple`, optional): Check the boxes for outplacement assistance provided (Yes, No).
* **Outplacement Assistance Reason** (`separation_form_page_13`, `text`, optional): Provide a brief explanation for the outplacement assistance.
* **Termination Reason** (`separation_form_page_14`, `text`, optional): Enter the reason for the termination.
* **Last Day of Work** (`separation_form_page_15`, `date`, optional): Enter the last day of work for the employee.
* **Last Date of Pay** (`separation_form_page_16`, `date`, optional): Enter the last date of pay for the employee.
* **Final Pay Period** (`separation_form_page_17`, `time`, optional): Enter the final pay period for the employee.
* **Next Payday** (`separation_form_page_18`, `date`, optional): Enter the next pay date for the employee.
* **Next Pay Amount** (`separation_form_page_19`, `text`, optional): Enter the next pay amount for the employee.
* **Separation Benefits** (`separation_form_page_20`, `note`, optional): Enter any separation benefits provided.
* **Benefits End Date** (`separation_form_page_21`, `date`, optional): Enter the benefits end date.
* **Employee ID** (`separation_form_page_22`, `text`, optional): Enter the employee's ID number.
* **Supervisor Signature** (`separation_form_page_23`, `text`, optional): Enter the supervisor's signature.
* **Employee Signature** (`separation_form_page_24`, `text`, optional): Enter the employee's signature.
* **Final Comments** (`separation_form_page_25`, `text`, optional): Enter any final comments.

## Tips
* Review the form carefully before submitting it to ensure accuracy and completeness.
* Ensure that all required fields are filled out.
* If a field is not applicable, leave it blank.
* If you have any questions or concerns, please contact the HR department.
