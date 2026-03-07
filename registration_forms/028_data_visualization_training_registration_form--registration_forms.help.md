<thinking>
This form is used to collect information from individuals attending a data visualization training session. The form is not intended for internal use within the organization, but rather for external purposes, such as tracking attendance and demographics of the participants. To ensure the form is not being duplicated, a check is made to see if a submission already exists for the participant's email. If an email is already registered, the form will not accept duplicate submissions.
</thinking>

# data_visualization_training_registration_form - Help Guide
## Purpose

The data visualization training registration form is a tool to collect information from individuals attending a data visualization training session. This form is designed to gather basic demographic information, such as name, email, phone number, and role in the training session. 

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in your **First Name** in the designated text field.
2. Enter your **Last Name** in the corresponding field.
3. Provide a valid **Email** address to associate with your submission.
4. Confirm your **Email** address to prevent errors.
5. Enter your **Phone** number for contact purposes.
6. Choose the date and time of your **Training Session** from the provided options.
7. Select your **Time Zone** from the dropdown menu to ensure accurate scheduling.
8. Select your **Role** in the training session (e.g., Participant, Trainer, Other).
9. Leave any additional information in the **Note** field for further communication.
10. Click the **Submitted** button to submit your registration.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name as it appears on your official identification.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your official identification.
* **Email** (`email`, email, required): Enter a valid email address that is not already registered in our system. A confirmation step will be required to ensure accuracy.
* **Confirm Email** (`email_confirmation`, email, required): Confirm your email address to prevent errors.
* **Phone** (`phone`, text, required): Enter your phone number for contact purposes.
* **Training Session Date** (`training_session_date`, date, required): Select the date of your training session.
* **Training Session Time** (`training_session_time`, time, required): Select the time of your training session.
* **Time Zone** (`training_session_time_zone`, select_one, required): Choose your time zone from the provided options.
* **Role** (`role`, select_multiple, required): Select your role in the training session (e.g., Participant, Trainer, Other).
* **Note** (`note`, note, optional): Enter any additional information you'd like to share with us.
* **Submitted** (`submitted`, text, required): This field is not editable and will be populated automatically upon submission.
