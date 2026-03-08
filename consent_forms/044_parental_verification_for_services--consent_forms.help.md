# Parental Verification For Services - Help Guide
## Purpose
The Parental Verification For Services form is used to collect information from a parent or guardian to verify their consent and provide details for services offered by the organization. This includes contact information, services provided, and any additional comments or notes.

## How To Complete This Form

1. Please ensure you have the necessary permissions to complete this form and that you are authorized to access the collected information.
2. Start by filling in the Guardian Information section, providing the parent's name, address, phone number, and email address.
3. In the Consent section, select the correct option to indicate whether the parent has given their consent for the services provided.
4. If the parent has given their consent, list the services you will be providing in the Services section. Multiple services can be selected.
5. You can add any additional comments or notes in the Additional Notes section.
6. Finally, add any additional comments or notes for the parent's records in the Guardian Notes section.

## Field-by-Field Explanation

* **Guardian Information** (`guardian_info`, text, optional)
  This field is used to capture the parent or guardian's name and other contact information.
* **Consent** (`consent`, select_one, required)
  This field is used to indicate whether the parent has given their consent for the services provided. Select 'True' if the parent has given consent, and 'False' if they have not.
* **Contact Details** (`contact_details`, text, optional)
  This field is used to capture any additional contact details for the parent or guardian, such as a mailing address or other relevant information.
* **Name** (`guardian_name`, text, optional)
  This field is used to capture the parent or guardian's name.
* **Email** (`guardian_email`, email, optional)
  This field is used to capture the parent or guardian's email address.
* **Phone** (`guardian_phone`, text, optional)
  This field is used to capture the parent or guardian's phone number.
* **Address** (`guardian_address`, text, optional)
  This field is used to capture the parent or guardian's address.
* **Services** (`services`, select_multiple, required)
  This field is used to list the services you will be providing to the child. Multiple services can be selected.
* **Additional Services** (`additional_services`, text, optional)
  This field is used to capture any additional services not listed in the Services section.
* **Additional Notes** (`notes`, note, optional)
  This field is used to capture any additional comments or notes for the parent's records.
* **Guardian Notes** (`guardian_notes`, note, optional)
  This field is used to capture any additional comments or notes for the parent's records.
