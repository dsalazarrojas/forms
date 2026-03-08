# Equipment Breakdown Summary Report Form - Help Guide
## Purpose
The Equipment Breakdown Summary Report Form is used to report and document equipment breakdowns, providing a detailed summary of the incident to help with repair, maintenance, and future reference.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have all necessary information about the equipment breakdown.
2. Select the relevant equipment from the list on the "equipment" page.
3. Choose the reason for the breakdown from the list on the "failure_reason" page.
4. Enter the date and time of the incident on the "incident_date" and "incident_time" pages, respectively.
5. Provide details about the repair on the "repair_details" page.
6. Enter the cost of the repair on the "repair_cost" page.
7. Select any previous incident history for the equipment on the "store_incident_history" page.
8. Add any additional notes or comments on the "notes" page.

## Field-by-Field Explanation

* **Summary**: (`summary`, `text`, required)
	+ A brief summary of the incident, describing the issue with the equipment.
* **Equipment** (`equipment`, `select_one`, false)
	+ Select the equipment that broke down (e.g., "Printer", "Computer", "Generator", etc.).
* **Failure Reason** (`failure_reason`, `select_multiple`, true)
	+ Select all reasons that apply for the breakdown (e.g., "Mechanical failure", "Software issue", "Human error", etc.).
* **Incident Date** (`incident_date`, `date`, false)
	+ Enter the date of the incident (MM/DD/YY).
* **Incident Time** (`incident_time`, `time`, true)
	+ Enter the time of the incident (HH:MM AM/PM).
* **Repair Details** (`repair_details`, `text`, true)
	+ Describe the steps taken to repair or fix the equipment.
* **Repair Cost** (`repair_cost`, `number`, true)
	+ Enter the cost of the repair.
* **Store Incident History** (`store_incident_history`, `select_multiple`, true)
	+ Select any previous incident history for the equipment (e.g., "Previous repair", "Ongoing issue", etc.).
* **Notes** (`notes`, `note`, false)
	+ Add any additional comments or notes about the incident.
