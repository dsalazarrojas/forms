# Confined Space Safety Inspection Form - Help Guide
## Purpose
This form is used to record the results of a safety inspection of confined spaces. It helps identify potential hazards and ensure that the workplace is safe for workers and visitors.

## How To Complete This Form
1. Fill in the inspection date and time.
2. Enter the name and ID number of the safety inspector.
3. Provide the full address or location of the confined space.
4. Identify the type of inspection being conducted.
5. Answer questions about the condition of the confined space, including barriers, ventilation systems, communication equipment, rescue equipment, and personal protective equipment.
6. Select the correct options for each question.
7. Describe any safety deficiencies or violations.
8. Indicate any corrective actions required.
9. Evaluate the overall compliance status of the space.
10. Sign the form to confirm completion.

## Field-by-Field Explanation

* **Inspection Date** (`inspection_date`, date, required): This is the date when the safety inspection was conducted. Please enter the date in the format `YYYY-MM-DD`.
* **Inspection Time** (`inspection_time`, time, required): This is the time when the inspection was conducted. Please enter the time in the format `HH:MM`.
* **Inspector Name** (`inspector_name`, text, required): This is the name of the safety inspector who performed the inspection.
* **Inspector ID Number** (`inspector_id`, text, required): This is the ID number of the safety inspector.
* **Site Location** (`site_location`, text, required): This is the full address or location of the confined space.
* **Confined Space Name or ID** (`confined_space_name`, text, required): This is the identifier for the specific confined space.
* **Type of Inspection** (`inspection_type`, select_one, required): Choose the type of inspection being conducted:
	+ Pre-Entry Inspection
	+ Routine Periodic Inspection
	+ Post-Incident Inspection
	+ Equipment Inspection
	+ Compliance Audit
* **Entry Permit Displayed** (`permit_displayed`, select_one, required): Check if the permit is posted at the entry point:
	+ True
	+ False
	+ Not Applicable
* **Warning Signs Posted** (`warning_signs_posted`, select_one, required): Check if danger signs are visible at all entry points:
	+ True
	+ False
* **Barriers and Guardrails** (`barriers_in_place`, select_one, required): Check the condition of the physical barriers protecting the opening:
	+ Yes - Adequate
	+ Yes - Needs Improvement
	+ False
* **Atmospheric Monitor** (`atmospheric_monitor`, select_one, required): Check if a calibrated gas monitor is on site:
	+ Yes - Calibrated
	+ Yes - Needs Calibration
	+ False
* **Monitor Calibration Date** (`monitor_calibration_date`, date, optional): Enter the last date the monitor was calibrated.
* **Ventilation System Status** (`ventilation_system`, select_one, required): Check the condition and operation of the ventilation equipment:
	+ Operating Properly
	+ Operating - Needs Maintenance
	+ Not Operating
	+ Not Required
* **Communication Equipment** (`communication_equipment`, select_one, required): Check if reliable communication is established:
	+ Yes - Radio
	+ Yes - Visual
	+ Yes - Voice
	+ Yes - Other
	+ False
* **Rescue Equipment** (`rescue_equipment`, select_one, required): Check the condition of retrieval and rescue equipment:
	+ All Equipment Present and Functional
	+ Equipment Present - Some Issues
	+ Equipment Missing
* **Tripod or Retrieval System** (`tripod_condition`, select_one, required): Check the condition of the tripod or anchor system:
	+ Good Condition
	+ Fair Condition
	+ Poor Condition
	+ Not Available
* **Full Body Harness** (`harness_inspection`, select_one, required): Check the condition of harnesses and lanyards:
	+ Good Condition
	+ Fair Condition - Monitor
	+ Poor Condition - Replace
	+ Not Available
* **Lighting System** (`lighting_inspection`, select_one, required): Check the adequacy of lighting in the space:
	+ Adequate
	+ Marginal
	+ Inadequate
* **Personal Protective Equipment** (`ppe_available`, select_one, required): Check if required PPE is available and in good condition:
	+ Yes - All Required PPE Available
	+ Partially Available
	+ No - PPE Missing
* **PPE Items Available** (`ppe_items`, select_multiple, optional): Select all available PPE items:
	+ Hard Hats
	+ Safety Glasses
	+ Respirators
	+ Harnesses
	+ Gloves
	+ Steel Toe Boots
	+ Hearing Protection
	+ Face Shields
	+ Chemical Suits
* **Trained Attendant** (`attendant_present`, select_one, required): Check if a trained attendant is stationed outside:
	+ True
	+ False
	+ Entry Not In Progress
* **Number of Entrants** (`entrant_count`, number, optional): Enter the number of workers in the space.
* **Deficiencies or Violations** (`deficiencies_found`, text, optional): Describe any safety deficiencies or violations found.
* **Corrective Actions Required** (`corrective_actions`, text, optional): Indicate any corrective actions required.
* **Compliance Status** (`compliance_status`, select_one, required): Evaluate the overall compliance status of the space:
	+ Compliant - No Issues
	+ Minor Issues - Correctable
	+ Non-Compliant - Action Required
	+ Critical - Entry Must Stop
* **Inspector Signature** (`inspector_signature`, text, required): Sign the form to confirm completion.
* **Follow-Up Inspection Required** (`follow_up_required`, select_one, required): Check if a follow-up inspection is needed:
	+ True
	+ False
* **Follow-Up Date** (`follow_up_date`, date, optional): Enter the date of the follow-up inspection.

## Tips
* Ensure that you answer all required fields accurately.
* If you're unsure about any question, consult with your supervisor or safety inspector.
* Describe any safety deficiencies or violations clearly and concisely.
* Sign the form to confirm that you have completed it accurately.
