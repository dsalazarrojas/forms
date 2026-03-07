<thinking>

To determine the form purpose and required fields, we will analyze the form's properties in the YAML. The form appears to be a Dictionary Lookup Request Form, designed to collect information about a dictionary lookup request, presumably for a linguistic or terminology database. The "Request Type" field allows the user to choose from different request types, such as Terminology, Definition, or Translation, suggesting that the form is used for submitting requests to modify or update the dictionary.

Required fields are currently set to "false" for most fields, which implies that users have some flexibility in completing the form. However, the field "submitter" and "submitted" are set to "select_one" with options "Yes" and "No", but they don't necessarily imply they are required for form submission.

To avoid duplication, we should ensure that the form fields are not too similar or redundant. Upon reviewing the fields, we notice that "request_type" and "follow_up" have similar themes, but "follow_up" seems to be a more specific request for follow-up information, while "follow_up" (id: 9) seems to be more about whether follow-up information is needed. This suggests that "follow_up" (id: 9) is intended for users to indicate if follow-up information is available.

The form's fields are:

* Dictionary Lookup Request Form
* Request Type (select_one): Select a request type (e.g., Terminology, Definition, Translation)
* Language (select_one): Select the language for the request (e.g., English, Spanish, French, German)
* Request Term (text): Enter the request term
* Request Term Definition (text): Enter the request term definition
* Translation Language (select_one): Indicate if the translation is available (Yes/No)
* Request Translator (select_one): Indicate if the request has a translator (Yes/No)
* Request Date (date): Enter the date of the request
* Follow-up (select_one): Indicate if follow-up information is available (Yes/No)
* Follow-up Information (text): Enter follow-up information if available
* contact_info (text): Enter contact information
* Submitter (select_one): Indicate if the submitter is the same as the user (Yes/No)
* Submitted (select_one): Indicate if the request is submitted (Yes/No)
* Follow-up Date (date): Enter the follow-up date, if applicable

</thinking>

# dictionary_lookup_request_form - Help Guide
## Purpose
The Dictionary Lookup Request Form is a tool used to submit requests to modify or update a dictionary. This form allows users to select the type of request, language, and other relevant information to ensure that the request is processed accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of request you wish to submit (Terminology, Definition, or Translation).
2. Choose the language for which you are making the request.
3. Enter the term you are requesting.
4. Enter the definition of the term.
5. Indicate if the translation is available (if applicable).
6. Indicate if you have any follow-up information to provide.
7. Enter contact information (if applicable).
8. Confirm if you are the submitter or if someone else submitted the request.
9. Confirm if the request has been submitted.

## Field-by-Field Explanation

* **Request Type**: Select the type of request you wish to submit (Terminology, Definition, Translation).
* **Language**: Choose the language for which you are making the request (English, Spanish, French, German).
* **Request Term**: Enter the term you are requesting.
* **Request Term Definition**: Enter the definition of the term.
* **Translation Language**: Indicate if the translation is available (if applicable).
* **Request Translator**: Indicate if you have a translator for the request (if applicable).
* **Request Date**: Enter the date of the request.
* **Follow-up**: Indicate if you have follow-up information to provide (if applicable).
* **Follow-up Information**: Enter any follow-up information you have (if applicable).
* **Contact Info**: Enter contact information (if applicable).
* **Submitter**: Indicate if you are the submitter (if applicable).
* **Submitted**: Confirm if the request has been submitted.
* **Follow-up Date**: Enter the follow-up date (if applicable).

## Tips

* Ensure that you provide all required information to ensure the request is processed accurately.
* If you have follow-up information, please provide it in the "Follow-up Information" field.
* If you are the submitter or if someone else submitted the request, please confirm in the "Submitter" field.
* If the request has been submitted, please confirm in the "Submitted" field.
* Enter the follow-up date only if you have follow-up information.
