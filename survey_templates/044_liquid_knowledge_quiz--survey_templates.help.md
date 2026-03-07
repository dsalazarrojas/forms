<thinking>What this form does is help users design a custom quiz based on their preferences. The form guides the user through a series of questions to create a quiz tailored to their needs. For instance, the first page of the form asks the user to choose the type of question they want, and they can select from True/False, Multiple Choice, or Multiple Select. The second page asks the user to choose the type of quiz they want, and they can select from True/False, Survey, or Quizlet. The third page allows the user to input the number of questions they want to include in the quiz. The fourth page requests the user to input the text of the question. The fifth page asks the user to input the correct answer to the question. The sixth page requests the user to input the options for the question, and they have to be separated by commas. The seventh page is for submitting the quiz. The form also asks for user's email, phone number, and date of birth which seems like a personal data collection form but might be for some other purpose in the actual usage. The purpose of this form seems to be for educational or testing purposes only. It seems there are a few inconsistencies in the form, like why are date and time of birth needed in a quiz form? It would be great if someone can review it and add a comment about it. Please, review this form carefully before using it.</thinking>
# Liquid Knowledge Quiz - Help Guide
## Purpose
This form is designed to help users create a custom quiz based on their preferences. It guides the user through multiple questions to create a quiz tailored to their needs.

## How To Complete This Form
To complete this form, follow these steps:

1. On the first page, select the type of question you would like to use for your quiz:
	* True/False
	* Multiple Choice
	* Multiple Select
2. On the second page, choose the type of quiz you want:
	* True/False
	* Survey
	* Quizlet
3. On the third page, enter the number of questions you want to include in the quiz.
4. On the fourth page, enter the text of the question you want to ask.
5. On the fifth page, enter the correct answer to the question.
6. On the sixth page, enter the options for the question, separated by commas.
7. On the final page, submit your quiz and enter your contact information:

## Field-by-Field Explanation
* **Which type of question would you like to use?** (`question_type`, Select One)
	+ This question determines the type of question you will ask in your quiz.
* **What type of quiz would you like to create?** (`quiz_type`, Select One)
	+ This question determines the type of quiz you will create.
* **How many questions would you like to include?** (`number_of_questions`, Number)
	+ Enter the number of questions you want to include in your quiz.
* **Question text** (`question_text`, Text)
	+ Enter the text of the question you want to ask.
* **Correct answer** (`correct_answer`, Text)
	+ Enter the correct answer to the question.
* **Answer options** (`answer_options`, Select Multiple)
	+ Enter the options for the question, separated by commas.
* **Submit** (`submit`, Text)
	+ This is the final step to create and submit your quiz.
* **Your Email** (`email`, Email)
	+ Enter your email address.
* **Phone Number** (`phone`, Text)
	+ Enter your phone number.
* **Date of Birth** (`date`, Date)
	+ Enter your date of birth.
* **Time of Birth** (`time`, Time)
	+ Enter your time of birth. (Note: This field seems unusual for a quiz form)
* **Name** (`name`, Text)
	+ Enter your name. 

Please review the form carefully and let me know if there is anything I can do to help.
