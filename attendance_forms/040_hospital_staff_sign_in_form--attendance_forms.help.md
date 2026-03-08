# Hospital Staff Sign In Form - Help Guide
## Purpose
This form is designed to capture attendance information from hospital staff members on a daily or as required basis. It helps the management to keep track of staff presence and attendance status.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your employee name in the "Employee Name" field.
2. Select your department from the provided options.
3. Enter your shift start and end times in the "Shift Start Time" and "Shift End Time" fields respectively.
4. Enter the date you are signing in and the date you are signing out in the "Date In" and "Date Out" fields respectively.
5. Check your attendance status as "Active" or "Inactive" in the "Attendance Status" field.
6. Optionally, provide any comments in the "Comments" field.
7. Enter your phone number and email in the "Phone Number" and "Email" fields respectively.
8. Enter your employee ID in the "Employee ID" field.
9. Check if your shift length is "Yes" or "No" in the "Shift Length" field.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter your full name as it appears on your hospital ID.
* **Department** (`department`, select_one, optional): Select your department from the provided options. This field is optional, but it helps management to track your departmental attendance.
* **Shift Start Time** (`shift_start_time`, time, optional): Enter your shift start time if you are present on a shift.
* **Shift End Time** (`shift_end_time`, time, optional): Enter your shift end time if you are present on a shift.
* **Date In** (`date_in`, date, optional): Enter the date you are signing in to work. This field is optional but helps management to track your attendance history.
* **Date Out** (`date_out`, date, optional): Enter the date you are signing out to work. This field is optional but helps management to track your attendance history.
* **Attendance Status** (`attendance_status`, select_one, optional): Check your attendance status as "Active" or "Inactive".
* **Comments** (`comments`, note, optional): Provide any comments or feedback about your attendance or shift.
* **Phone Number** (`phone_number`, text, optional): Enter your phone number.
* **Email** (`email`, email, optional): Enter your email address.
* **Employee ID** (`employee_id`, number, optional): Enter your employee ID number.
* **Shift Length** (`shift_length`, select_multiple, optional): Check "Yes" if you are on a shift, "No" otherwise.

Note: This form is not intended to be a comprehensive attendance tracking system, rather a simple sign-in sheet for hospital staff members to report their attendance.
