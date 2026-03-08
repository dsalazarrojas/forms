<thinking>

This form is designed to collect information from customers for the purchase of books through the Afterpay payment method. It is intended to be used to place orders for books, allowing customers to select their preferred payment method and agree to the terms and conditions of the transaction.

The form is composed of the following fields:

*   Customer Full Name: This field is required and asks the customer to enter their full name as it appears on their identification.
*   Email Address: This field is required and is for the purpose of order confirmation.
*   Phone Number: This field is required and is for delivery updates.
*   Shipping Address: This field is required and is for the address where the books should be delivered to.
*   Billing Address (if different from Shipping): If the billing address is different from the shipping address, this field is required.
*   -- Book Selection --: This is a note field that serves as a separator between the customer information and book selection sections.
*   Book Title: This field is required and asks the customer to enter the title of the book they wish to order.
*   Author Name: This field is required and asks the customer to enter the name of the book's author.
*   ISBN Number: This field is optional and is for the customer to enter the ISBN number of the book if known.
*   Quantity: This field is required and asks the customer to select the number of copies they wish to order.
*   Book Condition Preference: This field is required and asks the customer to select their preferred condition of the book.
*   Special Requests: This field is optional and is for any special instructions or requests the customer may have for their order.
*   Payment Method: This field is required and asks the customer to select Afterpay as their payment method.
*   Terms Agreement: This field is required and asks the customer to agree to the Afterpay terms and conditions.

</thinking>

# Afterpay Book Order Form - Help Guide

## Purpose
This form is designed to collect information from customers for the purchase of books through the Afterpay payment method.

## How To Complete This Form

To complete this form, please follow the steps below:

1.  Enter your full name as it appears on your identification.
2.  Enter your email address for order confirmation.
3.  Enter your phone number for delivery updates.
4.  Enter the complete address where the books should be delivered.
5.  Check if the billing address is the same as the shipping address. If it is not the same, enter the billing address.
6.  Enter the title of the book you wish to order.
7.  Enter the name of the book's author.
8.  (Optional) Enter the ISBN number of the book if known.
9.  Select the number of copies you wish to order.
10. Select your preferred condition of the book.
11. (Optional) Enter any special instructions or requests for your order.
12. Select Afterpay as your payment method.
13. Agree to the Afterpay terms and conditions.

## Field-by-Field Explanation

*   **Customer Full Name** (`customer_full_name`, `text`, required): Enter your full name as it appears on your identification.
*   **Email Address** (`customer_email`, `email`, required): Enter your email address for order confirmation.
*   **Phone Number** (`customer_phone`, `text`, required): Enter your phone number for delivery updates.
*   **Shipping Address** (`shipping_address`, `text`, required): Enter the complete address where books should be delivered.
*   **Billing Address (if different from Shipping)** (`billing_address`, `text`, required): If the billing address is different from the shipping address, enter the billing address.
*   **-- Book Selection --** (`book_selection_header`, `note`, required): This is a note field that serves as a separator between the customer information and book selection sections.
*   **Book Title** (`book_title`, `text`, required): Enter the title of the book you wish to order.
*   **Author Name** (`author_name`, `text`, required): Enter the name of the book's author.
*   **ISBN Number** (`isbn_number`, `text`, optional): Enter the ISBN number of the book if known.
*   **Quantity** (`book_quantity`, `number`, required): Select the number of copies you wish to order.
*   **Book Condition Preference** (`book_condition_preference`, `select_one`, required): Select your preferred condition of the book.
*   **Special Requests** (`special_requests`, `text`, optional): Enter any special instructions or requests for your order.
*   **Payment Method** (`payment_method`, `select_one`, required): Select Afterpay as your payment method.
*   **Terms Agreement** (`terms_agreement`, `select_one`, required): Agree to the Afterpay terms and conditions.
