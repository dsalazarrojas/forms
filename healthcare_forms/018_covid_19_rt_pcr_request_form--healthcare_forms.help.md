<thinking>
The form is designed for patients to request a COVID-19 RT-PCR test, a type of test used to diagnose the virus. To ensure accurate and efficient processing, we've implemented checks to prevent duplicate requests and ensure that required fields are filled in correctly.

To determine if a patient has already submitted a request, we use the ID or Passport Number as the primary identifier. If a patient has already submitted a request, they will not be able to submit another request until the status of their previous request is resolved.

We also have checks in place to prevent patients from choosing conflicting options, such as selecting "International Travel" as the reason for the test and also selecting a destination country or city that is not a valid one.

The form is designed to be completed in one session, with fields that require input from the patient, such as their name, ID or Passport Number, reason for testing, preferred swab date and time, and other relevant details. 

Please note that some fields may be optional, but it is essential to fill in all required fields to ensure proper processing and avoid delays in getting the test.

By following this guide, patients will be able to fill out the form accurately and efficiently, ensuring that their request for a COVID-19 RT-PCR test is processed correctly and without errors.
</thinking>

# COVID 19 RT PCR Request Form - Help Guide
## Purpose
This form is designed to help patients request a COVID-19 RT-PCR test for various reasons such as international travel, work requirement, symptoms, close contact, or surgery requirement. 

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out your Patient Full Name and ID or Passport Number, as these are required fields.
2. Choose the correct reason for your COVID-19 PCR test by selecting one of the provided options (International Travel, Work Requirement, Symptoms Present, Close Contact, or Surgery Requirement).
3. If you are testing for international travel, select a destination country or city to ensure accurate processing of your request.
4. Enter your preferred date for the swab test.
5. Choose your preferred time slot for the swab test.
6. Confirm whether you have ever had a positive COVID-19 test result.
7. Select your preferred method of payment.
8. Enter your medical insurance number, if applicable.
9. Choose your preferred method for receiving your test results.
10. Finally, give your consent for the swab test.

## Field-by-Field Explanation
* **Patient Full Name** (`patient_name`, Text, required): This is your full name as it appears on your ID or passport. Please enter your name as it is written on your ID or passport.
* **ID or Passport Number** (`id_passport`, Text, required): Enter your ID or Passport Number for identification purposes. This is essential for processing your request.
* **Reason for COVID-19 PCR Test** (`reason_for_test`, Select One, required): This is the reason why you are requesting a COVID-19 PCR test. Please choose one of the provided options.
* **Date of Planned Travel** (`travel_date`, Date, optional): If you are requesting the test for international travel, enter the date of your planned travel. This is optional but helps us process your request accurately.
* **Destination Country/City** (`travel_dest`, Text, optional): Enter the country or city you are visiting if you are requesting the test for international travel. This helps us ensure that you receive the necessary travel documentation.
* **Preferred Swab Date** (`swab_date_pref`, Date, required): Choose your preferred date for the swab test. Try to be as specific as possible and keep in mind that some dates may not be available due to high demand.
* **Preferred Time Slot** (`time_slot_pref`, Select One, required): Select your preferred time slot for the swab test. Please consider that some time slots may be busy due to high demand.
* **Have you ever had a positive COVID-19 test result?** (`prev_positive`, Select One, required): Confirm whether you have ever had a positive COVID-19 test result.
* **Preferred Payment Method** (`payment_method_pref`, Select One, required): Choose your preferred method of payment.
* **Medical Insurance Number** (`insurance_no`, Text, required): If you are using your medical insurance, please enter your insurance number. If you are paying cash, enter N/A.
* **Preferred Results Delivery Method** (`results_delivery`, Select One, required): Choose how you would like to receive your test results.
* **Consent for Swab** (`consent_header`, Note, required): This section outlines the terms of your consent for the swab test. Please read it carefully and confirm your consent.
* **I consent to the COVID-19 PCR swab test** (`swab_consent`, Select One, required): Confirm your consent for the COVID-19 PCR swab test. 

## Tips
- Make sure to fill out all required fields accurately and completely.
- If you are unsure about any of the fields, please contact us for assistance.
- Please be aware that some fields may have specific time slots or dates available due to high demand. Try to be flexible with your preferred time slot and date to ensure that your request is processed as soon as possible.
- If you have any concerns or questions about your request, please do not hesitate to contact us for assistance.
