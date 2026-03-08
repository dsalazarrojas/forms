# Writing Advisor Feedback Form - Help Guide
## Purpose
This form is designed to gather feedback from students about their meeting with a writing advisor. The feedback provided will help us evaluate the effectiveness of the writing advisor and identify areas where students may need further support.

## How To Complete This Form

1. Fill in the required fields with as much detail as possible.
2. Select the appropriate options for each feedback question.
3. Add any additional feedback in the "Additional Feedback" field.

## Field-by-Field Explanation

* **Writing Advisor Feedback Form** (`writing_advisor_feedback_form`, text, required: false): This is the title of the form.
* **Writing Advisor Name** (`writing_advisor_name`, text, required: false): Please enter the name of the writing advisor who provided feedback during the meeting.
* **What was the primary purpose of your meeting with the writing advisor?** (`feedback_question_1`, text, required: true): Describe the main topic or area of focus during the meeting.
* **What were some of the topics we covered?** (`feedback_question_2`, text, required: true): List the topics or areas that were discussed during the meeting.
* **Were there any areas where you feel the meeting was unproductive?** (`feedback_question_3`, text, required: true): If there were any issues or areas that you felt were not productive, please describe them.
* **Did the meeting help you to understand the topic better?** (`feedback_question_4`, select_one, required: true): Select one of the options:
	+ Yes
	+ No
* **Did the meeting help you to understand your assignment objectives?** (`feedback_question_5`, select_one, required: true): Select one of the options:
	+ Yes
	+ No
* **Would you like to receive feedback from the writing advisor?** (`feedback_question_6`, select_multiple, required: false): Select all the options that apply:
	+ Yes
	+ No
* **Additional Feedback** (`additional_feedback`, text, required: false): Enter any additional comments or suggestions about the meeting.
