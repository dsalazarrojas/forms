# Client Information Card Form - Help Guide
## Purpose
This form is used to collect essential information about clients and create a client information card to track and manage client interactions.

## How To Complete This Form
To complete this form, please follow these steps:

1. Start by filling out the required personal details:
	* First Name
	* Last Name
	* Email Address
	* Phone Number
	* Street Address
	* City
	* State
	* ZIP Code
2. Next, select your preferred contact method and best time to contact:
	* Preferred Contact Method
	* Best Time to Contact
3. Select your industry and client type:
	* Industry (e.g., Technology, Healthcare, Finance)
	* Client Type (e.g., Individual, Business, Non-Profit)
4. Choose your client status and referral source:
	* Client Status (e.g., Prospective, Active, Inactive)
	* How Did You Hear About Us? (e.g., Website, Social Media, Referral)
5. If applicable, select the services you are interested in and provide additional notes:
	* Services You Are Interested In (select all that apply)
	* Additional Notes (if any)
6. Finally, review and submit your information.

## Field-by-Field Explanation
* **First Name** (`client_first_name`, text, required): Enter your legal first name.
* **Last Name** (`client_last_name`, text, required): Enter your legal last name.
* **Email Address** (`client_email`, email, required): Enter your primary contact email address.
* **Phone Number** (`client_phone`, text, required): Enter your best contact number.
* **Street Address** (`client_address`, text, required): Enter your complete mailing address.
* **City** (`client_city`, text, required): Enter your city.
* **State** (`client_state`, text, required): Enter your state.
* **ZIP Code** (`client_zip`, text, required): Enter your ZIP code.
* **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth in MM/DD/YYYY format.
* **Company Name** (`company_name`, text, optional): Enter your business name if applicable.
* **Job Title** (`job_title`, text, optional): Enter your position.
* **Industry** (`industry`, select_one, optional): Select your business sector (e.g., Technology, Healthcare).
* **Client Type** (`client_type`, select_one, required): Select your relationship with us (e.g., Individual, Business, Non-Profit).
* **Client Status** (`client_status`, select_one, required): Select your current status (e.g., Prospective, Active, Inactive).
* **How Did You Hear About Us?** (`referral_source`, select_one, optional): Select how you heard about us (e.g., Website, Social Media, Referral).
* **Referred By** (`referred_by`, text, optional): Enter who referred you if applicable.
* **Preferred Contact Method** (`preferred_contact_method`, select_one, required): Select your preferred contact method (e.g., Email, Phone Call, Text Message).
* **Best Time to Contact** (`best_time_to_contact`, select_one, optional): Select a time that works best for you to be contacted.
* **Services You Are Interested In** (`services_interested`, select_multiple, optional): Select all services you are interested in (e.g., Consulting, Support Services, Training).
* **Assigned Account Manager** (`account_manager`, text, optional): Enter your primary contact name if applicable.
* **Client Since** (`client_since`, date, optional): Enter when you started as a client.
* **Additional Notes** (`notes`, text, optional): Enter any other relevant information.
* **Card Created Date** (`card_created_date`, date, required): This field is automatically populated and not editable.
