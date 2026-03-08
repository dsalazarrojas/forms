# Online Course Billing Form - Help Guide
## Purpose

The Online Course Billing Form is used to collect and track payment information for customers taking online courses. This form helps to ensure that accurate and up-to-date payment records are maintained.

## How To Complete This Form

1. Select your payment method from the options provided.
2. Enter the customer's name.
3. Enter the customer's email address.
4. Enter the course title.
5. Enter the billing address.
6. Enter the amount due.
7. Select the payment status.
8. Enter the payment date and time.
9. Add any additional notes about the payment.
10. Enter the customer's phone number.

## Field-by-Field Explanation

* **Payment Method** (`payment_method`, `select_one`, required: false): Select the method of payment, such as "Yes" or "No", indicating whether the customer has made a payment.
* **Customer Name** (`customer_name`, `text`, required: false): Enter the customer's name for identification purposes.
* **Customer Email** (`customer_email`, `email`, required: false): Enter the customer's email address for communication purposes.
* **Course Title** (`course_title`, `text`, required: false): Enter the title of the course the customer is paying for.
* **Billing Address** (`billing_address`, `text`, required: false): Enter the customer's billing address for payment processing.
* **Amount Due** (`amount_due`, `number`, required: false): Enter the amount the customer owes in numerical format.
* **Payment Status** (`payment_status`, `select_one`, required: false): Select the status of the payment, such as "Active" or "Inactive".
* **Payment Date** (`payment_date`, `date`, required: false): Enter the date the payment was made.
* **Payment Time** (`payment_time`, `time`, required: false): Enter the time the payment was made.
* **Notes** (`notes`, `note`, required: false): Add any additional notes or comments about the payment.
* **Customer Phone** (`customer_phone`, `text`, required: false): Enter the customer's phone number for contact purposes.
