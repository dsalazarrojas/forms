# exam_fees_payment_form - Help Guide
## Purpose
This form is for staff and students to enter payment details for exam fees.
## How To Complete This Form
To complete the form, please follow these steps:

1. Select the payment method (bank transfer, credit card, mobile pay) for the exam fee payment.
2. Enter the payment amount.
3. Confirm whether the payment is made (true or false).
4. Enter the date of the payment.
5. Enter the time of the payment.
6. If applicable, select the exam session (morning, after noon, or evening) and exam day (Monday to Sunday).
7. Enter the exam session time.
8. Enter the exam code.
9. Enter any additional notes.
10. Select the payment ID and mode (online or offline).
11. Enter the payment date and time.
12. Select the exam session (morning, after noon, or evening).
13. Select the exam day (Monday to Sunday).
14. Enter the exam session time.

## Field-by-Field Explanation
* **exam_fees_payment** (`exam_fees_payment`, number, required): This field is not directly user-facing; it's a title field.
* **student_name** (`student_name`, text, optional): Enter your name as a student or staff member.
* **student_email** (`student_email`, email, optional): Enter your email address for verification and communication.
* **payment_method** (`payment_method`, select_one, required): Select the method of payment (bank transfer, credit card, mobile pay).
* **amount** (`amount`, number, required): Enter the amount of the exam fee.
* **confirm** (`confirm`, select_one, required): Confirm whether the payment is made (true or false).
* **date** (`date`, date, required): Enter the date of the payment.
* **time** (`time`, time, required): Enter the time of the payment.
* **note** (`note`, note, required): Enter any additional notes about the payment.
* **phone** (`phone`, text, optional): (This field seems to be intended for students' contact information, but its purpose is unclear.)
* **email** (`email`, email, required): Enter your email address for communication and verification.
* **payment_status** (`payment_status`, select_multiple, optional): Select the status of the payment (pending, paid, cancelled).
* **user** (`user`, select_multiple, optional): Select your user type (staff or student).
* **user_name** (`user_name`, text, required): Enter your name.
* **amount_paid** (`amount_paid`, number, optional): Enter the amount paid.
* **exam_type** (`exam_type`, select_one, optional): Select the type of exam (online or offline).
* **exam_code** (`exam_code`, text, required): Enter the exam code.
* **notes** (`notes`, note, optional): Enter any additional notes about the exam.
* **payment_id** (`payment_id`, select_one, required): Select the payment ID.
* **payment_mode** (`payment_mode`, select_one, required): Select the mode of payment (online or offline).
* **payment_date** (`payment_date`, date, required): Enter the payment date.
* **payment_time** (`payment_time`, time, required): Enter the payment time.
* **exam_session** (`exam_session`, select_one, optional): Select the exam session (morning, after noon, or evening).
* **exam_day** (`exam_day`, select_one, required): Select the day of the exam (Monday to Sunday).
* **exam_session_time** (`exam_session_time`, time, optional): Enter the exam session time.
