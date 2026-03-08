# general_health_survey - Help Guide
## Purpose
The general_health_survey form is designed to collect general patient information and medical history data.

## How To Complete This Form
1. Fill in the patient's **Patient Information** fields on page 1.
2. Select all relevant health habits and sleep patterns on page 2.
3. Choose any applicable medical conditions on page 3.
4. Enter any current medications on page 4.
5. List any allergies on page 5.
6. Report on any medical tests or procedures on page 6-10.
7. Provide details and comments for each medical test or procedure on pages 7-10.
8. Answer any follow-up questions on page 11.

## Field-by-Field Explanation

* **Patient Information (page 1)** (`patient_info`, text, optional): Enter the patient's name, contact information, and other relevant details.
* **Health Habits (page 2)** (`health_habits`, select_multiple, optional): Select any of the following habits:
	+ Smoking
	+ Exercise
	+ Healthy Eating
* **Sleep Patterns (page 2)** (`health_habits`, select_multiple, optional): Select any of the following sleep patterns:
	+ Less than 6 hours
	+ 6-8 hours
	+ 9-11 hours
	+ More than 11 hours
* **Medical Conditions (page 3)** (`medical_conditions`, select_multiple, optional): Select any of the following medical conditions:
	+ Diabetes
	+ Hypertension
	+ Asthma
* **Medications (page 4)** (`medications`, text, optional): Enter any current medications.
* **Allergies (page 5)** (`allergies`, text, optional): List any known allergies.
* **Medical Tests (page 6)** (`medical_tests`, text, optional): Report on any recent or upcoming medical tests.
* **Medical Procedure (page 6)** (`medical_procedure`, select_one, optional): Indicate if a medical procedure has been performed:
	+ True
	+ False
* **Medical Procedure Details (page 7)** (`medical_procedure_details`, text, optional): Provide details on the medical procedure.
* **Medical Procedure Type (page 7)** (`medical_procedure_type`, text, optional): Enter the type of medical procedure.
* **Medical Procedure Side Effects (page 8)** (`medical_procedure_side_effects`, text, optional): Report any side effects from the medical procedure.
* **Medical Procedure Outcome (page 8)** (`medical_procedure_outcome`, select_multiple, optional): Select the outcome of the medical procedure:
	+ Good
	+ Fair
	+ Poor
* **Medical Procedure Outcome Comments (page 9)** (`medical_procedure_outcome_comments`, text, optional): Enter any comments on the medical procedure outcome.
* **Medical Procedure Further Info (page 9)** (`medical_procedure_further_info`, text, optional): Provide any additional information on the medical procedure.
* **Medical Procedure Follow Up (page 10)** (`medical_procedure_follow_up`, text, optional): Schedule any follow-up appointments.
* **Medical Test Results (page 10)** (`medical_test_results`, text, optional): Report on any medical test results.
* **Medical Test Results Details (page 11)** (`medical_test_results_details`, text, optional): Enter details on the medical test results.
* **Medical Test Results Comments (page 11)** (`medical_test_results_comments`, text, optional): Enter any comments on the medical test results.
* **Medical Test Results Follow Up (page 11)** (`medical_test_results_follow_up`, text, optional): Schedule any follow-up appointments.
* **Other Medical Tests (page 12)** (`other_medical_tests`, text, optional): Report on any other medical tests or procedures.

## Tips
* Ensure that all fields are filled out as accurately and thoroughly as possible.
* If a medical procedure has been performed, please report all relevant information, including details and comments.
* If a medical test or procedure is ongoing, please schedule follow-up appointments as needed.
