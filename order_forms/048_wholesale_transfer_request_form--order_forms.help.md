<thinking>
This form is for requesting a wholesale transfer of products between two different warehouses. 
The form is used to submit a request to transfer products from one warehouse to another. 
The form must be completed by the user to request a transfer. 
The transfer request status and manager approval status will be updated automatically. 
The form is not meant to be used for other transfer requests or purposes. 
Please make sure to only submit this form for wholesale transfers. 
</thinking>

# Wholesale Transfer Request Form - Help Guide
## Purpose
This form is used to submit a request for a wholesale transfer of products between two different warehouses. 

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required information, including your first and last name, email, phone number, and user ID.
2. Select the warehouse locations for the transfer (both the sending and receiving warehouses).
3. Choose the order type and transfer type for the transfer.
4. Enter the shipping date and time if applicable.
5. Add any additional notes if necessary.
6. Check the manager approval box if necessary.
7. Update the transfer request status.

## Field-by-Field Explanation
- **First Name** (`wholesale_transfer_request_form`, `text`, required): Enter your first name as it appears on your official identification.
- **Last Name** (`last_name`, `text`, required): Enter your last name as it appears on your official identification.
- **Email** (`email`, `email`, required): Enter your official email address.
- **Phone Number** (`phone_number`, `text`, required): Enter your phone number.
- **Warehouse Location** (`warehouse_location`, `text`, required): Select the warehouse where the products are currently located.
- **Receiving Warehouse Location** (`receiving_warehouse_location`, `text`, required): Select the warehouse where the products will be transferred.
- **Shipping Warehouse Location** (`shipping_warehouse_location`, `text`, required): Select the warehouse where the products will be shipped from.
- **Order Type** (`order_type`, `select_one`, required): Choose whether the transfer is for a new or existing order.
- **Transfer Type** (`transfer_type`, `select_one`, required): Choose whether the transfer is a shipment or pick up.
- **Shipping Date** (`shipping_date`, `date`, required): Enter the date the shipping is scheduled to take place.
- **Shipping Time** (`shipping_time`, `time`, required): Enter the time the shipping is scheduled to take place.
- **Notes** (`notes`, `note`, required): Add any additional information regarding the transfer.
- **Manager Approval** (`manager_approval`, `select_multiple`, required): Check this box if you have manager approval.
- **Manager Approval Date** (`manager_approval_date`, `date`, required): Enter the date the manager approval took place.
- **Manager Approval Time** (`manager_approval_time`, `time`, required): Enter the time the manager approval took place.
- **Transfer Request Status** (`transfer_request_status`, `select_one`, required): Select the status of the transfer request.
- **Transfer Request Status Notes** (`transfer_request_status_notes`, `text`, required): Add any additional information regarding the transfer request status.
- **User ID** (`user_id`, `text`, required): Enter your user ID. 

Note: The manager approval fields are only required if you have checked the "Manager Approval" box.
