<thinking>
This form is used for dermaplaning, a procedure that involves removing the top layer of skin, typically from the scalp or face. The form is meant to be completed by a patient to provide consent for the procedure and ensure they are aware of the risks and benefits involved.
</thinking>

# Dermaplaning Consent Form - Help Guide

## Purpose
The purpose of this form is to gather informed consent from patients prior to a dermaplaning procedure. It asks for their name, contact information, treatment area, medical history, anesthesia preference, and other relevant details to ensure a smooth and safe procedure.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name as it appears on your official documents (e.g., ID card, driver's license)
2. Provide your contact information, including your phone number and email address
3. Specify the area where you will be undergoing the dermaplaning procedure
4. Take note of any specific areas of concern or additional information regarding the treatment area
5. Choose the type of anesthesia you prefer for the procedure
6. Provide information about your medical history, including any allergies, current medications, previous medical conditions, and surgical history
7. Select the dates and times for the procedure
8. Enter your signature to confirm that you have read and understood the information on this form

## Field-by-Field Explanation

* **patient_name** (`patient_name`, text, required): Enter your name as it appears on your official documents (e.g., ID card, driver's license)
* **patient_contact_info** (`patient_contact_info`, text, optional): Provide your contact information, including your phone number and email address
* **treatment_area** (`treatment_area`, text, optional): Specify the area where you will be undergoing the dermaplaning procedure
* **treatment_area_note** (`treatment_area_note`, note, optional): Take note of any specific areas of concern or additional information regarding the treatment area
* **dermaplaning_procedure** (`dermaplaning_procedure`, text, optional): Briefly describe the dermaplaning procedure you are undergoing
* **anesthesia** (`anesthesia`, select_one, optional): Choose the type of anesthesia you prefer for the procedure (Local, General, or Both)
* **medical_history** (`medical_history`, select_multiple, optional): Provide information about your medical history, including any allergies, current medications, previous medical conditions, and surgical history
* **consent_date** (`consent_date`, date, optional): Enter the date you are providing consent for the procedure
* **consent_time** (`consent_time`, time, optional): Enter the time you are providing consent for the procedure
* **physician_consent** (`physician_consent`, text, optional): Confirm that you have discussed and understood the risks and benefits of the procedure with your physician
* **patient_signature** (`patient_signature`, text, optional): Enter your signature to confirm that you have read and understood the information on this form
