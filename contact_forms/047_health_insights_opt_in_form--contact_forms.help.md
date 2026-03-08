<thinking>
We need to create a help guide for the "health_insights_opt_in_form" that explains its purpose, how to complete it, and what each field means. This form is likely used to collect contact information and health insights from users, which could be used for research or other internal purposes. The form is not strictly required, but it's probably a good idea for users to fill it out anyway to ensure we have accurate contact information and health insights for our records. We should check if this form is not already filled out by the user and prevent duplication if so.

</thinking>

# health_insights_opt_in_form - Help Guide
## Purpose
This form is used to collect contact information and health insights from users. It's not a required form, but it's recommended to fill it out for our records.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form fields and make sure you're comfortable providing the requested information.
2. Fill out the contact form with your name and any other relevant contact information.
3. For the "Health Inspections" field, select one or more of the options to indicate your health status.
4. Enter your email address in the "Email" field.
5. Enter your phone number in the "Phone" field.
6. For the "Date of Birth" field, enter your date of birth in the format "MM/DD/YYYY".
7. Enter your height in the "Height" field.

## Field-by-Field Explanation
* **Contact Form** (`contact_form`, text, required: false): Enter your name and any other relevant contact information.
* **Health Inspections** (`health_insights`, select_multiple, required: false): Select one or more of the options to indicate your health status.
	+ 'Yes' indicates you have or have had health inspections or issues.
	+ 'No' indicates you do not have health inspections or issues.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone** (`phone`, text, required: false): Enter your phone number.
* **Date of Birth** (`date_of_birth`, date, required: false): Enter your date of birth in the format "MM/DD/YYYY".
* **Height** (`height`, number, required: false): Enter your height.
