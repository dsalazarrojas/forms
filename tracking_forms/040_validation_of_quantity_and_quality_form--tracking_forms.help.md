<thinking>
This form is used to record the validation of quantity and quality of items received, which is an important part of the inventory management process. The form ensures that the quantity and quality of the items match the expected standards and are verified by the relevant personnel. This form will help users keep track of the items received, the quantity and unit of the items, the quality check results, and any supporting evidence or remarks.

To ensure that this form is used correctly, it is essential to understand each field's purpose and how to complete it.

Please note that some fields are optional, and the required fields are marked as "required: true" in the form configuration. 

</thinking>

# validation_of_quantity_and_quality_form - Help Guide
## Purpose
This form is used to record the validation of quantity and quality of items received in the inventory management process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields: "item_details", "expected_quantity", "expected_unit", "quality_check", "quantity_status", "quantity_status", "remarks_status", "notes_status", "notes_status_status", "signature_status", and "verified_by".
2. For fields with type "select_one" or "select_multiple", select the appropriate option from the dropdown list.
3. Fill in any additional information as needed in the "remarks" field.

## Field-by-Field Explanation

* **item_details** (`item_details`, `text`, required): Enter a brief description or details of the item received.
* **expected_quantity** (`expected_quantity`, `number`, required): Enter the expected quantity of the item.
* **expected_unit** (`expected_unit`, `select_one`, required): Select the unit of the item (e.g., "Option 1", "Option 2", "Option 3").
* **received_quantity** (`received_quantity`, `number`, optional): Enter the received quantity of the item.
* **received_unit** (`received_unit`, `select_one`, optional): Select the unit of the item (e.g., "Option 1", "Option 2", "Option 3").
* **quality_check** (`quality_check`, `note`, required): Enter any quality check results or remarks.
* **supporting_evidence** (`supporting_evidence`, `text`, optional): Enter any supporting evidence or remarks.
* **quantity_diff** (`quantity_diff`, `number`, optional): Enter the difference between the expected and received quantity.
* **quality_score** (`quality_score`, `number`, optional): Enter the quality score of the item.
* **quality_comment** (`quality_comment`, `text`, optional): Enter any additional quality comments.
* **date_checked** (`date_checked`, `date`, optional): Enter the date of the quality check.
* **checked_by** (`checked_by`, `select_multiple`, optional): Select the personnel who performed the quality check (e.g., "Option 1", "Option 2", "Option 3").
* **remarks** (`remarks`, `text`, optional): Enter any additional remarks.
* **expected_date** (`expected_date`, `date`, optional): Enter the expected date of receipt.
* **received_date** (`received_date`, `date`, optional): Enter the date of receipt.
* **quality_status** (`quality_status`, `select_multiple`, optional): Select the quality status of the item (e.g., "Option 1", "Option 2", "Option 3").
* **quantity_status** (`quantity_status`, `select_multiple`, optional): Select the quantity status of the item (e.g., "Option 1", "Option 2", "Option 3").
* **remarks_status** (`remarks_status`, `select_multiple`, optional): Select the status of the remarks (e.g., "Option 1", "Option 2", "Option 3").
* **notes** (`notes`, `text`, optional): Enter any additional notes.
* **notes_status** (`notes_status`, `select_multiple`, optional): Select the status of the notes (e.g., "Option 1", "Option 2", "Option 3").
* **signature** (`signature`, `note`, optional): Enter any supporting evidence or remarks.
* **signature_status** (`signature_status`, `select_multiple`, optional): Select the status of the signature (e.g., "Option 1", "Option 2", "Option 3").
* **notes_status_status** (`notes_status_status`, `select_multiple`, optional): Select the status of the notes status (e.g., "Option 1", "Option 2", "Option 3").
* **date_verified** (`date_verified`, `date`, optional): Enter the date of verification.
* **verified_by** (`verified_by`, `select_multiple`, optional): Select the personnel who verified the items (e.g., "Option 1", "Option 2", "Option 3").
