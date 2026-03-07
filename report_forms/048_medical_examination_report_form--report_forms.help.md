<thinking>
We need to create a user-facing help guide for the Medical Examination Report Form. To create this form, we will assume that the purpose of the form is to gather information about a patient's medical history, examination, and other relevant details for medical purposes. This form is likely used by medical professionals or healthcare providers to document patient information and communicate with other healthcare teams. It's essential to ensure that the form is completed accurately and thoroughly to avoid duplication of efforts and ensure seamless communication.
</thinking>

# Medical Examination Report Form - Help Guide

## Purpose
This form is designed to collect medical information about a patient, including their medical history, examination, and other relevant details. The form will help healthcare providers document and communicate patient information effectively.

## How To Complete This Form

1. To complete this form, start by filling in the **General Information** section, which is required for identifying the patient.
2. Next, provide a brief **Medical History** of the patient, if necessary.
3. In the **Medical History Conditions** section, select any applicable conditions from the list provided.
4. For **Medication List**, select the medication(s) the patient is currently taking.
5. In the **Medical Examination** section, provide a detailed report of the examination.
6. If necessary, continue providing additional examination details in the **Medical Examination 2** section.
7. Enter the **Date of Exam** and **Medical Record Number**.
8. Provide the **Doctor's Contact Information** by filling in the **Doctor Name**, **Doctor Address**, **Doctor Phone**, and **Doctor Email**.
9. Finally, sign and date the form with your **Doctor Signature** and provide the **Patient Signature**.

## Field-by-Field Explanation

* **General Information (page 1)**:
  - **Medical Record Number** (`medical_record_number`, text, required): Unique identifier for the patient's medical record.
* **Doctor Name (page 1)**:
  - **Doctor Name** (`doctor_name`, text, required): Name of the healthcare provider completing the form.
* **Doctor Address (page 1)**:
  - **Doctor Address** (`doctor_address`, text, required): Address of the healthcare provider.
* **Doctor Phone (page 1)**:
  - **Doctor Phone** (`doctor_phone`, text, required): Contact phone number of the healthcare provider.
* **Date of Exam (page 1)**:
  - **Date of Exam** (`date_of_exam`, date, required): Date of the medical examination.
* **Medical Record Number (page 1)**:
  - **Medical Record Number** (`medical_record_number`, text, required): Unique identifier for the patient's medical record.
* **Medical History (page 2)**:
  - **Medical History** (`medical_history`, text, optional): Brief history of the patient's medical condition.
* **Medical History Conditions (page 2)**:
  - **Hypothyroidism**, **Diabetes**, **Cancer** (`medical_history_conditions`, select_multiple, required): Select all applicable medical conditions.
* **Medication List (page 2)**:
  - **Aspirin**, **Ibuprofen**, **Acetaminophen** (`medication_list`, select_one, optional): Select the medication(s) the patient is currently taking.
* **Medical Examination (page 3)**:
  - **Medical Examination** (`medical_examination`, text, required): Detailed report of the medical examination.
* **Medical Examination 2 (page 4)**:
  - **Medical Examination 2** (`medical_examination_2`, text, optional): Additional examination details, if necessary.
* **Medical Certificate (page 4)**:
  - **Medical Certificate** (`medical_certificate`, date, required): Date of the medical examination.
* **Doctor License (page 5)**:
  - **Doctor License** (`doctor_license`, text, optional): License of the healthcare provider.
* **Doctor License Number (page 5)**:
  - **Doctor License Number** (`doctor_license_num`, text, optional): License number of the healthcare provider.
* **Hospital Name (page 5)**:
  - **Hospital Name** (`hospital_name`, text, optional): Name of the healthcare facility.
* **Hospital Address (page 6)**:
  - **Hospital Address** (`hospital_address`, text, required): Address of the healthcare facility.
* **Doctor Signature (page 6)**:
  - **Doctor Signature** (`doctor_signature`, text, required): Signature of the healthcare provider.
* **Patient Signature (page 6)**:
  - **Patient Signature** (`patient_signature`, text, required): Signature of the patient.
* **Medical Specialty (page 7)**:
  - **Cardiology**, **General Medicine**, **Dermatology** (`medical_specialty`, select_one, optional): Specialty of the healthcare provider.
* **Medical Examination Note (page 7)**:
  - **Medical Examination Note** (`medical_examination_note`, note, optional): Optional notes from the healthcare provider.
* **Doctor Address (page 8)**:
  - **Doctor Address** (`doctor_address`, text, required): Address of the healthcare provider.
* **Doctor Email (page 8)**:
  - **Doctor Email** (`doctor_email`, email, optional): Contact email of the healthcare provider.
