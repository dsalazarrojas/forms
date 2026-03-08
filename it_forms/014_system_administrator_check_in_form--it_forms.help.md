# System Administrator Check In Form - Help Guide
## Purpose
This form is used by system administrators to check in and out of the system, providing their status and allowing for optional notes and contact information to be included.

## How To Complete This Form
- Fill in the **Check In Time** field with your current time of check in.
- Enter your **Administrator Name** in the corresponding field.
- Provide a **Reason For Check In** if you need to specify why you are checking in.
- Select your current **Status** from the dropdown options (Active, Inactive, On Break, or On Vacation).
- Optionally, add any **Notes** related to your check in.
- Enter your **Email** and **Phone** for contact information, if needed.
- Check out of the system by filling out the **Check Out Time** field and entering your **Administrator Name** again.

## Field-by-Field Explanation
* **Check In Time** (`system_administrator_check_in_page`, `text`, required/optional): Enter the current time of your check in.
* **Administrator Name** (`admin_name`, `text`, required/optional): Enter your name as a system administrator.
* **Reason For Check In** (`reason_for_check_in`, `text`, required/optional): Provide a brief reason for checking in, if necessary.
* **Status** (`admin_status`, `select_one`, required/true): Select your current status from the options provided (Active, Inactive, On Break, or On Vacation).
* **Notes** (`notes`, `note`, required/false): Add any relevant notes about your check in.
* **Email** (`admin_email`, `email`, required/false): Enter your email address for contact purposes.
* **Phone** (`admin_phone`, `text`, required/false): Enter your phone number for contact purposes.
* **Check Out Time** (`check_out_time`, `time`, required/false): Fill out this field to check out of the system.
* **Enter Check Out** (`system_administrator_check_out_page`, `text`, required/false): Enter your name to check out of the system.
