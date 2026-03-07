# Stripe Virtual Course Registration Form - Help Guide
## Purpose
This form is designed to collect information about students registering for a virtual course. The form ensures that students provide necessary details such as their email address, payment information, and course preferences.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the title of the course in the "Course Title" field.
2. Provide a brief description of the course in the "Course Description" field.
3. Enter your instructor's name in the "Instructor Name" field.
4. Enter your email address in the "Student Email" field. This field is required.
5. Enter the price of the course in the "Course Price" field. This field is required.
6. Choose the payment method from the "Payment Method" field. Options are Stripe and PayPal. This field is required.
7. Enter the payment amount in the "Payment Amount" field. This field is required.
8. Confirm your payment method in the "Payment Method Confirmation" field. Options are Stripe and PayPal.
9. Enter your Stripe publishable key in the "Stripe Publishable Key" field. This field is required.
10. Enter your Stripe API key in the "Stripe API Key" field. This field is required.
11. Enter your name in the "Student Name" field. This field is required.
12. Enter your phone number in the "Student Phone" field.
13. Choose a date for enrollment in the "Enrollment Date" field.
14. Enter the duration of the course in the "Course Duration" field.
15. Choose a level of the course from the "Course Level" field. Options are Beginner, Intermediate, and Advanced. This field is required.
16. Enter your address in the "Student Address" field.
17. Choose a category of the course from the "Course Category" field. Options are Online, In-Person, and Hybrid. This field is required.
18. Choose a state where you are located in the "Student State" field. Options are California, New York, and Florida. This field is required.
19. Choose your country in the "Student Country" field. Options are United States, Canada, and Mexico. This field is required.
20. Enter your postal code in the "Student Postal Code" field. This field is required.
21. Enter your price in the "Student Price" field. This field is required.
22. Choose the language of the course in the "Course Language" field. Options are English, Spanish, and French. This field is required.
23. Choose your time zone in the "Student Timezone" field. Options are PST, EST, and CST. This field is required.

## Field-by-Field Explanation
* **Course Title** (`course_title`, `text`, optional): Enter a title for the course.
* **Course Description** (`course_description`, `text`, optional): Enter a brief description of the course.
* **Instructor Name** (`instructor_name`, `text`, optional): Enter your instructor's name.
* **Student Email** (`student_email`, `email`, required): Enter your email address, which will be used for communication.
* **Course Price** (`course_price`, `number`, required): Enter the price of the course.
* **Payment Method** (`payment_method`, `select_one`, required): Choose the payment method you prefer (Stripe or PayPal).
* **Payment Amount** (`payment_amount`, `number`, required): Enter the amount to be paid.
* **Payment Method Confirmation** (`payment_method_confirmation`, `select_one`, optional): Confirm your payment method (Stripe or PayPal).
* **Stripe Publishable Key** (`stripe_publishable_key`, `text`, required): Enter your Stripe publishable key.
* **Stripe API Key** (`stripe_api_key`, `text`, required): Enter your Stripe API key.
* **Student Name** (`student_name`, `text`, required): Enter your name.
* **Student Phone** (`student_phone`, `text`, optional): Enter your phone number.
* **Enrollment Date** (`enrollment_date`, `date`, optional): Choose a date for enrollment.
* **Course Duration** (`course_duration`, `text`, optional): Enter the duration of the course.
* **Course Level** (`course_level`, `select_one`, required): Choose the level of the course (Beginner, Intermediate, or Advanced).
* **Student Address** (`student_address`, `text`, optional): Enter your address.
* **Course Category** (`course_category`, `select_one`, required): Choose the category of the course (Online, In-Person, or Hybrid).
* **Student State** (`student_state`, `select_one`, required): Choose the state where you are located (California, New York, or Florida).
* **Student Country** (`student_country`, `select_one`, required): Choose your country (United States, Canada, or Mexico).
* **Student Postal Code** (`student_postal_code`, `text`, required): Enter your postal code.
* **Payment Method Note** (`payment_method_note`, `note`, optional): Enter a note about your payment method.
* **Stripe Price Currency** (`stripe_price_currency`, `select_one`, required): Choose the currency of the course price (USD, EUR, or JPY).
* **Student Price** (`student_price`, `number`, required): Enter the price you are paying for the course.
* **Course Language** (`course_language`, `select_one`, required): Choose the language of the course (English, Spanish, or French).
* **Student Timezone** (`student_timezone`, `select_one`, required): Choose your time zone (PST, EST, or CST).

## Tips
* Make sure to fill in all required fields.
* Double-check your information before submitting the form.
* Ensure that your payment method and payment amount match.
