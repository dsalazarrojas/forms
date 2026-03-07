<thinking>
This form is designed to collect information for online food orders. It will be used to process payments and store relevant customer information. This form has multiple fields to capture details about the order, customer, and payment method. The form will guide the user through the process of submitting an order, including selecting the payment method, providing customer contact and address information, and finalizing the order.
</thinking>

# Stripe Online Food Order Form - Help Guide
## Purpose
The Stripe Online Food Order Form is used to process online food orders and collect customer information for payment purposes.

## How To Complete This Form
1. Select the payment method: Choose between Card, Stripe, or Other.
2. Enter the customer email address.
3. Enter the customer phone number.
4. Enter any additional customer notes.
5. Enter the order total, tax, and shipping cost.
6. Enter the payment status (Pending, Paid, or Failed).
7. Enter the date and time of the order (optional).
8. Enter the customer name, street, city, state, country, and zip code (optional).
9. Enter the order ID (optional).

## Field-by-Field Explanation
* **payment_method** (`payment_method`, `select_one`, required): This field allows you to select the payment method for the order. Choose between Card, Stripe, or Other.
* **customer_email** (`customer_email`, `email`, required): Enter the customer's email address.
* **customer_phone** (`customer_phone`, `text`, required): Enter the customer's phone number.
* **customer_note** (`customer_note`, `note`, required): Enter any additional notes about the customer's order.
* **order_total** (`order_total`, `number`, required): Enter the total cost of the order.
* **order_tax** (`order_tax`, `number`, required): Enter the tax cost of the order.
* **order_shipping** (`order_shipping`, `number`, required): Enter the shipping cost of the order.
* **order_status** (`payment_status`, `select_multiple`, required): Select the status of the payment (Pending, Paid, or Failed).
* **date_time** (`date_time`, `date`, optional): Enter the date and time of the order (optional).
* **time** (`time`, `time`, optional): Enter the time of the order (optional).
* **customer_name** (`customer_name`, `text`, optional): Enter the customer's name.
* **customer_street** (`customer_street`, `text`, optional): Enter the customer's street address.
* **customer_city** (`customer_city`, `text`, optional): Enter the customer's city.
* **customer_state** (`customer_state`, `text`, optional): Enter the customer's state.
* **customer_country** (`customer_country`, `text`, optional): Enter the customer's country.
* **customer_postal** (`customer_postal`, `text`, optional): Enter the customer's post office address.
* **customer_state2** (`customer_state2`, `text`, optional): Enter the customer's state ( duplicate field).
* **customer_country2** (`customer_country2`, `text`, optional): Enter the customer's country (duplicate field).
* **customer_zip** (`customer_zip`, `text`, optional): Enter the customer's zip code.
* **order_id** (`order_id`, `text`, optional): Enter the order ID.
* **payment_token** (`payment_token`, `text`, optional): Enter a payment token (optional, not used in this form).
* **total** (`total`, `text`, required): Enter the total cost of the order.
* **customer_notes** (`customer_notes`, `note`, optional): Enter any additional customer notes.
