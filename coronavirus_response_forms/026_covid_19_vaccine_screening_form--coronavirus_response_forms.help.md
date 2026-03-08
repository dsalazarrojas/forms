<thinking> 
This form is designed to screen employees for eligibility to receive the COVID-19 vaccine. It collects personal and health information to determine if an employee is eligible for vaccination. The form is divided into two main sections: Employee Information and Eligibility Screening. The goal of this form is to ensure that employees who are eligible for vaccination receive the necessary information and resources to get vaccinated, while protecting those who are not eligible. This form should be completed by all employees before being vaccinated.</thinking>
# COVID 19 Vaccine Screening Form - Help Guide
## Purpose
The COVID-19 Vaccine Screening Form is designed to screen employees for eligibility to receive the COVID-19 vaccine. It is essential to complete this form to ensure that you are eligible for vaccination and to provide the necessary information and resources to receive the vaccine.

## How To Complete This Form
To complete this form, please follow the instructions below:

*   Answer each question carefully and accurately.
*   Enter your information in the required fields.
*   If you are unsure about any of the questions, choose 'Unsure' or 'Prefer Not to Say' as the answer.
*   Do not leave any fields blank.

## Field-by-Field Explanation

*   **Employee Name** (`screen_employee_name`, `text`, `required`): Enter your full name as it appears on your official identification.
*   **Employee ID** (`screen_employee_id`, `text`, `required`): Enter your employee identification number as assigned by your organization.
*   **Department** (`screen_department`, `text`, `required`): Enter your department name.
*   **Date of Birth** (`screen_date_of_birth`, `date`, `required`): Enter your date of birth in the format MM-DD-YYYY.
*   **Email Address** (`screen_email`, `email`, `optional`): Enter your work email address.
*   **Phone Number** (`screen_phone`, `phone`, `required`): Enter your work phone number.
*   **Eligibility Screening** (`screen_eligibility_header`, `note`, `optional`): This section is not editable.
*   **Are You Interested in the COVID-19 Vaccine?** (`screen_vaccine_interest`, `select_one`, `required`): If you have not received the vaccine yet, please indicate if you are interested in getting vaccinated.
*   **Age Group** (`screen_age_group`, `select_one`, `required`): Select your age category from the following options:
    *   Under 18
    *   18-30
    *   31-50
    *   51-65
    *   65+
*   **Do You Work On-Site Regularly?** (`screen_on_site_work`, `select_one`, `required`): Select your on-site work frequency from the following options:
    *   Yes, full-time on-site
    *   Yes, part-time on-site
    *   Hybrid schedule
    *   Remote only
*   **Priority Group Status** (`screen_priority_group`, `select_one`, `required`): Select your priority group status from the following options:
    *   Healthcare worker
    *   Essential worker
    *   First responder
    *   General employee
*   **Do You Have Any Health Conditions?** (`screen_health_conditions`, `select_one`, `required`): Select your health condition status from the following options:
    *   No conditions
    *   Yes, have conditions
    *   Prefer Not to Say
*   **If Yes, Please List Your Conditions** (`screen_conditions_list`, `text`, `optional`): If you have any health conditions, list them here.
*   **Are You Immunocompromised?** (`screen_immunocompromised`, `select_one`, `required`): Select your immunocompromised status from the following options:
    *   False
    *   True
    *   Unsure
    *   Prefer Not to Say
*   **Vaccine Component Allergies** (`screen_allergies`, `select_one`, `required`): Select your vaccine allergy status from the following options:
    *   No known allergies
    *   Have allergies
    *   Unsure
*   **If You Have Allergies, Please Describe** (`screen_allergy_details`, `text`, `optional`): If you have any allergies, provide further details here.
*   **Currently Ill with Acute Illness?** (`screen_current_illness`, `select_one`, `required`): Select your acute illness status from the following options:
    *   No acute illness
    *   Yes, currently ill
    *   Unsure
*   **Have You Had COVID-19 Previously?** (`screen_had_covid`, `select_one`, `required`): Select your COVID-19 status from the following options:
    *   True
    *   False
    *   Unsure
*   **When Did You Have COVID-19?** (`screen_covid_date`, `date`, `optional`): If you have had COVID-19 previously, enter the date when you had it in the format MM-DD-YYYY.
*   **Previous COVID-19 Vaccine Doses** (`screen_previous_vaccines`, `integer`, `required`): Enter the number of doses you have previously received.
*   **Vaccination Eligibility Status** (`screen_vaccination_eligibility`, `select_one`, `required`): Select your vaccination eligibility status from the following options:
    *   Eligible for vaccination
    *   Needs further evaluation
    *   Not eligible at this time
    *   Refer to physician
*   **Provider Notes** (`screen_provider_notes`, `text`, `optional`): Enter any additional notes from the screener.
