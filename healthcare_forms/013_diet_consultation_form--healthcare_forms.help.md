# Diet Consultation Form - Help Guide

## Purpose
The purpose of this form is to collect information from patients for diet consultation purposes. It is designed to collect relevant details about the patient's contact information, medical history, and emergency contacts in case of an unexpected event.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your contact information, including your phone number and email.
2. Provide details about your emergency contact, including their name, number, and relationship.
3. Indicate whether you would like to be contacted by phone in case of an emergency.
4. If you have any medical conditions or allergies, please list them.
5. Mention any medications you are currently taking.
6. Answer questions about your medical history.
7. Enter your height, weight, and age.

## Field-by-Field Explanation

* **Contact Information** (`contact_information`, `text`, required/optional): Please fill in your contact information, including your phone number and email address.
* **Emergency Contact** (`emergency_contact`, `text`, required/optional): Provide details about your emergency contact, including their name, number, and relationship.
* **Diet Goals** (`diet_goals`, `text`, required/optional): Describe your dietary goals and objectives.
* **Nutrition Information** (`nutrition_info`, `text`, required/optional): Share any relevant nutrition-related information that may help us better understand your needs.
* **Contact Preferences** (`contact_preferences`, `text`, required/optional): Specify how you would like to be contacted (e.g., phone call, email, text).
* **Contact Method** (`contactMethod`, `text`, required/optional): Choose how you would like to be contacted in case of an emergency (e.g., phone, email, text).
* **Emergency Information** (`emergencyInfo`, `text`, required/optional): If you have any urgent medical information or instructions, please provide it here.
* **Allergies** (`allergies`, `text`, required/optional): List any allergies or medical conditions you are concerned about.
* **Medical Conditions** (`medical_conditions`, `text`, required/optional): Mention any medical conditions you are dealing with.
* **Medications** (`medications`, `text`, required/optional): Share any medications you are currently taking.
* **Medical History** (`medical_history`, `text`, required/optional): Describe your medical history, including any relevant information.
* **Height** (`height`, `number`, required/optional): Enter your height in inches or centimeters.
* **Weight** (`weight`, `number`, required/optional): Enter your weight in pounds or kilograms.
* **Age** (`age`, `number`, required/optional): Enter your age.
* **Phone Preferences** (`contact_preference_phone`, `text`, required/optional): Specify your preference for phone calls (e.g., yes, no).
* **Email** (`email`, `email`, required/optional): Provide your email address.
* **Emergency Contact Method** (`emergency_preference_contact_method`, `select_one`, required/optional): Choose whether to have emergency contact (yes, no).
* **Emergency Phone** (`emergency_preference_phone`, `text`, required/optional): Enter the phone number of your emergency contact.
* **Medical Emergency Contact Name** (`medical_emergency_contact_name`, `text`, required/optional): Enter the name of your emergency contact.
* **Medical Emergency Contact Number** (`medical_emergency_contact_number`, `text`, required/optional): Enter the phone number of your emergency contact.
* **Relationship** (`medical_emergency_contact_relationship`, `text`, required/optional): Describe your relationship with the emergency contact.
* **Emergency Contact Number Type** (`medical_emergency_contact_number_type`, `select_one`, required/optional): Specify the type of emergency contact number (e.g., yes, no).
* **Note for Emergency Contact** (`medical_emergency_contact_note`, `text`, required/optional): Enter a note for the emergency contact.
* **Review** (`review`, `note`, required/optional): Add any additional comments or information about your diet consultation.

Note: The fields marked with `required/optional` are optional unless marked as required. You can fill them according to your needs and preferences.
