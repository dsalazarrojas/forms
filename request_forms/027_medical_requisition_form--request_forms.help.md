<thinking>
This form is intended for healthcare professionals to collect information about medical requests and supplies. It is designed to ensure that the right equipment, supplies, and medications are ordered for patient care. The form should only be filled out once for each request, and any subsequent requests for the same items should be avoided.
</thinking>

# Medical Requisition Form - Help Guide
## Purpose
The Medical Requisition Form is used to request medical equipment, supplies, and medications for patient care. This form helps ensure that the right items are ordered and available for patient treatment.

## How To Complete This Form
To complete this form, please follow the following steps:

1. Enter the patient's details in the "Patient ID", "Doctor Name", "Hospital Name", and "Date Requested" sections.
2. Select the equipment, supplies, or medications needed from the respective dropdown lists.
3. Enter the time requested in the "Time Requested" field.
4. Review and submit the form to submit your request.

## Field-by-Field Explanation

* **Request Form Data** (`request_form_data`, text, optional): A text field where you can enter any additional information related to the request.
* **Equipment Requested** (`equipment_requested`, select_multiple, optional): Choose the medical equipment needed from the dropdown list:
	+ Medical Cart
	+ IV Stand
	+ Blood Pressure Monitor
	+ Defibrillator
	+ Oxygen Tank
	+ Surgical Light
* **Supplies Requested** (`supplies_requested`, select_multiple, optional): Choose the supplies needed from the dropdown list:
	+ Gloves
	+ Gown
	+ Face Mask
	+ Surgical Gauze
* **Medications Requested** (`medications_requested`, select_multiple, optional): Choose the medications needed from the dropdown list:
	+ Aspirin
	+ Epinephrine
	+ Fentanyl
	+ Hydralazine
	+ Metoprolol
	+ Morphine
	+ Naloxone
	+ Oxytocin
	+ Sulfamylon
* **Patient ID** (`patient_id`, number, optional): Enter the patient's ID number.
* **Doctor Name** (`doctor_name`, text, optional): Enter the doctor's name who is making the request.
* **Hospital Name** (`hospital_name`, text, optional): Enter the hospital name where the request is being made.
* **Date Requested** (`date_requested`, date, optional): Enter the date the request is needed.
* **Time Requested** (`time_requested`, time, optional): Enter the time the request is needed.
