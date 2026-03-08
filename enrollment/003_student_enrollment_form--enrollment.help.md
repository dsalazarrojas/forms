# Student Enrollment Form - Help Guide

## Purpose
This form is used to collect essential details about students enrolling in a course or program.

## How To Complete This Form
- Click on the "Student Enrollment Form" link or button to access the form.
- Fill in all required fields accurately and thoroughly.
- Select the correct payment gateway and payment method for the enrollment.
- Choose the correct status for the student's enrollment.
- Optionally, add any additional comments or notes if necessary.

## Field-by-Field Explanation
- **Student Name** (`student_name`, `text`, required: false): Enter the student's name as it appears on their official ID or documents.
- **Email** (`email`, `text`, required: false): Enter the student's email address.
- **Student Grade** (`student_grade`, `number`, required: false): Enter the student's grade level or year of enrollment.
- **Student Fee** (`student_fee`, `number`, required: false): Enter the fee associated with the student's enrollment.
- **Payment Gateway** (`payment_gateway`, `select_one`, required: true): Select the payment gateway to be used for the student's enrollment. Options: JotForm, Stripe, Square, Authorize.net, PayPal.
- **Payment Method** (`payment_method`, `select_multiple`, required: false): Select the payment method to be used for the student's enrollment. Options: Bank Transfer, Cash, Check, Other.
- **Status** (`student_enrollment_status`, `select_one`, required: true): Choose the status of the student's enrollment. Options: Pending, Approved, Rejected.
- **Status Notes** (`student_enrollment_status_notes`, `note`, required: false): Add any additional comments or notes regarding the student's status.
- **Fee Status** (`student_enrollment_fee_status`, `select_multiple`, required: false): Choose the fee status of the student's enrollment. Options: Paid, Pending, Rejected.
- **Form URL** (`student_enrollment_form_url`, `text`, required: false): Enter the URL of the form.
- **Referral** (`student_enrollment_referral`, `text`, required: false): Enter any referral or reference number.
- **Form ID** (`student_enrollment_form_id`, `text`, required: false): Enter the form ID.
- **Form Version** (`student_enrollment_form_version`, `text`, required: false): Enter the form version.
- **Form Category** (`student_enrollment_form_category`, `text`, required: false): Enter the form category.
