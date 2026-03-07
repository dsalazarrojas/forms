<thinking>
The Student Progress Monitoring Form is designed to track and record student progress in various academic areas. The form is used by educators to monitor student performance and provide targeted support as needed. The form captures information on student ID, academic term, subject area, assessment date and time, performance level, educational goals, academic support, and comments from teachers, parents, and students.
</thinking>

# Student Progress Monitoring Form - Help Guide
## Purpose
The Student Progress Monitoring Form is used to track and record student progress in various academic areas, providing valuable information for educators to identify areas of improvement and provide targeted support.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the academic term during which the student's progress was assessed.
2. Choose the subject area(s) relevant to the assessment (Mathematics, Science, or English). If the subject area is not listed, you can enter it in the "other_subject" field.
3. Enter the student's ID number.
4. Select the date and time the assessment was conducted.
5. Rate the student's performance level in relation to their grade level.
6. Identify the educational goals that are relevant to the assessment.
7. Indicate the type of academic support the student received or requires (Parent, Teacher, or Counselor).
8. Leave any additional comments or notes about the student's progress.
9. Optionally, add comments from teachers, parents, or students to provide further insight into the student's performance.

## Field-by-Field Explanation
* **Student ID** (`student_id`, `number`, required): Enter the student's unique ID number for identification purposes.
* **Academic Term** (`academic_term`, `select_one`, required): Select the academic term during which the student's progress was assessed (e.g., Academic Term 1).
* **Subject Area** (`subject_area`, `select_one`, required): Choose the subject area relevant to the assessment (e.g., Mathematics, Science, or English). If the subject area is not listed, use the "other_subject" field.
* **Other Subject Area** (`other_subject`, `text`, required): Enter the subject area not listed if it is not Mathematics, Science, or English.
* **Assessment Date** (`assessment_date`, `date`, required): Enter the date the assessment was conducted.
* **Assessment Time** (`assessment_time`, `time`, required): Enter the time the assessment was conducted.
* **Performance Level** (`performance_level`, `select_multiple`, required): Rate the student's performance level in relation to their grade level (Below Grade Level, At Grade Level, Above Grade Level).
* **Educational Goals** (`educational_goals`, `select_multiple`, required): Identify the educational goals that are relevant to the assessment (e.g., Reading, Writing, Mathematics).
* **Academic Support** (`academic_support`, `select_multiple`, required): Indicate the type of academic support the student received or requires (Parent, Teacher, Counselor).
* **Progress Notes** (`progress_notes`, `note`, required): Leave any additional comments or notes about the student's progress.
* **Student Comments** (`student_comments`, `note`, required): Leave comments from the student about their progress.
* **Teacher Comments** (`teacher_comments`, `note`, required): Leave comments from the teacher about the student's progress.
* **Parent Comments** (`parent_comments`, `note`, required): Leave comments from the parent about the student's progress.
* **Form Completion Date** (`form_completion_date`, `date`, required): Enter the date the form was completed.
