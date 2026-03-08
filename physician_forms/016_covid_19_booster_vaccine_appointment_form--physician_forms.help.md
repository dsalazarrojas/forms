# COVID 19 Booster Vaccine Appointment Form - Help Guide
## Purpose
This form collects essential information required for scheduling a COVID-19 booster vaccination appointment.

## How To Complete This Form
1. Fill out the form completely and accurately with your personal and medical information.
2. Ensure that all required fields are filled out.
3. Select the preferred location and vaccine type (if applicable).
4. Specify any previous side effects or health concerns.
5. Confirm that the provided information is accurate.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, `text`, required): Enter your name as it appears on your official identification.
* **Date of Birth** (`patient_dob`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
* **Medical Record Number** (`patient_id`, `text`, required): Enter your medical record number or ID number.
* **Contact Phone Number** (`phone_number`, `text`, required): Enter your phone number where you can be reached for appointment reminders.
* **Email Address** (`email_address`, `email`, required): Enter your email address for communication and appointment reminders.
* **Request Date** (`appointment_request_date`, `date`, required): Enter the date you prefer for your appointment.
* **First Preferred Appointment Date** (`preferred_date_1`, `date`, required): Select a date for your appointment, taking into consideration our availability.
* **First Preferred Time** (`preferred_time_1`, `time`, required): Select a time for your appointment, taking into consideration our availability.
* **Second Preferred Appointment Date** (`preferred_date_2`, `date`, optional): Select a second date for your appointment, in case the first one is not available.
* **Second Preferred Time** (`preferred_time_2`, `time`, optional): Select a second time for your appointment, in case the first one is not available.
* **Preferred Location** (`appointment_location`, `select_one`, required): Select your preferred location for the appointment (Main clinic, Satellite location, Mobile clinic, Home visit, Other).
* **Vaccine Type Preference** (`vaccine_type_preference`, `select_one`, required): Select your preferred type of vaccine (Pfizer, Moderna, Johnson and Johnson, No preference).
* **Initial COVID-19 Vaccine Received** (`initial_vaccine_type`, `select_one`, required): Select the type of COVID-19 vaccine you received initially (Pfizer, Moderna, Johnson and Johnson, AstraZeneca, Unknown).
* **Date of Initial Vaccination** (`initial_vaccine_date`, `date`, required): Enter the date you received your initial COVID-19 vaccination.
* **Reason for Appointment** (`reason_for_appointment`, `select_one`, required): Select the reason for your appointment (Booster shot, Follow-up, Side effect concern, Information only, Other).
* **Previous Side Effects** (`previous_side_effects`, `select_one`, required): Select if you have experienced side effects from previous doses ('Yes', 'No').
* **Describe Side Effects** (`side_effect_details`, `text`, optional): Provide detailed information about any side effects you have experienced.
* **Current Medications** (`current_medications`, `text`, optional): List any current medications you are taking.
* **Health Concerns or Questions** (`health_concerns`, `text`, optional): Share any health concerns or questions you have.
* **Require Accommodation or Assistance** (`requires_assistance`, `select_one`, required): Select if you require accommodation or assistance ('Yes', 'No').
* **Type of Assistance Needed** (`assistance_needed`, `text`, optional): Specify the type of assistance you need.
* **Confirmation** (`confirmation_received`, `select_one`, required): Confirm that the provided information is accurate ('Yes', 'No').
