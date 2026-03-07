<thinking>
To create a user-facing help guide for the "New Construction Property Reservation Contract" form, I will review the provided YAML fields and provide a concise explanation of each field's purpose and requirements.

The form appears to be designed for a construction property reservation contract, where the user needs to provide various details about the reservation, including unit selection, buyer details, payment method, and unit price. The form likely serves as a template for documenting and managing reservations.

The form has multiple pages with various fields, including text, select multiple, date, number, select one, and email. Each field has a unique label, hint, and type.

Upon reviewing the fields, I will create a help guide that covers the purpose of the form, how to complete it, and a field-by-field explanation of each element.

</thinking>

# New Construction Property Reservation Contract - Help Guide
## Purpose
This form is designed to collect detailed information about a new construction property reservation contract, ensuring accurate and efficient documentation and management of reservations.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the units for the reservation on page 1.
2. Enter the buyer's details, including name, email, phone number, and address, on page 2.
3. Enter the reservation dates and payment information, including method, amount, and status, on page 3.
4. Review and confirm the reservation details on page 4.

## Field-by-Field Explanation

* **Unit Selection (Page 1)** (`unit_selection`, `select_multiple`, required: false): Choose the units you would like to reserve. Select multiple units if applicable.
* **Buyer Details (Page 2)** (`buyer_details`, `text`, required: true): Enter the buyer's name, email, phone number, and address.
* **Reservation Dates (Page 3)** (`reservation_dates`, `date`, required: true): Enter the dates for the reservation.
* **Payment Method (Page 3)** (`payment_method`, `select_one`, required: false): Choose the payment method (e.g., Yes or No).
* **Payment Amount (Page 3)** (`payment_amount`, `number`, required: true): Enter the payment amount.
* **Unit Number (Page 3)** (`unit_number`, `text`, required: true): Enter the unit number.
* **Payment Terms (Page 3)** (`payment_terms`, `select_one`, required: false): Choose the payment terms (e.g., Yes or No).
* **Reservation Confirmation (Page 3)** (`reservation_confirmation`, `select_one`, required: false): Confirm the reservation.
* **Unit Price (Page 3)** (`unit_price`, `number`, required: true): Enter the unit price.
* **Payment Status (Page 3)** (`payment_status`, `select_one`, required: false): Choose the payment status (e.g., Active or Inactive).
* **Buyer Name (Page 4)** (`buyer_name`, `text`, required: true): Enter the buyer's name.
* **Phone Number (Page 4)** (`phone_number`, `text`, required: true): Enter the buyer's phone number.
* **Buyer Email (Page 4)** (`buyer_email`, `email`, required: true): Enter the buyer's email.
* **Payment Date (Page 4)** (`payment_date`, `date`, required: true): Enter the payment date.
* **Buyer Comments (Page 4)** (`buyer_comments`, `text`, required: false): Enter any comments from the buyer.
* **Buyer Address (Page 4)** (`buyer_address`, `text`, required: true): Enter the buyer's address.
* **Unit Status (Page 4)** (`unit_status`, `select_one`, required: false): Choose the unit status (e.g., Active or Inactive).
* **Other Payment Method (Page 4)** (`payment_method_other`, `text`, required: false): Enter any other payment method used.
* **Other Payment Terms (Page 4)** (`payment_terms_other`, `text`, required: false): Enter any other payment terms used.
* **Payment Terms Description (Page 4)** (`payment_terms_description`, `text`, required: false): Enter a description for the other payment terms.
* **Payment Terms Amount (Page 4)** (`payment_terms_amount`, `number`, required: false): Enter the amount for the other payment terms.
* **Buyer Signature (Page 4)** (`buyer_signature`, `text`, required: false): Enter the buyer's signature.
* **Other Unit Price (Page 4)** (`unit_price_other`, `text`, required: false): Enter any other unit price used.
* **Other Payment Terms Description (Page 4)** (`payment_terms_other_description`, `text`, required: false): Enter a description for the other payment terms.
