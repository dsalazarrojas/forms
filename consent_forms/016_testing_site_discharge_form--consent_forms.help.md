# Testing Site Discharge Form - Help Guide
## Purpose
The Testing Site Discharge Form is used to collect and verify information required for the discharge process of a patient after testing has been conducted. This form ensures that all necessary details are collected and documented before releasing the patient.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide patient information, including details about the testing site and patient involvement.
2. Select the test result(s) that apply to the patient's case.
3. Include any comments related to the test result.
4. Sign and date the form to acknowledge completion.
5. Sign and date the form again for the testing site staff to confirm completion.

## Field-by-Field Explanation

* **Patient Information** (`patient_information`, text, required): Provide the patient's name, date of birth, or any other identifying information relevant to their treatment.
* **Testing Site Involvement** (`site_involvement`, text, required): Describe the testing site's involvement in the patient's care, including any relevant dates and details.
* **Test Results** (`test_results`, select_one, required): Select the test result that applies to the patient's case. The options available are:
	+ Test Result 1
	+ Test Result 2
	+ Test Result 3
* **Patient Signature** (`patient_signature`, note, required): Sign and date the form to acknowledge completion. This confirms that the patient has reviewed and understood the information provided.
* **Facility** (`facility`, text, optional): Provide the name of the testing site or facility where the testing was conducted.
* **Testing Site Contact** (`testing_site_contact`, text, optional): Record the contact information for the testing site or facility where the testing was conducted.
* **Test Result Comments** (`test_result_comments`, text, optional): Add any additional comments or context related to the test result.

## Tips
This form is designed to be used for patient discharges where testing was conducted. Please ensure that all fields are completed accurately and honestly, and that the form is not used for duplicate or redundant submissions.
