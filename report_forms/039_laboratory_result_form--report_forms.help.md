<thinking>
The form is designed to collect laboratory test results and related information for clinical and administrative purposes. 
</thinking>
# Laboratory Result Form - Help Guide
## Purpose
This form is used to capture laboratory test results, specimen information, and related details from healthcare professionals for the purpose of recording and maintaining accurate patient records.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the test results in the "Test Results" field.
2. Select the type of specimen used for the test from the "Specimen Info" dropdown menu.
3. Choose the type of test performed from the "Test Type" dropdown menu.
4. Enter the date and time of the test in the "Test Date" and "Test Time" fields, respectively.
5. Select the AM/PM designation for the test time from the "Test Time AM/PM" dropdown menu.
6. Enter any relevant laboratory information in the "Laboratory Info" field.
7. Enter any clinical information related to the test results in the "Clinical Info" field.
8. Provide any comments from the doctor in the "Doctor Comments" field.
9. Select the test result outcome from the "Test Result" dropdown menu.
10. Enter any other relevant clinical laboratory information in the "Clinical Laboratory" field.
11. Enter the laboratory phone number, email, and address details in their respective fields.
12. Enter the official's name, title, department, phone number, and email details in the "Clinical Officials" section.
13. Enter any additional test result notes in the "Test Result Note" field.
14. Enter the laboratory's address, city, state, and zip details in the "Laboratory Address" section.

## Field-by-Field Explanation

* **Test Results** (`test_results`, text, required): Enter the test results in this field.
* **Specimen Info** (`specimen_info`, select_multiple, required): Select the type of specimen used for the test, such as "Blood", "Tissue", "Fluid", or "Other".
* **Test Type** (`test_type`, select_one, required): Choose the type of test performed, such as "Blood Test", "Imaging Test", "Genetic Test", or "Other".
* **Test Date** (`test_date`, date, required): Enter the date of the test in the format MM/DD/YYYY.
* **Test Time** (`test_time`, time, required): Enter the time of the test in the format HH:MM AM/PM.
* **Test Time AM/PM** (`test_time_am_pm`, select_one, required): Select the AM/PM designation for the test time.
* **Laboratory Info** (`laboratory_info`, text, optional): Enter any relevant laboratory information.
* **Clinical Info** (`clinical_info`, text, optional): Enter any clinical information related to the test results.
* **Doctor Comments** (`doctor_comments`, text, optional): Enter any comments from the doctor related to the test results.
* **Test Result** (`test_result`, select_one, optional): Select the test result outcome, such as "Positive", "Negative", or "Inconclusive".
* **Clinical Laboratory** (`clinical_laboratory`, text, optional): Enter any other relevant clinical laboratory information.
* **Laboratory Phone** (`laboratory_phone`, text, optional): Enter the laboratory phone number.
* **Laboratory Email** (`laboratory_email`, email, optional): Enter the laboratory email address.
* **Clinical Officials** (`clinical_officials`, text, optional): Enter the official's name, title, and other details.
* **Official Name** (`official_name`, text, optional): Enter the official's name.
* **Official Title** (`official_title`, text, optional): Enter the official's title.
* **Official Department** (`official_department`, text, optional): Enter the official's department.
* **Official Phone** (`official_phone`, text, optional): Enter the official's phone number.
* **Official Email** (`official_email`, email, optional): Enter the official's email address.
* **Test Result Note** (`test_result_note`, text, optional): Enter any additional test result notes.
* **Laboratory Address** (`laboratory_address`, text, optional): Enter the laboratory's address.
* **Laboratory Address 2** (`laboratory_address2`, text, optional): Enter any additional laboratory address details.
* **Laboratory City** (`laboratory_city`, text, optional): Enter the laboratory's city.
* **Laboratory State** (`laboratory_state`, text, optional): Enter the laboratory's state.
* **Laboratory Zip** (`laboratory_zip`, text, optional): Enter the laboratory's zip code.
