# Stripe Virtual Course Registration Form - Help Guide
## Purpose
This form is designed to register users for a virtual course. It requires users to provide their first name, last name, email address, phone number, course selection, payment method, payment amount, and confirm the registration details.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your first name in the "First Name" field.
2.  Enter your last name in the "Last Name" field.
3.  Enter your email address in the "Email" field.
4.  Enter your phone number in the "Phone" field.
5.  Select the course you are interested in from the "Course" dropdown menu.
6.  Choose your preferred payment method from the "Payment Method" dropdown menu.
7.  Enter the payment amount in the "Payment Amount" field.
8.  Confirm your registration details by selecting the correct options in the "Confirm" field.
9.  Enter your phone number in the "Confirm Phone" field to verify your identity.
10. Enter your email address in the "Confirm Email" field to verify your identity.
11.  Select the Stripe Plan for your virtual course from the "Stripe Plan" dropdown menu.
12. Enter the Stripe Plan amount in the "Stripe Plan Amount" field.
13. Enter the Stripe Plan price in the "Stripe Plan Price" field.
14. Choose your Stripe payment method from the "Stripe Payment Method" dropdown menu.
15. Enter your customer name in the "Customer Name" field (optional).
16. Enter your customer email in the "Customer Email" field (optional).
17. Enter your customer phone number in the "Customer Phone" field (optional).
18. Enter your customer address in the "Customer Address" field (optional).
19. Enter the Stripe plan ID in the "Stripe Plan ID" field (optional).
20. Select the date and time for the virtual course in the "Date" and "Time" fields (optional).

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Course** (`course`, select_one, required): Select the course you are interested in.
* **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method.
* **Payment Amount** (`payment_amount`, number, required): Enter the payment amount.
* **Confirm** (`confirm`, select_one, required): Confirm your registration details.
* **Confirm Phone** (`confirm_phone`, text, optional): Enter your phone number to verify your identity.
* **Confirm Email** (`confirm_email`, email, optional): Enter your email address to verify your identity.
* **Stripe Plan** (`stripe_plan`, select_one, required): Select the Stripe Plan for your virtual course.
* **Stripe Plan Amount** (`stripe_plan_amount`, number, required): Enter the Stripe Plan amount.
* **Stripe Plan Price** (`stripe_plan_price`, number, optional): Enter the Stripe Plan price.
* **Stripe Payment Method** (`stripe_payment_method`, select_one, required): Choose your Stripe payment method.
* **Customer Name** (`customer_name`, text, optional): Enter your customer name (not directly related to registration).
* **Customer Email** (`customer_email`, email, optional): Enter your customer email (not directly related to registration).
* **Customer Phone** (`customer_phone`, text, optional): Enter your customer phone number (not directly related to registration).
* **Customer Address** (`customer_address`, text, optional): Enter your customer address (not directly related to registration).
* **Stripe Plan ID** (`stripe_plan_id`, text, optional): Enter the Stripe plan ID (not directly related to registration).
* **Date** (`date`, date, optional): Select the date for the virtual course (not directly related to registration).
* **Time** (`time`, time, optional): Select the time for the virtual course (not directly related to registration).
* **Notes** (`notes`, note, optional): Enter any additional notes or comments about your registration.
