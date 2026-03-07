<thinking>
This form is intended to gather information about a student's performance in an ecumenical councils quiz. The form asks for the instructor's name, student's name, school name, quiz date, start time, finish time, assessment, feedback, and comments. The form has multiple sections, but it primarily focuses on collecting data from students and instructors.

The form seems to be focused on assessing student performance in ecumenical councils and providing feedback. The "ecumenical_councils_quiz_questions" field is a multiple-choice question where the student can select multiple options. The "assessment" field is also a select-one field, which might indicate a score or grade. The "instructor_name" and "student_name" fields are text fields for collecting names. The "school_name" field is also a text field for collecting the school name.

The "quiz_date" and "start_time" fields are date and time fields for scheduling purposes. The "finish_time" field, although required, seems to be optional, which might indicate that it's not always necessary to complete it. The "comments" fields are free-form text fields for additional comments or remarks. The "email" and "phone" fields are not required but might be useful for contact information.

Please make sure to review the form carefully and fill it in accurately to ensure that the data collected is correct and consistent.
</thinking>

# ecumenical_councils_quiz - Help Guide
## Purpose
This form is designed to gather information about a student's performance in an ecumenical councils quiz, including instructor and student details, quiz scheduling, and assessment and feedback.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the following required fields:
   * Student Name: Enter your name as the student.
   * School Name: Enter the name of your school.
   * Quiz Date: Select the date of the quiz.
   * Start Time: Select the start time of the quiz.
   * Assessment: Choose whether or not you received assessment from the instructor.
   * Feedback: Choose whether or not you received feedback from the instructor.
   * Quiz Title: This field is not explicitly displayed, but make sure to fill it in with the name of your ecumenical councils quiz.
2. You may also want to fill in the following non-required fields:
   * Instructor Name: Enter the name of your instructor.
   * Email: Enter your email address.
   * Phone: Enter your phone number.
   * Comments: Add any additional comments or remarks about the quiz.

## Field-by-Field Explanation
* **Instructor Name (3)** (`instructor_name`, `text`, optional): Enter the name of your instructor.
* **Student Name (4)** (`student_name`, `text`, required): Enter your name as the student.
* **School Name (5)** (`school_name`, `text`, optional): Enter the name of your school.
* **Quiz Date (6)** (`quiz_date`, `date`, required): Select the date of the quiz.
* **Start Time (7)** (`start_time`, `time`, required): Select the start time of the quiz.
* **Finish Time (8)** (`finish_time`, `time`, optional): Select the finish time of the quiz (if necessary).
* **Comments (9)** (`comments`, `note`, optional): Add any additional comments or remarks about the quiz.
* **Assessment (12)** (`assessment`, `select_one`, required): Choose whether or not you received assessment from the instructor.
* **Feedback (13)** (`feedback`, `select_multiple`, required): Choose whether or not you received feedback from the instructor.
* **Quiz Title (1)** (`title`, `text`, not shown): Make sure to fill it in with the name of your ecumenical councils quiz.
* **Email (10)** (`email`, `email`, optional): Enter your email address.
* **Phone (11)** (`phone`, `text`, optional): Enter your phone number.
* **Ecumenical Councils Quiz Questions (2)** (`ecumenical_councils_quiz_questions`, `select_multiple`, required): Select the options that apply to your quiz.
* **Ecumenical Councils Quiz Questions (2)** (`ecumenical_councils_quiz_questions`, `select_multiple`, required): This is the same field as above, but with a longer label.
