# Student Ministry Medical Release Form - Help Guide
## Purpose
The Student Ministry Medical Release Form is used to collect medical information for students participating in the ministry, including their name, contact information for an emergency contact, and any medical conditions or medications they may be taking.

## How To Complete This Form
To complete this form, please follow these steps:

* Fill out the student's name, parent's name, and emergency contact information.
* If applicable, provide any medical conditions that the student may have.
* List any allergies or medications the student may be taking.
* Select the relationship between the emergency contact and the student.
* Enter the contact's phone number and email address (if available).
* Provide the name of the medical facility the student is being treated at (if applicable).

## Field-by-Field Explanation
* **Student Ministry Name** (`student_ministry_name`, text, **required**): Please enter the student's name as it appears on their medical record.
* **Parent Name** (`parent_name`, text, **required: false**): Please enter the name of the parent or guardian of the student.
* **Medical Conditions** (`medical_conditions`, text, **required: false**): If the student has any medical conditions that may affect their participation in the ministry, please describe them here.
* **Allergies** (`allergies`, text, **required: false**): If the student has any allergies or sensitivities, please list them here.
* **Medications** (`medications`, text, **required: false**): If the student is taking any medications, please list them here.
* **Emergency Contact** (`emergency_contact`, text, **required**): Please enter the name of the emergency contact for the student.
* **Relationship** (`relationship`, select_one, **required**): Please select the relationship between the emergency contact and the student (Parent, Guardian, Other, Grandparent).
* **Phone Number** (`phone_number`, text, **required**): Please enter the phone number of the emergency contact.
* **Email Address** (`email_address`, email, **required: false**): If available, please enter the email address of the emergency contact.
* **Medical Facility** (`medical_facility`, text, **required: false**): If the student is being treated at a medical facility, please enter the name of the facility.
* **Physician Name** (`physician_name`, text, **required: false**): If the student is being treated by a physician, please enter their name.
