# Alveoloplasty Consent Form - Help Guide

## Purpose
The Alveoloplasty Consent Form is a medical consent form used to obtain a patient's agreement to undergo an alveoloplasty procedure. This form ensures that the patient understands the risks, benefits, and alternatives associated with the procedure, and provides a record of their informed consent.

## How To Complete This Form

1. **Patient Information**: Fill in the patient's personal details, including their first and last name, date of birth, age, and contact information.
2. **Procedure Information**: Select the procedure name and description, as well as the location of the procedure (surgical site).
3. **Risks and Complications**: List the risks and complications associated with the procedure that have been discussed with the patient.
4. **Anesthesia**: Select the type of anesthesia to be used, and confirm that the risks have been discussed with the patient.
5. **Alternatives**: Select any alternatives to the procedure that were discussed with the patient.
6. **Consent Statement**: Choose one of the provided consent options.
7. **Signatures**: Complete the patient and witness signature sections.
8. **Post-Operative Instructions**: Confirm that the patient will receive post-operative care instructions, and select the option to schedule a follow-up appointment.

## Field-by-Field Explanation

### Patient Information

* **Patient First Name** (`patient_first_name`, text, required): Enter the patient's first name.
* **Patient Last Name** (`patient_last_name`, text, required): Enter the patient's last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in MM/DD/YYYY format.
* **Age** (`age`, number, required): Enter the patient's age, must be 18 or older.
* **Gender** (`gender`, select_one, optional): Select the patient's gender.
* **Patient ID Number** (`patient_id`, text, optional): Enter the patient's medical record number.
* **Street Address** (`street_address`, text, required): Enter the patient's street address.
* **City** (`city`, text, required): Enter the city where the patient resides.
* **State** (`state`, text, required): Enter the state where the patient resides.
* **ZIP Code** (`zip_code`, text, required): Enter the patient's ZIP code.
* **Home Phone Number** (`phone_home`, text, required): Enter the patient's home phone number.
* **Mobile Phone Number** (`phone_mobile`, text, required): Enter the patient's mobile phone number.
* **Email Address** (`email`, email, required): Enter the patient's email address.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of the emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of the emergency contact person.
* **Relationship to Patient** (`emergency_contact_relationship`, text, required): Select the relationship to the patient (e.g., spouse, parent, etc.).

### Contact Information

* **Street Address** (`street_address`, text, required): Enter the emergency contact's street address.
* **City** (`city`, text, required): Enter the city where the emergency contact resides.
* **State** (`state`, text, required): Enter the state where the emergency contact resides.
* **ZIP Code** (`zip_code`, text, required): Enter the emergency contact's ZIP code.
* **Phone** (`phone`, text, required): Enter the emergency contact's phone number.
* **Email Address** (`email`, email, required): Enter the emergency contact's email address.

### Procedure Information

* **Procedure Name** (`procedure_name`, text, required): Select the name of the procedure to be performed (Alveoloplasty).
* **Procedure Description** (`procedure_description`, note, optional): Enter the description of the procedure (Surgical reshaping or smoothing of the alveolar bone).
* **Surgical Site** (`procedure_site`, select_one, required): Select the location of the procedure.
* **Specific Site Details** (`procedure_site_detail`, text, optional): Enter any specific details about the procedure site.
* **Procedure Date** (`procedure_date`, date, optional): Enter the scheduled procedure date.

### Risks and Complications

* **Risks Acknowledged** (`risks_acknowledged`, select_multiple, required): Select all risks and complications that have been discussed with the patient.
* **Risks** (`risks`, select_multiple, required): Select all risks and complications that apply.

### Anesthesia

* **Type of Anesthesia** (`anesthesia_type`, select_one, required): Select the type of anesthesia to be used.
* **Anesthesia Risks Discussed** (`anesthesia_risks_discussed`, select_one, required): Confirm that the risks of anesthesia have been discussed with the patient.

### Alternatives

* **Treatment Alternatives** (`alternatives_discussed`, select_multiple, required): Select all alternatives to the procedure that were discussed with the patient.

### Consent Statement

* **Consent Declaration** (`consent_statement`, select_one, required): Choose one of the provided consent options.

### Signatures

* **Patient Signature** (`patient_signature`, text, required): Complete the patient signature section.
* **Witness Signature** (`witness_signature`, text, required): Complete the witness signature section.
* **Surgeon Signature** (`surgeon_signature`, text, required): Complete the surgeon signature section.

### Post-Operative Instructions

* **Post-Operative Instructions Acknowledgment** (`post_op_instructions`, select_one, required): Confirm that the patient will receive post-operative care instructions.
* **Follow-up Appointment Scheduled** (`follow_up_appointment`, select_one, optional): Confirm that a follow-up appointment has been scheduled.
* **Follow-up Appointment Date** (`follow_up_date`, date, optional): Enter the date of the follow-up appointment.

**Tips:**

* Ensure that all required fields are completed accurately and thoroughly.
* Review the form carefully before signing to understand the patient's understanding and agreement to the procedure.
* Store the completed form securely in the patient's medical records.
