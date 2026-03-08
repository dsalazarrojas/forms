<thinking>
This form seems to be an online order form for a Fresh Market store or a similar e-commerce platform. It's designed to collect information from customers for placing orders. Upon reviewing the form YAML, I noticed that it's a multi-page form with various fields for order information, payment details, pickup information, and contact info. The form appears to be designed for customers to provide their order requests, payment methods, and personal contact information. There might be some duplication of fields, such as the "order_info" and "order_notes" fields, which could be merged into a single field for clarity. However, the provided information is sufficient for creating a user-facing help guide.
</thinking>

# Fresh Market Online Order Form - Help Guide

## Purpose
The Fresh Market Online Order Form is designed for customers to submit their orders and provide required information for processing their orders.

## How To Complete This Form

1. Fill out the form carefully, ensuring all required fields are completed.
2. Select the correct options for "select_one" field.
3. Review the form before submitting to ensure accuracy and completeness.
4. Click the "submit" button to send your order request.

## Field-by-Field Explanation

* **order_form** (`order_form`, text, not required): Enter your order request here. This field should be a brief description of the items you want to order.
* **delivery_info** (`delivery_info`, text, not required): Provide any special delivery instructions or details for your order.
* **card_details** (`card_details`, text, not required): Enter your credit card number, expiration date, and security code for payment.
* **payment_info** (`payment_info`, text, not required): Enter any additional payment information or notes.
* **pickup_info** (`pickup_info`, text, not required): Provide pickup details, such as date and time.
* **order_items** (`order_items`, text, not required): List the items you're ordering.
* **order_notes** (`order_notes`, text, not required): Add any additional notes or comments about your order.
* **total** (`total`, text, not required): Enter the total amount of your order.
* **submit** (`submit`, text, not required): Review and click to submit your order request.
* **email** (`email`, text, not required): Enter your email address.
* **phone** (`phone`, text, not required): Enter your phone number.
* **date** (`date`, text, not required): Enter the date for your order.
* **time** (`time`, text, not required): Enter the time for your delivery.
* **note** (`note`, text, not required): Add any additional notes or comments.
* **select_one** (`select_one`, select_one, not required): Select one of the provided options for your order.

Note: Some fields might be optional or redundant, but they are provided here for consistency with the original form structure. Ensure to fill them out carefully, if applicable.
