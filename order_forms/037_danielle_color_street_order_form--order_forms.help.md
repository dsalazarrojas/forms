<thinking>
This is a form designed to gather information for an order. The form is likely used in an e-commerce context, where a customer is placing an order for some kind of product or service. The form is intended to capture basic customer information, color preferences, and other relevant details about the order.
To avoid confusion, let's break down the form's purpose: 
- It's not a form for general contact or inquiry purposes.
- It's not a form for signing up or creating an account.
- It's not a form for providing feedback or support requests.
</thinking>

# danielle_color_street_order_form - Help Guide
## Purpose
This form is designed to collect information for an order in an e-commerce context.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form sections as needed, starting from the top.
2. Enter your Customer Information in the "Customer Information" section.
3. Select your color preferences in the "Color Preferences" section.
4. Enter any additional shipping information in the "Shipping Information" section.
5. If required, provide your Date of Birth, Time of Purchase, and Order Details.
6. Enter your Phone Number and/or Email in the respective sections.
7. Indicate if you have a wish list in the "Wish List" section.

## Field-by-Field Explanation
- **Customer Information** (`customer_info`, text, required: false): Enter your name and contact details.
  - This field is optional, but it's recommended to provide your name for order tracking and communication purposes.
  - You can enter any additional information that might be relevant for the order.
- **Color Preferences** (`color_preferences`, select_one, required: false): Select "Yes" if you have any specific color preferences or "No" if not.
  - This field is optional, but it helps the merchant understand your color preferences for the order.
  - You can only select one preference.
- **Shipping Information** (`shipping_info`, text, required: false): Enter any additional shipping details, such as address or special instructions.
  - This field is optional, but it's recommended for accurate shipping purposes.
  - You can enter any text that might be relevant for shipping.
- **Date of Birth** (`date_of_birth`, date, required: false): Enter your date of birth in the correct format (DD/MM/YYYY).
  - This field is optional, but it might be required for certain age-sensitive products.
  - Please use the DD/MM/YYYY format for accuracy.
- **Time of Purchase** (`time_of_purchase`, time, required: false): Enter the time of your purchase in the 24-hour format (HH:MM AM/PM).
  - This field is optional, but it helps the merchant track purchase times for inventory management and analytics.
  - Use the 24-hour format (HH:MM AM/PM) for accuracy.
- **Order Details** (`order_details`, note, required: false): Enter any additional information about your order, such as a gift message or special instructions.
  - This field is optional, but it's recommended for accurate order fulfillment.
  - You can enter any text that might be relevant for the order.
- **Phone Number** (`phone_number`, text, required: false): Enter your phone number for order tracking and communication purposes.
  - This field is optional, but it's recommended for timely and efficient communication.
  - Please use the E.123-456-7890 format for accuracy.
- **Email** (`email`, email, required: false): Enter your email address for order tracking and communication purposes.
  - This field is optional, but it's recommended for timely and efficient communication.
  - Please use a valid email address format (e.g., `john.doe@example.com`).
- **Wish List** (`wish_list`, select_multiple, required: false): Indicate if you have any special wishes or requests related to your order.
  - This field is optional, but it's recommended for accurate order fulfillment.
  - You can select multiple options if applicable.
