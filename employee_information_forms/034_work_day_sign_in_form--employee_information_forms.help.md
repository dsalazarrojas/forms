# Work Day Sign In Form - Help Guide
## Purpose
This form is designed to collect attendance information from employees, ensuring accurate and up-to-date records.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your company name.
2. Enter the time you sign in to work.
3. Enter the time you sign out of work.
4. Enter your employee ID.
5. Select your attendance status (Absent, Late, On Time, Leave Early, On Leave, or Working From Home).
6. Enter the number of hours you worked.
7. (Optional) Select the location of your work (Office, On Site, or Remote).
8. (Optional) Enter the name of the work site.
9. (Optional) Enter any additional notes.
10. (Optional) Enter the supervisor's signature.

## Field-by-Field Explanation
### company_name
**Company Name** (`company_name`, `text`, required)
Enter your company's name.

### sign_in_time
**Sign In Time** (`sign_in_time`, `time`, required)
Enter the time you sign in to work.

### sign_out_time
**Sign Out Time** (`sign_out_time`, `time`, required)
Enter the time you sign out of work.

### employee_id
**Employee ID** (`employee_id`, `number`, required)
Enter your unique employee ID.

### attendance_status
**Attendance Status** (`attendance_status`, `select_one`, required)
Select your attendance status (Absent, Late, On Time, Leave Early, On Leave, or Working From Home).

### work_hours
**Work Hours** (`work_hours`, `number`, required)
Enter the number of hours you worked.

### location
**Location** (`location`, `select_multiple`, optional)
Select the location of your work (Office, On Site, or Remote).

### work_site
**Work Site** (`work_site`, `text`, optional)
Enter the name of the work site (optional).

### notes
**Notes** (`notes`, `text`, optional)
Enter any additional notes or comments.

### supervisor_signature
**Supervisor Signature** (`supervisor_signature`, `text`, optional)
Enter the supervisor's signature (optional).
