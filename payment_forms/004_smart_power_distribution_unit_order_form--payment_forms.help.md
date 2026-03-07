<thinking>
The Smart Power Distribution Unit Order Form is used for customers to place orders for Smart Power Distribution Units (SPDUs). The form is designed to gather information from customers, including their contact details, order details, and payment information. 

This form appears to be a general-purpose order form, allowing customers to provide their contact information, details about the order, and specify the type and quantity of units they want to purchase. The form also includes options for selecting the payment method and order status. It does not seem to have any specific validation rules or restrictions, suggesting that it is meant for general information gathering and order management. 

However, the field "form_id" and "customer_id" are both present, which might suggest that this form is also used for internal purposes, such as order tracking or system identification.

Please note that some fields like "unit_price", "order_date" and "order_status" do not seem to be related to each other. 
</thinking>

# Smart Power Distribution Unit Order Form - Help Guide
## Purpose
This form is used to place orders for Smart Power Distribution Units.

## How To Complete This Form
To complete this form, follow these steps:

* Enter your name in the "customer_name" field.
* Enter your email address in the "customer_email" field.
* Enter your phone number in the "customer_phone" field.
* Enter your address in the "customer_address" field.
* Enter the details about the order in the "order_details" field.
* Select the date of the order from the calendar provided (or type the date in the "order_date" field).
* Choose the type of unit you want to purchase from the options provided (e.g., "Cash", "Credit", "PayPal").
* Choose the quantity of units you want to purchase.
* Enter the cost of the unit.
* If applicable, choose whether a specific tool has been assigned to the order.
* You can add any additional notes to the order in the "customer_note" field.
* Select the payment method you want to use (e.g., "Cash", "Credit", "PayPal").
* Select the status of the order (e.g., "Active", "Inactive").

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required: false): This is the name of the customer.
* **Customer Email** (`customer_email`, email, required: false): This is the email address of the customer.
* **Customer Phone** (`customer_phone`, text, required: false): This is the phone number of the customer.
* **Customer Address** (`customer_address`, text, required: false): This is the address of the customer.
* **Order Details** (`order_details`, text, required: false): This is a description of the order.
* **Order Date** (`order_date`, date, required: false): This is the date of the order.
* **Unit Type** (`unit_type`, select_one, required: false): This is the type of unit being purchased (e.g., "Cash", "Credit", "PayPal").
* **Unit Quantity** (`unit_quantity`, number, required: false): This is the quantity of units being purchased.
* **Unit Cost** (`unit_cost`, number, required: false): This is the cost of the unit.
* **Customer Note** (`customer_note`, text, required: false): This is any additional note from the customer.
* **Assigned Tool** (`assigned_tool`, select_one, required: false): This is whether a specific tool has been assigned to the order.
* **Form ID** (`form_id`, text, required: false): This is a unique ID for the form.
* **Customer ID** (`customer_id`, text, required: false): This is a unique ID for the customer.
* **Order Status** (`order_status`, select_one, required: false): This is the status of the order (e.g., "Active", "Inactive").
* **Payment Method** (`payment_method`, select_one, required: false): This is the payment method being used (e.g., "Cash", "Credit", "PayPal").
* **Order Time** (`order_date`, time, required: false): This is the time of the order.
* **Unit Price** (`unit_price`, number, required: false): This is the price of the unit.
