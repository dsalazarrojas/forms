# Massage Intake Form - Help Guide
## Purpose
This form is designed to register a patient for a massage therapy session, gathering necessary information to tailor the session to the patient's needs and preferences.

## How To Complete This Form
1. Please fill out the form carefully and accurately, following the instructions provided for each field.
2. If you are unsure about any field or have questions, please ask a staff member for assistance.
3. Once you have completed the form, please review it carefully before submitting it to ensure that all required fields are filled out correctly.

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, text, required: false): This field is intended for the patient to provide their personal details, such as their name, contact information, and any relevant medical history.
* **Appointment** (`appointment_info`, text, required: false): This field is for the patient to provide information about their preferred appointment time and date.
* **Message To Therapist** (`message`, text, required: true): Please write your message to the therapist here, including any specific areas of focus or concerns you would like to address during the massage.
* **Choose Massage Therapist** (`massage_options`, select_one, required: true): Select the massage therapist you would like to work with for your appointment.
* **Confirm** (`confirm`, select_multiple, required: true): Choose the options that apply to your appointment:
	+ Option 1: I have read and understand the policies and procedures.
	+ Option 2: I am aware that massage therapy may cause discomfort or injury.
	+ Option 3: I acknowledge that the therapist will not be responsible for any medical conditions or concerns that I have not disclosed.
* **Patient Signature** (`signature`, note, required: false): Please sign below to confirm that you have read and understood the policies and procedures.
* **Therapist Signature** (`therapist_signature`, note, required: false): Please sign below to confirm that you have reviewed the patient's information and are aware of their medical condition.
* **Massage Duration** (`massage_duration`, number, required: false): This field is not currently used in our system, please ignore it for now.
* **Massage Fees** (`massage_fees`, number, required: false): This field is not currently used in our system, please ignore it for now.
