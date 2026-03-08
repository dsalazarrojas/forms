# online-training-request-form - Help Guide
## Purpose
This form is for requesting online training sessions. It is designed to collect information about the user's preferences and requirements for a training session. This form is intended to be completed by users who wish to request online training sessions for themselves or their organization. 

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **User Name** in the "User Name" field.
2. Enter your **Email** in the "Email" field.
3. Type in your **Organization** in the "Organization" field.
4. Choose a **Preferred Date** for the training session using the date picker.
5. Select your **Preferred Time** for the training session using the time picker.
6. Specify the **Training Session Duration** in the format of a number (e.g., 1, 2, 3 hours).
7. Choose whether you want a **Training Session Type** (yes or no).
8. Select all relevant **Training Session Type Options** (yes or no) to indicate the type of training you are interested in.
9. Type in the **Location** where you would like to hold the training session.
10. If you have any **Additional Comments**, you can type them in the "Additional Comments" field.
11. Finally, confirm your submission by selecting "Confirm" in the "Confirm Submission" field.

## Field-by-Field Explanation

* **User Name** (`user_name`, text, **required**): Enter your name as it would be displayed on your training session materials.
* **Email** (`email`, email, **required**): Enter your email address to receive updates and communication about your training session.
* **Organization** (`organization`, text, **required**): Enter the name of your organization to help us understand your training needs better.
* **Preferred Date** (`preferred_date`, date, **required**): Choose a date that works best for you to hold the training session.
* **Preferred Time** (`preferred_time`, time, **required**): Select a time that suits you best for the training session.
* **Training Session Duration** (`training_session_duration`, number, **required**): Specify the length of the training session in hours.
* **Training Session Type** (`training_session_type`, select_one, **required**): Indicate whether you are interested in a single training session or not.
* **Training Session Type Options** (`training_session_type_options`, select_multiple, **required**): Choose all the options that apply to the type of training you are interested in.
* **Location** (`location`, text, **required**): Enter the location where you would like to hold the training session.
* **Additional Comments** (`additional_comments`, note, **optional**): Provide any additional information that might help us better understand your training needs.
* **Confirm Submission** (`confirm_submission`, select_one, **optional**): Confirm that you have reviewed and submitted your form accurately.
