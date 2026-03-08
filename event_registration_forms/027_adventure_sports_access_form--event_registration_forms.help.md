<thinking>...</thinking>

# Adventure Sports Access Form - Help Guide

## Purpose
This form is designed to collect participant information and preferences for adventure sports activities. It includes sections for participant details, emergency contact, activity selection, and health and medical information. The form is required to be completed for all participants.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your participant information, including your full name, date of birth, email address, phone number, and residential address.
2. Provide details about your emergency contact, including their name, relationship to you, and phone number.
3. Select the adventure sport activity you are interested in participating in.
4. Choose your experience level with the selected activity.
5. Provide the date you would like to participate in the activity.
6. If you have any medical conditions that may affect your participation, please list them.
7. If you are currently taking any medications, select 'Yes' or 'No'.
8. Read and accept the consent agreement.
9. Finally, acknowledge the terms and conditions of the activity.

## Field-by-Field Explanation

* **Full Name** (`participant_full_name`, `text`, required): Please enter your legal full name.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format `mm/dd/yyyy`.
* **Gender** (`gender`, `select_one`, required): Select your gender (Male, Female, Non-binary, or Prefer not to say).
* **Email Address** (`email_address`, `email`, required): Enter a valid email address for communication purposes.
* **Phone Number** (`phone_number`, `text`, required): Enter your contact phone number.
* **Address** (`address`, `text`, required): Enter your current residential address.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, required): Enter the name of your emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, `text`, required): Describe your relationship to your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, required): Enter the phone number of your emergency contact.
* **Adventure Sport Type** (`adventure_sport_type`, `select_one`, required): Select the adventure sport activity you are interested in (e.g., Rock Climbing, Whitewater Rafting, etc.).
* **Experience Level** (`experience_level`, `select_one`, required): Choose your experience level with the selected activity (Beginner, Intermediate, Advanced, Expert, or First Time).
* **Activity Date** (`activity_date`, `date`, required): Select the date you would like to participate in the activity.
* **Medical Conditions** (`medical_conditions`, `select_multiple`, required): If you have any medical conditions that may affect participation, select them from the list.
* **Medications Currently Taking** (`medications_currently_taking`, `select_one`, required): Select 'Yes' or 'No' if you are currently taking any medications.
* **Consent Agreement** (`consent_agreement`, `select_one`, required): Select 'Yes' to indicate your consent to participate in the selected activity.
* **Terms Acknowledgment** (`terms_acknowledgment`, `select_one`, required): Select 'Yes' to acknowledge and agree to the terms and conditions of the activity.
