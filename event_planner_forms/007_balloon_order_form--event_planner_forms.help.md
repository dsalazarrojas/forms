<thinking>

The form is intended to capture customer information and preferences for balloon orders, which will be used to create a customized balloon package. The form will be used for both personal and business events, such as parties, events, and corporate events. The form fields are designed to gather necessary information from the customer, including contact details, event details, balloon preferences, and payment information.

Form fields are designed to be self-explanatory and provide clear instructions for the customer to fill out the form correctly.

</thinking>

# Balloon Order Form - Help Guide
## Purpose
The Balloon Order Form is designed to capture the necessary information required to create a customized balloon package for your event or occasion. This form will help us understand your preferences and deliver your balloons according to your needs.

## How To Complete This Form
- Ensure you have all necessary information ready, such as your name, email, phone number, and event details.
- Select the correct delivery method and address for your balloons.
- Choose your preferred balloon package and size.
- Select the balloon colors and style you want.
- If you have a promotional code, do not forget to enter it.
- Review and submit the form to confirm your order.

## Field-by-Field Explanation

### 1. Customer Full Name
* **Customer Full Name** (`customer_full_name`, text, required): Please fill in your full name as it appears on the order.
 
### 2. Email Address
* **Email Address** (`customer_email`, email, required): Enter your email address where we can contact you for order confirmation and updates.

### 3. Phone Number
* **Phone Number** (`customer_phone`, text, required): Enter your phone number for us to contact you with order updates.

### 4. Order Date
* **Order Date** (`order_date`, date, required): Enter the date you want to receive your order.

### 5. Delivery or Pickup Date
* **Delivery or Pickup Date** (`delivery_date`, date, required): Enter the date you want to receive your delivery or pickup your order.

### 6. Delivery Method
* **Delivery Method** (`delivery_method`, select_one, required): Choose how you want to receive your order: Home Delivery, Business Delivery, Event Venue Delivery, or Store Pickup.

### 7. Delivery Address
* **Delivery Address** (`delivery_address`, text, required): Enter the full address where you want your order delivered.

### 8. Balloon Package
* **Balloon Package** (`balloon_package`, select_one, required): Select a package or order a custom order.

### 9. Balloon Size
* **Balloon Size** (`balloon_size`, select_one, required): Choose your preferred balloon size: Standard (9 inch), Large (12 inch), Jumbo (16 inch), or Mixed Sizes.

### 10. Balloon Colors
* **Balloon Colors** (`balloon_colors`, select_multiple, required): Select the colors you want for your balloons.

### 11. Balloon Style
* **Balloon Style** (`balloon_style`, select_multiple, required): Choose the style of your balloons: Standard Latex, Metallic Foil, Clear with Confetti, Printed Design, Shaped Balloons, or LED Light-Up.

### 12. Custom Message
* **Custom Message** (`custom_message`, text, optional): If you want to include a custom message on your balloons, enter it here.

### 13. Ribbon Color
* **Ribbon Color** (`ribbon_color`, select_one, optional): Choose the color of the curling ribbon for your balloons.

### 14. Balloon Weights
* **Balloon Weights** (`weights_needed`, select_one, optional): If you want to add decorative weights, select "Yes, add weights".

### 15. Number of Weights
* **Number of Weights** (`weight_quantity`, number, optional): If you selected weights, enter the number you need.

### 16. Weight Style
* **Weight Style** (`weight_style`, select_one, optional): Choose the style of the weights you want: Standard Metallic, Themed Design, Custom Printed, or Clear Acrylic.

### 17. Helium Fill
* **Helium Fill** (`helium_fill`, select_one, required): Choose if you want your balloons filled with helium.

### 18. Hi-Float Treatment
* **Hi-Float Treatment** (`hi_float_treatment`, select_one, optional): If you want to extend the float time of your balloons up to 2 weeks, select "Yes, add Hi-Float".

### 19. Special Instructions
* **Special Instructions** (`special_instructions`, text, optional): Enter any special delivery notes or requirements.

### 20. Payment Method
* **Payment Method** (`payment_method`, select_one, required): Choose how you will pay for your order: Credit Card, Debit Card, Cash on Pickup, or Invoice (Business Accounts).

### 21. Promo Code
* **Promo Code** (`promo_code`, text, optional): If you have a promotional code, enter it here.

### 22. Gift Message
* **Gift Message** (`gift_message`, text, optional): If you want to include a gift message, enter it here.

### 23. Additional Order Notes
* **Additional Order Notes** (`order_notes`, text, optional): If you have any other details you want to include with your order, enter them here.
