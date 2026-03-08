# Yoga Informed Consent Form - Help Guide
## Purpose

This form is used to gather participant information and ensure they are aware of the risks associated with yoga practice. It is used to collect participant's contact details, medical conditions, allergies, and other relevant health-related data. This information will be used by the yoga instructor or studio to provide a safe and healthy environment for practice.

## How To Complete This Form

1. Read the informed consent section carefully and sign it if you are aware of the risks associated with yoga practice.
2. Fill in your participant name and contact information.
3. Provide your emergency contact name, relationship, and any relevant details.
4. Answer questions about your medical conditions, medications, and allergies.
5. Select the type of yoga class you are interested in (Beginner, Intermediate, Advanced).
6. Provide a brief description of the class you are interested in.
7. Choose the frequency of your desired class (Daily, Weekly, Monthly).
8. Choose the level of your desired class (Beginner, Intermediate, Advanced).
9. Provide any additional details about your class level and preferences.
10. Confirm your participant consent and agreement with the participant consent question.
11. Describe your current yoga practice and any plans for emergencies.
12. Enter the date and time of your desired class.
13. Enter the location of your desired class.
14. Enter the name of the yoga instructor leading the class.
15. Enter any additional details about your class preferences.

## Field-by-Field Explanation

* **Participant Name** (`participant_name`, text, required): Enter your name as it appears on your government-issued ID or passport.
* **Contact Information** (`contact_information`, text, required): Enter your email address, phone number, or any other contact information you are comfortable sharing.
* **Emergency Contact** (`emergency_contact`, text, optional): Enter the name and relationship of an emergency contact person.
* **Medical Conditions** (`medical_conditions`, text, required): List any medical conditions that may affect your practice.
* **Medications** (`medication`, text, required): List any medications you are currently taking.
* **Allergies** (`allergies`, text, required): List any allergies you have.
* **Medical History** (`medical_history`, text, required): List any relevant medical history.
* **Informed Consent** (`informed_consent`, note, required): Read and sign this section if you are aware of the risks of yoga practice.
* **Participant Signature** (`participant_signature`, text, required): Sign this section to confirm your informed consent.
* **Date** (`date`, date, required): Enter the date you are submitting this form.
* **Time** (`time`, time, required): Enter the time you are submitting this form.
* **Location** (`location`, text, required): Enter the location of your desired class.
* **Yoga Instructor** (`yoga_instructor`, text, required): Enter the name of the yoga instructor leading the class.
* **Class Type** (`class_type`, select_one, required): Choose the type of yoga class you are interested in (Beginner, Intermediate, Advanced).
* **Class Description** (`class_description`, text, required): Briefly describe the type of class you are interested in.
* **Class Duration** (`class_duration`, number, required): Enter the duration of the class in minutes or hours.
* **Class Frequency** (`class_frequency`, select_multiple, required): Choose the frequency of your desired class (Daily, Weekly, Monthly).
* **Class Level** (`class_level`, select_one, required): Choose the level of your desired class (Beginner, Intermediate, Advanced).
* **Class Level Details** (`class_level_details`, text, required): Provide any additional details about your class level and preferences.
* **Participant Consent** (`participant_consent`, select_one, required): Confirm your awareness of the risks of yoga practice.
* **Participant Agreement** (`participant_agreement`, text, required): Confirm your agreement with the participant consent question.
* **Yoga Practice** (`yoga_practice`, text, required): Describe your current yoga practice and any plans for emergencies.
* **Emergency Plan** (`emergency_plan`, text, required): Enter any emergency contact information or plans.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of your emergency contact person.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, text, required): Describe your relationship with your emergency contact person.

Please note that this guide is based on the provided YAML fields and the explanations are best-effort interpretations. The actual form fields and their explanations may need to be adjusted based on the specific business logic and requirements of your organization.
