<thinking>
We have to make sure the form is for a specific use case and not a duplicate of another form. This is a form for Employee Retention Grant Application. It's a one-time request for a business to apply for a retention grant, likely used by HR or management to keep employees from leaving. This form should not overlap with other forms used for similar purposes. 

Let's make sure to break it down in a clear and concise manner to avoid confusing end-users. I'll make sure to explain each field clearly without over-complicating things. This form's goal is to collect necessary information from employees or HR teams to process the retention grant. We'll keep it user-friendly and practical.
</thinking>

# Employee Retention Grant Application - Help Guide
## Purpose
The Employee Retention Grant Application form is designed to help businesses apply for retention grants to keep their employees. This form collects essential information needed to process the grant application.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your company's details.
2. Provide your address.
3. Enter your phone number.
4. Enter your email address.
5. Specify the grant amount you require.
6. Enter the number of staff members that need to be retained.
7. Choose how long the retention pledge will last (3 months, 6 months, or 12 months).
8. Describe the program's impact.
9. Select the start and end dates of the grant period.
10. Choose which tools or resources the grant will be using.
11. (Optional) Add any comments regarding the application.

## Field-by-Field Explanation

* **Company Name** (`company_name`, `text`, required: false): Enter your company's name.
* **Address** (`address`, `text`, required: false): Enter your company's address.
* **Phone Number** (`phone_number`, `text`, required: false): Enter your company's phone number.
* **Email** (`email`, `email`, required: false): Enter your company's email address.
* **Grant Amount** (`grant_amount`, `number`, required: false): Enter the amount of grant you require.
* **Staff Count** (`staff_count`, `number`, required: false): Enter the number of staff members that need to be retained.
* **Retention Pledge** (`retention_pledge`, `select_one`, required: true): Choose how long the retention pledge will last:
	+ 3 months
	+ 6 months
	+ 12 months
* **Program Impact** (`program_impact`, `note`, required: false): Describe the program's positive impact.
* **Grant Start Date** (`grant_start_date`, `date`, required: false): Enter the start date of the grant period.
* **Grant End Date** (`grant_end_date`, `date`, required: false): Enter the end date of the grant period.
* **Assigned Tool** (`assigned_tool`, `select_multiple`, required: true): Choose which tools or resources the grant will be using:
	+ chatjimmy
	+ Option 2
	+ Option 3
* **Created At** (`created_at`, `date`, required: false): Displayed for internal use, this field is not for user input.
* **Updated At** (`updated_at`, `date`, required: false): Displayed for internal use, this field is not for user input.
* **Submitted By** (`submitted_by`, `select_one`, required: true): Choose who submitted the application:
	+ John Doe
	+ Option 2
	+ Option 3
* **Comments** (`comments`, `note`, required: false): Leave any comments regarding the application.

## Tips
- Make sure to fill in accurate and complete information to process the grant application correctly.
- Use the correct email format when entering the email address (e.g., name@domain.com).
- Review and double-check each field before submitting the form.
- Ensure you've selected the correct tool(s) for the grant.
