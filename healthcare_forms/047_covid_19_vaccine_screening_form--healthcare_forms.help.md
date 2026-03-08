<thinking>
This form, COVID 19 Vaccine Screening Form, is designed to collect vital information from employees about their eligibility for the COVID-19 vaccine. The form will help healthcare providers assess whether an employee is eligible for the vaccine based on their health status, medical history, and other factors.
This form is intended for employees who are candidates for the COVID-19 vaccine. It is not intended for non-employees or for individuals who are not candidates for the vaccine. If you are not an employee or are not a candidate for the vaccine, please do not complete this form.
Before completing this form, please note that some questions will ask about sensitive medical information. This information will only be used for the purpose of determining vaccine eligibility.
</thinking>

# COVID 19 Vaccine Screening Form - Help Guide
## Purpose
This form is designed to collect information about your medical status and history to help determine whether you are eligible for the COVID-19 vaccine.

## How To Complete This Form
1. Please complete this form in its entirety to ensure that your answers can be accurately assessed.
2. Answer all questions honestly and to the best of your knowledge.
3. If you are unsure about any of the questions, please answer "Unsure" or "Not Applicable" if it's a valid option.

## Field-by-Field Explanation

* **Employee Full Name** (`employee_name`, `text`, required): Your full name as it appears on your identification card or official documents.
* **Employee ID** (`employee_id`, `text`, required): Your employee ID number or badge number.
* **Department** (`department`, `text`, required): The department or team you work in.
* **Job Title** (`job_title`, `text`, required): Your job title or position.
* **Screening Date** (`screening_date`, `date`, required): The date you are completing this form.
* **-- COVID-19 Vaccine Eligibility Screening --** (`screening_section`, `note`, required): This section is a reminder of the purpose of this form.
* **Do you work in healthcare** (`healthcare_worker`, `select_one`, required): Answer "True" if you are a healthcare worker, otherwise answer "False".
* **Are you an essential worker** (`essential_worker`, `select_one`, required): Answer "True" if you are an essential worker, otherwise answer "False".
* **Are you 65 years of age or older** (`vulnerable_age`, `select_one`, required): Answer "True" if you are 65 years of age or older, otherwise answer "False".
* **Do you have a high-risk medical condition** (`high_risk_condition`, `select_one`, required): Answer "True" if you have a high-risk medical condition such as diabetes, heart disease, chronic lung disease, obesity, or immunocompromised, otherwise answer "False" or "Unsure".
* **If yes, describe your condition** (`condition_description`, `text`, optional): If you answered "True" to the previous question, describe your high-risk medical condition.
* **-- Health Screening --** (`health_section`, `note`, required): This section is a reminder of the health-related questions.
* **Currently experiencing COVID-19 symptoms** (`current_symptoms`, `select_one`, required): Answer "True" if you are currently experiencing COVID-19 symptoms such as fever, cough, shortness of breath, otherwise answer "False".
* **Tested positive for COVID-19 in past 3 months** (`positive_test_recent`, `select_one`, required): Answer "True" if you tested positive for COVID-19 in the past 3 months, otherwise answer "False" or "Unsure".
* **Do you have a fever today** (`fever_today`, `select_one`, required): Answer "True" if you have a fever today, otherwise answer "False".
* **Temperature if fever present** (`temperature_check`, `number`, optional): If you answered "True" to the previous question, enter your current body temperature.
* **-- Medications and Allergies --** (`medications_section`, `note`, required): This section is a reminder of the medication and allergy-related questions.
* **Allergies to vaccine or components** (`vaccine_allergies`, `select_one`, required): Answer "True" if you have allergies to the vaccine or its components, otherwise answer "False" or "Unsure".
* **Describe allergies** (`allergy_details`, `text`, optional): If you answered "True" to the previous question, describe your allergies.
* **History of severe allergic reaction or anaphylaxis** (`severe_reaction_history`, `select_one`, required): Answer "True" if you have a history of severe allergic reaction or anaphylaxis, otherwise answer "False".
* **Currently on blood thinners or anticoagulants** (`blood_thinners`, `select_one`, required): Answer "True" if you are on blood thinners or anticoagulants, otherwise answer "False".
* **-- Immune Status --** (`immunocompromised_section`, `note`, required): This section is a reminder of the immune status-related questions.
* **Immunocompromised or on immunosuppressive therapy** (`immunocompromised`, `select_one`, required): Answer "True" if you are immunocompromised or on immunosuppressive therapy, otherwise answer "False" or "Unsure".
* **-- Pregnancy Status --** (`pregnancy_section`, `note`, required): This section is a reminder of the pregnancy status-related questions.
* **Are you pregnant or planning to become pregnant** (`pregnant`, `select_one`, required): Answer "True" if you are pregnant or planning to become pregnant, otherwise answer "False" or "Not Applicable".
* **Are you breastfeeding** (`breastfeeding`, `select_one`, required): Answer "True" if you are breastfeeding, otherwise answer "False" or "Not Applicable".
* **-- Vaccination History --** (`vaccination_history_section`, `note`, required): This section is a reminder of the vaccination history-related questions.
* **Previously received COVID-19 vaccine** (`prior_covid_vaccine`, `select_one`, required): Answer "True" if you previously received the COVID-19 vaccine, otherwise answer "False".
* **Number of prior doses** (`prior_doses`, `number`, optional): If you answered "True" to the previous question, enter the number of doses you previously received.
* **Vaccine type received** (`prior_vaccine_type`, `text`, optional): If you answered "True" to the previous question, enter the type of vaccine you previously received.
* **Any adverse reactions to prior vaccine** (`prior_reaction`, `select_one`, required): Answer "True" if you experienced any adverse reactions to the prior vaccine, otherwise answer "False" or "Not Applicable".
* **Describe reaction** (`prior_reaction_description`, `text`, optional): If you answered "True" to the previous question, describe your reaction.
* **Screening Conclusion** (`conclusion_section`, `note`, optional): This section is a reminder of the form's purpose.
* **Eligible for COVID-19 Vaccination** (`eligible_for_vaccine`, `select_one`, optional): This will be determined by the screener based on your answers.
* **Screener Name** (`screener_name`, `text`, optional): This is for the screener's signature or name.
* **Notes or Comments** (`screening_notes`, `text`, optional): You may enter any additional comments or notes.

## Tips
* Answer all questions carefully and honestly.
* If you are unsure about any of the questions, please answer "Unsure".
* If you have any medical conditions or allergies that you are not sure about, please answer "Unsure" and describe your condition or allergy.
* If you are on medications or treatments that may affect your eligibility for the vaccine, please list them.
* If you have any questions or concerns, please ask your healthcare provider.
