# Clinical Trial Early Termination Report Form - Help Guide

## Purpose
This form is used to report the early termination of a clinical trial participant. It is intended to provide a structured and detailed account of the reasons for termination, ensuring that all relevant information is captured and recorded accurately. The form is designed to be completed by the Investigator or Study Coordinator, and is used to communicate the early termination of a participant to the sponsor and other stakeholders.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the Participant ID Number in the corresponding field. This is a unique identifier assigned to each participant.
2. Enter the Clinical Protocol Number, which is a unique identifier for the clinical trial.
3. Enter the Date of Early Termination, which is the date when the participant's participation was terminated.
4. Select the Primary Reason for Termination from the list of options provided.
5. Provide a detailed explanation for the termination in the space provided.
6. Indicate if the termination was related to a Serious Adverse Event (SAE) and provide the SAE Reference Number if applicable.
7. Select the Current Clinical Status of the participant from the list of options provided.
8. Confirm that all final study procedures have been completed.
9. List any outstanding study materials to be returned by the participant.
10. Sign off by providing your name and digital signature.

## Field-by-Field Explanation
* **Participant ID Number** (`participant_id`, text, required): Enter the unique identifier assigned to the participant.
* **Clinical Protocol Number** (`protocol_number`, text, required): Enter the unique identifier for the clinical trial.
* **Date of Early Termination** (`termination_date`, date, required): Enter the date when the participant's participation was terminated.
* **Primary Reason for Termination** (`reason_category`, select_one, required): Select one of the following reasons:
	+ Adverse Event
	+ Protocol Violation
	+ Lack of Efficacy
	+ Lost to Follow-up
	+ Participant Withdrawal
	+ Sponsor Decision
* **Detailed Explanation for Early Termination** (`termination_explanation`, text, required): Provide a detailed explanation for the termination.
* **Was the termination related to a Serious Adverse Event (SAE)?** (`sae_related`, select_one, required): Select 'True' if the termination was related to a SAE.
* **SAE Reference Number if applicable** (`sae_reference`, text, required): Enter the SAE Reference Number if applicable.
* **Current Clinical Status of the participant** (`current_clinical_status`, select_one, required): Select one of the following options:
	+ Stable
	+ Recovering
	+ Deteriorating
	+ Unknown
* **Have all final study procedures been completed?** (`procedures_completed`, select_one, required): Select 'True' if all procedures have been completed.
* **Outstanding study materials to be returned** (`outstanding_materials`, text, required): List any study materials that are still to be returned by the participant.
* **Reporting Investigator Name** (`investigator_name`, text, required): Enter your name as the reporting investigator.
* **Investigator Digital Signature** (`investigator_signature`, text, required): Enter your digital signature.
* **Date of Report Submission** (`report_date`, date, required): Enter the date when the report is submitted.
