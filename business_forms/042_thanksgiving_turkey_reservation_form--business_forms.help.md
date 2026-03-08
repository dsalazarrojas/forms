# Thanksgiving Turkey Reservation Form - Help Guide
## Purpose
The Thanksgiving Turkey Reservation Form is designed to help users reserve a turkey for the Thanksgiving celebration. This form is used to gather information about the type of turkey desired, the number of guests, reservation time, contact information, and any personal messages.

## How To Complete This Form
To complete this form, follow the steps outlined in the "Instructions" section above.

## Field-by-Field Explanation
- **Turkey Type** (`turkey_type`, select_multiple, required: false): Select the type of turkey you would like to reserve. You can choose one or more options from the list.
  - Whole Turkey
  - Dinner
  - Dinner for 4
  - Dinner for 5
- **Number of Guests** (`guest_count`, number, required: false): Enter the number of guests you are planning to attend.
- **Reservation Time** (`reservation_time`, time, required: false): Provide the reservation time for your turkey pick-up or delivery.
- **Email** (`email`, email, required: false): Enter your email address to receive communication from the turkey reservation service.
- **Phone** (`phone`, text, required: false): Provide your phone number in case the reservation service needs to contact you.
- **Name** (`name`, text, required: false): Enter your name, so the reservation service knows who to contact.
- **Message** (`message`, note, required: false): Leave a message if you have any special requests or questions.
