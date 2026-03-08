# public_square_lighting_inspection_form - Help Guide
## Purpose
The public square lighting inspection form is used to inspect and report on the condition and maintenance needs of public square lighting fixtures.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the inspection date from the calendar and enter the correct date.
2. Enter the ID of the inspector performing the inspection.
3. Count and record the number of lighting fixtures present.
4. Select all applicable maintenance requests from the options.
5. If a maintenance request is not listed, specify the reason in the "Other (Specify)" field.

## Field-by-Field Explanation
* **Inspection Date** (`inspection_date`, date, required: false): Enter the date of the inspection in the calendar format (e.g., 2024-03-12).
* **Inspector ID** (`inspector_id`, text, required: false): Enter your unique identifier as an inspector.
* **Lighting Fixtures** (`lighting_fixtures`, number, required: false): Count and record the number of lighting fixtures present in the public square.
* **Maintenance Request** (`maintenance_request`, select_multiple, required: false): Select all applicable maintenance requests that apply to the inspection:
	+ Maintenance Request
	+ Maintenance Request 1
	+ Maintenance Request 2
* **Other (Specify)** (`maintenance_request_other`, text, required: false): If a maintenance request is not listed, specify the reason for the request in this field.
