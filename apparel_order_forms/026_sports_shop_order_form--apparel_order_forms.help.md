<thinking>Before creating this help guide, I'll make sure to break down the form into its individual components and understand its purpose. The "Sports Shop Order Form" is a form designed for customers to place orders for sports-related merchandise. The form is used to collect information about the customer, their order details, and payment information. This form is likely used for online sales, and the fields indicate that the form is used for both order processing and customer management. I will now create a comprehensive help guide for this form.</thinking>

# Sports Shop Order Form - Help Guide
## Purpose
This form is used to process sports-related orders from customers. It collects information about the customer, order details, and payment information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the "First name" field.
2. Enter your last name in the "Last name" field.
3. Enter your email address in the "Email" field.
4. Enter your phone number in the "Phone" field.
5. Enter your address in the "Address" field.
6. Select the quantity of items you wish to purchase in the "Quantity" field.
7. Select your preferred payment gateway from the "Payment Gateway" field. Options include PayPal, Stripe, and Square.
8. Select the items you wish to purchase from the "Items" field. Options include Jersey, T-shirt, and Hat.
9. Enter the date of your order (optional).
10. Enter the time of your order (optional).
11. Enter any notes or comments about your order in the "Team", "Merchandise", "Message", and "Note" fields.
12. Set the total price of your order in the "Total Price" field.
13. Select your payment method from the "Payment Method" field. Options include Credit Card, PayPal, and Cash.
14. Set the status of your order as "Pending", "Delivered", or "Cancelled" in the "Order Status" field.
15. Enter any customer message if you have one in the "Customer Message" field.
16. Enter your customer ID in the "Customer ID" field.
17. Enter your shop ID in the "Shop ID" field.
18. Enter your shop name in the "Shop Name" field.
19. Enter your shop URL in the "Shop URL" field.
20. Enter your shop phone number in the "Shop Phone" field.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, optional): Enter your first name.
* **Last Name** (`last_name`, text, optional): Enter your last name.
* **Email** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Address** (`address`, note, optional): Enter your address.
* **Quantity** (`quantity`, number, optional): Select the quantity of items you wish to purchase.
* **Payment Gateway** (`payment_gateway`, select_one, true): Select your preferred payment gateway. Options include PayPal, Stripe, and Square.
* **Items** (`items`, select_multiple, true): Select the items you wish to purchase. Options include Jersey, T-shirt, and Hat.
* **Date** (`date`, date, optional): Enter the date of your order.
* **Time** (`time`, time, optional): Enter the time of your order.
* **Team** (`team`, text, optional): Enter any notes or comments about your order.
* **Merchandise** (`merchandise`, text, optional): Enter any notes or comments about your order.
* **Message** (`message`, text, optional): Enter any customer message if you have one.
* **Note** (`note`, note, optional): Enter any notes or comments about your order.
* **Total Price** (`total_price`, number, optional): Set the total price of your order.
* **Payment Status** (`payment_status`, text, optional): Select your payment status as "Pending", "Delivered", or "Cancelled".
* **Payment Method** (`payment_method`, select_one, true): Select your payment method. Options include Credit Card, PayPal, and Cash.
* **Order Status** (`order_status`, select_one, true): Select the status of your order as "Pending", "Delivered", or "Cancelled".
* **Customer ID** (`customer_id`, text, optional): Enter your customer ID.
* **Customer Message** (`customer_message`, text, optional): Enter any customer message if you have one.
* **Shop ID** (`shop_id`, text, optional): Enter your shop ID.
* **Shop Name** (`shop_name`, text, optional): Enter your shop name.
* **Shop URL** (`shop_url`, text, optional): Enter your shop URL.
* **Shop Phone** (`shop_phone`, text, optional): Enter your shop phone number.
