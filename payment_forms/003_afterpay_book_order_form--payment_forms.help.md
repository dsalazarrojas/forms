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
