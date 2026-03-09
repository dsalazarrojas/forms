# Geography Quiz - Help Guide
## Purpose
The Geography Quiz form is designed to help teachers track student performance and provide a comprehensive assessment of their knowledge in geography. This form can be used to create quizzes with multiple questions, allow students to select their answers, and record their scores, name, grade, time taken, date, and teacher's name.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the title of the quiz in the "Geography Quiz" field.
2. Select the questions you want to ask in the "Questions" field. You can choose from a list of options.
3. Select the answer choices for each question in the "Answer Choices" field.
4. Enter the student's scores in the "Scores" field.
5. Enter the student's name in the "Student Name" field.
6. Enter the grade the student received in the "Grade" field.
7. Enter the time taken to complete the quiz in the "Time Taken" field.
8. Enter the date the quiz was taken in the "Date" field.
9. Enter the teacher's name in the "Teacher" field.

## Field-by-Field Explanation

* **Geography Quiz** (`geography_quiz`, text, required): Enter the title of the quiz.
* **Questions** (`questions`, select_one, required): Select up to 4 questions to include in the quiz.
* **Answer Choices** (`answers`, select_multiple, true): Select all the possible answer choices for each question.
* **Scores** (`scores`, number, required): Enter the student's total score out of the maximum possible.
* **Student Name** (`student_name`, text, required): Enter the student's name.
* **Grade** (`grade`, number, required): Enter the student's grade, out of 10.
* **Time Taken** (`time_taken`, time, optional): Enter the time taken to complete the quiz.
* **Date** (`date`, date, optional): Enter the date the quiz was taken.
* **Teacher** (`teacher`, text, optional): Enter your name as the teacher administering the quiz.

## Tips
* Make sure to select all questions and answer choices before submitting the form.
* Double-check the student's scores and grade before submitting.
* Use the "Time Taken" field only if the quiz has a time limit.
* Use the "Date" field only if you are tracking the date the quiz was taken.
