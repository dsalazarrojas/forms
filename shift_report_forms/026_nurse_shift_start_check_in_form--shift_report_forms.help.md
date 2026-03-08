# nurse_shift_start_check_in_form - Help Guide
## Purpose
The nurse_shift_start_check_in_form is used to collect information about a nurse's shift start time, employee details, and other relevant data for attendance and payroll purposes.

## How To Complete This Form
1. Enter your Employee ID and Employee Name in the corresponding fields.
2. Select your Shift Type and Shift Location.
3. Enter your Shift Start Time.
4. Choose your Shift Manager.
5. (Optional) Enter your Shift Notes, Contact Phone Number, and Contact Email.
6. Click the "Submit" button to complete the form.

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, `number`, required): Enter your unique employee ID number.
* **Employee Name** (`employee_name`, `text`, required): Enter your name as it appears on your personnel records.
* **Shift Start Time** (`shift_start_time`, `time`, required): Enter the time you start your shift in 24-hour format (e.g., 08:00).
* **Shift Type** (`shift_type`, `select_one`, required): Select your shift type from the options provided.
* **Shift Location** (`shift_location`, `select_multiple`, required): Select all the locations where you will be working on your shift.
* **Shift Notes** (`shift_notes`, `note`, optional): Enter any additional notes or comments about your shift.
* **Contact Phone Number** (`contact_phone_number`, `text`, optional): Enter your contact phone number, in case we need to reach you.
* **Contact Email** (`contact_email`, `email`, optional): Enter your contact email, in case we need to reach you.
* **Shift Manager** (`shift_manager`, `select_one`, required): Select your shift manager from the options provided.
* **Shift Start Check In 2** (`start_check_in_11`, `text`, optional): Enter any additional comments or information about your shift start.
