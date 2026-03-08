<thinking>
The purpose of this form is to provide a standardized way to record information about trade goods delivery status and details. This form should be used to track the progress of trade goods being delivered, including the delivery date, status, and any associated customer and order information. Before filling out this form, please ensure that you are using it to report on trade goods delivery that is not already documented in the system.
</thinking>

# Trade Goods Delivery Form - Help Guide
## Purpose
The Trade Goods Delivery Form is a standardized form used to record information about trade goods being delivered, including the delivery date, status, and associated customer and order information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Delivery Date** of the trade goods delivery.
2. Select the **Delivery Status** from the options: Pending, Delivered, or Cancelled.
3. Enter the **Trade Good ID**, **Customer ID**, and **Order ID** numbers if applicable.
4. Enter the **Delivery Address** where the trade goods were delivered.
5. Add any additional **Delivery Notes** if needed.
6. Enter the name of the **Contact Name** and their **Contact Phone** and **Contact Email**.
7. Enter any relevant **Trade Good Details** about the delivery.
8. Enter the **Estimated Delivery Time** in hours or days, if applicable.

## Field-by-Field Explanation
* **Delivery Date** (`delivery_date`, date, required: false): Enter the date the trade goods were delivered.
* **Delivery Status** (`delivery_status`, select_one, required: false): Select the status of the trade goods delivery from the options: Pending, Delivered, or Cancelled.
* **Trade Good ID** (`trade_good_id`, number, required: false): Enter the ID number of the trade goods being delivered.
* **Customer ID** (`customer_id`, number, required: false): Enter the ID number of the customer who received the trade goods.
* **Order ID** (`order_id`, number, required: false): Enter the ID number of the order being delivered.
* **Delivery Address** (`delivery_address`, text, required: false): Enter the address where the trade goods were delivered.
* **Delivery Notes** (`delivery_notes`, note, required: false): Enter any additional notes about the trade goods delivery.
* **Contact Name** (`contact_name`, text, required: false): Enter the name of the contact person who received the trade goods.
* **Contact Phone** (`contact_phone`, text, required: false): Enter the phone number of the contact person who received the trade goods.
* **Contact Email** (`contact_email`, email, required: false): Enter the email address of the contact person who received the trade goods.
* **Trade Good Details** (`trade_good_details`, text, required: false): Enter any additional details about the trade goods being delivered.
* **Estimated Delivery Time** (`estimated_delivery_time`, number, required: false): Enter the estimated time for the delivery in hours or days.
