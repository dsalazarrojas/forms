# Bioburden Testing Report Form - Help Guide
## Purpose
The Bioburden Testing Report Form is used to collect and document the results of bioburden testing, which is a process used to detect and identify microorganisms that can grow in or on products or materials.

## How To Complete This Form
To complete this form, follow these steps:

1. **Enter laboratory details**: Fill in the "Laboratory Name", "Lab Identification Number", and "Lab Address" fields with relevant information.
2. **Enter sample details**: Fill in the "Sample ID", "Sample Description", "Sample Type", "Sample Quantity", and "Receipt Date" fields with details about the sample received.
3. **Perform bioburden testing**: Complete the "Test Requested" field with the type of bioburden test to be performed and the "Test Method" field with the method used for analysis.
4. **Document test results**: Fill in the "Test Start Date", "Test Completion Date", "Bioburden Result", and "Colony Forming Units" fields with dates and results of the test.
5. **Determine result interpretation**: Select "Pass - Meets Specification", "Fail - Exceeds Specification", or "Indeterminate" from the "Result Interpretation" field based on the test results.
6. **Add additional comments**: Enter any additional relevant information in the "Additional Comments" field.

## Field-by-Field Explanation

* **Laboratory Name** (`lab_name`, text, required): Enter the name of the testing laboratory.
* **Lab Identification Number** (`lab_id`, text, required): Enter the laboratory's identification number.
* **Lab Address** (`lab_address`, text, required): Enter the complete address of the laboratory.
* **Report Date** (`report_date`, date, required): Enter the date the report was generated.
* **Report Number** (`report_number`, text, required): Enter a unique report identifier.
* **Sample Information** (`sample_information`, note, required): Enter details about the sample received.
* **Sample ID** (`sample_id`, text, required): Enter the sample's identification number.
* **Sample Description** (`sample_description`, text, required): Enter a description of the sample received.
* **Sample Type** (`sample_type`, select_one, required): Select the category of the sample (e.g., Medical Device, Raw Material, etc.).
* **Sample Quantity** (`sample_quantity`, text, required): Enter the amount of sample received.
* **Receipt Date** (`receipt_date`, date, required): Enter the date the sample was received.
* **Receipt Condition** (`receipt_condition`, select_one, required): Select the condition of the sample on arrival (e.g., Acceptable, Compromised Packaging, etc.).
* **Client Information** (`client_information`, note, required): Enter details about the client who requested the test.
* **Client Name** (`client_name`, text, required): Enter the name of the requesting client.
* **Client Company** (`client_company`, text, required): Enter the name of the client's company.
* **Contact Email** (`client_email`, email, required): Enter the client's contact email.
* **Testing Information** (`testing_information`, note, required): Enter details about the test to be performed.
* **Test Requested** (`test_requested`, select_one, required): Select the type of bioburden test to be performed (e.g., Total Aerobic Bioburden, etc.).
* **Test Method** (`test_method`, select_one, required): Select the method used for analysis (e.g., USP 61 Plate Count, etc.).
* **Test Start Date** (`test_start_date`, date, required): Enter the date the testing began.
* **Test Completion Date** (`test_completion_date`, date, required): Enter the date the testing ended.
* **Test Results** (`test_results`, note, required): Enter the test results.
* **Bioburden Result** (`bioburden_result`, text, required): Enter the colony-forming units per unit of the test result.
* **Organisms Detected** (`organisms_detected`, text, required): Enter the identified organisms.
* **Specification Limit** (`specification_limit`, text, required): Enter the acceptable limit for the test result.
* **Result Interpretation** (`result_interpretation`, select_one, required): Select the interpretation of the test results (e.g., Pass, Fail, etc.).
* **Analyst Information** (`analyst_information`, note, required): Enter details about the analyst who performed the test.
* **Analyst Name** (`analyst_name`, text, required): Enter the name of the testing analyst.
* **Analyst Signature** (`analyst_signature`, select_one, required): Select whether the results were verified and accurate.
* **QA Review** (`qa_review`, note, required): Enter details about the QA review process.
* **QA Reviewer Name** (`qa_reviewer`, text, required): Enter the name of the QA reviewer.
* **QA Review Date** (`qa_review_date`, date, required): Enter the date of the QA review.
* **QA Approval** (`qa_approval`, select_one, required): Select the QA approval status (e.g., Approved, Pending, etc.).
* **Additional Comments** (`additional_comments`, text, required): Enter any additional relevant information.

## Tips

* Be thorough when completing the form to ensure accurate and complete reporting of test results.
* Use clear and concise language when filling out the form.
* Ensure that all required fields are completed before submitting the form.
