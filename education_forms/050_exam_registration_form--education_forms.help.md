# Exam Registration Form - Help Guide
## Purpose
The Exam Registration Form is used to collect demographic information and exam scheduling data from students.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your first name in the "First Name" field.
2. Fill in your last name in the "Last Name" field.
3. Enter your student ID number in the "Student ID" field.
4. Select your student type from the "Student Type" dropdown menu.
5. Enter your test ID number in the "Test ID" field.
6. Select a date for the exam in the "Date" field.
7. Select a time for the exam in the "Time" field.
8. Select the type of exam you will be taking from the "Exam Type" dropdown menu.
9. If you wish to do so, enter the location of the exam in the "Location" field (this field is optional).
10. Enter the date of the exam in the "Exam Date" field.
11. Select the time of the exam in the "Exam Time" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name in this field.
* **Last Name** (`last_name`, text, required): Enter your last name in this field.
* **Student ID** (`student_id`, number, required): Enter your student ID number in this field.
* **Student Type** (`student_type`, select_one, required): Select from the dropdown menu to indicate your student type (Student, Parent, Guardian).
* **Test ID** (`test_id`, number, required): Enter your test ID number in this field.
* **Date** (`date`, date, required): Select a date for the exam.
* **Time** (`time`, time, required): Select a time for the exam.
* **Exam Type** (`exam_type`, select_one, required): Select from the dropdown menu to indicate the type of exam you will be taking (Theory, Practical, Both).
* **Location** (`location`, text, optional): Enter the location of the exam if required or desired (optional field).
* **Exam Date** (`exam_date`, date, required): Enter the date of the exam.
* **Exam Time** (`exam_time`, time, required): Select the time of the exam.
