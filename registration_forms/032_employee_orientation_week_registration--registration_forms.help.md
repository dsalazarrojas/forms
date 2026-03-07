<thinking>
The form is intended to collect information from employees to register for the employee orientation week. This form will likely be used by HR or administration departments to track employee participation and session attendance. There might already be a similar form in use, such as an excel sheet or a different digital form, so it is essential to confirm that this new form is not duplicating existing efforts. The field names are clear and straightforward, but some fields could be more user-friendly. For example, "session_sign_up" could be renamed to "Session Selection" or "Session Preferences" to better convey its purpose. 
</thinking>

# Employee Orientation Week Registration - Help Guide
## Purpose
This form is designed to collect information from employees to register for the employee orientation week. It will help the HR or administration department track employee participation and session attendance.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in your **Employee Name** and **Position** fields as prompted.
2. Indicate which **Session Sign-up** options you prefer to attend by selecting one or multiple options.
3. Select the **Start Date** and **Start Time** of your preferred session.
4. Choose the **End Date** and **End Time** of your preferred session.
5. If you are a **New Employee**, select "Yes" if you are new to the company.
6. Select whether you have attended any previous **Sessions** by choosing "Yes" or "No".
7. Indicate which **Session Details** you will be attending by selecting one or multiple options.
8. Choose the status of your session as **Active** or **Inactive**.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter your full name as an employee of the company.
* **Position** (`position`, text, required): Enter your job title or role within the company.
* **Session Sign-up** (`session_sign_up`, select_multiple, required): Select one or multiple sessions you wish to attend.
	+ Note: This field is intended to help you choose which sessions you prefer to attend.
* **Start Date** (`start_date`, date, required): Enter the date of the session start.
* **Start Time** (`start_time`, time, required): Enter the time of the session start.
* **End Date** (`end_date`, date, required): Enter the date of the session end.
* **End Time** (`end_time`, time, required): Enter the time of the session end.
* **New Employees** (`new_employees`, select_one, optional): If you are new to the company, select "Yes".
* **Sessions Attended** (`session_attended`, select_multiple, optional): Select whether you have attended any previous sessions by choosing "Yes" or "No".
* **Session Details** (`session_details`, select_multiple, required): Indicate which session details you will be attending by selecting one or multiple options.
* **Session Status** (`session_status`, select_one, required): Choose the status of your session as **Active** or **Inactive**.

## Tips
* Make sure to fill in all required fields to ensure accurate registration.
* If you are unsure about any field, ask your HR or administration department for clarification.
* Please review the session options carefully before submitting your registration.
