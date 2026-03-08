# Legal Case Inquiry Contact Form - Help Guide
## Purpose
The Legal Case Inquiry Contact Form is a tool to gather information from users about existing legal cases. This form is designed to help us better understand the user's concerns and provide them with the necessary guidance and support.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your First Name and Last Name to identify yourself.
2.  Provide your Email address to enable us to contact you back.
3.  Enter your Phone number so we can contact you if needed.
4.  Describe the Brief description of the legal case in the Case Description field.
5.  Select the relevant Legal Area (Civil, Criminal, Family Law, Employment Law, or Other).
6.  Choose the status of the case (Pending, Ongoing, or Closed).
7.  Select your Preferred Contact Method (Phone, Email, or In-Person).
8.  Choose your Preferred Language (English, French, or Spanish).
9.  If you have any Additional Info, provide it in the provided text field.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Enter your first name as it appears on your official documents.
* **Last Name** (`last_name`, `text`, required): Enter your last name as it appears on your official documents.
* **Email** (`email`, `email`, required): Enter a valid email address where we can contact you.
* **Phone** (`phone`, `text`, optional): Enter your phone number where we can contact you.
* **Case Description** (`case_description`, `text`, optional): Briefly describe the legal case.
* **Legal Area** (`legal_area`, `select_one`, optional): Choose the relevant legal area from the list:
	+ Civil
	+ Criminal
	+ Family Law
	+ Employment Law
	+ Other
* **Case Status** (`case_status`, `select_multiple`, optional): Choose the status of the case:
	+ Pending
	+ Ongoing
	+ Closed
* **Preferred Contact Method** (`preferred_contact_method`, `select_one`, optional): Select how you would like to be contacted:
	+ Phone
	+ Email
	+ In-Person
* **Preferred Language** (`preferred_language`, `select_one`, optional): Choose your preferred language:
	+ English
	+ French
	+ Spanish
* **Additional Info** (`additional_info`, `note`, optional): Provide any additional information about the case.
