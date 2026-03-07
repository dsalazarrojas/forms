<thinking>
This form is for users to provide payment information for an e-learning program. The form collects various details such as payment method, payment date, and total amount. This form will likely be used by users to enroll in or pay for an online course. Please ensure that the form is not being used in a context where payment information is not relevant or necessary. It's also essential to review the form's required fields and options to avoid duplication of effort.
</thinking>

# e-learning-program-payment-form - Help Guide
## Purpose
This form is for users to provide payment information for an e-learning program. It helps the administrator to collect payment details for the program.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "Payment Details" page with any relevant payment information you have. This field is optional.
2. Enter your first name in the "First Name" field.
3. Enter your last name in the "Last Name" field.
4. Provide your email address in the "Email" field (format: example@example.com).
5. Enter your phone number in the "Phone" field.
6. Select your preferred payment method from the list in the "Payment Method" field.
7. Choose a payment date from the calendar in the "Payment Date" field.
8. Choose a payment time from the time picker in the "Payment Time" field.
9. Add any additional notes about your payment in the "Notes" field.
10. Confirm your preferred payment method(s) by selecting it/them in the "Confirm Payment" field.
11. Finally, enter the total amount you want to pay.

## Field-by-Field Explanation

* **Payment Details** (`payment_details`, text, optional): This field is for any additional information about your payment.
* **First Name** (`first_name`, text, optional): Enter your first name as it appears on your identification.
* **Last Name** (`last_name`, text, optional): Enter your last name as it appears on your identification.
* **Email** (`email`, email, optional): Enter a valid email address in the format example@example.com.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Payment Method** (`payment_method`, select_one, optional): Select your preferred payment method from the list: Card, PayPal, or Wire Transfer.
* **Payment Date** (`payment_date`, date, optional): Choose the date you plan to make the payment.
* **Payment Time** (`payment_time`, time, optional): Choose the time you plan to make the payment.
* **Notes** (`notes`, note, optional): Add any additional comments or notes about your payment.
* **Confirm Payment** (`confirm_payment`, select_multiple, optional): Confirm your preferred payment method(s) from the list: Card, PayPal, or Wire Transfer.
* **Total Amount** (`total_amount`, number, optional): Enter the total amount you want to pay.
