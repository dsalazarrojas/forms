# sat_course_enrollment_form_template - Help Guide
## Purpose
This form is designed for students to register for an SAT course. Please fill it out carefully to provide accurate and detailed information.

## How To Complete This Form
- Read through each field carefully before starting to fill it out.
- Enter accurate and up-to-date information.
- Double-check for any spelling or syntax errors before submitting the form.

## Field-by-Field Explanation

* **Student Info** (`student_info`, `text`, required: false): Fill in your first and last name, your email, and any additional details you think are relevant to your course participation.
* **Contact Info** (`contact_info`, `text`, required: false): Provide the best phone number to contact you at. This helps us ensure smooth communication throughout the course.
* **SAT Score** (`sat_score`, `number`, required: false): If you have taken the SAT, please enter your score.
* **SAT Section** (`sat_section`, `select_one`, required: true): Choose the SAT section(s) you are interested in (Reading and/or Math).
* **PayPal Email** (`paypal_email`, `email`, required: false): If you have a PayPal account and would like to use it as a payment method, enter your email associated with it here.
* **Payment Method** (`payment_method`, `select_one`, required: true): Choose your preferred payment method (PayPal or Stripe).
* **Notes** (`notes`, `note`, required: false): If you have any additional comments or requests, feel free to add them here.
* **Submit** (`submit`, `text`, required: false): After filling out all the necessary fields, click this button to submit your registration.
