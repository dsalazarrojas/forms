</thinking>

# Health Evaluation Form - Help Guide
## Purpose
The Health Evaluation Form is a tool used to gather essential information from patients for health evaluations. This form is designed to be completed by patients to provide healthcare professionals with relevant details about their medical condition, history, and preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your Patient Name.
2. Select the Medical Condition that best describes your current health status.
3. Enter your Date Of Birth.
4. Choose the Medical Specialty that is relevant to your condition.
5. Select any medical teams or professionals involved in your care (optional).
6. Provide a brief description of your Medical History.
7. List any allergies you have (select multiple if applicable).
8. Enter the Evaluation Results from your doctor or healthcare provider.
9. Offer Follow Up Recommendations from your doctor or healthcare provider.
10. Sign and date the form to confirm completion (optional for Patient Signature and Doctor Signature).

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter your full name as it appears on your identification documents.
* **Medical Condition** (`medical_condition`, text, required): Describe your current medical condition, e.g., "Hypertension" or "Diabetes".
* **Date Of Birth** (`date_of_birth`, date, required): Enter your birthdate in the YYYY-MM-DD format.
* **Medical History** (`medical_history`, select_one, required): Choose how you would describe your medical history, e.g., "High" or "Low".
* **Allergies** (`allergies`, select_multiple, optional): List any medications, substances, or foods you are allergic to.
* **Medical Specialty** (`medical_specialty`, select_one, required): Select the medical specialty that is relevant to your condition, e.g., "Cardiology" or "Neurology".
* **Medical Team** (`medical_team`, select_multiple, optional): Choose the medical team members involved in your care, e.g., "Dr Smith" or "Dr Johnson".
* **Evaluation Results** (`evaluation_results`, text, required): Enter the results of your evaluation, e.g., "Clear" or "Abnormal".
* **Follow Up Recommendations** (`follow_up_recommendations`, text, required): Provide any follow-up recommendations from your doctor or healthcare provider.
* **Patient Signature** (`patient_signature`, note, optional): Sign and date this section to confirm completion (required for electronic submission).
* **Doctor Signature** (`doctor_signature`, note, optional): Sign and date this section to confirm completion (required for electronic submission).
* **Timestamp** (`timestamp`, date, optional): Enter the date and time of completion in the YYYY-MM-DD format.

## Tips

This form is designed to be completed by patients in a healthcare setting. Please ensure to fill it in accurately and thoroughly to provide valuable information for your healthcare team.
