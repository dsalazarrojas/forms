# COVID 19 Out Of State Travel Screening Form - Help Guide
## Purpose
The purpose of this form is to gather information about your recent out-of-state travel to screen for potential exposure to COVID-19.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill out the traveler's information, including their full name, date of birth, phone number, and email address.
2. Provide information about your travel history, including the state you traveled from, states visited, travel dates, and transportation mode.
3. Answer questions about your health status, including whether you have any COVID-19 symptoms, if you traveled to a COVID-19 high-risk area, and if you were exposed to a confirmed COVID-19 case during travel.
4. If you have any symptoms, provide a list of symptoms you are experiencing.
5. Answer questions about your willingness to quarantine and be tested if required.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, required): Please enter your full name.
* **Date of Birth** (`date_of_birth`, date, required): Please enter your date of birth in YYYY-MM-DD format.
* **Phone Number** (`contact_phone`, text, required): Please enter your phone number.
* **Email Address** (`contact_email`, email, required): Please enter your email address.
* **State of Residence** (`residence_state`, text, required): Please enter the state where you reside.
* **Where Did You Travel From** (`travel_origin`, text, required): Please enter the state you traveled from.
* **States Visited** (`travel_states`, text, required): Please enter the states you visited during your trip.
* **Travel Dates** (`travel_dates`, text, required): Please enter the dates of your trip.
* **Transportation Mode** (`travel_mode`, select_one, required): Please select the mode of transportation you used during your trip.
* **Date of Return** (`return_date`, date, required): Please enter the date you returned from your trip.
* **Traveled to COVID-19 High-Risk Area** (`high_risk_area`, select_one, required): Please select yes or no to indicate if you traveled to a COVID-19 high-risk area.
* **Any COVID-19 Symptoms Currently** (`covid_symptoms`, select_one, required): Please select yes or no to indicate if you are experiencing any COVID-19 symptoms.
* **Symptoms if Applicable** (`symptoms_list`, text, optional): If you are experiencing any COVID-19 symptoms, please list them.
* **Temperature above 100.4F in Past 24 Hours** (`fever`, select_one, required): Please select yes or no to indicate if you have experienced a temperature above 100.4F in the past 24 hours.
* **Symptoms Developed During Travel** (`symptoms_during_travel`, select_one, required): Please select yes or no to indicate if you developed any symptoms during your trip.
* **Exposed to Confirmed COVID-19 During Travel** (`exposure_during_travel`, select_one, required): Please select yes, no, or unknown to indicate if you were exposed to a confirmed COVID-19 case during travel.
* **Vaccination Status** (`vaccination_status`, select_one, required): Please select your vaccination status.
* **Willing to Quarantine if Required** (`quarantine_willing`, select_one, required): Please select yes or no to indicate your willingness to quarantine if required.
* **Quarantine Duration if Required** (`quarantine_duration`, number, optional): If you are willing to quarantine, please enter the duration in days.
* **Willing to be Tested** (`testing_willing`, select_one, required): Please select yes or no to indicate your willingness to be tested.
* **Screening Date** (`screening_date`, date, required): Please select the date you are being screened for COVID-19 exposure.
