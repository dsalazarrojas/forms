<thinking>...</thinking>

The form "curbside_pickup_order_form" is designed to facilitate curbside pickup orders for customers. This form is used to collect information from customers for their curbside pickup orders. It is essential to ensure that the information is accurate to guarantee a smooth and efficient pickup experience. 

## curbside_pickup_order_form - Help Guide

## Purpose
The curbside pickup order form is used to collect information from customers for curbside pickup orders. This includes date and time preferences, order details, and payment information.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the required information in the fields provided.
2. Select the pickup date and time slot that suits you best.
3. Indicate if you would like to order food item 1, 2, or both.
4. Enter your pickup location.
5. Add any additional notes if needed.
6. Enter your email address for contact purposes.
7. Choose your preferred payment method.
8. Enter your name and phone number for contact purposes.
9. Confirm that you are submitting the form.
10. Click submit to complete the form.

## Field-by-Field Explanation

* **curbside**: (`curbside_pickup_order_form_page_1`, text, required/optional) This field is not required but provides a space for customers to enter any additional information related to their curbside pickup order.
* **pickupdate** (`pickup_date`, date, required/true) Select the date you would like to pick up your order.
* **pickuptime** (`pickup_time`, time, required/true) Select the time you would like to pick up your order.
* **pickupertimeslot** (`pickup_time_slot`, select one, required/true) Select the time slot from Morning, Afternoon, or Evening for your curbside pickup.
* **fooditem1** (`food_item1`, select multiple, required/optional) Indicate if you would like to order food item 1.
* **fooditem2** (`food_item2`, select multiple, required/optional) Indicate if you would like to order food item 2.
* **pickuplocation** (`pickup_location`, text, required/optional) Enter the address or location for your curbside pickup.
* **pickupnotes** (`pickup_notes`, note, required/optional) Enter any additional notes for your curbside pickup order.
* **email** (`email`, email, required/true) Enter your email address for contact purposes.
* **paymentmethod** (`payment_method`, select one, required/true) Choose from Credit Card, PayPal, or Stripe as your payment method.
* **customername** (`customer_name`, text, required/true) Enter your name for contact purposes.
* **customerphone** (`customer_phone`, text, required/true) Enter your phone number for contact purposes.
* **formsubmissiontoken** (`form_submission_token`, select one, required/true) Confirm that you are submitting the form.
* **custom1**, **custom2**, **custom3**, **custom4**, **custom5**, **custom6**, **custom7**, **custom8**, **custom9**, **custom10**, **custom11** (`custom_1`, text, required/false) These fields are for custom purposes and are not required.
