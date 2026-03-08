# School Booking Form - Help Guide
## Purpose

The School Booking Form is used to request a booking for a school facility or staff member. This guide will walk you through how to complete the form accurately and efficiently.

## How To Complete This Form

To complete this form, follow the steps below:

1. Enter your booking details, including the date and time you would like to book.
2. Select the type of booking you would like to make (e.g. staff, facilities, or other).
3. Choose the facility you would like to book (if applicable).
4. Add any additional comments about your booking.
5. Provide your contact email and phone number.
6. Confirm that your provided contact information is correct.

## Field-by-Field Explanation

* **School Booking Form** (`form_data`, text, required/optional): Enter a brief description of your booking request in this field.
* **Booking Date** (`booking_date`, date, required/optional): Enter the date you would like to book the facility or staff member.
* **Booking Time** (`booking_time`, time, required/optional): Enter the time you would like to book the facility or staff member.
* **Staff Member** (`staff_member`, text, required/optional): Enter the name of the staff member you would like to book.
* **Booking Type** (`booking_type`, select_multiple, required/optional): Select the type of booking you would like to make. Options include:
	+ Staff
	+ Facilities
	+ Other
* **Facility** (`facility`, select_one, required/optional): Select the facility you would like to book. Options include:
	+ Auditorium
	+ Library
	+ Playground
	+ Other
* **Comments** (`comments`, text, required/optional): Add any additional comments about your booking.
* **Email** (`email`, email, required/optional): Enter your contact email.
* **Phone** (`phone`, text, required/optional): Enter your contact phone number.
* **Confirm Email** (`confirm_email`, select_one, required/optional): Confirm that your provided email is correct.
	+ True
	+ False
* **Confirm Phone** (`confirm_phone`, select_one, required/optional): Confirm that your provided phone number is correct.
	+ True
	+ False
* **Submit** (`submit_button`, text, required/optional): Click this button to submit your booking request.

## Tips

* Make sure to provide accurate contact information to ensure that your booking request is processed correctly.
* If you have any questions or concerns about your booking, please contact the school administration.
* This form is subject to school policies and procedures, so please ensure you have the necessary permissions and approvals before submitting your booking request.
