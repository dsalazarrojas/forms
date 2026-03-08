<thinking>
This form is used to obtain informed consent from patients for antidepressant treatment. The purpose of this form is to document the patient's understanding of the treatment, its potential benefits and risks, and to ensure that the patient has been informed and willing to undergo treatment. This form is typically used in a medical setting to provide a standardized and comprehensive way to obtain patient consent. It is essential to use this form for every patient undergoing antidepressant treatment to ensure that they understand the treatment and its implications. This form should not be used for patients who are already aware of the treatment and its implications, and for patients who are unable to provide informed consent (e.g., minors, incompetent patients, etc.). 
</thinking>

# Antidepressant Informed Consent Form - Help Guide
## Purpose
This form is used to obtain informed consent from patients for antidepressant treatment, ensuring they understand the treatment, its benefits, and risks.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out your full name, date of birth, and medical record number (MRN) in the corresponding fields.
2. Select the primary diagnosis for your treatment.
3. Choose the prescribed medication and its type.
4. Explain the purpose of the treatment.
5. Describe the expected benefits of the treatment.
6. Indicate when you can expect improvements in your condition.
7. In the "Risks and Side Effects" section, select all common side effects that were discussed with your healthcare provider.
8. In the "Serious Risks" section, select all serious side effects that were discussed with your healthcare provider.
9. Indicate if the black box warning about suicidal thoughts was discussed.
10. Confirm that all your current medications were reviewed.
11. Indicate if alcohol and substance use were discussed with your healthcare provider.
12. Confirm if any dietary restrictions were discussed.
13. In the "Monitoring and Follow-up" section, indicate how you will be monitored and when follow-up appointments are scheduled.
14. Confirm if a discontinuation plan was discussed.
15. In the "Alternative Treatments" section, select all alternative treatments that were discussed with your healthcare provider.
16. Confirm if all patient questions were answered.
17. Indicate if you understand the treatment and its implications.
18. Confirm if consent was given voluntarily.
19. Confirm if you consent to the treatment.
20. Sign and date the form.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, text, required): Enter your full name as it appears on your medical record.
* **Date of Birth** (`patient_dob`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Patient ID or MRN** (`patient_id`, text, required): Enter your medical record number (MRN) or other unique identifier.
* **Consent Date** (`consent_date`, date, required): Enter the date you gave consent for treatment.
* **Prescribing Provider** (`prescribing_provider`, text, required): Enter the name of your prescribing healthcare provider.
* **Diagnosis** (`diagnosis`, select_one, required): Select the primary diagnosis for your treatment.
* **Prescribed Medication** (`medication_name`, select_one, required): Select the name of the prescribed medication.
* **Medication Class** (`medication_class`, select_one, required): Select the type of medication (e.g., SSRI, SNRI, etc.).
* **Purpose of Treatment** (`purpose_section`, note, required): This is a note section where you can explain the purpose of the treatment.
* **Purpose of Medication** (`treatment_purpose`, text, required): Describe the purpose of the medication.
* **Expected Benefits** (`expected_benefits`, text, required): Describe the expected benefits of the treatment.
* **Timeline for Effect** (`timeline_for_effect`, text, required): Describe when you can expect improvements in your condition.
* **Common Side Effects** (`common_side_effects`, select_multiple, required): Select all common side effects that were discussed with your healthcare provider.
* **Serious Risks** (`serious_risks`, select_multiple, required): Select all serious side effects that were discussed with your healthcare provider.
* **Black Box Warning** (`black_box_warning`, select_one, required): Indicate if the black box warning about suicidal thoughts was discussed.
* **Current Medications Reviewed** (`current_medications`, select_one, required): Confirm if all your current medications were reviewed.
* **Alcohol and Substance Use Discussed** (`substance_use_discussed`, select_one, required): Indicate if alcohol and substance use were discussed with your healthcare provider.
* **Dietary Restrictions** (`dietary_restrictions`, select_one, required): Confirm if any dietary restrictions were discussed.
* **Monitoring Plan** (`monitoring_plan`, text, required): Describe how you will be monitored for treatment effectiveness.
* **Follow-up Schedule** (`follow_up_schedule`, text, required): Describe when follow-up appointments are scheduled.
* **Discontinuation Plan Discussed** (`discontinuation_plan`, select_one, required): Confirm if a discontinuation plan was discussed.
* **Alternative Treatments** (`alternatives_discussed`, select_multiple, required): Select all alternative treatments that were discussed with your healthcare provider.
* **Patient Questions** (`patient_questions`, select_one, required): Confirm if all patient questions were answered.
* **Patient Understanding** (`patient_understanding`, select_one, required): Indicate if you understand the treatment and its implications.
* **Voluntary Consent** (`voluntary_consent`, select_one, required): Confirm if consent was given voluntarily.
* **Patient Consent** (`patient_consent`, select_one, required): Confirm if you consent to treatment.
* **Patient Signature** (`patient_signature`, text, required): Sign and date the form digitally.
* **Signature Date** (`signature_date`, date, required): Enter the date you signed the form.
* **Parent or Guardian Signature** (`guardian_signature`, text, optional): If you are a minor, enter your parent or guardian's signature.
* **Provider Signature** (`provider_signature`, text, required): Your healthcare provider's signature.
* **Witness Signature** (`witness_signature`, text, optional): If required, enter the witness's signature.
