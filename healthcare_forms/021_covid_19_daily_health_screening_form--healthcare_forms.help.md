<thinking>...</thinking>

# COVID 19 Daily Health Screening Form - Help Guide
## Purpose
This form is designed to help healthcare professionals screen individuals for potential COVID-19 symptoms. It will guide you through a series of questions to determine if you are at risk for COVID-19 and what steps to take next.

## How To Complete This Form
- Fill in your Screening Date and Screening Time, which are required for tracking purposes.
- Enter the Name of Person and ID Number for the individual being screened.
- Provide the Phone Number and Location of where you are being screened.
- Answer the Health Screening Questions in Section 1, indicating if you have experienced any COVID-19 symptoms in the past 14 days.
- If you have experienced any COVID-19 symptoms, provide the Temperature Reading.
- Answer the questions in Section 2, which will help determine if you are at risk for COVID-19.
- Choose the Screening Result, which will guide further actions for you and the healthcare professional.
- Enter the name of the Screening Staff member who is conducting the screening.
- Add any Additional Notes as needed.

## Field-by-Field Explanation

* **Screening Date** (`screening_date`, `date`, required): Enter the date you are being screened.
* **Screening Time** (`screening_time`, `time`, required): Enter the time you are being screened.
* **Name of Person** (`person_name`, `text`, required): Enter the name of the individual being screened.
* **ID Number** (`person_id`, `text`, required): Enter the ID Number of the individual being screened (e.g., Employee ID, Student ID, etc.).
* **Phone Number** (`phone_number`, `text`, required): Enter the phone number of the individual being screened.
* **Location** (`location`, `text`, required): Enter the location where you are being screened.
* **-- Health Screening Questions --** (`section_header_1`, `note`, required): This section will ask you about potential COVID-19 symptoms you may have experienced in the past 14 days.
* **Temperature Check Completed** (`temperature_check`, `select_one`, required): Indicate if you have had a temperature check performed.
* **Temperature Reading** (`temperature_reading`, `number`, optional): If you have had a temperature check performed, enter the reading here.
* **Fever Present** (`fever_present`, `select_one`, required): Indicate if you have a fever present.
* **Cough or Difficulty Breathing** (`cough`, `select_one`, required): Indicate if you have a cough or difficulty breathing.
* **Sore Throat or Chills** (`sore_throat`, `select_one`, required): Indicate if you have a sore throat or chills.
* **Loss of Taste or Smell** (`loss_of_taste_smell`, `select_one`, required): Indicate if you have lost your taste or smell.
* **Muscle or Body Aches** (`muscle_pain`, `select_one`, required): Indicate if you have muscle or body aches.
* **Headache** (`headache`, `select_one`, required): Indicate if you have a headache.
* **Nausea or Vomiting** (`nausea_vomiting`, `select_one`, required): Indicate if you have nausea or vomiting.
* **Been in Close Contact with COVID-19 Case** (`covid_exposure`, `select_one`, required): Indicate if you have been in close contact with a COVID-19 case.
* **If yes, when was the contact?** (`exposure_timeframe`, `date`, optional): If you have been in close contact with a COVID-19 case, enter the date of the contact.
* **Traveled to High COVID-19 Area** (`covid_travel`, `select_one`, required): Indicate if you have traveled to an area with high COVID-19 cases.
* **Location of Travel** (`travel_location`, `text`, optional): If you have traveled to an area with high COVID-19 cases, enter the location.
* **-- Clearance --** (`section_header_2`, `note`, optional): This section will guide further actions based on your screening result.
* **Screening Result** (`screening_result`, `select_one`, required): Choose the screening result based on your answers.
* **Screening Staff Member** (`screening_staff`, `text`, required): Enter the name of the screening staff member.
* **Additional Notes** (`notes`, `text`, optional): Add any additional notes as needed.
