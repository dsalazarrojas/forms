<thinking>...</thinking>

# Tuition Payment Form - Help Guide
## Purpose
The Tuition Payment Form is designed to collect detailed information about tuition payments, including payment details, student and guardian information, and payment status. This form ensures that all necessary information is gathered for efficient and accurate processing of tuition payments.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the payment details (Payment Amount, Payment Date, Payment Method).
2. Provide student and guardian information (Student Name, Student Email, Student Phone, Guardian Name, Guardian Phone).
3. Confirm payment details (Payment Confirmation, Confirmation Email, Confirmation Phone).
4. Verify payment status (Payment Status, Payment Notes).

## Field-by-Field Explanation
- **Payment Details** (`payment_details`, text, required)
    This section is used to capture the specific payment details, such as payment amount and payment method.
- **Payment Date** (`payment_date`, date, required)
    Enter the date when the payment was made.
- **Payment Method** (`payment_method`, select_one, required)
    Choose from the available payment methods (Bank, Wire Transfer, Credit Card, Cash).
- **Bank Account Number** (`bank_account_number`, text, required)
    Enter the bank account number associated with the payment.
- **Wire Transfer Routing Number** (`wire_transfer_routing_number`, text, required)
    Enter the wire transfer routing number associated with the payment.
- **Credit Card Number** (`credit_card_number`, text, required)
    Enter the credit card number associated with the payment.
- **Credit Card Expiration Date** (`credit_card_expiration_date`, date, required)
    Enter the expiration date of the credit card used for the payment.
- **Amount Paid** (`amount_paid`, number, required)
    Enter the total amount paid for the payment.
- **Student Name** (`student_name`, text, required)
    Enter the name of the student who made the payment.
- **Student Email** (`student_email`, email, required)
    Enter the email address of the student who made the payment.
- **Student Phone** (`student_phone`, text, required)
    Enter the phone number of the student who made the payment.
- **Guardian Name** (`guardian_name`, text, required)
    Enter the name of the guardian associated with the payment.
- **Guardian Phone** (`guardian_phone`, text, required)
    Enter the phone number of the guardian associated with the payment.
- **Additional Comments** (`additional_comments`, text, optional)
    Enter any additional comments or notes about the payment.
- **Payment Status** (`payment_status`, select_multiple, required)
    Choose from the available payment status options (Received, Partially Received, Not Received).
- **Payment Notes** (`payment_notes`, note, optional)
    Enter any additional payment notes or comments.
- **Payment Confirmation** (`payment_confirmation`, time, required)
    Confirm the payment status at a specific time.
- **Confirmation Email** (`payment_confirmation_email`, email, optional)
    Enter a confirmation email address for the payment.
- **Confirmation Phone** (`payment_confirmation_phone`, text, optional)
    Enter a confirmation phone number for the payment.
- **Payment Confirmation Note** (`payment_confirmation_note`, note, optional)
    Enter any additional confirmation notes or comments.
- **Student Signature** (`student_signature`, note, required)
    Obtain a signature from the student for the payment.
- **Guardian Signature** (`guardian_signature`, note, required)
    Obtain a signature from the guardian for the payment.
- **Payment Approval** (`payment_approval`, select_multiple, required)
    Choose from the available payment approval options (Approved, Pending, Denied).
- **Payment Notes 2** (`payment_notes_2`, note, optional)
    Enter any additional payment notes or comments.
- **Payment Comments** (`payment_comments`, text, optional)

Note: The form requires signatures from both the student and guardian to verify payment.
