# Hostel Booking Form Light Coral And Responsive - Help Guide
## Purpose
This form is used to book a stay at a hostel. It collects user information, hostel preferences, and other relevant details to complete the booking process.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name, including your first and last name, in the "first_name" and "last_name" fields.
2. Provide your email address in the "email" field.
3. Enter your phone number in the "phone" field.
4. Select the date and time of your booking.
5. Choose your check-in and check-out dates.
6. Indicate the number of guests you will be bringing.
7. If necessary, add any additional comments or messages in the "message" field.
8. Select the tool you are booking with from the "assigned_tool" dropdown list.
9. Confirm if you have a preference for a specific hostel.
10. Enter your form ID, which is not required.

## Field-by-Field Explanation

* **first_name** (`first_name`, text, optional): Enter your first name.
* **last_name** (`last_name`, text, optional): Enter your last name.
* **email** (`email`, email, optional): Enter your email address. This will be used for communication.
* **phone** (`phone`, text, optional): Enter your phone number.
* **booking_date** (`booking_date`, date, optional): Select the date of your booking.
* **booking_date_time** (`booking_date_time`, time, optional): Select the time of your booking.
* **checkin_time** (`checkin_time`, time, optional): Select the check-in time for your stay.
* **checkout_date** (`checkout_date`, date, optional): Select the check-out date for your stay.
* **number_of_guests** (`number_of_guests`, number, optional): Indicate the number of guests you will be bringing.
* **message** (`message`, note, optional): Add any additional comments or information about your booking.
* **assigned_tool** (`assigned_tool`, select_one, required): Select the tool you are booking with from the available options.
* **hostel** (`hostel`, select_one, optional): Confirm if you have a preference for a specific hostel.
* **form_id** (`form_id`, text, optional): Enter your form ID, which is not required for the form submission.
