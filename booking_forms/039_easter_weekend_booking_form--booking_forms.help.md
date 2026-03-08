<thinking>

We're creating a form to allow users to book their Easter weekend stay at our resort. This form is designed to gather necessary information from guests who want to spend their Easter holidays with us. It's crucial to provide a clear and comprehensive help guide for our end-users to fill out this form accurately and efficiently.

To avoid duplication and ensure that all relevant information is captured, the form is divided into sections. Each section is designed to capture specific details about the guest's stay.

When designing this form, we considered the importance of ensuring it's easy to use and understand. We also considered the types of information that are essential to process the booking request. This form will be used to capture the guest's preferences and requirements for their Easter stay.

Before we dive into the form details, make sure to review the form carefully and only submit the information that is accurate and relevant to your booking request.

</thinking>

# easter_weekend_booking_form - Help Guide
## Purpose
This form is designed to capture information from guests who want to book their Easter weekend stay at our resort. It's essential to provide accurate and complete information to ensure a smooth and enjoyable experience for all.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the dates you plan to arrive and depart from our resort.
2. Select the time of your arrival.
3. Indicate if you'll be bringing guests with you.
4. Provide your name and email address for contact purposes.
5. Submit the form once you've filled out all required fields.

## Field-by-Field Explanation

* **start_date** (`start_date`, date, required): Enter the date you plan to arrive at our resort. This is a required field to ensure we can prepare for your arrival.
* **end_date** (`end_date`, date, required: false): If you're planning to stay with us for multiple days, enter the date you plan to depart from our resort. This field is optional, but it helps us understand your stay duration.
* **arrival_time** (`arrival_time`, time, required): Select the time you plan to arrive at our resort. This is crucial for our staff to be ready for your arrival.
* **guests** (`guests`, select_multiple, required): Indicate if you'll be bringing guests with you. Choose 'Yes' if you'll have companions, or 'No' if you'll be staying alone.
* **contact_name** (`contact_name`, text, required): Enter your name as the contact person for this booking.
* **contact_email** (`contact_email`, email, required): Enter your email address so we can contact you about your booking and any updates or changes.
