<thinking>...This form is used to provide a summary of historical requisition data. It's likely used for administrative or analytical purposes, possibly to track the history of requisitions within an organization. To ensure the form is used effectively, please note that it's not intended for creating new requisitions. If you're looking to create a new requisition, please use the "Create Requisition" form instead.</thinking>

# Requisition History Overview - Help Guide
## Purpose
The Requisition History Overview form is designed to provide a summary of historical requisition data. It's intended for administrative or analytical purposes, such as tracking the history of requisitions within an organization.

## How To Complete This Form
1. Select the date range for which you want to view requisition history.
2. Select the requisition ID(s) you want to view.
3. Choose the approver and requisition status.
4. Select the type of requisition and department.
5. Provide any additional notes about the requisition history.

## Field-by-Field Explanation
* **Requisition Date** (`requisition_date`, date, required: false): Enter the date range for which you want to view requisition history.
* **Requisition ID** (`requisition_id`, number, required: false): Enter the requisition ID(s) you want to view.
* **Approver** (`approver`, select_one, required: false): Select "Yes" if the requisition was approved, "No" otherwise.
* **Requisition Status** (`requisition_status`, select_multiple, required: false): Select all applicable statuses (Active or Inactive).
* **Requisition Type** (`requisition_type`, select_one, required: false): Select "Yes" if the requisition is of a specific type, "No" otherwise.
* **Department** (`department_id`, select_one, required: false): Select "Yes" if the requisition is related to a specific department, "No" otherwise.
* **Requisition History Notes** (`requisition_history_notes`, text, required: false): Provide any additional notes about the requisition history.

## Tips
* You can select multiple requisition IDs by separating them with commas.
* You can use the search function to quickly find a specific requisition ID.
* Be sure to enter dates in the correct format (MM/DD/YYYY).
* If you're unsure about any of the fields, try selecting "No" or leaving it blank to see what information is still available.
