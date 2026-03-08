<thinking>Before creating this help guide, let's review the form's purpose and ensure it's not a duplicate or irrelevant. In this case, the form's title is "Specimen Collection Form", which suggests it's used for collecting and storing biological specimens such as blood, urine, or tissue samples. The fields include patient information, specimen details, collection methods, and other relevant data.

The form appears to be a comprehensive form for medical professionals to collect and store specimens for further analysis or research. It's essential to ensure this form is not a duplicate or unnecessary, and it's indeed relevant to the medical field.

Assuming it's relevant and not a duplicate, let's create the user-facing help guide.</thinking>

# Specimen Collection Form - Help Guide
## Purpose
This form is designed for medical professionals to collect and store biological specimens such as blood, urine, or tissue samples. The purpose of this form is to gather essential information about the specimen, patient, and collection process.

## How To Complete This Form
1. Fill in the patient's information, including their name, contact number, and date of birth.
2. Provide details about the specimen, such as its type, collection method, and description.
3. Record the collection site, container, and any relevant conditions.
4. Enter the collection date and time.
5. Specify who collected the specimen and who it was stored at.
6. Provide any additional notes or comments, if necessary.

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, `text`, required): Fill in the patient's name, contact number, and date of birth.
* **Specimen Sample** (`specimen_sample`, `text`, required): Describe the type and nature of the specimen being collected.
* **Specimen Description** (`specimen_description`, `text`, required): Provide a detailed description of the specimen.
* **Collection Method** (`collection_method`, `text`, required): Choose the method used to collect the specimen.
* **Specimen Type** (`specimen_type`, `select_one`, required): Select the type of specimen (e.g., Blood, Urine, Tissue).
* **Collection Site** (`collection_site`, `text`, required): Record the location where the specimen was collected.
* **Specimen Container** (`specimen_container`, `text`, required): Specify the container used to store the specimen.
* **Collection Date** (`collection_date`, `date`, required): Enter the date the specimen was collected.
* **Specimen Condition** (`specimen_condition`, `text`, optional): Note any relevant conditions related to the specimen.
* **Collection Time** (`collection_time`, `time`, optional): Record the time the specimen was collected.
* **Specimen Collected By** (`specimen_collected_by`, `text`, optional): Indicate who collected the specimen.
* **Specimen Stored At** (`specimen_stored_at`, `text`, optional): Specify where the specimen is stored.
* **Specimen Label** (`specimen_label`, `text`, optional): Add any additional labels or tags to the specimen.
* **Medical Condition** (`medical_condition`, `text`, optional): Record any relevant medical conditions related to the specimen.
* **Medical History** (`medical_history`, `text`, optional): Note any relevant medical history related to the specimen.
* **Patient Signature** (`patient_signature`, `text`, optional): Obtain the patient's signature, if required.
* **Doctor Signature** (`doctor_signature`, `text`, optional): Obtain the doctor's signature, if required.
* **Lab Staff Signature** (`laboratory_staff_signature`, `text`, optional): Obtain the laboratory staff signature, if required.
* **Medical Organisation Name** (`medical_organisation_name`, `text`, optional): Record the name of the medical organisation involved.
* **Patient Contact Number** (`patient_contact_number`, `text`, optional): Provide the patient's contact number.
* **Specimen Received At** (`specimen_received_at`, `date`, optional): Record the date the specimen was received at the laboratory.
* **Collected By Doctor** (`specimen_collected_by_doctor`, `text`, optional): Specify who collected the specimen.
* **Collection Reason** (`collection_reason`, `text`, optional): Provide the reason for collecting the specimen.
* **Laboratory Notes** (`laboratory_notes`, `text`, optional): Add any additional notes or comments about the specimen.
