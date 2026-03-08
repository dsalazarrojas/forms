To prevent duplicate forms from being submitted, we should only allow the form to be submitted once the employee's manager has been informed and has signed the form. This ensures that the manager's signature is obtained and that the employee has had a chance to discuss their departure. The form can then be kept on file for record-keeping and reference purposes.

</thinking>

# exit_interview_authorization_form - Help Guide
## Purpose
This form is used to document an employee's departure from the company, including their employee ID, manager ID, reason for departure, feedback questions, and signatures. It's essential to complete this form accurately and honestly to ensure a smooth transition and maintain a positive relationship with the departing employee.

## How To Complete This Form
To complete this form, follow the steps below:

1. Ensure that you have the employee's manager's signature and approval before proceeding.
2. Fill in your employee ID and manager ID in the respective fields.
3. Provide a valid reason for your departure, answering the question "What were some of the most significant reasons why you are leaving?"
4. Answer the feedback questions, selecting all that apply, and provide any additional comments.
5. Sign the form as an employee and manager to confirm the departure.

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, number, required): Enter your employee ID number as provided by HR or your personnel department.
* **Manager ID** (`manager_id`, number, required): Enter your manager's ID number as provided by HR or your personnel department.
* **Date of Departure** (`date_of_departure`, date, required): Enter the date you plan to leave the company.
* **Reason for Departure** (`reason_for_departure`, text, required): Provide a clear and concise reason for your departure.
* **Feedback Questions** (`feedback_questions`, select_multiple, required): Select all that apply from the provided questions:
	+ What were some of the most significant reasons why you are leaving?
	+ How do you rate your manager's management style?
	+ What suggestions do you have for improving our workplace culture?
* **Comments** (`comments`, text, optional): Provide any additional comments or feedback about your time at the company.
* **Employee Signature** (`employee_signature`, text, required): Sign your name to confirm your departure.
* **Manager Signature** (`manager_signature`, text, required): Sign your name as the manager to confirm your agreement with the employee's departure.
* **Exit Date** (`exit_date`, date, required): Enter the date you will be leaving the company.
