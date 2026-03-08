# exam_fees_payment_form - Help Guide

## Purpose
This form is designed to help students register and pay exam fees. It collects necessary information for payment processing and provides a way to confirm payment status.

## How To Complete This Form

1.  Select a payment method from the available options.
2.  Enter your full name in the `student_name` field.
3.  Enter the exam date in the `exam_date` field.
4.  Enter the amount paid in the `amount_paid` field.
5.  Enter your email in the `email` field.
6.  Enter your phone number in the `phone_number` field.
7.  Confirm payment success or failure in the `payment_success` field.
8.  Enter any error message in the `error_message` field (in case of payment failure).
9.  Confirm your payment status in the `payment_status` field.
10. Enter the exam duration in the `exam_duration` field.
11. Enter the exam fee in the `exam_fee` field.
12. Select the payment currency in the `payment_currency` field (if required).
13. Select a payment method in the `payment_method` field (if required).
14. Enter bank transfer information in the `bank_transfer_info` field (if required).
15. Enter check information in the `check_info` field (if required).
16. Select a payment gateway in the `payment_gateway` field (if required).

## Field-by-Field Explanation

*   **Payment Method** (`payment_method`, `select_one`, required: false): Select your preferred payment method from the available options.
*   **Student Name** (`student_name`, `text`, required: false): Enter your full name.
*   **Exam Date** (`exam_date`, `date`, required: false): Enter the date of the exam.
*   **Amount Paid** (`amount_paid`, `number`, required: true): Enter the amount paid for the exam fee.
*   **Email** (`email`, `email`, required: false): Enter your email address.
*   **Phone Number** (`phone_number`, `text`, required: false): Enter your phone number.
*   **Payment Success** (`payment_success`, `note`, required: true): Confirm payment success or failure.
*   **Error Message** (`error_message`, `note`, required: false): Enter any error message in case of payment failure.
*   **Payment Status** (`payment_status`, `select_one`, required: false): Confirm your payment status.
*   **Exam Duration** (`exam_duration`, `number`, required: true): Enter the exam duration.
*   **Exam Fee** (`exam_fee`, `number`, required: true): Enter the exam fee.
*   **Payment Currency** (`payment_currency`, `text`, required: false): Select the payment currency.
*   **Payment Method** (`payment_method`, `select_one`, required: false): Select a payment method (if required).
*   **Bank Transfer Info** (`bank_transfer_info`, `text`, required: false): Enter bank transfer information (if required).
*   **Check Info** (`check_info`, `text`, required: false): Enter check information (if required).
*   **Payment Gateway** (`payment_gateway`, `select_one`, required: false): Select a payment gateway (if required).
*   **Success Message** (`success_message`, `note`, required: false): Enter a success message after payment (if required).
