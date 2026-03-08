# gym_facility_safety_inspection_consent_form - Help Guide
## Purpose
The purpose of this form is to obtain consent from clients for a facility inspection, which is a process to ensure the safety and well-being of clients who use the facility.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the client's contact information in the "Client Info" field.
2. Provide your emergency contact information in the "Emergency Contact" field.
3. Schedule the facility inspection by selecting a date in the "Facility Inspection Schedule" field.
4. Provide any comments or observations about the inspection in the "Facility Inspection Comments" field.
5. Answer questions about the inspection frequency in the "Facility Inspection Frequency" field.
6. Confirm the type of inspection required in the "Facility Inspection Type" field.
7. Confirm the frequency of inspections required in the "Frequency of Inspections" field.
8. Finally, sign and date the "Client Signature" field to confirm your consent.

## Field-by-Field Explanation
* **Client Info** (`client_info`, `text`, required): This field is for you to provide your personal contact information, including your name, email, and phone number.
* **Emergency Contact** (`emergency_contact`, `select_one`, required): Please select 'Yes' or 'No' to indicate if you have an emergency contact person that we should contact in case of an emergency.
* **Facility Inspection Schedule** (`facility_inspection_schedule`, `date`, required): Select a date for the facility inspection.
* **Facility Inspection Comments** (`facility_inspection_comments`, `text`, required): Provide any comments or observations about the inspection.
* **Facility Inspection Frequency** (`facility_inspection_frequency`, `select_multiple`, required): Select the frequency of inspections required, such as 'Yes' or 'No'.
* **Facility Inspection Type** (`facility_inspection_type`, `select_one`, required): Confirm the type of inspection required.
* **Frequency of Inspections** (`facility_inspection_frequency_2`, `select_multiple`, optional): Select the frequency of inspections required.
* **Inspections Frequency** (`facility_inspection_frequency_3`, `select_multiple`, optional): Select the frequency of inspections required.
* **Consent Date** (`consent_date`, `date`, required): Date of consent.
* **Facility Inspection Type** (`facility_inspection_type`, `select_one`, required): Confirm the type of inspection required.
* **Client Signature** (`client_signature`, `note`, required): Sign and date this field to confirm your consent.
