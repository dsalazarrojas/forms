# Noise Violation Complaint Form - Help Guide
## Purpose
The Noise Violation Complaint Form is designed to collect information about noise violations that are affecting residents in a specific location. This form helps us track and address noise issues more efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1.  Provide your resident information in the "Resident Information" field.
2.  Indicate the location where the noise is originating from in the "Noise Location" field.
3.  Fill in the "Date" field with the date of the noise disturbance.
4.  Select the "Time" field with the time of the noise disturbance.
5.  Describe the noise disturbance in the "Description" field.
6.  Indicate the noise level using the options provided in the "Noise Level" field.
7.  If any action has been taken to address the issue, select the corresponding option in the "Action Taken" field.
8.  If no action has been taken, you can specify the action taken in the "Other Action" field.
9.  Finally, click "Submit" to submit your complaint or "Save Draft" to save a draft of your submission.

## Field-by-Field Explanation

*  **Resident Information** (`resident_information`, `text`, required): Please enter your name and contact information so we can contact you to follow up on your complaint.
*   **Noise Location** (`noise_location`, `text`, required): Where did the noise originate from?
*   **Date** (`date`, `date`, required): What is the date of the noise disturbance?
*   **Time** (`time`, `time`, required): What is the time of the noise disturbance?
*   **Description** (`description`, `text`, required): Briefly describe the noise disturbance.
*   **Noise Level** (`noise_level`, `select_multiple`, optional): How loud was the noise?
	+ Quiet
	+ Moderate
	+ Loud
	+ Extremely Loud
*   **Action Taken** (`action_taken`, `select_one`, optional): What action has been taken to address the issue?
	+ None
	+ Warned the source of the noise
	+ Called the police
	+ Contacted a noise abatement officer
	+ Other (please specify)
*   **Other Action Taken** (`other_action_taken`, `text`, optional): If "Other (please specify)" is selected, please describe the action taken.
*   **Submit** (`submit`, `select_multiple`, optional): Select what you want to do with your submission.
	+ Submit
	+ Save Draft
