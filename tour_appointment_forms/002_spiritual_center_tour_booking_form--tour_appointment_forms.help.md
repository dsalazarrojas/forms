# Spiritual Center Tour Booking Form - Help Guide
## Purpose
This form is designed to collect information from users regarding their tour preferences at a spiritual center. It includes fields for user information, preferred dates and times, payment methods, and any additional notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your user information in the "User" field.
2. Select your preferred dates for the tour from the list of available dates.
3. Choose your preferred times for the tour from the list of available times.
4. If applicable, select your payment method and status.
5. Add any additional notes about your booking.

## Field-by-Field Explanation
* **User** (`User`, `text`, required): Enter your name and any other relevant information that you want to provide to the spiritual center.
* **Dates** (`Dates`, `select_multiple`, required): Select one or more dates for the tour. Please choose from the available dates listed.
* **Times** (`Times`, `select_multiple`, required): Select one or more times for the tour. Please choose from the available times listed.
* **Payment** (`Payment`, `select_one`, required): This field is required, but it's not clear what it's actually asking for. Please ignore it for now.
* **Payment Type** (`Payment Type`, `select_one`, required): This field is likely asking about the type of payment method you prefer (e.g., online or offline).
* **Payment Status** (`Payment Status`, `select_one`, required): This field is likely asking about the status of your payment (e.g., paid or unpaid).
* **Note** (`Note`, `note`, optional): Add any additional notes or comments about your booking. This field is not required, so you can ignore it if you don't have anything to add.
* **Confirm** (`Confirm`, `select_one`, required): Confirm your tour booking by selecting "Confirm". If you don't want to book the tour, select "Decline".
