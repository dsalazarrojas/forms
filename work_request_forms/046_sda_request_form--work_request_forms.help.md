<thinking>
  This help guide is intended to assist users in completing the "sda_request_form" form, which is a work request form used to gather information from users regarding their work-related requests. This form ensures that work requests are properly documented and submitted to the relevant personnel for processing. To avoid duplication, users must ensure that their requests are not resubmitted if they have already made a similar request in the past.
</thinking>

# sda_request_form - Help Guide
## Purpose
The "sda_request_form" is a form used to gather work-related requests from users. This form is designed to collect necessary information to ensure that requests are properly documented and submitted for processing.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Provide your email address in the "Email" field.
4. Enter your phone number in the "Phone" field.
5. Select whether the request has an assigned tool. You can choose between 'Yes' or 'No'.
6. If the request has an assigned tool, select all relevant tools in the "Assigned Tool" field.
7. If necessary, provide additional information regarding your request in the "Description" field.
8. Choose whether or not to submit the request, with options to "Yes" or "No".
9. If submitting the request, select the date for the request deadline in the "Date" field.
10. Select the time for the request deadline in the "Time" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, **optional**): Enter your first name as it is known to you.
* **Last Name** (`last_name`, text, **optional**): Enter your last name as it is known to you.
* **Email** (`email`, email, **optional**): Enter a valid email address that can be used to contact you regarding your request.
* **Phone** (`phone`, text, **optional**): Enter a valid phone number that can be used to contact you.
* **Assigned Tool** (`assigned_tool`, select_one, **optional**): Select whether the request has an assigned tool.
* **Assigned Tool Options** (`assigned_tool_options`, select_multiple, **optional**): If the request has an assigned tool, select all relevant tools.
* **Description** (`description`, note, **optional**): Provide additional information regarding your request.
* **Submit** (`submit`, select_one, **optional**): Choose whether or not to submit the request.
* **Date** (`date`, date, **optional**): Select the date for the request deadline.
* **Time** (`time`, time, **optional**): Select the time for the request deadline.
