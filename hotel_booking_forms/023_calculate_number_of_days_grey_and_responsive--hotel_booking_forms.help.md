<thinking>...</thinking>

This form is designed to collect information for hotel bookings, allowing users to provide details about their stay. It is essential to fill out this form accurately to ensure that your booking is processed correctly. Before starting, please ensure that you have not filled out this form previously, as it will help avoid duplicate bookings.

</thinking>

# Calculate Number Of Days Grey And Responsive - Help Guide
## Purpose
This form is used to collect information for hotel bookings, including guest details, stay dates, room preferences, and special requests.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Guest Name**, **Email Address**, and **Phone Number** in the respective fields.
2. Select the **Check-in Date** and **Check-out Date** for your stay.
3. Choose the **Room Type** that suits your preferences.
4. Enter the **Number of Guests** in your group.
5. If applicable, specify the **Number of Children** and their **Bed Type Preference**.
6. Select the **Amenities and Services** you require, such as WiFi, Air conditioning, and Parking.
7. Decide if you would like to include **Breakfast** in your stay.
8. If you have any **Special Requests**, please specify them in the text field.
9. If you have any **Accessibility Requirements**, please describe them in the text field.
10. Finally, optionally choose to **Show Total Cost Calculation** to get an estimate of your stay costs.

## Field-by-Field Explanation

* **Guest Name** (`guest_name`, `text`, required): Enter your name as it appears on your official identification.
* **Email Address** (`email`, `email`, required): Enter your email address that we can use to contact you regarding your booking.
* **Phone Number** (`phone`, `text`, required): Enter your phone number that we can use to contact you regarding your booking.
* **Check-in Date** (`check_in_date`, `date`, required): Select the date you plan to arrive at the hotel.
* **Check-out Date** (`check_out_date`, `date`, required): Select the date you plan to depart from the hotel.
* **Room Type** (`room_type`, `select_one`, required): Choose the type of room that suits your preferences, such as Single Room, Double Room, or Suite.
* **Number of Guests** (`number_of_guests`, `number`, required): Enter the number of guests in your group.
* **Number of Children** (`number_of_children`, `number`, optional): If you have children in your group, enter their number.
* **Bed Type Preference** (`bed_type`, `select_one`, optional): Specify the type of bed you prefer, such as Single bed or Twin beds.
* **Amenities and Services** (`requested_amenities`, `select_multiple`, optional): Select all the amenities and services you require, such as WiFi or Mini bar.
* **Include Breakfast?** (`breakfast_included`, `select_one`, optional): Decide if you would like to include breakfast in your stay.
* **Special Requests** (`special_requests`, `text`, optional): If you have any special requests, describe them in this field.
* **Accessibility Requirements** (`accessibility_needs`, `text`, optional): If you have any accessibility requirements, describe them in this field.
* **Room Rate Per Night** (`room_rate_per_night`, `number`, optional): If you want to specify a room rate per night, enter it here.
* **Show Total Cost Calculation?** (`show_total_cost`, `select_one`, optional): Choose this option to get an estimate of your stay costs.

Note: All fields marked as `required` are mandatory and must be filled out. Optional fields can be left blank if not applicable.
