# Desktop Calendar Order Form - Help Guide
## Purpose
The Desktop Calendar Order Form is used to create orders for desktop calendars. This form collects user information, product details, and order status to process and track orders efficiently.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the user's name and surname in the **User first name** and **User last name** fields.
2. Enter the customer's **email address** in the **User email** field.
3. Choose a **Date** for the order and a **Time** for the delivery.
4. Select the **Order date** for when the order will be placed.
5. Enter the **Order details**, including any relevant comments or notes.
6. Specify the **Product name** for the calendar.
7. Choose the **Quantity** of calendars needed.
8. Enter the **Price** of each calendar.
9. Select the preferred **Payment method** from the dropdown menu (e.g., PayPal, Stripe, Bank Transfer, or Cash).
10. Enter the **Order total**.
11. Choose the **Order status** by selecting one or more of the available options (Shipped, Pending, Cancelled).
12. Enter the **Shipping address** of the customer.
13. Enter the **Order date shipped** for when the order was shipped.
14. Enter the **Customer ID** number.
15. Enter a **Customer note** for the merchant.
16. Enter **Payment details** for the customer.
17. Enter the **Order date shipped** (again).
18. Enter the customer's **email address**.
19. Enter the customer's **phone number**.
20. Enter **Order notes** and **Order comments** for the merchant to reference.
21. Enter the **Order total** again.
22. Select the **Order status** for the order.

## Field-by-Field Explanation
* **User first name** (`user_first_name`, text, required): This is the first name of the customer.
* **User last name** (`user_last_name`, text, required): This is the surname of the customer.
* **User email** (`email`, email, required): This is the email address of the customer.
* **Date** (`date`, date, required): This is the date for the order.
* **Time** (`time`, time, required): This is the time for the delivery.
* **Order date** (`order_date`, date, required): This is the date when the order will be placed.
* **Order details** (`order_details`, text, required): This is where you can enter any relevant comments or notes.
* **Product name** (`product_name`, text, required): This is the name of the calendar product.
* **Quantity** (`quantity`, number, required): This is the number of calendars needed.
* **Price** (`price`, number, required): This is the price of each calendar.
* **Payment method** (`payment_method`, select_one, required): This is the preferred payment method for the order (PayPal, Stripe, Bank Transfer, or Cash).
* **Order total** (`order_total`, number, required): This is the total order amount.
* **Order status** (`order_status`, select_multiple, required): This is the status of the order (Shipped, Pending, Cancelled).
* **Shipping address** (`shipping_address`, text, required): This is the shipping address of the customer.
* **Order date shipped** (`order_date_shippped`, date, required): This is when the order was shipped.
* **Customer ID** (`customer_id`, text, required): This is the ID number of the customer.
* **Customer note** (`customer_note`, text, required): This is a note for the customer.
* **Payment details** (`payment_details`, text, required): This is payment details for the customer.
* **Order date shipped** (`order_date_shippped`, date, required): This is when the order was shipped again.
* **Customer email** (`customer_email`, email, required): This is the email address of the customer.
* **Customer phone** (`customer_phone`, text, required): This is the phone number of the customer.
* **Order notes** (`order_notes`, text, required): This is notes about the order.
* **Order comments** (`order_comments`, text, required): This is comments about the order.
* **Order total2** (`order_total2`, number, required): This is the order total amount again.
* **Order status2** (`order_status2`, select_multiple, required): This is the status of the order again.
