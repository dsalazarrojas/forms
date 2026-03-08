# Bariatric Surgery Discharge Form - Help Guide

## Purpose
This form is for the discharge of patients who have undergone bariatric surgery. It ensures that patients understand their post-surgery instructions and medications, and that they are aware of the warning signs to contact their surgeon immediately if any issues arise.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's identification and demographic information (patient name, date of birth, and discharge date).
2. Select the procedure performed (e.g., Gastric Bypass (Roux-en-Y), Vertical Sleeve Gastrectomy, etc.).
3. Enter the attending surgeon's name.
4. Specify the patient's post-operative dietary stage (e.g., Stage 1 - Clear Liquids Only, Stage 2 - Full Liquids (Protein Shakes), etc.).
5. Enter the minimum daily hydration and protein goals.
6. Specify any medications or pain management plans prescribed for the patient.
7. Enter the patient's vitamin and mineral supplementation regimen.
8. Check the warning signs that require immediate contact with the surgeon.
9. Enter the date and time of the first follow-up appointment.
10. Sign the patient's acknowledgment of the instructions and medications.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, text, required): Enter the patient's full name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in the format MM/DD/YYYY.
* **Discharge Date** (`discharge_date`, date, required): Enter the date of discharge from the hospital.
* **Procedure Performed** (`procedure_type`, select_one, required): Select the type of bariatric surgery performed (e.g., Gastric Bypass (Roux-en-Y)).
* **Attending Surgeon** (`surgeon_name`, text, required): Enter the name of the attending surgeon.
* **Current Dietary Stage** (`current_diet_stage`, select_one, required): Select the patient's current post-operative dietary stage (e.g., Stage 1 - Clear Liquids Only).
* **Minimum Daily Hydration Goal** (`hydration_goal`, number, required): Enter the minimum daily hydration goal in ounces.
* **Minimum Daily Protein Goal** (`protein_goal`, number, required): Enter the minimum daily protein goal in grams.
* **Prescribed Pain Management** (`pain_medication_plan`, text, required): Specify the prescribed pain management medication and dosage.
* **Vitamin and Mineral Supplementation** (`vitamin_regimen`, text, required): Enter the type and frequency of vitamin and mineral supplements.
* **Warning Signs - Contact Your Surgeon Immediately** (`warning_signs`, select_multiple, required): Check all warning signs that require immediate contact with the surgeon (e.g., fever over 101.5 F, severe abdominal pain or swelling, etc.).
* **First Post-Op Appointment Date** (`first_follow_up`, date, required): Enter the date of the first follow-up appointment.
* **First Post-Op Appointment Time** (`first_follow_up_time`, time, required): Enter the time of the first follow-up appointment.
* **Discharge Nurse Name** (`discharge_nurse_name`, text, required): Enter the name of the discharge nurse.
* **Patient Acknowledgment of Instructions and Medications** (`patient_acknowledgment`, select_one, required): Select "I Agree and Understand" to confirm receipt and understanding of the instructions and medications.

## Tips
- Make sure to carefully review each field before submitting the form.
- Double-check the patient's identification and demographic information.
- Ensure that you have entered the correct procedure performed and attending surgeon's name.
- Be aware of the warning signs that require immediate contact with the surgeon.
- Confirm the patient's understanding and agreement with the instructions and medications.
