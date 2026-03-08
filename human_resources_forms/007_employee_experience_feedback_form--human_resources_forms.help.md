# employee_experience_feedback_form - Help Guide
## Purpose
This form is designed to gather feedback and opinions from employees on their experience with the company.

## How To Complete This Form
To complete this form, follow these steps:
1. Answer the first question, "What do you like about the company?" in a brief and honest manner.
2. Answer the second question, "What do you dislike about the company?" in a brief and honest manner.
3. For the third question, "Would you recommend the company to a friend or family member?", select one of the options:
	* 'True' if you would definitely recommend the company to a friend or family member.
	* 'False' if you would not recommend the company to a friend or family member.
	* 'Maybe' if you are unsure or neutral.
4. Optionally, you can provide any additional feedback in the space provided for "Additional feedback".

## Field-by-Field Explanation

* **What do you like about the company?** (`employee_form_1`, text, required: false): This question is an open-ended question where you can write anything you like about the company.
* **What do you dislike about the company?** (`employee_form_2`, text, required: false): This question is also an open-ended question where you can write anything you dislike about the company.
* **Would you recommend the company to a friend or family member?** (`employee_form_3`, select_multiple, required: true): This question is multiple choice, where you can select one of the three options: 'True', 'False', or 'Maybe'.
* **Additional feedback** (`feedback`, note, required: false): This is an optional space for you to provide any additional feedback or comments about your experience with the company.
