# COVID 19 Antibody Test Request - Help Guide

## Purpose
This form is designed for patients to request a COVID-19 antibody test. The test checks for the presence of antibodies produced in response to a past or current COVID-19 infection. It helps healthcare providers understand whether a patient has been infected with the virus or not.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal information, including your patient name, date of birth, gender, email address, phone number, and address.
2. Select your insurance provider and member ID number (if applicable).
3. Provide information about your reason for requesting the test, any symptoms you're experiencing, and when your symptoms started.
4. Answer questions about your past exposure to COVID-19, previous tests, and any high-risk medical conditions you may have.
5. If you're a healthcare worker, please indicate your status.
6. Choose your preferred appointment date and time.
7. Select your transportation method (if applicable).
8. Indicate your urgency level for testing.
9. Add any additional comments or information about your request.
10. Sign and date the form to confirm your information.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Please enter your full legal name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your birthdate in the format MM-DD-YYYY.
* **Gender** (`gender`, select_one, required): Select your gender from the list.
* **Email Address** (`email_address`, email, required): Enter your valid email address for appointment confirmation.
* **Phone Number** (`phone_number`, text, required): Enter your phone number for easy contact.
* **Street Address** (`address`, text, required): Enter your complete street address.
* **City** (`city`, text, required): Enter the city where you live.
* **State** (`state`, text, required): Enter the state or province where you reside.
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Insurance Provider** (`insurance_provider`, text, optional): If applicable, enter your insurance company name.
* **Insurance ID Number** (`insurance_id`, text, optional): If applicable, enter your insurance member ID number.
* **Primary Care Physician** (`primary_care_physician`, text, optional): If applicable, enter your doctor's name.
* **Physician Phone** (`physician_phone`, text, optional): If applicable, enter your doctor's phone number.
* **Reason for Test Request** (`reason_for_request`, select_one, required): Select your reason for requesting the test from the list.
* **Symptom History** (`symptom_history`, select_one, required): Indicate if you're experiencing COVID-19 related symptoms.
* **Symptoms Experienced** (`symptoms_experienced`, select_multiple, required): Select all the symptoms you're experiencing.
* **Symptom Onset Date** (`symptom_onset_date`, date, optional): If applicable, enter the date when symptoms started.
* **Known COVID-19 Exposure** (`known_exposure`, select_one, required): Indicate if you had close contact with a positive case.
* **Previous COVID-19 Test** (`previous_test`, select_one, required): If applicable, select your previous test result.
* **Previous Test Date** (`previous_test_date`, date, optional): If applicable, enter the date of your previous test.
* **High Risk Condition** (`high_risk_condition`, select_one, required): Indicate if you have a high-risk medical condition.
* **Healthcare Worker** (`healthcare_worker`, select_one, required): If you're a healthcare worker, select 'True'.
* **Preferred Appointment Date** (`preferred_appointment_date`, date, required): Select your preferred appointment date.
* **Preferred Appointment Time** (`preferred_appointment_time`, select_one, required): Select your preferred time of day for the appointment.
* **Transportation Method** (`transportation_method`, select_one, optional): If applicable, select how you'll arrive at the appointment.
* **Urgency Level** (`urgency`, select_one, required): Select your urgency level for testing.
* **Additional Comments** (`additional_comments`, text, optional): Provide any other relevant information.
* **Patient Signature** (`patient_signature`, text, required): Type your full name to confirm your information.
* **Date Signed** (`date_signed`, date, required): Date and sign the form to confirm your request.

## Tips
* Make sure to fill in your personal information accurately.
* Select your reason for requesting the test truthfully.
* If you have any high-risk medical conditions or are a healthcare worker, please indicate this truthfully.
* Choose your preferred appointment date and time carefully, as it may not be available.
* If you have any additional comments or information, please provide it in the space provided.
