# ultima_patient_info - Help Guide

## Purpose
The ultima_patient_info form is used to collect and store patient information for healthcare management purposes.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in the patient's basic information (Name, Date of Birth, etc.)
* Select the patient's gender and medical record status
* Enter the patient's address and phone number
* Provide medical record details, such as the medical record number and type
* Enter any medical history and history details
* List any allergies or medical images

## Field-by-Field Explanation
* **patient_info** (text, required): Enter the patient's basic information, such as name, address, phone number, etc.
* **patient_name** (text, required): Enter the patient's name
* **patient_dob** (date, required): Enter the patient's date of birth
* **patient_gender** (select_one, required): Select the patient's gender
* **patient_address** (select_multiple, required): Select the patient's address options
* **patient_phone** (text, required): Enter the patient's phone number
* **doctor_info** (select_one, required): Select whether the patient's doctor information is available
* **doctor_name** (text, required): Enter the doctor's name
* **doctor_specialty** (select_one, required): Select the doctor's specialty
* **hospital_name** (text, required): Enter the hospital's name
* **hospital_address** (text, required): Enter the hospital's address
* **patient_medical_record_number** (text, required): Enter the patient's medical record number
* **patient_medical_record_type** (select_one, required): Select the patient's medical record type
* **patient_medical_record_date** (date, required): Enter the date the patient's medical record was created
* **patient_medical_record_status** (select_one, required): Select the patient's medical record status
* **patient_medical_record_note** (note, required): Enter any notes regarding the patient's medical record
* **patient_medical_history** (text, required): Enter the patient's medical history
* **patient_medical_history_date** (date, required): Enter the date the patient's medical history was created
* **patient_medical_history_status** (select_one, required): Select the status of the patient's medical history
* **patient_medical_history_note** (note, required): Enter any notes regarding the patient's medical history
* **patient_allergies** (text, required): List the patient's allergies
* **patient_allergies_status** (select_one, required): Select the status of the patient's allergies
* **patient_medical_image** (text, required): Enter any medical images or images related to the patient's medical history
* **patient_medical_image_date** (date, required): Enter the date the medical image was taken
* **patient_medical_image_status** (select_one, required): Select the status of the patient's medical image
