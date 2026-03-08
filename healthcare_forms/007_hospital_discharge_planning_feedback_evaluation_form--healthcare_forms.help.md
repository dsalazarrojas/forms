# Hospital Discharge Planning Feedback Evaluation Form - Help Guide
## Purpose
The Hospital Discharge Planning Feedback Evaluation Form is designed to gather feedback from patients after their discharge from the hospital. This feedback will help us improve our services and provide better care for our patients in the future.

## How To Complete This Form
To complete this form, simply fill in the required fields, and you can leave the optional fields blank if not applicable. Please be as detailed as possible in your feedback to help us improve our services.

## Field-by-Field Explanation
* **Patient Feedback (1)** (`patient_feedback`, `text`, required: false): Please provide your feedback about your experience in the hospital. This can include anything that you found helpful or not helpful during your stay.
* **Discharge Nurse (2)** (`discharge_nurse`, `select_one`, required: false): How helpful was the discharge nurse during your stay? Please select one of the options provided:
	+ Very Helpful
	+ Helpful
	+ Not Helpful
	+ Very Unhelpful
* **Discharge Planning (3)** (`discharge_planning`, `select_multiple`, required: false): Did you receive adequate discharge planning during your stay? Please select all that apply:
	+ Yes
	+ No
* **Discharge Experience (4)** (`discharge_experience`, `date`, required: false): This is the date of your discharge from the hospital. Please enter the date in the format MM/DD/YYYY.
* **Nurse Name (5)** (`nurse_name`, `text`, required: false): If you have a specific nurse who provided care for you, please enter their name here.
* **Unit (6)** (`unit`, `text`, required: false): If you were in a specific unit during your stay, please enter the name of the unit here.
* **Time Spent in Hospital (7)** (`time_spend`, `time`, required: false): How many hours and minutes did you spend in the hospital? Please format your answer as HH:MM.
* **Hospital Rating (8)** (`hospital_rating`, `number`, required: false): Please rate your overall satisfaction with the hospital services on a scale of 0-10.
* **Staff Rating (9)** (`staff_rating`, `number`, required: false): Please rate your overall satisfaction with the hospital staff on a scale of 0-10.
* **Overall Satisfaction (10)** (`overall_satisfaction`, `select_one`, required: false): How satisfied are you with your overall experience? Please select one of the options provided:
	+ Very Satisfied
	+ Somewhat Satisfied
	+ Not Satisfied
	+ Very Unhappy
* **Comments (11)** (`comments`, `text`, required: false): If you have any additional comments or concerns, please enter them here.
* **Additional Comments (12)** (`additional_comments`, `text`, required: false): If you have any further comments or feedback, please enter them here.
* **Patient Signature (13)** (`patient_signature`, `select_multiple`, required: false): If you would like to sign this form, please select 'Yes' here. 

## Tips
* Please answer all the required fields to help us improve our services.
* You can leave the optional fields blank if not applicable.
* Please be as detailed as possible in your feedback to help us understand your experience.
