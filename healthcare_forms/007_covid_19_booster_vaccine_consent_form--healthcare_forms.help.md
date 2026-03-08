<thinking>...</thinking>

# COVID 19 Booster Vaccine Consent Form - Help Guide
## Purpose
This form is intended to gather essential information and obtain consent from patients before administering the COVID-19 booster vaccine. It is crucial to understand the purpose of this form and ensure that the patient is properly informed about the vaccine's benefits, risks, and any potential contraindications.

## How To Complete This Form
To complete this form, follow these steps:

1.  Review the form carefully and ensure you understand the information required.
2.  Fill in the patient's full name and medical record number (MRN) if applicable.
3.  Enter your age, email address, and phone number for contact purposes.
4.  Review the vaccine information provided and check the corresponding checkboxes to indicate your understanding and consent.

## Field-by-Field Explanation
*   **Patient Full Name** (`patient_name`, text, required): Enter the patient's full name.
*   **Medical Record Number** (`mrn`, text, optional): Enter the patient's medical record number if available.
*   **Age** (`age`, number, required): Enter the patient's age in years.
*   **Email Address** (`contact_email`, email, required): Enter the patient's email address for contact purposes.
*   **Phone Number** (`contact_phone`, text, required): Enter the patient's phone number for contact purposes.
*   **Vaccine Information** (`vaccine_section`, note, required): This section provides information about the COVID-19 booster vaccine. Review the vaccine's benefits, risks, and potential contraindications carefully.
*   **I have reviewed information about the booster vaccine** (`understanding`, select_one, required): Select 'True' if you have reviewed the information about the vaccine.
*   **I understand benefits of the booster vaccine** (`benefits_understanding`, select_one, required): Select 'True' if you understand the benefits of the vaccine.
*   **I understand potential risks and side effects** (`risks_understanding`, select_one, required): Select 'True' if you understand the potential risks and side effects of the vaccine.
*   **Prior allergic reactions to vaccines or components** (`prior_allergic_reaction`, select_one, required): Select 'True' if you have had any allergic reactions to vaccines or components in the past.
*   **Currently ill or have fever** (`current_illness`, select_one, required): Select 'True' if you are currently ill or have a fever.
*   **Other vaccines received in past 14 days** (`other_vaccines`, select_one, required): Select 'True' if you have received any other vaccines in the past 14 days.
*   **Immunocompromised or take immunosuppressive medications** (`immunocompromised`, select_one, required): Select 'True' if you are immunocompromised or take immunosuppressive medications.
*   **Pregnant or nursing** (`pregnant_nursing`, select_one, required): Select 'True' if you are pregnant or nursing.
*   **I consent to receive the COVID-19 booster vaccine** (`consent_signature`, select_one, required): Select 'I Consent' if you agree to receive the vaccine.
*   **Date of Consent** (`consent_date`, date, required): Enter the date of your consent after selecting 'I Consent'.
