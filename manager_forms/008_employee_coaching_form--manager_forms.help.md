<thinking>...I am checking to see if the provided YAML is correctly formatted and if it meets the requirements for this form. Upon reviewing the YAML, I see that it defines an Employee Coaching Form with 15 input fields across multiple pages. The form appears to be designed for capturing information about coaching sessions with employees, including session notes, coaching goals, status, and other relevant details. The form also includes fields for coaching agreement, next steps, and session notes. I will now create a user-facing help guide for this form...)</thinking>

# Employee Coaching Form - Help Guide
## Purpose
This form is designed to capture information about coaching sessions with employees. It helps coaches and managers to track progress, set goals, and identify areas for improvement. Completing this form ensures that coaching sessions are documented, and feedback is shared effectively.

## How To Complete This Form
1. Start by reviewing the form and familiarizing yourself with the fields.
2. Fill in the required fields, starting with the `coaching_goal` field.
3. Select the relevant options for `coaching_status` and `coaching_frequency` fields.
4. Enter your notes and details in the `goal_details` and `session_notes` fields.
5. Choose your coaching agreement.
6. Review the form for completeness and accuracy before submitting.

## Field-by-Field Explanation

* **Session Notes** (`employee_coaching_form_session_notes`, `text`, required: false): 
Enter any relevant notes or observations from the coaching session.
* **Coaching Goal** (`employee_coaching_form_coaching_goal`, `select_one`, required: false): 
Select 'Yes' if the coaching goal has been set, 'No' if not, or select 'Other' if the goal is not listed.
* **Goal Details** (`employee_coaching_form_goal_details`, `text`, required: false): 
Enter any additional details about the coaching goal.
* **Coaching Status** (`employee_coaching_form_coaching_status`, `select_multiple`, required: false): 
Select 'Yes' if the coaching goal is in progress, 'No' if not, or select 'Other' if the goal is not listed.
* **Employee Coaching Form Notes** (`employee_coaching_form_notes`, `text`, required: false): 
Enter any other notes or comments about the coaching session.
* **Coaching Session Date** (`employee_coaching_form_coaching_session_date`, `date`, required: false): 
Enter the date of the coaching session.
* **Coaching Session Time** (`employee_coaching_form_coaching_session_time`, `time`, required: false): 
Enter the time of the coaching session.
* **Coaching Frequency** (`employee_coaching_form_coaching_frequency`, `select_one`, required: false): 
Select 'Yes' if coaching is frequent, 'No' if not, or select 'Other' if the frequency is not listed.
* **Coaching Duration** (`employee_coaching_form_coaching_duration`, `number`, required: false): 
Enter the length of the coaching session.
* **Coaching Outcome** (`employee_coaching_form_coaching_outcome`, `select_multiple`, required: false): 
Select 'Yes' if the coaching goal was achieved, 'No' if not, or select 'Other' if the outcome is not listed.
* **Employee Coaching Form Coaching Session Notes** (`employee_coaching_form_coaching_session_notes`, `text`, required: false): 
Enter any additional notes or observations from the coaching session.
* **Coaching Recommendations** (`employee_coaching_form_coaching_recommendations`, `text`, required: false): 
Enter any recommendations or suggestions for the employee.
* **Coaching Next Steps** (`employee_coaching_form_coaching_next_steps`, `text`, required: false): 
Enter any next steps or actions to be taken.
* **Employee Coaching Form Coaching Session Notes 2** (`employee_coaching_form_coaching_session_notes_2`, `text`, required: false): 
Enter any additional notes or observations from the coaching session.
* **Coaching Agreement** (`employee_coaching_form_coaching_agreement`, `select_multiple`, required: false): 
Select 'I agree' if you agree with the coaching outcome, 'I do not agree' if not.
