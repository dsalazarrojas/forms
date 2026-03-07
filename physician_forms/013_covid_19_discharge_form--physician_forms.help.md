<thinking>
The goal of the COVID-19 Discharge Form is to collect essential information about a patient's hospitalization and discharge. This form aims to ensure that all necessary details are documented for accurate and efficient patient care. Before starting to fill out the form, make sure you are authorized to access the patient's medical records and that the information you provide is accurate and up-to-date. If you are not sure about any information or have concerns, consult with the patient's attending physician or healthcare team. Ensure that you have all necessary permissions and approvals to fill out this form correctly.
</thinking>

# COVID 19 Discharge Form - Help Guide
## Purpose
The COVID-19 Discharge Form is a crucial document that helps healthcare providers document the patient's status, treatments, and post-discharge instructions. It ensures accurate and efficient patient care by capturing essential information.

## How To Complete This Form
1. Start by filling out the patient's personal information: 
    * Patient Full Name
    * Medical Record Number
    * Date of Birth
2. Record the admission and discharge details: 
    * Hospital Admission Date
    * Discharge Date
    * Length of Stay (Days)
3. Specify the attending physician's name:
4. Indicate if the patient was admitted to the ICU:
    * If yes, select 'True'
5. Specify if ventilator support was provided:
    * If yes, select 'True'
6. Specify the patient's clinical status at discharge:
    * Improved
    * Stable
    * Unchanged
    * Deteriorated
7. Specify the patient's oxygen requirements at discharge:
    * No Oxygen
    * Supplemental Oxygen
    * Continuous Oxygen
8. List the medications provided at discharge:
9. Indicate if a follow-up appointment is scheduled:
    * If yes, select 'True'
10. Provide the date of the scheduled follow-up appointment (if applicable)
11. If necessary, add any activity restrictions or isolation periods

## Field-by-Field Explanation
* **Patient Full Name** (patient_name, text, required/true): Enter the patient's full name accurately.
* **Medical Record Number** (medical_record_number, text, required/true): Enter the patient's medical record number.
* **Date of Birth** (date_of_birth, date, required/true): Enter the patient's date of birth in YYYY-MM-DD format.
* **Hospital Admission Date** (admission_date, date, required/true): Enter the date the patient was admitted to the hospital.
* **Discharge Date** (discharge_date, date, required/true): Enter the date the patient was discharged.
* **Length of Stay (Days)** (length_of_stay, number, required/true): Enter the number of days the patient was hospitalized.
* **Attending Physician Name** (attending_physician, text, required/true): Enter the name of the attending physician.
* **ICU Admission Required** (icu_admission, select_one, required/true): If the patient was admitted to the ICU, select 'True'.
* **Ventilator Support Provided** (ventilator_support, select_one, required/true): If ventilator support was provided, select 'True'.
* **Clinical Status at Discharge** (clinical_status, select_one, required/true): Choose the patient's clinical status at discharge: Improved, Stable, Unchanged, or Deteriorated.
* **Oxygen Requirement at Discharge** (oxygen_requirement, select_one, required/true): Choose the patient's oxygen requirement at discharge: No Oxygen, Supplemental Oxygen, or Continuous Oxygen.
* **Medications Provided** (medications_provided, text, required/true): List all medications provided at discharge.
* **Follow-up Care** (follow_up_header, note, required/true): This field is for notes on follow-up care.
* **Follow-up Appointment Scheduled** (follow_up_required, select_one, required/true): If a follow-up appointment is scheduled, select 'True'.
* **Follow-up Appointment Date** (follow_up_date, date, false/true): Enter the date of the scheduled follow-up appointment (if applicable).
* **Activity Restrictions** (restrictions, text, false/true): If necessary, provide any activity restrictions or isolation periods.
* **Isolation Period** (isolation_period, number, false/true): Enter the recommended isolation period.
* **Warning signs to watch for** (warning_signs, select_multiple, required/true): Choose any warning signs or symptoms the patient should watch for: Fever, Difficulty Breathing, Chest Pain, Confusion, Severe Weakness, or Other.
