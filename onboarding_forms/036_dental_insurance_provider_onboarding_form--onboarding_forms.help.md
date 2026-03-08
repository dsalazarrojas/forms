<thinking>
The form purpose and field selection are likely intended to collect information about a dental insurance provider, including their onboarding status, contact information, and license status. However, some fields seem inconsistent or unrelated to the category or purpose.
</thinking>

# Dental Insurance Provider Onboarding Form - Help Guide
## Purpose
This form is designed to collect information from dental insurance providers, including their onboarding status, contact information, and license status. It will help the administrators to manage and onboard new providers efficiently.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Fill in the form title and description.
2. Select "Yes" or "No" for the onboarding status questions.
3. Select the correct option for the "Dental Insurance Provider" question.
4. Enter the provider's name in the "Insurer Name" field.
5. Enter the provider's address, city, state, and zip code.
6. Enter the provider's license status.
7. Optionally, provide additional notes if necessary.
8. Select "Yes" or "No" for the "Phone" and "Email" questions if applicable.
9. Click "Submit" to complete the form.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, required): Enter a brief title for the form, which will be used to identify the form in the system.
* **Form Category** (`form_category`, select_one, required): Select "Yes" if the form is a dental insurance provider onboarding form, "No" otherwise. This field is used to categorize the form for administrative purposes.
* **Form Description** (`form_description`, text, optional): Enter a brief description of the form, which will help in identifying the form's purpose.
* **Onboarding Forms** (`form_category`, select_one, required): This field is likely intended to ask if the form is an onboarding form, but it seems inconsistent with the "Form Category" field. Please ignore this field for now.
* **Dental Insurance Provider** (`form_provider`, select_one, required): Select "Yes" if this form is for a dental insurance provider, "No" otherwise. This field is used to identify the type of form.
* **Insurer Name** (`form_insurer`, select_one, required): Enter the name of the dental insurance provider.
* **Address** (`form_address`, text, required): Enter the physical address of the provider.
* **City** (`form_city`, text, required): Enter the city of the provider's location.
* **State** (`form_state`, text, required): Enter the state of the provider's location.
* **Zip** (`form_zip`, text, required): Enter the zip code of the provider's location.
* **Phone** (`form_phone`, select_one, optional): Select "Yes" if the provider has a phone number, "No" otherwise. This field is intended to indicate if the provider has a contact phone number.
* **Email** (`form_email`, select_one, optional): Select "Yes" if the provider has an email address, "No" otherwise. This field is intended to indicate if the provider has a contact email address.
* **License** (`form_license`, text, required): Enter the provider's license status.
* **Notes** (`form_notes`, text, optional): Enter any additional notes or information about the provider.
* **Status** (`form_status`, text, required): Enter the status of the form, which will likely be used for administrative purposes.
