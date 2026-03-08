# Delivery Note Filters - Help Guide
## Purpose
This form is designed to filter and categorize delivery notes based on various criteria.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of delivery note from the "Delivery Note Type" field.
2. Choose the status of the delivery note from the "Status" field.
3. Select the priority level of the delivery note from the "Priority" field.
4. Select the category of the delivery note from the "Category" field.
5. Choose the customer related to the delivery note from the "Customer" field.
6. Enter the order number of the delivery note in the "Order Number" field.
7. Select the shipment status of the delivery note from the "Shipment Status" field.
8. Select the shipment date and time of the delivery note from the "Shipment Date" and "Shipment Time" fields.
9. Enter the delivery address and phone number of the delivery note in the "Delivery Address" and "Delivery Phone" fields.
10. Enter the delivery email address and notes in the "Delivery Email" and "Delivery Notes" fields.
11. Upload any attachments related to the delivery note in the "Attachments" field.
12. Add tags to the delivery note in the "Tags" field.
13. Enter the name of the user who created the delivery note in the "Created By" field.
14. Enter the name of the user who last updated the delivery note in the "Updated By" field.
15. Select the date and time when the delivery note was created and last updated in the "Created At" and "Updated At" fields.
16. Select the user who last updated the delivery note in the "Updated By User" field.
17. Select the user assigned to handle the delivery note from the "Assigned To" field.
18. Select the due date of the delivery note from the "Due Date" field.

## Field-by-Field Explanation
* **Delivery Note Type** (`delivery_note_type`, `select_one`, required): Select the type of delivery note, such as Standard, Urgent, or Critical.
* **Status** (`delivery_note_status`, `select_one`, required): Choose the status of the delivery note, such as Active or Inactive.
* **Priority** (`delivery_note_priority`, `select_one`, required): Select the priority level of the delivery note, such as Low, Medium, or High.
* **Category** (`delivery_note_category`, `select_one`, required): Select the category of the delivery note, such as General or Financial.
* **Customer** (`customer_filter`, `select_one`, required): Choose the customer related to the delivery note.
* **Order Number** (`order_number`, `text`, required): Enter the order number of the delivery note.
* **Shipment Status** (`shipment_status`, `select_one`, required): Select the shipment status of the delivery note, such as Delivered or Not Delivered.
* **Shipment Date** (`shipment_date`, `date`, required): Enter the date of the shipment.
* **Shipment Time** (`shipment_time`, `time`, required): Enter the time of the shipment.
* **Delivery Address** (`delivery_address`, `text`, required): Enter the delivery address of the delivery note.
* **Delivery Phone** (`delivery_phone`, `text`, required): Enter the delivery phone number of the delivery note.
* **Delivery Email** (`delivery_email`, `text`, required): Enter the delivery email address of the delivery note.
* **Delivery Notes** (`delivery_notes`, `text`, required): Enter any additional notes related to the delivery note.
* **Delivery Note** (`delivery_note_note`, `text`, required): Enter the delivery note text.
* **Delivery Note Comment** (`delivery_note_comment`, `text`, required): Enter any comments related to the delivery note.
* **Attachments** (`delivery_note_attachments`, `text`, required): Upload any attachments related to the delivery note.
* **Tags** (`delivery_note_tags`, `text`, required): Add tags to the delivery note for easy search and filtering.
* **Created By** (`delivery_note_created_by`, `text`, required): Enter the name of the user who created the delivery note.
* **Updated By** (`delivery_note_updated_by`, `text`, required): Enter the name of the user who last updated the delivery note.
* **Created At** (`delivery_note_created_at`, `date`, required): Enter the date and time when the delivery note was created.
* **Updated At** (`delivery_note_updated_at`, `date`, required): Enter the date and time when the delivery note was last updated.
* **Created By User** (`delivery_note_created_by_user`, `text`, required): Enter the name of the user who created the delivery note.
* **Updated By User** (`delivery_note_updated_by_user`, `text`, required): Enter the name of the user who last updated the delivery note.
* **Assigned To** (`delivery_note_assigned_to`, `select_one`, required): Select the user assigned to handle the delivery note.
* **Due Date** (`delivery_note_due_date`, `date`, required): Enter the due date of the delivery note.
