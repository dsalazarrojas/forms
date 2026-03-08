<thinking>
This form is designed to collect information from individuals who want to register for a COVID-19 vaccine event. The form will help us ensure that you have the necessary information to provide a safe and effective vaccination experience. Please note that you will only need to fill out this form once, and you will be asked to confirm the accuracy of your information at the end. 
</thinking>

# COVID 19 Vaccine Event Registration Form - Help Guide
## Purpose
This form is used to collect participant information for a COVID-19 vaccine event.

## How To Complete This Form
To complete this form, follow these steps:
1. Provide your personal details, including your first name, last name, date of birth, email, phone number, and street address (if applicable).
2. Enter the event name, date, and location where the vaccination event is being held.
3. Choose your preferred time slot for the vaccination event.
4. If you have received previous COVID-19 vaccinations, provide the number of doses and type of vaccine you received.
5. Indicate any previous COVID-19 vaccination history and the type of vaccine you received.
6. If you have any severe allergies to vaccine components, please indicate this.
7. Answer a series of questions about your health, including current symptoms and if you are currently ill.
8. Confirm that all the information provided is accurate.

## Field-by-Field Explanation
* **First Name** (`participant_first_name`, `text`, required): Enter your first name.
* **Last Name** (`participant_last_name`, `text`, required): Enter your last name.
* **Date of Birth** (`participant_dob`, `date`, required): Enter your date of birth in MM-DD-YYYY format.
* **Email Address** (`participant_email`, `email`, required): Enter your primary email address.
* **Phone Number** (`participant_phone`, `text`, required): Enter your contact phone number.
* **Street Address** (`participant_address`, `text`, optional): Enter your current street address.
* **City, State, and ZIP Code** (`city_state_zip`, `text`, optional): Enter your city, state, and ZIP code.
* **Vaccination Event Name** (`event_name`, `text`, required): Enter the name of the vaccination event.
* **Event Date** (`event_date`, `date`, required): Enter the date of the vaccination event.
* **Event Location** (`event_location`, `text`, required): Enter the location of the vaccination event.
* **Preferred Time Slot** (`preferred_time_slot_event`, `select_one`, optional): Choose your preferred time slot for the vaccination event.
* **Previous COVID-19 Doses** (`previous_covid_doses`, `number`, required): Enter the number of previous COVID-19 vaccine doses you have received.
* **Previous Vaccine Product** (`previous_vaccine_product`, `select_one`, optional): Select the type of vaccine you received before (if any).
* **Date of Last COVID-19 Dose** (`last_dose_date`, `date`, optional): Enter the date of your last COVID-19 vaccine dose.
* **Vaccine Type Preference** (`vaccine_preference_event`, `select_one`, optional): Select your vaccine type preference for this event.
* **Health Screening** (`current_symptoms`, `select_one`, required): Answer yes or no to whether you currently have any symptoms.
* **Current Illness** (`current_illness_event`, `select_one`, required): Answer yes or no to whether you are currently ill.
* **Severe Allergies** (`known_allergies_event`, `select_one`, required): Answer yes or no to whether you have severe allergies to vaccine components.
* **Accessibility Needs** (`accessibility_needs_event`, `select_multiple`, optional): Select any special needs or accessibility requirements you have.
* **Additional Questions or Comments** (`questions_or_comments`, `text`, optional): Enter any additional questions or comments you have.
* **Confirmation Statement** (`confirmation_statement`, `select_one`, required): Confirm that all the information provided is accurate.
