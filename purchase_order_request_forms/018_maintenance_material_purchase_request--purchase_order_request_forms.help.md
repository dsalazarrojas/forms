# Maintenance Material Purchase Request - Help Guide
## Purpose
The Maintenance Material Purchase Request form is used to submit requests for maintenance materials needed for various maintenance tasks.

## How To Complete This Form
To complete this form, follow these steps:

1.  Determine if the material is for maintenance purposes only.
2.  Select "Yes" or "No" for material purpose and material type as required.
3.  Enter the name of the material to be purchased.
4.  Enter the quantity of material needed.
5.  Enter the unit cost of the material.
6.  Select the date the material will be purchased.
7.  Select the time the material will be purchased (optional).
8.  Indicate if the material is a priority purchase.
9.  Select the tools assigned for the maintenance task (required).

## Field-by-Field Explanation

* **material_purpose** (`material_purpose`, select_multiple, required): Select "Yes" if the material is for maintenance purposes only.
* **material_type** (`material_type`, select_multiple, required): Select "Yes" if the material is for maintenance purposes only.
* **material_name** (`material_name`, text, required): Enter the name of the material to be purchased.
* **quantity** (`quantity`, number, required): Enter the quantity of material needed.
* **unit_cost** (`unit_cost`, number, required): Enter the unit cost of the material.
* **total_cost** (`total_cost`, number, optional): Optional field to enter the total cost of the material (if applicable).
* **purchase_date** (`purchase_date`, date, required): Select the date the material will be purchased.
* **purchase_time** (`purchase_time`, time, optional): Select the time the material will be purchased (if applicable).
* **priority** (`priority`, select_one, optional): Indicate if the material is a priority purchase.
* **assigned_tool** (`assigned_tool`, select_multiple, required): Select the tools assigned for the maintenance task.

## Tips

*   Be accurate when filling out this form as it will help the maintenance team in accurately tracking and managing maintenance materials.
*   Ensure to enter all required fields.
*   Check if similar request has been submitted in the past before filling out this form.
