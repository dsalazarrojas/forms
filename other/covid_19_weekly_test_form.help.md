# covid_19_weekly_test_form - Help Guide
## Purpose
The covid_19_weekly_test_form is designed to collect data for patients visited during the COVID-19 pandemic. 

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the patient's ID number in the **Patient ID** field. This is a unique identifier for each patient.
2. Enter the date you visited the patient in the **Date Visited** field. This should be in the format YYYY-MM-DD.
3. Enter the patient's First Name and Last Name in the **First Name** and **Last Name** fields respectively.
4. Enter the patient's Date of Birth in the **Date of Birth** field. This is required for tracking patient data.
5. Answer Yes or No to the question about whether the patient had a vaccine dose. Select **Yes** if you administered a vaccine dose, and **No** otherwise. This question is used to track vaccine administration data.
6. Choose the type of vaccine administered to the patient, if any. Select all applicable options from the **Vaccine Type** field. This field allows for tracking multiple types of vaccines administered.
7. Enter any symptoms the patient is experiencing in the **Symptoms** field. Please be as detailed as possible.
8. Answer Yes or No to the question about whether the patient visited a medical practice. Select **Yes** if the patient visited a medical practice, and **No** otherwise. This question is used to track medical practice visits.
9. Enter the ID number of the medical practice visited by the patient in the **Medical Practice ID** field.
10. Answer Yes or No to the question about whether the patient saw a doctor during the visit. Select **Yes** if the patient saw a doctor, and **No** otherwise. This question is used to track doctor visits.

## Field-by-Field Explanation

* **Patient ID** (integer, required): Enter a unique identifier for the patient.
* **Date Visited** (date, required): Enter the date you visited the patient.
* **First Name** (text, required): Enter the patient's First Name.
* **Last Name** (text, required): Enter the patient's Last Name.
* **Date of Birth** (date, required): Enter the patient's Date of Birth.
* **Vaccine Dose** (select_one, required): Answer Yes or No to whether the patient received a vaccine dose.
* **Vaccine Type** (select_multiple, optional): Choose all applicable vaccine types administered to the patient.
* **Symptoms** (text, required): Enter any symptoms the patient is experiencing.
* **Medical Practice** (select_one, required): Answer Yes or No to whether the patient visited a medical practice.
* **Medical Practice ID** (integer, optional): Enter the ID number of the medical practice visited by the patient.
* **Doctor** (select_one, required): Answer Yes or No to whether the patient saw a doctor during the visit.
* **Patient Condition** (text, optional): Enter any additional comments or conditions related to the patient. 

## Tips
Please fill out this form for each patient you visit every week. If you have already filled out this form for a patient, do not fill it out again. If you are unsure about any field, please ask your supervisor or refer to the relevant policies and guidelines. 

Note: The fields marked as required are essential for tracking and analyzing patient data. Please ensure that you fill out all required fields accurately and completely.
