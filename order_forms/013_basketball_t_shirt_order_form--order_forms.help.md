# Basketball T Shirt Order Form - Help Guide
## Purpose
The Basketball T Shirt Order Form is designed for customers to place orders for customized team shirts. This form helps customers select their preferred team apparel, including T-Shirt style, color, size, and quantity. It also allows customers to choose their preferred payment method and shipping option.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in the required fields:
    *   Customer Name
    *   Email Address
    *   Phone Number
    *   T-Shirt Style
    *   Shirt Color
    *   Shirt Size
    *   Quantity
    *   Would you like to add a custom name and number to the back?
    *   Payment Method
    *   How would you like to receive your order?
    *   Date of Order
2.  For the "Would you like to add a custom name and number to the back?" field, select "Yes" if you want to add a custom name and number on the back of the shirt, or "No" if you do not.
3.  If you selected "Yes" for the custom name and number field, fill in the Custom Name and Custom Number fields accordingly.

## Field-by-Field Explanation

*   **Customer Name** (`customer_full_name`, text, required): Enter your full name as it appears on your official documents.
*   **Email Address** (`contact_email`, email, required): Enter your email address for order confirmation.
*   **Phone Number** (`contact_phone`, text, required): Enter your phone number for order confirmation.
*   **T-Shirt Style** (`shirt_style`, select_one, required): Choose your preferred T-Shirt style:
    *   Short Sleeve Cotton
    *   Long Sleeve Cotton
    *   Performance Dri-Fit
    *   V-Neck
*   **Shirt Color** (`shirt_color`, select_one, required): Choose your preferred T-Shirt color:
    *   Team White
    *   Team Black
    *   Team Blue
    *   Team Gray
*   **Shirt Size** (`shirt_size`, select_one, required): Choose your preferred T-Shirt size:
    *   Youth Small
    *   Youth Medium
    *   Youth Large
    *   Adult Small
    *   Adult Medium
    *   Adult Large
    *   Adult XL
    *   Adult XXL
*   **Quantity** (`quantity`, number, required): Enter the quantity of shirts you want to order.
*   **Would you like to add a custom name and number to the back?** (`personalization_check`, select_one, required): Select "Yes" to add a custom name and number on the back of the shirt, or "No" if you do not.
*   **Custom Name for Back** (`custom_name`, text, optional): Enter the name you want to add on the back of the shirt (only if you selected "Yes" for the custom name and number field).
*   **Custom Number for Back** (`custom_number`, number, optional): Enter the number you want to add on the back of the shirt (only if you selected "Yes" for the custom name and number field).
*   **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method:
    *   Credit/Debit Card
    *   PayPal
    *   Cash on Collection
*   **How would you like to receive your order?** (`delivery_method`, select_one, required): Choose your preferred shipping option:
    *   Pickup at Practice
    *   Ship to Home ($5.00 fee)
*   **Shipping Address** (`shipping_address`, text, optional): Enter your shipping address (only if you selected "Ship to Home" for the shipping option).
*   **Date of Order** (`order_date`, date, required): Enter the date of the order.

## Tips
*   Make sure to fill in all required fields to complete the form successfully.
*   If you select "Yes" for the custom name and number field, fill in the Custom Name and Custom Number fields accordingly.
*   If you select "Ship to Home" for the shipping option, fill in your shipping address.
