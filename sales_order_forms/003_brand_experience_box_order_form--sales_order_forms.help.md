<thinking>As a sales order form, the Brand Experience Box Order Form is designed to collect essential customer information for processing orders and ensuring proper shipping and delivery. To prevent errors, please ensure that all required fields are filled out correctly. If you're unsure about any field, refer to the field's specific explanation below.</thinking>

# Brand Experience Box Order Form - Help Guide
## Purpose
This form is for customers to order brand experience boxes, which are custom packages containing various items for a specific brand experience. By completing this form, you'll be able to provide all necessary details for the order and ensure it's processed accurately.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields, marked with an *asterisk* (*) in the label. These fields include:
	* Customer Full Name
	* Email Address
	* Phone Number
	* Box Type Selection
	* Quantity
	* Shipping Address Line 1
	* Shipping Address Line 2 (if applicable)
	* Shipping City
	* Shipping State or Province
	* Shipping ZIP or Postal Code
	* Shipping Country
	* Preferred Delivery Date
	* Payment Method
	* Terms and Conditions
2. If you have a company name, feel free to fill it out for the Company Name field.
3. You can choose from the provided options for the Box Type Selection, Preferred Box Contents, and Color Theme Preference fields.
4. If you have any special instructions for delivery, you can mention them in the Special Delivery Instructions field.
5. If you'd like to include a gift message, you can type it in the Gift Message field (this is optional).
6. Review your order before submitting to ensure everything is accurate.

## Field-by-Field Explanation

* **Customer Full Name** (`customer_name`, `text`, *required*): This is the name of the person or organization placing the order.
* **Email Address** (`customer_email`, `email`, *required*): This is the email address where you'll receive order confirmations and updates.
* **Phone Number** (`customer_phone`, `text`, *required*): This is the contact number for any delivery issues.
* **Company Name** (`company_name`, `text`, *optional*): If you're representing a company, this is where you can fill out the company name.
* **Box Type Selection** (`box_type`, `select_one`, *required*): Choose from:
	+ Starter Box
	+ Premium Box
	+ Deluxe Box
	+ Corporate Box
	+ Custom Box
* **Quantity** (`quantity`, `number`, *required*): Enter the number of boxes you'd like to order.
* **Preferred Box Contents** (`box_contents`, `select_multiple`, *required*): Choose from:
	+ Branded Notebooks
	+ Pens and Stationery
	+ Stickers and Decals
	+ Tote Bag
	+ Water Bottle
	+ Tech Accessories
	+ Snacks and Treats
	+ Welcome Card
* **Color Theme Preference** (`color_preference`, `select_one`, *optional*): Choose from:
	+ Corporate Blue
	+ Modern Black
	+ Vibrant Multi
	+ Eco Green
	+ Minimalist White
	+ No Preference
* **Shipping Address Line 1** (`shipping_address_line1`, `text`, *required*): Enter your street address.
* **Shipping Address Line 2** (`shipping_address_line2`, `text`, *optional*): Enter any additional address details (e.g. apartment, suite, unit).
* **City** (`shipping_city`, `text`, *required*): Enter the city for the shipping address.
* **State or Province** (`shipping_state`, `text`, *required*): Enter the state or province for the shipping address.
* **ZIP or Postal Code** (`shipping_zip`, `text`, *required*): Enter the ZIP or postal code for the shipping address.
* **Country** (`shipping_country`, `select_one`, *required*): Choose the country for the shipping address. Options include:
	+ United States
	+ Canada
	+ United Kingdom
	+ Australia
	+ Germany
	+ France
	+ Other
* **Preferred Delivery Date** (`delivery_date`, `date`, *required*): Enter the date you'd like delivery to occur.
* **Special Delivery Instructions** (`special_instructions`, `text`, *optional*): If you have any special instructions for delivery, mention them here.
* **Gift Message** (`gift_message`, `text`, *optional*): If you'd like to include a gift message, type it here.
* **Payment Method** (`payment_method`, `select_one`, *required*): Choose how you'd like to pay. Options include:
	+ Credit Card
	+ PayPal
	+ Bank Transfer
	+ Purchase Order
	+ Invoice
* **Terms and Conditions** (`terms_accepted`, `select_one`, *required*): Check the box to indicate you accept our terms and conditions.

## Tips
* Ensure all required fields are filled out accurately to avoid delays or errors in processing your order.
* If you're unsure about any field, refer back to the explanation above for clarification.
* If you have any special requests or questions, don't hesitate to contact us.
