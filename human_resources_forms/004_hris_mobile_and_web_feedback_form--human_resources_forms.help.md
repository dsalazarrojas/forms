# hris_mobile_and_web_feedback_form - Help Guide
## Purpose
The HRIS mobile and web feedback form is a tool for providing feedback on the Human Resources Information Systems application. This form is used to capture issues, concerns, or suggestions related to the mobile and web applications, allowing users to provide input on how to improve the system.

## How To Complete This Form
To complete this form, follow these steps:

* Select the type of feedback you want to submit (e.g. HRIS, Technical, UI/UX).
* Provide a brief description of your feedback in the "Feedback" field.
* If you have additional comments or suggestions, you can provide them in the "Additional Comment" field.
* Enter your email address if you would like to be contacted for follow-up.
* If you have a phone number, you can provide it.
* Select the date and time you submitted the feedback.
* Choose whether you have already submitted this feedback.
* Select the team or department to whom you submitted the feedback.

## Field-by-Field Explanation
* **Feedback Type** (`feedback_type`, `select_one`, required: false): Select the type of feedback you want to submit (e.g. HRIS, Technical, UI/UX).
* **Feedback** (`feedback`, `text`, required: false): Provide a brief description of your feedback.
* **Additional Comment** (`feedback_comment`, `text`, required: false): If you have additional comments or suggestions, provide them here.
* **Email** (`email`, `email`, required: false): If you would like to be contacted for follow-up, provide your email address.
* **Phone** (`phone`, `text`, required: false): Provide your phone number if you have one.
* **Date** (`date`, `date`, required: false): Select the date you submitted the feedback.
* **Time** (`time`, `time`, required: false): Select the time you submitted the feedback.
* **Note** (`note`, `note`, required: false): If you have any additional notes or information, provide them here.
* **Has this feedback submitted** (`feedback_submitted`, `select_multiple`, required: false): Choose whether you have already submitted this feedback.
* **Submitted To** (`submitted_to`, `select_one`, required: false): Select the team or department to whom you submitted the feedback.
