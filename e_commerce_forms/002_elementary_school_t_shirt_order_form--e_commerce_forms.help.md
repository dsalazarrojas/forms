# Elementary School T Shirt Order Form - Help Guide
## Purpose
The Elementary School T Shirt Order Form is designed to collect information from customers who wish to purchase a t-shirt from your school store. This form helps to gather the necessary details required to process and deliver the order correctly.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your Customer Information, including your name, address, phone number, and email (if available).
2. Provide your shipping address to ensure timely and correct delivery of your order.
3. Share your order information, such as the name of the product you'd like to purchase.
4. Choose your preferred shipping method (Yes or No), and if you select "No", please provide your alternative shipping method in the "Other Shipping Method" field.
5. If you have any special notes for the customer service team, please add them in the "Customer Note" field.

## Field-by-Field Explanation
* **Customer Information** (`customer_info`, text, required: false): Please fill in your name, address, and other relevant details in this field.
* **Shipping Address** (`shipping_address`, text, required: false): Enter your shipping address to ensure accurate delivery of your order.
* **Order Information** (`order_info`, text, required: false): Enter the name of the product you'd like to purchase.
* **Payment Information** (`payment_info`, text, required: false): This field is not currently being used, but please fill it in as a placeholder for any payment details that might be required in the future.
* **Customer Phone** (`customer_phone`, text, required: false): Enter your phone number to enable us to contact you in case of any issues with your order.
* **Customer Email** (`customer_email`, email, required: false): Enter your email address to receive updates about your order status.
* **Customer Note** (`customer_note`, note, required: false): Share any special notes or instructions with our customer service team to help us provide better support.
* **Shipping Method** (`shipping_method`, select_one, required: false): Select "Yes" if you'd like to use the standard shipping method, or "No" if you have a different shipping preference. If you select "No", please provide your alternative shipping method in the "Other Shipping Method" field.
* **Other Shipping Method** (`shipping_method_other`, text, required: false): If you selected "No" in the "Shipping Method" field, please provide your alternative shipping method here.
* **Product Name** (`product_name`, text, required: false): Enter the name of the product you'd like to purchase.
* **Product Size** (`product_size`, number, required: false): This field is currently not being used, but please be aware that it will be used to specify the size of the product you'd like to purchase in the future.
