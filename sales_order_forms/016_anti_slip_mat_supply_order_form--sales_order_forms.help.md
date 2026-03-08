# Anti Slip Mat Supply Order Form - Help Guide

## Purpose
This form is designed to collect information for the supply of anti-slip mats, providing a platform for customers to place orders, choose mat specifications, and provide shipping and payment details. It ensures that orders are accurate and efficient, allowing for prompt order fulfillment.

## How To Complete This Form

1. Fill in your order details in each field, ensuring all required fields are filled.
2. Enter your contact information, including phone number and email, for order confirmation and communication.
3. Select your preferred shipping method and delivery instructions for your order.
4. Choose your preferred payment method, including credit card, debit card, or other options.
5. Review your order details carefully before submitting the form.

## Field-by-Field Explanation

* **Order Date** (`order_date`, date, required): Date of order placement. Enter the date you would like to place your order.
* **Customer Name** (`customer_name`, text, required): Full name or company name of the customer placing the order.
* **Company Name** (`company_name`, text, optional): Business name if applicable. If not a business, leave this field blank.
* **Contact Email** (`contact_email`, email, required): Email for order confirmation and communication.
* **Contact Phone** (`contact_phone`, text, required): Phone number for order questions and communication.
* **Customer Type** (`customer_type`, select_one, required): Type of customer:
	+ Individual consumer
	+ Retail business
	+ Restaurant or food service
	+ Industrial facility
	+ Healthcare facility
	+ Educational institution
	+ Government agency
* **Mat Type** (`mat_type`, select_one, required): Type of anti-slip mat:
	+ Rubber entrance mat
	+ Vinyl anti-fatigue mat
	+ PVC drainage mat
	+ Carpet entrance mat
	+ Interlocking tile mat
	+ Custom cut mat
	+ Other
* **Mat Size** (`mat_size`, select_one, required): Dimensions needed:
	+ Small (2x3 feet)
	+ Medium (3x5 feet)
	+ Large (4x6 feet)
	+ Extra large (6x10 feet)
	+ Custom size
* **Custom Dimensions** (`custom_dimensions`, text, optional): Length x Width in feet (only for custom size mat).
* **Mat Thickness** (`mat_thickness`, select_one, required): Thickness preference:
	+ Standard (3/8 inch)
	+ Heavy-duty (1/2 inch)
	+ Industrial (3/4 inch)
	+ Extra thick (1 inch)
* **Color Preference** (`color_preference`, select_one, required): Select color:
	+ Black
	+ Gray
	+ Blue
	+ Red
	+ Green
	+ Brown
	+ No preference
* **Quantity** (`quantity`, number, required): Number of mats needed.
* **Unit Price** (`unit_price`, number, required): Price per mat.
* **Total Price** (`total_price`, number, required): Total price before shipping.
* **Shipping Information --** (`shipping_address_section`, note, required): This section is for shipping details. Please fill in the shipping information.
* **Shipping Name** (`shipping_name`, text, required): Name for delivery.
* **Street Address** (`shipping_address`, text, required): Full street address.
* **City** (`shipping_city`, text, required): City or town.
* **State or Province** (`shipping_state`, text, required): State or province.
* **ZIP or Postal Code** (`shipping_zip`, text, required): Postal code.
* **Shipping Method** (`shipping_method`, select_one, required): Delivery speed:
	+ Standard ground (5-7 days)
	+ Expedited (3-5 days)
	+ Express (2 days)
	+ Overnight
	+ Freight delivery
* **Delivery Instructions** (`delivery_instructions`, text, optional): Special delivery notes.
* **Payment Method** (`payment_method`, select_one, required): How you will pay:
	+ Credit card
	+ Debit card
	+ Purchase order
	+ Check
	+ Net 30 account
* **Purchase Order Number** (`po_number`, text, optional): PO number if applicable.
* **Billing Address Same** (`billing_address_same`, select_one, required): Is billing address the same as shipping:
	+ 'True'
	+ 'False'
* **Special Requests or Notes** (`special_requests`, text, optional): Any additional requirements.
* **Terms and Conditions** (`terms_accepted`, select_one, required): Do you agree to terms:
	+ Yes, I agree
	+ No, I do not agree
* **Order Confirmation Preference** (`order_confirmation`, select_one, required): How to receive confirmation:
	+ Email
	+ Phone call
	+ Text message
	+ Mail
