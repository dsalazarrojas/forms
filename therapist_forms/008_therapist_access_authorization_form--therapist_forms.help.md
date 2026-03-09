# Therapist Access Authorization Form - Help Guide
## Purpose
This form is used to request access to client data for therapists. It requires the following information from the client:

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name and email address in the "Client Name" and "Email" fields, respectively.
2. Select the level of access you want to grant to the therapist (High, Low, or Medium).
3. Choose the level of sharing consent you are comfortable with (High, Low, Medium, or None).
4. Enter your phone number and social security number.
5. Enter the name of the therapist you are authorizing.
6. Enter the date of your last contact with the therapist.
7. Enter the purpose of the contact.
8. Enter the date and expiration date of authorization.

## Field-by-Field Explanation

* **Client Name** (`client_name`, `text`, required): Enter your full name as it appears on your identification documents.
* **Access Level** (`access_level`, `select_one`, required): Select the level of access you want to grant to the therapist.
	+ High: Grants full access to client data.
	+ Low: Grants limited access to client data.
	+ Medium: Grants moderate access to client data.
* **Sharing Consent** (`sharing_consent`, `select_multiple`, required): Select the level of sharing consent you are comfortable with.
	+ High: Data can be shared with other therapists.
	+ Low: Data can be shared with other departments within the organization.
	+ Medium: Data can be shared with other departments and certain personnel.
	+ None: Data cannot be shared with anyone.
* **Email** (`email`, `email`, required): Enter your email address as it is registered with your identification documents.
* **Phone** (`phone`, `text`, required): Enter your phone number as it is registered with your identification documents.
* **Date of Birth** (`date_of_birth`, `date`, optional): Enter your date of birth as it appears on your identification documents.
* **Address** (`address`, `text`, optional): Enter your current address as it appears on your identification documents.
* **Social Security Number** (`social_security_number`, `select_one`, required): Select your social security number from the options provided.
* **Therapist Name** (`therapist_name`, `text`, required): Enter the name of the therapist you are authorizing.
* **Date of Last Contact** (`date_of_last_contact`, `date`, optional): Enter the date of your last contact with the therapist.
* **Purpose of Contact** (`purpose_of_contact`, `text`, optional): Enter a brief description of the reason for the contact.
* **Authorization Date** (`authorization_date`, `date`, optional): Enter the date of authorization.
* **Expiration Date** (`expiration_date`, `date`, optional): Enter the date of expiration of authorization.
* **Reason for Contact** (`reason_for_contact`, `text`, optional): Enter a brief description of the reason for the contact.
