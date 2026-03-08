# Dermaplaning Consent Form - Help Guide
## Purpose

This form is used to obtain consent from patients for dermaplaning treatments.

## How To Complete This Form

1. Please fill in all fields as accurately and completely as possible.
2. For the "Patient Name" field, enter the patient's full name as it appears on their government-issued ID.
3. For the "Date of Birth" field, enter the patient's date of birth in the format mm/dd/yyyy.
4. For the "Salutation" field, select the correct title based on the patient's preference (Mr, Mrs, Ms, Dr, Miss, or Prof).
5. For the "Salon Name" field, enter the name of the salon where the treatment will be provided.
6. For the "Phone" field, enter the patient's phone number.
7. For the "Email" field, enter the patient's email address.
8. For the "Dermaplaning Type" field, select the type of treatment the patient will receive (Micro-needling, Dermaplaning, Chemical Peel, or Peel and Micro-needling).
9. For the "Area Treated" field, select all applicable areas of the body that will be treated (Face, Neck, Hands).
10. For the "Number of Sessions" field, enter the number of sessions the patient will need.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter the patient's full name as it appears on their government-issued ID.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in the format mm/dd/yyyy.
* **Salutation** (`salutation`, select_one, required): Select the correct salutation based on the patient's preference (Mr, Mrs, Ms, Dr, Miss, or Prof).
* **Salon Name** (`salon_name`, text, required): Enter the name of the salon where the treatment will be provided.
* **Phone** (`phone`, text, required): Enter the patient's phone number.
* **Email** (`email`, email, required): Enter the patient's email address.
* **Dermaplaning Type** (`dermaplaning_type`, select_one, required): Select the type of treatment the patient will receive (Micro-needling, Dermaplaning, Chemical Peel, or Peel and Micro-needling).
* **Area Treated** (`area_treated`, select_multiple, required): Select all applicable areas of the body that will be treated (Face, Neck, Hands).
* **Number of Sessions** (`number_of_sessions`, number, required): Enter the number of sessions the patient will need.
