# ObGynPatientHistoryForm - Help Guide
## Purpose
The ObGynPatientHistoryForm is a medical history form used to collect information about a patient's medical history, including any allergies, obstetric history, and medical conditions. This form is designed to help healthcare providers gather essential information to provide personalized care and treatment.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with accurate and up-to-date information.
2. Review each section carefully and provide as much detail as possible.
3. If you are unsure about any field, contact the healthcare provider for guidance.

## Field-by-Field Explanation

* **Medical History** (`1`, `text`, required: false): Please describe your medical history, including any previous illnesses, injuries, or surgeries.
* **Allergies** (`2`, `select_multiple`, required: false): Please indicate if you have any allergies. Select all that apply:
	+ 'Yes' if you have allergies
	+ 'No' if you do not have allergies
* **Obstetric History** (`3`, `text`, required: false): Describe any previous pregnancies, deliveries, miscarriages, or abortions.
* **Surgical History** (`4`, `text`, required: false): List any previous surgeries, including the date and location of each procedure.
* **Medical Conditions** (`5`, `select_multiple`, required: false): Please indicate if you have any of the following medical conditions:
	+ 'Yes' if you have the condition
	+ 'No' if you do not have the condition
	+ Note: This includes conditions such as diabetes, hypertension, etc.
* **Family History** (`6`, `text`, required: false): Describe any family members with medical conditions or genetic disorders.
* **Medical Conditions Other** (`7`, `text`, required: false): If you have any other medical conditions not listed above, please describe them here.
* **Medical Tests** (`8`, `select_multiple`, required: false): Please indicate if you have undergone any of the following medical tests:
	+ 'Yes' if you have undergone the test
	+ 'No' if you have not undergone the test
