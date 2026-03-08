# Proficiency evaluation form - Help Guide
## Purpose
The proficiency evaluation form is designed to collect information about a student's performance and progress in a course. This form helps instructors evaluate students based on their proficiency level, which is crucial for providing feedback and guidance to the students.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill out the form with the student's information, including their name, grade, and other relevant details.
2. Select the course ID from the provided list.
3. Enter the student's score and other relevant information.
4. Provide evaluation details and comments, if necessary.
5. Select the evaluation status and date.

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, optional): Enter the student's name in this field.
* **Student Grade** (`grade`, number, optional): Enter the student's grade in this field.
* **Course ID** (`course_id`, select_one, optional): Select the course ID from the provided list.
* **Student Score** (`student_score`, number, optional): Enter the student's score in this field.
* **Date of Evaluation** (`date_of_evaluation`, date, optional): Enter the date of evaluation in this field.
* **Instructor Name** (`instructor_name`, text, optional): Enter the instructor's name in this field.
* **Evaluation Details** (`evaluation_details`, note, optional): Enter your evaluation details in this field.
* **Evaluation Comments** (`evaluation_comments`, note, optional): Enter any comments about the evaluation in this field.
* **Student Email** (`student_email`, email, optional): Enter the student's email address in this field.
* **Student Phone** (`student_phone`, text, optional): Enter the student's phone number in this field.
* **Course Name** (`course_name`, text, optional): Enter the course name in this field.
* **Course Instructor Name** (`course_instructor_name`, text, optional): Enter the course instructor's name in this field.
* **Course Start Date** (`course_start_date`, date, optional): Enter the course start date in this field.
* **Course End Date** (`course_end_date`, date, optional): Enter the course end date in this field.
* **Evaluation Status** (`evaluation_status`, select_one, required): Select the evaluation status as In Progress, Completed, or Cancelled.
* **Evaluation Date** (`evaluation_date`, date, optional): Enter the evaluation date in this field.
* **Student DOB** (`student_dob`, date, optional): Enter the student's date of birth in this field.
* **Instructor DOB** (`instructor_dob`, date, optional): Enter the instructor's date of birth in this field.
* **Course Duration** (`course_duration`, number, optional): Enter the course duration in this field.
* **Course Description** (`course_description`, text, optional): Enter the course description in this field.
* **Course Outcome** (`course_outcome`, select_one, required): Select the course outcome as Pass, Fail, or In Progress.
* **Course Start Date Format** (`course_start_date_format`, select_one, required): Select the course start date format as YYYY-MM-DD, DD-MM-YYYY, DD-MM-YY, or MM-DD-YY.
* **Course End Date Format** (`course_end_date_format`, select_one, required): Select the course end date format as YYYY-MM-DD, DD-MM-YYYY, DD-MM-YY, or MM-DD-YY.
* **Course Status** (`course_status`, select_one, required): Select the course status as In Progress, Completed, or Cancelled.
* **Submitted By** (`submitted_by`, text, optional): Enter the person who submitted the form in this field.

Note: The field types are based on the provided YAML fields. For fields with unclear or weak labels, I've explained the best-effort intent without inventing unsupported business logic.
