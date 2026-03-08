# Patient Reactivation Survey - Help Guide
## Purpose
The purpose of this survey is to help patients reengage with their care after leaving. It aims to collect information about the reasons for leaving care, last contact with a clinician, and clinician notes, to improve patient engagement and care continuity.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name as it appears on your medical records.
2. Provide your contact information, including phone number or email address.
3. Specify the reason for leaving care. This will help us understand what we can do better.
4. Enter the last clinician you visited.
5. Provide any contact information for the last clinician you visited.
6. Indicate which clinician has been caring for you.
7. Enter the clinician's name from your last visit.
8. If necessary, provide any additional notes from the clinician regarding your care.
9. Finally, indicate if you would like to reengage with your care team. Choose one of the options below:
	* No change
	* More time
	* Other (please specify)

## Field-by-Field Explanation
* **patient_name (1)** (`patient_name`, text, required: false): Enter your name as it appears on your medical records.
* **contact_number (2)** (`contact_number`, text, required: false): Provide your phone number or email address so we can contact you to reengage with your care.
* **medical_facility (3)** (`medical_facility`, text, required: false): This field is not relevant for this form. Please ignore it.
* **reason_for_leaving (4)** (`reason_for_leaving`, text, required: false): Specify the reason you left your care. This will help us understand how we can improve.
* **last_clinician_visited (5)** (`last_clinician_visited`, text, required: false): Enter the name of the clinician you last visited.
* **last_clinician_contact_info (6)** (`last_clinician_contact_info`, text, required: false): Provide any contact information for the clinician you last visited, if necessary.
* **clinician_cared_for (7)** (`clinician_cared_for`, text, required: false): Indicate which clinician has been caring for you.
* **clinician_name_last_visit (8)** (`clinician_name_last_visit`, text, required: false): Enter the clinician's name from your last visit.
* **clinician_notes_last_visit (9)** (`clinician_notes_last_visit`, text, required: false): Provide any additional notes from the clinician regarding your care, if necessary.
* **clinician_notes (10)** (`clinician_notes`, text, required: false): Enter any other notes you may have from your clinician.
* **clinician_recommendation (11)** (`clinician_recommendation`, select_one, required: false): Choose one of the options below:
	* No change
	* More time
	* Other (please specify)

## Tips
* Please be as specific as possible when providing your contact information and reason for leaving care.
* If you would like to reengage with your care team, please choose the relevant option in the clinician recommendation field.
* If you have any additional notes or recommendations from your clinician, please provide them in the clinician notes field.
