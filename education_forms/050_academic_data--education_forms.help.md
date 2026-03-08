# Academic Data - Help Guide
## Purpose
This form is used to collect and record academic data from students, faculty, or staff members.

## How To Complete This Form
1. Start by filling out the "Full name" field with your name as it appears on your official documents.
2. Enter your "Email address" in the corresponding field.
3. Provide your "Student ID or enrollment number" to ensure accurate tracking and record-keeping.
4. Enter your "Date of birth" in the format MM/DD/YYYY.
5. Select your "Degree program" from the available options: Bachelors, Masters, Doctoral (PhD), Diploma, or Certificate Program.
6. Specify your "Major or field of study" in the text field provided.
7. Fill out the "Year of enrollment" field with the year you started your academic program.
8. Enter the "Current semester" you are currently in.
9. Enter your "CGPA" for each completed semester (if applicable).
10. If you have completed more than 2 semesters, fill out the corresponding "Semester [X] CGPA" fields.
11. Enter your "Overall cumulative CGPA" to ensure accurate tracking.
12. Provide the number of "active backlogs or failed courses" you have.
13. Select the "Grading scale used by your institution" from the available options: 4.0 scale, 10.0 scale, Percentage based, Letter grade (A-F), or Other.
14. If you have any additional "Academic notes or comments", use the text field provided.

## Field-by-Field Explanation

* **Full name** (`full_name`, `text`, required): Enter your full name as it appears on your official documents.
* **Email address** (`email`, `email`, required): Enter your email address to ensure accurate record-keeping and communication.
* **Student ID or enrollment number** (`student_id`, `text`, required): Enter your student ID or enrollment number to track your academic progress.
* **Date of birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
* **Degree program** (`degree_program`, `select_one`, required): Select your degree program from the available options: Bachelors, Masters, Doctoral (PhD), Diploma, or Certificate Program.
* **Major or field of study** (`major_field`, `text`, required): Enter your major or field of study in the text field provided.
* **Year of enrollment** (`enrollment_year`, `number`, required): Enter the year you started your academic program.
* **Current semester** (`current_semester`, `number`, required): Enter the current semester you are in.
* **-- Semester-wise CGPA --** (`semester_cgpa_section`, `note`, required): Enter your CGPA for each completed semester (if applicable).
* **Semester 1 CGPA** (`semester_1_cgpa`, `number`, required if completed 2 semesters): Enter your CGPA for semester 1.
* **Semester 2 CGPA** (`semester_2_cgpa`, `number`, required if completed 2 semesters): Enter your CGPA for semester 2.
* **Semester 3 CGPA** (`semester_3_cgpa`, `number`, required if completed 3 semesters): Enter your CGPA for semester 3.
* **Semester 4 CGPA** (`semester_4_cgpa`, `number`, required if completed 4 semesters): Enter your CGPA for semester 4.
* **Semester 5 CGPA** (`semester_5_cgpa`, `number`, required if completed 5 semesters): Enter your CGPA for semester 5.
* **Semester 6 CGPA** (`semester_6_cgpa`, `number`, required if completed 6 semesters): Enter your CGPA for semester 6.
* **Semester 7 CGPA** (`semester_7_cgpa`, `number`, required if completed 7 semesters): Enter your CGPA for semester 7.
* **Semester 8 CGPA** (`semester_8_cgpa`, `number`, required if completed 8 semesters): Enter your CGPA for semester 8.
* **Overall cumulative CGPA** (`cumulative_cgpa`, `number`, required): Enter your overall cumulative CGPA.
* **Number of active backlogs or failed courses** (`backlogs`, `number`, required): Enter the number of active backlogs or failed courses.
* **Grading scale used by your institution** (`grading_scale`, `select_one`, required): Select the grading scale used by your institution from the available options: 4.0 scale, 10.0 scale, Percentage based, Letter grade (A-F), or Other.
* **Any additional academic notes or comments** (`additional_notes`, `text`, optional): Enter any additional academic notes or comments, e.g. academic honors, probation status, transfer credits.

## Tips
- Ensure that all required fields are filled out accurately and thoroughly.
- Use the provided options for "Degree program" and "Grading scale" carefully.
- Enter your CGPA for each completed semester (if applicable).
- If you have any additional academic notes or comments, use the text field provided.
