# Eye Prescription Form - Help Guide
## Purpose
The Eye Prescription Form is designed to collect essential information from patients regarding their eye condition, prescription details, and follow-up appointments. This form helps healthcare professionals gather the necessary data to provide accurate and timely care.

## How To Complete This Form
To complete this form accurately and efficiently:

1.  Enter the patient's name and date of visit in the respective fields.
2.  Provide the doctor's name, patient ID, and eye condition to ensure accurate diagnosis and treatment.
3.  Enter the prescription number and details, including medication allergies, to ensure safe and effective treatment.
4.  Schedule a follow-up appointment by selecting the prescription type and duration.
5.  Add any relevant patient contact information and doctor's address for easy communication.
6.  Fill in any additional details in the medication instructions field for clear guidance.
7.  Finally, review all fields for accuracy before submission.

## Field-by-Field Explanation

* **Patient Name (1)** (`patient_name`, `text`, required): Enter the patient's full name as it appears on their identification documents.
* **Date of Visit (2)** (`date_of_visit`, `date`, required): Enter the date the patient visited the doctor.
* **Doctor Name (3)** (`doctor_name`, `text`, required): Enter the doctor's name who performed the examination.
* **Patient ID (4)** (`patient_id`, `text`, required): Enter the patient's ID number for accurate identification.
* **Eye Condition (5)** (`eye_condition`, `text`, required): Describe the patient's eye condition, such as cataracts, glaucoma, or conjunctivitis.
* **Prescription Number (6)** (`prescription_number`, `text`, required): Enter the number of the prescription given to the patient.
* **Prescription Details (7)** (`prescription_details`, `text`, required): Include any important details about the prescription, such as medication instructions.
* **Medication Allergies (8)** (`medication_allergies`, `text`, required): List any medications the patient is allergic to, to ensure safe treatment.
* **Follow-up Appointment (9)** (`followup_appointment`, `date`, required): Schedule a follow-up appointment for the patient.
* **Eye Pressure (10)** (`eye_pressure`, `number`, optional): Record the patient's eye pressure, if measured.
* **Medication Instructions (11)** (`medication_instructions`, `text`, required): Provide clear instructions for medication use.
* **Patient Phone (12)** (`patient_phone`, `text`, optional): Enter the patient's contact phone number for follow-up calls.
* **Patient Email (13)** (`patient_email`, `text`, optional): Enter the patient's email address for electronic communication.
* **Doctor's Note (14)** (`doctor_note`, `text`, optional): Add any notes from the doctor for future reference.
* **Follow-up Date (15)** (`followup_date`, `date`, optional): Schedule a follow-up visit or call.
* **Next Follow-up (16)** (`next_followup`, `date`, optional): Schedule the next follow-up appointment.
* **Patient Address (17)** (`patient_address`, `text`, optional): Enter the patient's address for mailings or deliveries.
* **Patient City (18)** (`patient_city`, `text`, optional): Enter the patient's city for location reference.
* **Patient State (19)** (`patient_state`, `text`, optional): Enter the patient's state for location reference.
* **Patient Zip (20)** (`patient_zip`, `text`, optional): Enter the patient's zip code for mailings or deliveries.
* **Patient Country (21)** (`patient_country`, `text`, optional): Enter the patient's country for international patients.
* **Doctor's Address (22)** (`doctor_address`, `text`, optional): Enter the doctor's address for easy communication.
* **Follow-up Time (23)** (`followup_time`, `time`, optional): Schedule the follow-up appointment time.
* **Prescription Type (24)** (`prescription_type`, `select_one`, required): Select the type of prescription, such as one-time or ongoing.
* **Prescription Duration (25)** (`prescription_duration`, `number`, required): Enter the duration of the prescription, in days or months.
