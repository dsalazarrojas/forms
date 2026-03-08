<thinking>
We should only provide this form for patients who have been referred to this hospital. The form is designed to collect informed consent for a tubal ligation procedure. A tubal ligation involves blocking the fallopian tubes to prevent pregnancy, and informed consent is required to ensure patients understand the risks and benefits of the procedure. 
</thinking>

# Tubal Ligation Consent Form - Help Guide
## Purpose
The Tubal Ligation Consent Form is a document that ensures patients understand the risks and benefits of a tubal ligation procedure. This form helps to obtain informed consent from patients before undergoing the procedure.

## How To Complete This Form
To complete this form, please follow these steps:

1. Please fill in your personal details, including your name and date of birth.
2. Provide your medical history, including any allergies or medical conditions you have.
3. Indicate if you have any allergies or take any medications that may affect your ability to undergo the procedure.
4. Provide information about your surgical history and any previous surgeries you have had.
5. Answer questions about anesthesia and who will be administering it.
6. Answer questions about the surgeon and any assistants who will be involved in the procedure.
7. Confirm that you have received and understand the information provided.
8. Sign and date the consent form to confirm your agreement to proceed with the procedure.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Please enter your full name as it appears on your identification documents.
* **Date of Procedure** (`date_of_procedure`, date, required): Please enter the date you are scheduled to undergo the procedure.
* **Time of Procedure** (`time_of_procedure`, time, required): Please enter the time you are scheduled to undergo the procedure.
* **Date of Birth** (`date_of_birth`, text, required): Please enter your date of birth as it appears on your identification documents.
* **Medical History** (`medical_history`, text, required): Please provide a brief summary of your medical history, including any previous surgeries or health conditions.
* **Allergies** (`allergies`, select_multiple, optional): Please indicate if you have any allergies that may affect your ability to undergo the procedure. Select 'Yes' if you have any allergies.
* **Medications** (`medications`, select_multiple, optional): Please indicate if you take any medications that may affect your ability to undergo the procedure. Select 'Yes' if you take any medications.
* **Surgical History** (`surgical_history`, text, required): Please provide information about your surgical history, including any previous surgeries you have had.
* **Anesthesia Information** (`anesthesia_info`, text, required): Please provide information about the anesthesia that will be used during the procedure.
* **Anesthesia Type** (`anesthesia_type`, select_one, required): Please indicate the type of anesthesia that will be used during the procedure. Select 'Yes' if you have chosen an option.
* **Surgeon** (`surgeon`, select_one, required): Please indicate if the surgeon will be administering the procedure. Select 'Yes' if you have chosen an option.
* **Assistant** (`assistant`, select_one, required): Please indicate if an assistant will be administering the procedure. Select 'Yes' if you have chosen an option.
* **Consent Given** (`consent_given`, select_one, required): Please confirm that you have received and understand the information provided. Select 'Yes' if you have received and understand the information.
* **Date of Consent** (`date_consent_given`, date, required): Please enter the date you signed this consent form.
* **Contact Information** (`patient_contact`, text, required): Please provide your contact information, including your address and phone number.
* **Emergency Contact Information** (`emergency_contact`, text, required): Please provide the contact information for your emergency contact, including their name and relationship to you.
* **Relationship** (`emergency_contact_relationship`, select_one, required): Please indicate the relationship between you and your emergency contact. Select 'Yes' if you have a relationship.
* **Address of Emergency Contact** (`emergency_contact_address`, text, required): Please enter the address of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Please enter the phone number of your emergency contact.
* **Emergency Contact Email** (`emergency_contact_email`, text, required): Please enter the email of your emergency contact.
* **Patient Signature** (`patient_signature`, note, required): Please sign below to confirm your agreement to undergo the procedure.
* **Surgeon Signature** (`surgeon_signature`, note, required): Please sign below to confirm that you have discussed the procedure with the patient.
* **Witness Signature** (`witness_signature`, note, required): Please sign below to confirm that you have witnessed the patient's signature.
* **Witness Name** (`witness_name`, text, required): Please enter the name of the witness.
* **Witness Relationship** (`witness_relationship`, select_one, required): Please indicate the relationship between the witness and the patient. Select 'Yes' if you have a relationship.
