<thinking>

To create this form, I'll consider the context of "product_order_forms" and "qr_marketing_display_order_form" to provide an accurate and user-friendly help guide.

</thinking>

# qr_marketing_display_order_form - Help Guide
## Purpose
This form is designed to display marketing order information, allowing users to select products, specify delivery preferences, and provide customer details. It's a crucial tool for managing and tracking marketing orders.

## How To Complete This Form
1. Fill out the form completely, including all relevant fields.
2. Select the products you're interested in purchasing using the "product_selections" field.
3. Choose your delivery preferences from the available options in the "delivery_preferences" field.
4. Enter any additional notes or comments in the "notes" field.
5. Enter your email address in the "email" field.
6. Enter your phone number in the "phone" field.
7. Review your order details before submitting the form.

## Field-by-Field Explanation

* **Customer Details (customer_details)** (`customer_details`, text, optional): Please enter your customer details, such as name and address.
* **Product Selections (product_selections)** (`product_selections`, select_multiple, optional): Select the products you're interested in purchasing from the list of options. Multiple selections are allowed.
* **Artwork Details (artwork_details)** (`artwork_details`, text, optional): Enter any additional artwork details or information about your products.
* **Delivery Preferences (delivery_preferences)** (`delivery_preferences`, select_one, optional): Choose your delivery preference from the available options. This will help us process your order efficiently.
* **Notes (notes)** (`notes`, note, optional): Add any additional comments or notes about your order.
* **Email (email)** (`email`, email, optional): Enter your email address, which will be used for order confirmation and updates.
* **Phone (phone)** (`phone`, text, optional): Enter your phone number, which can be used for further questions or updates.
* **Created At (created_at)** (`created_at`, date, optional): This field is automatically populated with the date and time of submission.
