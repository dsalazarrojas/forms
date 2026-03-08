<thinking>As an e-commerce return label order form, this form is used to generate a return label for customers who need to return products to the seller. This form is designed to collect relevant information from the customer, including order details, reasons for return, photos, return address, customer details, and shipping details. By providing accurate and complete information in this form, customers can easily initiate the return process and receive their return label.</thinking>

# e_commerce_return_label_order_form - Help Guide
## Purpose
This form is used to generate a return label for customers who need to return products to the seller. To complete the form, please follow the steps below.

## How To Complete This Form
To complete this form, please fill out the following pages:

Page 1: Order Details

* **Order Details** (`order_details`, text, optional): Enter the order number or description to help us identify your order.
* **Photos** (`photos`, select_multiple, optional): Select up to 5 photos of the product to be returned. Please make sure the photos are clear and well-lit.
* **Return Address** (`return_address`, text, optional): Enter your return address to ensure we can send the return label to the correct address.

Page 2: Return Information

* **Reasons for Return** (`reasons_for_return`, select_one, optional): Select the reason for return from the options provided:
	+ Return
	+ Exchange
	+ Defective
	+ Refund
	+ Other
* **Return Reason** (`return_reason`, text, optional): Enter a brief explanation of the reason for return.
* **Return Message** (`return_message`, text, optional): Enter a message to include with the return label.

Page 3: Return Request

* **Return Request Date** (`return_request_date`, date, optional): Enter the date you would like to return the item.
* **Return Request Time** (`return_request_time`, time, optional): Enter the time you would like to return the item.
* **Return Note** (`return_note`, note, optional): Enter any additional notes or comments about the return.

Page 4: Label Information

* **Return Label** (`return_label`, text, optional): Enter the return label to be printed.
* **Label Address** (`label_address`, text, optional): Enter the address to which the return label should be sent.
* **Label Phone** (`label_phone`, text, optional): Enter the phone number to contact for return label inquiries.
* **Return Request Email** (`return_request_email`, text, optional): Enter the email address to which the return label should be sent.
* **Shipping Carrier** (`shipping_carrier`, text, optional): Enter the shipping carrier to be used for return.
* **Shipping Tracking Number** (`shipping_tracking_number`, text, optional): Enter the tracking number for the return shipment.
* **Shipping Tracking Carrier** (`shipping_tracking_carrier`, text, optional): Enter the tracking carrier for the return shipment.
* **Shipping Tracking URL** (`shipping_tracking_url`, text, optional): Enter the tracking URL for the return shipment.
* **Return Instructions** (`return_instructions`, text, optional): Enter any additional instructions for the return.
* **Customer Note** (`customer_note`, text, optional): Enter any additional notes or comments from the customer.
* **Label Note** (`label_note`, text, optional): Enter any additional notes or comments from the label.
* **Customer Shipping Details** (`customer_shipping_details`, text, optional): Enter any additional shipping details from the customer.
* **Reason for Exchange** (`reason_for_exchange`, text, optional): Enter the reason for exchanging the item.
* **Reason for Defective** (`reason_for_defective`, text, optional): Enter the reason why the item is defective.

## Tips

* Make sure to select the correct reason for return from the options provided.
* If you have any additional photos or notes to include with the return label, please attach them to the form.
* Double-check all information entered before submitting the form to ensure accuracy.
