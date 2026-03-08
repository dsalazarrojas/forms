<thinking>
  To ensure that you're completing the correct form, I'll first explain the purpose of this form. This form, "sign_out_log_form," is used to record employee and visitor sign-out logs, which are essential for tracking attendance and maintaining accurate records. It's a text-based form that captures necessary information for both employees and visitors, including check-out time, names, location, and other relevant details. 
  Before filling out this form, please note that you should not fill it out if you're already signed out, as this form is meant for recording completed or pending sign-out events. Please also ensure that you fill out all required fields, marked as "required," to ensure accurate and complete records.
</thinking>

# sign_out_log_form - Help Guide
## Purpose
The "sign_out_log_form" is used to record employee and visitor sign-out logs, ensuring accurate attendance tracking and record-keeping.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee or visitor name in the "employee_name" field.
2. If the sign-out log is for a visitor, enter their name in the "visitor_name" field.
3. Record the check-out time in the "check_out" field using the 24-hour format.
4. Specify the location in the "location" field.
5. Add any additional notes in the "notes" field.
6. Enter the date of the sign-out event in the "date" field.
7. Enter the time of the day in the "time" field.
8. Select the status of the sign-out event in the "sign_out_status" field.
## Field-by-Field Explanation
- **employee_name**: The name of the employee signing out.
  - Type: text
  - Required: false
- **visitor_name**: The name of the visitor signing out.
  - Type: text
  - Required: false
- **check_out**: The time the employee or visitor checked out, in 24-hour format.
  - Type: number
  - Required: false
- **location**: The location where the sign-out log is being recorded.
  - Type: text
  - Required: false
- **notes**: Any additional information about the sign-out event.
  - Type: note
  - Required: false
- **date**: The date of the sign-out event.
  - Type: date
  - Required: false
- **time**: The time of the day of the sign-out event.
  - Type: time
  - Required: false
- **assigned_to**: The person or party the sign-out log is assigned to.
  - Type: select_one
  - Required: false
- **sign_out_status**: The status of the sign-out event (completed, pending, or cancelled).
  - Type: select_multiple
  - Required: false
## Tips
- Ensure that all required fields are filled out for accurate records.
- Use the 24-hour format for check-out time.
- Use the correct status for the sign-out event.
