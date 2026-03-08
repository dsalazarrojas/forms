# Appliance Store Stock Requisition Form - Help Guide

## Purpose
This form is designed for store managers and staff to submit requests for stock replenishment of appliances. The goal is to inform the warehouse team about the necessary stock replenishment, including the quantity and urgency level of the requested items. This form will help the warehouse team to efficiently plan and manage stock, ensuring timely and accurate delivery of the requested appliances.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the required fields with the requested information.
2. Select the correct urgency level (Routine, Priority, or Urgent) to indicate the level of urgency for the stock replenishment.
3. Enter the correct category and model number for each item requested.
4. Enter the quantity requested for each item.
5. Provide additional inventory notes if necessary.
6. If applicable, enter the model number and quantity for additional items.
7. Leave any warehouse comments or approval status if necessary.
8. Finally, estimate the approximate delivery date.

## Field-by-Field Explanation

* **Requisition Information** (`requisition_info_header`, note, not required): This section is for general information about the stock requisition. 
* **Date of Requisition** (`requisition_date`, date, required): Enter the date when the stock requisition was made.
* **Store Location or Branch** (`store_location`, text, required): Enter the store location where the stock requisition is being made.
* **Requesting Manager Name** (`requesting_manager`, text, required): Enter the name of the manager requesting the stock replenishment.
* **Urgency Level** (`urgency_level`, select_one, required): Select the level of urgency for the stock replenishment:
	+ Routine - Within 5-7 days
	+ Priority - Within 2-3 days
	+ Urgent - Within 24 hours
* **-- Items Requested --** (`items_requested_header`, note, not required): This section is for listing the items requested.
* **Item 1 - Appliance Category** (`item_1_type`, select_one, required): Select the category of the first item requested.
* **Item 1 - Model Number** (`item_1_model`, text, required): Enter the model number of the first item requested.
* **Item 1 - Quantity Requested** (`item_1_quantity`, number, required): Enter the quantity of the first item requested.
* **Item 2 - Model Number (Optional)** (`item_2_model`, text, optional): Enter the model number of the second item requested. Only required if Item 2 - Quantity Requested is filled.
* **Item 2 - Quantity Requested** (`item_2_quantity`, number, optional): Enter the quantity of the second item requested. Only required if Item 2 - Model Number (Optional) is filled.
* **Additional Inventory Notes** (`additional_stock_notes`, text, not required): Enter any specific notes or variations for the stock replenishment.
* **-- Warehouse Approval Use Only --** (`warehouse_approval_header`, note, not required): This section is for the warehouse manager's approval.
* **Approval Status** (`approval_status`, select_one, not required): Select the approval status:
	+ Approved
	+ Partially Approved
	+ Denied
	+ Pending Stock Arrival
* **Approximate Delivery Date** (`approximate_delivery_date`, date, not required): Enter the estimated date of delivery.
* **Warehouse Comments** (`warehouse_comments`, text, not required): Enter any comments from the warehouse manager.
