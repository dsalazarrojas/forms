<thinking>
This form is designed to onboard a real estate client, collecting essential information from them, including their contact details, property information, and preferred method of contact. The form aims to ensure that the client has a seamless experience with our real estate services. To avoid duplication and ensure consistency, we will be checking for existing client records before processing any new submissions. If a duplicate record is detected, we will prompt the user to update the existing record instead of creating a new one.
</thinking>

# real_estate_client_onboarding_form - Help Guide
## Purpose
This form is designed to help you on-board as a real estate client with our services.

## How To Complete This Form
1. Fill out all required fields marked as `required` in the form. These fields are necessary for us to process your onboarding.
2. Select your preferred method of contact from the dropdown menu for "Contact Method" (phone, email, or mail).
3. Select the type(s) of property you are interested in from the "Property Type" dropdown menu.
4. Choose your real estate agent from the "Real Estate Agent" dropdown menu.
5. Make sure to review and submit your form for processing.

## Field-by-Field Explanation
* **Client Information** (`client_info`, `text`, `false`): Please enter your name, company, and other relevant client information.
* **Contact Info** (`contact_info`, `text`, `false`): Enter your contact information, including your address, phone number, and email.
* **Property Resources** (`property_resources`, `number`, `false`): This field is not relevant for onboarding purposes and can be ignored.
* **Property Address** (`property_address`, `note`, `false`): This field is not relevant for onboarding purposes and can be ignored.
* **Real Estate Agent** (`real_estate_agent`, `select_one`, `true`): Choose one of our real estate agents to assist you with your real estate needs.
* **Contact Method** (`contact_method`, `select_one`, `true`): Select your preferred method of contact (phone, email, or mail).
* **Property Type** (`property_type`, `select_multiple`, `true`): Select the type(s) of property you are interested in (single family home, multi family home, condo).
* **Property Type** (`property_type`, `select_multiple`, `true`): This is a duplicate field and can be ignored.
* **Property Address** (`property_address`, `note`, `false`): This field is not relevant for onboarding purposes and can be ignored.
* **Property Address** (`property_address`, `note`, `type`, `false`): This field is not relevant for onboarding purposes and can be ignored.
* **Property Address** (`property_address`, `note`, `false`): This field is not relevant for onboarding purposes and can be ignored.

Note: The last three "Property Address" fields are duplicates and can be ignored. The form is designed to collect only the necessary information required for onboarding a real estate client.
