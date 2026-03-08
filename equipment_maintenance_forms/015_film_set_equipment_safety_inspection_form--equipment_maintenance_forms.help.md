# Film Set Equipment Safety Inspection Form - Help Guide
## Purpose
This form is used to conduct a safety inspection on film equipment on a set.

## How To Complete This Form
1. Fill in the required fields with the information about the equipment being inspected.
2. Select the relevant options for inspection date, safety risks, inspection frequency, condition, and action status.
3. Add any comments or notes about the equipment.
4. Select any action items that need to be addressed.
5. Submit the form once completed.

## Field-by-Field Explanation

* **Equipment Details** (`equipment_details`, text, required: false): This field is used to describe the equipment being inspected, including its type and make.
* **Date** (`inspection_date`, date, required: false): Select the date you conducted the inspection.
* **Inspected By** (`inspected_by`, text, required: false): Enter your name or the name of the person who conducted the inspection.
* **Comments** (`inspector_comments`, note, required: false): Add any comments or observations about the equipment's condition.
* **Safety Risks** (`safety_risks`, select_multiple, required: false): Select any safety risks associated with the equipment, such as electrical hazards or sharp edges.
* **Action Items** (`action_items`, select_multiple, required: false): Select any action items that need to be addressed, such as maintenance or repairs.
* **Inspection Frequency** (`inspection_frequency`, select_one, required: false): Select how often the equipment is inspected, such as daily, weekly, or monthly.
* **Condition** (`equipment_condition`, select_one, required: false): Select the condition of the equipment, such as good, fair, or poor.
* **Status** (`action_status`, select_one, required: false): Select the status of the action items, such as not started, in progress, or completed.
* **Notes** (`notes`, note, required: false): Add any additional notes or comments about the equipment.
* **Action Status** (`action_status`, select_one, required: false): This field is used to select the status of the action items, but it seems to be a duplicate field. Please ignore it for now.

Please note that some fields are optional and only the required fields need to be filled out for the form to be considered complete.
