<thinking>
We need to make sure that the form is being used for its intended purpose and not duplicated. This form is a "nursing_home_discharge_form" and its purpose is to gather information for discharging a patient from a nursing home. To check for duplication, we can verify that the form is not being used for other purposes, such as creating a new patient record or for other types of discharges. Additionally, we can ensure that the fields are being filled out correctly and that the form is being completed by the authorized personnel. This form is designed to collect the following information: patient's name, date of birth, date of discharge, resident status, reason for discharge, expected date of return, medical condition, nursing home information, contact number, and patient's signature. Let's proceed with creating the help guide.
</thinking>

# nursing_home_discharge_form - Help Guide
## Purpose
The "Nursing Home Discharge Form" is used to collect information for discharging a patient from a nursing home. This form is designed to ensure a smooth and efficient discharge process by gathering essential details about the patient's stay and discharge.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's name and date of birth on the first page of the form.
2. Enter the date of discharge and the expected date of return on the second page.
3. Select the resident status from the given options.
4. Provide the reason for discharge, if applicable.
5. Enter the nursing home information and contact number for follow-up purposes.
6. Sign and date the form to confirm the discharge.

## Field-by-Field Explanation
### Patient Name
* **Patient Name** (`patient_name`, text, required): Enter the patient's full name as it appears on their identification.

### Date Of Birth
* **Date Of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in MM/DD/YYYY format.

### Date Of Discharge
* **Date Of Discharge** (`date_of_discharge`, date, required): Enter the date the patient is being discharged from the nursing home.

### Resident Status
* **Resident Status** (`resident_status`, select_one, required): Select the current status of the patient's residency:
	+ Discharged
	+ Admitted
	+ In Progress
	+ Pending

### Reason For Discharge
* **Reason For Discharge** (`reason_for_discharge`, text, optional): Enter the reason for the patient's discharge, if applicable.

### Expected Date Of Return
* **Expected Date Of Return** (`expected_date_of_return`, date, required): Enter the expected date the patient is scheduled to return to the nursing home.

### Medical Condition
* **Medical Condition** (`medical_condition`, text, optional): Enter the patient's current medical condition.

### Nursing Home Info
* **Nursing Home Info** (`nursing_home_info`, text, required): Enter the patient's nursing home information, including the name and address.

### Contact Number
* **Contact Number** (`contact_number`, text, optional): Enter the contact number for follow-up purposes.

### Patient Signature
* **Patient Signature** (`patient_signature`, note, required): Sign and date the form to confirm the discharge.
