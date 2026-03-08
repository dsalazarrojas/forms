<thinking>...</thinking>

# x_ray_testing_log - Help Guide
## Purpose
The x_ray_testing_log form is used to record and track details of x-ray tests performed on patients. It is a vital tool for medical professionals to record and maintain accurate and up-to-date records of x-ray tests, including test results, equipment used, and other relevant information.

## How To Complete This Form
To complete the x_ray_testing_log form, follow these steps:

1. Select the x-ray test location from the options provided.
2. Choose the doctor who performed the test from the options.
3. Enter the test results.
4. Add any additional test notes if necessary.
5. Select the test status from the options provided.

## Field-by-Field Explanation
* **x_ray_test_log** (`x_ray_test_log`, `note`, optional): Enter any notes regarding the x-ray test.
* **equipment_used** (`equipment_used`, `select_multiple`, required): Select the equipment used during the test.
* **test_results** (`test_results`, `text`, optional): Enter the test results.
* **test_notes** (`test_notes`, `note`, optional): Enter any additional test notes.
* **test_image** (`test_image`, `text`, optional): Enter an image related to the test.
* **test_date** (`test_date`, `date`, required): Enter the date on which the test was performed.
* **test_time** (`test_time`, `time`, optional): Enter the time on which the test was performed.
* **x_ray_testing_doctor** (`x_ray_testing_doctor`, `select_one`, required): Select the doctor who performed the test.
* **test_results_image** (`test_results_image`, `text`, optional): Enter an image related to the test results.
* **patient_data** (`patient_data`, `text`, optional): Enter patient data.
* **contact_person** (`contact_person`, `select_one`, required): Select the contact person.
* **test_location** (`test_location`, `select_one`, optional): Select the test location.
* **test_department** (`test_department`, `select_one`, required): Select the test department.
* **x_ray_testing_notes** (`x_ray_testing_notes`, `note`, optional): Enter any additional test notes.
* **doctor_contact** (`doctor_contact`, `text`, optional): Enter the doctor's contact information.
* **doctor_phone** (`doctor_phone`, `text`, optional): Enter the doctor's phone number.
* **doctor_email** (`doctor_email`, `email`, optional): Enter the doctor's email.
* **patient_name** (`patient_name`, `text`, required): Enter the patient's name.
* **patient_age** (`patient_age`, `text`, required): Enter the patient's age.
* **patient_id** (`patient_id`, `text`, required): Enter the patient's ID.
* **test_number** (`test_number`, `text`, optional): Enter the test number.
* **test_status** (`test_status`, `select_one`, required): Select the test status.
* **test_date_completed** (`test_date_completed`, `date`, optional): Enter the date on which the test was completed.
* **test_time_completed** (`test_time_completed`, `time`, optional): Enter the time on which the test was completed.
* **test_completed_by** (`test_completed_by`, `select_one`, required): Select who completed the test.

Note: This form is designed to collect specific information related to x-ray tests. Some fields are required, as indicated by the "required" attribute in the form's metadata. Ensure that all required fields are completed accurately to maintain accurate and up-to-date records.
