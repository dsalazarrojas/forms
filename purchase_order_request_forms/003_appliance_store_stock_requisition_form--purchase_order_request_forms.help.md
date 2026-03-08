# Appliance Store Stock Requisition Form - Help Guide
## Purpose
This guide will walk you through the Appliance Store Stock Requisition Form, which is used to submit requests for stock replenishment to facilitate internal inventory management.

## How To Complete This Form

1. Enter a unique internal Requisition ID to identify your request.
2. Provide your name and department to indicate who is requesting the stock and for which department.
3. Select the department that you are submitting the request for.
4. Enter a detailed description of the item you are requesting, including model, size, or SKU.
5. Specify the whole quantity of items you need.
6. Set your priority level for the request (Low, Medium, or High).
7. If required, select a date when the items are needed.
8. Track the status of your request with internal approval tracking.
9. (Optional) Enter the name of the manager who approved or denied your request.
10. If necessary, add any additional notes for the request.

## Field-by-Field Explanation

* **Request ID** (`request_id`, text, required): A unique internal Requisition number to identify your request.
* **Requestor name** (`requestor_name`, text, required): Your name, indicating who is requesting the stock.
* **Department** (`department`, select_one, required): Select the department that is requesting the stock (Sales, Service, Warehouse, or Retail).
* **Item description** (`item_description`, text, required): Enter a detailed description of the item you are requesting, including model, size, or SKU.
* **Quantity requested** (`quantity_requested`, number, required): Enter the whole number of items you need.
* **Priority** (`priority`, select_one, required): Set your priority level for the request (Low, Medium, or High).
* **Needed by date** (`needed_by_date`, date, optional): If required, select a date when the items are needed.
* **Approval status** (`approval_status`, select_one, required): Track the internal approval status of your request (Pending, Approved, Denied).
* **Approver name** (`approver_name`, text, optional): Enter the name of the manager who approved or denied your request.
* **Additional notes** (`additional_notes`, text, optional): Add any additional relevant details for the request.

## Tips
* Please ensure you have the necessary authorization to submit a requisition.
* If you have any questions or need further assistance, contact your department manager or the inventory team.
* Before submitting, check for duplicate requests from your department to prevent unnecessary submissions.
