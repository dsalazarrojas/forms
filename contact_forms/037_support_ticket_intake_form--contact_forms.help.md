# Support Ticket Intake Form - Help Guide
## Purpose
The Support Ticket Intake Form is a tool used to gather information from users to create a support ticket. This form collects essential details about the user, including their name, email, issue description, and support request. The form is designed to help our support team quickly understand the issue and provide a solution.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name and Last Name in the corresponding fields.
2. Enter your Email address to help us contact you regarding your support request.
3. Describe your issue in the Issue Description field. Be as detailed as possible to help our support team understand your problem.
4. Indicate if you require support for your issue by selecting "Yes" or "No" in the Support Request field.
5. Choose the options that apply to your issue from the Select Multiple Options field.
6. Enter the Date and Time you are experiencing the issue (if applicable).

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required: false): Enter your first name as it appears on your official identification.
* **Last Name** (`last_name`, `text`, required: false): Enter your last name as it appears on your official identification.
* **Email** (`email`, `email`, required: false): Enter a valid email address where you can be reached regarding your support request.
* **Issue Description** (`issue_description`, `text`, required: false): Describe the problem or issue you're experiencing. Be as detailed as possible to help our support team provide a solution.
* **Support Request** (`support_request`, `select_multiple`, required: false): Indicate if you require support for your issue by selecting "Yes" or "No".
* **Select Multiple Options** (`select_multiple_options`, `select_multiple`, required: true): Choose the options that apply to your issue:
	+ Option 1
	+ Option 2
	+ Option 3
* **Date** (`date`, `date`, required: false): Enter the date you are experiencing the issue (if applicable).
* **Time** (`time`, `time`, required: false): Enter the time you are experiencing the issue (if applicable).
