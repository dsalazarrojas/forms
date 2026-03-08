<thinking>

This form is intended to gather information from customers for order fulfillment and payment processing. It is likely used by sales or customer support staff to collect order details before shipping or processing the payment. The form is likely not intended for public use, as it contains sensitive information such as customer email and shipping address. 

The form is divided into several sections, including Customer Information, Shipping Information, T Shirt Information, Payment Information, and buttons for submitting and canceling the order. Each section contains fields that correspond to the respective category. The form does not appear to be using any specific payment gateway or integration, suggesting it is a basic order form. The form also does not validate any input data, leaving that to the user's discretion. 

</thinking>

# PayJunction T Shirt Order Form - Help Guide
## Purpose
This form is intended to gather customer information and order details for order fulfillment and payment processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer's information (name, email, phone number).
2. Fill in the shipping information (first name, last name, address, city, state, zip, country).
3. Choose the T Shirt options (color, size, design).
4. Select the payment type and method.
5. Fill in any additional payment details.
6. Click the "Save and Continue" or "Save and Finish" button to submit the form or cancel the order.

## Field-by-Field Explanation
- **Customer Information** (`customer_info`, text, required/optional): This field is where the customer's name and other identifying information goes.
  - Fill in the customer's name, email, and phone number.
- **Email** (`customer_email`, email, required/optional): Enter the customer's email address.
- **Phone** (`customer_phone`, text, required/optional): Enter the customer's phone number.
- **Shipping** (`shipping_info`, text, required/optional): This field is where the customer's shipping information goes.
  - Fill in the shipping first name, last name, address, city, state, and zip.
- **First name** (`shipping_first_name`, text, required/optional): Enter the customer's first name.
- **Last name** (`shipping_last_name`, text, required/optional): Enter the customer's last name.
- **Address** (`shipping_address`, text, required/optional): Enter the customer's shipping address.
- **City** (`shipping_city`, text, required/optional): Enter the customer's shipping city.
- **State** (`shipping_state`, text, required/optional): Enter the customer's shipping state.
- **Zip** (`shipping_zip`, text, required/optional): Enter the customer's shipping zip code.
- **Country** (`shipping_country`, text, required/optional): Enter the customer's shipping country.
- **T Shirt** (`t_shirt_info`, text, required/optional): This field is where the customer selects their T Shirt options.
  - Choose the color, size, and design of the T Shirt.
- **Color** (`t_shirt_color`, select_one, required/optional): Select the color of the T Shirt.
- **Size** (`t_shirt_size`, select_one, required/optional): Select the size of the T Shirt.
- **Design** (`t_shirt_design`, select_one, required/optional): Select the design of the T Shirt.
- **Payment Information** (`payment_info`, text, required/optional): This field is where the customer selects their payment type and method.
  - Choose the payment type and method.
- **Type** (`payment_type`, select_one, required/optional): Select the payment type.
- **Method** (`payment_method`, select_one, required/optional): Select the payment method.
- **Details** (`payment_details`, text, required/optional): Enter any additional payment details.
- **Submit** (`submit`, text, required/optional): Click this button to save and continue or submit the form.
- **Cancel** (`cancel`, text, required/optional): Click this button to cancel the order.
- **Back** (`back`, text, required/optional): Click this button to go back.
- **Save and Continue** (`save_and_continue`, text, required/optional): Click this button to save and continue.
- **Save and Finish** (`save_and_finish`, text, required/optional): Click this button to save and finish.
- **Save and Preview** (`save_and_preview`, text, required/optional): Click this button to save and preview the order.
