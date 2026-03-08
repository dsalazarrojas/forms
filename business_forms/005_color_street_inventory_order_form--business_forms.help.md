<thinking>... 

This form is designed to collect information for the Color Street Inventory Order Form. The form is meant to be used by stylists to order inventory products. The purpose of the form is to provide the necessary details for the order, including the stylist's ID, shipping information, and payment method. 

The form is divided into two sections: "Inventory Order Selection" and "Shipping and Payment". The first section is used to select the number of different types of sets, while the second section is used to choose the shipping method and payment method. 

The form is required to be completed for the order to be processed. The "Stylist ID Number" and "Email for Order Confirmation" fields are required for identification and order confirmation purposes. 

... </thinking>

# Color Street Inventory Order Form - Help Guide
## Purpose
The Color Street Inventory Order Form is a form used by stylists to order inventory products. It is used to provide all necessary details for the order, including stylist information and shipping and payment methods.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your "Stylist ID Number" in the first field.
2. Enter your "Recipient Name" in the "Shipping Name" field.
3. Enter your "Shipping Address" in the "Shipping Address" field.
4. In the "Inventory Order Selection" section, select the number of sets you would like to order for each type (solid color, glitter, design/arts, and holiday/specialty).
5. In the "Shipping and Payment" section, select your preferred shipping method and payment method.
6. Enter your email address in the "Email for Order Confirmation" field.

## Field-by-Field Explanation
### Stylist ID Number (Page 1)
* **Stylist ID Number** (`stylist_id`, `text`, required): Enter your unique stylist ID number to identify yourself as a stylist.

### Recipient Name (Page 2)
* **Recipient Name** (`shipping_name`, `text`, required): Enter the full name of the person you are ordering for.

### Shipping Address (Page 3)
* **Shipping Address** (`shipping_address`, `text`, required): Enter the shipping address in the format of Street, City, State, ZIP.

### Inventory Order Selection (Page 4)
* **-- Inventory Order Selection --** (`section_order_items`, `note`, required): Select the number of each type of set you would like to order.

### Number of Solid Color Sets (Page 5)
* **Number of Solid Color Sets** (`solid_sets_count`, `number`, required): Select the number of solid color sets you would like to order.

### Number of Glitter Sets (Page 6)
* **Number of Glitter Sets** (`glitter_sets_count`, `number`, required): Select the number of glitter sets you would like to order.

### Number of Design/Art Sets (Page 7)
* **Number of Design/Art Sets** (`design_sets_count`, `number`, required): Select the number of design/arts sets you would like to order.

### Number of Holiday/Specialty Sets (Page 8)
* **Number of Holiday/Specialty Sets** (`holiday_sets_count`, `number`, required): Select the number of holiday/specialty sets you would like to order.

### Request Sample Packs (Twosies)? (Page 9)
* **Request Sample Packs (Twosies)?** (`sample_packs_request`, `select_one`, required): Select the number of sample packs you would like to order. Options: None, 10 Pack, 25 Pack, 50 Pack.

### Shipping and Payment (Page 10)
* **-- Shipping and Payment --** (`section_shipping_options`, `note`, required): Choose the shipping and payment method for your order.

### Preferred Shipping Method (Page 11)
* **Preferred Shipping Method** (`shipping_method`, `select_one`, required): Select your preferred shipping method. Options: Standard (3-5 business days), Priority (2-3 business days), Overnight.

### Payment Method for Shipping/Restock (Page 12)
* **Payment Method for Shipping/Restock** (`payment_method`, `select_one`, required): Select your payment method. Options: Stylist Credit, Credit/Debit Card, PayPal, Venmo.

### Special Shipping Instructions (Page 13)
* **Special Shipping Instructions** (`special_instructions`, `text`, optional): Enter any special shipping instructions you may have.

### Email for Order Confirmation (Page 14)
* **Email for Order Confirmation** (`confirmation_email`, `email`, required): Enter your email address to receive order confirmation.

Tips:
* Make sure to enter your "Stylist ID Number" correctly, as it is required for order processing.
* Ensure that your shipping address is accurate and complete.
* Select the correct shipping and payment methods for your order.
* Enter your email address correctly to receive order confirmation.
* If you have any special shipping instructions, please enter them in the "Special Shipping Instructions" field.
