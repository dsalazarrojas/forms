# Regulatory Data Collection Form - Help Guide
## Purpose
The "Regulatory Data Collection Form" is designed to collect and store regulatory data from organizations, ensuring accurate and up-to-date information for compliance and reporting purposes.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in the required fields (if any)
* Provide accurate and relevant information for each field
* Review and edit your responses before submitting

## Field-by-Field Explanation

* **Organization** (`organization`, `text`, required: false): Enter the name of the organization that this data belongs to.
* **Contact Person** (`contact_person`, `text`, required: false): Provide the name and contact information of the person responsible for this data.
* **Update Type** (`update_type`, `select_one`, required: false): Select one of the following options:
	+ Compliance Update
	+ Audit History
	+ Supporting Documentation
* **Update Date** (`update_date`, `date`, required: false): Enter the date of the update.
* **Update Time** (`update_time`, `time`, required: false): Enter the time of the update.
* **Audit History** (`audit_history`, `note`, required: false): Provide a detailed note about any audit history related to this data.
* **Supporting Documents** (`supporting_docs`, `note`, required: false): Attach supporting documents relevant to this data.
* **Compliance Update** (`compliance_update`, `note`, required: false): Provide a detailed note about any compliance updates.
* **Notes** (`notes`, `note`, required: false): Add any additional notes or comments about this data.
* **Category** (`regulatory_data_collection_form_category`, `select_one`, required: false): Select one of the following options:
	+ Information Forms
	+ Other Forms
* **Description** (`regulatory_data_collection_form_description`, `text`, required: false): Briefly describe the purpose and scope of this data collection.
* **Output File** (`regulatory_data_collection_form_output_file`, `text`, required: false): Enter the file output for this data collection (e.g., CSV, PDF, etc.).

Please note that some fields are optional and can be left blank if not applicable.
