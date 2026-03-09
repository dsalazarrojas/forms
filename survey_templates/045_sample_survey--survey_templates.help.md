# Sample Survey - Help Guide
## Purpose
The Sample Survey is designed to collect feedback from customers on their experience with our customer service. We want to know what types of customer service they are most satisfied with and what they would like to see more of in the future.

## How To Complete This Form
1. Please answer each question to the best of your ability.
2. For question 2, select one of the customer service options that you are most satisfied with (phone, email, chat, or email and phone).
3. For question 3, rate your experience by typing in your answer (e.g. "positive", "negative", etc.).
4. For question 4, select all that apply if you would like to be contacted again (True, False, never).
5. For question 5, type in what you would like to see more of.
6. For question 6, select one of the options (True, False, not applicable) regarding your website or online presence.

## Field-by-Field Explanation

* **Introduction** (`introduction`, text, required: false): This section is a text field where you can provide any additional comments or thoughts about your experience.
* **What type of customer service are you most satisfied with?** (`question_1`, select_one, required: false): Please select one of the options that you are most satisfied with (phone, email, chat, or email and phone).
	+ Phone: This option is for customers who are most satisfied with our phone-based customer service.
	+ Email: This option is for customers who are most satisfied with our email-based customer service.
	+ Chat: This option is for customers who are most satisfied with our chat-based customer service.
	+ Email and Phone: This option is for customers who are most satisfied with both email and phone-based customer service.
* **How would you rate this experience?** (`question_2`, text, required: false): Please rate your experience by typing in your answer (e.g. positive, negative, etc.).
* **Would you like to be contacted again?** (`question_3`, select_multiple, required: false): Please select all that apply if you would like to be contacted again.
	+ True: This option is for customers who would like to be contacted again.
	+ False: This option is for customers who would not like to be contacted again.
	+ never: This option is for customers who would never like to be contacted again.
* **What would you like to see more of?** (`question_4`, text, required: false): Please type in what you would like to see more of.
* **Do you have a website or online presence?** (`question_5`, select_one, required: false): Please select one of the options regarding your website or online presence.
	+ True: This option is for customers who have a website or online presence.
	+ False: This option is for customers who do not have a website or online presence.
	+ not applicable: This option is for customers who are not applicable for the question.
