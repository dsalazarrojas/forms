# health_appraisal_questionnaire - Help Guide
## Purpose
The health appraisal questionnaire is a form designed to gather information about a patient's health status, medical conditions, and contact details. It will help healthcare providers assess the patient's health and provide proper care.

## How To Complete This Form
To complete this form, follow these steps:
1. Select your survey status from the options provided.
2. Enter your age, date of birth, and date of visit.
3. Choose your gender.
4. Provide details about your medical history, medical conditions, medical procedures, and allergies.
5. Enter your email, phone number, and address.
6. Select the time of your visit.
7. Add any additional notes if needed.

## Field-by-Field Explanation
* **What is your survey status?** (`survey_status`, `select_one`, required: false)
  This field asks you to select your current survey status from the options provided.
* **Age** (`age`, `number`, required: false)
  Enter your age to provide your healthcare provider with your demographic information.
* **Gender** (`gender`, `select_one`, required: false)
  Choose your gender from the provided options.
* **Medical History** (`medical_history`, `text`, required: false)
  Provide details about your medical history, such as previous medical conditions or treatments.
* **Medical Conditions** (`medical_conditions`, `select_multiple`, required: false)
  Select any medical conditions you are currently experiencing or have experienced.
* **Medical Procedures** (`medical_procedures`, `select_multiple`, required: false)
  Choose any medical procedures you have undergone or are currently undergoing.
* **Medication** (`medication`, `select_multiple`, required: false)
  List any medications you are currently taking.
* **Allergies** (`allergies`, `select_multiple`, required: false)
  Select any allergies you have.
* **Medical History 2-5** (`medical_history2`, `medical_history3`, `medical_history4`, `medical_history5`, `text`, required: false)
  Provide additional details about your medical history, such as previous surgeries or hospitalizations.
* **Medical Procedure 1-3** (`medical_procedure1`, `medical_procedure2`, `medical_procedure3`, `select_multiple`, required: false)
  Select any medical procedures you have undergone or are currently undergoing.
* **Email** (`email`, `email`, required: false)
  Enter your email address for contact purposes.
* **Phone** (`phone`, `text`, required: false)
  Enter your phone number for contact purposes.
* **Address** (`address`, `text`, required: false)
  Enter your address for contact purposes.
* **Date of Birth** (`date_of_birth`, `date`, required: false)
  Enter your date of birth.
* **Date of Visit** (`date_of_visit`, `date`, required: false)
  Enter the date of your visit.
* **Time** (`time`, `time`, required: false)
  Enter the time of your visit.
* **Time 2** (`time2`, `time`, required: false)
  Enter the time of your visit (if different from the previous field).
* **Time of Visit** (`time_of_visit`, `time`, required: false)
  Enter the time of your visit.
* **Note** (`note`, `note`, required: false)
  Add any additional notes about your health status or visit.
* **Lifestyle** (`lifestyle`, `select_multiple`, required: false)
  Select any aspects of your lifestyle that may be relevant to your health status.
* **Phone 2** (`phone`, `text`, required: false)
  Enter your phone number (if different from the previous field).
* **Address 2** (`address`, `text`, required: false)
  Enter your address (if different from the previous field).
* **Medical Procedure 2-3** (`medical_procedure2`, `medical_procedure3`, `select_multiple`, required: false)
  Select any additional medical procedures you have undergone or are currently undergoing.
