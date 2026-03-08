<thinking>

The purpose of this form is to collect information for lead listing enrollment. The form is designed to gather personal and company details such as first name, last name, email, company, department, job title, phone number, and other relevant information. The form also includes select-one and select-multiple fields to capture additional details like email listing enrollment, lead status, assigned tool, assigned user, and other categorization fields. The form's output file and description fields allow for additional notes and comments. This form will be used to create or update leads in the database.

The form is not designed to collect any sensitive or financial information, and all fields are optional. This form is part of a larger system for lead management.

This form will only be used for leads that belong to a specific category (e.g., "lead_generation" or "lead_conversion").

</thinking>

# email_listing_enrollment_form - Help Guide
## Purpose
This form is used to collect information for lead listing enrollment for a specific category.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your first name in the "first_name" field.
2. Enter your last name in the "last_name" field.
3. Enter your email address in the "email" field.
4. Enter your company in the "company" field.
5. Select your department from the "department" field.
6. Enter your job title in the "job_title" field.
7. Enter your phone number in the "phone" field.
8. Select "Yes" or "No" for "email listing enrollment" field.
9. Select "Yes" or "No" for "category" field.
10. Select "Yes" or "No" for "assigned_tool" field.
11. Select "Yes" or "No" for "assigned_user" field.
12. Select your lead status from the "lead_status" field.
13. Enter the date and time when the lead was created in the "created_at" field.
14. Select "Yes" or "No" for "created_by" field.
15. Enter the ID number of the form in the "form_id" field.
16. Select "Yes" or "No" for "form_category" field.
17. Enter the description of the form in the "description" field.
18. Select "Yes" or "No" for "category_2" field.
19. Enter the title of the form in the "form_title" field.
20. Select "Yes" or "No" for "form_category_2" field.
21. Select "Yes" or "No" for "assigned_tool_2" field.
22. Select "Yes" or "No" for "assigned_user_2" field.

## Field-by-Field Explanation

* **first name** (`first_name`, text, required): Enter your first name.
* **last name** (`last_name`, text, required): Enter your last name.
* **email** (`email`, email, required): Enter your email address.
* **company** (`company`, text, required): Enter the name of your company.
* **department** (`department`, text, required): Select your department.
* **job title** (`job_title`, text, required): Enter your job title.
* **phone** (`phone`, text, required): Enter your phone number.
* **email listing enrollment** (`email_listing_enrollment`, select_one, required): Select "Yes" or "No" for email listing enrollment.
* **category** (`category`, select_one, required): Select "Yes" or "No" for category.
* **assigned_tool** (`assigned_tool`, select_one, required): Select "Yes" or "No" for assigned tool.
* **assigned user** (`assigned_user`, select_multiple, required): Select "Yes" or "No" for assigned user.
* **lead status** (`lead_status`, select_multiple, required): Select the lead status.
* **created at** (`created_at`, date, required): Enter the date and time when the lead was created.
* **created by** (`created_by`, select_one, required): Select "Yes" or "No" for created by.
* **form id** (`form_id`, number, required): Enter the ID number of the form.
* **output file** (`output_file`, text, required): Enter the output file.
* **form category** (`form_category`, select_multiple, required): Select "Yes" or "No" for form category.
* **description** (`description`, text, required): Enter the description of the form.
* **category 2** (`category_2`, select_multiple, required): Select "Yes" or "No" for category 2.
* **form title** (`form_title`, text, required): Enter the title of the form.
* **form category 2** (`form_category_2`, select_multiple, required): Select "Yes" or "No" for form category 2.
* **assigned tool 2** (`assigned_tool_2`, select_multiple, required): Select "Yes" or "No" for assigned tool 2.
* **assigned user 2** (`assigned_user_2`, select_multiple, required): Select "Yes" or "No" for assigned user 2.

Note: All fields with a required label are required fields. All other fields are optional.
