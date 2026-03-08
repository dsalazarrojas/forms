# Hospice Referral Form - Help Guide

## Purpose
This form is designed to facilitate the referral process for hospice care. The form captures essential information about the patient, the referring physician, and the hospice facility. It helps ensure that all necessary details are gathered for a smooth and efficient transition of care.

## How To Complete This Form

1. Fill in the patient's information, including their first name, last name, date of birth, and contact details.
2. Provide the referring physician's name and facility.
3. Select the patient's condition and any relevant medical conditions.
4. Enter the hospice's address, phone number, and facility name.
5. Sign and date the form, indicating that the physician has reviewed and recommended the patient for hospice care.
6. Complete the contact information for the individual referring the patient to the hospice.

## Field-by-Field Explanation

* **Patient First Name** (`patient_first_name`, text, required): Enter the patient's first name.
* **Patient Last Name** (`patient_last_name`, text, required): Enter the patient's last name.
* **Patient Date of Birth** (`patient_dob`, date, required): Enter the patient's date of birth in the format `MM/DD/YYYY`.
* **Referring Physician** (`referring_physician`, text, required): Enter the name of the referring physician.
* **Patient Address** (`patient_address`, text, optional): Enter the patient's address.
* **Referring Facility** (`referring_facility`, text, optional): Enter the name of the referring facility.
* **Contact First Name** (`contact_first_name`, text, required): Enter the first name of the contact person.
* **Contact Last Name** (`contact_last_name`, text, required): Enter the last name of the contact person.
* **Contact Email** (`contact_email`, email, required): Enter the email address of the contact person.
* **Patient Condition** (`patient_condition`, select_one, required): Select the patient's condition, either 'Yes' or 'No'.
* **Patient Medical Condition** (`patient_medical_condition`, text, optional): Enter any relevant medical conditions affecting the patient.
* **Patient Diagnosis** (`patient_diagnosis`, text, optional): Enter any relevant diagnoses for the patient.
* **Physician Name** (`physician_name`, text, optional): Enter the name of the referring physician (if not already provided).
* **Physician Signature** (`physician_signature`, text, required): Enter the referring physician's signature.
* **Date of Transfer** (`date_of_transfer`, date, required): Enter the date the patient will be transferred to the hospice.
* **Date Signed** (`date_signed`, date, optional): Enter the date the form was signed by the physician.
* **Contact Phone** (`contact_phone`, text, optional): Enter the contact person's phone number.
* **Contact Facility** (`contact_facility`, text, optional): Enter the name of the contact facility.
* **Contact Title** (`contact_title`, text, optional): Enter the contact person's title.
* **Contact Department** (`contact_department`, text, optional): Enter the contact person's department.
* **Hospice Name** (`hospice_name`, text, optional): Enter the name of the hospice facility.
* **Hospice Address** (`hospice_address`, text, optional): Enter the address of the hospice facility.
* **Hospice Phone** (`hospice_phone`, text, optional): Enter the phone number of the hospice facility.
* **Hospice Facility** (`hospice_facility`, text, optional): Enter the name of the hospice facility.

Note: All fields marked as required must be completed for the form to be valid.
