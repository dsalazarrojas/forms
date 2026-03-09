# Hospital Discharge Questionnaire - Help Guide
## Purpose
This form is designed to collect information about a patient's discharge from a hospital. It is intended to gather feedback and provide an opportunity for patients to rate their experience and care during their stay.

## How To Complete This Form
To complete this form, please follow these steps:

1. Answer all the questions to the best of your ability.
2. Make sure to fill in all required fields.
3. Review your answers carefully before submitting the form.

## Field-by-Field Explanation

* **Patient Survey** (`patient_survey`, text, optional): Please provide a brief description of your experience at the hospital.
* **Patient Feedback** (`patient_feedback`, text, optional): Share any feedback or comments about your experience at the hospital.
* **Hospital Services** (`hospital_services`, select_multiple, optional): Please select all the hospital services you received during your stay, such as doctor visits, nurse visits, etc.
	+ **Hospitalist**: You received care from a hospitalist.
	+ **Nurse**: You received care from a nurse.
	+ **Other**: You received care from another service.
* **Patient Care** (`patient_care`, select_one, optional): Please rate your overall care experience at the hospital.
	+ **Excellent**: You received excellent care.
	+ **Very good**: You received very good care.
	+ **Fair**: You received fair care.
	+ **Poor**: You received poor care.
* **Patient Experience** (`patient_experience`, select_one, optional): Please rate your overall experience at the hospital.
	+ **Good**: You had a good experience.
	+ **Fair**: You had a fair experience.
	+ **Needs Improvement**: You need improvement in your experience.
* **Discharge Date** (`discharge_date`, date, optional): Please enter the date of your discharge from the hospital.
* **Discharge Time** (`discharge_time`, time, optional): Please enter the time of your discharge from the hospital.
* **Discharge Status** (`discharge_status`, select_one, optional): Please select the status of your discharge.
	+ **Discharged**: You were discharged from the hospital.
	+ **Transferred**: You were transferred to another facility.
	+ **Admitted**: You were admitted to the hospital.
* **Follow-up Visit** (`follow_up_visit`, select_one, optional): Please indicate if you have a follow-up visit scheduled.
	+ **True**: You have a follow-up visit scheduled.
	+ **False**: You do not have a follow-up visit scheduled.
	+ **Not Scheduled**: You do not know if you have a follow-up visit scheduled.
* **Discharge Comments** (`discharge_comments`, text, optional): Please provide any additional comments about your discharge.
* **Follow-up Comments** (`follow_up_comments`, text, optional): Please provide any additional comments about your follow-up visit.

## Tips
* Be honest and accurate when filling out this form.
* If you have any questions or concerns, please do not hesitate to contact us.
* Thank you for taking the time to complete this form!
