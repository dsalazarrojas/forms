<thinking>

The Rental Payment Form appears to be a form used for tracking rental payments, capturing information about the payment date, amount, method, and status, as well as details about the tenant and landlord. This form is likely used by property managers or landlords to manage rental payments and track payment history. To confirm, this form is intended for tracking and recording payment-related information for rental properties.

</thinking>

# Rental Payment Form - Help Guide
## Purpose
The Rental Payment Form is used for tracking rental payments, capturing payment details for each tenant, and updating payment status.

## How To Complete This Form
1. Fill in the required fields: `payment_date`, `payment_amount`, `payment_method`, `payment_status`, `tenant_name`, `tenant_email`, `rental_address`, `landlord_info`, `rent_dure_date` (note: corrected typo), `payment_currency`, `payment_processor`, `landlord_phone`, `tenant_phone`, and `payment_notes`.
2. Select payment method from the options provided in the `payment_method` field.
3. Choose applicable options for `rental_agreement`, `payment_status`, and `payment_currency` fields.
4. Enter any additional comments or notes in the `payment_notes` field.

## Field-by-Field Explanation

* **Payment Date (id: 1)** (`date`, required): Enter the payment date in the format YYYY-MM-DD.
* **Tenant Name (id: 2)** (`text`, optional): Enter the name of the tenant.
* **Payment Amount (id: 3)** (`number`, optional): Enter the amount paid.
* **Payment Method (id: 4)** (`select_one`, optional): Select the payment method used (e.g., Visa, Mastercard, Amex, Discover, PayPal, Cash).
* **Rental Agreement (id: 5)** (`select_multiple`, optional): Select the type of rental agreement (e.g., Rent, Lease, Contract).
* **Landlord Info (id: 6)** (`note`, optional): Enter any additional information about the landlord.
* **Rent Due Date (id: 7)** (`date`, optional): Enter the due date for the rent payment.
* **Payment Status (id: 8)** (`select_one`, optional): Select the current payment status (e.g., Paid, Overdue, Pending).
* **Payment Notes (id: 9)** (`text`, optional): Enter any comments or notes about the payment.
* **Tenant Email (id: 10)** (`email`, optional): Enter the email address of the tenant.
* **Currency (id: 11)** (`select_multiple`, optional): Select the currency of the payment (e.g., Yes, No).
* **Rental Address (id: 12)** (`text`, optional): Enter the address of the rental property.
* **Landlord Phone (id: 13)** (`text`, optional): Enter the phone number of the landlord.
* **Payment Processor (id: 14)** (`select_one`, optional): Select the payment processor used (e.g., Stripe, Square, Wave).
* **Tenant Phone (id: 15)** (`text`, optional): Enter the phone number of the tenant.

## Tips

* Make sure to fill in all required fields.
* Double-check the payment method and status to ensure accuracy.
* Use the `rental_agreement` field to track different types of rental agreements.
* Enter any additional comments or notes in the `payment_notes` field to provide context.
