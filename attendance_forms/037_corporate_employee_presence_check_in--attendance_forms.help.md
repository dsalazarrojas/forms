# Corporate Employee Presence Check In - Help Guide
## Purpose
The Corporate Employee Presence Check In form is a tool for employees to report their presence and status in the company. It helps managers and administrators track attendance, locations, and departmental approvals.

## How To Complete This Form

To complete this form, follow the steps below:

1. Ensure you are on the correct page for the date you are checking in. Each page corresponds to a specific date.
2. Fill out each field as instructed below.

## Field-by-Field Explanation

### Check In Date
* **Check In Date** (`check_in_date`, date, required/optional): Fill in the date you are checking in. This date will correspond to the page you are currently on.

### Employee Name
* **Employee Name** (`employee_name`, text, required/optional): Enter your name as it appears on your company ID badge.

### Department
* **Department** (`department`, select_one, required/optional): Select the department you are currently working in. You can select 'Yes' if you are working in that department, or 'No' if you are not.

### Location
* **Location** (`location`, select_one, required/optional): Select the location you are currently at. You can select 'Yes' if you are at that location, or 'No' if you are not.

### Comments
* **Comments** (`comments`, note, required/optional): If you have any comments or information about your check-in, type them here.

### Manager Approvals
* **Manager Approvals** (`manager_approvals`, select_multiple, required/optional): List any manager approvals for your check-in. Select 'Yes' for each manager that has approved your presence.

### Check In Time
* **Check In Time** (`check_in_time`, time, required/optional): Fill in the time you checked in.

### Employee ID
* **Employee ID** (`employee_id`, text, required/optional): Enter your employee ID as it appears on your ID badge.

### Manager Name
* **Manager Name** (`manager_name`, text, required/optional): If you have a manager that has approved your presence, enter their name.

### Department Approvals
* **Department Approvals** (`department_approvals`, select_multiple, required/optional): List any departmental approvals for your check-in. Select 'Yes' for each department that has approved your presence.
