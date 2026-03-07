<thinking>...</thinking>

# sports_event_participation_release_form - Help Guide
## Purpose

The "sports_event_participation_release_form" is a form designed to capture information from participants in a sports event. This form is used to gather essential details about the participant, including their name, contact information, medical history, and emergency contact details. The form's primary purpose is to ensure that participants are aware of and acknowledge any risks associated with the event and to provide critical contact information in case of an emergency.

## How To Complete This Form

To complete this form, follow these steps:

1. **Enter your name**: Type your full name in the "participant_name" field.
2. **Provide contact information**: Enter your email address and phone number in the "participant_phone" and "participant_email" fields, respectively.
3. **Enter date of birth**: Enter your date of birth in the "participant_dob" field in the format MM/DD/YY.
4. **Enter address**: Enter your address in the "participant_address" field.
5. **Enter medical information**: If you have any medical conditions that may affect your participation in the event, enter that information in the "participant_medical" field.
6. **Acknowledge risks**: Read and acknowledge any risks associated with the event by checking the box next to "risk_acknowledgement".
7. **Select emergency contact**: Choose how you are related to the emergency contact person from the dropdown menu next to "emergency_contact_relationship".
8. **Enter emergency contact information**: Enter the name, address, phone number, and email of the emergency contact person in the "emergency_contact_info" field.

## Field-by-Field Explanation

* **participant_name** (`participant_name`, text, required: false): Enter your full name.
* **parent_or_guardian** (`parent_or_guardian`, text, required: false): Enter the name of your parent or guardian if you are a minor.
* **emergency_contact** (`emergency_contact`, text, required: false): Enter the name of the emergency contact person.
* **date_of_birth** (`participant_dob`, date, required: false): Enter your date of birth in MM/DD/YY format.
* **participant_address** (`participant_address`, text, required: false): Enter your address.
* **participant_email** (`participant_email`, email, required: false): Enter your email address.
* **participant_phone** (`participant_phone`, text, required: false): Enter your phone number.
* **participant_medical** (`participant_medical`, text, required: false): If you have any medical conditions, enter them here.
* **risk_acknowledgement** (`risk_acknowledgement`, note, required: false): Check the box to acknowledge any risks associated with the event.
* **emergency_contact_relationship** (`emergency_contact_relationship`, select_one, required: true): Choose how you are related to the emergency contact person.
* **emergency_contact_info** (`emergency_contact_info`, text, required: false): Enter the emergency contact person's name, address, phone number, and email.
