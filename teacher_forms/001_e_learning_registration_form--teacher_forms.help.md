<thinking>
Is this form used for registering new students for an e-learning course? The purpose of the form is to collect information from students who wish to enroll in an online course. This form likely serves as a registration form for students to provide their personal details, course information, and payment details for the e-learning course.

Is this form being reused or is it a one-time use form? 

Are all the fields required for a successful submission?

</thinking>

# e_learning_registration_form - Help Guide

## Purpose

The e_learning_registration_form is used for registering new students for an e-learning course.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the student's personal details.
2. Provide the course details.
3. Select the payment options and method.
4. Confirm the payment amount and date.
5. Complete the registration by providing the teacher's contact information.

## Field-by-Field Explanation

* **Student Name (Required)** (`student_name`, `text`): Enter the name of the student enrolling in the course.
* **Student Email (Required)** (`student_email`, `email`): Enter the student's email address.
* **Student Phone (Optional)** (`student_phone`, `text`): Enter the student's phone number.
* **Course Name (Required)** (`course_name`, `text`): Enter the name of the course the student is enrolling in.
* **Student Address (Optional)** (`student_address`, `text`): Enter the student's address.
* **Fee Payment (Required)** (`fee_payment`, `select_one`): Choose how the student intends to pay for the course: No Payment, Partial Payment, or Full Payment.
* **Payment Method (Optional)** (`payment_method`, `select_one`): Choose how the student plans to pay for the course: Bank Transfer, PayPal, or Wire Transfer.
* **Payment Amount (Optional)** (`payment_amount`, `number`): Enter the payment amount if not paying fully or partially.
* **Payment Date (Optional)** (`payment_date`, `date`): Enter the date of payment if not paying fully or partially.
* **Teacher Name (Required)** (`teacher_name`, `text`): Enter the name of the teacher providing the course.
* **Teacher Email (Optional)** (`teacher_email`, `email`): Enter the teacher's email address.
* **Teacher Phone (Optional)** (`teacher_phone`, `text`): Enter the teacher's phone number.
* **Course Start Date (Required)** (`course_start_date`, `date`): Enter the start date of the course.
* **Course Duration (Required)** (`course_duration`, `number`): Enter the duration of the course in numbers.
* **Course Status (Optional)** (`course_status`, `select_one`): Choose the current status of the course: Active, Not Active, or Finished.
* **Course Category (Required)** (`course_category`, `text`): Enter the category of the course.
