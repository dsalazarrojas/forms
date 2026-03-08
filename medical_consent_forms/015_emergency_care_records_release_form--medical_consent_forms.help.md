<thinking>...</thinking>

# Emergency Care Records Release Form - Help Guide

## Purpose
The Emergency Care Records Release Form is used to release medical records to authorized contacts. This form ensures that patients have control over their medical information and can choose who can access their records.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine who is authorized to receive the patient's medical records.
2. Fill in the contact information for the authorized contact.
3. Select the relationship between the contact and the patient.
4. If necessary, provide additional details about the contact's connection to the patient.
5. Select the facility where the care was provided.
6. Review and sign the form to confirm the release of medical records.

## Field-by-Field Explanation

* **Patient Identifier** (`patient_identifier`, text, required: false): The identifier number assigned to the patient. Please fill in the patient's identifier number if available.
* **Authorized Contact** (`authorized_contact`, select_multiple, required: false): Select who is authorized to receive the patient's medical records.
	+ **Patient**: The patient themselves.
	+ **Authorized Representative**: A person authorized by the patient to access their records.
	+ **Family Member**: A family member of the patient.
* **Contact Name** (`contact_name`, text, required: false): The name of the authorized contact.
* **Contact Email** (`contact_email`, email, required: false): The email address of the authorized contact.
* **Contact Phone** (`contact_phone`, text, required: false): The phone number of the authorized contact.
* **Contact Relationship** (`contact_relationship`, select_one, required: false): How the authorized contact knows the patient.
	+ **Parent**: The contact is the patient's parent.
	+ **Spouse**: The contact is the patient's spouse.
	+ **Authorized Representative**: The contact is an authorized representative of the patient.
	+ **Emergency Contact**: The contact is an emergency contact of the patient.
* **Signature Date** (`signature_date`, date, required: false): The date the authorized contact signs the form.
* **Signature** (`signature`, note, required: false): The authorized contact's signature.
* **Facility Name** (`facility_name`, select_one, required: false): The name of the facility where the care was provided.
	+ **Hospital**
	+ **Clinic**
	+ **Doctor's Office**
* **Medical Record Number** (`medical_record_number`, text, required: false): The identifier number of the patient's medical record.
* **Medical Record ID** (`medical_record_id`, number, required: false): The unique identifier for the patient's medical record.
* **Patient Signature Date** (`patient_signature_date`, date, required: false): The date the patient signs the form.
* **Patient Signature** (`patient_signature`, note, required: false): The patient's signature.
* **Facility Signature Date** (`facility_signature_date`, date, required: false): The date the facility signs the form.
* **Facility Signature** (`facility_signature`, note, required: false): The facility's signature.
* **Medical Record Version** (`medical_record_version`, number, required: false): The version of the patient's medical record.
* **Facility** (`facility`, select_one, required: false): The type of facility where the care was provided.
	+ **Primary Care**
	+ **Specialty Care**
	+ **Urgent Care**
* **Medical Record Status** (`medical_record_status`, select_one, required: false): The status of the patient's medical record.
	+ **Active**
	+ **Inactive**
	+ **Pending**
* **Facility Address** (`facility_address`, text, required: false): The address of the facility where the care was provided.
* **Facility Address 2** (`facility_address_2`, text, required: false): The secondary address of the facility where the care was provided.

## Tips

* Please fill in the form accurately and completely.
* Ensure that the authorized contact has the necessary permissions to access the patient's medical records.
* Sign the form to confirm the release of medical records.
* Store the signed form in a secure location for future reference.
