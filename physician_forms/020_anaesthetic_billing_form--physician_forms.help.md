# Anaesthetic Billing Form - Help Guide
## Purpose
The Anaesthetic Billing Form is used to collect details for billing purposes after an anesthesiology procedure. This form is essential for tracking and processing payments accurately.

## How To Complete This Form
1. Fill out all required fields (Physician Name, Provider ID / NPI Number, Patient Name, Procedure Description, Date of Procedure, Anaesthesia Start Time, Anaesthesia End Time, Total Anaesthesia Minutes, CPT Code, Total Billing Amount, and Insurance Provider).
2. Choose the correct Insurance Provider from the options listed.
3. Ensure that you provide accurate and clear information in all fields.
4. If necessary, fill out the optional fields (Provider ID / NPI Number, ASA Base Units, and Insurance Policy Number).

## Field-by-Field Explanation
* **Physician Name** (`physician_name`, text, **Required**): Enter the name of the physician who performed the procedure.
* **Provider ID / NPI Number** (`provider_id`, text, **Required**): Enter the unique identifier or NPI number of the healthcare provider who performed the procedure.
* **Patient Name** (`patient_name`, text, **Required**): Enter the name of the patient who received the procedure.
* **Procedure Description** (`procedure_description`, text, **Required**): Enter a brief description of the procedure performed.
* **Date of Procedure** (`procedure_date`, date, **Required**): Enter the date when the procedure was performed.
* **Anaesthesia Start Time** (`start_time`, time, **Required**): Enter the start time of the anaesthesia procedure.
* **Anaesthesia End Time** (`end_time`, time, **Required**): Enter the end time of the anaesthesia procedure.
* **Total Anaesthesia Minutes** (`total_anaesthesia_minutes`, number, **Required**): Enter the total minutes of anaesthesia used during the procedure.
* **CPT Code** (`cpt_code`, text, **Required**): Enter the CPT (Current Procedural Terminology) code for the procedure.
* **Total Billing Amount** (`total_billing_amount`, number, **Required**): Enter the total amount due for the procedure.
* **Insurance Provider** (`insurance_provider`, select_one, **Required**): Choose the insurance provider from the options listed (Medicare, Private Insurance, Self-Pay, or Workers Comp).
* **Insurance Policy Number** (`insurance_policy_number`, text, **Optional**): Enter the insurance policy number if applicable.
* **ASA Base Units** (`asa_base_units`, text, **Optional**): Enter the ASA base units if required.
* **Provider ID / NPI Number** (`provider_id`, text, **Optional**): Enter the unique identifier or NPI number of the healthcare provider if not already entered in the required field above.
