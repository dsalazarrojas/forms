# Nwspm Pc Ptsd - Help Guide

## Purpose
The Nwspm Pc Ptsd form is designed to collect and document patient information and treatment plan details. It is a crucial tool for clinicians to assess the patient's condition and provide appropriate care.

## How To Complete This Form
1. Start by filling out the **Patient Information** section with the patient's personal details.
2. Answer the **Screening Questions** section with either "Yes" or "No" based on the patient's experiences.
3. In the **Trauma Experience** section, select all the experiences that apply to the patient.
4. Describe the patient's **Symptoms** in the space provided.
5. Record the **Clinical Findings** in the text box.
6. Update the **Patient Status** with the current status of the patient's condition.
7. Indicate whether the **Treatment Plan** is in place or not.
8. Provide **Follow Up** details in the text box.

## Field-by-Field Explanation
* **Patient Information** (`patient_info`, text, required/optional): Enter the patient's personal details such as name, date of birth, and contact information.
* **Screening Questions** (`screening_questions`, text, required/optional): Answer "Yes" or "No" to indicate whether the patient has experienced any screening-related issues.
* **Trauma Experience** (`trauma_experience`, select_multiple, required/optional): Select all experiences that apply to the patient's trauma.
	+ 'Yes': The patient has experienced the specified trauma.
* **Symptoms** (`symptoms`, text, required/optional): Describe the patient's symptoms or conditions in detail.
* **Clinical Findings** (`clinical_findings`, text, required/optional): Record any relevant clinical findings or observations made about the patient.
* **Patient Status** (`patient_status`, text, required/optional): Update the patient's status based on the current condition.
* **Treatment Plan** (`treatment_plan`, select_one, required/optional): Indicate whether the patient has a treatment plan in place or not.
	+ 'Yes': A treatment plan is in place.
* **Follow Up** (`follow_up`, text, required/optional): Provide any follow-up details or instructions for the patient's care.
