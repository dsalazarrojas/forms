<thinking>...

The goal of this form is to enable users to request payments from their peers in a peer-to-peer payment system. This form is intended for users to enter their details, including name, email, and payment information, and then choose how to send the payment request. The form should not be duplicated for the same user within a certain time frame, and users can choose to send the request via email or SMS. After submitting the form, users can confirm or cancel their payment request.

</thinking>

# Peer To Peer Payment Request Form - Help Guide
## Purpose
This form is used to request payments from other users in a peer-to-peer payment system. It's essential to fill out the form accurately and carefully to ensure the payment request is sent successfully.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your First Name in the "First Name" field.
2. Enter your Last Name in the "Last Name" field.
3. Enter your email address in the "Email" field.
4. Enter your phone number in the "Phone Number" field.
5. Select the amount you wish to pay in the "Payment Amount" field.
6. Choose how much to pay (e.g., $10, $20, or $30) in the "How much to pay?" field.
7. Select the date and time you wish to make the payment in the "Date of Payment" and "Time of Payment" fields.
8. Add any additional note about the payment in the "Note" field.
9. Choose how you want to send the payment request, either via "Email" or "SMS" in the "Select how to send" field.
10. Confirm your payment request by selecting "Yes" in the "Confirm Payment Request" field.

## Field-by-Field Explanation
* **First Name** (`name`, `text`, required: false): Enter your first name to identify yourself.
* **Last Name** (`last_name`, `text`, required: false): Enter your last name for identification purposes.
* **Email** (`email_address`, `email`, required: false): Enter your email address where you can be reached.
* **Phone Number** (`phone_number`, `number`, required: false): Enter your phone number for communication purposes.
* **Payment Amount** (`payment_amount`, `number`, required: false): Enter the payment amount you wish to pay.
* **How much to pay?** (`select_one_option`, `select_one`, required: true): Choose the exact amount to be paid (e.g., $10, $20, or $30).
* **Date of Payment** (`date_of_payment`, `date`, required: false): Select the date you plan to make the payment.
* **Time of Payment** (`time_of_payment`, `time`, required: false): Choose the time of payment.
* **Note** (`note`, `note`, required: false): Add any additional note about the payment.
* **Send via Email** (`select_multiple_option_1`, `select_multiple`, required: false): Choose if you want to send the payment request via email.
* **Send via SMS** (`select_multiple_option_2`, `select_multiple`, required: false): Choose if you want to send the payment request via SMS.
* **Submit Payment Request** (`submit_payment_request`, `select_multiple`, required: true): Select how you want to send the payment request (via email or SMS).
* **Confirm Payment Request** (`confirm_payment_request`, `select_one`, required: false): Confirm your payment request to complete the process.
* **Payment Status** (`payment_status`, `select_one`, required: false): This field shows the current status of the payment request (Sent, Received, Cancelled).
