<thinking>
To create a user-facing help guide for a form, I need to consider the following:

- The form is used for onboarding users to a digital wallet, likely for financial services or identity verification.
- The form collects various user and business information to create a profile.
- The form seems to be focused on gathering basic personal and business contact information, as well as sensitive data such as password and TIN/EIN.

This form appears to be used for both individual and business onboarding, but there's a clear distinction between personal and business fields.
</thinking>

# Digital Wallet Onboarding Form - Help Guide
## Purpose
The Digital Wallet Onboarding Form is used to create a user profile for a digital wallet service. This form collects essential information to verify and onboard both individuals and businesses, providing a secure and personalized experience.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal details:
	* First Name: Enter your first name as it appears on your identification documents.
	* Last Name: Enter your last name as it appears on your identification documents.
	* Email Address: Enter your active email address for communication and verification.
	* Phone Number: Enter your contact phone number.
	* Password: Create a strong and unique password for your digital wallet account.
2. Confirm your password for security purposes.
3. Choose your user type:
	* User Type: Select whether you are an individual or a business.
4. Confirm your country of origin:
	* Country: Select your country of residence.
5. Provide your business information (if applicable):
	* Business Name: Enter your business name if you are a business user.
	* Business Type: Confirm whether your business is subject to specific regulations.
6. Confirm your business address and contact information (if applicable):
	* Business Address: Enter your business address.
	* Business Phone: Enter your business phone number.
	* Business Email: Enter your business email address.
7. Confirm sensitive business information (if applicable):
	* Business License Number: Enter your business license number.
	* Business TIN/EIN: Enter your business TIN or EIN.
8. Additional information (if applicable):
	* Business Industry: Enter your business industry.
	* Website: Enter your business website.
	* Fax: Enter your business fax number.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your identification documents.
* **Email Address** (`email_address`, email, required): Enter your active email address for communication and verification.
* **Phone Number** (`phone_number`, text, required): Enter your contact phone number.
* **Password** (`password`, select_one, required): Create a strong and unique password for your digital wallet account.
* **Confirm Password** (`password`, select_one, required): Confirm your password for security purposes.
* **User Type** (`user_type`, select_multiple, required): Select whether you are an individual or a business.
* **Country** (`country`, select_one, required): Select your country of residence.
* **Business Name** (`business_name`, text, optional): Enter your business name if you are a business user.
* **Business Type** (`business_type`, select_one, required): Confirm whether your business is subject to specific regulations.
* **Business Address** (`business_address`, text, optional): Enter your business address.
* **Business Phone** (`business_phone`, text, optional): Enter your business phone number.
* **Business Email** (`business_email`, email, optional): Enter your business email address.
* **Business License** (`business_license`, text, optional): Enter your business license number.
* **Business License Number** (`business_license_number`, text, optional): Enter your business license number.
* **TIN** (`tin`, text, optional): Enter your business TIN.
* **EIN** (`ein`, text, optional): Enter your business EIN.
* **Business Industry** (`industry`, text, optional): Enter your business industry.
* **Business Website** (`website`, text, optional): Enter your business website.
* **Business Fax** (`fax`, text, optional): Enter your business fax number.
* **Business Note** (`note`, note, optional): Enter any additional notes for your business account.
* **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth (if applicable).
* **Time of Birth** (`time_of_birth`, time, optional): Enter your time of birth (if applicable).

Note: Fields marked as optional are not required to be filled out unless specifically asked for during onboarding.
