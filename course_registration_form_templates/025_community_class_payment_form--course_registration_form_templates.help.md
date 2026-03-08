# Community Class Payment Form - Help Guide

## Purpose
This guide is for the Community Class Payment Form, a tool used to record payments for community classes. The form is designed to gather relevant information from students, including student name, class title, session date, payment amount, payment method, receipt email address, and agreement to policies. This guide will walk you through how to complete the form accurately and effectively.

## How To Complete This Form
To fill out the Community Class Payment Form, follow these steps:

1. Enter the student's name in the "Student name" field.
2. Select the "Class name" of the course or session being paid for.
3. Enter the "Session date" of the payment.
4. Enter the "Payment amount" in the local currency.
5. Select the "Payment method" from the available options (Credit card, Cash, Bank transfer, or Check).
6. Enter the "Receipt email address" where the payment receipt should be sent.
7. If applicable, enter a "Discount code" to receive a promotion.
8. Confirm your agreement to the "Attendance and refund policy" by selecting the appropriate option.

## Field-by-Field Explanation
* **Student name** (`student_name`, text, required): Enter the student's full name.
* **Class name** (`class_name`, text, required): Select the title of the course or session being paid for.
* **Session date** (`session_date`, date, required): Enter the date of the session being paid for.
* **Payment amount** (`payment_amount`, number, required): Enter the amount to be paid in the local currency.
* **Payment method** (`payment_method`, select_one, required): Choose one of the available payment options: Credit card, Cash, Bank transfer, or Check.
* **Receipt email address** (`receipt_email`, email, required): Enter the email address where the payment receipt should be sent.
* **Discount code** (`discount_code`, text, optional): Enter any applicable promotional code for a discount.
* **Attendance and refund policy agreement** (`agreement`, select_one, required): Confirm your agreement to the policies by selecting the appropriate option.
