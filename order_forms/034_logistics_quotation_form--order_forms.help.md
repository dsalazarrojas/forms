<thinking>
To create a user-facing help guide for the Logistics Quotation Form, I will first analyze the provided YAML fields to understand the form's purpose and requirements. The form is used to collect logistics information for shipping details, customer information, and shipment costs. It appears to be a comprehensive form that covers various aspects of logistics, including shipment mode, date, time, weight, distance, service, status, and customer details.
</thinking>

# Logistics Quotation Form - Help Guide
## Purpose
The Logistics Quotation Form is used to collect logistics information for shipping details, customer information, and shipment costs. This form is used by logistics teams to create quotations for customers and to keep track of shipment details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the shipment mode (air, ground, or sea) that best suits your shipment needs.
2. Choose the origin and destination locations for the shipment.
3. Enter the shipment date and time.
4. Provide the shipment weight and distance.
5. Select the shipment service level (express, standard, or other).
6. Enter the customer name, email, phone number, and address.
7. Enter the shipment cost and customer service charge.
8. Enter any additional notes or comments for the shipment and customer.

## Field-by-Field Explanation

* **Shipping Details**
	+ **Shipment Mode** (`shipment_mode`, `select_one`): Choose the mode of shipment (air, ground, or sea) that best suits your needs.
	+ **Origin Location** (`origin_location`, `select_one`): Select the location from which the shipment is departing.
	+ **Destination Location** (`destination_location`, `select_one`): Select the location to which the shipment is headed.
	+ **Shipment Date** (`shipment_date`, `date`): Enter the date of the shipment.
	+ **Shipment Time** (`shipment_time`, `time`): Enter the time of the shipment.
	+ **Shipment Weight** (`shipment_weight`, `number`): Enter the weight of the shipment.
	+ **Shipment Distance** (`shipment_distance`, `number`): Enter the distance of the shipment.
	+ **Shipment Service** (`shipment_service`, `select_one`): Select the service level (express, standard, or other).
	+ **Shipment Status** (`shipment_status`, `select_one`): Select the status of the shipment (pending, on route, or delivered).

* **Customer Information**
	+ **Customer Name** (`customer_name`, `text`): Enter the customer's name.
	+ **Customer Email** (`customer_email`, `email`): Enter the customer's email address.
	+ **Customer Phone** (`customer_phone`, `text`): Enter the customer's phone number.
	+ **Customer Address** (`customer_address`, `text`): Enter the customer's physical address.
	+ **Customer Postal Code** (`customer_postal_code`, `text`): Enter the customer's postal code.

* **Cost and Terms**
	+ **Shipment Cost** (`shipment_cost`, `number`): Enter the shipment cost.
	+ **Customer Service Charge** (`customer_service_charge`, `number`): Enter the customer service charge.
	+ **Total Cost** (`total_cost`, `number`): Calculate the total cost.
* **Notes and Comments**
	+ **Shipment Note** (`shipment_note`, `note`): Enter any notes about the shipment.
	+ **Customer Terms** (`customer_terms`, `note`): Enter any terms for the customer.
	+ **Shipment Comments** (`shipment_comments`, `note`): Enter any comments about the shipment.
	+ **Customer Comments** (`customer_comments`, `note`): Enter any comments from the customer.
	+ **Shipment Additional Notes** (`shipment_additional_notes`, `note`): Enter any additional notes about the shipment.
	+ **Customer Additional Notes** (`customer_additional_notes`, `note`): Enter any additional notes from the customer.
