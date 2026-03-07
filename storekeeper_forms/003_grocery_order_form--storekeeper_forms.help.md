<thinking>
A form that captures information about grocery orders from customers, used by storekeepers to manage orders and track customer deliveries. This form likely serves as a central repository for order data, making it easy to access and analyze customer orders. 

To ensure this form is used correctly and accurately, it's essential to understand what each field represents and what information is being requested from the customer. To complete this form, follow these steps:

- **Customer Name** (customer_name, text, Required): Enter the name of the customer.
- **Customer Email** (customer_email, email, Required): Enter the email address of the customer.
- **Order Items** (order_items, text, Required): List the items ordered by the customer, separated by commas.
- **Order Date** (order_date, date, Required): Enter the date the order was placed.
- **Payment Method** (payment_method, select_one, Required): Select the method used for payment, either 'cash' or 'credit card'.
- **Order Amount** (order_amount, number, Required): Enter the total amount of the order.
- **Delivery Status** (delivery_status, select_multiple, Required): Select the current status of the delivery, which can be 'in progress', 'delivered', or 'cancelled'.
- **Delivery Note** (delivery_note, text, Optional): Enter any additional notes about the delivery process, if applicable.

</thinking>

# Grocery Order Form - Help Guide
## Purpose

The Grocery Order Form is a central tool used by storekeepers to capture and manage customer orders. This form ensures that all order information is collected, stored, and referenced for future reference.

## How To Complete This Form

To complete this form accurately, ensure you provide the following information for each field:

*   **Customer Name**: Enter the customer's full name to ensure accurate identification.
*   **Customer Email**: Enter the customer's email address to enable easy communication and order tracking.
*   **Order Items**: List all items ordered by the customer, separated by commas to help with order tracking and inventory management.
*   **Order Date**: Enter the date the order was placed to track order history.
*   **Payment Method**: Choose the payment method used for the order, which can be 'cash' or 'credit card' for simplicity.
*   **Order Amount**: Enter the total amount of the order to track financial transactions.
*   **Delivery Status**: Select the current status of the delivery to provide transparency and accountability.
*   **Delivery Note** (Optional): Add any additional comments about the delivery process, if necessary.

## Field-by-Field Explanation

- **Customer Name** (`customer_name`, text, Required): Enter the customer's full name for proper identification.
  - This field is required to help storekeepers keep track of customer identities.
- **Customer Email** (`customer_email`, email, Required): Enter the customer's email address for easy communication and order tracking.
  - This field ensures that storekeepers can reach out to customers for updates and notifications.
- **Order Items** (`order_items`, text, Required): List all items ordered by the customer, separated by commas.
  - This field helps storekeepers keep track of ordered items and their quantities.
- **Order Date** (`order_date`, date, Required): Enter the date the order was placed to track order history.
  - This field helps storekeepers track the timeline of orders and identify patterns.
- **Payment Method** (`payment_method`, select_one, Required): Select the payment method used for the order, which can be 'cash' or 'credit card' for simplicity.
  - This field helps storekeepers record payment methods and track financial transactions.
- **Order Amount** (`order_amount`, number, Required): Enter the total amount of the order to track financial transactions.
  - This field ensures accurate financial record-keeping.
- **Delivery Status** (`delivery_status`, select_multiple, Required): Select the current status of the delivery, which can be 'in progress', 'delivered', or 'cancelled'.
  - This field keeps storekeepers informed about the status of the delivery process.
- **Delivery Note** (`delivery_note`, text, Optional): Add any additional comments about the delivery process, if necessary.
  - This field allows storekeepers to record any special instructions or notes about the delivery.
