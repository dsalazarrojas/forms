# Vehicle Inspection Check Out Form - Help Guide
## Purpose
This form is designed to gather information about a vehicle's inspection, including any findings, assigned tools, and vehicle status.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the vehicle information in the first page, including any relevant details.
2. In the second page, provide a brief description of the inspection, including any notable findings.
3. On the third page, select the relevant findings from the provided options.
4. In the fourth page, enter any additional customer information (if applicable).
5. On the final page, provide any additional vehicle notes and select the assigned tool and vehicle status.

## Field-by-Field Explanation
* **vehicle_info (Vehicle Information)** (`vehicle_info`, `text`, required: false): Provide a brief description of the vehicle, including make, model, year, and any other relevant details.
* **inspection_info (Inspection Info)** (`inspection_info`, `text`, required: false): Enter a brief description of the inspection, including the date and any other relevant details.
* **inspection_notes (Inspection Notes)** (`inspection_notes`, `text`, required: true): Enter a detailed description of the inspection findings, including any notes or observations.
* **inspection_findings (Inspection Findings)** (`inspection_findings`, `select_multiple`, required: true): Select all the findings that apply from the provided options.
* **customer_info (Customer Info)** (`customer_info`, `text`, required: false): Provide any relevant customer information, such as name and contact details.
* **vehicle_notes (Vehicle Notes)** (`vehicle_notes`, `text`, required: false): Enter any additional notes or observations about the vehicle.
* **assigned_tool (Assigned Tool)** (`assigned_tool`, `select_one`, required: true): Select the tool or equipment assigned to the vehicle repair.
* **vehicle_status (Vehicle Status)** (`vehicle_status`, `text`, required: true): Enter the vehicle's status, such as "Ready for Repair", "In Repair", etc.

## Tips
- Make sure to provide a detailed description of the inspection findings in the "Inspection Notes" field.
- Select all the relevant findings from the "Inspection Findings" options.
- Enter accurate and up-to-date customer information (if applicable).
- Select the correct tool or equipment assigned to the vehicle repair.
- Update the vehicle's status accurately and consistently.
