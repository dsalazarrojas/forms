# COVID 19 Patient Screening Form - Help Guide
## Purpose
The COVID-19 Patient Screening Form is a tool for assessing the risk of exposure to and infection with COVID-19. It helps healthcare professionals identify potential cases and take necessary precautions to prevent the spread of the disease.

## How To Complete This Form
To complete the form, follow these steps:

1. Review each question carefully and answer truthfully.
2. Select the correct response for each question.
3. Ensure all required fields are filled in before submitting the form.

## Field-by-Field Explanation

* **Full Name** (`patient_name`, text, required): Enter the patient's full name as it appears on their government-issued ID or medical record.
* **Patient ID or Medical Record Number** (`patient_id`, text, optional): Enter the patient's ID or medical record number if applicable.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in MM/DD/YYYY format.
* **Email Address** (`contact_email`, email, required): Enter the patient's email address.
* **Phone Number** (`contact_phone`, text, required): Enter the patient's phone number.
* **Date of Screening** (`screening_date`, date, required): Enter the date of the screening in MM/DD/YYYY format.
* **Do you have a fever above 100.4 degrees Fahrenheit?** (`fever`, select_one, required): Select 'True' if the patient has a fever above 100.4 degrees Fahrenheit.
* **Do you have a new cough?** (`cough`, select_one, required): Select 'True' if the patient has a new cough.
* **Do you have shortness of breath?** (`shortness_breath`, select_one, required): Select 'True' if the patient has shortness of breath.
* **Do you have a sore throat?** (`sore_throat`, select_one, required): Select 'True' if the patient has a sore throat.
* **Have you lost your sense of taste or smell?** (`loss_taste_smell`, select_one, required): Select 'True' if the patient has lost their sense of taste or smell.
* **Do you have body aches or chills?** (`body_aches`, select_one, required): Select 'True' if the patient has body aches or chills.
* **Have you been diagnosed with COVID-19 in the past 14 days?** (`covid_diagnosis`, select_one, required): Select 'True' if the patient has been diagnosed with COVID-19 in the past 14 days.
* **Have you been in close contact with someone with COVID-19?** (`close_contact_covid`, select_one, required): Select 'True' if the patient has been in close contact with someone with COVID-19. 
* **Have you traveled outside the area in the past 14 days?** (`travel`, select_one, required): Select 'True' if the patient has traveled outside the area in the past 14 days.
* **Based on this screening, patient is cleared to visit** (`cleared_to_visit`, select_one, required): Select 'True' if the patient is cleared to visit, 'No - requires further evaluation' if the patient is not cleared, or 'Requires precautions' if the patient requires precautions.
* **Screener Name** (`screener_name`, text, required): Enter the name of the screener.

Note: This form is subject to change based on local health guidelines and regulations, please ensure to review and update the form accordingly.
