# Wholesale Product Order Form - Help Guide
## Purpose
The Wholesale Product Order Form is used to capture essential information for wholesale product orders. This form is designed to help merchants provide accurate and detailed information for their orders.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the Order Form section with the required information.
2. Provide product details in the Product Details section.
3. Enter contact details, including email and phone number.
4. Add any additional order notes or comments.
5. Select the payment method and date for the order.
6. Enter the order total, if applicable.
7. Update the order status.
8. Enter the customer order number.
9. Confirm if the order form has been submitted.

## Field-by-Field Explanation

* **Order Form** (`order_form`, `text`, optional): Enter the order description.
* **Product Details** (`product_details`, `text`, optional): Provide a detailed description of the product being ordered.
* **Contact Details** (`contact_details`, `text`, optional): Enter the merchant's contact information, including name and address.
* **Order Notes** (`order_notes`, `text`, optional): Add any additional comments or notes about the order.
* **Date** (`order_date`, `date`, optional): Enter the date of the order.
* **Total** (`order_total`, `number`, optional): Enter the total amount of the order, if applicable.
* **Payment Method** (`payment_method`, `select_one`, optional): Select the payment method (Bank Transfer, PayPal, Credit Card).
* **Merchant Notes** (`merchant_notes`, `note`, optional): Add any additional comments or notes about the merchant.
* **Email** (`email`, `email`, optional): Enter the merchant's email address.
* **Phone Number** (`phone_number`, `text`, optional): Enter the merchant's phone number.
* **Status** (`order_status`, `select_multiple`, optional): Select the status of the order (pending, pending payment, pending ship, on hold, shipped, cancelled).
* **Customer Order Number** (`customer_order_number`, `number`, optional): Enter the customer order number.
* **Order Form Submitted** (`order_form_submitted`, `select_one`, optional): Confirm if the order form has been submitted (True or False).
