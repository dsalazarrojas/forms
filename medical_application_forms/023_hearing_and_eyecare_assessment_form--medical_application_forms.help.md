# Hearing And Eyecare Assessment Form - Help Guide
## Purpose
The Hearing and Eyecare Assessment Form is designed to collect medical history information from patients regarding their hearing and eye care.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's name in the "Patient Name" field.
2. Enter the patient's date of birth in the "Date of Birth" field in YYYY-MM-DD format.
3. Enter the patient's phone number in the "Patient Phone" field, using a 10 digit US phone number format.
4. Enter the patient's email address in the "Patient Email" field.
5. In the "Medical History" field, please provide a brief description of the patient's medical history.
6. In the "Patient Eyecare Assessment" field, select one of the provided options that best describes the patient's current hearing and eye care status.
7. If you selected "Hearing Loss" in the previous field, select all applicable options for "Hearing Loss" in the "Hearing Loss" field.
8. If you selected "Visual Disturbance" in the previous field, select all applicable options for "Visual Disturbance" in the "Visual Disturbance" field.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in YYYY-MM-DD format.
* **Patient Phone** (`patient_phone`, text, required): Enter a 10 digit US phone number.
* **Patient Email** (`patient_email`, email, required): Enter the patient's email address.
* **Medical History** (`medical_history`, note, required): Provide a brief description of the patient's medical history.
* **Patient Eyecare Assessment** (`patient_eyecare_assessment`, select_one, required): Select one of the provided options that best describes the patient's current hearing and eye care status.
* **Hearing Loss** (`hearing_loss`, select_multiple, optional): Select all applicable options if you selected "Hearing Loss" in the previous field.
* **Visual Disturbance** (`visual_disturbance`, select_multiple, optional): Select all applicable options if you selected "Visual Disturbance" in the previous field.

## Tips
* Please ensure that you are filling out this form for the correct purpose and not duplicating efforts.
* If you are unsure about any field, ask a healthcare professional for guidance.
* Provide as much detail as possible in the "Medical History" field.
