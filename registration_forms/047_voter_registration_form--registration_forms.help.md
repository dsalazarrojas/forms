# voter_registration_form - Help Guide
## Purpose
This form is used for registering voter information and updating the voter status and registration method in the database.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out all the required fields with accurate and valid information.
2. Select the correct registration method from the dropdown menu.
3. Choose the correct voter status from the dropdown menu.
4. Provide a reason for the update in the "update reason" field.
5. Add any additional comments in the "comments" field.

## Field-by-Field Explanation
* **Citizen Information** (`citizen_info`, text, required): Enter the citizen's name, address, and any other relevant information.
* **First Name** (`first_name`, text, required): Enter the citizen's first name.
* **Last Name** (`last_name`, text, required): Enter the citizen's last name.
* **Email Address** (`email`, email, required): Enter the citizen's email address.
* **Phone Number** (`phone`, text, required): Enter the citizen's phone number.
* **Address** (`address`, text, required): Enter the citizen's address.
* **Date of Birth** (`date_of_birth`, date, required): Enter the citizen's date of birth in the correct format (YYYY-MM-DD).
* **Voter Status** (`voter_status`, select_one, required): Select the correct voter status:
	+ **Registered**: The citizen is already registered to vote.
	+ **Not Registered**: The citizen is not registered to vote.
	+ **Pending**: The citizen's voter status is pending.
* **Registration Method** (`registration_method`, select_one, required): Select the method the citizen used to register:
	+ **In Person**: The citizen registered in person.
	+ **Mail**: The citizen registered by mail.
	+ **Online**: The citizen registered online.
	+ **Via Phone**: The citizen registered via phone.
* **Update Reason** (`update_reason`, text, required): Enter the reason for updating the voter status.
* **Comments** (`comments`, note, required): Add any additional comments about the citizen's registration.
