# pre_lab_test_intake_form - Help Guide
## Purpose
This form is used to collect information from patients before a lab test is conducted.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's information, including their name, date of birth, and contact details.
2. Provide details about the patient's medical history, including any previous medical conditions or allergies.
3. Specify the lab test information, including the test ordering status and the date of the test.
4. Select the medical specialty of the healthcare provider performing the test.
5. Enter any additional notes about the test or patient.

## Field-by-Field Explanation

* **Patient Information (id: 10)** (`Patient Name`, `text`, Required/Optional): Enter the patient's full name as they would like to be referred to.
* **Patient DOB (id: 11)** (`Patient Date of Birth`, `date`, Required/Optional): Enter the patient's date of birth in the format `YYYY-MM-DD`.
* **Test Ordering Date (id: 12)** (`Test Ordering Date`, `date`, Required/Optional): Enter the date the test was ordered.
* **Test Frequency (id: 13)** (`Test Frequency`, `number`, Required/Optional): Enter the frequency of the test.
* **Test Result (id: 14)** (`Test Result`, `text`, Required/Optional): Enter the result of the test.
* **Test Status (id: 15)** (`Test Status`, `select_one`, Required/Optional): Select the status of the test from the options `Complete`, `In Progress`, `Cancelled`, or `Pending`.
* **Medical Record Number (id: 16)** (`Medical Record Number`, `text`, Required/Optional): Enter the patient's medical record number.
* **Contact Information (id: 17)** (`Contact Information`, `text`, Required/Optional): Enter the patient's contact information.
* **Test Result Notes (id: 18)** (`Test Result Notes`, `text`, Required/Optional): Enter any additional notes about the test result.
* **Patient Email (id: 19)** (`Patient Email`, `email`, Required/Optional): Enter the patient's email address.
* **Test Frequency Note (id: 20)** (`Test Frequency Note`, `text`, Required/Optional): Enter any additional notes about the test frequency.
* **Patient Phone (id: 21)** (`Patient Phone`, `text`, Required/Optional): Enter the patient's phone number.
* **Medical Practitioner Name (id: 22)** (`Medical Practitioner Name`, `text`, Required/Optional): Enter the name of the healthcare provider performing the test.
* **Test Status Other (id: 23)** (`Test Status Other`, `select_multiple`, Required/Optional): Select any other test status from the options `Active` or `Inactive`.
* **Patient Address (id: 24)** (`Patient Address`, `text`, Required/Optional): Enter the patient's address.
* **Test Frequency Other (id: 25)** (`Test Frequency Other`, `text`, Required/Optional): Enter any additional notes about the test frequency.
