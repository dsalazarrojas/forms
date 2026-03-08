<thinking>...</thinking>

# material_informatics_download_form - Help Guide
## Purpose
This form is used to download materials for the company. It gathers information about the material being requested, including its name, ID, description, version, and other relevant details. This form also captures contact information and approval status for the material.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields:
	* Material Name
	* Material ID
	* Date
	* Material File
	* Email
	* Material Status (select "Approved")
	* Submitter (select "Jimmy" or other approved submitter)
	* Department (select "Sales" or other approved department)
2. Optionally, fill in the following fields:
	* Material Description
	* Material Version
	* Time
	* Comments
	* Material URL

## Field-by-Field Explanation

* **material_name** (`text`, required): Enter the name of the material being requested.
* **material_id** (`number`, required): Enter the unique ID of the material.
* **material_description** (`text`, optional): Provide a brief description of the material.
* **material_version** (`text`, optional): Enter the version of the material, if applicable.
* **material_date** (`date`, required): Enter the date the material is needed.
* **material_time** (`time`, optional): Enter the time the material is needed.
* **material_file** (`text`, required): Enter the file or document related to the material.
* **email** (`email`, required): Enter your email address to contact you.
* **phone** (`text`, optional): Enter your phone number for additional contact.
* **comments** (`text`, optional): Add any additional comments or questions about the material.
* **material_url** (`text`, optional): Enter the URL related to the material.
* **material_status** (`select_one`, required): Select the current status of the material (Approved, Rejected, or In Progress).
* **submitter** (`select_multiple`, required): Select the person submitting the material request (Jimmy, John, or Jane).
* **department** (`select_multiple`, required): Select the department submitting the material request (Sales, Engineering, or Finance).

## Tips
- Make sure to fill in all required fields before submitting the form.
- Double-check your information for accuracy before submitting.
- If you are unsure about any field, ask your supervisor or team lead for guidance.
