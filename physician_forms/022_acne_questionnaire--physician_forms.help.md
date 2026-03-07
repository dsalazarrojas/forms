<thinking>
We need to check that the form purpose is to gather patient information for acne diagnosis and treatment. This guide should cover the basics of the form, including its purpose, how to fill it out, and what each field means. This will help users understand what to expect when completing the form, and how to provide accurate and useful information for diagnosis. We also need to check that all fields have a clear label, type, and description to avoid confusion.
</thinking>

# Acne Questionnaire - Help Guide
## Purpose
The Acne Questionnaire is a form designed to collect information about patients with acne to aid in diagnosis and treatment. It covers various aspects of acne, including duration, severity, and triggers, as well as medical history and lifestyle factors.
## How To Complete This Form
To complete the form, follow these steps:

1. Enter the patient's full name and date of birth.
2. Provide the patient's contact phone number and email address (optional).
3. Answer questions about the duration and severity of acne, including how long the patient has had acne and how severe it is.
4. Select all areas of the body affected by acne.
5. Identify any known triggers for breakouts, such as stress, hormonal changes, or certain foods.
6. List any current or previous treatments being used for acne.
7. Indicate if there is a family history of acne.
8. For female patients, describe any correlation between menstrual cycles and acne.
9. Rate the patient's average stress levels.
10. Provide any additional symptoms or skin conditions not mentioned earlier.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required): Enter the patient's full name.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter the patient's date of birth.
* **Contact Number** (`contact_number`, `text`, required): Enter the patient's phone number for contact purposes.
* **Email Address** (`email_address`, `email`, optional): Enter the patient's email address for communication (if available).
* **Duration of Acne** (`acne_duration`, `select_one`, required): Choose how long the patient has had acne (e.g., Less than 6 months, 6 months to 1 year, etc.).
* **Acne Severity** (`acne_severity`, `select_one`, required): Rate the severity of acne (e.g., Mild, Moderate, Severe, Very Severe).
* **Areas Affected by Acne** (`affected_areas`, `select_multiple`, required): Select all areas of the body affected by acne (e.g., Face, Chest, Back, etc.).
* **Known Triggers for Breakouts** (`acne_triggers`, `select_multiple`, optional): Choose any factors that seem to worsen acne (e.g., Stress, Hormonal changes, Foods, etc.).
* **Current Treatments Being Used** (`current_treatments`, `text`, optional): List any treatments currently being used for acne.
* **Previous Treatments Tried** (`previous_treatments`, `text`, optional): List any previous treatments tried for acne.
* **Family History of Acne** (`family_history`, `select_one`, required): Indicate if there is a family history of acne (e.g., Yes, No, Unknown).
* **Menstrual History (for female patients)** (`menstrual_history`, `text`, optional): For female patients, describe any correlation between menstrual cycles and acne (if applicable).
* **Stress Levels** (`stress_levels`, `select_one`, required): Rate the patient's average stress levels (e.g., Low, Moderate, High, Very High).
* **Additional Symptoms** (`additional_symptoms`, `text`, optional): Provide any other symptoms or skin conditions not mentioned earlier.
