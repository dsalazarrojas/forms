<thinking> 
This form is designed to provide access to employee records for various levels of access, allowing users to view, edit, or add new employee information, as well as delete existing records. To ensure accuracy and prevent duplication, please fill out the form carefully, selecting the correct access level and ensuring that all required fields are completed.

## Employee Records Access Form - Help Guide

## Purpose

This form is used to grant access to employee records for authorized personnel, allowing them to view, edit, or add new employee information, or delete existing records.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the access level you wish to grant:
	* View Employee Information: allows viewing of employee details.
	* Edit Employee Information: allows editing of employee details.
	* Add New Employee: allows creation of new employee records.
	* Delete Employee: allows deletion of existing employee records.
2. Select the employee group(s) you wish to grant access to:
	* HR Department
	* Accounting Department
	* Operations Department (select multiple options as needed)
3. Enter the date and time access starts (if applicable):
	* Date Access Starts: enter the date access begins.
	* Time Access Starts: enter the time access begins.

## Field-by-Field Explanation

* **employee_id** (`employee_id`, number, required: false): Enter the ID of the employee record you wish to access. Note: if you're unsure of the correct ID, you can enter a partial number and click submit to search for matching records.
* **access_level** (`access_level`, select_one, required: false): Select the level of access you wish to grant:
	+ View Employee Information: grants view-only access.
	+ Edit Employee Information: grants editing access.
	+ Add New Employee: grants adding new employee access.
	+ Delete Employee: grants deletion access.
* **employee_group** (`employee_group`, select_multiple, required: false): Select the employee group(s) to grant access to:
	+ HR Department
	+ Accounting Department
	+ Operations Department (select multiple options as needed)
* **date_access** (`date_access`, date, required: false): Enter the date access begins.
* **time_access** (`time_access`, time, required: false): Enter the time access begins.
* **notes** (`notes`, note, required: false): Enter any additional information or notes regarding access.
* **email** (`email`, email, required: false): Enter the employee email (if applicable).
* **phone** (`phone`, text, required: false): Enter the employee phone number (if applicable).
* **employee_name** (`employee_name`, text, required: false): Enter the employee name.
* **employee_name_hint** (`employee_name_hint`, text, required: false): Enter a hint for the employee name.
* **submit** (`submit`, text, required: false): Click submit to proceed with granting access.
* **additional_information** (`additional_information`, text, required: false): Enter any additional information.

Note: Fields with `required: false` are optional and can be left blank if not applicable.
