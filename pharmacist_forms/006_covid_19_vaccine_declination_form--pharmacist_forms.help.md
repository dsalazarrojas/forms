# COVID 19 Vaccine Declination Form - Help Guide
## Purpose
This form is used to collect information from patients who have declined the COVID-19 vaccine. It's essential to understand the reasons behind a patient's decision to decline the vaccination, which can help healthcare providers and researchers better understand vaccine hesitancy and refusal patterns.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Ensure all required fields are filled out.
3. If a field is optional, fill it out if you have additional information to provide.
4. Review your responses before submitting the form.

## Field-by-Field Explanation
* **Patient Full Name** (`patient_name`, text, required): Enter the patient's full name as it appears on their government-issued ID or medical records.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in the format MM/DD/YYYY.
* **Patient ID or Medical Record Number** (`patient_id`, text, optional): If you have a patient ID or medical record number, enter it here. This is an optional field, but it can be helpful for healthcare providers to have this information.
* **Email Address** (`email`, email, required): Enter the patient's email address.
* **Phone Number** (`phone`, text, required): Enter the patient's phone number.
* **Date of Declination** (`declination_date`, date, required): Enter the date when you declined the vaccine.
* **Vaccine Type Offered** (`vaccine_type_offered`, select_one, required): Select the type of vaccine that was offered to you.
* **Dose Number Declined** (`dose_number`, select_one, required): Select the number of doses you declined.
* **Reason for Declining Vaccination** (`declination_reason`, select_one, required): Select the primary reason you declined the vaccine.
* **Detailed Explanation** (`reason_details`, text, optional): Provide more information about your decision to decline the vaccine.
* **Risks of not being vaccinated have been discussed** (`risks_discussed`, select_one, required): Select 'True' if you understand the increased risk of getting COVID-19 without the vaccine.
* **Benefits of vaccination have been explained** (`benefits_discussed`, select_one, required): Select 'True' if you understand the benefits of getting vaccinated.
* **All questions were answered to my satisfaction** (`questions_answered`, select_one, required): Select 'True' if all your questions were answered to your satisfaction.
* **This is an informed voluntary decision** (`informed_decision`, select_one, required): Select 'Yes, I confirm' if this is an informed decision.
* **Would reconsider vaccination in the future** (`future_reconsideration`, select_one, optional): Select 'True' if you might reconsider getting vaccinated in the future.
* **Patient Signature** (`signature`, text, required): Type your full name as electronic signature.
* **Witness Name** (`witness_name`, text, required): Enter the name of the healthcare provider or witness who is signing this form.
* **Witness Signature** (`witness_signature`, text, required): Type the witness's full name as electronic signature.
* **Facility Name** (`facility_name`, text, optional): Enter the name of the facility where the declination occurred.
