# property_reservation_payment_form - Help Guide
## Purpose
This form is used to collect information from users for property reservations, including details about reservation status, payment method, and other relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the desired reservation status from the "Reservation Form" page.
2. Choose the payment method from the "Payment" page.
3. Enter the reservation dates on the "Payment" page.
4. Enter the property name on the "Payment" page.
5. Enter the payment amount on the "Payment" page.
6. Enter the payment method details, if applicable (optional).
7. Select the payment status from the "Payment" page.
8. Enter any additional notes, if applicable (optional).
9. Enter the user's email address, if applicable (optional).
10. Enter the user's phone number, if applicable (optional).

## Field-by-Field Explanation
* **Reservation Form**
	+ **Reservation Status** (`reservation_status`, select_one, required): Select the current status of the reservation.
	+ **Reservation Date** (`reservation_date`, date, required): Enter the date of the reservation.
	+ **Checkin Date** (`checkin_date`, date, required): Enter the check-in date of the reservation.
* **Payment**
	+ **Payment Method** (`payment_method`, select_one, required): Choose the payment method for the reservation.
	+ **Payment Amount** (`payment_amount`, number, required): Enter the amount of the payment.
	+ **Payment Method Details** (`payment_method_details`, text, optional): Enter any additional details about the payment method.
	+ **Payment Status** (`payment_status`, select_one, required): Select the status of the payment.
* **User Information**
	+ **Email** (`email`, email, optional): Enter the user's email address.
	+ **Phone** (`phone`, text, optional): Enter the user's phone number.
	+ **User** (`user`, text, optional): Enter any additional user information.
	+ **User Email** (`user_email`, email, optional): Enter the user's email address.
	+ **User Phone** (`user_phone`, text, optional): Enter the user's phone number.
* **Property Name** (`property_name`, text, required): Enter the name of the property.
* **Note** (`note`, note, optional): Enter any additional notes about the reservation.
