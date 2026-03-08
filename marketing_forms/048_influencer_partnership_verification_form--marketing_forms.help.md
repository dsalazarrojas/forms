<thinking>As a form designer and technical writer, I need to understand the purpose and requirements of the form to create an effective user-facing help guide. Upon reviewing the provided YAML, I see that the form is called "Influencer Partnership Verification Form" and it's part of the "marketing_forms" category. The form has several fields: first_name, last_name, email, phone_number, verification_type (select one), select_multiple (select multiple), date, time, and note. The "verification_type" field has three options: "Option 1", "Option 2", and "Option 3". The "select_multiple" field also has three options: "Option 1", "Option 2", and "Option 3". All fields except "first_name" and "last_name" are optional. I will create a user-facing help guide that explains the purpose of the form, how to complete it, and what each field means in a clear and concise manner.</thinking>

# Influencer Partnership Verification Form - Help Guide
## Purpose
The Influencer Partnership Verification Form is used for verifying information about an influencer's partnership with your company. This form is used to collect details about the influencer's identity and partnership preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields: first_name and last_name.
2. Provide your email address and phone number (if applicable).
3. Select the verification type for the partnership.
4. Select multiple options for the partnership (if applicable).
5. Optional: provide a date and time for any additional information.
6. Add any additional notes about the partnership.

## Field-by-Field Explanation
* **First Name** (`first_name`, Text, Required): Enter your first name.
* **Last Name** (`last_name`, Text, Required): Enter your last name.
* **Email** (`email`, Email, Optional): Enter your email address.
* **Phone Number** (`phone_number`, Text, Optional): Enter your phone number (if applicable).
* **Verification Type** (`verification_type`, Select One, Optional): Select the type of verification you need for the partnership:
	+ Option 1
	+ Option 2
	+ Option 3
* **Select Multiple** (`select_multiple`, Select Multiple, Optional): Select multiple options for the partnership (if applicable):
	+ Option 1
	+ Option 2
	+ Option 3
* **Date** (`date`, Date, Optional): Provide a date for any additional information (if applicable).
* **Time** (`time`, Time, Optional): Provide a time for any additional information (if applicable).
* **Note** (`note`, Note, Optional): Add any additional notes about the partnership (if applicable).
