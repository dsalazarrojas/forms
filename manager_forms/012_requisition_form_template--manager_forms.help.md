# Requisition Form Template - Help Guide
## Purpose
The Requisition Form Template is designed to be used for creating and managing requisitions, which are requests for items or materials from a supply chain or inventory system.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Requisition Date** in the date field. This is the date on which the requisition is being submitted.
2. Enter your name in the **Requirer** field. This is the person submitting the requisition request.
3. Select the **Item Requested** from the dropdown menu. Choose the specific item you are requesting.
4. Enter the **Quantity Requested** in the number field. Specify the amount of the item you need.
5. Enter the **Price** of the item in the number field. If not applicable, leave blank.
6. Add any **Remarks** about the requisition request in the text field. This is an optional field for additional comments.
7. If necessary, select the **Approved By** from the dropdown menu. Choose the person responsible for approving the requisition.
8. Enter the **Approved Date** in the date field if the requisition has been approved. If not applicable, leave blank.

## Field-by-Field Explanation
* **Requisition Date** (`requisition_date`, date, required: false): Enter the date on which the requisition is being submitted.
* **Requirer** (`requirer`, text, required: false): Enter your name as the person submitting the requisition request.
* **Item Requested** (`item_requested`, select_one, required: false): Select the specific item you are requesting from the dropdown menu.
* **Quantity Requested** (`quantity_requested`, number, required: false): Specify the amount of the item you need.
* **Price** (`price`, number, required: false): Enter the price of the item. If not applicable, leave blank.
* **Remarks** (`remarks`, text, required: false): Add any additional comments about the requisition request.
* **Approved By** (`approved_by`, select_one, required: false): Select the person responsible for approving the requisition, if necessary.
* **Approved Date** (`approved_date`, date, required: false): Enter the date on which the requisition was approved, if applicable.
