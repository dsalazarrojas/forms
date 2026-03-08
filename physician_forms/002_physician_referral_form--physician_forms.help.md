# physician_referral_form - Help Guide
## Purpose
This form is used for a physician to refer a patient to another doctor. It collects necessary information about the patient and the referring physician, allowing the referring physician to provide the best possible care for the patient.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields:
	* Referral Doctor
	* Referral Reason
	* Patient Name
	* Patient Email
	* Physician Phone
	* Physician Address
	* Physician License
	* Referral Message
2. Select a specialty from the dropdown menu for the Physician Specialty field.
3. Optionally, provide the Referral Date and Referral Time if they are applicable.
4. Review and verify the information before submitting the form.

## Field-by-Field Explanation
* **Referral Doctor** (`referral_doctor`, text, required): Fill in the name of the doctor you are referring the patient to.
* **Referral Reason** (`referral_reason`, text, required): Specify the reason for the referral, such as a diagnosis or treatment.
* **Patient Name** (`patient_name`, text, required): Enter the patient's full name.
* **Patient Email** (`patient_email`, email, required): Enter the patient's email address.
* **Physician Phone** (`physician_phone`, text, required): Enter the physician's phone number.
* **Physician Address** (`physician_address`, text, required): Enter the physician's address.
* **Physician License** (`physician_license`, text, required): Enter the physician's license number.
* **Referral Date** (`referral_date`, date, optional): Provide the date of the referral if necessary.
* **Referral Time** (`referral_time`, time, optional): Provide the time of the referral if necessary.
* **Physician Specialty** (`physician_specialty`, select_one, required): Select the specialty of the referring physician.
* **Referral Message** (`referral_message`, note, required): Enter any additional information or message for the referred doctor.
* **Physician Address** (`physician_address`, text, required): Enter the physician's address.
