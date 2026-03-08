# Personalized Medicine Quiz - Help Guide
## Purpose
This form is designed to collect user information for a Personalized Medicine Quiz, which is likely used by medical professionals or researchers to gather data on patient responses or user characteristics. 

## How To Complete This Form
To complete this form, follow these steps:

1. Choose the answer to the first question, "Quiz Questions", selecting either 'Yes' or 'No' from the provided options.
2. Enter your email address in the "User Email" field.
3. Fill in your name in the "User Name" field.
4. Select the type of quiz you're taking or choose "Other" to provide a custom description in the "Quiz Type" field.
5. If you choose "Other" in the "Quiz Type" field, provide a description in the "Other Description" field.
6. Review and submit the form when all required fields are filled out.

## Field-by-Field Explanation
* **Quiz Questions** (`quiz_questions`, select_one, required): Choose the answer to this question based on your response to the personalized medicine quiz questions. Please answer with either 'Yes' or 'No' options.
* **User Email** (`user_email`, email, required): Enter your email address to be contacted for further information or updates. Please make sure to enter a valid email address.
* **User Name** (`user_name`, text, required): Fill in your name to be identified in our records. Please enter your full name as it appears on official documents.
* **Quiz Type** (`quiz_type`, select_one, required): Select the type of quiz you're taking or choose "Other" to provide a custom description in the "Other Description" field.
* **Other** (`quiz_type_other`, text, optional): If you choose "Other" in the "Quiz Type" field, provide a description of the type of quiz you're taking in this field. 
* **Other Description** (`quiz_type_other_desc`, text, optional): Enter a description of the "Other" type of quiz you're taking.
* **Submit** (`submit`, note, optional): Click this button to submit the form and complete the quiz.
