<thinking>...</thinking>

# custom_toolkit_order_form - Help Guide

## Purpose
This form is for ordering and managing custom toolkits. It collects customer information, kit requests, payment details, and other relevant details for each order.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Provide customer information (name, address, etc.) on the "Customer Info" page.
2. Specify your kit request details on the "Kit Request" page.
3. Enter payment details (price and method) on the "Payment Details" page.
4. Choose your delivery preferences (FedEx, USPS, etc.) on the "Delivery Preferences" page.
5. Enter customer notes or any additional comments on the "Customer Notes" page.
6. Set the price and total cost of the kit on the "Kit Price" and "Total Cost" pages.
7. Select your preferred delivery method (FedEx, USPS, etc.) on the "Delivery Method" page.
8. Enter your delivery address on the "Delivery Address" page.
9. Choose your payment terms (Net 30, Payment Plan, etc.) on the "Payment Terms" page.
10. Select the status of your kit (In Progress, Shipped, etc.) on the "Kit Status" page.
11. Set the delivery date and time on the "Delivery Date" and "Delivery Time" pages.
12. Select the status of your order (New, In Progress, etc.) on the "Order Status" page.

## Field-by-Field Explanation
- **Customer Info** (`customer_info`, `text`, required/optional): Enter your name, address, and other relevant customer information.
- **Kit Request** (`kit_request`, `text`, required/optional): Specify your kit request details.
- **Payment Details** (`payment_details`, `text`, required/optional): Enter your payment details, including price and method.
- **Delivery Preferences** (`delivery_preferences`, `text`, required/optional): Choose your preferred delivery method (FedEx, USPS, etc.).
- **Customer Notes** (`customer_notes`, `text`, required/optional): Enter any additional comments or notes for the customer.
- **Kit Price** (`kit_price`, `number`, required/optional): Enter the price of the kit.
- **Total Cost** (`total_cost`, `number`, required/optional): Enter the total cost of the kit.
- **Delivery Method** (`delivery_method`, `select_one`, required/optional): Choose your preferred delivery method (FedEx, USPS, etc.).
- **Delivery Address** (`delivery_address`, `text`, required/optional): Enter your delivery address.
- **Payment Terms** (`payment_terms`, `select_multiple`, required/optional): Choose your preferred payment terms (Net 30, Payment Plan, etc.).
- **Kit Status** (`kit_status`, `select_one`, required/optional): Select the status of your kit (In Progress, Shipped, etc.).
- **Delivery Date** (`delivery_date`, `date`, required/optional): Enter the date of delivery.
- **Delivery Time** (`delivery_time`, `time`, required/optional): Enter the time of delivery.
- **Order Status** (`order_status`, `select_one`, required/optional): Select the status of your order (New, In Progress, etc.).
