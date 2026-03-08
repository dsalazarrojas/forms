<thinking>
Are we sure we're on the right track with this form? It seems like we're creating a form for nominating employees for recognition awards within the organization. We should make sure it's clear that the form is used for submitting nominations for employees who excel in various categories, and that it's not used for other purposes, like creating new job openings. Let's double-check that this form doesn't exist elsewhere in the system to avoid duplication of effort or confusion. 
</thinking>

# employee_recognition_award_nomination_form - Help Guide
## Purpose
The employee recognition award nomination form is used to submit nominations for employees who have achieved outstanding performances in various departments within the organization. This form allows you to identify and reward employees who deserve recognition for their excellent work.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee's name in the `employee_name` field.
2. Select the department where the employee works from the `award_category` dropdown.
3. Describe the reason for the nomination in the `nomination_reason` field.
4. Enter the nominee's name and email address in the `nominee_name` and `nominee_email` fields, respectively.
5. Select the nominee's department from the `nominee_department` dropdown.
6. If applicable, indicate if the nominee has a title (e.g., yes or no) in the `title` field.
7. Set the nomination date and reason date (if different from the nomination date) using the respective date fields.

## Field-by-Field Explanation

* **prophets** (`employee_name`, text, **Required**): Enter the name of the employee you are nominating.
* **Award Category** (`award_category`, select_one, **Required**): Select the department where the employee works from the list.
* **Nomination Reason** (`nomination_reason`, text, **Required**): Describe the reason why you are nominating this employee.
* **Nominee Name** (`nominee_name`, text, **Required**): Enter the name of the employee you are nominating.
* **Nominee Email** (`nominee_email`, email, **Required**): Enter the email address of the nominee.
* **Nominee Department** (`nominee_department`, select_one, **Required**): Select the department where the nominee works from the list.
* **Title** (`title`, select_multiple, **Optional**): If the nominee has a title (e.g., yes or no), select one of the options.
* **Nomination Date** (`nomination_date`, date, **Required**): Set the date when the nomination is made.
* **Nomination Reason Date** (`nomination_reason_date`, date, **Optional**): If different from the nomination date, enter the date when the reason for the nomination occurred.
* **Nomination Message** (`nomination_message`, text, **Optional**): Enter a message or description for the nomination.
