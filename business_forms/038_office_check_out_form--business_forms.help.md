# office_check_out_form - Help Guide
## Purpose
This form is used to record office check out information, including office check out date, staff involved, reason for check out, check out time, and other details.

## How To Complete This Form
To complete this form, follow these steps:
1. Select "office_check_out_date" field and choose the check out date of the office.
2. Choose whether "staff_id" is checked out or not.
3. Choose whether "customer_id" is checked out or not.
4. Select "office_id" and choose "Yes" if the office is checked out.
5. Fill in the "check_out_time" field with the time the office was checked out.
6. Type in the "check_out_reason" field with a brief description of the reason for check out.
7. Fill in the "staff_name" field with the name of the staff who checked out the office.

## Field-by-Field Explanation
* **office_check_out_date** (office_check_out_date, date, required: false): Choose the date of the office check out.
* **staff_id** (staff_id, select_one, required: false): Check if staff is present in the office.
* **customer_id** (customer_id, select_one, required: false): Check if customer is present in the office.
* **office_id** (office_id, select_one, required: false): Check if office is checked out.
* **check_out_time** (check_out_time, time, required: false): Enter the time of the office check out.
* **check_out_reason** (check_out_reason, text, required: false): Type in the reason for checking out the office.
* **staff_name** (staff_name, text, required: false): Enter the name of the staff who checked out the office.
