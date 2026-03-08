# diamond_jewelry_order_form - Help Guide
## Purpose
The diamond_jewelry_order_form is used to collect information from customers who want to place an order for diamond jewelry.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name in the "name" field.
2. Enter a valid email address in the "email" field. This will help us contact you with updates and confirmations.
3. Enter your phone number in the "phone" field. This will allow our customer support team to contact you with any questions or concerns.
4. Describe your order in the "order-description" field. This will help us process your order efficiently.
5. (Optional) Enter the total amount of your order in the "order-total" field, if applicable.
6. (Optional) Select the status of your order from the dropdown options in the "order-status" field, if you have already received an update on the status of your order.

## Field-by-Field Explanation
* **Name** (`customer_name`, text, required): This field is where you'll enter your name as it should be printed on the order and associated communication.
* **Email** (`customer_email`, email, true): This field requires a valid email address, where we'll send order updates and confirmations.
* **Phone** (`customer_phone`, text, true): This is your contact phone number, in case we need to call you for any reason.
* **Order Description** (`order_description`, text, false): Describe the specific diamond jewelry item you'd like to order. This will help us process your order more efficiently.
* **Order Total** (`order_total`, number, false): Enter the total amount of your order, if applicable.
* **Order Status** (`order_status`, select_one, false): Select the current status of your order from the provided options: "pending", "shipped", "delivered", or "cancelled".
