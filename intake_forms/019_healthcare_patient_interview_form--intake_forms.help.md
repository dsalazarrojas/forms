thinking...
This form is designed to collect information from healthcare patients in an organized and structured manner. It covers a range of topics, including contact details, medical history, emergency contacts, scheduling, medical conditions, next visit schedule, comments, physician notes, allergies, medications, follow-up information, and emergency contacts. This form is intended to be used for patient intake purposes and is likely to be filled out by patients or their authorized representatives. Please ensure that the form is completed in a way that respects patient privacy and confidentiality.
</thinking>

# healthcare-patient-interview-form - Help Guide
## Purpose
This form is used to collect essential information from patients, including contact details, medical history, and other relevant data, to support healthcare services and treatments.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name, phone number, and email address in the contact information section.
2. Provide information about your medical history, including any relevant details about your conditions.
3. List your emergency contacts, including immediate family members, close friends, and other relevant individuals.
4. Specify your medical conditions, such as diabetes, hypertension, asthma, and cancer.
5. Provide information about your next scheduled visit.
6. Add any comments or notes for the healthcare provider.
7. List any allergies or sensitivities you have.
8. Specify your medications.
9. Provide follow-up information, such as any upcoming appointments or test results.
10. List your emergency contacts, including immediate family members, close friends, and other relevant individuals.

## Field-by-Field Explanation
### Contact Information
* **Contact Information** (`patient_contact_information`, `text`, required: false):
	+ This section is for entering your contact information, including your name, phone number, and email address.
### Medical History
* **Medical History** (`medical_history`, `text`, required: false):
	+ This section is for providing information about your medical history, including any relevant details about your conditions.
### Emergency Contact Information
* **Emergency Contact Information** (`emergency_contact`, `text`, required: false):
	+ This section is for listing your emergency contacts, including immediate family members, close friends, and other relevant individuals.
### Scheduling
* **Scheduling** (`appointment_scheduling`, `text`, required: false):
	+ This section is for providing information about your next scheduled visit.
### Conditions
* **Conditions** (`medical_conditions`, `select_one`, required: true):
	+ Select from the list of available options to specify your medical conditions, such as diabetes, hypertension, asthma, and cancer.
### Next Visit
* **Next Visit** (`next_visit_schedule`, `date`, required: false):
	+ Enter the date and time of your next scheduled visit.
### Comments
* **Comments** (`patient_comments`, `text`, required: false):
	+ Add any comments or notes for the healthcare provider.
### Physician Notes
* **Physician Notes** (`physician_notes`, `text`, required: false):
	+ This section is for the healthcare provider to take notes about your case.
### Allergies
* **Allergies** (`allergies`, `text`, required: false):
	+ List any allergies or sensitivities you have.
### Medications
* **Medications** (`medications`, `text`, required: false):
	+ Specify your current medications.
### Follow-up Information
* **Follow-up Information** (`follow_up`, `text`, required: false):
	+ Provide information about any upcoming appointments or test results.
### Emergency Contacts
* **Emergency Contacts** (`emergency_contacts`, `select_multiple`, required: true):
	+ Select from the list of available options to specify your emergency contacts, including immediate family members, close friends, and other relevant individuals.
