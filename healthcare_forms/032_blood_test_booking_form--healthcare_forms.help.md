<thinking>
This form is designed to help patients book blood test appointments, allowing them to schedule a convenient time for their tests. The form will gather essential information about the patient, including their personal details, medical history, and preferences for the test appointment. To prevent duplication of effort, patients can only book an appointment for a specific lab location, and the form will guide them through the process of selecting the most suitable location.
</thinking>

# Blood Test Booking Form - Help Guide
## Purpose
This form is used to schedule blood test appointments for patients. It gathers the necessary information to book a suitable appointment time and lab location.

## How To Complete This Form
1. Fill out the form with your personal details, including First Name, Last Name, Date of Birth, Email Address, Phone Number, and Patient ID (if applicable).
2. Select your preferred Lab Location from the list provided.
3. Choose your preferred Test Date and Time from the available options.
4. Select all the blood tests you require from the list of options.
5. Indicate if fasting will be required for your test.
6. If required, fill out the name of the physician ordering the test and any relevant medical history.
7. Optionally, provide any Current Medications, Known Allergies, and Special Instructions or Notes.
8. Select the method of confirmation you would like to receive regarding your appointment.

## Field-by-Field Explanation

* **First Name** (`patient_first_name`, text, required): Enter your first name.
* **Last Name** (`patient_last_name`, text, required): Enter your last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth.
* **Email Address** (`patient_email`, email, required): Enter your email address where you can be reached.
* **Phone Number** (`patient_phone`, text, required): Enter your phone number where you can be reached.
* **Patient ID (if existing)** (`patient_id`, text, optional): If you have an existing patient ID, enter it here.
* **Insurance Provider** (`insurance_provider`, text, optional): If you have an insurance provider, enter it here.
* **Preferred Lab Location** (`lab_location`, select_one, required): Choose the location where you would like to take your test from the provided options.
* **Preferred Test Date** (`preferred_date`, date, required): Select the date for your test appointment.
* **Preferred Time** (`preferred_time`, select_one, required): Choose the time of day for your test appointment.
* **Blood Tests Required** (`test_types`, select_multiple, required): Select all the blood tests you require from the list of options.
* **Will fasting be required for your test?** (`fasting_required`, select_one, optional): Indicate if fasting will be required for your test.
* **Ordering Physician Name** (`physician_name`, text, optional): If required, enter the name of the physician ordering the test.
* **Current Medications (for reference)** (`current_medications`, text, optional): If required, list any current medications you are taking.
* **Known Allergies** (`allergies`, text, optional): If required, list any known allergies.
* **Special Instructions or Notes** (`special_instructions`, text, optional): If required, enter any special instructions or notes for your test.
* **How should we confirm your appointment?** (`confirmation_preference`, select_one, required): Choose the method by which you would like to receive confirmation of your appointment.

Note: This form is designed to be completed in conjunction with a healthcare professional, and any information provided is subject to review and verification.
