# medical_diagnostic_test_booking_form - Help Guide
## Purpose
This form is designed to collect medical diagnostic test booking information from patients, including their personal details, test preferences, and test results.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's information, including their name, contact details, and medical record number if applicable.
2. Select the type of test required (Blood Test, Urine Test, or X-Ray).
3. Choose the test date for the appointment.
4. Select the test results (Positive, Negative, or Pending).
5. Provide any additional test location information if necessary.
6. Sign and date the form with your doctor's signature.

## Field-by-Field Explanation
* **Patient Information** (`patient_info`, text, required): This is the section where you can fill in your patient's details, including their name, address, and contact information.
* **Appointment Date** (`appointment_date`, date, optional): This field is for selecting the date of the appointment.
* **Test Type** (`test_type`, select_one, optional): This field allows you to select the type of test required, such as Blood Test, Urine Test, or X-Ray.
* **Doctor's Name** (`doctor_name`, text, optional): This field is for entering the name of the doctor performing the test.
* **Test Results** (`test_results`, select_multiple, optional): This field is for selecting the outcome of the test, such as Positive, Negative, or Pending.
* **Test Date** (`test_date`, date, optional): This field is for selecting the date of the test.
* **Medical Record Number** (`medical_record_number`, text, optional): This field is for entering the patient's medical record number.
* **Doctor's Signature** (`doctor_signature`, text, optional): This field is for the doctor's signature, indicating they have reviewed and accepted the test request.
* **Hospital Name** (`hospital_name`, text, optional): This field is for entering the name of the hospital or healthcare facility.
* **Test Location** (`test_location`, text, optional): This field is for providing any additional location information for the test.
