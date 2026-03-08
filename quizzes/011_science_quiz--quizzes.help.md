# science_quiz - Help Guide
## Purpose
The science_quiz form is a collection of questions designed to gauge the user's knowledge or understanding of a subject.

## How To Complete This Form
1. Select the type of quiz you are completing from the dropdown menu.
2. Enter the time you were given to complete the quiz in minutes.
3. Provide the date the quiz was taken.
4. Enter your score.
5. Select your answers to each question from the provided options.
6. Enter your answers to each question in the corresponding text field.

## Field-by-Field Explanation

* **Quiz Type** (`quiz_type`, select_one, required): Select the type of quiz you are completing.
* **Time Allowed** (`time_allowed`, number, required): Enter the time you were given to complete the quiz in minutes.
* **Date Taken** (`date_taken`, date, required): Provide the date the quiz was taken.
* **Score** (`score`, number, required): Enter your score.
* **Questions** (`questions`, select_multiple, required): Select your answers to each question from the provided options.
* **Question 1** (`question_1_answer`, text, required): Enter your answer to Question 1.
* ... (Similarly, for Question 2 to 20)

Note: The questions are all text input fields, where the user must enter their answer to each question.
