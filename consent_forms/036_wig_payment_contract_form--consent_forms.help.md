# wig_payment_contract_form - Help Guide
## Purpose
This form is designed to collect information from customers, including their payment details and consent status. It helps the wig payment service provider to gather necessary data to process payments and ensure customer agreement.

## How To Complete This Form
To complete the form, follow these steps:

1. Provide the necessary information in the **Customer Information** field on page 1.
2. Enter the payment information in the **Payment Information** field on page 1.
3. Enter service details in the **Service Information** field on page 1.
4. Select your consent status in the **Consent Information** field on page 2, either agreeing or disagreeing to the terms and conditions.
5. Enter any additional contact information in the **Contact Information** field on page 2.

## Field-by-Field Explanation
* **Customer Information (customer_info)**:
	+ **Name** (`customer_info`, text, required: false)
	+ This field is used to collect the customer's name.
* **Payment Information (payment_info)**:
	+ **Payment details** (`payment_info`, text, required: false)
	+ This field is intended for customers to input their payment details.
* **Service Information (service_info)**:
	+ **Service details** (`service_info`, text, required: false)
	+ This field is for service information.
* **Consent Information (consent_info)**:
	+ **Consent status** (`consent_info`, select_one, required: false)
	+ Select either "I have read and agreed to the terms and conditions" or "I have not read and agreed to the terms and conditions" to confirm your consent status.
* **Contact Information (contact_info)**:
	+ **Contact details** (`contact_info`, text, required: false)
	+ This field is for any additional contact information customers want to provide.

## Tips
* Please fill out all fields accurately and completely.
* If you're unsure about any field, refer to the form's purpose and instructions above.
* Ensure that you're not duplicating efforts; review fields carefully before submitting the form.
