# Student Enrollment Form - Help Guide

## Purpose
The Student Enrollment Form is designed to collect information from students who wish to enroll in a course or training program. This form helps the educational institution or organization to confirm student enrollment, gather contact details, and process payments.

## How To Complete This Form
To complete the Student Enrollment Form, follow these steps:

1. Select "Yes" or "No" to confirm your enrollment status.
2. Provide your Student Name.
3. Enter your Email Address.
4. Enter your Phone Number.
5. Select the Course ID you wish to enroll in.
6. Add any Comments about your enrollment (optional).
7. Confirm your Payment preference.
8. Choose your Payment Gateway (if applicable).
9. Enter your Fee (if applicable).
10. Select your Payment Method (if applicable).
11. Add Additional Comments (if applicable).
12. Enter your Date of Birth (if required).
13. Enter your Time of Birth (if required).
14. Finally, submit your enrollment information.

## Field-by-Field Explanation
* **Student Enrollment Form**: 
    * (`student_enrollment_form`, select_one, required: false): This field is used to confirm your enrollment status. Please select "Yes" to confirm your enrollment.
* **Student Name**:
    * (`student_name`, text, required: false): Enter your name as it appears on your identification.
* **Email**:
    * (`email`, email, required: false): Enter your email address for contact purposes.
* **Phone**:
    * (`phone`, text, required: false): Enter your phone number for contact purposes.
* **Course ID**:
    * (`course_id`, select_one, required: false): Select the ID of the course you wish to enroll in.
* **Comments**:
    * (`student_enrollment_form_comments`, note, required: false): Add any comments about your enrollment (optional).
* **Payment**:
    * (`student_enrollment_form_payment`, select_multiple, required: false): Confirm your payment preference.
* **Payment Gateway**:
    * (`student_enrollment_form_payment_gateway`, select_one, required: false): If you selected "Yes" for payment, choose your payment gateway.
* **Fee**:
    * (`student_enrollment_form_fee`, number, required: false): If you selected "Yes" for payment, enter your fee amount.
* **Payment Method**:
    * (`student_enrollment_form_payment_method`, select_one, required: false): If you selected "Yes" for payment, select your payment method.
* **Additional Comments**:
    * (`student_enrollment_form_additional_comments`, note, required: false): Add any additional comments about your enrollment (optional).
* **Date of Birth**:
    * (`date_of_birth`, date, required: false): Enter your Date of Birth (if required).
* **Time of Birth**:
    * (`time_of_birth`, time, required: false): Enter your Time of Birth (if required).
* **Submit**:
    * (`submit`, text, required: false): Submit your enrollment information.

Please ensure to review each field carefully and provide accurate information to complete the form successfully.
