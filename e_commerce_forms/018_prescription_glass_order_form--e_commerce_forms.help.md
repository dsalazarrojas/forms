# prescription_glass_order_form - Help Guide

## Purpose
The prescription glass order form is used to collect information about the prescription glasses ordered by a customer. This form helps to ensure accurate and efficient processing of the order.

## How To Complete This Form
To complete this form, follow the steps below:

* Select the type of order you want to place.
* Choose the type of glass and lens you require.
* Select the frame type that suits your needs.
* Enter your prescription information.
* Select the shipping address type.
* Enter your shipping address details.
* Choose the payment method and provide any necessary payment details.
* Provide your customer information, including name, email, and phone number.

## Field-by-Field Explanation

* **Order Type** (`order_type`, select_one, required: false):
	+ Select the type of order you want to place. This field helps us understand the nature of your order.
* **Glass Type** (`glass_type`, select_multiple, required: false):
	+ Choose the type of glass that you require. Options include Single Vision, Bifocals, Trifocals, and Progressive.
* **Lens** (`lens_type`, select_multiple, required: false):
	+ Select the type of lens that suits your needs. You can choose between Single Vision and Progressive lenses.
* **Frame Type** (`frame_type`, select_one, required: false):
	+ Select the frame type that you prefer. Options include Single Frame, Progressive Frame, and Non Prescription.
* **Prescription** (`prescription`, text, required: false):
	+ Enter your prescription information in the text field. Please provide accurate and clear information.
* **Shipping Address** (`shipping_address`, select_one, required: false):
	+ Select the type of shipping address you want to use. Options include Home, Office, and Other.
* **Shipping City** (`shipping_city`, text, required: false):
	+ Enter the city where you want to ship the glasses to.
* **Shipping Postal Code** (`shipping_postal_code`, text, required: false):
	+ Enter the postal code or zip code where you want to ship the glasses to.
* **Shipping Country** (`shipping_country`, select_one, required: false):
	+ Choose the country where you want to ship the glasses to. Options include US, Canada, UK, and Australia.
* **Payment Method** (`payment_method`, select_one, required: false):
	+ Select the payment method you prefer. Options include Credit Card, Pay with Cash, and Pay with Check.
* **Payment Details** (`payment_details`, text, required: false):
	+ Provide any necessary payment details, such as the payment amount or method of payment.
* **Customer Name** (`customer_name`, text, required: false):
	+ Enter your name as the customer.
* **Customer Email** (`customer_email`, email, required: false):
	+ Enter your email address where we can contact you.
* **Customer Phone** (`customer_phone`, text, required: false):
	+ Enter your phone number where we can contact you.
* **Customer Note** (`customer_note`, note, required: false):
	+ Provide any additional notes or instructions about your order.
