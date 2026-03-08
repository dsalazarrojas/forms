# Stripe ACH Hotel Reservation Form - Help Guide

## Purpose
The Stripe ACH Hotel Reservation Form is used to collect payment and reservation information from customers for hotel stays. This form is used to ensure accurate and timely payments for room reservations.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name, Last Name, and Email address in the relevant fields.
2. Enter your Phone number for easy contact.
3. Select the dates for your Checkin and Checkout from the calendar.
4. Enter the Payment Amount for your stay.
5. Choose your Payment Method (Stripe or Bank Account).
6. Confirm your Payment method by selecting "Yes" or "No" (if you are using Stripe).
7. Accept the Terms and Conditions by selecting "Agree" or "Decline".

## Field-by-Field Explanation

* **First Name (<span class="code">first_name</span>, text, required): Enter your first name.
* **Last Name (<span class="code">last_name</span>, text, required): Enter your last name.
* **Email (<span class="code">email</span>, email, required): Enter your email address.
* **Phone (<span class="code">phone</span>, text, required): Enter your phone number.
* **Checkin (<span class="code">checkin</span>, date, required): Select the date of checkin for your stay.
* **Checkout (<span class="code">checkout</span>, date, required): Select the date of checkout for your stay.
* **Payment Amount (<span class="code">payment_amount</span>, number, required): Enter the amount for your stay.
* **Payment Method (<span class="code">payment_method</span>, select_one, required): Select either Stripe or Bank Account as your payment method.
* **Confirm Payment (<span class="code">confirm_payment</span>, select_one, required): Confirm your payment method by selecting "Yes" or "No".
* **Terms and Conditions (<span class="code">terms_and_conditions</span>, note, required): Read and agree to the terms and conditions of your stay.
* **Confirm Terms and Conditions (<span class="code">confirm_terms</span>, select_one, required): Confirm that you have read and agree to the terms and conditions by selecting "Agree" or "Decline".
* **Submit (<span class="code">submit</span>, select_multiple, optional): Submit your form to complete your payment and reservation. (Select "Yes" or "No" to submit, but note that this field is not required.)
