# COVID 19 Rapid Test Appointment And Consent Form CPESN - Help Guide

## Purpose
This form is intended to gather information from patients for the purpose of scheduling a COVID-19 rapid test appointment and obtaining their consent for the testing process. The information collected will be used to verify the patient's identity, ensure proper testing procedures are followed, and report test results to the relevant authorities.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the facility where you will be tested from the provided options.
2. Fill out the patient information section:
   - Enter your full name as it appears on your identification documents.
   - Enter your Washington State ID or Driver License Number.
   - Choose your date of birth.
   - Select your gender.
3. Provide your residential address:
   - Enter your city and zip code.
4. Choose the type of testing location you will be visiting.
5. Confirm your consent to have your test results reported to the Washington State Department of Health.
6. (Optional) Enter the name of the professional practitioner administering the test.
7. Sign the form with your full name.
8. Date and time of signature.

## Field-by-Field Explanation
* **CPESN Facility Name** (`cpesn_facility_name`, `text`, required): This field is where you will select the facility where you will be tested.
* **Patient Full Name** (`patient_name_full`, `text`, required): Enter your full name as it appears on your identification documents.
* **Washington State ID or Driver License Number** (`wa_id_license`, `text`, required): Enter your Washington State ID or Driver License Number for verification purposes.
* **Date of Birth** (`dob_val`, `date`, required): Choose your date of birth from the calendar prompt.
* **Gender** (`gender_cat`, `select_one`, required): Select your gender from the provided options: Male, Female, Other, or Prefer not to say.
* **Residential Address** (`patient_address_text`, `text`, required): Enter your residential address.
* **City** (`city_val`, `text`, required): Enter the city where you reside.
* **Zip Code** (`zip_code_val`, `text`, required): Enter your zip code.
* **Testing Location Type** (`test_location_cat`, `select_one`, required): Choose the type of testing location from the provided options: In-Pharmacy, Drive-Through, or Off-site Event.
* **I consent to my results being reported to the Washington State Department of Health** (`wa_reporting_consent`, `select_one`, required): Confirm your consent to have your test results reported to the Washington State Department of Health.
* **Name of Professional Practitioner Administering Test** (`practitioner_name_val`, `text`, optional): Enter the name of the professional practitioner administering the test, if applicable.
* **Patient Signature (Type Full Name)** (`electronic_signature`, `text`, required): Sign the form with your full name.
* **Date of Consent** (`date_of_consent`, `date`, required): Date and time of signature.

## Tips
* Make sure to fill out the form accurately and completely.
* Ensure that all required fields are filled out before submitting the form.
* If you have any questions or concerns, please contact the testing facility staff.
