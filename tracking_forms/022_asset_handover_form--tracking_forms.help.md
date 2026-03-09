# Asset Handover Form - Help Guide

## Purpose
The Asset Handover Form is a document used to transfer ownership of company assets between employees. This form is crucial for maintaining accurate records and preventing asset loss or misplacement.

## How To Complete This Form

1. Fill out the form carefully, ensuring all required fields are completed accurately.
2. Review the form to ensure that it is completed correctly before submitting it for review and approval.

## Field-by-Field Explanation

* **Handover Date** (`handover_date`, date, required): Date of transfer. This date should be the date the asset was transferred from one employee to another.
* **Handover Time** (`handover_time`, time, required): Time of transfer. This should be the time the asset was transferred.
* **From Employee Name** (`from_employee_name`, text, required): Current holder of the asset. This is the name of the person transferring the asset.
* **From Employee ID** (`from_employee_id`, text, required): Employee number. This is the ID number of the employee transferring the asset.
* **From Department** (`from_department`, text, required): Current department. This is the department the asset was originally assigned to.
* **To Employee Name** (`to_employee_name`, text, required): Receiving employee. This is the name of the employee who will take possession of the asset.
* **To Employee ID** (`to_employee_id`, text, required): Employee number. This is the ID number of the employee receiving the asset.
* **To Department** (`to_department`, text, required): Receiving department. This is the department the asset will be assigned to after transfer.
* **Asset Type** (`asset_type`, select_one, required): Category of the asset. Examples include Laptop Computer, Desktop Computer, Mobile Phone, and more.
* **Asset Description** (`asset_description`, text, required): Detailed description of the asset. This should include any notable features or special instructions.
* **Asset ID** (`asset_id`, text, required): Company asset tag. This is a unique identifier assigned to the asset.
* **Serial Number** (`serial_number`, text, optional): Manufacturer serial number. If available, please include this number for tracking purposes.
* **Brand and Model** (`brand_model`, text, required): Make and model of the asset. This should include any specific model or version information.
* **Asset Condition** (`asset_condition`, select_one, required): Current state of the asset. This can be Excellent - Like New, Good - Minor Wear, Fair - Moderate Wear, Poor - Significant Wear, or Damaged.
* **Accessories Included** (`accessories_included`, select_multiple, required): Accessories that come with the asset, such as charger, battery, case or bag, cables, manuals, original box, or None.
* **Accessories Notes** (`accessories_notes`, text, optional): Description of any accessories.
* **Existing Damage or Issues** (`existing_damage`, text, required): Note any existing problems with the asset.
* **Asset Value** (`asset_value`, number, optional): Current value of the asset. If known, please include this for financial tracking purposes.
* **Reason for Handover** (`handover_reason`, select_one, required): Reason for transferring the asset. Examples include New Employee Onboarding, Role Change, Employee Departure, Equipment Upgrade, Temporary Assignment, Replacement, or Other.
* **Additional Notes** (`handover_notes`, text, optional): Any other details that may be helpful for the transfer process.
* **IT Department Approval** (`it_approval`, select_one, required): IT department approval. If applicable, select Approved.
* **Supervisor Approval** (`supervisor_approval`, select_one, required): Manager approval. If applicable, select Approved.
* **From Employee Signature** (`from_signature`, text, required): Type name to sign for transfer approval.
* **To Employee Signature** (`to_signature`, text, required): Type name to acknowledge receipt of the asset.
* **Witness Name** (`witness_name`, text, optional): If required, include the name of the witness.
* **Witness Signature** (`witness_signature`, text, optional): If required, include the signature of the witness.

Note: The fields marked "optional" are not required for form completion, but may be necessary for specific scenarios or tracking purposes.
