# Material Hardness Test Report Form - Help Guide
## Purpose
The Material Hardness Test Report Form is used to document the results of material hardness testing. This form captures essential information to track testing data, note results, and certification. It's crucial for ensuring accurate and reliable testing data.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have all the necessary information and equipment before starting.
2. Select the correct material type from the options provided.
3. Enter the date and time of the testing in the respective fields.
4. Specify the location where the testing was conducted.
5. Choose the testing equipment used from the options provided.
6. Enter any relevant notes for the testing and results.
7. Select the test result from the options provided.
8. Enter any additional comments or notes for the test result.
9. Fill out the submission and completion fields with your email address.
10. Set the date and time of submission and completion.

## Field-by-Field Explanation

* **Material Type** (`material_type`, select_one, required: false): Select the type of material being tested from the options provided.
* **Testing Date** (`testing_date`, date, required: true): Enter the date when the testing was performed.
* **Testing Time** (`testing_time`, time, required: true): Enter the time when the testing was performed.
* **Hardness Testing Location** (`hardness_testing_location`, select_multiple, required: false): Choose the location where the testing was conducted.
* **Hardness Value** (`hardness_value`, number, required: false): Enter the hardness value obtained from the testing.
* **Remarks** (`remarks`, note, required: false): Add any additional remarks or comments for the testing and results.
* **Testing By** (`testing_by`, select_one, required: false): Select who performed the testing.
* **Test Result** (`test_result`, select_one, required: false): Choose the test result from the options provided.
* **Test Result Comment** (`test_result_comment`, note, required: false): Add any additional comments for the test result.
* **Form Submitted By** (`form_submitted_by`, email, required: true): Enter your email address for submission.
* **Form Completed By** (`form_completed_by`, email, required: true): Enter your email address for completion.
* **Date Submitted** (`date_submitted`, date, required: true): Set the date when the form was submitted.
* **Time Submitted** (`time_submitted`, time, required: true): Set the time when the form was submitted.
* **Form Completed Date** (`form_completed_date`, date, required: true): Set the date when the form was completed.
* **Form Completed Time** (`form_completed_time`, time, required: true): Set the time when the form was completed.
* **Testing Equipment Used** (`testing_equipment_used`, select_multiple, required: false): Choose the testing equipment used from the options provided.
* **Hardness Testing Notes** (`hardness_testing_notes`, note, required: false): Add any additional notes for the testing.
* **Test Result Notes** (`test_result_notes`, note, required: false): Add any additional comments or notes for the test result.
* **Hardness Testing Certification** (`hardness_testing_certification`, select_one, required: false): Select the certification for the hardness testing.
* **Hardness Testing Certificate No.** (`hardness_testing_certificate_no`, select_one, required: false): Select the certificate number for the hardness testing.
* **Hardness Testing Result Note** (`hardness_testing_result_note`, note, required: false): Add any additional comments or notes for the test result.
* **Form Status** (`form_status`, select_one, required: false): Select the status of the form.
* **Form Status Comment** (`form_status_comment`, note, required: false): Add any additional comments for the form status.
* **Form Notes** (`form_notes`, note, required: false): Add any additional comments or notes for the form.
