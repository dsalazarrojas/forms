# Embryo Transfer Tracking Form - Help Guide
## Purpose

This form is used to track the transfer of embryos from a patient to a clinic.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the patient's details in the **patient_details** field.
2. In the **procedure_details** field, provide a brief description of the procedure performed.
3. Select the **clinic_details** field to specify the clinic where the embryo was transferred.
4. In the **submission_notes** field, provide any additional notes or comments about the transfer.
5. Select the contact information in the **contact_info** field to specify how you would like to be contacted (e.g., Email, Phone, Mobile).
6. If you have a specific email address for contact, enter it in the **contact_email** field.
7. If you have a phone number for contact, enter it in the **phone** field.
8. Enter the date and time of the transfer in the **date_of_transfer** and **time_of_transfer** fields.
9. Enter any additional notes about the transfer in the **notes** field.
10. Enter the date of submission in the **date_of_submission** field.

## Field-by-Field Explanation

* **patient_details** (`patient_details`, text, optional): Enter the patient's details in a free-form text field.
* **patient_details_input** (`patient_details`, number, optional): This field is currently not in use. It seems to be a redundant field.
* **procedure_details** (`procedure_details`, text, optional): Enter a brief description of the procedure performed.
* **clinic_details** (`clinic_details`, select, required): Select the clinic where the embryo was transferred from the available options (Clinic A, Clinic B, Clinic C, Clinic D).
* **submission_notes** (`submission_notes`, text, optional): Enter any additional notes or comments about the transfer.
* **contact_info** (`contact_info`, select_multiple, required): Select how you would like to be contacted (Email, Phone, Mobile).
* **contact_email** (`contact_email`, email, optional): Enter a specific email address for contact.
* **phone** (`phone`, text, optional): Enter a specific phone number for contact.
* **date_of_transfer** (`date_of_transfer`, date, optional): Enter the date of the transfer.
* **time_of_transfer** (`time_of_transfer`, time, optional): Enter the time of the transfer.
* **notes** (`notes`, note, optional): Enter any additional notes about the transfer.
* **date_of_submission** (`date_of_submission`, date, optional): Enter the date of submission.

## Tips

* Please ensure that all mandatory fields (marked as required) are completed accurately to ensure proper documentation.
* Use the available options for **contact_info** to specify how you would like to be contacted.
* If you have a specific contact email or phone number, enter it in the **contact_email** and **phone** fields.
* The **date_of_transfer** and **time_of_transfer** fields should be filled in the correct format (DD/MM/YY and HH:MM AM/PM).
* The **notes** field is for additional information, so use it to provide context or clarify any important details.
