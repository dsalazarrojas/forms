# Speech/Language Pathology Progress Note - Help Guide
## Purpose
This form is used to track the progress of patients undergoing speech and language pathology treatment. It provides a comprehensive overview of a patient's development, goals, and treatment plan.

## How To Complete This Form

1.  Fill out the form for each patient session, ensuring that all required fields are completed.
2.  Ensure that each section is filled out accurately and thoroughly.
3.  Review and update the form as needed for each session.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required: false): Enter the patient's name as it appears on their identification documents.
* **Patient Dob** (`patient_dob`, `date`, required: false): Enter the patient's date of birth.
* **Speech Therapist** (`speech_therapist`, `text`, required: false): Enter your name and title (e.g., "John Smith, M.S., CCC-SLP").
* **Date Started** (`date_started`, `date`, required: false): Enter the date the patient began treatment.
* **Number of Sessions** (`number_of_sessions`, `number`, required: false): Enter the total number of sessions completed.
* **Date of Last Session** (`date_of_last_session`, `date`, required: false): Enter the date of the last session.
* **Next Session** (`next_session`, `date`, required: false): Enter the date of the next scheduled session.
* **Patient Goals** (`patient_goals`, `text`, required: false): Enter the patient's specific goals and objectives for treatment (e.g., "Improve communication skills," "Reduce stuttering").
* **Patient Status** (`patient_status`, `select_one`, required: false): Choose one of the following options:
	+ Active
	+ Inactive
	+ No Status
* **Medical Conditions** (`medical_conditions`, `select_multiple`, required: false): Choose all applicable conditions from the list:
	+ Dyslexia
	+ Hearing Loss
	+ Speech Loss
	+ Other
* **Speech Level** (`speech_level`, `select_one`, required: false): Choose one of the following options:
	+ Advanced
	+ Intermediate
	+ Beginner
* **Communication Skills** (`communication_skills`, `select_multiple`, required: false): Choose all applicable skills from the list:
	+ Verbal
	+ Non-Verbal
	+ Gestures
* **Progress Notes** (`progress_notes`, `text`, required: false): Enter any relevant progress notes or comments.
* **Assessment Tool** (`assessment_tool`, `text`, required: false): Enter the assessment tool used (e.g., "Beckman test").
* **Assessment Results** (`assessment_results`, `select_multiple`, required: false): Choose all applicable results from the list:
	+ Normal
	+ Below Norm
	+ Above Norm
* **Treatment Plan** (`treatment_plan`, `text`, required: false): Enter a brief summary of the treatment plan.
* **Treatment Goals** (`treatment_goals`, `select_multiple`, required: false): Choose all applicable goals from the list:
	+ Improve Communication Skills
	+ Improve Speech
	+ Improve Listening Skills
* **Speech Therapist Signature** (`speech_therapist_signature`, `text`, required: false): Enter your signature and title (e.g., "John Smith, M.S., CCC-SLP").

Note: Required fields are marked with `required: true` or `required: false` in the original YAML fields. However, please ensure that all fields are filled out accurately and thoroughly to provide a comprehensive overview of the patient's progress.
