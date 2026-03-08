# Walk In COVID 19 Testing Form - Help Guide
## Purpose
This form is used to collect information for COVID-19 testing for patients who are visiting a testing site. The form is designed to gather essential details such as patient contact information, medical history, and test results status.

## How To Complete This Form
To fill out this form, follow these steps:

1. Enter your name as it appears on your identification.
2. Provide your contact phone number.
3. Enter your contact email address.
4. If you have any medical history, please describe it in the text box.
5. Enter the name of your medical office.
6. Provide your medical office phone number.
7. Enter your medical office email address.
8. If you have taken the test, select the date you took it.
9. Describe any symptoms you are experiencing.
10. Enter the name of your insurance provider.
11. Enter your insurance policy number.
12. Enter the name of your doctor.
13. Enter your doctor's phone number.
14. Enter your doctor's email address.
15. If you have test results, enter them in the text box.
16. If you have taken the test, enter the date you took it.
17. Select the method used for testing.
18. Select the status of your test results.
19. Enter your patient ID number.
20. Select your test result (Yes or No).
21. Select the testing site where you took the test.
22. If you have a medical office ID, enter it here.
23. Select the current testing status (Active or Inactive).

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter your full name as it appears on your identification.
* **Contact Phone** (`contact_phone`, text, required): Enter your phone number where you can be reached.
* **Contact Email** (`contact_email`, email, required): Enter your email address where you can be reached.
* **Date Of Birth** (`date_of_birth`, date, optional): If you want to provide your date of birth, enter it here.
* **Medical History** (`medical_history`, text, optional): If you have any medical history, describe it here.
* **Medical Office Name** (`medical_office_name`, text, required): Enter the name of your medical office.
* **Medical Office Phone** (`medical_office_phone`, text, required): Enter the phone number of your medical office.
* **Medical Office Email** (`medical_office_email`, email, optional): Enter the email address of your medical office.
* **Testing Date** (`testing_date`, date, optional): If you took the test, enter the date you took it.
* **Symptoms** (`symptoms`, text, required): Describe any symptoms you are experiencing.
* **Insurance Provider** (`insurance_provider`, text, required): Enter the name of your insurance provider.
* **Insurance Policy** (`insurance_policy`, text, required): Enter your insurance policy number.
* **Doctor Name** (`doctor_name`, text, required): Enter the name of your doctor.
* **Doctor Phone** (`doctor_phone`, text, required): Enter the phone number of your doctor.
* **Doctor Email** (`doctor_email`, email, required): Enter the email address of your doctor.
* **Testing Results** (`testing_results`, text, optional): If you have test results, enter them here.
* **Test Date** (`test_date`, date, optional): If you took the test, enter the date you took it.
* **Testing Method** (`testing_method`, text, optional): Select the method used for testing.
* **Test Results Status** (`test_result`, text, optional): Select the status of your test results.
* **Patient Id** (`patient_id`, text, required): Enter your patient ID number.
* **Test Result** (`test_result`, select one, optional): Select whether you tested positive or negative for COVID-19.
* **Testing Site** (`testing_site`, text, optional): Enter the testing site where you took the test.
* **Medical Office Id** (`medical_office_id`, text, optional): Enter the medical office ID if you have one.
* **Testing Status** (`testing_status`, select one, required): Select the current testing status (Active or Inactive).
* **Submit** (`submit`, text, required): Click this button to submit your form.
