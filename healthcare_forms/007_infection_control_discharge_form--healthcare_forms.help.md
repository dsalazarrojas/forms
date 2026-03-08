# Infection Control Discharge Form - Help Guide
## Purpose
The Infection Control Discharge Form is used to collect information related to the discharge of a patient from a healthcare facility, ensuring that all necessary details are captured to prevent the potential spread of infection to other patients or the community.

## How To Complete This Form
1. Ensure the patient's admission date is accurately recorded.
2. Enter the patient's name and ID, if available.
3. Select the discharge date and time.
4. Identify the contact person responsible for the discharge.
5. Specify the contact person's title and phone number.
6. Indicate which infection control measures were taken during the patient's stay.
7. Provide any additional comments about the patient's condition or the discharge process.

## Field-by-Field Explanation
* **Admission Date** (`admission_date`, date, required: false): Enter the date the patient was admitted to the facility. This date is essential for tracking the patient's admission history.
* **Patient Name** (`patient_name`, text, required: false): Enter the patient's name as it appears on their medical records. If the patient's name is not available or known, enter "Unknown".
* **Patient ID** (`patient_id`, text, required: false): Enter the patient's ID number, if available. This can be a patient ID number or any other unique identifier assigned to the patient.
* **Discharge Date** (`discharge_date`, date, required: false): Enter the date the patient was discharged from the facility. This date is crucial for tracking the patient's discharge history.
* **Discharge Time** (`discharge_time`, time, required: false): Enter the time the patient was discharged from the facility. This time is helpful for scheduling follow-up appointments or procedures.
* **Contact Person** (`contact_person`, text, required: false): Identify the contact person responsible for the patient's care during their stay.
* **Contact Title** (`contact_person_title`, text, required: false): Enter the contact person's title or position. This can be a nurse, doctor, or other healthcare professional.
* **Contact Person Phone** (`contact_person_phone`, text, required: false): Enter the contact person's phone number.
* **Infection Control Measures** (`infection_control_measures`, select_multiple, required: true): Select all applicable infection control measures that were taken during the patient's stay. These measures include:
	+ Antimicrobial stewardship: Using antibiotics judiciously and responsibly.
	+ Hand hygiene: Maintaining proper hand hygiene practices.
	+ Isolation: Isolating the patient to prevent the spread of infection.
	+ Infection control protocols: Following established protocols to prevent the spread of infection.
	+ Other: Select "Other" if you want to specify a different measure not listed above.
* **Additional Comments** (`additional_comments`, text, required: false): Enter any additional comments or notes about the patient's condition or the discharge process.
