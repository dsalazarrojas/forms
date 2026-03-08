# reemployment_interest_form - Help Guide
## Purpose
The reemployment interest form is used to gather information from employees about their interest in being rehired after a certain period of employment.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your First Name and Last Name.
2. Enter your Email address.
3. Answer "Yes" or "No" to the question about your role interest.
4. Select your preferred contact method (phone, email, or mail).
5. Provide any additional availability details in the space provided.
6. Choose your preferred role (admin, customer service, or sales).
7. Indicate your rehire status (True, False, or unsure).
8. Optionally, provide any comments you have about your rehire status.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Enter your first name as it is spelled on your official identification.
* **Last Name** (`last_name`, `text`, required): Enter your last name as it is spelled on your official identification.
* **Email** (`email`, `email`, required): Enter your official work email address.
* **Role Interest** (`role_interest`, `select_multiple`, optional): Indicate your interest in being rehired in any of the following roles:
	+ Yes
	+ No
* **Contact Method** (`contact_method`, `select_one`, optional): Choose how you would like to be contacted:
	+ Phone
	+ Email
	+ Mail
* **Availability Details** (`availability_details`, `text`, optional): Provide any additional information about your availability.
* **Preferred Role** (`preferred_role`, `select_one`, optional): Indicate your preferred role:
	+ Admin
	+ Customer Service
	+ Sales
* **Rehire Status** (`rehire_status`, `select_one`, optional): Indicate your rehire status:
	+ True
	+ False
	+ Unsure
* **Comments** (`comments`, `text`, optional): Optionally, enter any comments about your rehire status.
