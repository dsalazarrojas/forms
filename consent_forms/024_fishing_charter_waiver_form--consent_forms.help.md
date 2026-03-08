<thinking>Given the provided YAML fields, I will create a user-facing help guide for the "Fishing Charter Waiver Form". This guide will explain the form's purpose, how to complete it, and provide a field-by-field explanation of each section. After the internal reasoning block, I will output the final help document in Markdown format.

This form is designed for fishing charter operators to collect information from their customers to ensure their safety and well-being during fishing charter activities. The form includes various fields to gather essential details about the customer, such as their contact information, medical conditions, and emergency contact information. The waiver section allows customers to agree to the charter's terms and conditions, and the signature section requires a physical signature from the customer.

## Fishing Charter Waiver Form - Help Guide

## Purpose
The purpose of this form is to collect important information from customers before participating in fishing charter activities. This information helps ensure their safety and well-being during the charter.

## How To Complete This Form

1.  Fill out the form with your accurate and complete information.
2.  Provide your First Name, Last Name, and Email Address.
3.  Enter your contact phone number.
4.  Identify your emergency contact's First Name, Last Name, and contact phone number.
5.  If you have any medical conditions, list them in the "Medical Conditions" field.
6.  If you use any medical devices, list them in the "Medical Device Use" field.
7.  List your medications in the "Medications" field.
8.  If you have any allergies, list them in the "Allergies" field.
9.  Identify your relationship with your emergency contact in the "Emergency Contact Relationship" field.
10. Agree to the charter operator's terms and conditions.
11. If you want to add any other agreed terms, type them in the "Charter Agreed to Terms Other" field.
12. Choose a signature option from the "Waiver Signature" field.
13. Upload a physical signature image in the "Signature Image" field.
14. Select the date of the signature in the "Signature Date" field.
15. If you have any other emergency contact, select "Other" in the "Emergency Contact" field.
16. If your emergency contact relationship is other than listed, type it in the "Emergency Contact Relationship Other" field.
17. Click on "Submit" to complete the form.

## Field-by-Field Explanation

*   **Form Data** (`form_data`, `text`, optional): This field is a text box where you can provide any additional information about your fishing charter experience.
*   **First Name** (`first_name`, `text`, optional): Enter your first name as it appears on your identification.
*   **Last Name** (`last_name`, `text`, optional): Enter your last name as it appears on your identification.
*   **Email** (`email`, `email`, optional): Enter your valid email address.
*   **Phone** (`phone`, `text`, optional): Enter your contact phone number.
*   **Emergency Contact First Name** (`emergency_contact_first_name`, `text`, optional): Enter your emergency contact's first name.
*   **Emergency Contact Last Name** (`emergency_contact_last_name`, `text`, optional): Enter your emergency contact's last name.
*   **Emergency Contact Phone** (`emergency_contact_phone`, `text`, optional): Enter your emergency contact's phone number.
*   **Medical Conditions** (`medical_conditions`, `text`, optional): If you have any medical conditions, list them here.
*   **Medical Device Use** (`medical_device_use`, `text`, optional): If you use any medical devices, list them here.
*   **Medications** (`medications`, `text`, optional): List your medications.
*   **Allergies** (`allergies`, `text`, optional): List any allergies you have.
*   **Emergency Contact Relationship** (`emergency_contact_relationship`, `text`, optional): Identify your relationship with your emergency contact.
*   **Emergency Contact** (`emergency_contact`, `select_multiple`, optional): Select your emergency contact from the list or type "Other" if not listed.
*   **Charter Agreed to Terms** (`charter_agreed_to_terms`, `select_multiple`, optional): Agree to the charter operator's terms and conditions.
*   **Charter Agreed to Terms Other** (`charter_agreed_to_terms_other`, `text`, optional): If you want to add any other agreed terms, type them here.
*   **Charter Agreed to Terms Other Label** (`charter_agreed_to_terms_other_label`, `text`, optional): This field is not used in the form.
*   **Waiver Signature** (`waiver_signature`, `select_one`, optional): Choose your waiver signature option.
*   **Signature Image** (`signature_image`, `date`, optional): Upload a physical signature image.
*   **Date** (`date`, `date`, optional): Select the date of the signature.
*   **Form Submit** (`form_submit`, `select_one`, optional): Click on "Submit" to complete the form.
*   **Signature Date** (`signature_date`, `date`, optional): Select the date of the signature.
*   **Emergency Contact Relationship Other** (`emergency_contact_relationship_other`, `text`, optional): If your emergency contact relationship is other than listed, type it here.
*   **Emergency Contact Other** (`emergency_contact`, `select_multiple`, optional): Select "Other" in the emergency contact field.
*   **Emergency Contact Relationship Other** (`emergency_contact_relationship_other`, `text`, optional): If your emergency contact relationship is other than listed, type it here.

Note: The fields with `required` as `false` are optional and not required for the form submission.
