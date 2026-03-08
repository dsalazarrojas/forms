# COVID 19 Employee Pre Shift Screening Questionnaire - Help Guide
## Purpose
The COVID-19 Employee Pre Shift Screening Questionnaire is designed to quickly and easily identify potential cases of COVID-19 among employees before they begin their shifts. This form is used to gather information about employees' symptoms and potential exposures to COVID-19.

## How To Complete This Form

1. Fill in your screening date and time
2. Enter your employee name and ID
3. Enter the date and time of your shift
4. Select the options for each symptom question truthfully
5. Answer questions about potential exposures to COVID-19
6. Sign off by acknowledging that the information provided is truthful and accurate

## Field-by-Field Explanation

* **Screening Date** (`screening_date`, date, required): Enter the date you are being screened for.
* **Screening Time** (`screening_time`, time, required): Enter the time you are being screened for.
* **Employee Name** (`employee_name`, text, required): Enter your name.
* **Employee ID** (`employee_id`, text, required): Enter your employee ID number.
* **Shift Date** (`shift_date`, date, required): Enter the date of your shift.
* **Shift Time** (`shift_time`, time, required): Enter the time of your shift.
* **Department** (`department`, text, required): Enter the name of your department.
* **Temperature Check Completed** (`temperature_check`, select_one, required): Have you been temperature checked recently? 
* **Temperature Reading** (`temperature_reading`, number, optional): Enter the result of your temperature reading (if taken).
* **Do you have a fever?** (`fever`, select_one, required): Do you have a fever?
* **Do you have a persistent cough?** (`cough`, select_one, required): Do you have a persistent cough?
* **Do you have difficulty breathing?** (`difficulty_breathing`, select_one, required): Do you have difficulty breathing?
* **Do you have a sore throat?** (`sore_throat`, select_one, required): Do you have a sore throat?
* **Do you have muscle or body aches?** (`body_aches`, select_one, required): Do you have muscle or body aches?
* **Do you have a headache?** (`headache`, select_one, required): Do you have a headache?
* **Loss of taste or smell?** (`loss_taste_smell`, select_one, required): Do you have loss of taste or smell?
* **Close contact with confirmed COVID-19 case in last 14 days** (`covid_exposure`, select_one, required): Close contact with confirmed COVID-19 case in last 14 days?
* **Anyone in your household has COVID-19 symptoms** (`household_illness`, select_one, required): Anyone in your household has COVID-19 symptoms?
* **Clearance** (`cleared_to_work`, select_one, required): Are you cleared to work?
* **Screening Staff Name** (`screening_staff`, text, required): Enter the name of the person who screened you.
* **Notes or Concerns** (`notes`, text, optional): Enter any additional notes or concerns.
* **Acknowledge the truthfulness of the information** (`acknowledgment`, select_one, required): Acknowledge that the information provided is truthful and accurate.

## Tips

* Make sure to answer all questions honestly and to the best of your ability.
* Use your employee ID number and name when filling in personal information.
* If you have been temperature checked recently, please enter the result.
* If you have any notes or concerns, please enter them in the notes section.
* Please acknowledge that the information provided is truthful and accurate when you are finished.
* If you are unsure of any answer, please select "Unsure" or "No" where applicable.
