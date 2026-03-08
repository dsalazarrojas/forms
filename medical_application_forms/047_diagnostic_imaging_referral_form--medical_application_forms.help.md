# Diagnostic Imaging Referral Form - Help Guide
## Purpose
This form is designed to assist healthcare professionals in referring patients for diagnostic imaging services. It collects the necessary information to provide a complete and accurate referral.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's information, including their name and medical record number, if applicable.
2. Select the relevant medical condition that best describes the patient's situation.
3. Choose the imaging services required for the patient, such as MRI, CT scan, ultrasound, or X-ray.
4. Enter the contact number and medical provider's name, if applicable.
5. Provide a brief medical history and any additional information that may be relevant to the referral.
6. Enter any recommendations or additional information from the radiologist, if applicable.
7. Select the patient's medical specialty, if applicable.

## Field-by-Field Explanation
- **Patient Information** (`patient_info`, text, required: false):
    Enter the patient's name and any other relevant details, such as their medical record number.
- **Medical Condition** (`medical_condition`, select_one, required: false):
    Select the option that best describes the patient's medical condition, such as "Imaging Referral" or "Other".
- **Imaging Services** (`imaging_services`, select_multiple, required: false):
    Choose all the imaging services required for the patient, such as MRI, CT scan, ultrasound, or X-ray.
- **Patient Name** (`patient_name`, text, required: false):
    Enter the patient's name.
- **Medical Provider Name** (`medical_provider_name`, text, required: false):
    Enter the name of the medical provider, if applicable.
- **Contact Number** (`contact_number`, text, required: false):
    Enter the contact number for the medical provider or patient, if applicable.
- **Medical Record Number** (`medical_record_number`, text, required: false):
    Enter the patient's medical record number, if applicable.
- **Medical History** (`medical_history`, note, required: false):
    Provide a brief summary of the patient's medical history.
- **Radiologist Recommendation** (`radiologist_recommendation`, text, required: false):
    Enter any recommendations or comments from the radiologist, if applicable.
- **Radiologist Recommendation Additional Info** (`radiologist_recommendation_additional_info`, text, required: false):
    Enter any additional information from the radiologist.
- **Medical Specialty** (`medical_specialty`, select_one, required: false):
    Select the patient's medical specialty, if applicable.
- **Referral Requesting Provider** (`referral_requesting_provider`, text, required: false):
    Enter the name of the provider requesting the referral.

# Tips
- Ensure that all fields are completed accurately and thoroughly.
- Review and verify the information entered before submitting the form.
- If unsure about any field, refer to your medical knowledge or consult with a colleague.
- This form is for internal use only and is not intended for public access.
