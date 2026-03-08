# industrial_motor_repair_kit_order_form - Help Guide
## Purpose
This form is designed to collect information for industrial motor repair kits orders from customers. It is intended for customers to provide their shipping details, select their preferred shipping method, and place their order for a motor repair kit.

## How To Complete This Form
1. Fill out the shipping details section with your information.
2. Select your preferred shipping method (Standard, Express, or Pickup).
3. Fill out the customer information section with your name, email, and phone number.
4. Select the specific motor repair kit you are ordering (Motor Repair Kit A, B, or C).
5. Choose your payment method (Credit Card or Bank Transfer).
6. Enter the payment amount and date.

## Field-by-Field Explanation
* **shipping_details** (`shipping_details`, text, required/optional): This field is for entering your shipping details, such as your shipping address and any additional shipping instructions.
* **shipping_method** (`shipping_method`, select_one, required): This field is for selecting your preferred shipping method (Standard, Express, or Pickup).
* **customer_info** (`customer_info`, text, required/optional): This field is for entering any additional information about yourself as a customer.
* **customer_name** (`customer_name`, text, required): Enter your name.
* **customer_email** (`customer_email`, email, required): Enter your email address.
* **customer_phone** (`customer_phone`, text, required): Enter your phone number.
* **order_details** (`order_details`, text, required/optional): This field is for entering any additional details about your order.
* **order_item** (`order_item`, select_multiple, required): Select the specific motor repair kit you are ordering (Motor Repair Kit A, B, or C).
* **payment_method** (`payment_method`, select_one, required): Choose your payment method (Credit Card or Bank Transfer).
* **payment_details** (`payment_details`, text, required/optional): This field is for entering any additional payment details.
* **payment_amount** (`payment_amount`, number, required): Enter the payment amount.
* **payment_date** (`payment_date`, date, required): Enter the payment date.
* **notes** (`notes`, note, required/optional): This field is for leaving any notes about your order (not required).
* **notes_2** (`notes_2`, note, required/optional): This field is also for leaving any additional notes about your order (not required).
* **notes_3** (`notes_3`, note, required/optional): And this field is for leaving any further notes about your order (not required).

## Tips
* Ensure that you have entered all required fields before submitting your form.
* Double-check your shipping method and shipping details for accuracy.
* Enter your email address in the correct format (e.g., `example@email.com`).
