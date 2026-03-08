<thinking>
The internal reasoning is to create a form for customers to submit their orders for cupcake boxes. The main purpose of this form is to collect customer information, cupcake details, shipping address, payment method, and any special instructions. The form is designed for end-users, so it should be easy to fill out and understand. The form fields are all text or select_one types, which are straightforward to fill out. The form does not require any specific knowledge about the business logic or internal processes, making it user-friendly.
</thinking>

# Cupcake Box Order Form - Help Guide
## Purpose
The Cupcake Box Order Form is a form designed for customers to submit their orders for cupcake boxes. It helps us collect necessary information to process and fulfill their requests.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the customer information fields with your details.
2. Provide the required cupcake details, such as box type and box size.
3. Enter your shipping address so we can deliver the order to you.
4. Choose a payment method for your order.
5. Add any special instructions if needed.
6. Enter a valid email address and phone number.

## Field-by-Field Explanation
### Customer Information 
*  **Customer Information** (`customer_info`, text, not required): Please enter your name and any other relevant customer information.

### Cupcake Details 
*  **Cupcake Details** (`cupcake_details`, text, not required): Provide any necessary information about the cupcakes you ordered, such as flavors, special requests, etc.

### Shipping Address 
*  **Shipping Address** (`shipping_address`, text, not required): Enter your shipping address so we can deliver the order to you.

### Payment Method 
*  **Payment Method** (`payment_method`, text, not required): Choose a valid payment method for your order.

### Special Instructions 
*  **Special Instructions** (`special_instructions`, text, not required): If you have any special requests or instructions for your order, please enter them here.

### Box Type 
*  **Box Type** (`box_type`, number, not required): Choose the type of box you want to order.

### Box Size 
*  **Box Size** (`box_size`, number, not required): Select the size of the box you want to order.

### Box Color 
*  **Box Color** (`box_color`, select_one, not required): Choose a color for your box from the options: Red, Blue, Green, Yellow, and Pink.

### Order Notes 
*  **Order Notes** (`order_notes`, note, not required): Add any additional notes about your order if needed.

### Email 
*  **Email** (`email`, email, not required): Please enter a valid email address so we can contact you about your order.

### Phone 
*  **Phone** (`phone`, text, not required): Enter a valid phone number so we can contact you about your order.
