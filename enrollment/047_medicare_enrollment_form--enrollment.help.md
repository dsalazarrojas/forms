# medicaid_enrollment_form - Help Guide
## Purpose
The medicaid enrollment form is designed to collect necessary information for medicaid enrollment. Please complete this form to provide your personal and contact details for a successful enrollment process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Provider Name**, which is the name of the healthcare provider or organization offering medicaid services.
2. Enter the **Clinic Name**, which is the name of the clinic where you will receive medicaid services.
3. Select your **Medicare Plan**, which is the type of medicaid coverage you are seeking.
4. Enter your **Patient Name**, which is your name as it appears on your identification documents.
5. Enter your **Date of Birth**, which is your date of birth in the format MM/DD/YYYY.
6. Select your **Date of Service**, which is the date you will receive medicaid services (HH:MM AM/PM).
7. Enter your **Address**, which is your current address.
8. Enter your **Phone Number**, which is your primary phone number.
9. Enter your **Email**, which is your primary email address.
10. Enter your **Insurance Card Number**, which is your medicaid insurance card number.
11. Enter your **Social Security Number**, which is your social security number.
12. If you have a **Medical History**, please enter any relevant medical information.
13. If you have an **Emergency Contact**, please enter their name.
14. If you have an **Emergency Contact Number**, please enter their phone number.
15. If you have an **Emergency Contact Relationship**, please select their relationship to you.

## Field-by-Field Explanation
* **Provider Name** (`provider_name`, text, required): Enter the name of the healthcare provider or organization offering medicaid services.
* **Clinic Name** (`clinic_name`, text, required): Enter the name of the clinic where you will receive medicaid services.
* **Medicare Plan** (`medicare_plan`, select_one, required): Select the type of medicaid coverage you are seeking.
* **Patient Name** (`patient_name`, text, required): Enter your name as it appears on your identification documents.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Date of Service** (`date_of_service`, time, required): Select the date you will receive medicaid services (HH:MM AM/PM).
* **Address** (`patient_address`, text, required): Enter your current address.
* **Phone Number** (`phone_number`, number, required): Enter your primary phone number.
* **Email** (`email_address`, email, required): Enter your primary email address.
* **Insurance Card Number** (`insurance_card_number`, text, required): Enter your medicaid insurance card number.
* **Social Security Number** (`social_security_number`, text, required): Enter your social security number.
* **Medical History** (`medical_history`, text, optional): If you have relevant medical history, enter it here.
* **Emergency Contact** (`emergency_contact`, text, optional): If you have an emergency contact, enter their name.
* **Emergency Contact Number** (`emergency_contact_phone`, number, optional): If you have an emergency contact, enter their phone number.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, select_one, optional): Select the relationship to the emergency contact (e.g., Mother, Father, Spouse, etc.).
