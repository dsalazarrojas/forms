<thinking>...</thinking>

# Service Order Status Check Form - Help Guide
## Purpose
This form is used to check the status of a service order. It allows users to select the status of their service order, specify the order details, and optionally add a message for further clarification.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the status of your service order from the available options. This will help us understand your current position in the order process.
2. Enter the order number, which is the unique identifier for your service order.
3. Choose the type of order you have placed.
4. Provide your contact information, including your name, phone number, and email address.
5. Select the team assigned to handle your order.
6. If necessary, add a message with any additional information about your order.
7. Lastly, select the service type of your order and set the order date and time.

## Field-by-Field Explanation

* **Service Status** (`service_order_status`, select_one, required): Select one of the available options to specify the current status of your service order. This helps us quickly understand where you are in the process.
* **Order Number** (`service_order_number`, text, required): Enter the unique identifier for your service order. This is used to track and locate your order in our system.
* **Order Type** (`service_order_type`, select_one, required): Choose the type of order you have placed, which helps us understand your specific needs.
* **Customer Name** (`customer_name`, text, required): Please enter your name as the customer associated with this order.
* **Contact Phone** (`contact_phone`, text, required): Enter your phone number so we can contact you about your order.
* **Contact Email** (`contact_email`, email, required): Enter your email address so we can keep you updated on your order status.
* **Team Assignment** (`team_assignment`, select_one, required): Select the team that has been assigned to handle your order.
* **Message** (`message`, note, required): If you have any additional information or comments about your order, please add it here.
* **Service Order Status** (`service_order_status`, select_one, required): Select the current status of your service order from the available options.
* **Order Date** (`order_date`, date, required): Set the date of your service order.
* **Order Time** (`order_time`, time, required): Set the time of your service order.
* **Service Type** (`service_type`, select_one, required): Select the service type of your order, which helps us understand what you need from us.
