# HAZLET PHARMACY POCT Covid Antigen Testing - Help Guide
## Purpose
The POCT Covid Antigen Testing form is used to gather information for patients suspected of having COVID-19. This form is designed to be completed by healthcare staff to determine the need for COVID-19 testing.

## How To Complete This Form
1. Read the form carefully before starting.
2. Answer each question accurately and honestly.
3. Ensure all required fields are filled out.
4. Submit the form once completed.

## Field-by-Field Explanation

* **Have you visited the patient recently?** (`form_question_1`, `select_one`, required): Check whether you have visited the patient recently. Select `Yes` if you have visited the patient in the last 14 days.
* **What is the date of the patient visit?** (`form_question_2`, `date`, required): Enter the date of the patient's visit.
* **What is the date of symptom onset?** (`form_question_3`, `date`, required): Enter the date the patient first started experiencing symptoms.
* **What is the patient’s temperature?** (`form_question_4`, `select_one`, required): Report the patient's current temperature. Select `Normal`, `Elevated`, or `High` accordingly.
* **What is the patient’s oxygen saturation?** (`form_question_5`, `select_one`, required): Report the patient's current oxygen saturation. Select `Normal`, `Low`, or `High` accordingly.
* **Is the patient experiencing any symptoms?** (`form_question_6`, `select_multiple`, required): Select all symptoms the patient is experiencing. Choose from `Cough`, `Sore Throat`, `Fatigue`, or `Headache`.
* **Has the patient been in contact with anyone with COVID-19?** (`form_question_7`, `select_multiple`, required): Check whether the patient has been in contact with anyone who has COVID-19. Select `Yes`, `No`, or `Unknown`.
* **Has the patient recently traveled?** (`form_question_8`, `select_multiple`, required): Check whether the patient has recently traveled. Select `Yes` or `No`.
* **Has the patient recently been tested for COVID-19?** (`form_question_9`, `select_one`, required): Check whether the patient has recently been tested for COVID-19. Select `Yes` or `No`.
* **Has the patient received any COVID-19 vaccines?** (`form_question_10`, `select_one`, required): Check whether the patient has received any COVID-19 vaccines. Select `Yes` or `No`.
* **Date of last test?** (`form_question_11`, `date`, required): Enter the date the patient was last tested for COVID-19.
* **Time of last test?** (`form_question_12`, `time`, required): Enter the time the patient was last tested for COVID-19.
* **Patient name** (`form_question_13`, `text`, required): Enter the patient's name.
* **Contact information** (`form_question_14`, `text`, required): Enter the contact information for the patient.
* **Date of birth** (`form_question_15`, `date`, required): Enter the patient's date of birth.
* **Contact phone** (`form_question_16`, `text`, required): Enter the patient's contact phone number.
* **Contact email** (`form_question_17`, `email`, required): Enter the patient's email address.
* **Medical provider name** (`form_question_18`, `text`, required): Enter the name of the medical provider.
* **Medical provider contact information** (`form_question_19`, `text`, required): Enter the medical provider's contact information.
* **Additional information** (`form_question_20`, `text`, optional): Enter any additional information about the patient.
* **Test result** (`form_question_21`, `select_one`, required): Report the test result. Select `Positive`, `Negative`, or `Inconclusive`.
* **Test result notes** (`form_question_22`, `text`, optional): Enter any notes about the test result.
* **Test date** (`form_question_23`, `date`, required): Enter the date the test was performed.
* **Test time** (`form_question_24`, `time`, required): Enter the time the test was performed.
* **Result comments** (`form_question_25`, `text`, optional): Enter any comments about the test result.
