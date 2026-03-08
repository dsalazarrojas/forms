# Martial Arts Testing Payment Form - Help Guide
## Purpose
This form is designed to collect payment information for martial arts testing sessions.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the First Name field with your first name.
2. Fill out the Last Name field with your last name.
3. Enter your Date of Birth in the Date of Birth field.
4. Enter the Testing Date in the Testing Date field.
5. Enter the Testing Time in the Testing Time field.
6. Enter the Testing Fee amount in the Testing Fee field.
7. Select Yes or No in the Payment Method field.
8. If you selected Yes, fill out the Payment Method Options field with your chosen payment method (Cash, Credit Card, or PayPal).
9. Enter your Student ID number in the Student ID field.
10. Fill out the Dojo Name field with the name of the dojo.
11. (Optional) Fill out the Instructor Name field with the instructor's name.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Testing Date** (`testing_date`, date, required): Enter the date of the testing session.
* **Testing Time** (`testing_time`, time, required): Enter the time of the testing session.
* **Testing Fee** (`testing_fee`, text, required): Enter the testing fee amount.
* **Payment Method** (`payment_method`, select_one, required): Select Yes or No.
	+ If Yes, select your payment method: Cash, Credit Card, or PayPal.
* **Payment Method Options** (`payment_method_options`, select_multiple, optional): Select one or more payment method options.
	+ Choose from: Cash, Credit Card, PayPal.
* **Student ID** (`student_id`, text, required): Enter your student ID number.
* **Dojo Name** (`dojo_name`, text, required): Enter the name of the dojo.
* **Instructor Name** (`instructor_name`, text, optional): (Optional) Enter the instructor's name.
* **Student Name** (`student_name`, text, optional): (This field is not used in the form and can be ignored.)
