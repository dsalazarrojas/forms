<thinking>...</thinking>

# Medical Consultation Form - Help Guide

## Purpose
This form is used to collect information from patients about their medical consultation, including patient information, patient history, medical professional information, medical conditions, medical treatment, and additional comments. The form is used to gather data for medical professionals to make informed decisions about patient care.

## How To Complete This Form

1. **Fill out each section thoroughly and accurately**
2. **Ensure all required fields are completed**

## Field-by-Field Explanation

* **Patient Information (Patient Info)** (`patient_info`, `text`, **required: false**): This field is where you can enter any relevant information about the patient that may be helpful for the medical professional.
* **Patient History (Patient History)** (`patient_history`, `text`, **required: false**): Please provide a brief description of the patient's medical history.
* **Medical Professional Information (Medical Professional Info)** (`medical_professional_info`, `text`, **required: false**): This field is for the patient to provide information about the medical professional(s) they are consulting with.
* **Medical Conditions (Medical Conditions)** (`medical_conditions`, `select_multiple`, **required: true**): Check all the medical conditions that apply to the patient. Options include:
	+ Yes
	+ No
* **Medical Treatment (Medical Treatment)** (`medical_treatment`, `select_one`, **required: true**): Please choose the appropriate medical treatment for the patient. Options include:
	+ Yes
	+ No
* **Additional Comments (Additional Comments)** (`additional_comments`, `note`, **required: false**): Use this field for any additional comments or information about the patient's medical consultation.
