<thinking>
To confirm, I will create a user-facing help guide for the "electronic_medical_record_access_consent_form" in Markdown format. I will include a brief internal reasoning block to explain the form purpose and checks for relevance and non-duplication.
</thinking>

# electronic_medical_record_access_consent_form - Help Guide
## Purpose
This form is used to obtain consent from healthcare providers for electronic medical record access. It is crucial for ensuring that healthcare providers' records are kept secure and their consent is obtained before accessing their information. This form should only be used when it is necessary to access a healthcare provider's medical records.
## How To Complete This Form
To complete this form, follow these steps:
- Select "Yes" or "No" to indicate whether the healthcare provider has agreed to electronic medical record access.
- Enter the date you plan to access the healthcare provider's medical records.
- Choose the type of consent that has been given (explicit or implicit).
- If explicit consent was given, enter the date it was provided. Note that this field is not required for implicit consent.
- Select the time you plan to access the medical records.
- Enter any additional notes or comments, if necessary.
- If you have a contact phone number or email for the healthcare provider, you can include it for communication purposes.

## Field-by-Field Explanation
* **Healthcare Provider** (`healthcare_provider`, select_one, required): Select "Yes" or "No" to indicate whether the healthcare provider has agreed to electronic medical record access.
* **Access Date** (`access_date`, date, required): Enter the date you plan to access the healthcare provider's medical records.
* **Consent Type** (`consent_type`, select_one, required): Choose the type of consent that has been given (explicit or implicit).
* **Consent Date** (`consent_date`, date, optional): If explicit consent was given, enter the date it was provided.
* **Access Time** (`access_time`, time, required): Select the time you plan to access the medical records.
* **Notes** (`notes`, text, required): Enter any additional notes or comments, if necessary.
* **Contact Number** (`contact_number`, text, optional): If you have a contact phone number for the healthcare provider, you can include it for communication purposes.
* **Email** (`email`, email, optional): If you have a contact email for the healthcare provider, you can include it for communication purposes.
* **Fax Number** (`fax_number`, text, optional): If you have a contact fax number for the healthcare provider, you can include it for communication purposes.
