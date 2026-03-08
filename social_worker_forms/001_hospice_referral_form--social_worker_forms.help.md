# Hospice Referral Form - Help Guide
## Purpose
The Hospice Referral Form is used by social workers to refer patients to hospice services.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's name.
2. Enter the patient's date of birth.
3. Enter the name of the patient's primary care physician.
4. Enter the name of the physician who will be admitting the patient to the hospice program.
5. Enter the ID of the hospice to which you are referring the patient.
6. Enter the date of the referral.
7. Enter the patient's diagnosis.
8. Enter your name as the social worker.
9. Select the patient's status as either Active or Inactive.
10. Select whether the patient's location is within the hospice's service area.
11. Select the source of the referral (e.g. hospital, community center, etc.).
12. Enter the patient's contact number.
13. Enter any additional notes for the social worker.
14. Enter any additional notes for the hospice team.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the patient's name as it appears on their medical records.
* **Date of Birth** (`patient_dob`, date, required): Enter the patient's date of birth in the format MM/DD/YYYY.
* **Primary Care Physician** (`primary_care_physician`, text, required): Enter the name of the patient's primary care physician.
* **Admitting Physician** (`admitting_physician`, text, required): Enter the name of the physician who will be admitting the patient to the hospice program.
* **Hospice ID** (`hospice_id`, number, required): Enter the ID of the hospice to which you are referring the patient.
* **Referral Date** (`referral_date`, date, required): Enter the date of the referral in the format MM/DD/YYYY.
* **Diagnosis** (`diagnosis`, text, required): Enter the patient's diagnosis.
* **Social Worker** (`social_worker`, text, required): Enter your name as the social worker.
* **Patient Status** (`patient_status`, select_multiple, optional): Select whether the patient is Active or Inactive.
* **Hospice Location** (`hospice_location`, select_one, optional): Select whether the patient's location is within the hospice's service area.
* **Referral Source** (`referral_source`, select_one, optional): Select the source of the referral (e.g. hospital, community center, etc.).
* **Patient Contact Number** (`patient_contact_number`, text, optional): Enter the patient's contact number.
* **Social Worker Note** (`social_worker_note`, note, optional): Enter any additional notes for the social worker.
* **Hospice Referral Note** (`hospice_referral_note`, note, optional): Enter any additional notes for the hospice team.
