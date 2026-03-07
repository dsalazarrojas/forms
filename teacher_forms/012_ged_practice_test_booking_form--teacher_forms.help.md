<thinking>...this form is a GED practice test booking form for students to schedule tests with teachers. It is not intended for students to book tests for themselves, but rather for teachers to book tests for their students. This form is likely to be used in an educational setting where teachers can easily and efficiently book tests for their students. I will not output any internal logic or business rules as this form is intended for end-users to understand how to fill it out...</thinking>

# ged-practice-test-booking-form - Help Guide
## Purpose
This form is used by teachers to schedule practice tests for their students. It allows teachers to select a test date and time, choose the type of test, and assign a tool to the student.

## How To Complete This Form
To complete this form, follow these steps:

1. Please fill in your student's **Student ID** if it is applicable.
2. Enter your student's **Student Name**.
3. Enter your student's **Email**.
4. Enter your student's **Phone** number.
5. Select the **Test Date** for the practice test.
6. Choose the **Test Time** for the practice test.
7. Select the duration of the **Test Duration** in minutes.
8. Choose the type of **Test Type** from the options provided.
9. Select the **Booking Date** for the practice test.
10. Select the **Booking Time** for the practice test.
11. Add any necessary **Teacher Comment** about the test.
12. Choose the **Assigned Tool** for the student from the options provided.

## Field-by-Field Explanation

* **Student ID** (`student_id`, number, not required): Enter your student's identification number if it is applicable.
* **Student Name** (`student_name`, text, not required): Enter your student's name.
* **Email** (`email`, email, not required): Enter your student's email address.
* **Phone** (`phone`, text, not required): Enter your student's phone number.
* **Test Date** (`test_date`, date, not required): Select the date of the practice test.
* **Test Time** (`test_time`, time, not required): Select the time of the practice test.
* **Test Duration** (`test_duration`, number, not required): Select the duration of the test in minutes.
* **Test Type** (`test_type`, select_one, required): Choose the type of test from the options provided.
* **Booking Date** (`booking_date`, date, not required): Select the date of the practice test booking.
* **Booking Time** (`booking_time`, time, not required): Select the time of the practice test booking.
* **Teacher Comment** (`teacher_comment`, note, not required): Add any necessary comments about the test.
* **Assigned Tool** (`assigned_tool`, select_one, required): Choose the tool assigned to the student from the options provided.
