<thinking>
The purpose of this form, the Cavity Clearance Form, is to collect vital information about a patient's oral health and clearance requirements for dental treatment. This form is typically used to assess a patient's dental status and clearance for procedures such as fillings, root canals, or extractions. The information gathered on this form is essential for the dentist or dental team to make informed decisions regarding the patient's treatment plan. It is crucial that this form is completed thoroughly and accurately to ensure the patient receives proper care. Please note that this form is only meant to be filled out by authorized personnel, such as dental professionals, and not by patients themselves.
</thinking>

# Cavity Clearance Form - Help Guide

## Purpose
This form is designed to gather essential information about a patient's oral health and clearance requirements for dental treatment. It is used to assess a patient's dental status and clearance for procedures such as fillings, root canals, or extractions.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's full name, date of birth, and patient ID number.
2. Provide the patient's phone number for communication purposes.
3. List any known allergies, current medications, and significant medical conditions.
4. Indicate if the patient has had any recent illnesses or infections.
5. Describe the extent and location of tooth decay, including the affected tooth number and surface.
6. Answer whether there is any infection present.
7. Select the proposed treatment for the patient, including filling, extraction, root canal, or other options.
8. Choose the type of anesthesia to be used.
9. Describe the benefits of the proposed treatment.
10. List any potential risks associated with the treatment.
11. Check if all questions have been answered.
12. Indicate whether you consent to the proposed dental treatment.
13. Sign and date the clearance form to confirm your agreement to the treatment plan.

## Field-by-Field Explanation
* **Full Name** (`patient_full_name`, text, required): Enter the patient's full name as recorded in the patient's medical records.
* **Date of Birth** (`patient_date_of_birth`, date, required): Enter the patient's date of birth in the format `mm/dd/yyyy`.
* **Patient ID Number** (`patient_id_number`, text, required): Enter the patient's unique identification number assigned by the healthcare facility or insurance provider.
* **Phone Number** (`patient_phone`, text, required): Enter the patient's contact phone number for further communication.
* **Allergies** (`allergies`, text, optional): List any known allergies, including medications, materials, or foods that the patient is allergic to.
* **Current Medications** (`current_medications`, text, optional): List all the medications the patient is currently taking.
* **Significant Medical Conditions** (`medical_conditions`, text, optional): List any significant medical conditions the patient has, such as diabetes or heart disease.
* **Recent Illness or Infection** (`recent_illness`, text, optional): Describe any recent illnesses or infections the patient has experienced.
* **Extent of Tooth Decay** (`decay_extent`, text, required): Describe the extent of tooth decay, including single cavity, multiple cavities, etc.
* **Cavity Location** (`cavity_location`, text, required): Describe the location of the cavity, including the affected tooth number and surface.
* **Infection Present** (`infection_present`, select_one, required): Answer whether there is any infection present, with options 'Yes', 'No', or 'Under Treatment'.
* **Proposed Treatment** (`proposed_treatment`, select_one, required): Select the proposed treatment, including filling, extraction, root canal, or other options.
* **Anesthesia Type** (`anesthesia_type`, select_one, required): Choose the type of anesthesia to be used, with options Local, General, or None Required.
* **Benefits of Proposed Treatment** (`treatment_benefits`, text, required): Describe the benefits of the proposed treatment.
* **Potential Risks** (`potential_risks`, text, required): List any potential risks associated with the treatment.
* **Clearance and Consent** (`section_clearance`, note, optional): This is a note section for clearance and consent purposes.
* **Do you have questions about the procedure?** (`patient_questions`, select_one, optional): Answer whether you have any questions about the procedure, with options 'Yes' or 'No'.
* **Have all questions been answered?** (`questions_answered`, select_one, required): Answer whether all questions have been answered, with options 'Yes', 'No', or 'Partially'.
* **I consent to the proposed dental treatment** (`treatment_consent`, select_one, required): Indicate whether you consent to the proposed dental treatment, with options 'Yes' or 'No'.
* **Date of Clearance** (`clearance_signature_date`, date, required): Sign and date the clearance form to confirm your agreement to the treatment plan.
