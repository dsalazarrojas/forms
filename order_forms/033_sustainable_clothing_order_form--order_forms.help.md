# Sustainable Clothing Order Form - Help Guide
## Purpose
This form is designed to collect information from customers for sustainable clothing orders. It is used to gather details necessary for order fulfillment and customer communication.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter your name and email address in the corresponding fields.
2. Provide your shipping address if necessary.
3. Select the product size you are interested in.
4. Choose your preferred payment method.
5. If you have any specific payment instructions, enter them in the payment option fields.
6. Add any comments or notes about your order.
7. Select the date and time of your order.
8. Provide any additional notes or comments you'd like to include with your order.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required: false): Enter your name.
* **Customer Email** (`customer_email`, email, required: false): Enter your email address.
* **Shipping Address** (`shipping_address`, text, required: false): Enter your shipping address if different from your billing address.
* **Product Size** (`product_size`, select_one, options: 'Yes', 'No'): Select 'Yes' or 'No' to indicate whether you'd like to purchase the product in the size available or not.
* **Payment Method** (`payment_method`, select_one, options: 'Yes', 'No'): Select how you'd like to pay for your order.
* **Payment Options** (`payment_method_options`, select_multiple, options: 'Yes', 'No'): If you'd like to specify any payment options, select 'Yes' for each option you'd like to include.
* **Payment Option 1** (`payment_option_1`, text, required: false): Enter any details about the payment option you selected.
* **Payment Option 2** (`payment_option_2`, text, required: false): Enter any additional details about the payment option you selected.
* **Order Comments** (`order_comments`, note, required: false): Add any comments or notes about your order.
* **Date of Order** (`date_of_order`, date, required: false): Select the date of your order.
* **Time of Order** (`time_of_order`, time, required: false): Select the time of your order.
* **Customer Notes** (`customer_notes`, text, required: false): Add any additional notes or comments for our team's reference.
* **Customer Notes 2** (`customer_notes_2`, text, required: false): Add any further notes or comments for our team's reference.

## Tips
* Please ensure that you have entered accurate and complete information to avoid any delays or issues with your order. 
* If you have any questions or concerns, please don't hesitate to contact us.
