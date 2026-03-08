# Lesson Booking And Payment Survey - Help Guide
## Purpose
The Lesson Booking And Payment Survey form is used to book lessons and track payments in an educational setting.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the date and time you would like to book the lesson.
2. Enter your name as the student booking the lesson.
3. Provide any additional details about the booking in the booking details field.
4. Choose the method of payment you will use (e.g. PayPal, credit card).
5. Enter the amount to be paid for the lesson.
6. Rate the quality of the lesson from one to five stars.

## Field-by-Field Explanation
* **Booking Date** (`booking_date`, date, required/optional): The date on which the lesson is to be booked. Enter the date in YYYY-MM-DD format.
* **Booking Time** (`booking_time`, time, required/optional): The time at which the lesson is to be booked.
* **Student Name** (`student_name`, text, required/optional): The name of the student booking the lesson. Please enter your name as it appears on your records.
* **Booking Details** (`booking_details`, note, required/optional): A note field for students to provide any additional details about the booking.
* **Payment Method** (`payment_method`, select_one, required/optional): The method of payment used for the lesson (e.g. PayPal, credit card).
* **Payment Amount** (`payment_amount`, number, required/optional): The amount to be paid for the lesson. Please enter the amount in a decimal format (e.g. 10.99).
* **Rating** (`rating`, select_multiple, required/optional): A field to rate the lesson's quality from one to five stars.
