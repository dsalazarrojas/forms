<thinking>

This guide is designed to help users understand the purpose and functionality of the Holiday Application Form. The form is used to apply for a holiday or leave of absence, and it captures various details about the holiday, including dates, type, reason, location, duration, status, and comments from both the holiday manager and approver.

Before completing this form, it's essential to understand the relevance of each field and the process flow. The form is not intended to be duplicated or submitted multiple times by the same user. If you need to apply for multiple holidays, please submit each one separately.

When completing this form, ensure you fill in all mandatory fields accurately and truthfully, as they are subject to approval or rejection.

</thinking>

# Holiday Application Form - Help Guide
## Purpose
The Holiday Application Form is used to submit a formal request for a holiday or leave of absence. This form captures essential details about the holiday, including dates, type, reason, location, duration, status, and comments from both the holiday manager and approver.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the mandatory fields marked with an asterisk (\*) on every page.
2. Choose the correct dates for the holiday start and end dates.
3. Select the type of holiday or leave of absence you are requesting.
4. Provide a valid reason for your request.
5. Enter the location of the holiday or leave.
6. Specify the duration of the holiday or leave.
7. Choose the status of your holiday or leave.
8. Add any additional comments or notes about your request.
9. Select the holiday manager's approval status.
10. Enter any comments from the holiday manager, if applicable.
11. Select the approver's approval status.
12. Enter any comments from the approver, if applicable.
13. Finally, review and submit the form for approval.

## Field-by-Field Explanation
* **Holiday Applicant Form** (<name>: holiday_applicant_form, <type>: text, required/optional): This field is where you enter your personal details for the holiday or leave of absence. Please ensure you fill this field accurately.
* **Holiday Dates** (<name>: holiday_dates, <type>: date, required/optional): Choose the dates for your holiday or leave of absence. Select the start and end dates of your holiday or leave.
* **Holiday Start Date** (<name>: holiday_start_date, <type>: date, required/true): Enter the start date of your holiday or leave of absence.
* **Holiday End Date** (<name>: holiday_end_date, <type>: date, required/true): Enter the end date of your holiday or leave of absence.
* **Holiday Type** (<name>: holiday_type, <type>: select_one, required/true): Choose the type of holiday or leave of absence you are requesting (e.g., 'Yes' or 'No').
* **Holiday Reason** (<name>: holiday_reason, <type>: text, required/optional): Enter the reason for your holiday or leave of absence.
* **Holiday Location** (<name>: holiday_location, <type>: text, required/optional): Enter the location of your holiday or leave of absence.
* **Holiday Duration** (<name>: holiday_duration, <type>: number, required/true): Specify the duration of your holiday or leave of absence.
* **Holiday Status** (<name>: holiday_status, <type>: select_one, required/true): Choose the status of your holiday or leave of absence (e.g., 'Active' or 'Inactive').
* **Holiday Comments** (<name>: holiday_comments, <type>: text, required/optional): Add any additional comments or notes about your request.
* **Holiday Manager** (<name>: holiday_manager, <type>: select_multiple, required/true): Select 'Yes' if you need the holiday manager to review and approve your request. This field is optional but recommended.
* **Holiday Approver** (<name>: holiday_approver, <type>: select_one, required/true): Select 'Yes' if you need the approver to review and approve your request.
* **Holiday Manager Comments** (<name>: holiday_manager_comments, <type>: text, required/optional): Enter any comments or notes from the holiday manager, if applicable.
* **Holiday Approver Comments** (<name>: holiday_approver_comments, <type>: text, required/optional): Enter any comments or notes from the approver, if applicable.
* **Holiday Request Date** (<name>: holiday_request_date, <type>: time, required/optional): Enter the date when you submitted your holiday request.
