# X Ray Referral Form - Help Guide
## Purpose
The X Ray Referral Form is used to refer patients for X Ray examinations. This form collects the necessary information from the patient and the doctor to facilitate the X Ray examination process.

## How To Complete This Form
To complete this form, follow these steps:

1. Gather the patient's information:
	* Enter the patient's name.
	* Enter the patient's phone number.
	* Enter the patient's email (if available).
2. Provide the X Ray request:
	* Enter the X Ray request.
3. Record the medical history:
	* Enter the patient's medical history.
4. Add any additional information:
	* Check the "Medical Department" field to specify if the X Ray is requested for the patient's current department.
	* Enter the referral date and time.
	* Enter any additional notes from the doctor.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter the patient's name as it appears on their medical records.
* **Patient Phone** (`patient_phone`, text, required): Enter the patient's phone number for contact purposes.
* **Patient Email** (`patient_email`, email, optional): Enter the patient's email address (if available).
* **Doctor Name** (`doctor_name`, text, required): Enter the name of the doctor referring the patient for the X Ray examination.
* **Doctor Phone** (`doctor_phone`, text, required): Enter the doctor's phone number for contact purposes.
* **Medical Department** (`medical_department`, select_one, optional): Check "Yes" if the X Ray is requested for the patient's current department.
* **X Ray Request** (`x_ray_request`, text, required): Enter the reason for the X Ray examination.
* **Medical History** (`medical_history`, text, optional): Enter any relevant medical history that may be helpful for the X Ray examination.
* **Referral Date** (`referral_date`, date, optional): Enter the date of the referral.
* **Referral Time** (`referral_time`, time, optional): Enter the time of the referral.
* **Doctor Note** (`doctor_note`, note, optional): Enter any additional notes from the doctor.
* **Patient Information** (`patient_information`, text, optional): Enter any additional information about the patient.
