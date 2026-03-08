# Departmental Report Form - Help Guide

## Purpose
The Departmental Report Form is designed to collect information from departmental representatives about their department's current status. This includes details such as department name, address, contact information, internal issues, and other relevant details.

## How To Complete This Form
To fill out this form, follow these steps:

1. Enter the department's name in the **Department Name** field. This field is required and should be filled in accurately.
2. Enter the department's address in the **Department Address** field. This field is also required and should be filled in accurately.
3. Provide your manager's contact information in the **Manager Contact Information** field. This field is required and should be filled in accurately.
4. Answer the question **Do you have any internal issues?** by selecting 'Yes' or 'No' from the dropdown menu. This field is required.
5. If you have internal issues, select all that apply from the **What are some of your department's internal issues?** field. This field is required.
6. Enter the date of the last update in the **Date of Last Update** field. This field is required.
7. Enter the time of the last update in the **Time of Last Update** field. This field is required.
8. Enter your department's email address in the **Department Email** field. This field is required.
9. Enter your department's phone number in the **Department Phone Number** field. This field is required.
10. If required, upload a document for reference in the **Upload Document** field.

## Field-by-Field Explanation

* **Department Name** (`department_name`, text, required): Enter the name of your department.
* **Department Address** (`department_address`, text, required): Enter your department address.
* **Manager Contact Information** (`manager_contact`, text, required): Enter your manager's contact information.
* **Do you have any internal issues?** (`select_one_question`, select_one, required): Select 'Yes' or 'No'.
* **What are some of your department's internal issues?** (`select_multiple_question`, select_multiple, required): Select all that apply if you selected 'Yes' in the previous field.
* **Date of Last Update** (`date_of_last_update`, date, required): Enter the date of last update.
* **Time of Last Update** (`time_of_last_update`, time, required): Enter the time of last update.
* **Department Email** (`department_email`, email, required): Enter your department email.
* **Department Phone Number** (`department_phone`, text, required): Enter your department phone number.
* **Upload Document** (`document_upload`, text, required): Upload a document for reference if required.
