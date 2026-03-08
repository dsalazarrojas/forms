<thinking>
The purpose of this form is to gather information from patients to facilitate the rental process of medical equipment. This form is intended for end-users to provide their personal details and preferences for equipment rental. It's crucial to ensure that the form is filled out correctly to avoid duplication or incorrect rental requests. This form will be used in conjunction with other systems to process and manage rental requests efficiently. 
</thinking>

# medical_equipment_rental_order_form - Help Guide
## Purpose
The medical equipment rental order form is used to collect information from patients to process their rental requests for medical equipment. It's essential to fill out this form accurately to ensure that their needs are met and to avoid any duplication or incorrect rental requests.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the patient's name in the "Patient Name" field.
2. Provide the date of the rental request in the "Rental Request Date" field.
3. If necessary, specify the Equipment ID for the equipment being rented.
4. Choose the type of equipment from the "Equipment Type" dropdown menu (e.g., Ambulatory equipment, Diagnostic equipment, or Therapeutic equipment).
5. Select the duration of the rental in the "Rental Duration" field (e.g., Day, Week, Month, or Year).
6. Provide your contact phone number in the "Contact Phone" field.
7. Enter your contact email address in the "Contact Email" field.
8. If applicable, specify the medical insurance type (e.g., Medicaid, Medicare, or Private insurance).
9. Add any special instructions in the "Special Instructions" field if necessary.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required: false): Enter the patient's name as it appears on their identification documents.
* **Rental Request Date** (`rental_request_date`, date, required: false): Provide the date when the rental request was made.
* **Equipment ID** (`equipment_id`, number, required: false): If known, enter the ID of the equipment being rented.
* **Equipment Type** (`equipment_type`, select_one, required: false): Choose the type of equipment from the dropdown menu (e.g., Ambulatory equipment, Diagnostic equipment, or Therapeutic equipment).
* **Rental Duration** (`rental_duration`, select_multiple, required: false): Select the duration of the rental (e.g., Day, Week, Month, or Year).
* **Contact Phone** (`contact_phone`, text, required: false): Enter your contact phone number.
* **Contact Email** (`contact_email`, email, required: false): Enter your contact email address.
* **Medical Insurance** (`medical_insurance`, select_one, required: false): If applicable, specify the type of medical insurance (e.g., Medicaid, Medicare, or Private insurance).
* **Special Instructions** (`special_instructions`, note, required: false): Add any additional information or instructions for the rental request if necessary.

## Tips
* Ensure that the form is filled out accurately and thoroughly to avoid any confusion or delays in processing the rental request.
* If you're unsure about any field, please refer to the equipment vendor or your healthcare provider for clarification.
* Be sure to review the form for any typos or errors before submission.
