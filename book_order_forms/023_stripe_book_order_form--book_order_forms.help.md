# Stripe Book Order Form - Help Guide
## Purpose
The Stripe Book Order Form is a tool used for ordering books in a specific category. This form helps customers provide information about themselves and their order details, making it easier for the book store staff to process and fulfill the orders. It is essential to complete this form accurately to avoid any discrepancies and ensure smooth order fulfillment.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your **First Name** in the "First Name" field. This field is where you can enter your first name.
2. Enter your **Last Name** in the "Last Name" field. This field is where you can enter your last name.
3. Enter your **Email** in the "Email" field. This field is where you can enter your email address.
4. Enter your **Phone** in the "Phone" field. This field is where you can enter your phone number.
5. Enter your **Stripe ID** in the "Stripe ID" field. This field is where you can enter your Stripe ID.
6. Enter your **Address** in the "Address" field. This field is where you can enter your address.
7. Enter a brief description of your **Order Item Description** in the "Order Item Description" field. This field is where you can enter a description of the book you are ordering.
8. Enter the **Order Item Price** of the book in the "Order Item Price" field. This field is where you can enter the price of the book.
9. Enter the **Quantity** of the book you are ordering in the "Quantity" field. This field is where you can enter the number of books you are ordering.
10. Select the **Order Item Status** in the "Order Item Status" field. This field has three options: "pending", "shipped", "cancelled", and "refunded". Choose the status that best describes the current state of your order.
11. Enter the **Order Total** in the "Order Total" field. This field is where you can enter the total price of the order.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required/optional): Enter your first name.
* **Last Name** (`last_name`, text, required/optional): Enter your last name.
* **Email** (`email`, email, required/optional): Enter your email address.
* **Phone** (`phone`, text, required/optional): Enter your phone number.
* **Stripe ID** (`stripe_id`, text, required/optional): Enter your Stripe ID.
* **Address** (`address`, text, required/optional): Enter your address.
* **Order Item Description** (`order_item_description`, text, required/optional): Enter a description of the book you are ordering.
* **Order Item Price** (`order_item_price`, number, required/optional): Enter the price of the book you are ordering.
* **Quantity** (`quantity`, number, required/optional): Enter the number of books you are ordering.
* **Order Item Status** (`order_item_status`, select_one, required/optional): Choose the status of your order from the options: "pending", "shipped", "cancelled", and "refunded".
* **Order Total** (`order_total`, number, required/optional): Enter the total price of the order.
