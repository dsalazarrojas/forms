# HandMade Bag Order Form Worldpay UK Payment Form - Help Guide
## Purpose
This form is used for customers to place orders for handmade bags, and it ensures secure payment processing and order fulfillment.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide payment details, including the selected payment method and currency.
2. Choose the type of order (handmade, handmade and printed, handmade and custom, wholesale, or custom).
3. Enter customer details, including email, phone, and website (optional).
4. Specify the order total and currency.
5. Select the billing address.
6. Choose the delivery method (standard, expedited, express, free, or other).
7. Enter the shipping cost (optional).
8. Provide the delivery date and time (optional).
9. Enter any additional notes about the order.
10. Confirm the payment status (pending, paid, cancelled, failed, refunded, or other).
11. Select the payment gateway (Stripe, PayPal, Square, Authorise, Payoneer, or Paymaya).

## Field-by-Field Explanation

* **Payment method** (`payment_method`, select_one, required): Select the payment method from the available options, including Worldpay UK, other, PayPal, Stripe, Apple Pay, Google Pay, Amazon Pay, Facebook Pay, Cash, Bank transfer, Cheque, Mobile wallet, or Cryptocurrency.
* **Order type** (`order_type`, select_multiple, required): Choose the type of order, which can be handmade, handmade and printed, handmade and custom, wholesale, or custom.
* **Currency** (`currency`, select_one, required): Select the currency for the order, which can be GBP, EUR, USD, CAD, AUD, CNY, JPY, KRW, TWD, MXN, or COP.
* **Billing address** (`billing_address`, text, required): Enter the billing address of the customer.
* **Delivery method** (`delivery_method`, select_multiple, required): Choose the delivery method, which can be standard, expedited, express, free, or other.
* **Shipping cost** (`shipping_cost`, number, optional): Enter the shipping cost (optional).
* **Delivery date** (`delivery_date`, date, optional): Provide the delivery date (optional).
* **Delivery time** (`delivery_time`, time, optional): Enter the delivery time (optional).
* **Notes** (`notes`, text, optional): Add any additional notes about the order (optional).
* **Payment status** (`payment_status`, select_one, required): Confirm the payment status, which can be pending, paid, cancelled, failed, refunded, or other.
* **Email** (`email`, email, optional): Enter the customer's email address (optional).
* **Phone** (`phone`, text, optional): Enter the customer's phone number (optional).
* **Website** (`website`, text, optional): Enter the customer's website (optional).
* **Order number** (`order_number`, number, optional): Enter the order number (optional).
* **Created date** (`created_date`, date, optional): Provide the created date (optional).
* **Updated date** (`updated_date`, date, optional): Provide the updated date (optional).
* **User ID** (`user_id`, number, optional): Enter the user ID (optional).
* **Payment gateway** (`payment_gateway`, select_one, required): Select the payment gateway, which can be Stripe, PayPal, Square, Authorise, Payoneer, or Paymaya.
* **Payment method other** (`payment_method_other`, text, optional): Enter any other payment method (optional).
* **Payment status other** (`payment_status_other`, text, optional): Enter any other payment status (optional).
