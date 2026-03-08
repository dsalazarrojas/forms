<thinking>
To create a user-facing help guide for the "Hospice Care Discharge Form", we need to ensure that users understand the form's purpose, how to complete it, and what each field means. This guide aims to provide clear and concise explanations for each field.
</thinking>

# Hospice Care Discharge Form - Help Guide
## Purpose
The Hospice Care Discharge Form is designed to collect essential information about a patient's discharge from a hospice care facility. This form helps ensure that all necessary details are documented for accurate tracking and follow-up care.

## How To Complete This Form
1. Review the form carefully to understand what information is required.
2. Complete each section accurately and thoroughly.
3. Verify your answers before submitting the form.

## Field-by-Field Explanation

* **Patient Registration (`patient_registration_form`, text, required):** Enter the patient's name, date of birth, and any other relevant identifying information.
* **Medical History (`medical_history`, text, optional):** Record any significant medical events or history relevant to the patient's care.
* **Current Medications (`medications`, select_multiple, optional):** Select all current medications the patient is taking. This includes prescribed and over-the-counter medications. For example:
	+ Acetaminophen
	+ Albuterol
	+ Alprazolam
	+ Aspirin
	+ Atorvastatin
	+ Atenolol
	+ Azithromycin
	+ Aripiprazole
	+ Cetirizine
	+ Ceftriaxone
	+ Cephalexin
	+ Clonazepam
	+ Clobetasol
* **Discharge Plans (`discharge_plans`, text, optional):** Describe the patient's discharge plans, including any follow-up appointments, medication management, or other relevant details.
* **Pain Management (`pain_management`, text, optional):** Record any pain management strategies or treatments the patient is currently receiving or will need after discharge.
* **Pain Level (`pain_level`, number, optional):** Rate the patient's current pain level on a scale of 1-10, with 1 being the lowest level of pain and 10 being the highest.
* **Discharge Status (`discharge_status`, select_one, optional):** Indicate whether the patient has been discharged (True) or not (False).
* **Discharge Date (`discharge_date`, date, optional):** Enter the date of the patient's discharge.
* **Discharge Time (`discharge_time`, time, optional):** Record the time of the patient's discharge.
* **Discharge Location (`discharge_location`, text, optional):** Specify the location where the patient will be discharged, such as home or another facility.
* **Contact Info (`contact_info`, text, optional):** Provide any relevant contact information, such as phone numbers or email addresses, for the patient's caregiver or family member.
* **Discharge Status Update (`discharge_status_update`, select_one, optional):** Indicate whether there have been any updates to the discharge status (True) or not (False).
