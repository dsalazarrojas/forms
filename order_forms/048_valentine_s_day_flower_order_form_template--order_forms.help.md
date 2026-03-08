# valentines_day_flower_order_form_template - Help Guide
## Purpose
This form is designed to collect order details for Valentine's Day flower orders, allowing customers to provide delivery information, select the type of order, and add any special instructions or gift messages.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the delivery details, including the delivery address and delivery time.
2. Select the delivery date for the order.
3. Choose the type of order (flower bouquet, plant, or gift basket).
4. Enter the delivery contact information.
5. Add a gift message (if applicable).
6. Enter any special instructions for the order.
7. Select the order status (pending, delivered, or cancelled).

## Field-by-Field Explanation
* **Delivery Details** (`delivery_details`, text, not required): Enter the delivery address where the order will be received.
* **Delivery Address** (`delivery_address`, text, not required): Enter the address to which the order will be delivered.
* **Delivery Time** (`delivery_time`, time, not required): Enter the time of day when the order should be delivered.
* **Delivery Date** (`delivery_date`, date, not required): Enter the date when the order should be delivered.
* **Order Type** (`order_type`, select_one, not required): Choose from flower bouquet, plant, or gift basket.
* **Delivery Contact** (`delivery_contact`, text, not required): Enter the name or contact information of the person receiving the order.
* **Gift Message** (`gift_message`, text, not required): Enter a message to be included with the order (if applicable).
* **Special Instructions** (`special_instructions`, note, not required): Enter any additional information or special requests for the order.
* **Order Status** (`order_status`, select_one, not required): Choose from pending, delivered, or cancelled to track the order's status.
