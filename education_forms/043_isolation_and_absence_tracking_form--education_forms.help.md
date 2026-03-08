# Isolation And Absence Tracking Form - Help Guide
## Purpose
This form is designed to track student absences and isolations in an educational setting.

## How To Complete This Form
To complete this form, simply fill out the relevant fields with the required information and submit it. 

- If a student is absent, select "None" for the "student class" field.
- If a student is isolated, select the relevant class for the "student class" field.
- Please enter the start and end times of the isolation or absence in the corresponding fields.
- Enter a brief reason for the absence or isolation in the "reason" field.
- You can enter a brief name for the student and their date of birth.

## Field-by-Field Explanation
- **student name** (`student_name`, text, optional): Enter the name of the student who was absent or isolated.
  - This field is an optional field and should be used only if you have a specific reason to record a student's name.
- **Student Date of Birth** (`student_date_of_birth`, date, optional): Enter the date of birth of the student who was absent or isolated.
  - This field is optional and should be used only if you have access to the student's birthdate or it is required by your school policies.
- **Student Class** (`student_class`, select_one, optional): Select the class that the student was absent or isolated from.
  - This field should be selected according to the relevant school policies, usually this corresponds to the grade level or class level of the student.
- **Teacher Name** (`teacher_name`, text, optional): Enter the name of the teacher who is recording the absence or isolation.
  - This field is optional and should be used only if you are required to report to a teacher.
- **Start Time** (`start_time`, time, optional): Enter the start time of the student's absence or isolation.
  - This field is optional and should be used only if you need to record the exact start time of the absence or isolation.
- **End Time** (`end_time`, time, optional): Enter the end time of the student's absence or isolation.
  - This field is optional and should be used only if you need to record the exact end time of the absence or isolation.
- **Reason** (`reason`, text, optional): Enter a brief explanation for the student's absence or isolation.
  - This field should be used to provide a clear and concise explanation for the absence or isolation.
