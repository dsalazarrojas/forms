# COVID 19 Patient Screening Disclosure Form - Help Guide

## Purpose
The COVID-19 Patient Screening Disclosure Form is a tool used to assess the risk of COVID-19 exposure and gather necessary information for patient screening before an appointment. This form helps healthcare providers identify potential risks and take necessary precautions to ensure a safe environment for all patients and staff.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal details:
	* Full Name: Enter your full name as it appears on your official documents.
	* Date of Birth: Enter your date of birth in the format MM/DD/YYYY.
	* Email Address: Enter your valid email address.
	* Phone Number: Enter your phone number in the format (XXX) XXX-XXXX.
	* Scheduled Visit Date: Enter the date of your scheduled visit in the format MM/DD/YYYY.
2. Answer the COVID-19 screening questions:
	* Have you had fever or chills in the past 24 hours? (Select 'True' or 'False')
	* Have you had a cough in the past 24 hours? (Select 'True' or 'False')
	* Have you had difficulty breathing in the past 24 hours? (Select 'True' or 'False')
	* Have you lost your sense of taste or smell? (Select 'True' or 'False')
	* Have you had muscle or body aches and fatigue? (Select 'True' or 'False')
3. Provide your COVID-19 exposure history:
	* Have you been diagnosed positive for COVID-19? (Select 'False' or 'True')
	* Have you been in close contact with a person diagnosed with COVID-19? (Select 'True' or 'False', or 'Unsure')
	* Have you traveled to a COVID-19 affected area recently? (Select 'True' or 'False')
4. Confirm your responses and consent:
	* I confirm my responses are true and accurate (Select 'True' or 'False')
	* I understand the information provided in this form (Select 'True' or 'False')
	* I consent to COVID-19 screening before my appointment (Select 'I consent' or 'I do not consent')
	* Date (Select the current date in the format MM/DD/YYYY)

## Field-by-Field Explanation
* **Full Name** (`full_name`, `text`, required): Enter your full name as it appears on your official documents.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
* **Email Address** (`email_address`, `email`, required): Enter your valid email address.
* **Phone Number** (`phone_number`, `text`, required): Enter your phone number in the format (XXX) XXX-XXXX.
* **Scheduled Visit Date** (`visit_date`, `date`, required): Enter the date of your scheduled visit in the format MM/DD/YYYY.
* **Have you had fever or chills in the past 24 hours?** (`fever_or_chills`, `select_one`, required): Select 'True' if you have had fever or chills in the past 24 hours, 'False' otherwise.
* **Have you had a cough in the past 24 hours?** (`cough_symptoms`, `select_one`, required): Select 'True' if you have had a cough in the past 24 hours, 'False' otherwise.
* **Have you had difficulty breathing in the past 24 hours?** (`breathing_difficulty`, `select_one`, required): Select 'True' if you have had difficulty breathing in the past 24 hours, 'False' otherwise.
* **Have you lost your sense of taste or smell?** (`taste_smell_loss`, `select_one`, required): Select 'True' if you have lost your sense of taste or smell, 'False' otherwise.
* **Have you had muscle or body aches and fatigue?** (`muscle_fatigue`, `select_one`, required): Select 'True' if you have had muscle or body aches and fatigue, 'False' otherwise.
* **Have you been diagnosed positive for COVID-19?** (`positive_diagnosis`, `select_one`, required): Select 'True' if you have been diagnosed positive for COVID-19, 'False' otherwise.
* **Have you been in close contact with a person diagnosed with COVID-19?** (`close_contact`, `select_one`, required): Select 'True' if you have been in close contact with a person diagnosed with COVID-19, 'False', or 'Unsure'.
* **Have you traveled to a COVID-19 affected area recently?** (`travel_affected_area`, `select_one`, required): Select 'True' if you have traveled to a COVID-19 affected area recently, 'False' otherwise.
* **I confirm my responses are true and accurate** (`confirm_responses`, `select_one`, required): Select 'True' to confirm that your responses are true and accurate, 'False' otherwise.
* **I understand the information provided in this form** (`understand_disclosure`, `select_one`, required): Select 'True' to confirm that you understand the information provided, 'False' otherwise.
* **I consent to COVID-19 screening before my appointment** (`consent_screening`, `select_one`, required): Select 'I consent' to agree to COVID-19 screening, 'I do not consent' otherwise.
* **Date** (`disclosure_date`, `date`, required): Select the current date in the format MM/DD/YYYY.

## Tips
* Please answer all questions honestly and accurately to help us provide the best possible care for you.
* If you are unsure about any of the questions, select the 'Unsure' option.
* If you have any questions or concerns, please ask your healthcare provider for assistance.
