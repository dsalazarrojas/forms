# Waste Compactor Supply Order Form - Help Guide

## Purpose
The Waste Compactor Supply Order Form is used to capture essential details from customers when they place orders for waste compactors. This form helps our team understand the customer's requirements, delivery needs, and payment preferences, ensuring that we can process their order accurately and efficiently.

## How To Complete This Form
1. Fill out the form completely, ensuring all required and optional fields are filled in.
2. Provide accurate information in each field, especially regarding customer details and delivery preferences.
3. If you're unsure about any field, refer to the field-by-field explanations below for guidance.

## Field-by-Field Explanation

* **Customer Info (Page 1)**:
	+ Customer Name (`customer_name`, text, required): Enter the customer's name as it appears on their order documents.
	+ Customer Company (`customer_company`, text, required): Enter the name of the customer's company or organization.
	+ Customer Email (`customer_email`, email, required): Enter the customer's email address for communication.
	+ Customer Phone (`customer_phone`, text, optional): Enter the customer's phone number for additional contact.
* **Waste Compactor Info (Page 2)**:
	+ Compactor Type (`compactor_type`, select_one, required): Select the type of waste compactor the customer needs.
	+ Compactor Weight (`compactor_weight`, text, optional): Enter the weight capacity of the compactor required by the customer.
	+ Compactor Size (`compactor_size`, text, optional): Enter the size of the compactor required by the customer.
	+ Compactor Model (`compactor_model`, text, optional): Enter the specific model of compactor the customer needs.
* **Delivery Info (Page 3)**:
	+ Delivery Date (`delivery_date`, date, optional): Select the date for delivery if different from the current date.
	+ Delivery Time (`delivery_time`, time, optional): Select the time for delivery if different from the standard time.
	+ Delivery Address (`customer_address`, text, optional): Enter the delivery address for the waste compactor.
	+ Delivery Status (`delivery_status`, select_multiple, optional): Select the delivery status, either Active or Inactive.
* **Payment Info (Page 4)**:
	+ Payment Method (`payment_method`, select_one, optional): Select the payment method for the order.
* **Order Info (Page 5)**:
	+ Order Date (`order_date`, date, optional): Select the date for the order if different from the current date.
	+ Order Time (`order_time`, time, optional): Select the time for the order if different from the standard time.
	+ Order Notes (`order_notes`, note, optional): Enter any additional notes or instructions for the order.
* **Other (Page 6)**:
	+ Customer Notes (`customer_notes`, note, optional): Enter any additional notes or comments for the customer.
	+ Sales Person Name (`sales_person_name`, text, optional): Enter the name of the sales person handling the order.
	+ Delivery Location (`delivery_location`, text, optional): Enter the delivery location for the waste compactor.
