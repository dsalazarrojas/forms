# Asset Handover Form - Help Guide

## Purpose

The Asset Handover Form is used to document the transfer of assets between employees or departments within the organization. This form ensures that assets are properly tracked and recorded throughout the transfer process.

## How To Complete This Form

1. Select the "Company Name" field and enter the name of the organization transferring the asset.
2. Enter the "Handover Date" in the format of MM/DD/YYYY.
3. Fill in the "Asset ID Number" as provided by the asset tracking system.
4. Enter the name of the asset in the "Asset Name" field.
5. Provide a detailed description of the asset in the "Asset Description" field.
6. Select the category of the asset from the "Asset Category" dropdown menu.
7. Fill in any serial number for the asset in the "Serial Number" field.
8. If applicable, enter the model number or version of the asset in the "Model Number" field.
9. Describe the current condition of the asset in the "Current Condition" field.
10. Enter the current value of the asset in the "Asset Value" field.
11. Select the name of the employee releasing the asset from the "Transferring From - Employee Name" field.
12. Enter the ID of the employee releasing the asset in the "Transferring From - Employee ID" field.
13. Enter the department of the employee releasing the asset in the "Department" field.
14. Select the name of the employee receiving the asset in the "Transferring To - Employee Name" field.
15. Enter the ID of the employee receiving the asset in the "Transferring To - Employee ID" field.
16. Enter the department of the employee receiving the asset in the "Department" field.
17. Select the reason for the transfer from the "Reason for Transfer" dropdown menu.
18. Check if there are any outstanding issues with the asset and select the corresponding option.
19. If there are outstanding issues, provide a detailed description in the "Description of Issues" field.
20. List any accessories included with the asset in the "Accessories Included" field.
21. Sign and date the "Releasing Employee Signature" field.
22. Sign and date the "Receiving Employee Signature" field.
23. If available, sign the "Witness Signature" field.
24. Enter the date the form was completed in the "Form Completion Date" field.

## Field-by-Field Explanation

* **Company Name** (`company_name`, text, required): Enter the name of the organization transferring the asset.
* **Handover Date** (`handover_date`, date, required): Enter the date the asset is being transferred.
* **Asset ID Number** (`asset_id`, text, required): Enter the asset tracking number.
* **Asset Name** (`asset_name`, text, required): Enter the name of the asset.
* **Asset Description** (`asset_description`, text, required): Provide a detailed description of the asset.
* **Asset Category** (`asset_category`, select_one, required): Select the category of the asset (e.g. Computer Equipment, Mobile Device, etc.).
* **Serial Number** (`asset_serial_number`, text, optional): Enter any serial number for the asset.
* **Model Number** (`asset_model`, text, optional): Enter the model number or version of the asset.
* **Current Condition** (`asset_condition`, select_one, required): Select the current condition of the asset (e.g. Excellent, Good, etc.).
* **Asset Value** (`asset_value`, number, required): Enter the current value of the asset.
* **Transferring From - Employee Name** (`transferring_from_name`, text, required): Enter the name of the employee releasing the asset.
* **Transferring From - Employee ID** (`transferring_from_id`, text, required): Enter the ID of the employee releasing the asset.
* **Department** (`transferring_from_department`, text, required): Enter the department of the employee releasing the asset.
* **Transferring To - Employee Name** (`transferring_to_name`, text, required): Enter the name of the employee receiving the asset.
* **Transferring To - Employee ID** (`transferring_to_id`, text, required): Enter the ID of the employee receiving the asset.
* **Department** (`transferring_to_department`, text, required): Enter the department of the employee receiving the asset.
* **Reason for Transfer** (`transfer_reason`, select_one, required): Select the reason for the transfer (e.g. Employee Promotion, etc.).
* **Any Outstanding Issues?** (`outstanding_issues`, select_one, required): Check if there are any outstanding issues with the asset.
* **Description of Issues** (`issue_description`, text, optional): If there are outstanding issues, provide a detailed description.
* **Accessories Included** (`accessories_included`, text, optional): List any accessories included with the asset.
* **Releasing Employee Signature** (`from_employee_signature`, text, required): Sign and date the releasing employee's signature.
* **Receiving Employee Signature** (`to_employee_signature`, text, required): Sign and date the receiving employee's signature.
* **Witness Signature** (`witness_signature`, text, optional): If available, sign and date the witness's signature.
* **Form Completion Date** (`form_completion_date`, date, required): Enter the date the form was completed.
