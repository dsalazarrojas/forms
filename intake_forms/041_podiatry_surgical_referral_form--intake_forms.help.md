# Podiatry Surgical Referral Form - Help Guide
## Purpose
This guide is to help you understand the purpose and usage of the Podiatry Surgical Referral Form.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in the required fields: `clinical_context`, `referral_info`, `clinic_details`, `doctor_info`, `surgical_details`, `consent`, and `patient_relationship`.
2. You can attach any relevant medical documents in the `medical_documents` field.
3. Optionally, provide additional supporting documents in the `supporting_documents` field.
4. You can add any additional notes or comments in the `notes` field.
5. If necessary, enter follow-up details in the `follow_up_details`, `follow_up_date`, `follow_up_time`, and `follow_up_location` fields.

## Field-by-Field Explanation

* **Patient Details**: A page to collect basic patient information. 
	+ (`patient_details`, text, required: false)

* **Clinical Context**: A page to collect information about the clinical context of the referral. This includes any relevant medical history, symptoms, or diagnoses. 
	+ (`clinical_context`, text, required: true)

* **Referral Info**: A page to gather essential referral information, such as referral date and reason. 
	+ (`referral_info`, text, required: true)

* **Medical Documents**: A page to attach any relevant medical documents for review. 
	+ (`medical_documents`, text, required: false)

* **Supporting Documents**: A page to attach any additional supporting documents. 
	+ (`supporting_documents`, text, required: false)

* **Clinic Details**: A page to collect essential clinic information, such as clinic address and contact numbers. 
	+ (`clinic_details`, text, required: true)

* **Doctor Info**: A page to provide information about the doctor involved in the referral. 
	+ (`doctor_info`, text, required: true)

* **Surgical Details**: A page to gather essential surgical details, including the operation date and time. 
	+ (`surgical_details`, text, required: true)

* **Consent**: A page to confirm the patient's consent for the referral. 
	+ (`consent`, select_one, required: true)

* **Consent**: A selection of options to confirm the patient's consent for the referral.
	+ (`consent`, select_one, required: true)

* **Notes**: A page to add any additional comments or notes about the referral. 
	+ (`notes`, text, required: false)

* **Patient Relationship**: A page to determine the patient's relationship with the referring doctor or clinic. 
	+ (`patient_relationship`, select_multiple, required: true)

* **Patient Relationship**: A selection of options to determine the patient's relationship with the referring doctor or clinic.
	+ (`patient_relationship`, select_multiple, required: true)

* **Follow Up Details**: A page to gather essential follow-up information. 
	+ (`follow_up_details`, text, required: false)

* **Follow Up Date**: A page to schedule the follow-up appointment date. 
	+ (`follow_up_date`, date, required: false)

* **Follow Up Time**: A page to schedule the follow-up appointment time. 
	+ (`follow_up_time`, time, required: false)

* **Follow Up Location**: A page to gather the follow-up appointment location. 
	+ (`follow_up_location`, text, required: false)

## Tips

* Please ensure that all required fields are filled before submitting the form.
* You can modify or add any fields as necessary to accommodate your specific needs.
* If you are unsure about any field or the referral process, please refer to your institution's guidelines or consult with a qualified professional.
