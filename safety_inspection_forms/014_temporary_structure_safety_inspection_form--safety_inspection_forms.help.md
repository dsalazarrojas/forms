# Temporary Structure Safety Inspection Form - Help Guide
## Purpose
This form is used to document the safety inspection of temporary structures. It captures information about the structure, the results of the inspection, and the next steps for completion.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields for "Event Name", "Structure Type", "Structure Location", "Hazard Found", "Risk Level", and "Assigned To".
2. Answer the "Date Completed" and "Time Completed" fields with the date and time of the inspection.
3. Provide any additional comments or next steps in the "Control Measures" and "Next Steps" fields.
4. Select the appropriate options for "Structure Type" and "Structure Location" from the provided options.
5. Choose whether a hazard was found ("Yes" or "No") and the level of risk ("Low", "Moderate", or "High").
6. Select the person or team assigned to review and complete the next steps.
7. Enter the date and time the form was completed in "Date Completed" and "Time Completed".

## Field-by-Field Explanation

* **Event Name** (`event_name`, text, required): Enter the name of the event or project associated with the temporary structure.
* **Structure Type** (`structure_type`, select_one, required): Choose the type of structure (Temporary, Permanent, or Other).
* **Structure Location** (`structure_location`, select_multiple, required): Select the location of the structure (Field, Stage, or Field and Stage).
* **Hazard Found** (`hazard_found`, select_one, required): Select whether a hazard was found ("Yes" or "No").
* **Risk Level** (`risk_level`, select_one, required): Choose the level of risk (Low, Moderate, or High).
* **Hazard Description** (`structure_description`, text, required): Describe the hazard found in the structure.
* **Control Measures** (`control_measures`, text, required): Provide any control measures that need to be taken to mitigate the hazard.
* **Next Steps** (`next_steps`, text, required): Enter the next steps for completing the inspection.
* **Assigned To** (`assigned_to`, select_one, required): Select the person or team assigned to review and complete the next steps.
* **Date Completed** (`date_completed`, date, required): Enter the date the inspection was completed.
* **Time Completed** (`time_completed`, time, required): Enter the time the inspection was completed.
* **Completed By** (`completed_by`, note, optional): Enter a note about who completed the form.
* **Completed At** (`completed_at`, date, optional): Enter the date the form was completed.
