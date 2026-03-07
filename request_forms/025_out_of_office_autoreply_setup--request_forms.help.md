<thinking>
This form is used to set up automatic replies for an employee's out-of-office status.
The form is designed to help employees inform their team and manager about their absence.
It's essential to fill out this form accurately to ensure that the automatic replies are sent correctly.
Please review each field to ensure that you are providing the correct information.
</thinking>

# out_of_office_autoreply_setup - Help Guide
## Purpose
This form is used to set up automatic replies for an employee's out-of-office status, ensuring that the team and manager are informed about the employee's absence.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Employee ID.
2. Select the start date of your absence.
3. Select the end date of your absence.
4. Type a message explaining your reason for absence.
5. Choose whether to set up automatic replies for your team ('Yes' or 'No').
6. Choose whether to set up automatic replies for your team's emails ('Yes' or 'No').
7. Choose whether to set up automatic replies for your emails ('Yes' or 'No').
8. Enter the name of your team (optional).
9. Select whether to set up automatic replies to route your emails to your team ('Yes' or 'No').
10. Select whether to set up automatic replies to route your emails to a specific team ('Yes' or 'No').
11. Select whether to set up automatic replies to route your emails to a specific user ('Yes' or 'No').

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, number, required): Enter your unique employee ID to identify yourself.
* **start_date** (`start_date`, date, required): Select the start date of your absence.
* **end_date** (`end_date`, date, required): Select the end date of your absence.
* **message** (`message`, text, required): Type a message explaining your reason for absence.
* **team_id** (`team_id`, select_one, required): Choose whether to set up automatic replies for your team ('Yes' or 'No').
* **team** (`team`, text, optional): Enter the name of your team (if you are setting up automatic replies for your team).
* **Email** (`email`, email, required): Enter your email address for automatic replies.
* **Phone Number** (`phone_number`, text, optional): Enter your phone number (if applicable).
* **reason** (`reason`, text, required): Type a reason for your absence.
* **User ID** (`user_id`, text, optional): Enter your user ID (if you want to identify yourself).
* **Setup Details** (`setup_details`, text, optional): Enter any additional setup details (if applicable).
* **Team** (`team`, select_multiple, optional): Choose whether to set up automatic replies for your team ('Yes' or 'No').
* **Route To** (`route_to`, select_one, optional): Choose whether to set up automatic replies to route your emails to your team ('Yes' or 'No').
* **Route To Team** (`route_to_team`, select_one, optional): Choose whether to set up automatic replies to route your emails to a specific team ('Yes' or 'No').
* **Route To User** (`route_to_user`, select_one, optional): Choose whether to set up automatic replies to route your emails to a specific user ('Yes' or 'No').

## Tips
- Double-check your Employee ID and Email address for accuracy.
- Make sure to select the correct start and end dates for your absence.
- Provide a clear reason for your absence in the message field.
