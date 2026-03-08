<thinking>
The purpose of this form is to gather information and consent from patients or their parents/guardians for immunizations. The form will likely be used by healthcare professionals to schedule and administer vaccines to patients. The form should only be completed by a patient or their parent/guardian who has provided consent for the vaccine administration. To prevent duplication, it's essential to ensure that each form is completed only once per patient.
</thinking>

# Immunization-Appointment-and-Consent-Form - Help Guide
## Purpose
The Immunization-Appointment-and-Consent-Form is used to gather information and consent from patients or their parents/guardians for immunizations. This form helps healthcare professionals schedule and administer vaccines to patients.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's information (Page 1).
2. Add the contact information for the patient (Page 2).
3. Enter the name of the patient's parent or legal guardian (Page 3).
4. Select the vaccine to be administered (Page 4).
5. Enter the date and time of the appointment (Page 5 and 6).
6. Enter the dose of the vaccine to be administered (Page 7).
7. Read and sign the consent section (Page 8) to indicate that you understand the vaccine information.

## Field-by-Field Explanation
### Page 1: Patient Information
* **Patient Information** (`patient_info`, text, optional): Enter the patient's name, age, and other identifying information.

### Page 2: Contact Information
* **Contact Information** (`contact_info`, text, optional): Enter the patient's contact information, including phone number and address.

### Page 3: Parent or Legal Guardian Name
* **Parent or Legal Guardian Name** (`guardian_name`, text, optional): Enter the name of the patient's parent or legal guardian.

### Page 4: Vaccine Selection
* **Vaccine** (`vaccine_1`, select_one, required): Select the vaccine to be administered:
	+ Hepatitis B
	+ MMR (Measles, Mumps, and Rubella)
	+ Dtap (Diphtheria, Tetanus, and Pertussis)
	+ Hib (Haemophilus influenzae type b)

### Page 5: Date
* **Date** (`date`, date, optional): Enter the date of the appointment.

### Page 6: Time
* **Time** (`time`, time, optional): Enter the time of the appointment.

### Page 7: Dose
* **Dose** (`dose`, number, optional): Enter the dose of the vaccine to be administered.

### Page 8: Consent
* **Consent** (`consent`, note, optional): Read and sign this section to indicate that you understand the vaccine information.
