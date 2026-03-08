<thinking>
The form purpose is to collect information from users for property reservations. This includes details about the reservation status, payment method, and other relevant information. This form is likely used in a business or hotel setting to manage customer reservations and payments.

The form is divided into multiple pages, each with its own set of fields. The "Reservation Form" page has a multiple-select field for reservation status, while the "Payment" page has select fields for payment method and payment status. The form also includes fields for reservation dates, property name, payment amount, and payment method details. There are also fields for user information, including email and phone number.

The form uses a variety of field types, including select multiple, select one, date, text, and email. Each field has a label and a hint for guidance. Some fields are required, while others are optional.

This form is likely used by business users who need to manage customer reservations and payments. It may be used by hotel staff or customer service representatives.

This form has a total of 16 fields, each with its own label and hint. Some fields have a large number of options, such as the reservation status and payment method fields. Other fields have more specific formats, such as the email and phone number fields.

To ensure that the form is completed accurately, it is essential to read each section carefully and enter the correct information in the required fields. Some fields have specific formats, such as the reservation date and payment amount fields.

The fields that are required are marked as such in the form, and users need to complete these fields to submit the form. Optional fields can be completed at the user's discretion.

Overall, this form is a comprehensive tool for managing customer reservations and payments. By completing it accurately, users can ensure that customer information is up-to-date and accurate.
</thinking>

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
