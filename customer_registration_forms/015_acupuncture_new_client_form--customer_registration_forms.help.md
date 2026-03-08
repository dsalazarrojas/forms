# Acupuncture New Client Form - Help Guide
## Purpose
This form is designed to collect information from new clients registering with the acupuncture clinic.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Fill in your personal details, including your full name, date of birth, and street address.
2. Provide your contact information, including your email address and mobile phone number.
3. If applicable, enter the name and contact information of your emergency contact.
4. Answer the question about your primary health goal.
5. If relevant, provide any known allergies, current medications, and history of major surgeries or injuries.
6. Enter your health fund provider and membership number (if applicable).
7. Confirm your agreement with the clinic's policies, including cancellation and privacy policies.
8. Finally, certify that the information provided is accurate and sign the form.

## Field-by-Field Explanation

* **Full Name** (`full_name`, `text`, required): Please enter your full name as it should be spelled.
* **Date of Birth** (`date_of_birth`, `date`, required): Please enter your date of birth in the format `YYYY-MM-DD`.
* **Street Address** (`street_address`, `text`, required): Please enter your street address where you can be reached.
* **Email Address** (`email_address`, `email`, required): Please enter your email address where you can be contacted.
* **Mobile Phone** (`mobile_phone`, `text`, required): Please enter your mobile phone number where you can be contacted.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, required): If you have an emergency contact, please enter their name.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, required): If you have an emergency contact, please enter their phone number.
* **Primary Health Goal** (`primary_health_goal`, `text`, required): Please describe the primary health goal you hope to achieve with acupuncture.
* **Known Allergies** (`known_allergies`, `text`, optional): If you have any known allergies, please list them.
* **Current Medications and Supplements** (`current_medications`, `text`, optional): If you have any ongoing medications or supplements, please list them.
* **History of Major Surgeries or Injuries** (`major_surgeries`, `text`, optional): If you have had any major surgeries or injuries, please describe them.
* **Health Fund Provider** (`health_fund_provider`, `text`, optional): If you have health insurance, please enter your provider's name.
* **Membership Number** (`health_fund_number`, `text`, optional): If you have health insurance, please enter your membership number.
* **I agree to provide 24 hours notice for any cancellations** (`cancellation_policy_ack`, `select_one`, required): Select "I Agree" if you understand and agree with the clinic's cancellation policy.
* **I consent to the collection and storage of my health information** (`privacy_policy_ack`, `select_one`, required): Select "I Consent" if you agree with the clinic's privacy policy.
* **I certify that the information provided is accurate** (`client_signature_ack`, `select_one`, required): Select "I Certify" if you confirm that the information provided is accurate.
* **Date** (`today_date`, `date`, required): This field will be automatically populated with the current date.
