# Blood Test Booking Form - Help Guide

## Purpose
The "Blood Test Booking Form" is a user-facing form designed to schedule blood tests for patients. This form collects essential information to ensure a smooth and efficient blood test experience. By providing accurate and detailed information, you will be able to book your appointment and receive your test results in a timely manner.

## How To Complete This Form
1. Fill out the form with your personal details and test requirements.
2. Select your preferred location and date for the test.
3. Choose your preferred time for the test.
4. Provide your insurance provider and policy number if applicable.
5. Indicate your test urgency and any special needs you may have.
6. Specify how you would like to receive your test results.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter your full legal name as it appears on your government-issued ID or passport.
* **Date of Birth** (`date_of_birth`, date, required): Provide your birth date in the YYYY-MM-DD format.
* **Gender** (`gender`, select_one, required): Select your gender from the available options (Male, Female, Non-Binary, Prefer Not to Say).
* **Email Address** (`email`, email, required): Enter a valid email address where you can be reached for communication.
* **Phone Number** (`phone`, text, required): Provide your contact phone number.
* **Address** (`address`, text, required): Enter your street address.
* **City** (`city`, text, required): Provide the city name where you reside.
* **State** (`state`, text, required): Enter your state or region.
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Insurance Provider** (`insurance_provider`, text, optional): If you have insurance, enter your insurance provider name.
* **Insurance ID** (`insurance_id`, text, optional): If you have insurance, enter your policy number.
* **Referring Doctor** (`referring_doctor`, text, required): Enter the name of your referring doctor.
* **Doctor Phone** (`doctor_phone`, text, optional): Enter your doctor's contact number.
* **Types of Tests** (`test_types`, select_multiple, required): Select all the tests you require (e.g., CBC, BMP, Lipid Panel, etc.).
* **Fasting Required** (`fasting_required`, select_one, required): Check if your doctor has instructed you to fast before the test.
* **Preferred Location** (`preferred_location`, select_one, required): Choose the lab location where you prefer to have your test done (Main Laboratory, Downtown Branch, Westside Clinic, Northside Center, Home Collection).
* **Preferred Date** (`preferred_date`, date, required): Select your preferred date for the test.
* **Preferred Time** (`preferred_time`, time, required): Choose your preferred time for the test.
* **Alternate Date** (`alternate_date`, date, optional): Select an alternate date in case the preferred date is not available.
* **Test Urgency** (`urgency`, select_one, required): Select the urgency of your test (Routine, Urgent, STAT).
* **Difficult Blood Draw** (`difficult_draw`, select_one, required): Check if you have had difficulties with blood draws in the past.
* **Special Needs** (`special_needs`, text, optional): If you have any special needs or requirements, provide details.
* **How to Receive Results** (`how_to_receive_results`, select_one, required): Choose how you would like to receive your test results (Online Portal, Email, Phone Call, Mail, Through Doctor).
* **Additional Notes** (`additional_notes`, text, optional): If you have any additional information to provide, enter it here.

## Tips
- Double-check your information for accuracy before submitting the form.
- Make sure to select all required fields before submitting the form.
- If you have any questions or concerns, contact us for assistance.
