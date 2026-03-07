<thinking>...</thinking>

# COVID 19 Intubation Checklist Form - Help Guide

## Purpose
The COVID-19 Intubation Checklist Form is used to document the intubation process for a patient. This form is intended to ensure that all necessary information is collected and recorded during the intubation process to provide accurate and thorough documentation.

## How To Complete This Form

### Step 1: Gather Patient Information
Enter the patient's name, ID, and date of birth in the respective fields. This information is crucial for identifying the patient and ensuring that the correct records are associated with the intubation process.

### Step 2: Intubation Details
Provide the intubation date and time, along with the intubating physician's name. Select the type of endotracheal tube used and enter the tube size in millimeters. Record the tube depth at the teeth in centimeters. Indicate the indication for intubation, which may include respiratory failure, airway protection, hemodynamic instability, altered mental status, severe hypoxia, or other procedures.

### Step 3: Pre-Intubation Assessment
Record the pre-intubation oxygen saturation level. This information is critical for tracking the patient's respiratory status before intubation.

### Step 4: Equipment and Supplies
Select all the personal protective equipment (PPE) used during the intubation process, such as N95 masks, face shields, gowns, gloves, head covers, and shoe covers. Indicate the type of ventilator used, which may be pressure control, volume control, or dual mode.

### Step 5: Post-Intubation Checks
 Confirm that the tube position is correct, and the tube is secured properly. Check the cuff pressure, and ensure that bilateral lung sounds are present. Record any complications or issues that arose during the intubation process. Finally, enter the time it took to complete the checklist.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the patient's full name.
* **Patient ID** (`patient_id`, text, required): Enter the patient's unique identifier.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in YYYY-MM-DD format.
* **Bed Number** (`bed_number`, text, required): Enter the patient's bed number where intubation took place.
* **Intubation Date** (`intubation_date`, date, required): Enter the date of intubation in YYYY-MM-DD format.
* **Intubation Time** (`intubation_time`, time, required): Enter the time of intubation.
* **Intubating Physician Name** (`intubating_physician`, text, required): Enter the name of the physician who performed the intubation.
* **Endotracheal Tube Type** (`tube_type`, select_one, required): Select the type of tube used for intubation: Oral, Nasal, or Tracheostomy.
* **Tube Size (mm)** (`tube_size`, text, required): Enter the size of the tube used for intubation in millimeters.
* **Tube Depth at Teeth (cm)** (`tube_depth`, number, required): Enter the depth of the tube at the teeth in centimeters.
* **Indication for Intubation** (`indication_for_intubation`, select_multiple, required): Select all indications for intubation from the list.
* **Pre-Intubation Oxygen Saturation** (`pre_intubation_oxygen`, number, required): Enter the pre-intubation oxygen saturation level as a percentage.
* **Personal Protective Equipment Used** (`ppe_used`, select_multiple, required): Select all PPE used during the intubation process.
* **Ventilator Type** (`ventilator_type`, select_one, required): Select the type of ventilator used: Pressure control, Volume control, or Dual mode.
* **Tube Position Confirmed** (`tube_position_confirmed`, select_one, required): Confirm that the tube position is correct.
* **Tube Secured Properly** (`tube_security`, select_one, required): Confirm that the tube is secured properly.
* **Cuff Pressure Checked** (`cuff_pressure_checked`, select_one, required): Check the cuff pressure.
* **Bilateral Lung Sounds Present** (`lung_sounds_bilateral`, select_one, required): Confirm that bilateral lung sounds are present.
* **Complications or Issues** (`complications_noted`, text, optional): Record any complications or issues that arose during the intubation process.
* **Checklist Completion Time** (`checklist_completion_time`, time, required): Enter the time it took to complete the checklist.

## Tips
Please ensure that all fields are filled out accurately and completely. If you are unsure about any information, please contact the relevant medical staff for clarification.
