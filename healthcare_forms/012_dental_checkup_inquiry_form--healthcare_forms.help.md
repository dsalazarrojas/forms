<thinking>
The "dental_checkup_inquiry_form" is a form used to collect information from patients about their dental checkup inquiries. This form is designed to gather details such as patient name, date of birth, email, and medical history, among other relevant information. It's intended to be completed by patients or their representatives to provide essential data for dental inquiries or appointment scheduling purposes. The form is not mandatory, and users can submit or skip fields as per their needs. 

Before proceeding, ensure you have the necessary information ready to fill out the form accurately. The form is not designed to be completed multiple times, so please fill it out once with the required information. This form is meant for single-user input and is not meant for batch processing or automated submissions.

Please note that some fields may have specific requirements or restrictions based on the form's design and purpose. If you're unsure about any field, refer to the field-by-field explanation for clarification.

</thinking>

# dental_checkup_inquiry_form - Help Guide
## Purpose
The "dental_checkup_inquiry_form" is a form used to collect information from patients about their dental checkup inquiries.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your patient's name in the "Patient Name" field.
2. Provide your patient's date of birth in the "Date of Birth" field.
3. Enter your patient's email address in the "Email" field.
4. Select your patient's prophet from the "Prophet" dropdown menu. This field is optional.
5. Enter your patient's phone number in the "Phone" field.
6. Select your patient's prophet from the "Prophet" dropdown menu (this field is optional).
7. Provide any relevant medical history in the "Medical History" field.
8. Choose the type of inquiry you're making in the "Inquiry Type" dropdown menu (optional).
9. If making an appointment, choose the scheduling status from the "Appointment Scheduling" dropdown menu (optional).
10. Add any additional comments in the "Additional Comments" field.
11. Enter any notes or messages in the "Notes" field.
12. Submit your completed form.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required/optional): Enter your patient's name.
* **Date of Birth** (`date_of_birth`, date, required/optional): Provide your patient's date of birth.
* **Email** (`email`, email, required/optional): Enter your patient's email address.
* **Prophet** (`prophet`, select_one, optional): Select your patient's prophet (John or Peter or Peter).
* **Phone** (`phone`, text, required/optional): Enter your patient's phone number.
* **Prophet** (`prophet`, select_multiple, optional): Select one or more prophets (John or Peter).
* **Medical History** (`medical_history`, note, required/optional): Provide any relevant medical history.
* **Inquiry Type** (`inquiry_type`, select_one, optional): Choose the type of inquiry (Dental Inquiries or Appointment Scheduling).
* **Appointment Scheduling** (`appointment_scheduling`, select_multiple, optional): Choose the scheduling status (Available or Confirmed).
* **Additional Comments** (`additional_comments`, note, required/optional): Add any additional comments or messages.
* **Notes** (`notes`, note, required/optional): Enter any notes or messages.
* **Submitted** (`submitted`, text, required/optional): The submitted field is automatically filled by the system.

Tips:
* Ensure that you have accurate and up-to-date information before filling out the form.
* Be precise and clear in your entries to avoid any confusion or errors.
* If you're unsure about any field, please refer to the field-by-field explanation for clarification.
