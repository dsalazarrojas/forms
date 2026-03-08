# Lease Payment Form - Help Guide
## Purpose
The Lease Payment Form is designed to facilitate the process of receiving and processing payments related to leases. This form collects essential information for lease payments, including payment method, amount, and due date.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your landlord's name and address.
2. Enter the unit number, rent amount, and lease term (if applicable).
3. Select the payment method (Check, Credit Card, or Bank Account).
4. Choose a payment date and due date for the payment.
5. Enter your contact information (email and phone number) for communication.
6. Provide any additional information about the payment.
7. Select the payment gateway (PayPal, Stripe, or Bank Transfer).
8. Choose a status for the payment (Pending, Approved, or Declined).

## Field-by-Field Explanation
* **Landlord Name** (1, text, required=False): Enter the name of the landlord associated with this lease.
* **Address** (2, text, required=False): Enter the address associated with this lease.
* **Unit Number** (3, number, required=False): Enter the unit number for this lease.
* **Rent Amount** (4, number, required=False): Enter the amount of rent to be paid.
* **Lease Term** (8, select_multiple, required=False): Select the lease term (Monthly, Quarterly, or Annually) if applicable.
* **Payment Method** (5, select_one, required=False): Select a payment method (Check, Credit Card, or Bank Account).
* **Payment Date** (6, date, required=False): Enter the date of the payment.
* **Due Date** (7, date, required=False): Enter the due date for the payment.
* **Email** (9, email, required=False): Enter your email address for communication related to this lease.
* **Phone** (10, text, required=False): Enter your phone number for communication related to this lease.
* **Note** (11, note, required=False): Provide any additional information about this payment.
* **Payment Gateway** (12, select_one, required=False): Select the payment gateway (PayPal, Stripe, or Bank Transfer).
* **Additional Info** (13, text, required=False): Enter any additional information about this payment.
* **Payment Status** (14, select_one, required=False): Choose the status of the payment (Pending, Approved, or Declined).
