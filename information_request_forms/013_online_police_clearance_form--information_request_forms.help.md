<thinking>

To confirm the accuracy and completeness of the information provided, I will first check that all required fields are correctly specified and there is no duplication of fields in the provided YAML. All required fields are present in the form, and no fields are duplicated. I will now create the user-facing help guide for the "Online Police Clearance Form".

# Online Police Clearance Form - Help Guide
## Purpose
This form is used to collect essential information from individuals for police clearance purposes. It gathers basic contact and identity information, including name, address, and identification details. This form is an online version of the traditional police clearance form, allowing users to submit their information digitally.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with the required and optional fields provided.
2. Ensure that all required fields are filled out before submitting the form.
3. Review your information carefully before submitting the form.
4. Click the "Submit" button to submit your form once you have reviewed and confirmed your information.

## Field-by-Field Explanation
### Page 1: Basic Information
* **First name** (`user_first_name`, text, required/optional): Enter your first name as it appears on your identification documents.
* **Last name** (`user_last_name`, text, required/optional): Enter your last name as it appears on your identification documents.
* **Identification Number** (`user_id_number`, text, required/optional): Enter your identification number, if applicable (e.g., driver's license number or ID card number).
* **Birthdate** (`user_birth_date`, date, required/optional): Enter your date of birth.
* **Address** (`user_address`, text, required/optional): Enter your current address.
* **City** (`user_city`, text, required/optional): Enter the city where you currently reside.
* **Province** (`user_province`, text, required/optional): Enter the province where you currently reside.
* **Postal Code** (`user_postal_code`, text, required/optional): Enter your postal code.
* **Country** (`user_country`, text, required/optional): Enter the country where you currently reside.
* **Phone** (`user_phone`, text, required/optional): Enter your phone number.
* **Email** (`user_email`, email, required/optional): Enter a valid email address.

### Page 2: Identification Document
* **ID Document** (`user_id_document`, select_one, required): Select the type of identification document you possess (Passport, Driver's License, ID Card, Birth Certificate, or National ID Card).
* **Document Number** (`user_document_number`, text, required/optional): Enter the number on your selected identification document.
* **Issuing Authority** (`user_document_issuing_authority`, text, required/optional): Enter the authority that issued your identification document.
* **Expiration Date** (`user_document_expiration_date`, date, required/optional): Enter the expiration date of your identification document.

## Tips
- Please ensure that all required fields are completed accurately and truthfully.
- If you need help or have questions, contact our support team for assistance.
- Review your information carefully before submitting the form to avoid errors.
