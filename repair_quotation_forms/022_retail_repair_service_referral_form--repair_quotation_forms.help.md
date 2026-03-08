# Retail Repair Service Referral Form - Help Guide
## Purpose
The purpose of this form is to collect information from customers about the items they want to refer for repair. This information will be used to process the repair request and ensure that the customer receives the best possible service.

## How To Complete This Form
To fill out this form, follow these steps:

1. Select "Yes" or "No" for "Customer Info" to confirm that the customer information is correct.
2. Enter the customer's name and contact information in the "Customer Name" and "Customer Contact" fields respectively.
3. Enter the customer's email address in the "Customer Email" field.
4. Indicate whether the item is "Yes" or "No" for "Item Info" to confirm that the item information is correct.
5. Enter a brief description of the item in the "Item Description" field.
6. Select "Active" or "Inactive" for "Item Status" to indicate the status of the item.
7. Select "Yes" or "No" for "Item Type" to confirm that the item type is correct.
8. Enter a brief description of the repair in the "Repair Description" field.
9. Select "Active" or "Inactive" for "Repair Status" to indicate the status of the repair.
10. Enter the cost of the repair in the "Repair Cost" field.
11. If necessary, add comments in the "Customer Signature", "Repair Signature", and "Customer Notes" fields.
12. Confirm that the repair has been assigned to a tool by selecting "Yes" or "No" for "Assigned Tool".
13. Confirm that the form was submitted by selecting "Yes" or "No" for "Submitted By".

## Field-by-Field Explanation

* **Customer Info** (`customer_info`, select_multiple, required): Select "Yes" or "No" to confirm that the customer information is correct.
* **Customer Name** (`customer_name`, text, required): Enter the customer's name.
* **Customer Contact** (`customer_contact`, text, required): Enter the customer's contact information.
* **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
* **Item Info** (`item_info`, select_multiple, required): Select "Yes" or "No" to confirm that the item information is correct.
* **Item Description** (`item_description`, text, required): Enter a brief description of the item.
* **Item Status** (`item_status`, select_one, required): Select "Active" or "Inactive" to indicate the status of the item.
* **Item Type** (`item_type`, select_one, required): Select "Yes" or "No" to confirm that the item type is correct.
* **Repair Info** (`repair_info`, text, required): Enter a brief description of the repair.
* **Repair Type** (`repair_type`, text, required): Enter a brief description of the repair.
* **Repair Status** (`repair_status`, select_one, required): Select "Active" or "Inactive" to indicate the status of the repair.
* **Repair Cost** (`repair_cost`, number, required): Enter the cost of the repair.
* **Customer Signature** (`customer_signature`, note, required): Add comments from the customer.
* **Repair Signature** (`repair_signature`, note, required): Add comments from the repair person.
* **Repair Note** (`repair_note`, note, required): Add comments about the repair.
* **Customer Notes** (`customer_notes`, note, required): Add additional comments from the customer.
* **Assigned Tool** (`assigned_tool`, select_one, required): Select "Yes" or "No" to confirm that the repair has been assigned to a tool.
* **Submitted By** (`submitted_by`, select_one, required): Select "Yes" or "No" to confirm that the form was submitted.
