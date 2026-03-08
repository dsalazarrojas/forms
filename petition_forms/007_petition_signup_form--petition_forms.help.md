# Petition Signup Form - Help Guide
## Purpose
The Petition Signup Form is used to collect personal details and agreements from individuals who wish to sign a petition in an academic or organizational setting. This form helps ensure that petitioners can be identified and their contact information shared with relevant parties.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the first name field.
2. Enter your last name in the last name field.
3. Provide your email address in the email field.
4. Enter your phone number in the phone field.
5. Type in your address in the address field.
6. Select your city in the city field.
7. Select your state in the state field.
8. Enter your zip code in the zip field.
9. Select your country in the country field.
10. Write your signature text in the signature text field. This is a free-text field where you can enter any text you'd like to sign your name to.
11. Agree to the terms and conditions by selecting "Yes" in the agree terms and conditions field.
12. Consent to share your contact information by selecting "Yes" in the consent to share contact info field.
13. Indicate whether you want to share your signature image or not by selecting "Yes" or "No" in the signature image field.
14. Select "Yes" or "No" in the custom checkbox field, though its purpose is unclear as it is not explained in the provided YAML.
15. Select "Yes" or "No" in the custom radio field, similar to the custom checkbox field.
16. Select a date in the custom date field, which seems to be a date field but is required, making it a unique case.

## Field-by-Field Explanation
- **first_name** (text, required): Enter your given name.
- **last_name** (text, required): Enter your last name.
- **email** (email, required): Enter your email address that we can use to contact you.
- **phone** (text, required): Enter your phone number that we can use to contact you.
- **address** (text, required): Type in your full address where you can be contacted.
- **city** (text, required): Select the city where you live.
- **state** (text, required): Select the state where you live.
- **zip** (number, required): Enter your zip code.
- **country** (text, required): Select the country where you live.
- **signature_text** (note, required): Write your signature text, such as your name or a message to sign the petition.
- **agree_terms_and_conditions** (select_one, required): Agree to the terms and conditions of the petition.
- **consent_to_share_contact_info** (select_one, required): Consent to share your contact information with relevant parties.
- **signature_image** (select_one, required): Indicate whether you want to share your signature image or not.
- **custom_checkbox** (select_one, required): Select "Yes" or "No", purpose unclear.
- **custom_radio** (select_one, required): Select "Yes" or "No", similar to custom checkbox.
- **custom_date** (date, required): Select a date, though this is a required field for a date field.
- **custom_date** (select_one, required): This field seems to be incorrectly defined as a select_one type, it should be date.

Note: The form fields custom_checkbox and custom_radio appear to be misconfigured, as they both have required=true and select_one type but no clear purpose in the context of the form. The form also seems to have inconsistencies, such as the custom_date field being both date type and select_one type. The provided YAML structure might be incomplete or contain errors, which could affect the accuracy of this help guide. 

This field-by-field explanation aims to provide clear and concise instructions on how to fill out the petition form.
