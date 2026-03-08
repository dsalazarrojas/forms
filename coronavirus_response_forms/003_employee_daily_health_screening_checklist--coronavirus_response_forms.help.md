# Employee Daily Health Screening Checklist - Help Guide
## Purpose
The purpose of this form is to quickly and easily help employees report their health status, specifically regarding symptoms related to COVID-19. This allows the organization to monitor the health of employees and take necessary precautions to maintain a safe work environment.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Select the date of the screening (or use the current date).
2. Enter your employee ID (or a unique identifier assigned by your organization).
3. Report any symptoms you're experiencing, selecting "yes" or "no" for each option.
4. Enter any additional symptoms not listed on this form.
5. Sign and date the form.

## Field-by-Field Explanation
* **Screening Date** (`screening_date`, date, required: false): Enter the date of this screening.
* **Employee ID** (`employee_id`, text, required: false): Enter your unique employee ID assigned by your organization.
* **Temperature** (`temperature`, number, required: false): Report your body temperature in degrees Celsius or Fahrenheit.
* **Do you have a cough?** (`cough`, select_one, required: false): Select "yes" if you're experiencing a cough, "no" otherwise.
* **Sore Throat** (`sore_throat`, select_one, required: false): Select "yes" if you're experiencing a sore throat, "no" otherwise.
* **Shortness of Breath** (`shortness_of_breath`, select_one, required: false): Select "yes" if you're experiencing shortness of breath, "no" otherwise.
* **Headache** (`headache`, select_one, required: false): Select "yes" if you're experiencing a headache, "no" otherwise.
* **Sore Eyes** (`sore_eyes`, select_one, required: false): Select "yes" if you're experiencing sore eyes, "no" otherwise.
* **Runny Nose** (`runny_nose`, select_one, required: false): Select "yes" if you're experiencing a runny nose, "no" otherwise.
* **Fatigue** (`fatigue`, select_one, required: false): Select "yes" if you're experiencing fatigue, "no" otherwise.
* **Nausea** (`nausea`, select_one, required: false): Select "yes" if you're experiencing nausea, "no" otherwise.
* **Diarrhoea** (`diarrhoea`, select_one, required: false): Select "yes" if you're experiencing diarrhoea, "no" otherwise.
* **Vomiting** (`vomiting`, select_one, required: false): Select "yes" if you're experiencing vomiting, "no" otherwise.
* **Chest Pain** (`chest_pain`, select_one, required: false): Select "yes" if you're experiencing chest pain, "no" otherwise.
* **Recent Travel** (`recent_travel`, select_one, required: false): Select "yes" if you've had recent travel, "no" otherwise.
* **Contact with Other** (`contact_other`, select_one, required: false): Select "yes" if you've had contact with someone who's had COVID-19, "no" otherwise.
* **Other Symptoms** (`symptoms_other`, text, required: false): Enter any other symptoms you're experiencing.
* **Employee Name** (`employee_name`, text, required: false): Enter your name.
* **Department** (`department`, text, required: false): Enter your department.
* **Supervisor Name** (`supervisor_name`, text, required: false): Enter your supervisor's name.
* **Employee Signature** (`employee_signature`, text, required: false): Sign the form to confirm your responses.
* **Date** (`date`, time, required: false): Not used in this form (appears to be an error).
* **Time** (`time`, date, required: false): Not used in this form (appears to be an error).
* **Location** (`location`, text, required: false): Not used in this form (appears to be an error).

## Tips
* Be honest when reporting your symptoms, as this helps maintain a safe work environment.
* If you're unsure about any symptoms, select "no" and consult with your healthcare provider or supervisor.
* Complete this form daily as required by your organization.
