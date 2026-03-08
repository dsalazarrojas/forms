# Mpox Case Report Form - Help Guide
## Purpose
The Mpox Case Report Form is used to report and document mpox cases in a standardized manner. It is essential for healthcare professionals to complete this form accurately and thoroughly, as it helps in tracking and managing mpox cases effectively.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields, marked as "required" in the form.
2. Ensure that you have all the necessary information before starting to fill in the form.
3. Review each field carefully and ensure that the information provided is accurate and complete.

## Field-by-Field Explanation

* **Case Number** (id: 1, type: number, required: false): Enter the case number assigned to the mpox case.
* **Patient Name** (id: 2, type: text, required: false): Enter the patient's name.
* **Date Of Diagnosis** (id: 3, type: date, required: false): Enter the date when the mpox was diagnosed.
* **Patient Age** (id: 4, type: number, required: false): Enter the patient's age.
* **Contact History** (id: 5, type: text, required: false): Describe the patient's contact history, including any recent travels or exposure to others with mpox.
* **Symptoms** (id: 6, type: text, required: false): List the patient's symptoms, such as rash, fever, or other relevant health issues.
* **Travel History** (id: 7, type: text, required: false): List any recent travels or countries visited by the patient before the onset of illness.
* **Test Result** (id: 8, type: select_one, required: false): Select the outcome of the patient's test result:
	+ Mpox Confirmed
	+ Mpox Suspected
	+ Not Mpox
* **Treatment** (id: 9, type: text, required: false): Describe any treatment received by the patient.
* **Outcome** (id: 10, type: select_multiple, required: false): Select the outcome of the case:
	+ Recovered
	+ Hospitalized
	+ Fatal
	+ Unknown
* **Contact Trace** (id: 11, type: select_multiple, required: false): Indicate if contact tracing was completed:
	+ True
	+ False
	+ Unknown
* **Reporting Unit** (id: 12, type: select_one, required: false): Select the reporting unit where the case was reported:
	+ Primary Care Unit
	+ Outpatient Clinic
	+ Inpatient Ward
	+ Community Clinic
	+ Other
* **Reported By** (id: 13, type: text, required: false): Enter the name of the person who reported the case.
* **Reporting Date** (id: 14, type: date, required: false): Enter the date when the case was reported.
* **Case Closed** (id: 15, type: select_one, required: false): Indicate if the case is closed:
	+ True
	+ False
* **Case Closed Date** (id: 16, type: date, required: false): Enter the date when the case was closed.
* **Additional Notes** (id: 17, type: text, required: false): Enter any additional information about the case.
* **Contact Trace Completed** (id: 18, type: select_multiple, required: false): Indicate if contact tracing was completed:
	+ True
	+ False
	+ Unknown
* **Contact Trace Completed Date** (id: 19, type: date, required: false): Enter the date when contact tracing was completed.
* **Test Result Confirmed** (id: 20, type: number, required: false): Enter the number of test results confirmed.
* **Test Result Date** (id: 21, type: date, required: false): Enter the date when test results were confirmed.
* **Test Result Sensitivity** (id: 22, type: text, required: false): Enter any relevant information about test sensitivity.
* **Case Type** (id: 23, type: select_multiple, required: false): Select the case type:
	+ Imported
	+ Exported
	+ Local
	+ Imported/Exported
* **Countries Visited Before Illness Onset** (id: 24, type: select_multiple, required: false): Select the countries visited by the patient before the onset of illness:
	+ Africa
	+ Asia
	+ Europe
	+ North America
	+ South America
	+ Other
* **Reporting Unit Name** (id: 25, type: text, required: false): Enter the name of the reporting unit.

Note: This guide is meant to be a general reference for users. Specific guidelines and procedures may vary depending on the organization and context.
