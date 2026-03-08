# COVID 19 Out Of State Travel Screening Form - Help Guide
## Purpose
The purpose of this form is to assess the risk of COVID-19 transmission for travelers visiting other states. It will help determine if the traveler is safe to travel or if further evaluation is required.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide personal information, including full name, email address, and phone number.
2. Enter the destination state and the purpose of your travel.
3. Select the method of travel and enter your travel dates.
4. Answer questions about your health status, including any symptoms, contact with COVID-19 cases, and vaccination history.
5. Submit the form for evaluation.

## Field-by-Field Explanation

* **Full Name** (`traveler_name`, Text, Required): Enter your full name as it appears on your identification.
* **Email Address** (`traveler_email`, Email, Required): Enter your email address that we can use to contact you.
* **Phone Number** (`traveler_phone`, Text, Required): Enter your phone number in the format of (XXX) XXX-XXXX.
* **Date of Birth** (`date_of_birth`, Date, Required): Enter your date of birth in the format YYYY-MM-DD.
* **Home State or Province** (`home_state`, Text, Required): Enter the state or province you are from.
* **Destination State** (`travel_destination`, Text, Required): Enter the state you are traveling to.
* **Purpose of Travel** (`travel_purpose`, Select One, Required): Select the reason for your travel (e.g., Business, Family visit, Vacation, Medical appointment, Essential work, Other).
* **Departure Date** (`departure_date`, Date, Required): Enter the date you are departing to your destination.
* **Expected Return Date** (`return_date`, Date, Required): Enter the date you expect to return from your destination.
* **Method of Travel** (`travel_mode`, Select Multiple, Required): Select all methods of travel you will use (e.g., Personal vehicle, Commercial flight, Train, Bus, Other).
* **Do you currently have any COVID-19 symptoms?** (`current_symptoms`, Select One, Required): Answer yes or no if you have any COVID-19 symptoms.
* **If yes, describe symptoms** (`symptom_details`, Text, Optional): If you answered yes, describe your symptoms.
* **Do you have a fever?** (`fever`, Select One, Required): Answer yes or no if you have a fever.
* **Do you have a cough or shortness of breath?** (`cough_shortness_breath`, Select One, Required): Answer yes or no if you have a cough or shortness of breath.
* **Have you had close contact with a confirmed COVID-19 case in the past 14 days?** (`close_contact`, Select One, Required): Answer yes or no if you had close contact with a COVID-19 case.
* **Have you been diagnosed with COVID-19 in the past 14 days?** (`diagnosed_covid`, Select One, Required): Answer yes or no if you were diagnosed with COVID-19.
* **Are you fully vaccinated?** (`vaccination_status`, Select One, Required): Answer yes or no if you are fully vaccinated.
* **Date of last vaccination dose** (`vaccination_date`, Date, Optional): If you answered yes, enter the date of your last vaccination dose.
* **Based on this screening, travel is approved** (`screening_approved`, Select One, Required): The final result of your screening.
* **Screening Date** (`screening_date`, Date, Required): The date of your screening.

## Tips

* Make sure to enter accurate and complete information to ensure a correct evaluation.
* If you have any questions or concerns, contact the organization.
* If you are unsure about any questions, answer "I don't know" or "Prefer not to answer".
