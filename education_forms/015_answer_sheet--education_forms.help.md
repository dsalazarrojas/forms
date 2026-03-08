# Answer Sheet - Help Guide

## Purpose
The Answer Sheet form is designed to collect information about a student's performance on an examination or quiz, including their identification details, course and exam information, and answers to multiple choice and short answer questions. This form is intended for instructors or assessors to evaluate student progress and provide feedback.

## How To Complete This Form
To complete the Answer Sheet, follow these steps:

1. Enter the student's full name in the `Student Full Name` field.
2. Enter the student's ID number in the `Student ID Number` field.
3. Enter the course name and section in the `Course Name and Section` field.
4. Enter the examination or quiz title in the `Examination or Quiz Title` field.
5. Select the date of the examination or quiz in the `Date` field using the date picker.
6. For the multiple choice questions (Questions 1-5), select the best answer for each question from the available options (A, B, C, or D).
7. For the short answer questions (Questions 6-8), type your answer in the text field.
8. Finally, confirm that the work is your own by selecting "I agree" in the `I certify that this work is my own` field.

## Field-by-Field Explanation

* **Student Full Name** (`student_name`, text, required): Enter the student's full name.
* **Student ID Number** (`student_id`, text, required): Enter the student's ID number.
* **Course Name and Section** (`course_info`, text, required): Enter the course name and section.
* **Examination or Quiz Title** (`exam_title`, text, required): Enter the examination or quiz title.
* **Date** (`exam_date`, date, required): Select the date of the examination or quiz using the date picker.
* **Question 1** (`q1`, select_one, required): Select the best answer for Question 1.
* **Question 2** (`q2`, select_one, required): Select the best answer for Question 2.
* **Question 3** (`q3`, select_one, required): Select the best answer for Question 3.
* **Question 4** (`q4`, select_one, required): Select the best answer for Question 4.
* **Question 5** (`q5`, select_one, required): Select the best answer for Question 5.
* **Answer for Question 6** (`q6_text`, text, required): Type your answer for Question 6.
* **Answer for Question 7** (`q7_text`, text, required): Type your answer for Question 7.
* **Answer for Question 8** (`q8_text`, text, required): Type your answer for Question 8.
* **I certify that this work is my own** (`signature_confirmation`, select_multiple, required): Confirm that the work is your own by selecting "I agree".
