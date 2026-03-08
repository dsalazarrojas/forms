# straw_poll - Help Guide
## Purpose
This form is designed to collect users' opinions on a particular question or topic through a poll. It's meant to gather information on various aspects of the user.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the question or topic you'd like to poll about.
2. Select your education level from the options provided.
3. (Optional) Enter your email address.
4. (Optional) Enter your phone number.
5. (Optional) Select a date and time for the poll.
6. Enter any additional notes or comments you'd like to share.
7. Click the "Submit" button to complete your poll participation.

## Field-by-Field Explanation
* **Poll Question** (`poll_question`, text, required/optional): Enter the question or topic you'd like to poll about.
* **question_answer** (`question_answer`, select_one, required/optional): Select one of the provided answers to indicate your response to the poll question.
* **Voter Education** (`voter_education`, select_multiple, required/optional): Select your highest level of education.
* **Submit** (`submit`, note, required/optional): This is not a field to be filled in by the user. It's a confirmation or action button.
* **Email** (`email`, email, required/optional): Enter your email address (if you'd like to be contacted for the poll results).
* **Phone** (`phone`, text, required/optional): Enter your phone number (if you'd like to be contacted for the poll results).
* **Date** (`date`, date, required/optional): Select a date for the poll.
* **Time** (`time`, time, required/optional): Select a time for the poll.
* **Note** (`note`, note, required/optional): Enter any additional notes or comments you'd like to share.
