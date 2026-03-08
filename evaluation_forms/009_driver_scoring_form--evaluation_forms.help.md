# driver_scoring_form - Help Guide
## Purpose
The driver scoring form is used to evaluate a driver's performance on a test.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the test result from the drop-down menu.
2.  Enter a brief evaluation of the driver's performance.
3.  Enter a score from 1 to 10, where 1 is the lowest and 10 is the highest.
4.  Describe the incident that occurred during the test, if any.
5.  Enter the trainee's name.
6.  Enter the instructor's name.
7.  Select the date of the test.
8.  Choose the evaluation form options that apply.
9.  Add any additional notes or comments.
10.  Enter the phone number of the trainee or instructor.

## Field-by-Field Explanation
* **Test Result** (`test_result`, select_one, required): Select the outcome of the test (Yes or No).
* **Evaluation** (`evaluation`, text, optional): Briefly describe the driver's performance.
* **Score** (`score`, number, optional): Rate the driver's performance from 1 to 10.
* **Incident Description** (`incident_description`, text, optional): Describe any incidents that occurred during the test.
* **Trainee Name** (`trainee_name`, text, optional): Enter the name of the trainee.
* **Instructor Name** (`instructor_name`, text, optional): Enter the name of the instructor.
* **Test Date** (`test_date`, date, optional): Enter the date of the test.
* **Evaluation Form** (`evaluation_form`, select_multiple, optional): Select the evaluation form options that apply.
* **Notes** (`notes`, note, optional): Add any additional comments or notes.
* **Phone** (`phone`, text, optional): Enter the phone number of the trainee or instructor.

## Tips
* Make sure to fill in all the required fields (Test Result).
* Use the Auto-fill feature to save time if you've completed the form before.
* Review your responses carefully before submitting the form.
