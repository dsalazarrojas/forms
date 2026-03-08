# Employee Check In Attendance Form - Help Guide
## Purpose
This form is used for tracking employee attendance, including check-in and check-out times, shifts, locations, and reasons for leave. It is designed to be completed by employees and signed off by supervisors and clients to ensure accurate and up-to-date attendance records.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the location of your shift using the "Shift Location" field.
2. Choose the shift you are working using the "Shift" field.
3. Enter your check-in time using the "Check-in Time" field.
4. Enter your check-out time using the "Supervisor Check Out Time" field (only if applicable).
5. Choose your attendance status using the "Attendance Status" field (optional).
6. Add any comments or notes about your shift using the "Comments" field (optional).
7. Sign the form with your supervisor's signature and their title in the "Supervisor Signature" and "Supervisor Title" fields.
8. Sign the form with the client's signature and their title in the "Client Signature" and "Client Title" fields.

## Field-by-Field Explanation
- **Shift Location** (`shift_location`, select_multiple, required): Choose the location of your shift from the available options.
- **Check-in Time** (`checkin_time`, time, required): Enter the time you arrived at work.
- **Check-in Date** (`checkin_date`, date, required): Enter the date you arrived at work.
- **Shift Start Time** (`shift_start_time`, time, required): Enter the start time of your shift.
- **Shift End Time** (`shift_end_time`, time, required): Enter the end time of your shift.
- **Shift Start Date** (`shift_start_date`, date, required): Enter the date of your shift.
- **Shift End Date** (`shift_end_date`, date, required): Enter the end date of your shift.
- **Employee Name** (`employee_name`, text, required): Enter your name.
- **Employee ID** (`employee_id`, text, required): Enter your ID number.
- **Shift Notes** (`shift_notes`, note, required): Add any notes about your shift.
- **Reason for Leave** (`reason_for_leave`, select_multiple, required): Choose a reason for your leave.
- **Location** (`location`, select_one, required): Choose the location of your shift.
- **Shift** (`shift`, select_one, required): Choose the shift you are working.
- **Attendance Status** (`attendance_status`, select_one, required): Choose your attendance status.
- **Comments** (`comments`, text, required): Add any comments about your shift.
- **Supervisor Signature** (`supervisor_signature`, text, required): Sign your name as the supervisor.
- **Supervisor Name** (`supervisor_name`, text, required): Enter your supervisor's name.
- **Supervisor Title** (`supervisor_title`, text, required): Enter your supervisor's title.
- **Client Signature** (`client_signature`, text, required): Sign your name as the client.
- **Client Name** (`client_name`, text, required): Enter the client's name.
- **Client Title** (`client_title`, text, required): Enter the client's title.
- **Attendance Status 2** (`attendance_status_2`, select_one, required): Choose your attendance status 2.
- **Employee Signature** (`employee_signature`, text, required): Sign your name.
- **Supervisor Check Out Time** (`supervisor_check_out_time`, time, required): Enter your supervisor's check-out time.
- **Shift Length** (`shift_length`, number, required): Enter the length of your shift.

Note that this form is designed to be completed by employees, but signed off by supervisors and clients.
