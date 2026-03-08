<thinking>...</thinking>

# Patient Medication Form - Help Guide

## Purpose
This form is designed to collect patient medication information, including medication lists, prescribing information, and additional details about medication usage. It's intended to streamline the process of tracking and managing patient medication data.

## How To Complete This Form

1. Begin by filling out the **Patient Information** page.
2. On this page, you will provide the patient's basic details.
3. Move on to the **Medication List** page.
4. In this page, select the medications you wish to document, specifying the **Name**, **Dosage**, **Frequency**, and **Route** of each medication.
5. Add any **Additional Information** related to the patient's medication usage on the **Additional Information** page.
6. Enter the **Prescribed By** field to note the doctor or healthcare professional who prescribed the medication.
7. Specify the **Date Prescribed** and **Date Filled** for the medication.
8. On the **Medication Schedule** page, provide any relevant details about the medication schedule.
9. Finally, note the **Medication Status** in the last field.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, optional): Enter the patient's basic details such as name, date of birth, or any other relevant health identifier.
* **Medication List** (`medication_list`, select_multiple, optional): Select the medications you wish to document. Choose from:
	+ Name
	+ Dosage
	+ Frequency
	+ Route
* **Additional Information** (`additional_info`, text, optional): Add any additional details about the patient's medication usage.
* **Prescribed By** (`prescribed_by`, text, optional): Note the doctor or healthcare professional who prescribed the medication.
* **Date Prescribed** (`date_prescribed`, date, optional): Enter the date the medication was prescribed.
* **Date Filled** (`date_filled`, date, optional): Specify the date the medication was filled or administered.
* **Medication Schedule** (`medication_schedule`, text, optional): Provide any relevant details about the medication schedule.
* **Medication Status** (`medication_status`, text, optional): Note the current status of the medication.
