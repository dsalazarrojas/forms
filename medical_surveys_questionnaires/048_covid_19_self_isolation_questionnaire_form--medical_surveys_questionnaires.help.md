# COVID 19 Self Isolation Questionnaire Form - Help Guide
## Purpose
The COVID-19 Self Isolation Questionnaire Form is designed to collect critical information about your health, living situation, and contact preferences during the COVID-19 pandemic. Please answer the questions accurately and honestly to help us provide the best possible care and support.

## How To Complete This Form
1. Please fill out each page of the form in sequence.
2. For each field, enter your information according to the instructions provided.
3. If you are unsure about any question, please contact our support team for assistance.

## Field-by-Field Explanation
- **Full Name** (`person_name_full`, `text`, **required**): Enter your full name, as it appears on your identification documents.
- **Date of Birth** (`person_dob_val`, `date`, **required**): Enter the date of your birth in the format `MM/DD/YYYY`.
- **Isolation Address** (`isolation_address_text`, `text`, **required**): Enter the address where you will be staying for the duration of your self-isolation. This should be the address where you will be living, not your workplace or school.
- **Total Number of Household Members** (`household_count_val`, `number`, **required**): Include yourself in the count. For example, if you live with 3 other people, enter 4.
- **Are there any vulnerable or elderly individuals in your household?** (`vulnerable_in_house_yn`, `select_one`, **required**):
	+ `True`: Yes, there are individuals who are vulnerable or elderly in your household.
	+ `False`: No, there are no vulnerable or elderly individuals in your household.
- **Date of Last Known Exposure** (`last_exposure_date_val`, `date`, **optional**): Enter the date of your last known exposure to COVID-19, if applicable.
- **Current Symptoms** (`current_symptoms_list`, `select_multiple`, **required**):
	+ `Fever`
	+ `Cough`
	+ `Shortness of breath`
	+ `Loss of taste/smell`
	+ `Body aches`
	+ `Fatigue`
	+ `None`
- **Current Temperature (F)** (`temp_record_val`, `number`, **required**): Enter your current body temperature in Fahrenheit.
- **Do you have adequate access to groceries and essential medicine?** (`resource_access_yn`, `select_one`, **required**):
	+ `True`: Yes, you have adequate access to groceries and essential medicine.
	+ `False`: No, you do not have adequate access to groceries and essential medicine.
	+ `Need Assistance`: You need assistance with accessing groceries and essential medicine.
- **Would you like to be contacted for mental health or emotional support?** (`mental_health_support_yn`, `select_one`, **required**):
	+ `True`: Yes, you would like to be contacted for mental health or emotional support.
	+ `False`: No, you do not need mental health or emotional support.
- **Preferred Daily Check-in Time** (`check_in_time_pref`, `time`, **required**): Enter your preferred daily check-in time in 24-hour format (e.g., 10:00 AM).
- **Emergency Contact (Name and Phone)** (`emergency_contact_text`, `text`, **required**): Enter the name and phone number of an emergency contact person.
- **I certify the information provided is correct** (`questionnaire_auth_cert`, `select_one`, **required**):
	+ `True`: I certify that the information provided is accurate and complete.
	+ `False`: I do not certify the information provided as accurate and complete.
