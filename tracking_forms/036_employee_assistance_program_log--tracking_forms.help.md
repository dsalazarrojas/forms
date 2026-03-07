<thinking>Before designing the help guide, I'll review the form schema to understand its purpose and functionality. The form seems to be designed for tracking employee assistance programs, likely for HR or support services. It contains various fields for documenting employee sessions, follow-ups, and manager information. I'll create a help guide based on this understanding.</thinking>

# Employee Assistance Program Log - Help Guide
## Purpose
The purpose of this form is to document and track employee sessions, follow-ups, and manager information for the Employee Assistance Program. This helps ensure accurate and efficient management of employee assistance services.

## How To Complete This Form
To complete this form, follow these steps:

1. Select "Yes" or "No" for the employee's session status.
2. Enter the session date using the date format (YYYY-MM-DD).
3. Enter the employee's name.
4. Select "Yes" or "No" for the departmental status.
5. Select "Yes" or "No" for the referral source.
6. Select "Yes" or "No" for the follow-up session status.
7. Enter any session notes.
8. Enter the employee's notes.
9. Enter the session duration (in minutes).
10. Select the session outcome (Yes or No).
11. Enter the follow-up date using the date format (YYYY-MM-DD).
12. Enter any follow-up notes.
13. Enter the next follow-up date (if applicable).
14. Select "Yes" or "No" for the next follow-up session status.
15. Enter any next follow-up notes.
16. Enter the manager's name.
17. Enter the manager's title.
18. Enter the manager's email address.
19. Enter the manager's phone number.
20. Select "Yes" or "No" for the contact method.
21. Select "Yes" or "No" for the contact preference.
22. Enter the session location.
23. Enter the manager's location.
24. Enter the client company.
25. Enter the client name.

## Field-by-Field Explanation
* **Employee Session** (`employee_session`, select_multiple, required/optional): Select "Yes" or "No" to indicate if the employee was present in the session.
* **Session Date** (`session_date`, date, required): Enter the date of the session (in YYYY-MM-DD format).
* **Employee Name** (`employee_name`, text, required): Enter the name of the employee being assisted.
* **Department** (`department`, select_one, optional): Select "Yes" or "No" to indicate if the employee is from a department (this field is not clearly defined, so we assume it's related to departmental status).
* **Referral Source** (`referral_source`, select_multiple, optional): Select "Yes" or "No" to indicate if the employee was referred by someone.
* **Follow-up Session** (`follow_up_session`, select_multiple, optional): Select "Yes" or "No" to indicate if there is a follow-up session.
* **Session Notes** (`session_notes`, text, optional): Enter any notes related to the session.
* **Employee Notes** (`employee_notes`, text, optional): Enter any notes from the employee.
* **Session Duration** (`session_duration`, number, optional): Enter the duration of the session in minutes.
* **Session Outcome** (`session_outcome`, select_one, required): Select "Yes" or "No" to indicate if the session was successful.
* **Follow-up Date** (`follow_up_date`, date, required): Enter the date of the follow-up session (in YYYY-MM-DD format).
* **Follow-up Notes** (`follow_up_notes`, text, optional): Enter any notes related to the follow-up session.
* **Next Follow-up Date** (`next_follow_up_date`, date, optional): Enter the date of the next follow-up session (if applicable).
* **Next Follow-up Session** (`next_follow_up_session`, select_multiple, optional): Select "Yes" or "No" to indicate if there is a next follow-up session.
* **Next Follow-up Notes** (`next_follow_up_notes`, text, optional): Enter any notes related to the next follow-up session.
* **Manager Name** (`manager_name`, text, optional): Enter the name of the manager involved.
* **Manager Title** (`manager_title`, text, optional): Enter the title of the manager.
* **Manager Email** (`manager_email`, email, optional): Enter the email address of the manager.
* **Manager Phone** (`manager_phone`, text, optional): Enter the phone number of the manager.
* **Contact Method** (`manager_contact_method`, select_one, optional): Select "Yes" or "No" to indicate the contact method.
* **Contact Preference** (`manager_contact_preference`, select_one, optional): Select "Yes" or "No" to indicate the contact preference.
* **Session Location** (`session_location`, text, optional): Enter the location where the session was held.
* **Manager Location** (`manager_location`, text, optional): Enter the location of the manager.
* **Client Company** (`client_company`, text, optional): Enter the company of the client.
* **Client Name** (`client_name`, text, optional): Enter the name of the client.

## Tips
* Make sure to complete all required fields.
* Enter accurate and clear information to ensure proper tracking and management of employee sessions.
* Review and update the form regularly to maintain accurate records.
