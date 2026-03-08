<thinking>...</thinking>

# iv_access_assessment_form - Help Guide
## Purpose
The iv_access_assessment_form is designed to collect information for assessing patient's IV access experience. This form will be used to track and analyze patient's responses to various questions related to IV access, including medical history, pain rating, treatment received, medication administration, and patient outcome.

## How To Complete This Form
1. Select the site location from the provided list to indicate where the IV access was performed.
2. Provide a brief medical history to help the healthcare team understand the patient's medical background.
3. Rate the patient's pain level from 1-3, where 1 is low and 3 is high.
4. Indicate the location of the patient's pain.
5. Select the time when the patient's pain began.
6. Choose the treatments received by the patient.
7. Enter any medications administered to the patient.
8. Rate the effectiveness of the medication given (if any).
9. Select the patient's vital signs (e.g., blood pressure, heart rate, etc.).
10. Choose the patient's outcome (e.g., improvement, worsening, etc.).
11. (Optional) Enter additional medication administered and rate its effectiveness.
12. (Optional) Select the patient's vital signs for the additional medication.
13. (Optional) Choose the patient's outcome for the additional medication.

## Field-by-Field Explanation

* **Site Location**: (`site_location`, text, required)
  Enter the location where the IV access was performed.
* **Medical History**: (`medical_history`, text, required)
  Provide a brief summary of the patient's medical history.
* **Pain Rating**: (`pain_rating`, number, required)
  Rate the patient's pain level from 1 (low) to 3 (high).
* **Pain Location**: (`pain_location`, text, required)
  Indicate the location of the patient's pain.
* **Time Pain Began**: (`time_pain_began`, time, required)
  Select the time when the patient's pain began.
* **Treatments**: (`treatment`, select multiple, required)
  Choose any treatments received by the patient.
* **Medication Administered**: (`medication_administered`, text, required)
  Enter any medications administered to the patient.
* **Medication Effectiveness**: (`medication_effectiveness`, number, required)
  Rate the effectiveness of the medication given (if any).
* **Vital Signs**: (`vital_signs`, select multiple, required)
  Select the patient's vital signs (e.g., blood pressure, heart rate, etc.).
* **Patient Outcome**: (`patient_outcome`, select one, required)
  Choose the patient's outcome (e.g., improvement, worsening, etc.).
* **Additional Medication Administered**: (`medication_administered_1`, text, optional)
  Enter any additional medications administered to the patient.
* **Additional Medication Effectiveness**: (`medication_effectiveness_1`, number, optional)
  Rate the effectiveness of the additional medication given.
* **Additional Vital Signs**: (`vital_signs_1`, select multiple, optional)
  Select the patient's vital signs for the additional medication.
* **Additional Patient Outcome**: (`patient_outcome_1`, select one, optional)
  Choose the patient's outcome for the additional medication.
