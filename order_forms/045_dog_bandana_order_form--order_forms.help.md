# Dog Bandana Order Form - Help Guide
## Purpose
This form is designed to collect customer information, order preferences, and payment details to process orders for custom dog bandanas. The purpose of this form is to ensure accurate and efficient processing of orders while providing a smooth customer experience.

## How To Complete This Form
To complete this form, simply follow these steps:

*   Fill in the customer details section with your name, email address, and phone number.
*   Select your preferred bandana design and size.
*   Indicate whether you have any special requests or customizations for your order.
*   Enter your preferred delivery information.
*   Add any special instructions or comments about your order.
*   Confirm your order details and submit the form.

## Field-by-Field Explanation
* **Customer Details**
    *   **Customer Name** (`customer_name`, `text`, required/optional): Enter your name for order confirmation purposes.
    *   **Email** (`customer_email`, `email`, required/optional): Enter your email address to contact you about your order.
    *   **Phone** (`customer_phone`, `text`, required/optional): Enter your phone number for order updates or contact.
    *   **Address** (`customer_address`, `text`, required/optional): Provide your address for delivery purposes.
*   **Design Preferences**
    *   **Design Preferences** (`design_preferences`, `select_multiple`, required/optional): Select your preferred design type (Yes/No).
*   **Product Selection**
    *   **Select Product** (`product_selection`, `select_one`, required/optional): Choose from available bandana options (Yes/No).
*   **Customization Preferences**
    *   **Customization Preferences** (`customization_preferences`, `text`, required/optional): Enter any customizations or special requests for your order.
*   **Payment Details**
    *   **Payment Details** (`payment_details`, `number`, required/optional): Enter your payment method or amount (not applicable in this context, but for future development).
*   **Delivery Info**
    *   **Delivery Info** (`delivery_info`, `select_one`, required/optional): Indicate whether you want to be contacted for delivery information (Yes/No).
*   **Special Instructions**
    *   **Special Instructions** (`special_instructions`, `text`, required/optional): Add any special instructions or comments about your order.
*   **Order Confirmation**
    *   **Order Confirmation** (`order_confirmation`, `text`, required/optional): Confirm your order details for accuracy.
*   **Message**
    *   **Message** (`customer_message`, `text`, required/optional): Leave a message or note for our team.
