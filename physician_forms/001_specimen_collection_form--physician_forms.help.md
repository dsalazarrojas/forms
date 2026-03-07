<thinking>...</thinking>

# Specimen Collection Form - Help Guide
## Purpose
This form is designed to collect information about a patient's specimen, including patient identification, collection details, and laboratory testing requirements. It ensures that all required fields are completed accurately to facilitate efficient and precise processing of the specimen.

## How To Complete This Form

1. **Please fill out the form in a clear and legible handwriting**. Ensure that all information is entered carefully and accurately.
2. Ensure that you have reviewed and completed all the required fields, marked as such.
3. Complete the **Form Title** field with a brief description of the specimen or procedure.
4. Enter the **Patient ID** if available to help identify the patient. If not known, leave this field blank.
5. Enter the **Patient Name** as per the patient's medical record.
6. Enter the **Date of Collection** when the specimen was collected.
7. Enter the **Time of Collection**, if applicable.
8. Choose the **Blood Sample Type** that best describes the specimen being collected.
9. Provide a detailed **Specimen Description** of the collected specimen, including any relevant medical conditions or procedures.
10. Enter the **Physician Name** who collected the specimen.
11. If applicable, select the **Blood Drawn By** personnel who drew the blood.

## Field-by-Field Explanation
* **Form Title (1)** (`form_title`, text, `required`): Enter a brief description of the specimen or procedure.
* **Patient ID (2)** (`patient_id`, text, `required`): Enter the patient ID, if known.
* **Patient Name (3)** (`patient_name`, text, `optional`): Enter the patient's full name as per the medical record.
* **Date of Collection (4)** (`date_of_collection`, date): Enter the date when the specimen was collected.
* **Time of Collection (5)** (`time_of_collection`, time): Enter the time when the specimen was collected, if applicable.
* **Blood Sample Type (6)** (`blood_sample_type`, select_one): Choose the sample type that best describes the specimen being collected.
	+ Options: Blood, Urine, Stool.
* **Specimen Description (7)** (`specimen_description`, text, `required`): Provide a detailed description of the collected specimen, including any relevant medical conditions or procedures.
* **Physician Name (8)** (`physician_name`, text, `required`): Enter the name of the physician who collected the specimen.
* **Blood Drawn By (9)** (`blood_drawn_by`, select_multiple, `optional`): Select the personnel who drew the blood, if applicable.
	+ Options: Dr. Smith, Dr. Johnson.
