<thinking>
The purpose of this form is to gather information from workshop attendees, including their attendance status, any comments or feedback they may have, and other relevant details such as their name, email, phone number, and tool assigned to them. This form is likely used to track attendance and gather feedback from workshop participants, possibly for administrative or research purposes. Before filling out this form, please ensure that you are completing it for a workshop you have actually attended. Duplicate submissions may be removed from the database.</thinking>

# Workshop Attendance Form - Help Guide
## Purpose
This form is designed to collect information from workshop attendees, including their name, contact information, and attendance status, as well as any additional comments or feedback they may have.

## How To Complete This Form
1. Fill in your name and surname in the corresponding fields.
2. Enter your email address in the `Email` field.
3. Select your attendance status from the `Attendance` dropdown menu.
4. If you have any comments or feedback, type them in the `Comments` field.
5. Enter your phone number in the `Phone` field.
6. Select the tool you were assigned to work with from the `Assigned Tool` dropdown menu.
7. If applicable, select the relevant category from the `Category` dropdown menu.
8. Enter the form ID if you know it, otherwise, leave it blank.
9. Enter any additional description or details in the `Description` field.
10. If you have a file to output, enter the path or name of the file.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, optional): Fill in your first name.
* **Last Name** (`last_name`, text, optional): Fill in your last name.
* **Email** (`email`, email, optional): Enter your email address in the format `name@example.com`.
* **Date** (`date`, date, optional): Select the date you attended the workshop. Use the format `YYYY-MM-DD` (e.g., `2022-07-25`).
* **Time** (`time`, time, optional): Select the time you attended the workshop. Use the format `HH:MM:SS` (e.g., `14:30:00`).
* **Attendance** (`attendance`, select_one, optional): Select `Absent`, `Present`, or `Late` to indicate your attendance status.
* **Comments** (`comments`, note, optional): Type any comments or feedback you have about the workshop.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Assigned Tool** (`assigned_tool`, select_one, optional): Select the tool assigned to you for the workshop.
* **Category** (`category`, select_multiple, optional): Select the relevant category for your workshop attendance.
* **Form ID** (`form_ids`, text, optional): Enter the form ID if you know it.
* **Description** (`description`, text, optional): Provide a brief description of your experience or feedback about the workshop.
* **Output File** (`output_file`, text, optional): Enter the path or name of the file if you have one to output.
