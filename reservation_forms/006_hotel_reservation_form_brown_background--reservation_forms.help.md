<thinking>
This form is intended to collect reservation information for hotels, allowing users to select their preferred hotel, check-in and check-out dates, room type, background color, and provide any additional notes or contact information. The purpose of this form is to streamline the reservation process and provide users with a convenient way to book their stay at the hotel. It's recommended that users complete this form only if they have the necessary information to proceed with the reservation process. If users have already booked their stay or have no plans to book, there is no need to fill out this form.

</thinking>

# Hotel Reservation Form Brown Background - Help Guide
## Purpose
This form is designed to collect reservation information for hotels, allowing users to select their preferred hotel, check-in and check-out dates, room type, background color, and provide any additional notes or contact information.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the hotel(s) you are interested in staying at from the "Hotel" dropdown menu.
2. Enter your check-in and check-out dates using the date input fields.
3. Choose your preferred room type from the "Type of room" dropdown menu.
4. Select the background color you would like for your room from the "Background color" dropdown menu.
5. If you have any additional notes or comments, you can enter them in the "Notes" text area.
6. If you would like to provide your phone number or email address, you can do so in the "Phone" and "Email" text fields, respectively.

## Field-by-Field Explanation
* **Hotel** (`hotels`, `select_multiple`, required: false): Select the hotel(s) you are interested in staying at. You can choose one or multiple hotels from the dropdown menu.
* **Check-in** (`checkin`, `date`, required: false): Enter your check-in date in the format MM/DD/YYYY.
* **Check-out** (`checkout`, `date`, required: false): Enter your check-out date in the format MM/DD/YYYY.
* **Type of room** (`type_of_room`, `select_one`, required: false): Choose your preferred room type from the dropdown menu.
* **Background color** (`background_color`, `select_one`, required: false): Select the background color you would like for your room from the dropdown menu.
* **Notes** (`notes`, `note`, required: false): Enter any additional notes or comments about your reservation.
* **Phone** (`phone`, `text`, required: false): If you would like to provide your phone number, enter it in this text field.
* **Email** (`email`, `email`, required: false): If you would like to provide your email address, enter it in this text field.
