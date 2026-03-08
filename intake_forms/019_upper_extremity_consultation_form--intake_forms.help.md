<thinking>...</thinking>

# Upper Extremity Consultation Form - Help Guide
## Purpose
This form is designed to gather information from patients about their upper extremities, including their symptoms, medical history, and treatment preferences. The form is used to help healthcare providers assess and treat upper extremity-related conditions.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the patient details section with the patient's personal information.
2. Describe any symptoms you are experiencing in the symptom descriptions section.
3. Indicate your current pain levels in the pain levels section.
4. Provide any relevant medical history in the medical history section.
5. Answer the medication use question to indicate if you are currently taking any medications.
6. Answer the family history question to indicate if you have a family history of any medical conditions.
7. Indicate if you have any allergies in the allergy section.
8. Select a date and time for your appointment with the healthcare provider.
9. Enter your name, email, phone number, and healthcare provider information in their respective sections.
10. Enter the clinic name and your address if applicable.
11. Provide any additional medical notes or comments in the medical notes section.

## Field-by-Field Explanation

* **Patient Details** (`upper_extremity_details`, text, required: false): Enter the patient's name, date of birth, and any other relevant demographic information.
* **Symptom Descriptions** (`symptom_descriptions`, text, required: false): Describe any symptoms you are experiencing in as much detail as possible.
* **Pain Levels** (`pain_levels`, number, required: false): Use a scale of 1-10 to indicate the level of pain you are experiencing.
* **Medical History** (`medical_history`, note, required: false): Provide any relevant medical history, including past treatments or conditions.
* **Medication Use** (`medication_use`, select_one, required: false): Indicate if you are currently taking any medications.
	+ Options: 'True', 'False', 'Not sure'
* **Family History** (`family_history`, select_multiple, required: false): Indicate if you have a family history of any medical conditions.
	+ Options: 'True', 'False'
* **Allergy** (`allergy`, select_one, required: false): Indicate if you have any allergies.
	+ Options: 'True', 'False'
* **Appointment Date** (`appointment_date`, date, required: false): Select a date for your appointment with the healthcare provider.
* **Appointment Time** (`appointment_time`, time, required: false): Select a time for your appointment with the healthcare provider.
* **Patient Name** (`patient_name`, text, required: false): Enter your name.
* **Patient Email** (`patient_email`, email, required: false): Enter your email address.
* **Patient Phone** (`patient_phone`, text, required: false): Enter your phone number.
* **Healthcare Provider** (`healthcare_provider`, text, required: false): Enter the name of your healthcare provider.
* **Medical Specialist** (`medical_specialist`, text, required: false): Enter the name of your medical specialist.
* **Clinic Name** (`clinic_name`, text, required: false): Enter the name of your clinic.
* **Patient Address** (`patient_address`, text, required: false): Enter your address.
* **Medical Notes** (`medical_notes`, note, required: false): Provide any additional medical notes or comments.

Note: Please fill out this form as completely and accurately as possible. If you have any questions or need help, do not hesitate to contact us.
