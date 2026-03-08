<thinking>
# This form is used to store payment information for services, including customer details, payment methods, and service-specific information.
To avoid confusion, we will only consider this form as relevant if the service type is either Storage, Backup, or Archival.
# The purpose of this form is to collect payment details from customers for services rendered.
This form should only be used for storing payment information for these services and will only display the relevant fields.
</thinking>

# Data Storage Payment Form - Help Guide
## Purpose
The Data Storage Payment Form is a collection of fields that are used to store payment information for services such as Storage, Backup, and Archival. This form is designed to be used for storing payment details from customers for these services.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide customer information
	* Fill in the customer email address
	* Provide the customer phone number
2. Select the service details
	* Choose the service type (Storage, Backup, or Archival)
3. Select the payment method
	* Choose from Stripe, PayPal, or Bank Transfer
4. Enter payment information
	* Fill in the payment amount
	* Choose the payment currency
	* Fill in the payment currency
5. Enter additional information
	* Enter the customer notes

## Field-by-Field Explanation

* **customer_info** (`customer_info`, text): Enter the customer's information.
* **service_details** (`service_details`, text): Select the type of service provided.
* **payment_method** (payment_method, select_one): Select the payment method to be used.
* **payment_amount** (`payment_amount`, number): Fill in the payment amount.
* **payment_currency** (payment_currency, select_one): Choose the payment currency.
* **customer_email** (`customer_email`, email): Enter the customer's email address.
* **customer_phone** (`customer_phone`, text): Enter the customer's phone number.
* **order_date** (`order_date`, date): Enter the order date.
* **notes** (`notes`, note): Enter any additional notes regarding the order.
* **payment_status** (`payment_status`, select_one): Select the payment status (Paid, Pending, or Cancelled).
* **payment_status_date** (`payment_status_date`, date): Enter the date of payment status.
* **assigned_to** (`assigned_to`, text): Enter the name of the person assigned to the order.
* **assigned_by** (`assigned_by`, text): Enter the name of the person who assigned the order.
* **order_number** (`order_number`, text): Enter the order number.
* **service_type** (`service_type`, select_multiple): Select the type of service provided.
* **storage_size** (`storage_size`, number): Enter the storage size.
* **storage_type** (`storage_type`, select_one): Choose the storage type.
* **notes_2** (`notes_2`, note): Enter any additional notes.
* **service_price** (`service_price`, number): Fill in the service price.
* **service_price_currency** (`service_price_currency`, select_one): Choose the currency for the service price.
* **service_price_tax** (`service_price_tax`, number): Enter the service price tax.
* **service_price_total** (`service_price_total`, number): Enter the total service price.
* **customer_notes** (`customer_notes`, note): Enter the customer's notes.
* **service_price_total_2** (`service_price_total_2`, number): Enter the total service price.
* **customer_address** (`customer_address`, text): Enter the customer's address.

## Tips

* Make sure to fill in all required fields.
* Use the correct payment method and currency for the service provided.
* Enter the correct payment status and date.
* Use the correct storage type and size.
* Enter the correct service price and currency.
