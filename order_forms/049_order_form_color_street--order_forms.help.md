# Order Form Color Street - Help Guide
## Purpose
The Order Form Color Street is designed to allow customers to place orders for custom color-street related products or services. It gathers information required to process and fulfill the order.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Select the color street you would like to order. This can be found in the "Order Items" field.
2.  Provide your date and time for the order.
3.  Enter your Customer Name, Email, and Phone number for contact information.
4.  Select the order items you would like to include in your order.
5.  Optionally, add any additional notes about your order.
6.  Choose the tool that will be assigned to fulfill your order.

## Field-by-Field Explanation
* **Color Street** (`color_street`, text, required): Enter the name of the color street you would like to order.
* **Date** (`date`, date, required): Select the date and time you would like to receive your order.
* **Order ID** (`order_id`, number, required): Enter a unique ID for your order (this is not a required field but is useful for order tracking).
* **Customer Name** (`customer_name`, text, required): Enter your name as it appears on your order.
* **Email** (`email`, email, required): Enter your email address so we can contact you about your order.
* **Phone** (`phone`, text, required): Enter your phone number for any additional communication about your order.
* **Order Items** (`order_items`, select_multiple, required): Select the items you would like to include in your order from the list provided.
* **Notes** (`notes`, note, optional): Enter any additional information about your order.
* **Assigned Tool** (`assigned_tool`, select_one, required): Choose the tool assigned to fulfill your order.

## Tips
* Double-check your selections before submitting the form to ensure you are ordering the correct color street and items.
* Make sure to enter a unique Order ID if you would like to track your order easily.
* Use the notes field to add any additional details about your order that might help with processing and fulfillment.
