<thinking>...</thinking>

# diagnostic_imaging_referral_form - Help Guide
## Purpose
The diagnostic imaging referral form is a medical referral form designed for healthcare providers to gather essential information for imaging services. This form helps in creating a comprehensive record of the patient's condition, medical history, and imaging needs. It is intended to ensure that the imaging services requested are accurate, up-to-date, and in line with the patient's current health status.
## How To Complete This Form
To complete the diagnostic imaging referral form, follow these steps:

1.  Enter the provider's information, including your name and contact details.
2.  Provide patient information, including their name, date of birth, and medical record ID.
3.  Describe the patient's current condition, highlighting any relevant medical history.
4.  Specify the imaging services required, such as MRI, CT, or X-ray.
5.  Choose the radiologist's review and final imaging recommendation from the available options.
6.  Select the imaging modality to be used (e.g., Yes or No).
7.  Enter the date for the final imaging recommendation.
8.  Write any additional comments or notes related to the patient's condition.
9.  Specify the clinical imaging recommendation.

## Field-by-Field Explanation
* **Provider Information** (`provider_information`, text, required: false): Enter your name and contact information as a healthcare provider.
* **Patient Information** (`patient_information`, text, required: false): Enter the patient's name, date of birth, and medical record ID for accurate identification.
* **Imaging Services** (`imaging_services`, text, required: false): Describe the imaging services required for the patient's condition (e.g., MRI, CT, X-ray).
* **Patient Condition** (`patient_condition`, text, required: false): Describe the patient's current condition, including any relevant medical history.
* **Referring Physician** (`referring_physician`, text, required: false): Enter the name and contact information of the referring physician.
* **Imaging Request** (`imaging_request`, text, required: false): Specify the specific imaging request for the patient's condition.
* **Patient History** (`patient_history`, text, required: false): Describe the patient's medical history, including any relevant allergies or previous medical conditions.
* **Clinical Finding** (`clinical_finding`, text, required: false): Enter any notable clinical findings related to the patient's condition.
* **Patient Medical Records** (`patient_medical_records`, text, required: false): Enter any additional medical records relevant to the patient's condition.
* **Imaging Modality** (`imaging_modality`, select_multiple, required: false): Select 'Yes' or 'No' to indicate whether the imaging modality is required.
* **Radiologist Review** (`radiologist_review`, select_one, required: false): Select the radiologist's review from the available options.
* **Final Imaging Recommendation** (`final_imaging_recommendation`, select_one, required: false): Select the final imaging recommendation from the available options.
* **Imaging Recommendation Date** (`imaging_recommendation_date`, date, required: false): Enter the date for the final imaging recommendation.
* **Imaging Report** (`imaging_report`, text, required: false): Enter any additional comments or notes related to the patient's condition.
* **Clinical Imaging Recommendation** (`clinical_imaging_recommendation`, text, required: false): Enter the clinical imaging recommendation for the patient's condition.
