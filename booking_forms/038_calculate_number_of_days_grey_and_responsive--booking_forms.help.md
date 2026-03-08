# Calculate Number Of Days Grey And Responsive - Help Guide
## Purpose

This form is designed to gather information from customers to calculate the number of days they are booking and provide them with options to customize their stay.

## How To Complete This Form

1.  Fill in your personal contact information, including your name, email address, and phone number.
2.  Select the type of booking you are interested in, such as hotel room, vacation rental, event venue, equipment rental, or other services.
3.  Enter the start and end dates of your booking.
4.  Customize your booking experience by selecting the type of room or unit, specifying any special requests you may have, and choosing how you would like to be contacted.
5.  Select whether your dates are flexible or not and whether you understand the cancellation policy.
6.  Choose how you would like to pay for your booking and specify any additional services you may need.
7.  Optionally, you can select how you heard about us and provide any additional comments you may have.

## Field-by-Field Explanation

* **Your Name** (`customer_name`, text, required): This field is used to collect your full name.
* **Email Address** (`email_address`, email, required): This field is used to collect your email address for booking confirmation.
* **Phone Number** (`phone_number`, text, required): This field is used to collect your contact phone number.
* **Booking Type** (`booking_type`, select_one, required): This field is used to select the type of booking you are interested in, such as hotel room, vacation rental, etc.
* **Start Date** (`start_date`, date, required): This field is used to select the start date of your booking.
* **End Date** (`end_date`, date, required): This field is used to select the end date of your booking.
* **Days Calculation** (`calculation_note`, note, required): This field is used to display the calculated number of days of your booking.
* **Number of Guests** (`number_of_guests`, number, optional): This field is used to specify the number of people in your group.
* **Room or Unit Type** (`room_or_unit_type`, select_one, optional): This field is used to select the type of room or unit you are booking.
* **Special Requests** (`special_requests`, text, optional): This field is used to specify any special requests you may have.
* **Are Your Dates Flexible** (`flexible_dates`, select_one, optional): This field is used to select whether your dates are flexible or not.
* **Cancellation Policy Acknowledgment** (`cancellation_policy`, select_one, optional): This field is used to acknowledge that you understand the cancellation policy.
* **Payment Preference** (`payment_preference`, select_one, optional): This field is used to select how you would like to pay for your booking.
* **Additional Services** (`additional_services`, select_multiple, optional): This field is used to select any additional services you may need.
* **How Did You Hear About Us** (`how_did_you_hear`, select_one, optional): This field is used to select where you found us.
* **Additional Comments** (`additional_comments`, text, optional): This field is used to provide any additional information you may have.
