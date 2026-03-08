# Student Parking Registration Form - Help Guide
## Purpose
The Student Parking Registration Form is designed for students to provide information about themselves to the parking management system.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your First Name and Last Name in the corresponding fields.
2. Enter your Student ID number.
3. Select the parking permit type you are eligible for.
4. If applicable, specify the hours you will be parking on campus.
5. Choose your preferred contact method for any updates or notifications.
6. Add any additional comments or information about your parking needs.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name as it appears on your official documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your official documents.
* **Student ID** (`student_id`, number, optional): Enter your student ID number as provided by the university.
* **Parking Permit** (`parking_permit`, select_one, optional): Select the parking permit type you are eligible for from the provided options.
* **Parking Hours** (`parking_hours`, date, optional): If applicable, specify the hours you will be parking on campus.
* **Contact Method** (`contact_method`, select_multiple, optional): Choose your preferred contact method for any updates or notifications.
* **Comments** (`comments`, note, optional): Add any additional comments or information about your parking needs.
