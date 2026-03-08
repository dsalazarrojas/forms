# Hepatitis B Declination Form - Help Guide
## Purpose
The Hepatitis B Declination Form is designed to collect essential medical information from patients, allowing healthcare providers to determine their Hepatitis B vaccination status and take necessary measures for patient care.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your patient information on the first page.
2. Select your vaccination status from the provided options on page 2.
3. Enter your vaccination date (if applicable) on page 3.
4. Sign and date the form as a patient on page 4 to confirm your declination status.
5. Sign and date the form as a healthcare provider on page 5 to verify the declination status.

## Field-by-Field Explanation

* **Patient Information (Patient Information)** (`patient_info`, text, optional)
	+ This page is where you will enter your personal details, including your name and contact information.
* **Vaccination Status (Vaccination Status)** (`vaccination_status`, select_one, required)
	+ Select one of the following options to declare your Hepatitis B vaccination status:
		- Not Declinated: You have not been vaccinated for Hepatitis B.
		- Declinated: You have been vaccinated for Hepatitis B.
		- Unable to verify: Your vaccination status is unable to be confirmed.
* **Vaccination Date (Vaccination Date)** (`vaccination_date`, date, optional)
	+ If you have been vaccinated for Hepatitis B, enter the date of your vaccination in this format: MM/DD/YYYY.
* **Patient Signature (Patient Signature)** (`patient_signature`, note, required)
	+ This is your declaration as a patient, confirming your vaccination status.
* **Healthcare Provider Signature (Healthcare Provider Signature)** (`healthcare_provider_signature`, select_one, required)
	+ This is your verification as a healthcare provider, confirming the patient's vaccination status.

## Tips
- Ensure you complete the form accurately and honestly to ensure proper medical care.
- If you are unsure about your vaccination status or have any questions, consult your healthcare provider.
- This form is for informational purposes only and should not be used for commercial use or resale.
