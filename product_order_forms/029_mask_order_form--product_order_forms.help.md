<thinking>
To ensure that the form purpose and fields are understood clearly, let's briefly discuss the form's requirements and constraints.

This "Mask Order Form" seems to be related to ordering masks or face coverings, likely for medical or hygiene purposes. The form might be used to capture customer information for order tracking and processing. 

The form fields appear to be a mix of basic contact information (name, email, phone), address, and payment details (payment gateway, payment method, order total), as well as specific details like date of birth and quantity ordered. Given the fields, we can infer that this form might be used for customers to place orders for masks or face coverings, and the form collects relevant information for order fulfillment and payment processing.

The form does not seem to be intended for duplicate or redundant data entry, as most fields are not marked as required. This suggests that the form is designed to collect information once, and any missing fields will not prevent the form submission. 

However, this is just an inference, and without further context, it's hard to say for certain. Let's assume that the form is intended for customers to place orders for masks or face coverings, and provide a help guide based on this understanding.
</thinking>

# Mask Order Form - Help Guide
## Purpose
The Mask Order Form is designed to collect information from customers for order tracking and processing. Please use this form to place orders for masks or face coverings.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **First Name**, **Last Name**, and **Email** fields to ensure our team can contact you.
2. Enter your **Phone** number to facilitate easy contact.
3. Provide your **Shipping Address** where you would like to receive your order.
4. Specify the quantity of masks you would like to order.
5. Enter your **Date of Birth** (if required for age verification).
6. Choose your preferred **Payment Gateway** from the dropdown options (Stripe, PayPal, Square).
7. Select your **Payment Method** from the available options (Credit Card, PayPal, Stripe).
8. Review the calculated **Order Total** to ensure accuracy.

## Field-by-Field Explanation
- **First Name** (`first_name`, `text`, optional): Enter your first name for our records.
- **Last Name** (`last_name`, `text`, optional): Enter your last name for our records.
- **Email** (`email`, `email`, optional): Enter your email address for order updates and contact.
- **Phone** (`phone`, `text`, optional): Provide your phone number for easy contact.
- **Shipping Address** (`shipping_address`, `text`, optional): Enter your shipping address where you would like to receive your order.
- **Quantity** (`quantity`, `number`, optional): Specify the number of masks you would like to order.
- **Date of Birth** (`date_of_birth`, `date`, optional): Enter your date of birth for age verification (if required).
- **Order Total** (`order_total`, `number`, optional): This field displays the calculated total of your order.
- **Payment Gateway** (`payment_gateway`, `select_one`, optional): Choose your preferred payment gateway (Stripe, PayPal, Square).
- **Payment Method** (`payment_method`, `select_multiple`, optional): Select your preferred payment method (Credit Card, PayPal, Stripe).
- **Payment Gateway and Method** are related fields. Please ensure they are correctly filled out. 

## Tips
- Double-check your information before submitting the form.
- Ensure you have selected the correct payment gateway and method.
- If you have any issues or questions, please contact us for assistance.
