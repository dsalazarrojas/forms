# SAT Course Enrollment Form Template - Help Guide
## Purpose
The SAT Course Enrollment Form is designed to facilitate the enrollment process for students in SAT courses. This form ensures that students can provide necessary information about their course and payment preferences while also enabling administrators to track and manage enrollments efficiently.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the "Sat Course Enrollment Form" field with a clear and concise description of the course.
2. Select the start and end dates for the course in the "start_date" and "end_date" fields, ensuring they are after the current date.
3. Enter the price of the course in the "price" field.
4. Choose a valid payment method from the options provided in the "payment_method" field (PayPal, Stripe, or Cash).
5. Enter the student's name in the "student_name" field.
6. Provide the student's email address in the "student_email" field.
7. Enter the student's phone number in the "student_phone" field.
8. Confirm the enrollment by selecting "Enroll" in the "sat_confirmation" field.

## Field-by-Field Explanation

* **Sat Course Enrollment Form** (`sat_course_enrollment_form`, text, not required): A field for the course title.
	+ Enter a clear and concise description of the course.
* **start_date** (`start_date`, date, not required): The start date of the course.
	+ Select a date after the current date.
* **end_date** (`end_date`, date, not required): The end date of the course.
	+ Select a date after the start date.
* **price** (`price`, number, not required): The price of the course.
	+ Enter a valid number.
* **payment_method** (`payment_method`, select_one, not required): Select a valid payment method (PayPal, Stripe, or Cash).
* **student_name** (`student_name`, text, not required): Enter the student's name.
* **student_email** (`student_email`, email, not required): Enter the student's email address.
	+ Use the format: `example@example.com`.
* **student_phone** (`student_phone`, text, not required): Enter the student's phone number.
* **sat_confirmation** (`sat_confirmation`, select_one, not required): Confirm or cancel the enrollment.
	+ Select "Enroll" to complete the enrollment process.
* **sat_confirmation_email** (`sat_confirmation_email`, email, not required): Enter a custom confirmation email address.
* **sat_confirmation_message** (`sat_confirmation_message`, text, not required): Enter a custom confirmation message.
* **sat_error_message** (`sat_error_message`, text, not required): Enter a custom error message.
* **sat_error_email** (`sat_error_email`, email, not required): Enter a custom error email address.
* **sat_error_subject** (`sat_error_subject`, text, not required): Enter a custom error subject.
* **sat_success_message** (`sat_success_message`, text, not required): Enter a custom success message.
* **sat_error_message** (`sat_error_message`, text, not required): Enter a custom error message.
* **sat_success_subject** (`sat_success_subject`, text, not required): Enter a custom success subject.
