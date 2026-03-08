# product_sampling_booth_booking_form - Help Guide
## Purpose
The product sampling booth booking form is used for customers to book a sampling booth for in-store promotions or events.

## How To Complete This Form
To complete the form, follow these steps:

1. Provide your event organizer information, including the title of the event or promotion.
2. Choose the days on which you would like to book the sampling booth.
3. Select a preferred date for the event.
4. Enter any required information about the event.
5. Provide product information that will be sampled during the event.
6. Select the type of event (in-store promotion or event).
7. Choose the sampling requirement (sampling with purchase or without purchase).
8. Enter your contact details so we can get in touch with you.
9. If you have any additional notes about the event, please include them here.
10. Finally, submit your booking request.

## Field-by-Field Explanation

* **Event Organizer Information** (`event_organizer_info`, text, required): This is the title of the event or promotion being held. For example, "Grand Opening Event for New Product Launch".
* **Booth Booking Information** (`booth_booking_info`, select_multiple, optional): Choose one or more days on which you would like to book the sampling booth. This field is optional, but please select all applicable days to ensure your booth is booked on the most convenient time for your event.
* **Preferred Date** (`preferred_date`, date, required): Select a specific date for the event. Please format the date as MM/DD/YYYY.
* **Required Information** (`required_info`, text, required): Enter any information that event attendees must have, such as proof of age or ID, to be eligible for sampling.
* **Product Information** (`product_info`, text, required): Describe the product(s) that will be sampled during the event. Please include details such as product name, size, and flavor.
* **Event Type** (`event_type`, select_one, required): Select the type of event (in-store promotion or event). This will help us determine the most suitable sampling booth setup for your needs.
* **Sampling Requirement** (`sampling_requirement`, select_one, required): Choose whether the sampling will be done with or without purchase.
* **Contact Details** (`contact_details`, text, required): Enter your name, phone number, and email address so we can get in touch with you to confirm your booking and provide updates.
* **Notes** (`notes`, note, optional): If you have any additional information or requests about the booking, please include them here.
* **Submit** (`submit`, text, not required): Click this button to submit your booking request.

Note: Please ensure all required fields are filled out for your booking to be processed.
