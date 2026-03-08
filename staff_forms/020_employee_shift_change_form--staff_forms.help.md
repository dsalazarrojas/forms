# Employee Shift Change Form - Help Guide
## Purpose
This form is used to submit changes to an employee's shift schedule. It is intended for managers to update shift start and end times, assign shifts to employees, and track notes related to the shift change.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the employee whose shift you want to change.
2. Enter the manager's name and email address.
3. Enter the start and end times of the shift change.
4. Select the employee to whom the shift is assigned.
5. Enter the length of the shift change.
6. Enter the start and end dates of the shift change.
7. Add any additional notes related to the shift change.

## Field-by-Field Explanation
### **Employee Shift** (`employee_shift`):
A date field where you can select the employee whose shift you want to change.

*   *Type:* date
*   *Required:* No
*   *Hint:* null

### **Manager Name** (`manager_name`):
The name of the manager responsible for the shift change.

*   *Type:* text
*   *Required:* Yes

### **Manager Email** (`manager_email`):
The email address of the manager responsible for the shift change.

*   *Type:* email
*   *Required:* Yes

### **Start Time** (`start_time`):
The start time of the shift change.

*   *Type:* time
*   *Required:* Yes

### **End Time** (`end_time`):
The end time of the shift change.

*   *Type:* time
*   *Required:* Yes

### **Notes** (`notes`):
Additional notes related to the shift change.

*   *Type:* note
*   *Required:* No

### **Assigned To** (`assigned_to`):
The employee to whom the shift is assigned.

*   *Type:* select_one
*   *Options:* chatjimmy, Other

### **Assigned Date** (`assigned_date`):
The date the shift was assigned.

*   *Type:* date
*   *Required:* No

### **Shift Length** (`shift_length`):
The length of the shift change.

*   *Type:* number
*   *Required:* Yes

### **Start Date** (`start_date`):
The start date of the shift change.

*   *Type:* date
*   *Required:* Yes

### **End Date** (`end_date`):
The end date of the shift change.

*   *Type:* date
*   *Required:* Yes

### **Notes 2** (`notes_2`), **Notes 3** (`notes_3`), ..., **Notes 15** (`notes_15`):
Additional notes related to the shift change.

*   *Type:* note
*   *Required:* No

Note: This form is intended for internal use only. Please ensure that you have the necessary authorization to access and complete this form.
