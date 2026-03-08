<thinking>
The purpose of this form is to gather relevant information for student placement decisions. The form collects demographic and academic data from the student, including name, date of birth, and other identifying information. Additionally, it captures details on the student's current educational background, such as grade level, school, and GPA. The form also asks about the reason for placement request, academic strengths and challenges, and any special programs the student might be involved in. Furthermore, it inquires about the student's learning style, preferred class time, and teacher preference. Finally, it allows for additional comments or information to be provided. 

To ensure accurate and efficient completion of this form, please review the following:

- This form is intended for students who require placement in a new educational setting.
- Please fill out the form only once, even if you have submitted similar information in the past.
- Ensure that the date of birth is in the correct format (MM/DD/YYYY).
- If applicable, please provide a valid GPA.
- When selecting special programs, please choose all that apply.

</thinking>

# Class Placement Form - Help Guide
## Purpose
The Class Placement Form is designed to gather necessary information for student placement decisions in the new educational setting.

## How To Complete This Form
1. Enter the student's full name as it is registered in their current school records.
2. Enter the student's date of birth in the format MM/DD/YYYY.
3. If the student has a student ID number, enter it here; otherwise, leave blank.
4. Select the student's gender.
5. Enter the parent or guardian's full name.
6. Enter the parent or guardian's email address for correspondence.
7. Enter the parent or guardian's contact phone number.
8. Enter the student's current home address.
9. Select the grade level the student just completed.
10. Select the next grade level the student is requesting to be placed in.
11. Enter the student's current school name.
12. Select the academic year the student is requesting to be placed in.
13. Select the reason for the placement request.
14. If applicable, enter the student's current GPA.
15. Select all the student's academic strengths.
16. Select all the areas where the student needs support.
17. If applicable, select the special programs the student is involved in.
18. Select the student's learning style.
19. If applicable, select the preferred class time.
20. Answer if you have a preferred teacher.
21. If applicable, enter the name of the preferred teacher.
22. Enter if there are classmates you would like to place together.
23. Enter any additional comments or information.

## Field-by-Field Explanation

* **Student Full Name** (`student_name`, `text`, required): Enter the student's full name as it is registered in their current school records.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter the student's date of birth in the format MM/DD/YYYY.
* **Student ID Number** (`student_id`, `text`, optional): If the student has a student ID number, enter it here; otherwise, leave blank.
* **Gender** (`gender`, `select_one`, optional): Select the student's gender from the provided options.
* **Parent or Guardian Name** (`parent_name`, `text`, required): Enter the parent or guardian's full name.
* **Parent or Guardian Email** (`parent_email`, `email`, required): Enter the parent or guardian's email address for correspondence.
* **Parent or Guardian Phone** (`parent_phone`, `text`, required): Enter the parent or guardian's contact phone number.
* **Home Address** (`home_address`, `text`, required): Enter the student's current home address.
* **Current Grade Level** (`current_grade`, `select_one`, required): Select the grade level the student just completed.
* **Grade for Placement** (`placing_grade`, `select_one`, required): Select the next grade level the student is requesting to be placed in.
* **Current School Name** (`current_school`, `text`, required): Enter the student's current school name.
* **Academic Year** (`academic_year`, `select_one`, required): Select the academic year the student is requesting to be placed in.
* **Reason for Placement Request** (`placement_reason`, `select_one`, required): Select the reason for the placement request.
* **Current GPA** (`current_gpa`, `number`, optional): If applicable, enter the student's current GPA.
* **Student Academic Strengths** (`academic_strengths`, `select_multiple`, required): Select all the student's academic strengths.
* **Areas Where Student Needs Support** (`academic_challenges`, `select_multiple`, optional): Select all the areas where the student needs support.
* **Special Programs** (`special_programs`, `select_one`, required): If applicable, select the special programs the student is involved in.
* **Learning Style** (`learning_style`, `select_one`, optional): Select the student's learning style.
* **Preferred Class Time** (`preferred_class_time`, `select_one`, optional): If applicable, select the preferred class time.
* **Teacher Preference** (`teacher_preference`, `select_one`, optional): Answer if you have a preferred teacher.
* **Preferred Teacher Name** (`teacher_preference_name`, `text`, optional): If applicable, enter the name of the preferred teacher.
* **Classmates Request** (`classmates_request`, `text`, optional): Enter if there are classmates you would like to place together.
* **Additional Comments or Information** (`additional_comments`, `text`, optional): Enter any additional comments or information.
