# Hotel Booking Form - Help Guide
## Purpose
The Hotel Booking Form is used to book a room at the hotel. This form collects information about the start and end dates of the stay, the type of room requested, the number of guests, and the name of the person booking the room.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the start and end dates of your stay using the date picker calendar.
2. Choose the type of room you would like to book from the available options (Hotel Single, Hotel Double, or Hotel Twin).
3. Enter the number of guests who will be staying in the room.
4. Enter your name as it appears on your identification.

## Field-by-Field Explanation

* **start_date** (`start_date`, date, required): Enter the date you would like to start your stay. This is the date you will check-in to the hotel.
* **end_date** (`end_date`, date, required): Enter the date you would like to end your stay. This is the date you will check-out from the hotel.
* **room_type** (`room_type`, select_one, optional): Choose the type of room you would like to book. Options include Hotel Single, Hotel Double, and Hotel Twin. If you do not select a room type, you will be able to book the default room type.
* **guest_count** (`guest_count`, number, required): Enter the number of guests who will be staying in the room. This will help us ensure that we have enough space and amenities for everyone in your group.
* **name** (`name`, text, required): Enter your name as it appears on your identification. This will help us verify your identity and confirm your booking.
