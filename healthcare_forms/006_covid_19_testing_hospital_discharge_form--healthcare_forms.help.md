# COVID 19 Testing Hospital Discharge Form - Help Guide
## Purpose
This form is used to document a patient's COVID-19 testing history and discharge information during hospitalization.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's full name, Medical Record Number, and Date of Birth in the "Patient Information" section.
2. Enter the date of admission and the date of discharge in the respective fields.
3. Select the hospital unit/department where the patient was admitted in the "Hospital Unit/Department" field.
4. Indicate if the patient was isolated during their stay and if COVID-19 isolation was required upon discharge.
5. Record the patient's initial COVID-19 test result upon admission and their test result at discharge.
6. Select the primary reason for hospitalization.
7. Indicate if oxygen therapy was required during the stay and enter the oxygen saturation level at discharge.
8. Mark if ventilator support was required during the stay.
9. Fill in the discharge instructions and any activity restrictions.
10. Select the discharge disposition, which can be Home, Rehabilitation facility, Skilled nursing facility, Hospice, or Transferred to another hospital.
11. Enter the name of the discharging physician.
12. Indicate if a follow-up appointment is required and schedule the date if applicable.
13. Finally, fill in the medications prescribed at discharge and any additional comments.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, text, required): Enter the patient's full name, as it should match the patient's identification documents.
* **Medical Record Number** (`patient_mrn`, text, required): Enter the patient's medical record number, as it is used for tracking and referencing patient information.
* **Date of Birth** (`patient_dob`, date, required): Enter the patient's date of birth to provide accurate medical history.
* **Date of Admission** (`admission_date`, date, required): Enter the date the patient was admitted to the hospital.
* **Date of Discharge** (`discharge_date`, date, required): Enter the date the patient was discharged from the hospital.
* **Hospital Unit/Department** (`unit_admitted`, text, required): Select the hospital unit/department where the patient was admitted for accurate record-keeping and billing.
* **Isolation Required at Discharge** (`isolation_required`, select_one, required): Indicate if the patient requires isolation upon discharge to prevent the spread of infection.
* **Initial COVID-19 Test Result on Admission** (`admission_test_result`, select_one, required): Record the patient's initial COVID-19 test result upon admission, which can be Positive, Negative, Inconclusive, or Not tested.
* **COVID-19 Test Result at Discharge** (`discharge_test_result`, select_one, required): Record the patient's COVID-19 test result at discharge, which can be Positive, Negative, Inconclusive, or Not tested.
* **Date of Discharge Test** (`test_date_discharge`, date, optional): Enter the date of the discharge test, if performed.
* **Primary Reason for Hospitalization** (`hospitalization_reason`, text, required): Enter the primary reason for the patient's hospitalization.
* **Oxygen Therapy Required** (`oxygen_required`, select_one, required): Indicate if oxygen therapy was required during the patient's stay.
* **Oxygen Saturation at Discharge** (`oxygen_level_discharge`, number, optional): Enter the patient's oxygen saturation level at discharge.
* **Ventilator Support Required** (`ventilator_support`, select_one, required): Indicate if ventilator support was required during the patient's stay.
* **Discharge Instructions** (`discharge_section`, note, optional): Fill in any discharge instructions or guidance for the patient's care.
* **Recommended Isolation Period** (`isolation_period`, number, required): Enter the recommended isolation period after discharge.
* **Follow-up Appointment Required** (`follow_up_appointment`, select_one, required): Indicate if a follow-up appointment is required.
* **Follow-up Appointment Date** (`follow_up_date`, date, optional): Schedule the follow-up appointment date if applicable.
* **Medications Prescribed at Discharge** (`medications_prescribed`, text, optional): Record any medications prescribed at discharge.
* **Activity Restrictions** (`restrictions`, text, optional): Fill in any activity restrictions for the patient's care.
* **Discharge Disposition** (`discharge_disposition`, select_one, required): Select the discharge disposition, which can be Home, Rehabilitation facility, Skilled nursing facility, Hospice, or Transferred to another hospital.
* **Discharging Physician Name** (`physician_name`, text, required): Enter the name of the discharging physician.
* **Follow-up Appointment Date** (`follow_up_date`, date, optional): This field is a duplicate of the "Follow-up Appointment Date" field and should be ignored.
