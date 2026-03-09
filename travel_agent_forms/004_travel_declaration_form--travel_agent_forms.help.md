# travel_declaration_form - Help Guide
## Purpose
The "travel_declaration_form" is used to collect information about an individual's travel status and health. It helps the travel agency to assess the risk of COVID-19 transmission and take necessary precautions.

## How To Complete This Form

1.  To complete the form, follow these steps:
    1.  Select the current travel status.
    2.  Indicate if you are experiencing any symptoms of COVID-19.
    3.  Enter your body temperature in Celsius.
    4.  Provide the travel date in the format YYYY-MM-DD.
    5.  Enter the travel time in the format 24-hour clock (HH:MM).
    6.  If you are not traveling, you can leave the "Country Visited" field blank.
    7.  Finally, select the date of form submission in the format YYYY-MM-DD.

## Field-by-Field Explanation

*  **Current Travel Status (travel_status)** (`travel_status`, text, required): Please select your current travel status to help the travel agency understand your situation.
*  **Symptoms of COVID-19 (symptoms)** (`symptoms`, select_multiple, required): Check all that apply to indicate if you are experiencing any symptoms of COVID-19.
*  **Body Temperature (temperature)** (`temperature`, number, required): Enter your body temperature in Celsius, as this is crucial for assessing your health risk.
*  **Travel Date (travel_date)** (`travel_date`, date, required): Provide the date of your travel in the format YYYY-MM-DD.
*  **Travel Time (travel_time)** (`travel_time`, time, required): Enter the time of your travel in the 24-hour format (HH:MM).
*  **Country Visited (country_visited)** (`country_visited`, text, optional): If you are traveling, please enter the country you visited.
*  **Form Submission Date (form_submission_date)** (`form_submission_date`, date, required): Select the date and time of form submission in the format YYYY-MM-DD.
