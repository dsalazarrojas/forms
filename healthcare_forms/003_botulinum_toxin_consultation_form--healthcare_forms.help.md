# Botulinum Toxin Consultation Form - Help Guide
## Purpose
The Botulinum Toxin Consultation Form is designed to gather essential information about patients, including their personal details, medical history, and preferences regarding botulinum toxin treatment. This form helps healthcare professionals to assess the patient's eligibility for botulinum toxin injections and provide personalized care.

## How To Complete This Form

1.  Fill out the patient's **Personal Details** section:
    * Enter your **Full Name** accurately, as this will be used as a reference in your treatment.
    * Enter your **Date of Birth**, in the format MM/DD/YYYY (e.g., 01/01/1990).
    * Choose your **Gender** from the provided options.
    * Enter your **Phone Number** for contact and appointment purposes.
    * Provide a valid **Email Address** for appointment confirmations.
2.  In the **Medical History** section:
    * List any **Known Allergies**, including medications or substances you're allergic to.
    * Include all your **Current Medications**, including dosages.
3.  Indicate your **History of neuromuscular disorders**, such as myasthenia gravis or ALS.
4.  Confirm your **Pregnancy Status** and **Breastfeeding** status, as this may impact treatment.
5.  If applicable, disclose any **Bleeding Disorders** or **Anticoagulant Use**.
6.  In the **Consultation Details** section:
    * Select areas you'd like to receive botulinum toxin treatment on from the provided options (Forehead, Between eyebrows, Crow feet, Other facial areas, Other).
    * State your **Treatment Goals**, specifying what you hope to achieve.
7.  Confirm your understanding of **Realistic Expectations** about the treatment and its outcomes.
8.  In the **Consent** section:
    * Check that you've understood the **Risks and Benefits** of the treatment.
    * Confirm your agreement to this consultation and consent to the treatment.

## Field-by-Field Explanation

*   **Full Name** (`patient_name`, text, required): Enter your legal name accurately.
*   **Date of Birth** (`date_of_birth`, date, required): Enter in the format MM/DD/YYYY (e.g., 01/01/1990).
*   **Gender** (`gender`, select_one, required): Choose your gender from the provided options.
*   **Phone Number** (`phone_number`, text, required): Enter your best contact number.
*   **Email Address** (`email`, email, required): Provide a valid email address for appointment confirmations.
*   **Known Allergies** (`allergies`, text, required): List any allergies to medications or substances.
*   **Current Medications** (`current_medications`, text, required): Include dosages of all medications.
*   **History of neuromuscular disorders** (`neuromuscular_disorder`, select_one, required): Indicate your history of neuromuscular disorders like myasthenia gravis or ALS.
*   **Pregnancy Status** (`pregnancy_status`, select_one, required): Confirm your pregnancy status.
*   **Breastfeeding** (`breastfeeding`, select_one, required): Confirm your breastfeeding status.
*   **Bleeding Disorders** (`bleeding_disorders`, select_one, required): Disclose any bleeding disorders or anticoagulant use.
*   **Desired treatment areas** (`treatment_areas`, select_multiple, required): Select areas you'd like to receive botulinum toxin treatment on from the provided options.
*   **Primary treatment goals** (`treatment_goals`, text, required): Specify what you hope to achieve with the treatment.
*   **Realistic Expectations** (`realistic_expectations`, select_one, required): Confirm your understanding of realistic outcomes.
*   **I understand the risks and benefits** (`risks_understood`, select_one, required): Check to confirm you've understood the risks and benefits of the treatment.
*   **I consent to this consultation** (`consultation_agreement`, select_one, required): Confirm your agreement and consent to this consultation and treatment.

This guide is designed to be user-friendly and help patients complete the form accurately, ensuring a smooth and informative consultation process.
