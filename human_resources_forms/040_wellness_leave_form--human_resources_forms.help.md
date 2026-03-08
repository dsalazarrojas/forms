<thinking>
To create a help guide for the Wellness Leave Form, I first need to understand the form's purpose and the fields it contains. Based on the provided YAML, the form appears to be used to record or request leave of some sort, possibly for wellness or health reasons. The form likely requires employee details, dates, and possibly approval from a manager.

Before proceeding, I'll ensure that this form isn't a duplicate or redundant, and that the fields are correctly mapped to the form's purpose. Let's review the fields:

- Employee Name: a required field for identifying the employee taking leave.
- Reason For Absence: a field to describe the reason for the leave, likely for internal records or reporting.
- Dates Request: a field for specifying the requested dates of leave.
- Start Date: a field for the start date of the leave.
- End Date: a field for the end date of the leave.
- Duration: possibly an optional field for specifying the duration of leave.
- Manager Approval: a field for obtaining approval from the manager, possibly for validation or escalation.
- Employee Status: an optional field for tracking employee status while on leave.
- Department: an optional field possibly for departmentalizing leave records.
- Team Member: an optional field for identifying team members affected by the leave.

Upon reviewing the fields, I see that they seem to be a mix of identifying employee details, leave dates, and approval processes. I'll create a help guide that covers the form's purpose, how to complete it, and a field-by-field explanation for each page.

</thinking>

# Wellness Leave Form - Help Guide
## Purpose
The Wellness Leave Form is used to record or request leave for employees, possibly for wellness or health reasons. It helps in maintaining internal records and ensuring manager approval before granting leave.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your employee name in the `Employee Name` field.
2. Provide a brief reason for your absence in the `Reason For Absence` field.
3. Specify the `Start Date` and `End Date` of your leave using the calendar picker.
4. Optionally, select the duration of your leave in the `Duration` field.
5. If required, obtain approval from your manager in the `Manager Approval` field.
6. Select your current `Employee Status` from the options, if applicable.
7. If applicable, select your department and team members affected by the leave.
8. Click "Submit" to save your form.

## Field-by-Field Explanation
### 1. **Employee Name**
Employee Name (`employee_name`, text, required): Enter your name as it appears on your employee ID.

### 2. **Reason For Absence**
Reason For Absence (`reason_for_absence`, text, optional): Describe the reason for your leave.

### 3. **Dates Request**
Dates Request (`dates_request`, date, optional): Select the start and end dates of your leave using the calendar picker.

### 4. **Start Date**
Start Date (`start_date`, date, optional): Select the start date of your leave.

### 5. **End Date**
End Date (`end_date`, date, optional): Select the end date of your leave.

### 6. **Duration**
Duration (`duration`, number, optional): If applicable, select the duration of your leave.

### 7. **Manager Approval**
Manager Approval (`manager_approval`, select_one, optional): If required, select your manager's approval from the options.

### 8. **Employee Status**
Employee Status (`employee_status`, select_multiple, optional): Select your current status from the options.

### 9. **Department**
Department (`department`, select_one, optional): Select your department if applicable.

### 10. **Team Member**
Team Member (`team_member`, select_multiple, optional): Select team members affected by your leave, if applicable.
