<thinking>
This form is designed for students to report their absence and provide details about the absence, including the reason, date, and missed work. It is intended to be completed by students, and the form's purpose is to facilitate communication between students, teachers, and school administrators about absences and missed work. I will ensure that the form's fields are clearly explained and easy to understand for end users.

Form fields are generally well-structured and clear, but a few fields could be improved for better user experience. For example, the "Reason for absence" field has an "Other" option that might lead to confusion, as it is not explicitly defined. The "Missed work was collected or provided by" field has a somewhat confusing label, as it implies that work is automatically collected or provided, which might not always be the case. However, these fields are not necessarily incorrect or unclear, but rather, they could be improved for better user understanding.
</thinking>

# Absent Work Form - Help Guide
## Purpose
The Absent Work Form is designed for students to report their absence and provide details about the absence, including the reason, date, and missed work.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in your student information:
    *   Fill in your full name.
    *   Enter your Student ID number.
    *   Enter your grade level or class.
2.  Fill in absence details:
    *   Choose the reason for your absence.
    *   Specify the date of your absence.
    *   Mark if this absence is excused or not.
3.  Fill in missed work and assignments:
    *   Select the subjects or classes you missed.
    *   List any assignments or homework you missed.
    *   Mark if you missed any tests or quizzes.
    *   Provide details about the tests or quizzes you missed if you answered "yes" to the previous question.
4.  Fill in additional information:
    *   Specify the deadline for completing any makeup work.
    *   Specify who collected or provided you with the missed work (e.g., teacher, classmate, online portal, parent or guardian).

## Field-by-Field Explanation
*   **Student full name** (`student_name`, text, required): Your full name as a student.
*   **Student ID number** (`student_id`, text, required): Enter your Student ID number.
*   **Grade level or class** (`grade_level`, text, required): Enter your grade level or class.
*   **Teacher name** (`teacher_name`, text, required): Your teacher's name.
*   **Date of absence** (`absence_date`, date, required): The date of your absence.
*   **Reason for absence** (`absence_reason`, select_one, required): Choose the reason for your absence from the list.
*   **Is this absence excused** (`absence_excused`, select_one, required): Mark if this absence is excused or not.
*   **Subjects or classes missed** (`subjects_missed`, select_multiple, required): Select all the subjects or classes you missed.
*   **List assignments or homework missed** (`assignments_missed`, text, required): List any assignments or homework you missed, including due dates.
*   **Were any tests or quizzes missed** (`tests_missed`, select_one, required): Mark if you missed any tests or quizzes.
*   **If yes, provide test or quiz details** (`test_details`, text, optional): Provide details about the tests or quizzes you missed if you answered "yes" to the previous question.
*   **Deadline for completing makeup work** (`makeup_deadline`, date, required): Specify the deadline for completing any makeup work.
*   **Missed work was collected or provided by** (`work_collected_by`, select_one, required): Specify who collected or provided you with the missed work.
*   **Teacher notes or comments** (`teacher_notes`, text, optional): Your teacher's notes or comments about your absence.
