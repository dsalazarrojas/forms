# Post Detox Program Questionnaire Template - Help Guide
## Purpose
The purpose of this form is to gather feedback from individuals who have completed a post-detox program. It is designed to help program administrators improve their services and better understand the needs and experiences of their users.

## How To Complete This Form
To complete this form, please follow these steps:

1. Answer each question honestly and thoroughly.
2. For multiple-choice questions, select all the options that apply to you.
3. Enter your current weight and height in numbers (e.g., 150, 5'8").
4. Enter your target weight range in a format like "120-150 pounds" or "50-60 kg".
5. For program length, select the duration you completed the program.
6. Write your answers to the questions about what you learned and what you expected from the program.
7. Enter any additional comments or suggestions you have for the program.
8. If you have provided your email and phone number, you will receive notifications and follow-up questions from the program administrators.

## Field-by-Field Explanation

* **program_name** (`program_name`, text, optional): Please enter the name of the program you participated in.
* **how_did_you_feel_before_program** (select_multiple, required): This question is about your state of mind before starting the program. Please select all the options that apply to you:
	+ Before Starting the Program
	+ During the Program
	+ After the Program
* **current_weight** (`current_weight`, number, optional): Please enter your current weight in numbers (e.g., 150, 5'8").
* **height** (`height`, number, optional): Please enter your height in numbers (e.g., 5'8", 168 cm).
* **target_weight_range** (`target_weight_range`, text, optional): Please enter your target weight range in a format like "120-150 pounds" or "50-60 kg".
* **program_length** (`program_length`, select_one, required): Please select the duration you completed the program:
	+ 1 Month
	+ 2 Month
	+ 3 Month
	+ 4 Month
* **program_length_range** (`program_length_range`, text, optional): This field is not required, but if you feel more comfortable providing your program length in text, please do so.
* **what_did_you_learn** (`what_did_you_learn`, text, required): Please write a few sentences about what you learned during the program.
* **what_did_you_expect** (`what_did_you_expect`, text, required): Please write a few sentences about what you expected from the program.
* **comments** (`comments`, text, optional): If you have any additional comments or suggestions for the program, please enter them here.
* **email** (`email`, email, optional): If you provide your email, you will receive notifications and follow-up questions from the program administrators.
* **phone** (`phone`, text, optional): If you provide your phone number, you will receive notifications and follow-up questions from the program administrators.
