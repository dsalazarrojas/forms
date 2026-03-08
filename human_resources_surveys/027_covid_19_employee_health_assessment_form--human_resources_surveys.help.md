# COVID 19 Employee Health Assessment Form - Help Guide

## Purpose
This form is designed to help us understand the health status and work readiness of our employees in relation to COVID-19. Please complete this form to inform us of your current health situation and any relevant contact information.

## How To Complete This Form
1. Fill in your name and employee ID.
2. Provide your department and contact information (phone and email).
3. Answer the questions regarding your overall health status, COVID-19 diagnosis, and current symptoms.
4. Indicate if you have been exposed to a confirmed COVID-19 case or if you have household members with symptoms.
5. Report your vaccination status and work arrangement preferences.
6. Let us know if you have any additional health concerns and if you have access to healthcare.
7. Finally, certify that the provided information is accurate.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter your name as it appears on your ID badge or personnel record.
* **Employee ID** (`employee_id`, text, required): Enter your employee ID number.
* **Department** (`department`, text, required): Enter the department you are a part of.
* **Assessment Date** (`assessment_date`, date, required): Enter the date of this assessment.
* **Contact Phone Number** (`contact_phone`, text, required): Enter your contact phone number.
* **Contact Email** (`contact_email`, email, required): Enter your work email address.
* **Overall Health Status** (`overall_health`, select_one, required): 
  * Select your overall health status: Excellent, Good, Fair, or Poor.
* **Have you been diagnosed with COVID-19?** (`covid_diagnosis`, select_one, required):
  * Select 'Yes' if you have been diagnosed with COVID-19.
  * Select 'No' if you have not been diagnosed.
* **Date of Diagnosis** (`diagnosis_date`, date, required if diagnosed): Enter the date of your diagnosis (if applicable).
* **Current Symptoms** (`current_symptoms`, select_multiple, required):
  * Select all symptoms you are currently experiencing: Fever, Cough, Difficulty breathing, Fatigue, Muscle or body aches, Sore throat, Loss of taste or smell, Nausea or vomiting, or None.
* **Exposed to confirmed COVID-19 case** (`covid_exposure`, select_one, required):
  * Select 'Yes' if you have been exposed.
  * Select 'No' if you have not been exposed.
  * Select 'Unsure' if you are unsure.
* **Date of Exposure** (`exposure_date`, date, required if exposed): Enter the date of your exposure (if applicable).
* **Household members with COVID-19 symptoms** (`household_illness`, select_one, required):
  * Select 'Yes' if you have household members with symptoms.
  * Select 'No' if you do not have household members with symptoms.
* **Vaccination Status** (`vaccination_status`, select_one, required):
  * Select your vaccination status: Fully vaccinated with booster, Fully vaccinated without booster, Partially vaccinated, Not vaccinated, or Prefer not to disclose.
* **Able to work** (`work_status`, select_one, required):
  * Select 'Yes' if you are able to work.
  * Select 'No' if you are not able to work.
  * Select 'Limited capacity' if you are able to work but with limitations.
* **Work Arrangement** (`work_arrangement`, select_one, required):
  * Select your preferred work arrangement: On-site, Remote, Hybrid, or Medical leave.
* **Accommodations Needed** (`accommodations_needed`, text, optional): Provide any necessary accommodations.
* **Have access to healthcare** (`healthcare_access`, select_one, required):
  * Select 'Yes' if you have access to healthcare.
  * Select 'No' if you do not have access to healthcare.
* **Additional Health Concerns** (`additional_concerns`, text, optional): List any additional health concerns.
* **I certify the above information is accurate** (`employee_certification`, select_one, required):
  * Select 'Yes' to certify the accuracy of the provided information.
  * Select 'No' if you are unsure or unwilling to certify.
