# veterinary_care_records_release_form - Help Guide

## Purpose
The veterinary care records release form is a crucial document for transferring patient records from one clinic to another. This form helps ensure that the transfer process is handled with care and accuracy, preventing loss or duplication of sensitive patient information.

## How To Complete This Form

1. Fill out the form completely and accurately, providing all required information.
2. Ensure you enter the correct clinic name and ID for the transferring clinic.
3. Sign the form as the owner and clinic staff to confirm transfer.
4. Choose the correct record type and status for the transferred records.
5. Provide any relevant transfer notes or comments.

## Field-by-Field Explanation

* **Transfer Clinic** (`transfer_clinic`, text, optional): Enter the name of the clinic transferring the records.
* **Clinic Name** (`clinic_name`, text, optional): Enter the name of the clinic receiving the records.
* **Practice ID** (`practice_id`, number, required): Enter the ID number of the transferring clinic.
* **Client Information** (`client_info`, text, optional): Provide any relevant information about the client, such as contact details.
* **Owner Signature** (`owner_signature`, date, required): Sign the form as the client or owner to confirm transfer.
* **Clinic Signature** (`clinic_signature`, date, required): Sign the form as the clinic staff to confirm transfer.
* **Record Type** (`record_type`, select_one, required): Choose the type of records being transferred (e.g., Veterinary Record, Medical Record, etc.).
* **Record Number** (`record_number`, text, required): Enter a unique ID number for the records.
* **Reason for Transfer** (`reason_transfer`, text, required): State the reason for transferring the records.
* **Date of Transfer** (`date_transfer`, date, optional): Enter the date of the transfer, if known.
* **Time of Transfer** (`time_transfer`, time, optional): Enter the time of the transfer, if known.
* **Contact Phone** (`contact_phone`, text, optional): Provide a contact phone number for the receiving clinic.
* **Contact Email** (`contact_email`, email, optional): Enter an email address for the receiving clinic.
* **Transfer Note** (`transfer_note`, text, optional): Add any additional comments or notes about the transfer.
* **Veterinary Medication** (`veterinary_medication`, select_multiple, optional): Choose any veterinary medications being transferred.
* **Human-Animal Interaction** (`human_animal_interaction`, select_multiple, optional): Indicate if there was human-animal interaction during treatment.
* **Transfer Method** (`transfer_method`, select_one, required): Choose how the records will be transferred (e.g., Email, Fax, etc.).
* **Transfer Location** (`transfer_location`, select_one, optional): Choose where the records will be transferred (e.g., Mail, Fax, etc.).
* **Clinic Address** (`clinic_address`, text, optional): Enter the address of the transferring clinic.
* **Clinic Phone** (`clinic_phone`, text, optional): Enter the phone number of the transferring clinic.
* **Clinic Email** (`clinic_email`, email, optional): Enter the email address of the transferring clinic.
* **Clinic Fax** (`clinic_fax`, text, optional): Enter the fax number of the transferring clinic.
* **Clinic Fax Number** (`clinic_fax_number`, text, optional): Enter the fax number of the transferring clinic.
* **Record Status** (`record_status`, select_multiple, required): Choose the status of the transferred records (e.g., Active, Inactive, etc.).
* **Notes** (`notes`, text, optional): Add any additional comments or notes about the transfer.
