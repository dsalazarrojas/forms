# Vaccination Attestation Form - Help Guide

## Purpose

The Vaccination Attestation Form is a document used to record and attest to the administration of vaccinations to patients. This form is used to track and document vaccination information, ensuring accuracy and consistency in record keeping.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the patient's First Name and Last Name in the corresponding fields.
2. Provide the patient's Email and Phone number.
3. Enter the Date and Time of the vaccination.
4. Select the Vaccination Type (e.g., Flu, COVID-19, Pertussis).
5. Enter the Dose Number.
6. Enter the Vaccination Site.
7. Select the Vaccination Status (e.g., Completed, Not Completed, Unknown).
8. Enter the Patient ID.
9. Enter the name of the Nurse who administered the vaccination.
10. Enter the name of the Doctor who administered the vaccination (if applicable).
11. Enter the Doctor's Title (e.g., Dr, Dr. Jr., Prof, Res).
12. Enter the Doctor's Phone number (if applicable).
13. Enter the Doctor's Email (if applicable).
14. Enter the Doctor's Address (if applicable).
15. Enter the Patient's Address (if applicable).
16. Enter the date and time of the vaccination (if different from previous entries).
17. Enter any additional notes regarding the vaccination status.
18. Sign and date the form with the Doctor's signature (if applicable).
19. Sign and date the form with the Nurse's signature (if applicable).

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter the patient's first name.
* **Last Name** (`last_name`, `text`, required): Enter the patient's last name.
* **Email** (`email`, `email`, required): Enter the patient's email address.
* **Phone** (`phone`, `text`, required): Enter the patient's phone number.
* **Date of Vaccination** (`date_of_vaccination`, `date`, required): Enter the date the vaccination was administered.
* **Vaccination Type** (`vaccination_type`, `select_one`, required): Select the type of vaccination administered (e.g., Flu, COVID-19, Pertussis).
* **Dose Number** (`dose_num`, `number`, required): Enter the dose number of the vaccination.
* **Vaccination Site** (`vaccination_site`, `text`, required): Enter the site where the vaccination was administered.
* **Vaccination Status** (`vaccination_status`, `select_one`, required): Select the status of the vaccination (e.g., Completed, Not Completed, Unknown).
* **Patient ID** (`patient_id`, `text`, required): Enter the patient's ID.
* **Nurse Name** (`nurse_name`, `text`, required): Enter the name of the nurse who administered the vaccination.
* **Doctor Name** (`doctor_name`, `text`, optional): Enter the name of the doctor who administered the vaccination (if applicable).
* **Doctor Title** (`doctor_title`, `select_multiple`, optional): Select the title of the doctor who administered the vaccination (e.g., Dr, Dr. Jr., Prof, Res).
* **Doctor Phone** (`doctor_phone`, `text`, optional): Enter the doctor's phone number (if applicable).
* **Doctor Email** (`doctor_email`, `email`, optional): Enter the doctor's email address (if applicable).
* **Doctor Address** (`doctor_address`, `text`, optional): Enter the doctor's address (if applicable).
* **Patient Address** (`patient_address`, `text`, optional): Enter the patient's address (if applicable).
* **Vaccination Date** (`vaccination_date`, `date`, optional): Enter the date of the vaccination (if different from previous entries).
* **Vaccination Time** (`vaccination_time`, `time`, optional): Enter the time of the vaccination (if different from previous entries).
* **Vaccination Status Notes** (`vaccination_status_notes`, `text`, optional): Enter any additional notes regarding the vaccination status.
* **Doctor Signature** (`doctor_signature`, `note`, optional): Sign and date the form with the doctor's signature (if applicable).
* **Nurse Signature** (`nurse_signature`, `note`, optional): Sign and date the form with the nurse's signature (if applicable).
* **Doctor License** (`doctor_license`, `select_multiple`, optional): Select the status of the doctor's license (e.g., Active, Inactive, Pending).
* **Doctor License Number** (`doctor_license_number`, `text`, optional): Enter the doctor's license number (if applicable).
* **Patient Signature** (`patient_signature`, `note`, optional): Sign and date the form with the patient's signature (if applicable).
