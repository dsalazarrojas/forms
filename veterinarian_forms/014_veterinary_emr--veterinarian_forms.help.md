# Veterinary EMR - Help Guide
## Purpose
The Veterinary EMR form is designed to collect information from clients visiting a veterinary clinic for a physical examination.

## How To Complete This Form
1. Ensure you have all the necessary details and information required to fill out the form.
2. Fill out the form accurately and completely, including all required fields.
3. Select the correct options for the fields where applicable.

## Field-by-Field Explanation
* **Client Contact Details** (`client_contact_details`, text, required: false):
	+ This field is for the client to enter their name, address, and contact information. Please enter all necessary contact details to ensure proper communication.
* **Appointment Time** (`appointment_time`, date, required: false):
	+ This field is for the client to schedule an appointment time. Please enter the actual time of the appointment.
* **Client Pet's Details** (`client_pets`, select_multiple, required: false):
	+ This field is for the client to select whether they have one or multiple pets. Please select 'True' for one pet, 'False' for multiple, or 'Not Sure' if unsure.
* **Client Physical Exam Findings** (`exam_findings`, text, required: false):
	+ This field is for the client to enter any physical exam findings or observations made during the examination.
* **Client Comments** (`client_comments`, text, required: false):
	+ This field is for the client to add any additional comments or concerns they may have.
* **Veterinarian Comments** (`veterinarian_comments`, text, required: false):
	+ This field is for the veterinarian to add any additional comments or recommendations.
* **Do you work for the veterinary group?** (`work_for_group`, text, required: false):
	+ This field is not relevant for this form, as it's not used in the provided schema.
* **Type of Physical Exam Template** (`physical_exam_template_type`, select_one, required: false):
	+ This field is for the client to select the type of template to use during the physical exam. Please select 'SOAP Template', 'Custom Template', or 'Blank Template'.
* **Template Type** (`template_type`, select_one, required: false):
	+ This field is identical to the previous field and seems to be an error in the schema. Please ignore it for now.

## Tips
- Please fill out the form accurately and completely.
- If unsure about any field, please ask a veterinary staff member for assistance.
- This form is intended for client information and not for medical diagnosis or treatment planning.
