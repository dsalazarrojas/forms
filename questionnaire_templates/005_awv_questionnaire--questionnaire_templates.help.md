<thinking>

This form is a comprehensive patient survey designed to gather information about a patient's demographics, health history, medical screenings, and lifestyle habits. The goal of this form is to help healthcare providers understand the patient's overall health status, medical history, and potential risks and concerns. This information will be used to inform patient care and treatment plans.

Before you begin, please note that this form is not affiliated with any form platform and is an original adaptation created using AI. The form is released under a Creative Commons license, allowing you to use, modify, and share it freely. If you have any questions or concerns, please contact [form@gic.mx](mailto:form@gic.mx).

</thinking>

# AWV Questionnaire - Help Guide
## Purpose
The AWV Questionnaire is a comprehensive patient survey designed to gather information about a patient's demographics, health history, medical screenings, and lifestyle habits. The goal of this form is to help healthcare providers understand the patient's overall health status, medical history, and potential risks and concerns.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your patient's **full name**, **date of birth**, and **date of visit**.
2. List all your **current medications, vitamins, and supplements**.
3. List any **known allergies** you have, including medications, food, or environmental triggers.
4. Select any **chronic conditions** you have, such as diabetes, high blood pressure, or heart disease.
5. List any **surgeries or hospitalizations** you've had in the past year.
6. If applicable, select how often you **exercise per week**.
7. Answer the questions about your **mental health** in the past two weeks, including how you've felt **depressed**, **anxious**, and if you've noticed any **changes in your memory or thinking**.
8. Select how many **alcoholic drinks** you consume per week.
9. Indicate if you have **difficulty with daily activities**, such as bathing, dressing, or eating.
10. If you have a **health care provider**, please list their name.
11. Optionally, list any other **health goals** you'd like to discuss with your provider.

## Field-by-Field Explanation
* **Patient Full Name** (`patient_full_name`, text, required): Enter the patient's full name, including their last name, first name, and any middle name.
* **Date of Birth** (`patient_date_of_birth`, date, required): Enter the patient's date of birth in the standard date format (e.g., YYYY-MM-DD).
* **Date of Visit** (`visit_date`, date, required): Enter the date of the visit or appointment.
* **Current Medications, Vitamins, and Supplements** (`current_medications`, text, required): List all medications, vitamins, and supplements the patient is currently taking, including dosage and frequency.
* **Known Allergies** (`allergies`, text, required): List any known allergies, including medications, food, or environmental triggers.
* **Chronic Conditions** (`chronic_conditions`, select_multiple, required): Select any chronic conditions the patient has, such as diabetes, high blood pressure, or heart disease.
* **Surgeries or Hospitalizations** (`surgeries_hospitalizations`, text, optional): List any surgeries or hospitalizations the patient has had in the past year, including approximate dates.
* **Exercise Frequency** (`exercise_frequency`, select_one, required): Select how often the patient exercises per week.
* **Tobacco Use** (`tobacco_use`, select_one, required): Select if the patient currently uses tobacco products.
* **Alcohol Consumption** (`alcohol_consumption`, select_one, required): Select how many alcoholic drinks the patient consumes per week.
* **Difficulty with Daily Activities** (`daily_activities_difficulty`, select_one, required): Indicate if the patient has difficulty with daily activities, such as bathing, dressing, or eating.
* **Last Flu Vaccine Date** (`last_flu_vaccine_date`, date, optional): Enter the date of the last flu vaccination, or leave blank if none.
* **Pneumonia Vaccine** (`last_pneumonia_vaccine`, select_one, required): Select if the patient has received a pneumonia vaccine.
* **Last Colonoscopy Date** (`last_colonoscopy_date`, date, optional): Enter the date of the last colonoscopy, or leave blank if none.
* **Falls** (`fall_risk`, select_one, required): Select if the patient has had any falls in the past 12 months.
* **Mental Health** (`feeling_depressed`, select_one, required): Select how the patient has felt in the past two weeks regarding depression.
* **Anxiety** (`feeling_anxious`, select_one, required): Select how the patient has felt in the past two weeks regarding anxiety.
* **Cognitive Concerns** (`cognitive_concerns`, select_one, required): Select if the patient or a family member has noticed any changes in memory or thinking.
* **Last Health Goals** (`health_goals`, text, optional): Optionally, list any health goals the patient would like to discuss with their provider.
