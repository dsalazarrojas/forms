# Medical Consultation Form - Help Guide

## Purpose
This form is used to collect patient medical consultation information for medical professionals to review and provide accurate medical care.

## How To Complete This Form

1.  Please answer the questions based on your medical consultation information.
2.  Review each field carefully to ensure accuracy.
3.  Select the relevant medical condition from the options provided for your medical condition.
4.  Indicate your medical history and any ongoing medication.
5.  Enter your contact information for follow-up and consultation purposes.
6.  Enter your address for medical professionals' reference.
7.  Enter your doctor's contact information, if applicable.
8.  Complete and submit the form after reviewing all the fields.

## Field-by-Field Explanation

- **Patient Id** (`patient_id`, number, required): Enter your patient ID or registration number for your medical consultation record.
- **Patient Name** (`patient_name`, text, not required): Enter your name, as this will help medical professionals to understand your identity and provide personalized care.
- **Age** (`age`, number, required): Enter your age to help medical professionals to understand your age-related medical needs.
- **Medical Condition** (`medical_condition`, select_one, required): Choose the medical condition that applies to you from the provided options: Asthma, Cancer, Diabetes, Heart Disease, Hypertension, Stroke, Tuberculosis, or Other.
- **Medication** (`medication`, select_multiple, not required): Indicate whether you are currently taking any medication, which helps medical professionals to understand your treatment plan.
- **Doctor Name** (`doctor_name`, text, not required): Enter your doctor's name, if applicable, to help medical professionals to contact your doctor.
- **Doctor Specialty** (`doctor_specialty`, text, not required): Enter your doctor's specialty, if applicable, to help medical professionals to understand their expertise.
- **Contact Number** (`contact_number`, text, not required): Enter your contact number for medical professionals to contact you for follow-up and consultation purposes.
- **Address** (`address`, text, not required): Enter your address for medical professionals to reference your location for consultation purposes.
- **Medical History** (`medical_history`, text, not required): Describe your medical history, which is essential for medical professionals to understand your medical needs.
- **First Page** (`medical_consultation_form_first_page`, select_multiple, not required): This field is for medical professionals to confirm or deny the medical consultation.
