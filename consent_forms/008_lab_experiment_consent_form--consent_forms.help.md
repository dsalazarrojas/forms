# lab_experiment_consent_form - Help Guide
## Purpose
The lab_experiment_consent_form is used to collect participant information and consent for a lab experiment. It is essential to complete this form accurately and honestly to ensure the success and quality of the experiment.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the participant information section (participant_info) with your details.
2. Choose your informed consent (informed_consent) and ensure you understand what you're agreeing to.
3. Select your contact method (contact_method) for future communication.
4. Choose your participant agreement (participant_agreement) to indicate your understanding of the experiment's terms.
5. Fill in the contact details (contact_details) of the person who will be in contact with you.
6. Enter the experiment start date (experiment_start_date) if applicable.
7. Fill in the contact person's name (contact_person) who will be in contact with you.

## Field-by-Field Explanation

* **Participant Info (participant_info)** (`text`, required: false): Please fill in your participant information accurately and honestly.
* **Research Facility (research_facility)** (`text`, required: false): Enter the name of the research facility conducting the experiment.
* **Experiment Name (experiment_name)** (`text`, required: false): Enter the name of the experiment you will be participating in.
* **Informed Consent (informed_consent)** (`select_one`, required: false): Please select one of the options indicating your informed consent.
	+ Option 1: I understand and agree to the experiment's terms.
	+ Option 2: I do not understand or disagree with the experiment's terms.
* **Contact Details (contact_details)** (`select_multiple`, required: false): Select all applicable contact methods for future communication.
	+ Option 1: Email
	+ Option 2: Phone
	+ Option 3: SMS
* **Contact Person (contact_person)** (`text`, required: false): Fill in the name of the contact person who will be in contact with you.
* **Experiment Start Date (experiment_start_date)** (`date`, required: false): Enter the start date of the experiment if applicable.
* **Contact Method (contact_method)** (`select_one`, required: false): Select one of the contact methods for future communication.
	+ Option 1: Email
	+ Option 2: Phone
	+ Option 3: SMS
* **Participant Agreement (participant_agreement)** (`select_multiple`, required: false): Choose all applicable options indicating your understanding of the experiment's terms.
	+ Option 1: I understand and agree to the experiment's terms.
	+ Option 2: I do not understand or disagree with the experiment's terms.
	+ Option 3: I have questions about the experiment's terms.
