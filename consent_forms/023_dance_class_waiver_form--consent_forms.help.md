# Dance Class Waiver Form - Help Guide

## Purpose
This form is designed to collect necessary information for students participating in a dance class, ensuring their safety and well-being.

## How To Complete This Form

1. Fill out your First Name, Last Name, and Email address.
2. Provide the First Name, Last Name, and Contact Information of your Emergency Contact.
3. If applicable, mention any Medical Conditions and Medications you are taking.
4. List any Allergies you have.
5. Specify your relationship to the participant in the "Relationship" field.
6. Indicate your consent to participate in the "Consent" field.
7. If necessary, select the class time you will be attending in the "Class Attended" field.
8. Choose your payment type and method (if applicable) in the "Payment Type" and "Payment Method" fields.
9. Add any additional comments or information in the "Notes" field.
10. Sign and date the waiver, if desired.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Your first name.
* **Last Name** (`last_name`, text, required): Your last name.
* **Email** (`email`, email, required): Your email address.
* **Emergency Contact First Name** (`emergency_contact_first_name`, text, required): The first name of your emergency contact.
* **Emergency Name** (`emergency_contact_last_name`, text, required): The last name of your emergency contact.
* **Emergency Phone** (`emergency_phone`, text, required): The phone number of your emergency contact.
* **Parent or Guardian First Name** (`parent_or_guardian_first_name`, text, required): The first name of your parent or guardian.
* **Parent or Guardian Last Name** (`parent_or_guardian_last_name`, text, required): The last name of your parent or guardian.
* **Parent or Guardian Contact Info** (`parent_or_guardian_contact_info`, text, required): The contact information of your parent or guardian.
* **Medical Conditions** (`medical_conditions`, text, required): Any medical conditions you may have.
* **Medication** (`medication`, text, required): Any medications you are taking.
* **Allergies** (`allergies`, text, required): Any allergies you have.
* **Relationship** (`emergency_contact_relationship`, select_one, required): The relationship between you and your emergency contact (e.g., Mother, Father, Brother, Sister, etc.).
* **Consent** (`emergency_contact_consent`, select_one, required): Your consent to participate in the dance class.
* **Medical Release** (`medical_release`, select_one, required): Whether you grant medical release for your participation in the dance class.
* **Waiver Release Date** (`waiver_release_date`, date, optional): The date you wish to waive the waiver.
* **Waiver Expiration Date** (`waiver_expires_date`, date, optional): The date the waiver expires.
* **Class Attended** (`class_attended`, select_multiple, required): The dance class time you will be attending.
* **Payment Type** (`payment_type`, select_one, required): The method of payment (e.g., Pay online, Pay on site).
* **Payment Method** (`payment_method`, select_multiple, required): Whether you will pay online or on site.
* **Notes** (`notes`, text, optional): Any additional comments or information.
* **Signature Date** (`signature_date`, date, optional): The date you sign the waiver.
* **Signature** (`signature`, text, optional): Your signature.
* **Waiver Signed By** (`waiver_signed_by`, text, optional): The name of the person signing the waiver.
* **Waiver Signed On** (`waiver_signed_on`, date, optional): The date the waiver was signed.
