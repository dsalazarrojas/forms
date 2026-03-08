# Sugaring Consent Form - Help Guide
## Purpose
The Sugaring Consent Form is used to obtain the client's consent for sugaring services. This form is a critical part of our processes and helps us ensure that clients understand the services they are receiving.

## How To Complete This Form
To complete this form, follow these steps:

1. Read the form carefully and ensure you understand the purpose and the information required.
2. Enter your informed consent in the "informed" field.
3. Provide a brief description of the service in the "description" field.
4. Select the authorized person from the list in the "authorized" field.
5. Enter the date and time of the consent in the "date" and "time" fields.
6. Sign the form in the "signature" field to confirm your consent.

## Field-by-Field Explanation
* **Consent Form** (`sugaring_consent_form`, text, optional): This field is where you can enter your informed consent for the sugaring services.
* **Informed** (`patient_informed`, text, optional): Please enter a brief description of the services you are receiving.
* **Consent** (`sugaring_consent`, text, optional): This field is for your consent statement.
* **Description** (`service_description`, text, optional): Enter a brief description of the service you are receiving.
* **Authorized** (`sugaring_consent_authorized`, select_one, required): Select the authorized person for the service from the list: "authorized doctor", "authorized technician", or "authorized nurse".
* **Date** (`client_consent_date`, date, required): Enter the date of your consent.
* **Time** (`client_consent_time`, time, optional): Enter the time of your consent.
* **Signature** (`patient_signature`, note, required): Sign the form to confirm your consent.
* **Provider** (`provider_signature`, note, required): Sign the form as the authorized provider to confirm their consent.
