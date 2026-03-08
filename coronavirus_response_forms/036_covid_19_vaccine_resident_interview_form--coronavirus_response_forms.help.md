# Covid 19 Vaccine Resident Interview Form - Help Guide
## Purpose
This form is used to collect information from residents about their COVID-19 vaccination status.

## How To Complete This Form
1. Fill out all the required fields (marked as required in the form).
2. Enter your information accurately and completely.
3. If you are unsure about any field, try your best to answer truthfully.

## Field-by-Field Explanation

* **Resident Name** (`resident_info_resident_name`, text, required): Please enter your name as it appears on your government-issued ID or official documents.
* **Date of Birth** (`resident_info_dob`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Gender** (`resident_info_gender`, select_one, required): Select your gender from the given options (Female, Male, Other, Non-binary, Prefer not to say).
* **Ethnicity** (`resident_info_ethnicy`, select_multiple, required): Select all the ethnicities that apply to you (Asian, White, Black, Hispanic or Latino, Multi-racial, American Indian or Alutiaue, Native Hawaiian or Pacific Islr, Other race).
* **Vaccination Status** (`resident_info_vacc_status`, select_one, required): Select your current vaccination status (Not vaccinated, Partly vaccinated, Fully vaccinated, Do not know vacciant, Prefer not to say).
* **Reason for not being vaccinated** (`resident_info_reason`, text, required): Please provide a reason for your vaccination status.
* **Number of Doses 1-12** (`resident_info_dose_1`, `resident_info_dose_2`, `resident_info_dose_3`, `resident_info_dose_4`, `resident_info_dose_5`, `resident_info_dose_6`, `resident_info_dose_7`, `resident_info_dose_8`, `resident_info_dose_9`, `resident_info_dose_10`, `resident_info_dose_11`, `resident_info_dose_12`, number, required): Enter the number of doses you have received for each dose number.

Note: Please fill out all the required fields, even if the number of doses is zero for a dose you have not received. For example, if you are fully vaccinated, you should still fill out the dose fields for each number.
