# COVID 19 Vaccine Appointment Form - Help Guide
## Purpose
This form is used to gather essential information from patients before their COVID-19 vaccine appointment.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in your patient's full name in the "Patient Full Name" field.
2. Enter your patient's email address in the "Email Address" field, so we can send appointment confirmation and any relevant information.
3. Enter your patient's phone number in the "Phone Number" field, so we can contact you to confirm their appointment and answer any questions.
4. In the "Preferred Appointment Date" field, select the date you would like to schedule the appointment.
5. In the "Preferred Appointment Time" field, select the time you would like to schedule the appointment.
6. Choose the type of appointment from the options provided in the "Appointment Type" field.
7. Select your preferred vaccine from the options provided in the "Vaccine Preference" field.
8. In the "Insurance Status" field, choose whether your patient is insured, uninsured, on Medicaid, or on Medicare.
9. If your patient has insurance, fill out the "Insurance Provider Name" and "Insurance Member ID" fields with their relevant information.
10. In the "Known allergies" field, list any allergies your patient has, if applicable.
11. List any current medications your patient is taking, if applicable.
12. List any chronic medical conditions your patient has, if applicable.
13. Answer whether your patient is immunocompromised or not.
14. Answer whether your patient is pregnant or may be pregnant.
15. Answer whether your patient has had a fever or feels sick in the past 14 days.
16. Answer whether your patient has had COVID-19 symptoms in the past 14 days.
17. Answer whether your patient has tested positive for COVID-19 recently.
18. If yes, enter the date of the positive test, if known.
19. Answer whether your patient needs a language interpreter, and if so, which language they require.
20. In the "Additional Notes or Requests" field, include any other information about your patient that would be helpful for their appointment.
21. Finally, confirm that you have read and agree to the appointment terms by selecting "I agree" in the "I have read and agree to the appointment terms" field.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, Text, Required): Enter your patient's full name as it appears on their identification.
* **Email Address** (`patient_email`, Email, Required): Enter your patient's email address for appointment confirmation and relevant information.
* **Phone Number** (`patient_phone`, Text, Required): Enter your patient's phone number so we can contact you to confirm their appointment.
* **Appointment Type** (`appointment_reason`, Select One, Required): Select the type of appointment the patient needs, e.g. First dose, Second dose, Booster dose, Single dose vaccine, or Vaccination card replacement.
* **Preferred Appointment Date** (`appointment_date`, Date, Required): Select the date you would like to schedule the appointment.
* **Preferred Appointment Time** (`appointment_time`, Time, Required): Select the time you would like to schedule the appointment.
* **Appointment Type** (`appointment_reason`, Select One, Required): Select the type of appointment the patient needs, e.g. First dose, Second dose, Booster dose, Single dose vaccine, or Vaccination card replacement.
* **Vaccine Preference** (`vaccine_preference`, Select One, Required): Select your preferred vaccine type.
* **Insurance Status** (`insurance_status`, Select One, Required): Select the insurance status of your patient, i.e. Insured, Uninsured, Medicaid, or Medicare.
* **Insurance Provider Name** (`insurance_provider`, Text, Optional): Enter your patient's insurance provider name, if applicable.
* **Insurance Member ID** (`insurance_id`, Text, Optional): Enter your patient's insurance member ID, if applicable.
* **Known Allergies** (`allergies`, Text, Optional): List any known allergies your patient has.
* **Current Medications** (`medications`, Text, Optional): List any current medications your patient is taking.
* **Chronic Medical Conditions** (`chronic_conditions`, Text, Optional): List any chronic medical conditions your patient has.
* **Immunocompromised** (`immunocompromised`, Select One, Required): Answer whether your patient is immunocompromised.
* **Pregnant or May be Pregnant** (`pregnancy`, Select One, Required): Answer whether your patient is pregnant or may be pregnant.
* **Had Fever or Sick** (`fever`, Select One, Required): Answer whether your patient has had a fever or feels sick in the past 14 days.
* **COVID-19 Symptoms** (`covid_symptoms`, Select One, Required): Answer whether your patient has had COVID-19 symptoms in the past 14 days.
* **Test Positive for COVID-19** (`covid_positive`, Select One, Required): Answer whether your patient has tested positive for COVID-19 recently.
* **COVID-19 Positive Date** (`covid_positive_date`, Date, Optional): Enter the date your patient tested positive for COVID-19, if known.
* **Need Language Interpreter** (`interpreter_needed`, Select One, Required): Answer whether your patient needs a language interpreter.
* **Interpreter Language** (`interpreter_language`, Text, Optional): Enter the language your patient requires if they need a language interpreter.
* **Additional Notes or Requests** (`additional_notes`, Text, Optional): Enter any additional notes or requests for your patient's appointment.
* **I have read and agree to the appointment terms** (`consent`, Select One, Required): Confirm that you have read and agree to the appointment terms by selecting "I agree".
