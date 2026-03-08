# Medical Waiver Form - Help Guide
## Purpose
This form is designed to collect medical-related information from patients or clients for documentation and tracking purposes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your First Name and Last Name in the respective fields.
2. Provide the Medical Activity or reason for the medical procedure.
3. Confirm your understanding by checking the "I Acknowledge" box.
4. Sign the form to indicate your acknowledgement.
5. Provide the emergency contact's First Name and Last Name (if applicable).
6. Enter the Date Of Birth, Phone Number (if applicable), and Email (if applicable) of the emergency contact.
7. Identify the Relationship To Emergency Contact.
8. Select the Doctor Supervising from the list or enter "Other" if it's not listed.
9. Enter the Doctor Supervising's name in the text field for "Doctor Supervising Other" if you selected "Other".
10. Provide the Medical Condition being treated.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name as it is written on your identification documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it is written on your identification documents.
* **Medical Activity** (`medical_activity`, text, required): Describe the medical procedure or reason for the medical treatment.
* **I Acknowledge** (`acknowledge`, text, required): Check this box to confirm that you have read and understand the form.
* **Signature** (`signature`, text, required): Sign this form to acknowledge that you have read and understand the form.
* **Emergency Contact First Name** (`emergency_contact_first_name`, text, optional): If you have an emergency contact, enter their first name.
* **Emergency Contact Last Name** (`emergency_contact_last_name`, text, optional): If you have an emergency contact, enter their last name.
* **Address** (`address`, text, required): Enter your address or the address of the location where the medical procedure is being performed.
* **Date Of Birth** (`date_of_birth`, date, required): Enter your date of birth in the standard date format (e.g., 01/01/1990).
* **Phone Number** (`phone_number`, text, optional): If you have a phone number, enter it for emergency contact purposes.
* **Email** (`email`, email, optional): If you have an email address, enter it for emergency contact purposes.
* **Relationship To Emergency Contact** (`emergency_contact_relationship`, text, optional): Identify your relationship to the emergency contact (e.g., spouse, parent, etc.).
* **Emergency Contact Phone** (`emergency_contact_phone`, text, optional): Enter the phone number of the emergency contact.
* **Emergency Contact Email** (`emergency_contact_email`, email, optional): Enter the email of the emergency contact.
* **Medical Supervision** (`medical_supervision`, select_one, required): Identify the level of medical supervision required for the patient's condition.
* **Medical Procedure** (`medical_procedure`, text, required): Describe the specific medical procedure or treatment being performed.
* **Medical Condition** (`medical_condition`, text, required): Describe the medical condition being treated.
* **Doctor Supervising** (`doctor_supervising`, select_multiple, required): Identify the doctor(s) overseeing the patient's care.
* **Doctor Supervising Other** (`doctor_supervising_other`, text, required): If "Other" is selected for Doctor Supervising, enter the doctor's name here.
* **Date** (`date`, date, optional): Enter the date of the medical procedure (if applicable).
* **Time** (`time`, time, optional): Enter the time of the medical procedure (if applicable).
* **Doctor Name** (`doctor_name`, text, required): Enter the doctor's name providing the medical care.
* **Doctor Contact Phone** (`doctor_contact_phone`, text, required): Enter the doctor's phone number.
* **Medical Notes** (`medical_notes`, note, required): Enter any additional medical notes or observations.
