<thinking>
This form is intended to record information about the services provided to customers. The form is used to document customer interactions, including billing details. The purpose of this form is to ensure accurate and complete records of services provided. Ensure the form is completed only for customers who have interacted with your business.

This form should only be used for customers who have a known interaction with your business. Do not use this form for unknown customers or for customers with incomplete information.

</thinking>

# plumbing-services-billing-form - Help Guide
## Purpose
The purpose of this form is to record and document customer interactions, including billing details for services provided to customers.

## How To Complete This Form
1. Fill in the form with the customer's information and billing details.
2. Enter the customer's name and email address in the respective fields.
3. Select the appropriate service provider from the list.
4. Enter a brief description of the service provided.
5. Enter the cost of the service.
6. Choose whether or not the payment method is used.
7. Enter the payment date.
8. Choose the payment time.
9. Enter the payment amount.
10. Select the status of the payment as active or inactive.
11. Enter any additional notes about the payment.
12. Enter a detailed description of the service provided.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text): Enter the customer's name.
* **Customer Email** (`customer_email`, email): Enter the customer's email address.
* **Service Provider** (`service_provider`, select_multiple): Select the service provider from the list.
	+ Select 'Yes' if the service provider was used.
	+ Select 'No' if not used.
* **Service Description** (`service_description`, text): Enter a brief description of the service provided.
* **Service Cost** (`service_cost`, number): Enter the cost of the service.
* **Payment Method** (`payment_method`, select_multiple): Choose whether or not the payment method is used.
	+ Select 'Yes' if the payment method was used.
	+ Select 'No' if not used.
* **Payment Date** (`payment_date`, date): Enter the date of the payment.
* **Payment Time** (`payment_time`, time): Choose the time of the payment.
* **Payment Amount** (`payment_amount`, number): Enter the payment amount.
* **Payment Status** (`payment_status`, select_one): Select the status of the payment as active or inactive.
* **Payment Notes** (`payment_notes`, note): Enter any additional notes about the payment.
* **Service Details** (`service_details`, text): Enter a detailed description of the service provided. This field is required.
* **Payment Status is not actually used in the form, it seems like an error in the schema. Please ignore this field.**

## Tips
- Ensure that all fields are filled in correctly to ensure accurate records.
- Use clear and concise language when entering descriptions and notes.
- If a service provider was not used, select "No" in the service provider field.
- This form is for documenting customer interactions, ensure to document all interactions accurately.
