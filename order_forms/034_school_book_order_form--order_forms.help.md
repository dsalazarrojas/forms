<thinking>
This form is designed to collect information for ordering school books. It will be used by students, teachers, and school administrators to create, manage, and track book orders. This form is not intended to be used for general contact or inquiry purposes. Please only use this form for book orders to avoid unnecessary information duplication and ensure accurate order tracking. Ensure all fields are completed accurately and consistently to facilitate efficient order processing and delivery.
</thinking>

# School Book Order Form - Help Guide
## Purpose
This form is used to collect information for ordering school books.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the student's name in the student name field.
2. Select a date for the order in the order date field.
3. Enter the title of the book ordered in the book title field.
4. Enter the quantity of the book ordered in the book quantity field.
5. Choose the payment method from the payment gateway options (e.g., Stripe, Square, or PayPal).
6. Select the order status from the order status options (e.g., pending, fulfilled, or cancelled).
7. Enter the student's email in the student email field.
8. Enter the school name in the school name field.
9. Enter the teacher's name in the teacher name field.
10. Enter the order ID, created at, updated at, deleted at, created by, updated by, and deleted by fields are for internal system use and should not be completed by the end-user.
11. Enter any additional notes about the order in the order note field.
12. Enter the school email and teacher email fields for contact purposes.
13. Enter the payment amount and payment status fields for order tracking.
14. Finally, select the payment gateway ID and payment transaction status for order tracking.

## Field-by-Field Explanation
- **student name** (student_name, text, required): Enter the name of the student placing the order.
- **order date** (order_date, date, required): Select a date for the order.
- **book title** (book_title, text, required): Enter the title of the book ordered.
- **book quantity** (book_quantity, number, required): Enter the number of books ordered.
- **payment gateway** (payment_gateway, select_multiple, required): Choose a payment method (e.g., Stripe, Square, or PayPal).
- **order status** (order_status, select_one, required): Select the order status (e.g., pending, fulfilled, or cancelled).
- **student email** (student_email, email, required): Enter the student's email for contact purposes.
- **school name** (school_name, text, required): Enter the name of the school.
- **teacher name** (teacher_name, text, required): Enter the teacher's name.
- **order id** (order_id, number, required): Enter a unique order ID (for internal use).
- **created at** (created_at, time, required): System-generated field for order creation date and time.
- **updated at** (updated_at, time, required): System-generated field for order update date and time.
- **deleted at** (deleted_at, time, required): System-generated field for order deletion date and time.
- **created by** (created_by, text, required): System-generated field for order creator.
- **updated by** (updated_by, text, required): System-generated field for order updater.
- **deleted by** (deleted_by, text, required): System-generated field for order deleter.
- **order note** (order_note, note, required): Enter any additional notes about the order.
- **school email** (school_email, email, required): Enter the school email for contact purposes.
- **teacher email** (teacher_email, email, required): Enter the teacher email for contact purposes.
- **payment amount** (payment_amount, number, required): Enter the payment amount.
- **payment status** (payment_status, select_one, required): Select the payment status (e.g., pending, fulfilled, or cancelled).
- **order status history** (order_status_history, select_multiple, required): Select the order status history (e.g., pending, fulfilled, or cancelled).
- **payment gateway id** (payment_gateway_id, number, required): Enter the payment gateway ID.
- **payment transaction id** (payment_transaction_id, text, required): Enter the payment transaction ID.
- **payment transaction status** (payment_transaction_status, select_one, required): Select the payment transaction status (e.g., pending, fulfilled, or cancelled).
- **school** (school, text, required): Enter the name of the school.
- **payment gateway id** (payment_gateway_id, number, required): Enter the payment gateway ID.
- **payment transaction status** (payment_transaction_status, select_one, required): Select the payment transaction status (e.g., pending, fulfilled, or cancelled).
- **payment transaction id** (payment_transaction_id, text, required): Enter the payment transaction ID.

Note: This guide is based on the provided YAML form fields and assumes that all fields are required. Please refer to the YAML for field-specific requirements and constraints.
