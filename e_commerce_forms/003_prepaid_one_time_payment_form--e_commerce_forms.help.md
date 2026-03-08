# Prepaid One Time Payment Form - Help Guide
## Purpose
This form is designed to collect information from customers for a one-time prepaid payment. It is intended to be a flexible and adaptable tool for various use cases, allowing customers to provide their input and feedback.

## How To Complete This Form
1.  Fill out the form in the following order: customer information, order information, payment method, payment details, shipping address, billing address, order details, order date, order time, order status, customer consent, additional customer consent, comments, notes, and customer comments.
2.  Ensure that all required fields are filled out before submitting the form.
3.  Select only one option for payment method, order status, and customer consent fields.
4.  Provide clear and concise answers for all text fields.
5.  Review and validate customer input before submitting it to the relevant departments or teams.

## Field-by-Field Explanation
*  **Customer Info** (`customer_info`, `text`, required: `false`): This field collects the customer's personal details. Please fill out the customer's name and other relevant information.
*  **Order Info** (`order_info`, `text`, required: `false`): This field gathers information about the order. Please provide a clear and concise description of the order.
*  **Payment Method** (`payment_method`, `select_one`, required: `false`): This field asks you to select the payment method used for the order. Please choose only one option:
	+  Bank Transfer (ACH)
	+ Credit/Debit Card (CC)
	+ PayPal (PP)
	+ Wire Transfer (WT)
	+ Other (OTH)
*  **Payment Details** (`payment_details`, `text`, required: `false`): This field collects additional payment details. Please provide clear and concise information about the payment.
*  **Shipping Address** (`shipping_address`, `text`, required: `false`): This field gathers the customer's shipping address. Please provide a clear and concise address.
*  **Billing Address** (`billing_address`, `text`, required: `false`): This field collects the customer's billing address. Please provide a clear and concise address.
*  **Order Details** (`order_details`, `text`, required: `false`): This field asks for more information about the order. Please provide clear and concise details.
*  **Order Date** (`order_date`, `date`, required: `false`): This field gathers the order date. Please select a valid date using the date picker.
*  **Order Time** (`order_time`, `time`, required: `false`): This field asks for the order time. Please select a valid time using the time picker.
*  **Order Status** (`order_status`, `select_one`, required: `false`): This field asks you to select the order status. Please choose only one option:
	+ Active
	+ Inactive
	+ Pending
*  **Customer Consent** (`customer_consent`, `select_multiple`, required: `false`): This field asks you to select your consent status. Please choose only one option:
	+ I have read, understand, and agree to the terms of this service
	+ I have not read, do not understand, and do not agree to the terms of this service
*  **Additional Customer Consent** (`customer_consent_2`, `select_multiple`, required: `false`): This field asks you to select your consent status. Please choose only one option:
	+ I have not read, do not understand, and do not agree to the terms of this service
	+ I have read, understand, and agree to the terms of this service
*  **Comments** (`order_comments`, `text`, required: `false`): This field asks for any comments about the order. Please provide clear and concise comments.
*  **Notes** (`order_notes`, `text`, required: `false`): This field collects additional notes about the order. Please provide clear and concise notes.
*  **Customer Comments** (`customer_comments`, `text`, required: `false`): This field gathers comments from the customer. Please provide clear and concise comments.
*  **Form Submission ID** (`form_submission_id`, `text`, required: `false`): This field is automatically generated and not required to be filled out.

## Tips
*  Please ensure that you fill out the form consistently and in the recommended order.
*  Please select only one option for fields that have multiple options.
*  Please provide clear and concise answers for all text fields.
*  Please review and validate customer input before submitting it to the relevant departments or teams.
