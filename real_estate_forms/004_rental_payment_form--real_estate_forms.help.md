<thinking>

This form is intended to collect information for rental payment processing. The fields should be filled out by the renter, but the "Submitted By" field may be used by the landlord or property manager. The form's primary purpose is to record and manage rental payments. This information will be used to track payments and may be stored in a database or other storage system for future reference.

</thinking>

# Rental Payment Form - Help Guide
## Purpose

This form is used to collect and record rental payments. It is intended for renter use but may be completed by the landlord or property manager on their behalf.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the form title to indicate the purpose of this rental payment.
2. Select the appropriate renter details from the drop-down menu.
3. Enter the rent amount.
4. Choose the payment method (e.g. credit card, EFT, check, bank transfer).
5. Select the payment processor (e.g. Stripe, PayPal, bank transfer).
6. Enter the date of the payment.
7. Enter the time of the payment.
8. Add any comments about the payment.
9. Select who submitted the payment (e.g. Landlord, Property Manager, Admin).
10. Enter the date the payment was submitted.
11. Enter the time the payment was submitted.
12. Enter the form ID (not required but for tracking purposes).
13. Enter the assigned tool (not required but for tracking purposes).

## Field-by-Field Explanation

- **Rental Payment Form** (`form_title`, text, optional): Enter the purpose of this rental payment.
- **Renter Details** (`renter_details`, select multiple, optional): Select from the following options: Renters Name, Renters Address, Renters Phone.
- **Rent Amount** (`rent_amount`, number, optional): Enter the amount of rent to be paid.
- **Payment Method** (`payment_method`, select one, optional): Choose from the following options: Credit Card, EFT, Check, Bank Transfer.
- **Payment Processor** (`payment_processor`, select one, optional): Choose from the following options: Stripe, PayPal, Bank Transfer.
- **Payment Date** (`payment_date`, date, optional): Enter the date of the payment.
- **Payment Time** (`payment_time`, time, optional): Enter the time of the payment.
- **Comments** (`comments`, note, optional): Add any comments about this payment.
- **Submitted By** (`submitted_by`, select one, optional): Choose from the following options: Landlord, Property Manager, Admin.
- **Submit Date** (`submit_date`, date, optional): Enter the date this payment was submitted.
- **Submit Time** (`submit_time`, time, optional): Enter the time this payment was submitted.
- **Form ID** (`form_id`, number, optional): Enter the form ID for tracking purposes.
- **Assigned Tool** (`assigned_tool`, text, optional): Enter the assigned tool for tracking purposes.
