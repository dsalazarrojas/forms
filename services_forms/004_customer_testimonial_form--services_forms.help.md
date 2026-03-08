# Customer Testimonial Form - Help Guide
## Purpose
The purpose of this form is to collect customer testimonials from users who have had a positive experience with the company. This will help us understand customer feedback and improve our services.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "Client Name" field.
2. Share your testimonial message in the "Testimonial Message" field.
3. Rate your experience with us by selecting one of the options in the "Rating" field.
4. Indicate if you would recommend our company to others by selecting one or more options in the "Recommend" field.
5. Enter your email address in the "Client Email" field.
6. Enter your phone number in the "Client Phone" field (optional).
7. Add any additional comments or message in the "Message" field (optional).

## Field-by-Field Explanation
* **Testimonial Form** (`testimonial_form`, text, required: false): Enter a brief testimonial message about your experience with our company.
* **Client Name** (`client_name`, text, required: false): Enter your name.
* **Rating** (`rating`, select_one, required: false): Select one of the following options to rate your experience:
	+ Poor
	+ Fair
	+ Good
	+ Excellent
* **Recommend** (`recommend`, select_multiple, required: false): Indicate if you would recommend our company to others:
	+ False
	+ Maybe
	+ True
* **Client Email** (`client_email`, email, required: false): Enter your email address.
* **Client Phone** (`client_phone`, text, required: false): Enter your phone number (optional).
* **Message** (`message`, text, required: false): Add any additional comments or message (optional).
