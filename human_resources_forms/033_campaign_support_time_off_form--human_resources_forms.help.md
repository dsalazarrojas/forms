# Campaign Support Time Off Form - Help Guide
## Purpose
The Campaign Support Time Off Form is used to request support for employees who are unable to work due to various reasons such as campaigns, personal matters, or medical issues. This form helps to provide essential information for the management and HR teams to review and process the request efficiently.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the employee's first name, last name, and ID (if applicable) on pages 1-3.
2. Enter the employee's contact email address and phone number on pages 4-5.
3. Select the department the employee belongs to from the dropdown menu on page 6.
4. Enter the name of the employee's manager on page 7.
5. Enter the employee's job title on page 8.
6. Select the type of leave requested from the dropdown menu on page 10.
7. Enter the date of hire and the dates of leave on pages 9 and 13-14.
8. Enter the total number of days requested on page 15.
9. Select the frequency of leave on page 17.
10. Provide a brief description of the reason for leave on page 18.
11. Briefly describe how the work will be covered on pages 19-20.
12. Specify if you can be contacted during the leave on page 21.
13. Select the status of the leave as paid or unpaid on page 22.
14. Decide if you are attaching supporting documentation or not on page 23.
15. If this is not the first request, mark if it was similar and if approved or not on page 24.
16. Sign the form with your full name on page 25.
17. Date and sign the form on pages 26 and 27.
18. Review and approve or deny the request if applicable.

## Field-by-Field Explanation

* **Employee First Name** (`employee_first_name`, text, required): Enter your first name.
* **Employee Last Name** (`employee_last_name`, text, required): Enter your last name.
* **Employee ID** (`employee_id`, text, optional): If you have an ID, please enter it.
* **Email Address** (`email`, email, required): Enter your contact email address.
* **Phone Number** (`phone`, text, required): Enter your contact phone number.
* **Department** (`department`, select_one, required): Select your department from the dropdown menu:
	+ Marketing
	+ Sales
	+ Operations
	+ Human Resources
	+ Finance
	+ IT
	+ Customer Service
	+ Other
* **Manager Name** (`manager_name`, text, required): Enter your direct supervisor's name.
* **Position Title** (`position_title`, text, required): Enter your job title.
* **Hire Date** (`hire_date`, date, required): Enter the date you were hired.
* **Leave Type** (`leave_type`, select_one, required): Select the type of leave requested:
	+ Campaign volunteer leave
	+ Political activity leave
	+ Community service leave
	+ Personal leave
	+ Medical leave
	+ Family leave
	+ Bereavement leave
	+ Other
* **Campaign Name** (`campaign_name`, text, optional): If applicable, enter the name of the campaign.
* **Campaign Organization** (`campaign_organization`, text, optional): If applicable, enter the name of the campaign organization.
* **Leave Start Date** (`leave_start_date`, date, required): Enter the first day of leave.
* **Leave End Date** (`leave_end_date`, date, required): Enter the last day of leave.
* **Total Days Requested** (`total_days_requested`, number, required): Enter the number of days you are requesting.
* **Expected Return Date** (`return_date`, date, required): Enter the date you expect to return.
* **Leave Frequency** (`leave_frequency`, select_one, required): Select how often you would like to leave:
	+ One-time request
	+ Recurring - weekly
	+ Recurring - biweekly
	+ Recurring - monthly
	+ As needed
* **Reason for Leave** (`reason_for_leave`, text, required): Describe the reason for your leave.
* **Work Handover Plan** (`work_handover`, text, required): Briefly describe how your work will be covered.
* **Coverage Arrangements** (`coverage_arrangements`, text, optional): Specify who will cover for you.
* **Can You Be Contacted for Urgent Matters?** (`urgent_contact_during_leave`, select_one, required): Select if you can be contacted:
	+ Yes - available by phone
	+ Yes - available by email
	+ Limited availability
	+ No - unavailable
* **Is This Leave Paid or Unpaid?** (`paid_or_unpaid`, select_one, required): Select the status of the leave:
	+ Paid leave
	+ Unpaid leave
	+ Partially paid
	+ Using vacation days
	+ Using personal days
* **Are You Attaching Supporting Documentation?** (`supporting_documentation`, select_one, optional): Select if you are attaching documentation:
	+ Yes - attached
	+ Yes - will provide
	+ 'False'
* **Have You Made Similar Requests Before?** (`previous_similar_requests`, select_one, optional): Select if this is not the first request:
	+ Yes - approved
	+ Yes - denied
	+ No - first time
* **Employee Signature** (`employee_signature`, text, required): Sign with your full name.
* **Date Signed** (`signature_date`, date, required): Date and sign the form.
* **Manager Approval Status** (`manager_approval`, select_one, optional): For manager use:
	+ Pending review
	+ Approved
	+ Denied
	+ Needs HR review
* **Manager Signature** (`manager_signature`, text, optional): For approval purposes.
* **HR Review Status** (`hr_review`, select_one, optional): For HR use:
	+ Not yet reviewed
	+ Under review
	+ Approved
	+ Denied
