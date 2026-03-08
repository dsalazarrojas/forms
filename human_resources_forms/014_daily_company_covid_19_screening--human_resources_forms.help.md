# Daily Company Covid 19 Screening - Help Guide
## Purpose
The purpose of this form is to collect information about your health and travel status to help prevent the spread of COVID-19 within the company.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required fields, marked with an asterisk (*).
2. Enter your employee name and ID for identification.
3. Answer the questions honestly and accurately to the best of your ability.
4. For select and select_multiple fields, choose the relevant options from the list.
5. For date fields, enter the date in the format MM/DD/YYYY.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, *): Enter your name as it appears on your ID or HR records.
* **Employee ID** (`employee_id`, number, *): Enter your employee ID number.
* **Temperature** (`temperature`, number, *): Report your current body temperature, in Fahrenheit or Celsius (please specify which unit).
* **Symptoms** (`symptoms`, select_multiple, *): Indicate if you are experiencing any of the following symptoms:
	+ Fever
	+ Cough
	+ Difficulty breathing
	+ Sore Throat
	+ Runny Nose or Sore Throat
* **Traveled From** (`traveled_from`, text): If you have traveled recently, enter the location you traveled from.
* **Return Date** (`return_date`, date): If you have returned from travel, enter the date you returned.
* **Travel Status** (`travel_status`, select_one, *): Indicate if you have traveled recently:
	+ True
	+ False
* **Symptoms Since Last Travel** (`symptoms_since_last_travel`, select_multiple): Indicate if you have experienced any symptoms since your last travel:
	+ Fever
	+ Cough
	+ Difficulty breathing
	+ Sore Throat
	+ Runny Nose or Sore Throat
* **Tested Positive** (`tested_positive`, select_one): Indicate if you have tested positive for COVID-19:
	+ True
	+ False
* **Contact Tracing** (`contact_tracing`, text): If you have been in contact with someone who has tested positive, enter their name and date of contact.
* **Exposure To Covid** (`exposure_to_covid`, text): If you have been exposed to someone who has COVID-19, enter the details.
* **Vaccination Status** (`vaccination_status`, select_one): Indicate if you have been vaccinated:
	+ True
	+ False
* **Travel Details** (`travel_details`, text): If you have traveled, provide details about your trip.
* **Symptoms Description** (`symptoms_description`, text): Describe any symptoms you are experiencing.
* **Medical Condition** (`medical_condition`, text): If you have a medical condition, enter a brief description.
* **Medication Taken** (`medication_taken`, text): If you are taking any medication, enter the name and dosage.
* **Travel History** (`travel_history`, text): If you have traveled, enter a brief description of your trip.
* **Travel Countries** (`travel_countries`, text): If you have traveled, enter the countries you visited.
* **Travel Dates** (`travel_dates`, date): If you have traveled, enter the dates of your trip.
* **Travel Reason** (`travel_reason`, text): If you have traveled, enter the reason for your trip.
* **Travel Mode** (`travel_mode`, text): If you have traveled, enter the mode of transportation used (e.g., flight, train, car).
* **Travel Duration** (`travel_duration`, text): If you have traveled, enter the duration of your trip.
* **Tested Location** (`tested_location`, text): If you have been tested, enter the location where you were tested.
* **Tested Date** (`tested_date`, date): If you have been tested, enter the date of the test.
* **Tested Location** (`tested_location`, text): If you have been tested, enter the location where you were tested.

Note: Fields marked with an asterisk (*) are required fields.
