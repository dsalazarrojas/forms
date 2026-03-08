# pre_vaccination_checklist_for_covid_19_vaccines - Help Guide
## Purpose

This form is designed to collect information from patients about their medical history, allergies, and vaccination status before receiving the COVID-19 vaccine.

## How To Complete This Form

1. Please answer all questions truthfully to provide a complete picture of your medical history.
2. Select all relevant answers for each question.
3. If you are unsure about any question, please consult your healthcare provider or contact your local health authority.

## Field-by-Field Explanation

### 1. Patient Identification
* **Patient Name** (`Patient Name`, string): Please enter your full name.
* **Date of Birth** (`Date of Birth`, string): Enter your date of birth in the format MM/DD/YYYY.
* **Patient ID** (`Patient ID`, string): Enter your patient ID number, if available.

### 2. Medical History
* **Medical History** (`Medical History`, text): Describe any pre-existing medical conditions or allergies you have.

### 3. Allergies
* **Allergies** (`Allergies`, select_one): Select any allergies you have:
	+ Penicillin
	+ Amoxicillin
	+ Ibuprofen
	+ Aspirin

### 4. Vaccinations Received
* **Vaccinations Received** (`Vaccinations Received`, select_multiple): Select any vaccinations you have received:
	+ Flu (inactivated)
	+ MMR
	+ Meningococcal
	+ Diphtheria
	+ Tetanus
	+ Pertussis
	+ Measles
	+ Hepatitis A
	+ Hepatitis B
	+ HPV
	+ COVID-19 Vaccine

### 5. Medical Conditions
* **Medical Conditions** (`Medical Conditions`, select_multiple): Select any medical conditions you have:
	+ Heart disease
	+ Lung disease
	+ Kidney disease
	+ Liver disease
	+ HIV/AIDS
	+ Cancer

### 6. Medications
* **Medications** (`Medications`, select_multiple): Select any medications you are currently taking:
	+ Amoxicillin
	+ Prednisone
	+ Amlodipine
	+ Lisinopril

### 7. Emergency Contact
* **Emergency Contact** (`Emergency Contact`, select_multiple): Select a person to contact in case of an emergency:
	+ Spouse
	+ Parent
	+ Child
	+ Friend
	+ Other

### 8. Next of Contact
* **Next of Contact** (`Next of Contact`, select_multiple): Select a person to contact after the vaccination:
	+ Spouse
	+ Parent
	+ Child
	+ Friend
	+ Other

### 9. Contact Number
* **Contact Number** (`Contact Number`, text): Enter the phone number of your emergency contact.

### 10. Insurance
* **Insurance** (`Insurance`, text): Describe your insurance coverage, if any.

### 11. Consent
* **Consent** (`Consent`, select_one): Confirm your consent for the vaccination:
	+ 'True'
	+ 'False'

### 12. Date of Consent
* **Date of Consent** (`Date of Consent`, date): Enter the date of consent.

### 13. Consent Given By
* **Consent Given By** (`Consent Given By`, select_multiple): Select the person who gave consent:
	+ MD
	+ RN
	+ LPN

## Tips

* Please answer all questions truthfully to ensure accurate information is collected.
* If you are unsure about any question, please consult your healthcare provider or contact your local health authority.
* This form is intended to be used by healthcare professionals to assess your eligibility for the COVID-19 vaccine.
