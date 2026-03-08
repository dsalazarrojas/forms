# Camp Registration Invoice - Help Guide
## Purpose
This form is used to issue an invoice for a camp registration, capturing billing details and payment status for the parents or customers.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the invoice number and billing details in the first section.
2. Fill in the billing details of the customer, including their name, email address, and phone number.
3. Enter the name(s) of the camper(s) covered by this invoice.
4. Enter the total base registration fee and any activity add-ons or discounts applied.
5. Select the payment status of the invoice, which can be Unpaid - Pending, Partially Paid, Paid in Full, or Overdue.
6. Enter the invoice issue date and due date.
7. Add any billing notes or special instructions if necessary.
8. Finally, select the method of payment used, if already paid or the preferred payment method.

## Field-by-Field Explanation

* **Invoice Number** (`invoice_number_internal`, text, required): Enter the unique invoice number for this camp registration.
* **Bill To (Customer Name)** (`bill_to_name`, text, required): Enter the name of the customer or parent who is being billed.
* **Billing Email Address** (`billing_email_invoice`, email, required): Enter the email address where the invoice will be delivered and received.
* **Billing Phone Number** (`billing_phone_invoice`, text, required): Enter the phone number of the customer or parent.
* **Name(s) of Campers Covered** (`camper_names_invoice`, text, required): Enter the name(s) of the child(ren) registered for the camp program.
* **Base Registration Fee Total** (`base_registration_fee_total`, number, required): Enter the total base registration fee for the camp program.
* **Activity Add-ons Total** (`activity_add_ons_total`, number, optional): Enter any extra fee for activity sessions or gear.
* **Discounts Applied (Credit)** (`discounts_applied_total`, number, optional): Enter any discounts applied for early bird, sibling, or scholarship.
* **Total Amount Due** (`total_amount_due_invoice`, number, required): Enter the final balance due for the camp registration.
* **Payment Status** (`payment_status_invoice`, select_one, required): Select the payment status of the invoice, which can be Unpaid - Pending, Partially Paid, Paid in Full, or Overdue.
* **Invoice Issue Date** (`invoice_date_issued`, date, required): Enter the date when the invoice was issued.
* **Invoice Due Date** (`invoice_due_date`, date, required): Enter the date by which the invoice is due for payment.
* **Billing Notes or Special Instructions** (`billing_special_notes`, text, optional): Add any special notes or instructions for the billing process.
* **Method of Payment** (`payment_method_used_invoice`, select_one, optional): Select the method of payment used, which can be Credit Card, Bank Transfer, Check, or Cash.
