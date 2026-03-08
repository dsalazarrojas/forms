<thinking>
This form is intended to gather information from patients or individuals about their safety compliance for MRI (Magnetic Resonance Imaging) scans. This form helps healthcare professionals assess potential risks and identify patients who may need special precautions or accompaniment during the scan. The form is usually completed by patients before undergoing an MRI scan. To ensure accuracy and relevance, it is recommended that patients complete this form only once they have been informed and scheduled for the scan. This form does not need to be completed multiple times. Please review the questions carefully and answer them accurately. If you have any doubts or concerns, please ask your healthcare provider for clarification.</thinking>

# mri_safety_compliance_survey - Help Guide

## Purpose
This form is designed to gather essential information about your safety and potential risks associated with Magnetic Resonance Imaging (MRI) scans. Please answer the questions carefully to help healthcare professionals assess your suitability for the scan and ensure your safety during the procedure.

## How To Complete This Form
To complete this form, follow these steps:

1. Read each question carefully and answer it accurately.
2. For questions about "True" or "False", select the correct answer based on your understanding.
3. For questions about "Other", describe your answer in the text field provided.

## Field-by-Field Explanation

* **patient_mri_number** (`mr_number`, Number, Optional): Enter your patient ID number or the number assigned to you by your healthcare provider.
* **date_of_scan** (`mr_date`, Date, Optional): Enter the date of your scheduled MRI scan.
* **risk_factors** (`risk_factors`, Select One, Optional): Select one of the risks:
	+ None
	+ Claustrophobia
	+ Ferromagnetic materials
	+ Other
* **Claustrophobia** (`claustrophobia`, Select Multiple, Optional):
	+ None
	+ True
	+ False
* **Ferromagnetic materials** (`ferromagnetic_materials`, Select Multiple, Optional):
	+ None
	+ True
	+ False
* **Other risks** (`other_risks`, Select Multiple, Optional):
	+ None
	+ True
	+ False
* **Claustrophobia question** (`claustrophobia_question`, Text, Optional): If you selected "Claustrophobia" under "risk_factors", describe your claustrophobia in this field.
* **Other risks description** (`claustrophobia_question_other`, Text, Optional): If you selected "Other" under "risk_factors", describe your other risks in this field.
* **Other risks other** (`claustrophobia_question_other`, Text, Optional): If your other risks are not listed, describe them in this field.
* **Ferromagnetic materials question** (`ferromagnetic_materials_question`, Text, Optional): If you selected "Ferromagnetic materials" under "risk_factors", describe them in this field.
* **Date of scan question** (`mr_date_question`, Text, Optional): Confirm the date of your scheduled MRI scan.
* **Time of scan** (`time_question`, Time, Optional): Confirm the time of your scheduled MRI scan.
* **Claustrophobia answer** (`claustrophobia_answer`, Select One, Optional):
	+ True
	+ False
	+ Unable to answer
* **Ferromagnetic answer** (`ferromagnetic_answer`, Select One, Optional):
	+ True
	+ False
	+ Unable to answer
* **Other answer** (`other_answer`, Select One, Optional):
	+ True
	+ False
	+ Unable to answer
* **Other risks answer** (`claustrophobia_answer_other`, Text, Optional):
	+ If you selected "Unable to answer" under "Claustrophobia answer", provide a reason in this field.
* **Ferromagnetic answer other** (`ferromagnetic_answer_other`, Text, Optional):
	+ If you selected "Unable to answer" under "Ferromagnetic answer", provide a reason in this field.
* **Other risks other** (`other_answer_other`, Text, Optional):
	+ If you selected "Unable to answer" under "Other answer", provide a reason in this field.
* **Claustrophobia answer reason** (`claustrophobia_answer_reason`, Text, Optional): If you answered "Unable to answer" under "Claustrophobia answer", provide a reason in this field.
* **Ferromagnetic answer reason** (`ferromagnetic_answer_reason`, Text, Optional): If you answered "Unable to answer" under "Ferromagnetic answer", provide a reason in this field.
* **Other risks answer reason** (`other_answer_reason`, Text, Optional): If you answered "Unable to answer" under "Other answer", provide a reason in this field.
* **Other risks other answer** (`claustrophobia_answer_other`, Text, Optional): If your other risks are not listed, provide a description in this field.
* **Other risks ferromagnetic answer** (`other_answer_other`, Text, Optional): If your other risks are not listed, provide a description in this field.

## Tips
* Answer all questions carefully and accurately.
* If you are unsure about any question, please ask your healthcare provider for clarification.
* This form should only be completed once before your scheduled MRI scan.
