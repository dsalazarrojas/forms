<thinking>
The Legal Client Intake Form is used to collect vital information from legal clients, including their personal details, contact information, and agreement to certain terms. This form is crucial for the legal team to understand the client's context and provide the best possible service.
To avoid duplication and ensure the correct completion of this form, please make sure you have the necessary permissions and approvals before proceeding.
This form is split into multiple pages, each focusing on a specific aspect of the client's information.
</thinking>

# Legal Client Intake Form - Help Guide
## Purpose
The Legal Client Intake Form is used to collect essential information from legal clients, enabling the legal team to understand their requirements and provide tailored services.

## How To Complete This Form
To fill out this form, please follow these steps:

*   Fill in your First Name.
*   Fill in your Last Name.
*   Enter your Email address.
*   Enter your Phone number.
*   Select whether or not you have agreed to the terms and conditions. Please note that "Agreed" and "Agreed Other" are mutually exclusive options.
*   (Optional) Enter your Date of Birth, Time of Birth, Address, State, Country, and Zip Code if you choose to provide them.
*   Sign this form by placing your signature in the Signature field.

## Field-by-Field Explanation

*   **First Name** (`legal_client_first_name`, text, **required**): Please enter your first name here.
*   **Last Name** (`legal_client_last_name`, text, **required**): Please enter your last name here.
*   **Email** (`legal_client_email`, email, **required**): Enter your email address.
*   **Phone** (`legal_client_phone`, text, **required**): Enter your phone number.
*   **Agreed** (`legal_client_agreed`, select_one, **required**): Please select whether you have agreed to the terms and conditions.
	+   **True**: You have agreed to the terms and conditions.
	+   **False**: You have not agreed to the terms and conditions.
*   **Agreed Other** (`legal_client_agreed_other`, text, optional): Please describe any other agreements or considerations here. (This field is not applicable if you selected "Agreed" above.)
*   **Date of Birth** (`legal_client_date_of_birth`, date, optional): Enter your date of birth, if applicable.
*   **Time of Birth** (`legal_client_time_of_birth`, time, optional): Enter your time of birth, if applicable.
*   **Address** (second instance `legal_client_address`, text, optional): Enter your address, if applicable.
*   **State** (`legal_client_state`, text, optional): Enter your state, if applicable.
*   **Country** (`legal_client_country`, text, optional): Enter your country, if applicable.
*   **Zip** (`legal_client_zip`, text, optional): Enter your zip code, if applicable.
*   **Signature** (second instance `legal_client_signature`, note, optional): Place your signature here.

Note: All fields marked "optional" can be left blank if not applicable or not provided.
