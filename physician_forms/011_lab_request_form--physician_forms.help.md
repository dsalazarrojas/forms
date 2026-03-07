<thinking>
We need to ensure the form is used for its intended purpose. This form is a "lab_request_form" intended for requesting laboratory tests. It should only be used for requesting lab tests, and not for other purposes.
The form is designed to be completed by authorized users, and the fields are structured to gather information about the lab tests requested. We need to avoid duplication and ensure that the form is used correctly.

</thinking>

# lab_request_form - Help Guide
## Purpose
The "lab_request_form" is a form for requesting laboratory tests. It is used to gather information about the lab tests requested from authorized users.

## How To Complete This Form
To complete this form, follow the steps below:
1. Select the relevant test types (e.g., "Yes") on the "What Tests Do You Want To Run" page.
2. Choose the sample type (e.g., "Yes") on the "Sample Type" page.
3. Enter patient information and a sample description on the "Patient Information" and "Sample Description" pages.
4. Enter the expected test results on the "Expected Test Results" page.
5. Add any necessary physician notes on the "Physician Notes" page.
6. Specify the number of patient samples on the "Patient Samples" page.
7. Select the test priority (e.g., "Yes") on the "Test Priority" page.

## Field-by-Field Explanation
* **What Tests Do You Want To Run (`test_request`, select_multiple, optional)**: Select the lab tests you want to run by choosing the relevant options from the list.
* **Sample Type (`sample_type`, select_one, optional)**: Choose the type of sample you are submitting (e.g., "Yes" for sample type).
* **Patient Information (`patient_info`, text, optional)**: Enter the patient's name, DOB, and any other relevant information.
* **Sample Description (`sample_description`, text, optional)**: Describe the sample being submitted (e.g., blood, tissue, etc.).
* **Expected Test Results (`test_results`, text, optional)**: Enter the expected test results, if known.
* **Physician Notes (`physician_notes`, note, optional)**: Add any additional notes from the physician.
* **Patient Samples (`patient_samples`, number, optional)**: Specify the number of patient samples being submitted.
* **Test Priority (`test_priority`, select_one, optional)**: Select the priority of the test (e.g., "Yes" for high priority).
