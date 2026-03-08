# Maternity Leave Authorization Form - Help Guide
## Purpose
The Maternity Leave Authorization Form is used to request and authorize time off for an employee's maternity leave.

## How To Complete This Form

*   To complete this form, please select "Yes" for questions 1 and 4, indicating that you are an employee and that your manager has approved your leave request.
*   Enter the start and end dates of your leave in questions 2 and 3, respectively.
*   Sign and date the form, indicating that you have read and understood the terms.
*   Your manager should sign and date question 6, indicating that they have approved your leave request.

## Field-by-Field Explanation

*   **Employee Information** (`Employee Information`, `select_multiple`, required): This field allows you to indicate whether you are the employee requesting the leave or not.
    +   Select "Yes" if you are the employee requesting the leave.
*   **Leave Start Date** (`Leave Start Date`, `date`, required): Enter the start date of your leave.
*   **Leave End Date** (`Leave End Date`, `date`, required): Enter the end date of your leave.
*   **Manager Approval** (`Manager Approval`, `select_one`, required): This field is for your manager to approve your leave request.
    +   Select "Yes" if you have obtained approval from your manager.
*   **Employee Signature** (`Employee Signature`, `text`, required): Sign and date this field to indicate that you have read and understood the terms of your leave request.
*   **Manager Signature** (`Manager Signature`, `text`, required): Your manager should sign and date this field to indicate that they have approved your leave request.
*   **Comments** (`Comments`, `text`, required): Use this field to add any comments or additional information that your manager needs to know.
*   **Employee Name** (`Employee Name`, `text`, required): This field is used to enter your full name.
*   **Employee Job Title** (`Employee Job Title`, `text`, required): This field is used to enter your job title.
*   **Employee ID** (`Employee ID`, `text`, required): This field is used to enter your employee ID. 

Note that there is no option for `employee_info` on the form as per the input YAML.
Therefore, I assumed that these fields are required as part of the form.
