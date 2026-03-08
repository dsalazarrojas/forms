# Online Course Payment Form - Help Guide

## Purpose
This form is designed to process online course payments. To use this form, please ensure that the course you wish to enroll in is in an active state and not fully paid.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the payment method (Bank transfer, Credit card, or PayPal)
2. Enter the amount you are paying for the course
3. Provide your student information: name, email, phone number, and address
4. Provide your instructor information: name, email, phone number, and address (only if applicable)
5. Select the course details: name, start date, end date, status, id, type, level, and description
6. Enter any additional comments or comments
7. Select the payment status (Pending, Paid, or Refunded)

## Field-by-Field Explanation

### 1. Course Name
* `course_name` (`text`, required: false): Enter the name of the course you are paying for.

### 2. Payment Method
* `payment_method` (`select_one`, required: false): Select the method of payment (Bank transfer, Credit card, or PayPal)

### 3. Payment Amount
* `amount_paid` (`number`, required: false): Enter the amount you are paying for the course.

### 4. Student Name
* `student_name` (`text`, required: false): Enter your name as a student.

### 5. Student Email
* `student_email` (`email`, required: false): Enter your email address.

### 6. Student Phone
* `student_phone` (`text`, required: false): Enter your phone number.

### 7. Student Address
* `student_address` (`text`, required: false): Enter your address.

### 8. Instructor Name
* `instructor_name` (`text`, required: false): Enter the name of the instructor.

### 9. Instructor Email
* `instructor_email` (`email`, required: false): Enter the email address of the instructor.

### 10. Instructor Phone
* `instructor_phone` (`text`, required: false): Enter the phone number of the instructor.

### 11. Instructor Address
* `instructor_address` (`text`, required: false): Enter the address of the instructor.

### 12. Start Date
* `course_start_date` (`date`, required: false): Enter the start date of the course.

### 13. End Date
* `course_end_date` (`date`, required: false): Enter the end date of the course.

### 14. Course Status
* `course_status` (`select_one`, required: false): Select the status of the course (Active, Inactive, or Cancelled).

### 15. Course ID
* `course_id` (`number`, required: false): Enter the ID of the course.

### 16. Course Type
* `course_type` (`select_one`, required: false): Select the type of course (Online, Offline, or Hybrid).

### 17. Course Level
* `course_level` (`select_one`, required: false): Select the level of the course (Beginner, Intermediate, or Advanced).

### 18. Course Description
* `course_description` (`text`, required: false): Enter a brief description of the course.

### 19. Student Comments
* `student_comments` (`text`, required: false): Enter any comments you have as a student.

### 20. Instructor Comments
* `instructor_comments` (`text`, required: false): Enter any comments you have as an instructor.

### 21. Course Price
* `course_price` (`number`, required: false): Enter the price of the course.

### 22. Payment Status
* `payment_status` (`select_one`, required: false): Select the payment status (Pending, Paid, or Refunded).

### 23. Course Image
* `course_image` (`text`, required: false): Enter the image of the course.

### 24. Instructor Availability
* `instructor_availability` (`text`, required: false): Enter the availability of the instructor.

### 25. Form Completion Date
* `form_completion_date` (`date`, required: false): Enter the date and time the form was completed.

Note: Some fields are optional and only required for specific use cases.
