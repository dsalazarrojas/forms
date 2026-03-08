<thinking> 
This form is intended to be a general treatment plan consent form for patients. The main purpose of this form is to gather information from patients regarding their treatment plan, including details about their treatment start and end dates, the medical team involved, and other relevant medical information. This form will likely be used in a healthcare setting, such as a dental clinic or hospital, where patients are receiving treatment. It's essential to ensure that the form is completed accurately and thoroughly, as it will be used to inform the patient's treatment plan and medical decisions.

Before proceeding, please ensure that you have the necessary permissions and consents in place to collect and store this sensitive patient information. Additionally, review the form carefully to ensure that you are capturing all the required information. If you have any questions or concerns, please reach out to your supervisor or IT department for assistance.

</thinking>
# Treatment Plan Consent Form - Help Guide
## Purpose
This form is used to obtain the patient's consent for their treatment plan. It's essential to ensure that the patient understands their treatment details and provides their consent before proceeding with any medical treatment.

## How To Complete This Form
1. Review each section carefully and ensure you are answering all the relevant questions.
2. Select the healthcare providing facility where the treatment will take place.
3. Enter the start and end dates of the treatment plan.
4. Choose the medical team members involved in the patient's care.
5. Select the medical specialist responsible for the patient's treatment.
6. Choose the status of the treatment plan (Active or Inactive).
7. Indicate whether the patient has signed the consent form.
8. Enter any additional contact information for the patient.
9. Indicate whether the facility has signed the consent form.
10. Enter any additional contact information for the facility.

## Field-by-Field Explanation
* **treatment_plan_consent** (`treatment_plan_consent_form`, number, required: false)
	+ This is the first field on the form where the patient provides their consent for treatment.
* **patient_name** (`patient_name`, text, required: false)
	+ Enter your name as the patient.
* **healthcare_providing_facility** (`healthcare_providing_facility`, select_one, required: false)
	+ Select the healthcare facility where you will receive treatment.
* **treatment_start_date** (`treatment_start_date`, date, required: false)
	+ Enter the date when the treatment will start.
* **treatment_end_date** (`treatment_end_date`, date, required: false)
	+ Enter the date when the treatment will end.
* **medical_team** (`medical_team`, select_multiple, required: false)
	+ Select the medical team members involved in your care.
* **medical_specialist** (`medical_specialist`, select_one, required: false)
	+ Select the medical specialist responsible for your treatment.
* **treatment_plan_status** (`treatment_plan_status`, select_one, required: false)
	+ Choose the status of your treatment plan (Active or Inactive).
* **patient_signature** (`patient_signature`, select_one, required: false)
	+ Indicate whether you have signed the consent form.
* **patient_contact_info** (`patient_contact_info`, text, required: false)
	+ Enter any additional contact information for you.
* **facility_signature** (`facility_signature`, select_one, required: false)
	+ Indicate whether the facility has signed the consent form.
* **facility_contact_info** (`facility_contact_info`, text, required: false)
	+ Enter any additional contact information for the facility.
