# Arm And Hand Health Survey - Help Guide

## Purpose
The Arm and Hand Health Survey is a tool used to assess the health and functional abilities of patients with arm or hand-related conditions. This survey helps gather information about patient demographics, symptoms, and medical history to understand their condition better.

<thinking>
This form is not a substitute for a medical professional's evaluation, but rather a tool to aid healthcare professionals in assessing patient health. Please ensure that the information provided is accurate and up-to-date before proceeding.
</thinking>

## How To Complete This Form

1. Start by filling out the patient information section, providing your full name and date of birth.
2. Next, select the affected side of your body and report when your symptoms started.
3. Describe your primary complaint or chief concern in the primary complaint field.
4. Choose the symptoms you are experiencing from the list provided.
5. Rate your pain severity on a scale of 0 to 10.
6. In the functional impact section, select which activities trigger or worsen your symptoms.
7. Report the impact of your condition on your work or daily activities and difficulty with self-care activities.
8. In the medical history section, report if you have a history of arm or hand injury, and what previous treatments you have received.
9. Finally, enter any current medications and provide any additional comments or concerns you may have.

## Field-by-Field Explanation

* **Full Name** (`patient_name`, required, text): Enter your full name.
* **Date of Birth** (`date_of_birth`, required, date): Enter your date of birth in the format MM/DD/YYYY.
* **Patient ID or Medical Record Number** (`patient_id`, optional, text): If you have a patient ID or medical record number, enter it here.
* **Date of Evaluation** (`evaluation_date`, required, date): Enter the date of the current evaluation.
* **Which side is affected** (`affected_side`, required, select_one): Select the side of your body affected by your condition.
	+ Left
	+ Right
	+ Both
* **When did symptoms start** (`symptom_onset`, required, date): Enter the date when your symptoms started.
* **Primary complaint or chief complaint** (`primary_complaint`, required, text): Describe your primary concern or chief complaint.
* **Pain severity - 0 to 10** (`pain_severity`, required, number): Rate your pain severity on a scale of 0 to 10.
* **Symptoms** (`symptom_characteristics`, required, select_multiple): Select the symptoms you are experiencing.
	+ Pain
	+ Numbness
	+ Tingling
	+ Weakness
	+ Stiffness
	+ Swelling
	+ Loss of grip strength
	+ Limited range of motion
* **Activities that trigger or worsen symptoms** (`activities_affected`, optional, select_multiple): Select which activities trigger or worsen your symptoms.
	+ Gripping
	+ Pinching
	+ Fine motor tasks
	+ Reaching overhead
	+ Repetitive motions
	+ Heavy lifting
	+ Writing
	+ Keyboard use
* **Impact on work or daily activities** (`work_impact`, required, select_one): Select the impact of your condition on your work or daily activities.
	+ No impact
	+ Mild impact
	+ Moderate impact
	+ Severe impact
	+ Unable to perform
* **Difficulty with self-care activities** (`self_care_difficulty`, required, select_one): Select your level of difficulty with self-care activities.
	+ None
	+ Mild
	+ Moderate
	+ Severe
* **History of arm or hand injury** (`previous_injury`, optional, select_one): Report if you have a history of arm or hand injury.
	+ No history
	+ Minor injury
	+ Moderate injury
	+ Severe injury
* **Previous treatment** (`previous_treatment`, optional, select_one): Report any previous treatments you have received.
	+ None
	+ Physical therapy
	+ Medication
	+ Surgery
	+ Other
* **Current medications** (`current_medication`, optional, text): Enter any current medications you are taking.
* **What are your treatment goals** (`treatment_goals`, optional, text): Describe your treatment goals.
* **Additional comments or concerns** (`additional_comments`, optional, text): Enter any additional comments or concerns you may have.
