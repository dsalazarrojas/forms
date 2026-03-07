<thinking>
To confirm that the form purpose and structure match the requirements, let's review the provided YAML. The form is for a "Rock Climbing Waiver Form". The purpose of this form is likely to gather essential information from participants before they begin climbing activities, such as emergency contacts and contact information.

The form appears to have a mix of contact information fields (First Name, Last Name, E Mail, Phone, Address), participant and emergency contact information (Emergency Contact First Name, Emergency Contact Last Name, Emergency Contact Phone, Emergency Contact E Mail), and waiver-related fields (Relationship, Relationship Other, Participant Signature, Guardian Signature, Emergency Contact Signature).

Upon reviewing the form, it seems that there is some redundancy in the relationship fields, which might be a result of the select_one type being used incorrectly in some cases. However, without further instructions or business logic, this will be taken as given.

The required fields for the form are likely the participant's contact information and their relationship with the emergency contact.

For the sake of clarity, the fields will be grouped into the following sections as per the requirements:

## Purpose
The purpose of this Rock Climbing Waiver Form is to gather contact information, emergency contact details, and obtain signatures from participants before allowing them to engage in climbing activities.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Provide your personal contact information, including your First Name and Last Name.
2. Enter your E Mail address.
3. Enter your Phone number.
4. Provide your Date of Birth.
5. If applicable, enter your emergency contact's First Name, Last Name, Phone number, E Mail, and Address.
6. Specify the relationship between you and your emergency contact (Parent, Guardian, or Other).
7. If the relationship is Other, provide a brief description of the relationship.
8. If applicable, sign the Participant Signature field.
9. If you are a guardian, sign the Guardian Signature field.
10. If you are an emergency contact, sign the Emergency Contact Signature field.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name as it appears on your government-issued ID.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your government-issued ID.
* **E Mail** (`email`, email, required): Enter your E Mail address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in YYYY-MM-DD format.
* **Emergency Contact First Name** (`emergency_contact_first_name`, text, not required): Enter the emergency contact's first name.
* **Emergency Contact Last Name** (`emergency_contact_last_name`, text, not required): Enter the emergency contact's last name.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, not required): Enter the emergency contact's phone number.
* **Emergency Contact E Mail** (`emergency_contact_email`, email, not required): Enter the emergency contact's E Mail address.
* **Address** (`address`, text, not required): Enter your address for contact purposes.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, select_one, not required): Select how you are related to your emergency contact (Parent, Guardian, or Other).
* **Relationship (Other)** (`emergency_contact_relationship_other`, text, not required): If you selected Other, provide a brief description of the relationship.
* **Participant Signature** (`participant_signature`, text, required): Sign this waiver form to confirm your understanding and agreement to participate.
* **Guardian Signature** (`guardian_signature`, text, not required): If you are a guardian, sign this field to confirm your agreement to participate.
* **Emergency Contact Signature** (`emergency_contact_signature`, text, not required): If you are an emergency contact, sign this field to confirm your understanding and agreement to participate.

</thinking>

# Rock Climbing Waiver Form - Help Guide
## Purpose
The purpose of this Rock Climbing Waiver Form is to gather contact information, emergency contact details, and obtain signatures from participants before allowing them to engage in climbing activities.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Provide your personal contact information, including your First Name and Last Name.
2. Enter your E Mail address.
3. Enter your Phone number.
4. Provide your Date of Birth.
5. If applicable, enter your emergency contact's First Name, Last Name, Phone number, E Mail, and Address.
6. Specify the relationship between you and your emergency contact (Parent, Guardian, or Other).
7. If the relationship is Other, provide a brief description of the relationship.
8. If applicable, sign the Participant Signature field.
9. If you are a guardian, sign the Guardian Signature field.
10. If you are an emergency contact, sign the Emergency Contact Signature field.

## Field-by-Field Explanation

* **First Name** (text): Enter your first name as it appears on your government-issued ID.
* **Last Name** (text): Enter your last name as it appears on your government-issued ID.
* **E Mail** (email): Enter your E Mail address.
* **Phone** (text): Enter your phone number.
* **Date of Birth** (date): Enter your date of birth in YYYY-MM-DD format.
* **Emergency Contact First Name** (text): Enter the emergency contact's first name.
* **Emergency Contact Last Name** (text): Enter the emergency contact's last name.
* **Emergency Contact Phone** (text): Enter the emergency contact's phone number.
* **Emergency Contact E Mail** (email): Enter the emergency contact's E Mail address.
* **Address** (text): Enter your address for contact purposes.
* **Emergency Contact Relationship** (select_one): Select how you are related to your emergency contact (Parent, Guardian, or Other).
* **Relationship (Other)** (text): If you selected Other, provide a brief description of the relationship.
* **Participant Signature** (text): Sign this waiver form to confirm your understanding and agreement to participate.
* **Guardian Signature** (text): If you are a guardian, sign this field to confirm your agreement to participate.
* **Emergency Contact Signature** (text): If you are an emergency contact, sign this field to confirm your understanding and agreement to participate.
