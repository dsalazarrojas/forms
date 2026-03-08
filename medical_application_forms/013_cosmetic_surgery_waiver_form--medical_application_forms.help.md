<thinking>As a form designer and technical writer, I'll create a user-facing help guide for this "Cosmetic Surgery Waiver Form" based on the provided YAML fields. The form appears to be designed to gather information from patients undergoing cosmetic surgery, including consent, medical history, procedure details, surgeon information, and emergency contact details. I'll ensure the guide is clear, concise, and practical, explaining each field in a way that's easy to understand for end-users.</thinking>

# Cosmetic Surgery Waiver Form - Help Guide
## Purpose
This guide will walk you through the process of completing the Cosmetic Surgery Waiver Form, which is required for patients undergoing cosmetic surgery. The form collects essential information about the patient, including consent, medical history, procedure details, and emergency contact information.

## How To Complete This Form

To complete the form, follow these steps:

1. Ensure you have all the necessary information and documentation required.
2. Answer each question accurately and completely.
3. Review your responses for accuracy before submitting the form.

## Field-by-Field Explanation

* **Patient Consent** (`patient_consent`, `note`, required): This section is for you to acknowledge that you've read, understand, and agree to the terms and conditions of the cosmetic surgery procedure. Please type your consent in the provided space.
* **Medical History** (`medical_history`, `note`, required): Describe any medical conditions, allergies, or previous surgeries that may impact your cosmetic surgery.
* **Procedure** (`procedure`, `select_one`, required): Choose the type of procedure you're undergoing (e.g., Facelift, Botox, Tummy Tuck, etc.).
* **Surgeon Details** (`surgeon_details`, `select_one`, required): Select the surgeon who will be performing your procedure (e.g., Dr. Smith, Dr. Johnson, Dr. Lee, etc.).
* **Risks and Complications** (`risks_and_complications`, `note`, required): List any risks or complications you're aware of that may be associated with your procedure.
* **Patient Signature** (`patient_signature`, `text`, required): Sign your name to confirm your consent.
* **Clinic Name** (`clinic_name`, `text`, optional): If you're undergoing your procedure at a specific clinic, enter their name.
* **Clinic Address** (`clinic_address`, `text`, optional): Enter the address of the clinic where your procedure will take place.
* **Contact Number** (`contact_number`, `text`, required): Provide a phone number where you can be reached in case of emergencies.
* **Patient Name** (`patient_name`, `text`, required): Enter your full name.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth.
* **Email** (`email`, `email`, optional): If you have an email address, enter it for communication purposes.
* **Consent Date** (`consent_date`, `date`, required): Enter the date you're signing this waiver form.
* **Consent Time** (`consent_time`, `time`, required): Enter the time you're signing this waiver form.
* **Consent By** (`consent_by`, `select_one`, required): Select the surgeon who is consenting on your behalf (e.g., Dr. Smith, Dr. Johnson, Dr. Lee, etc.).
* **Medical Contact** (`medical_contact`, `text`, optional): If you have a medical contact person, enter their name.
* **Contact Number** (`contact_number`, `text`, required): Provide a phone number where your medical contact can be reached.
* **Emergency Contact** (`emergency_contact`, `select_one`, optional): If you have an emergency contact, indicate whether they will be present during your procedure.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, optional): If you have an emergency contact, enter their name.
* **Emergency Contact Number** (`emergency_contact_number`, `text`, optional): If you have an emergency contact, enter their phone number.
* **Medical Facility** (`medical_facility`, `select_one`, optional): If you're undergoing your procedure at a specific medical facility, select it (e.g., Local Hospital, Local Clinic, Local Doctor, etc.).
* **Medical Facility Name** (`medical_facility_name`, `text`, optional): Enter the name of the medical facility where your procedure will take place.
* **Medical Facility Address** (`medical_facility_address`, `text`, optional): Enter the address of the medical facility where your procedure will take place.
* **Medical Facility Phone** (`medical_facility_phone`, `text`, optional): Enter the phone number of the medical facility where your procedure will take place.
* **Medical Facility Email** (`medical_facility_email`, `email`, optional): Enter the email address of the medical facility where your procedure will take place.
