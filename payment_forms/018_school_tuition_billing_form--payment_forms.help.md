<thinking>... This block explains the form purpose and checks for relevance and non-duplication.

The School Tuition Billing Form is designed to collect payment information for students' tuition fees. It is used to track and manage billing details, payment methods, and payment statuses for each student. This form is typically used by school administrators or billing staff to update student records and track payment progress. It is essential to fill out this form accurately to avoid any discrepancies or issues with student payments.

</thinking>

# School Tuition Billing Form - Help Guide
## Purpose
The School Tuition Billing Form is used to collect payment information for students' tuition fees, allowing school administrators or billing staff to manage and track billing details, payment methods, and payment statuses.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the student's billing details, including their name, ID, and billing address.
2. Select the payment method and enter the bank account number (if applicable).
3. Choose the student's contact information (email, phone, or address).
4. Set the billing status (Pending, Paid, Overdue, or Cancelled).
5. Enter the due date for the payment.
6. Add any payment terms (if necessary).
7. Enter the tuition fees for the student.
8. Confirm the total amount owed.

## Field-by-Field Explanation
### Page 1: Billing Details
* **Billing Details** (`billing_details`, text, required: false): Enter the student's billing details.
* **Student Name** (`student_name`, text, required: false): Enter the student's name.
* **Student ID** (`student_id`, number, required: false): Enter the student's ID number.
* **Billing Address** (`billing_address`, text, required: false): Enter the student's billing address.
* **Billing Date** (`billing_date`, date, required: false): Enter the billing date.
* **Billing Amount** (`billing_amount`, number, required: false): Enter the billing amount.

### Page 2: Payment Method and Status
* **Payment Method** (`payment_method`, select_one, required: true): Select the payment method (Visa, Mastercard, American Express).
* **Bank Account** (`bank_account`, text, required: false): Enter the bank account number (if applicable).
* **Bank Account Number** (`bank_account_number`, text, required: false): Enter the bank account number (if applicable).
* **Student Contact Info** (`student_contact_info`, select_multiple, required: true): Choose the student's contact information (Email, Phone, Address).
* **Billing Status** (`billing_status`, select_one, required: true): Set the billing status (Pending, Paid, Overdue, Cancelled).
* **Due Date** (`due_date`, date, required: false): Enter the due date for the payment.
* **Payment Terms** (`payment_terms`, text, required: false): Enter any payment terms (if necessary).
* **Tuition Fees** (`student_tuition_fees`, number, required: false): Enter the tuition fees for the student.
* **Total Amount** (`total_amount`, number, required: false): Confirm the total amount owed.

## Tips
* Make sure to fill out all required fields accurately to avoid any issues with student payments.
* If a student has a specific payment method or contact info, be sure to select it correctly.
* Use the correct billing status to reflect the current payment status.
* Enter the due date and payment terms carefully to ensure timely payments.
* Double-check the tuition fees and total amount to avoid any discrepancies.
