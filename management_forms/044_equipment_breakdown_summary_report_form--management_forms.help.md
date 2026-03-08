# equipment_breakdown_summary_report_form - Help Guide
## Purpose
The equipment breakdown summary report form is used to gather information about equipment failures, their causes, and repair methods. This form helps identify patterns and trends in equipment failures, enabling effective maintenance and inventory management.

## How To Complete This Form
1. Select the status of the equipment failure by choosing between 'Yes' or 'No' for "equipment_failures".
2. Choose the repair details from the options provided in "repair_details".
3. Provide a detailed description of the equipment that failed in the "equipment_description" field.
4. Enter the date and time when the equipment failed in the "date_equipment_fails" and "time_equipment_fails" fields.
5. Select the cause of the failure from the options provided in "failure_cause".
6. Choose how the equipment was repaired from the options provided in "repair_method".
7. Select the method of repair from the options provided in "repair_notes".
8. Indicate the status of the issue by selecting between "Active" or "Inactive" in the "incident_status" field.
9. Select the user responsible for the issue by choosing between 'Yes' or 'No' in the "user_responsible" field.

## Field-by-Field Explanation
* **equipment_failures** (`equipment_failures`, Select Multiple, required): Indicate if the equipment has failed by selecting 'Yes' or 'No'.
* **repair_details** (`repair_details`, Select One, required): Choose the repair details that apply to the equipment failure.
* **equipment_description** (`equipment_description`, Text, required): Provide a detailed description of the equipment that failed.
* **date_equipment_fails** (`date_equipment_fails`, Date, required): Enter the date when the equipment failed.
* **time_equipment_fails** (`time_equipment_fails`, Time, required): Enter the time when the equipment failed.
* **failure_cause** (`failure_cause`, Select One, required): Select the cause of the failure from the options provided.
* **repair_method** (`repair_method`, Select One, required): Choose how the equipment was repaired from the options provided.
* **repair_notes** (`repair_notes`, Select Multiple, required): Select the method of repair used.
* **incident_history** (`incident_history`, Note, required): Provide any relevant incident history.
* **incident_status** (`incident_status`, Select One, required): Indicate the status of the issue by selecting between "Active" or "Inactive".
* **user_responsible** (`user_responsible`, Select One, required): Indicate if a user is responsible for the issue by choosing between 'Yes' or 'No'.
