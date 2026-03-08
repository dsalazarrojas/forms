# First Aid Quiz - Help Guide

## Purpose
The "First Aid Quiz" form is designed to assess your knowledge on first aid topics, such as basic medical procedures or emergency response techniques. This form is intended to collect individual questions and answers, and does not have a comprehensive scoring system.

## How To Complete This Form
1. Fill in your answer to each question in the "question_page" and "question_2" fields.
2. Select the type of question from the "question_type" field. Choose from First Aid, Medical, or Other.
3. Enter your answer to each of the "Answer", "Another Answer", "Correct Answer", and "Another Correct Answer" fields.
4. Enter your score in the "Score" field.
5. Enter the total score in the "Total Score" field.
6. Record the time taken to complete the form in the "Time Taken" field.

## Field-by-Field Explanation
* **First Aid Quiz** (`first_aid_quiz_page`, `note`, not required):
	+ This is the title of the form.
* **question_page** (`question_page`, `text`, required: false):
	+ A field to input your answer to the question.
* **Quiz Question** (`question_2`, `text`, required: false):
	+ Another field to input your answer to the question.
* **Question Type** (`question_type`, `select_one`, required: false):
	+ Choose the type of question from First Aid, Medical, or Other.
* **Answer** (`answer`, `text`, required: false):
	+ Enter your answer to the question.
* **Another Answer** (`answer_2`, `text`, required: false):
	+ Enter another answer to a question.
* **Correct Answer** (`correct_answer`, `text`, required: false):
	+ Enter the correct answer to the question.
* **Another Correct Answer** (`correct_answer_2`, `text`, required: false):
	+ Enter another correct answer.
* **Score** (`score`, `number`, required: false):
	+ Enter your score out of a maximum score.
* **Total Score** (`total_score`, `number`, required: false):
	+ Enter your total score.
* **Time Taken** (`time_taken`, `time`, required: false):
	+ Record the time taken to complete the form.

## Tips
- Make sure to fill in all required fields (question_page and question_2).
- Choose the correct question type for each question.
- Double-check your answers for accuracy.
- Ensure the score and total score are correct.
- Record the time taken accurately.
