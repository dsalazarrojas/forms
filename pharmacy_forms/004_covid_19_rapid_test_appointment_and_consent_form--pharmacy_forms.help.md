# COVID 19 Rapid Test Appointment And Consent Form - Help Guide

## Purpose
This form is designed for patients to schedule an appointment for a COVID-19 rapid test and provide necessary information for the test, including personal details, contact information, and consent for testing and data sharing.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your preferred appointment date and time.
2. Fill out the patient information sections:
	* First Name: enter your legal first name.
	* Last Name: enter your legal last name.
	* Date of Birth: enter your date of birth in MM/DD/YYYY format.
3. Provide your contact information:
	* Phone Number: enter your phone number.
	* Email Address: enter your email address.
	* Home Address: enter your street address.
	* City: enter your city of residence.
	* State: enter your state or province.
	* ZIP Code: enter your postal code.
4. If you have insurance, provide your insurance provider and ID number.
5. Specify your reason for testing:
	* Select from the options provided.
6. Indicate if you are currently experiencing COVID-19 symptoms:
	* Select 'True' if you are experiencing symptoms.
	* Select 'False' if you are not experiencing symptoms.
7. If you are experiencing symptoms, select all that apply from the list of symptoms.
8. Indicate your consent for testing and data sharing:
	* Select 'Yes I consent' for both testing and data sharing.
	* Select 'No I do not consent' if you do not agree.
9. Acknowledge that you have received the HIPAA privacy notice:
	* Select 'Yes acknowledged'.
10. Confirm that you understand you are financially responsible for any charges not covered by insurance:
	* Select 'Yes I understand'.
11. Choose how you would like to receive your test results:
	* Select from the options provided.
12. If applicable, provide emergency contact information:
	* Enter the name and phone number of an emergency contact.
13. Add any additional comments or questions:
	* Enter any additional information or questions you have.

## Field-by-Field Explanation
* **Preferred Appointment Date** (`appointment_date`, `date`, `required`): Select your preferred date for the appointment.
* **Preferred Appointment Time** (`appointment_time`, `time`, `required`): Select your preferred time slot for the appointment.
* **First Name** (`patient_first_name`, `text`, `required`): Enter your legal first name.
* **Last Name** (`patient_last_name`, `text`, `required`): Enter your legal last name.
* **Date of Birth** (`date_of_birth`, `date`, `required`): Enter your date of birth in MM/DD/YYYY format.
* **Gender** (`gender`, `select_one`, `required`): Select your gender from the options provided.
* **Phone Number** (`phone_number`, `text`, `required`): Enter your phone number.
* **Email Address** (`email_address`, `email`, `required`): Enter your email address for appointment confirmation.
* **Home Address** (`home_address`, `text`, `required`): Enter your street address.
* **City** (`city`, `text`, `required`): Enter your city of residence.
* **State** (`state`, `text`, `required`): Enter your state or province.
* **ZIP Code** (`zip_code`, `text`, `required`): Enter your postal code.
* **Insurance Provider** (`insurance_provider`, `text`, `optional`): If you have insurance, enter the name of your insurance company.
* **Insurance ID Number** (`insurance_id`, `text`, `optional`): If you have insurance, enter your member or policy ID number.
* **Reason for Testing** (`reason_for_testing`, `select_one`, `required`): Select the reason for testing from the options provided.
* **Are you currently experiencing any COVID-19 symptoms** (`current_symptoms`, `select_one`, `required`): Select 'True' if you are experiencing symptoms, 'False' if you are not.
* **Which symptoms are you experiencing** (`symptom_list`, `select_multiple`, `optional`): If you are experiencing symptoms, select all that apply from the list of symptoms.
* **I consent to receive a COVID-19 rapid test** (`consent_for_testing`, `select_one`, `required`): Select 'Yes I consent' to receive the test.
* **I consent to my test results being shared with relevant health authorities** (`consent_for_data_sharing`, `select_one`, `required`): Select 'Yes I consent' to share your test results.
* **I acknowledge that I have received the HIPAA Privacy Notice** (`hipaa_acknowledgment`, `select_one`, `required`): Select 'Yes acknowledged'.
* **I understand I am financially responsible for any charges not covered by insurance** (`financial_responsibility`, `select_one`, `required`): Select 'Yes I understand'.
* **How would you like to receive your test results** (`test_result_delivery_method`, `select_one`, `required`): Select how you would like to receive your test results from the options provided.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, `optional`): If applicable, enter the name of an emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, `optional`): If applicable, enter the phone number of an emergency contact.
* **Additional Comments or Questions** (`additional_comments`, `text`, `optional`): Enter any additional information or questions you have.
* **Date of Consent** (`patient_signature_date`, `date`, `required`): This field will automatically be populated with today's date upon submission.
