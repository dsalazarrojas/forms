To create a user-facing help guide for the "scarf_pre_order_form" form, I'll analyze the provided YAML fields and create a clear and concise guide that explains the form's purpose, how to complete it, and each field's meaning.

# Scarf Pre-Order Form - Help Guide
## Purpose
The Scarf Pre-Order Form is a digital form used to collect information from customers before placing a pre-order for a scarf. This form helps the business understand the customer's order type, details, and preferences to prepare for the order and ensure accurate production.

## How To Complete This Form
To complete the form, follow these steps:
1. Select the **Order Type** (page 1): Choose the type of order you'd like to place, either "ส้รับ" or "สร".
2. Enter your **Order Details** (page 1): Type the specific details of your order, including any notes or comments.
3. Provide your **Customer Name** (page 2): Enter your name as it appears on your identification.
4. Enter your **Phone** (page 2): Input your phone number for communication purposes.
5. Enter your **Email** (page 2): Input a valid email address for correspondence.
6. Specify the **Quantity** (page 3): Enter the number of scarves you'd like to order.
7. Select your preferred **Product Style** (page 3): Choose one or more of the available styles, such as Style 1, Style 2, or Style 3.
8. Set the **Order Date** (page 4): Enter the date you'd like to receive the order.

## Field-by-Field Explanation
- **Order Type** (`order_type`, select_one, required: false): Choose the type of order you'd like to place, either "ส rall" or "สร".
- **Order Details** (`order_details`, number, required: false): Enter specific details about your order, including any notes or comments.
- **Customer Name** (`customer_name`, text, required: false): Enter your name as it appears on your identification.
- **Phone** (`phone`, text, required: false): Input your phone number for communication purposes.
- **Email** (`email`, email, required: false): Input a valid email address for correspondence.
- **Quantity** (`quantity`, number, required: false): Enter the number of scarves you'd like to order.
- **Product Style** (`product_style`, select_multiple, required: false): Choose one or more of the available styles, such as Style 1, Style 2, or Style 3.
- **Order Date** (`order_date`, date, required: false): Set the date you'd like to receive the order.
