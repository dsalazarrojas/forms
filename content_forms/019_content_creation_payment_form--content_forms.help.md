<thinking>
The Content Creation Payment Form is a tool used to collect payment information from clients for content creation services. The form is designed to be filled out by clients to provide their payment details and agree to the payment terms.
</thinking>

# Content Creation Payment Form - Help Guide

## Purpose
The Content Creation Payment Form is used to collect payment information from clients for content creation services. It is a crucial step in the payment process, ensuring that all required information is collected accurately and efficiently.

## How To Complete This Form
1. Please fill out the form with your payment details, ensuring that all required fields are completed accurately.
2. Select the appropriate options for the payment method, service type, and payment terms.
3. Review the form carefully before submitting it for processing.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): Enter your full name or company name.
* **Client Email** (`client_email`, email, required): Enter your email address for receipt purposes.
* **Client Phone** (`client_phone`, text, optional): Enter your contact number for communication.
* **Company Name** (`company_name`, text, optional): Enter your business name, if applicable.
* **Invoice Number** (`invoice_number`, text, required): Enter the reference invoice number.
* **Payment Date** (`payment_date`, date, required): Enter the date of payment.
* **Service Type** (`service_type`, select_one, required): Select the type of content service provided:
	+ Blog Writing
	+ Social Media Management
	+ Video Production
	+ Graphic Design
	+ Copywriting
	+ Content Strategy
	+ SEO Services
	+ Full Content Package
* **Project Name** (`project_name`, text, required): Enter the name of the content project.
* **Service Period Start** (`service_period_start`, date, required): Enter the start date of the service period.
* **Service Period End** (`service_period_end`, date, required): Enter the end date of the service period.
* **Subtotal** (`subtotal`, number, required): Enter the amount before taxes.
* **Tax Rate** (`tax_rate`, number, required): Enter the applicable tax percentage.
* **Tax Amount** (`tax_amount`, number, required): This field is calculated automatically based on the tax rate and subtotal.
* **Discount** (`discount`, number, optional): Enter any discount applied to the payment.
* **Total Amount Due** (`total_amount`, number, required): This field is calculated automatically based on the subtotal, tax rate, and discount.
* **Currency** (`currency`, select_one, required): Select the payment currency:
	+ USD - US Dollar
	+ EUR - Euro
	+ GBP - British Pound
	+ CAD - Canadian Dollar
	+ AUD - Australian Dollar
* **Payment Method** (`payment_method`, select_one, required): Select the payment method:
	+ Credit Card
	+ Debit Card
	+ PayPal
	+ Bank Transfer
	+ Check
	+ Cash
* **Card Type** (`card_type`, select_one, optional): Select the type of card (only applicable for credit/debit card payments):
	+ Visa
	+ MasterCard
	+ American Express
	+ Discover
* **Billing Address** (`billing_address`, text, required): Enter your billing address for payment purposes.
* **Billing City** (`billing_city`, text, required): Enter your city.
* **Billing State** (`billing_state`, text, required): Enter your state or province.
* **Billing ZIP Code** (`billing_zip`, text, required): Enter your ZIP or postal code.
* **Billing Country** (`billing_country`, select_one, required): Select your country:
	+ United States
	+ Canada
	+ United Kingdom
	+ Australia
	+ Other
* **Payment Terms** (`payment_terms`, select_one, required): Select the agreed payment terms:
	+ Due on Receipt
	+ Net 15
	+ Net 30
	+ Net 60
	+ Custom Terms
* **Special Instructions** (`special_instructions`, text, optional): Enter any special payment instructions.
* **Terms Accepted** (`terms_accepted`, select_one, required): Select whether you agree to the payment terms:
	+ Yes, I Agree
	+ No, I Do Not Agree
