# Antidepressant Informed Consent Form - Help Guide
## Purpose
This form is a comprehensive informed consent form for patients receiving antidepressant medication.

## How To Complete This Form

*   Start by filling in your patient information, including your patient full name and date of birth.
*   Choose your antidepressant medication and select the corresponding medication class.
*   Select the level of explanation provided by your healthcare provider for the indication, benefits, side effects, and other relevant information.
*   Confirm that you have reviewed common side effects and that the potential risks and warnings have been discussed with you.
*   Ensure you understand the implications of stopping the medication and any other relevant information.
*   Confirm that your healthcare provider has discussed alternative treatments with you.
*   Acknowledge that you understand your right to refuse treatment and that you have had all your questions answered.
*   If you have any remaining concerns or questions, please write them in the text field.
*   Finally, confirm that you agree to take the medication as prescribed and sign the form with the current date.

## Field-by-Field Explanation

*   **Patient full name** (`patient_name`, text, required): Please enter your full name as it appears on your ID or insurance card.
*   **Date of birth** (`patient_dob`, date, required): Enter your date of birth in the format MM/DD/YY.
*   **Medical record number** (`medical_record_number`, text, optional): This is your unique identifier in our medical records.
*   **Healthcare provider name** (`provider_name`, text, required): Please enter the name of your healthcare provider.
*   **Antidepressant medication recommended** (`medication_name`, text, required): Choose the medication that has been recommended for you.
*   **Medication class** (`medication_class`, select_one, required): Select the class of medication that has been prescribed for you:
    *   **SSRI (Selective Serotonin Reuptake Inhibitor)**
    *   **SNRI (Serotonin-Norepinephrine Reuptake Inhibitor)**
    *   **Tricyclic**
    *   **MAOI (Monoamine Oxidase Inhibitor)**
    *   **Atypical**
    *   **Other**
*   **Prescribed dosage** (`prescribed_dosage`, text, required): Enter the dosage and instructions provided by your healthcare provider.
*   **Has the indication for this medication been explained?** (`indication_explained`, select_one, required): 
    *   **Yes, thoroughly**
    *   **Yes, adequately**
    *   **Partially explained**
    *   **False**
*   **Have the potential benefits been discussed?** (`benefits_explained`, select_one, required): 
    *   **Yes, thoroughly discussed**
    *   **Yes, discussed**
    *   **Partially discussed**
    *   **False**
*   **Have you reviewed common side effects?** (`side_effects_reviewed`, select_one, required): 
    *   **Yes, extensively**
    *   **Yes, adequately**
    *   **Yes, briefly**
    *   **False**
*   **Have serious risks and warnings been discussed?** (`serious_risks_discussed`, select_one, required): 
    *   **Yes, thoroughly**
    *   **Yes, briefly mentioned**
    *   **Partially discussed**
    *   **False**
*   **Have withdrawal effects been explained?** (`withdrawal_effects`, select_one, required): 
    *   **Yes, thoroughly**
    *   **Yes, adequately**
    *   **Briefly mentioned**
    *   **False**
*   **Have drug interactions been discussed?** (`interaction_risks`, select_one, required): 
    *   **Yes, completely**
    *   **Yes, adequately**
    *   **Partially discussed**
    *   **False**
*   **Monitoring plan explained** (`monitoring_plan`, select_one, required): 
    *   **Yes, detailed plan provided**
    *   **Yes, general plan provided**
    *   **Partially explained**
    *   **False**
*   **Have alternative treatments been discussed?** (`alternative_treatments`, select_one, required): 
    *   **Yes, thoroughly**
    *   **Yes, mentioned**
    *   **Briefly mentioned**
    *   **False**
*   **Patient understands right to refuse treatment** (`right_to_refuse`, select_one, required): 
    *   **Yes, understood**
    *   **Yes, but may have questions**
    *   **Unsure**
*   **Have all your questions been answered?** (`questions_answered`, select_one, required): 
    *   **Yes, completely**
    *   **Mostly answered**
    *   **Some answered**
    *   **False**
*   **Remaining concerns or questions** (`unanswered_concerns`, text, optional): Write any remaining concerns or questions you have here.
*   **I agree to take this antidepressant medication as prescribed** (`agrees_to_treatment`, select_one, required): 
    *   **Yes, I agree**
    *   **No, I do not agree**
    *   **Need more time to decide**
*   **Today is date** (`consent_signature_date`, date, required): Enter the current date in the format MM/DD/YY.
*   **Provider confirms** (`provider_confirms`, select_one, required): 
    *   **Yes, confirmed**
    *   **False**
