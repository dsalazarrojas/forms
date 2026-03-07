<thinking>

This form is designed to collect information about a patient's Hepatitis B declination status, which is a process for excluding someone from receiving a certain vaccination. The form aims to gather relevant details such as the patient's name, vaccination status, and medical history, including dates of last vaccination and testing. This form is intended for healthcare professionals to use for clinical purposes.

To prevent duplication, please ensure that you are not submitting duplicate entries for the same patient. Please also note that this form is an original adaptation, not affiliated with any specific form platform.

</thinking>

# hepatitis_b_declination_form - Help Guide
## Purpose
This form is for healthcare professionals to collect and document a patient's Hepatitis B declination status, medical history, and vaccination details for clinical purposes.

## How To Complete This Form
1. Enter the provider's name in the "Provider Name" field.
2. Enter the patient's name in the "Patient Name" field.
3. Select the patient's vaccination status from the "Vaccination Status" field.
4. If applicable, select the date of last vaccination and the last dose date from the respective fields.
5. Enter the patient's vaccination schedule from the "Vaccination Schedule" field.
6. Enter the patient's medical record number and patient ID number in their respective fields.
7. Select the declination status and date from the "Declination Provider Signature" and "Declination Date" fields.
8. Finally, sign the "Declination Date Signed By" field with the name of the healthcare provider who performed the declination.

## Field-by-Field Explanation
* **Provider Name** (`provider_name`, text, required): Enter the name of the healthcare provider who is filling out this form.
* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Vaccination Status** (`vaccination_status`, select_one, optional): Select the patient's current vaccination status:
	+ Hepatitis B vaccinated
	+ Unvaccinated
	+ Not vaccinated (but have antibodies)
	+ Not vaccinated (but have risk factors)
	+ Other (please specify)
* **Date of Last Vaccination** (`date_of_last_vaccination`, date, optional): Enter the date of the patient's last Hepatitis B vaccination, if applicable.
* **Date of Last Testing** (`date_of_last_testing`, date, optional): Enter the date of the patient's last testing, if applicable.
* **Vaccination Schedule** (`vaccination_schedule`, select_multiple, optional): Select the patient's vaccination schedule:
	+ Completed 2 dose series
	+ In progress
* **Last Dose Date** (`last_dose_date`, date, optional): Enter the date of the patient's last vaccination dose, if applicable.
* **Patient ID Number** (`patient_id_number`, text, optional): Enter the patient's ID number.
* **Medical Record Number** (`medical_record_number`, text, optional): Enter the patient's medical record number.
* **Declination Date** (`declination_date`, date, optional): Enter the date of the declination.
* **Declination Provider Signature** (`declination_provider_signature`, select_one, optional): Select whether the declination was signed by the provider:
	+ True
	+ False
	+ Not Signed
* **Declination Date Signed By** (`declination_date_signed_by`, text, optional): Enter the name of the healthcare provider who signed the declination.

Note: This form is designed to be used for clinical purposes and is intended for healthcare professionals only.
