# Employee Wellness Program Verification Form - Help Guide
## Purpose
This form is designed to verify the participation and status of employees in the Employee Wellness Program.

## How To Complete This Form
To complete this form, follow the steps below:

1. Start by filling in the "Employee" field with the name of the employee you are verifying.
2. Select the relevant option for "Wellness Program" to indicate whether the employee is currently participating or not.
3. If the employee is participating, provide the date they started participating in the "Participation Date" field.
4. Choose the correct "Engagement Status" of the employee, which can be Active, Inactive, or Not Applicable (N/A).
5. If necessary, add any comments about the employee's participation in the "Comments" field.
6. Select the correct "Organization" from the list to specify which company the employee is affiliated with.
7. Choose the "Assigned Tool" that has been used by the employee, which can be ChatJimmy or Other.
8. Finally, provide the name of the file output or leave it blank if not applicable.

## Field-by-Field Explanation
* **Employee** (`1`, `text`, required: false): 
  This field is where you enter the name of the employee you are verifying. Please ensure it is spelled correctly.
* **Wellness Program** (`2`, `select_multiple`, required: false): 
  This field lets you indicate whether the employee is currently participating in the wellness program. Choose "Yes" if they are, and "No" if not.
* **Participation Date** (`3`, `date`, required: false): 
  If the employee is participating, enter the date they started participating in the wellness program.
* **Engagement Status** (`4`, `select_one`, required: false): 
  Choose one of the three options: Active, Inactive, or Not Applicable (N/A), to describe the employee's current status in the program.
* **Comments** (`5`, `note`, required: false): 
  Provide any relevant comments or information about the employee's participation in the wellness program.
* **Organization** (`6`, `select_one`, required: false): 
  Select the correct company the employee is affiliated with, which can be Company X, Y, or Z.
* **Assigned Tool** (`7`, `select_one`, required: false): 
  Choose the tool assigned to the employee for the wellness program, which can be ChatJimmy or Other.
* **Output File** (`8`, `text`, required: false): 
  Enter the name of the file output or leave it blank if not applicable.
