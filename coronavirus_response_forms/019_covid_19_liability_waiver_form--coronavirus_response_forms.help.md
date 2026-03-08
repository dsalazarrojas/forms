<thinking>As an expert form designer and technical writer, I will create a user-facing help guide for the "COVID 19 Liability Waiver Form" based on the provided YAML fields. The purpose of this form is to gather information from individuals who are participating in certain activities or visiting a specific location, acknowledging their understanding of COVID-19 risks and agreeing to a waiver of liability. This form is likely used in situations where the organization is liable for potential COVID-19 exposure or transmission. The form is designed to be completed by participants, and the information gathered will help the organization assess and manage risks associated with COVID-19.

To complete this form, participants should first read and understand the sections outlined below. Please note that some sections are not required, but it is still essential to review and acknowledge the content.

## Purpose

This form is to be completed by participants to acknowledge their understanding of COVID-19 risks and agree to a waiver of liability. Please carefully review each section to ensure you understand the information and requirements.

## How To Complete This Form

To complete this form, please go through each section step by step:

1. Enter your Full Name
2. Select your Role (Employee, Customer, Visitor, etc.)
3. Provide your Email Address
4. Enter your Phone Number
5. Enter your Date of Birth (in YYYY-MM-DD format)
6. If you are visiting an organization, provide the Organization or Department name
7. Acknowledge the risk of COVID-19 transmission
8. Confirm you are free of COVID-19 symptoms
9. Confirm you have not been diagnosed with COVID-19 in the past 14 days
10. Confirm you have not been exposed to a confirmed COVID-19 case in the past 14 days
11. Review and agree to the waiver terms
12. Assume responsibility for COVID-19 risks
13. Agree to release and hold harmless the organization from COVID-19 claims
14. Agree to defend and indemnify the organization
15. Sign and date the agreement

## Field-by-Field Explanation

* **Full Name** (`participant_name`, Text, required)
    * This is the name as it appears on your identification documents.
* **Role** (`participant_role`, Select, required)
    * Please select the category that best describes your status (Employee, Customer, Visitor, etc.).
* **Email Address** (`participant_email`, Email, required)
    * This is the email address associated with your identity or account.
* **Phone Number** (`participant_phone`, Text, required)
    * This is the phone number you can be contacted at.
* **Date of Birth** (`date_of_birth`, Date, required)
    * Enter your date of birth in YYYY-MM-DD format (e.g., 1990-01-01).
* **Organization or Department** (`organization`, Text, optional)
    * If visiting an organization, please provide the name of the organization or department.
* **COVID-19 Risk Acknowledgment** (`section_covid_acknowledgment`, Note, optional)
    * This section outlines the risks associated with COVID-19. Please read carefully.
* **I acknowledge the risk of COVID-19 transmission** (`acknowledge_transmission`, Select, required)
    * Please select "True" to acknowledge the risk.
* **I acknowledge I am free of COVID-19 symptoms** (`acknowledge_symptoms`, Select, required)
    * Please select "True" to confirm you are free of symptoms.
* **I have not been diagnosed with COVID-19 in the past 14 days** (`acknowledge_no_diagnosis`, Select, required)
    * Please select "True" if you have not been diagnosed with COVID-19 in the past 14 days.
* **I have not been exposed to a confirmed COVID-19 case in the past 14 days** (`acknowledge_no_exposure`, Select, required)
    * Please select "True" if you have not been exposed to a confirmed COVID-19 case in the past 14 days.
* **Waiver Terms** (`section_waiver_terms`, Note, optional)
    * This section outlines the terms of the waiver. Please review carefully.
* **I assume risk related to COVID-19** (`assume_risk`, Select, required)
    * Please select "I assume risk" to confirm you understand the risks.
* **I release and hold harmless the organization** (`release_hold_harmless`, Select, required)
    * Please select "I agree" to release and hold harmless the organization.
* **I agree to defend and indemnify the organization** (`defend_indemnify`, Select, required)
    * Please select "I agree" to defend and indemnify the organization.
* **Agreement Signature** (`section_signature`, Note, optional)
    * This section confirms your agreement to the waiver terms.
* **Date of Agreement** (`signature_date`, Date, required)
    * Enter the date you complete this form.
* **I have read and understand all terms of this waiver** (`signature_confirmation`, Select, required)
    * Please select "True" to confirm you have read and understand the terms.</thinking>

COVID 19 Liability Waiver Form - Help Guide
