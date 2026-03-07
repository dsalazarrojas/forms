<thinking>
Internal reasoning block to check for form purpose and duplication:

This form is intended to collect data for IP (Insertion and Puncture) and quality foley rounding reports. The purpose of this form is to record the details of each IP and quality foley round, including the date and time of the round, the number of rounds completed, and the reason for the round. This form is designed to be used by healthcare professionals to document their rounds and provide a record of their activities.

Before continuing, let's quickly check if this form has any duplicates or similar forms in our internal documentation. (No, we do not have any identical forms, but this form may be similar to other forms in the category "survey_templates" that collect data for different types of rounding activities. Let's make sure to highlight the unique features of this form and provide clear guidance on how to complete it.)

</thinking>

# ip_and_quality_foley_rounding_report - Help Guide

## Purpose
This form is designed to collect data for IP (Insertion and Puncture) and quality foley rounding reports. It helps healthcare professionals document their rounds and provides a record of their activities.

## How To Complete This Form

To complete this form, follow the steps below:

1. Fill in the required fields:
	* Patient Name
	* Date of Round
	* Time of Round
	* IP Rounds Completed
	* Quality Foley Rounds Completed
	* Reason for IP Round
	* Reason for Quality Round
	* Support Needed
	* Nurse Name
	* Date of Round Scheduled
	* Time of Round Scheduled
	* Priority
	* IP Scheduled Rounds
	* IP Completed Rounds
	* Quality Scheduled Rounds
	* Quality Completed Rounds
	* Days Between Rounds
	* Next IP Scheduled
	* Next Quality Scheduled
	* Last IP Scheduled
	* Last Quality Scheduled
	* Last IP Completed
	* Last Quality Completed
	* Assigned To
2. Fill in the optional fields:
	* Notes (if needed)

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required): Enter the patient's name as it appears on their medical record.
* **Date of Round** (`date_of_round`, `date`, required): Enter the date of the IP round or quality foley round.
* **Time of Round** (`time_of_round`, `time`, required): Enter the time of the IP round or quality foley round.
* **IP Rounds Completed** (`ip_rounds_completed`, `number`, required): Enter the number of IP rounds completed.
* **Quality Foley Rounds Completed** (`quality_foley_rounds_completed`, `number`, required): Enter the number of quality foley rounds completed.
* **Reason for IP Round** (`reason_for_ip_round`, `select_one`, required): Choose the reason for the IP round from the list:
	+ N/A
	+ Catheter placement
	+ Catheter removal
	+ Other
* **Reason for Quality Round** (`reason_for_quality_round`, `select_one`, required): Choose the reason for the quality foley round from the list:
	+ N/A
	+ Foley removal
	+ Foley adjustment
	+ Other
* **Support Needed** (`support_needed`, `text`, required): Enter any additional support needed for the patient.
* **Nurse Name** (`nurse_name`, `text`, required): Enter the name of the nurse performing the round.
* **Date of Round Scheduled** (`date_of_round_scheduled`, `date`, required): Enter the date of the round scheduled.
* **Time of Round Scheduled** (`time_of_round_scheduled`, `time`, required): Enter the time of the round scheduled.
* **Priority** (`priority`, `select_multiple`, required): Choose the priority level for the round:
	+ High
	+ Medium
	+ Low
* **IP Scheduled Rounds** (`ip_scheduled_rounds`, `number`, required): Enter the number of IP rounds scheduled.
* **IP Completed Rounds** (`ip_completed_rounds`, `number`, required): Enter the number of IP rounds completed.
* **Quality Scheduled Rounds** (`quality_scheduled_rounds`, `number`, required): Enter the number of quality foley rounds scheduled.
* **Quality Completed Rounds** (`quality_completed_rounds`, `number`, required): Enter the number of quality foley rounds completed.
* **Days Between Rounds** (`days_between_rounds`, `number`, optional): Enter the number of days between rounds.
* **Next IP Scheduled** (`next_ip_scheduled`, `date`, optional): Enter the date of the next IP round scheduled.
* **Next Quality Scheduled** (`next_quality_scheduled`, `date`, optional): Enter the date of the next quality foley round scheduled.
* **Last IP Scheduled** (`last_ip_scheduled`, `date`, optional): Enter the date of the last IP round scheduled.
* **Last Quality Scheduled** (`last_quality_scheduled`, `date`, optional): Enter the date of the last quality foley round scheduled.
* **Last IP Completed** (`last_ip_completed`, `date`, optional): Enter the date of the last IP round completed.
* **Last Quality Completed** (`last_quality_completed`, `date`, optional): Enter the date of the last quality foley round completed.
* **Assigned To** (`assigned_to`, `text`, required): Enter the name of the nurse or team assigned to perform the round.
* **Notes** (`notes`, `note`, optional): Enter any additional notes or comments about the round.
