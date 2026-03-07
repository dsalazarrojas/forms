<thinking>
This form is designed for medical professionals to gather patient information and medical history before a doctor visit. The form is meant to be a comprehensive guide for the doctor to assess the patient's condition and provide effective treatment. Each field is designed to collect relevant and essential information for the medical professional to make informed decisions. The form is intended to be used in a clinical setting, and the fields are carefully crafted to minimize redundancy and maximize data collection efficiency. This form is not intended to be used for any other purpose other than clinical use.
</thinking>

# Doctor Visit Form - Help Guide
## Purpose
The Doctor Visit Form is designed to collect patient information and medical history before a doctor visit. The form helps the doctor to assess the patient's condition and provide effective treatment.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's personal information on pages 1-5.
2. Select the medications the patient is currently taking on page 4.
3. Indicate any allergies the patient has on page 5.
4. Fill in the contact information on page 6.
5. Write any doctor visit notes on page 7.
6. Select the doctor's signature on page 8.
7. Sign the patient's signature on page 9.
8. Fill in the date and time of the visit on pages 10-11.
9. Fill in the doctor's name, specialty, and license on pages 12-14.
10. Fill in the patient's name, date of birth, and ID on pages 15-17.
11. Fill in the visit date and time on pages 18-19.
12. Fill in the reason for the visit on page 20.
13. Fill in the medical record ID and number on pages 21-22.
14. Fill in the doctor and patient IDs on pages 23-24.

## Field-by-Field Explanation
- **Patient Information** (`patient_information`, `text`, required: false): Fill in the patient's name, date of birth, and address.
- **Medical History** (`medical_history`, `text`, required: false): Describe the patient's medical history, including any previous illnesses or conditions.
- **Visit Details** (`visit_details`, `text`, required: false): Describe the purpose of the visit and any relevant information about the patient's condition.
- **Medications** (`medications`, `select_multiple`, required: false): Select the medications the patient is currently taking.
  - **Acetaminophen**: Over-the-counter pain medication.
  - **Amoxicillin**: Antibiotic medication.
  - **Cetirizine**: Antihistamine medication.
  - **Ibuprofen**: Nonsteroidal anti-inflammatory medication.
  - **Prednisone**: Steroid medication.
  - **Xanax**: Benzodiazepine medication.
- **Allergies** (`allergies`, `select_multiple`, required: false): Select any allergies the patient has.
  - **Penicillin**: Allergic to penicillin.
  - **Ibuprofen**: Allergic to ibuprofen.
  - **Aspirin**: Allergic to aspirin.
  - **Xanax**: Allergic to Xanax.
  - **Acetaminophen**: Allergic to acetaminophen.
  - **Prednisone**: Allergic to prednisone.
- **Contact Information** (`contact_information`, `text`, required: false): Fill in the patient's contact information, including phone number and email address.
- **Doctor Visit Notes** (`doctor_visit_notes`, `text`, required: false): Write any notes about the doctor's visit.
- **Doctor Signature** (`doctor_signature`, `select_one`, required: false): Select the doctor's signature.
  - **Signature 1**: Doctor's signature 1.
  - **Signature 2**: Doctor's signature 2.
  - **Signature 3**: Doctor's signature 3.
- **Patient Signature** (`patient_signature`, `select_one`, required: false): Select the patient's signature.
  - **Signature 1**: Patient's signature 1.
  - **Signature 2**: Patient's signature 2.
  - **Signature 3**: Patient's signature 3.
- **Date** (`date`, `date`, required: false): Fill in the date of the visit.
- **Time** (`time`, `time`, required: false): Fill in the time of the visit.
- **Doctor Name** (`doctor_name`, `text`, required: false): Fill in the doctor's name.
- **Doctor License** (`doctor_license`, `text`, required: false): Fill in the doctor's license number.
- **Doctor Specialty** (`doctor_specialty`, `text`, required: false): Fill in the doctor's specialty.
- **Patient Name** (`patient_name`, `text`, required: false): Fill in the patient's name.
- **Patient Dob** (`patient_dob`, `text`, required: false): Fill in the patient's date of birth.
- **Visit Date** (`visit_date`, `date`, required: false): Fill in the date of the visit.
- **Visit Time** (`visit_time`, `time`, required: false): Fill in the time of the visit.
- **Reason For Visit** (`reason_for_visit`, `text`, required: false): Describe the reason for the visit.
- **Medical Record Id** (`medical_record_id`, `text`, required: false): Fill in the medical record ID.
- **Medical Record Number** (`medical_record_number`, `text`, required: false): Fill in the medical record number.
- **Doctor Id** (`doctor_id`, `text`, required: false): Fill in the doctor's ID.
- **Patient Id** (`patient_id`, `text`, required: false): Fill in the patient's ID.
- **Medical History Notes** (`medical_history_notes`, `text`, required: false): Write any additional medical history notes.
- **Billing Information** (`billing_information`, `text`, required: false): Fill in the billing information.
