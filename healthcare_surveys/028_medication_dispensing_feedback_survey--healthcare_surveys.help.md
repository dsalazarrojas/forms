# medication_dispensing_feedback_survey - Help Guide
## Purpose
This form is designed to collect feedback from patients about their experience with medication dispensing services.

## How To Complete This Form
To complete this form, please follow these steps:

1. Answer all the questions to the best of your ability.
2. Please provide as much detail as possible in the text fields.
3. Select the options that best match your experience.

## Field-by-Field Explanation

* **Welcome to the Survey** (`intro`, `note`, required: false): This is a note section where you can read about the purpose and goals of this survey.
* **Contact Details** (`contact_info`, `text`, required: false): Please provide your contact information, including your name, email, and phone number.
* **How Did You Visit Us** (`visit_type`, `select_one`, required: false): Select how you visited us:
	+ Doctor: If you visited a doctor.
	+ Pharmacy: If you visited a pharmacy.
	+ Both: If you visited both a doctor and a pharmacy.
* **Medication Details** (`medication_info`, `text`, required: false): Please provide any information about the medication you received, including the name, dosage, and any relevant medical conditions.
* **How Was Medication Dispensed** (`dispensing_process`, `select_multiple`, required: false): Select how the medication was dispensed:
	+ On Time: If the medication was dispensed on time.
	+ Before Expected: If it was dispensed before the expected time.
	+ After Expected: If it was dispensed after the expected time.
* **How Were You Communicated To** (`communication`, `select_one`, required: false): Select how clear the communication was about your medication:
	+ Very Clear: If you were clearly informed about your medication.
	+ Somewhat Clear: If you were somewhat informed, but could have been clearer.
	+ Not Clear At All: If you were not informed about your medication.
* **Do You Have Any Concerns** (`concerns`, `select_multiple`, required: false): Do you have any concerns about your visit:
	+ True: If you have concerns.
	+ False: If you do not have concerns.
* **Any Comments** (`comments`, `text`, required: false): Please provide any additional comments about your visit.
* **Rate Your Visit** (`rating`, `number`, required: false): Rate your visit from 1 to 5.
* **How Would You Rate Your Experience** (`overall_experience`, `select_one`, required: false): Select how you would rate your overall experience:
	+ Excellent: If your experience was excellent.
	+ Good: If your experience was good.
	+ Fair: If your experience was fair.
	+ Bad: If your experience was bad.
* **Follow Up** (`follow_up`, `select_one`, required: false): Select if you would like to be contacted for follow up:
	+ True: If you would like to be contacted.
	+ False: If you do not want to be contacted.
