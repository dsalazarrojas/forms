# Veterinary Care Records Release Form - Help Guide
## Purpose

This form is designed to capture information from pet owners regarding the release of veterinary care records. It is intended to be used in situations where the pet's care is being transferred from one veterinary clinic to another, or when the pet's records are being shared between clinics. This form helps ensure that the pet's medical history and records are accurately and securely transferred.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the pet owner's name in the `pet_owner_name` field.
2. Provide the pet owner's contact number in the `owner_contact_number` field.
3. Select the name of the clinic where the pet was previously treated in the `clinic_name` field, if applicable.
4. Choose the correct medical record type from the `medical_record` field, which will be used to identify the pet's medical record.
5. Sign and date the consent in the `consent` field to confirm that the pet's records are being released.
6. Enter the date and time of the transfer in the `date_of_transfer` and `time_of_transfer` fields, if applicable.
7. Provide any additional comments or instructions in the `comments` field.
8. If the pet's care is being transferred to a new clinic, select the name of the new clinic in the `veterinary_clinic` field.

## Field-by-Field Explanation

* **Pet Owner Name** (pet_owner_name, text, required: false): Enter the name of the pet's owner, as it appears on record.
* **Owner Contact Number** (owner_contact_number, text, required: false): Enter the pet owner's contact number, where they can be reached if questions arise about the pet's care.
* **Clinic Name** (clinic_name, select multiple, required: false): If the pet has a history of treatment at one of the listed clinics, select that clinic's name to ensure accurate transfer of records.
* **Medical Record** (medical_record, select one, required: false): Select the type of medical record to be transferred, such as medical 1, medical 2, or medical 3.
* **Consent** (consent, select one, required: true): Sign and date this field to confirm that the pet's records are being released and transferred to the new clinic.
* **Date of Transfer** (date_of_transfer, date, required: false): Enter the date of the transfer, if applicable.
* **Time of Transfer** (time_of_transfer, time, required: false): Enter the time of the transfer, if applicable.
* **Comments** (comments, note, required: false): Provide any additional comments or instructions about the pet's care or transfer.
* **Veterinary Clinic** (veterinary_clinic, select one, required: false): If the pet's care is being transferred to a new clinic, select that clinic's name to ensure accurate transfer of records.
