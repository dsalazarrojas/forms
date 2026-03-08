<thinking>
This form is designed for patients to provide information required for medical waiver purposes. It is intended for individuals who need to make informed decisions regarding their health care, particularly in the context of the COVID-19 pandemic. 

Before proceeding, please note that this form is specific to the context of COVID-19 and should not be used for other medical purposes without proper adaptation and approval. 

This form is a self-reporting tool and is not intended to replace professional medical advice or assessments. If you are unsure or have questions about any section, please consult with your healthcare provider before continuing. 

Please ensure that the information provided is accurate and up-to-date, as it will be used to guide medical decisions.

</thinking>

# COVID 19 Health Waiver Form - Help Guide
## Purpose
This form is designed to gather necessary information from patients for informed decision-making regarding their health care, particularly in relation to COVID-19.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Please fill out all required fields (marked as `required: true`).
2. Answer each question carefully, providing accurate information about your health status and medical history.
3. Review each section before proceeding to ensure you understand the questions and their relevance to your situation.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter your full name as it appears on your official identification.
* **Date of Birth** (`patient_dob`, date, required): Enter your date of birth in the format `mm/dd/yyyy`.
* **Patient ID** (`patient_id`, text, required): Enter your ID number or any other identifier provided by your healthcare provider.
* **Phone Number** (`phone_number`, text, required): Enter your contact phone number.
* **Email Address** (`email_address`, email, required): Enter your email address.
* **Type of Waiver** (`waiver_type`, select_one, required): Choose the type of waiver you are requesting (`Vaccination waiver`, `Testing waiver`, `Treatment waiver`, `Liability waiver`, or `Other`).
* **Previous COVID-19 Diagnosis** (`previous_covid`, select_one, required): Answer whether you have been previously diagnosed with COVID-19 (`Yes`, `No`, or `Unsure`).
* **Date of Diagnosis** (`covid_diagnosis_date`, date, not required): Enter the date of your previous COVID-19 diagnosis (if applicable).
* **Current Health Status** (`current_health_status`, select_one, required): Rate your current health status (`Excellent`, `Good`, `Fair`, or `Poor`).
* **Chronic Health Conditions** (`chronic_conditions`, text, not required): If you have chronic health conditions, list them here.
* **Current Medications** (`current_medications`, text, not required): List any current medications you are taking.
* **Known Allergies** (`allergies`, text, not required): List any known allergies.
* **Consulted with Physician About Decision** (`physician_consulted`, select_one, required): Confirm whether you have consulted with a physician about your decision (`Yes` or `No`).
* **Physician Recommendation** (`physician_recommendation`, text, not required): If your physician recommended a particular course of action, enter it here.
* **Understand the Risks of Declining Vaccination** (`risks_understood`, select_one, required): Confirm that you understand the risks of declining vaccination (`Yes` or `No`).
* **Understand the Benefits of Vaccination** (`benefits_understood`, select_one, required): Confirm that you understand the benefits of vaccination (`Yes` or `No`).
* **Voluntarily Waive Right to Vaccination** (`waiver_acknowledged`, select_one, required): Confirm that you voluntarily waive your right to vaccination (`Yes` or `No`).
* **Accept Responsibility for Health Decision** (`liability_accepted`, select_one, required): Confirm that you accept responsibility for your health decision (`Yes` or `No`).
* **Date of Waiver** (`waiver_date`, date, required): Enter the date of the waiver.
* **Patient Signature** (`waiver_signature`, text, required): Sign your name to confirm that the information provided is accurate and that you have made an informed decision.
