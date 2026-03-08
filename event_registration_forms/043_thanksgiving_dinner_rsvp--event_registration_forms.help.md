# Thanksgiving Dinner RSVP - Help Guide
## Purpose
This form is for individuals who are attending or not attending the thanksgiving dinner event. It helps the host to plan and prepare for the event accordingly.

## How To Complete This Form
To complete this form, follow the steps below:

1. Choose whether you will attend the event or not by selecting 'Yes' or 'No' in the 'Event Details' section.
2. If you are attending, provide your contact information in the 'Contact Info' section.
3. Enter your phone number in the 'Phone' field.
4. Choose your preferred date and time in the 'Date' and 'Time' fields.
5. Indicate the number of guests you are bringing in the 'Number of Guests' field.
6. Leave a message for the host in the 'RSVP Message' field.
7. If you have a message for your guests, enter it in the 'Guest Message' field.

## Field-by-Field Explanation
* **Event Details** (`event_details`, select_one, required): Choose whether you will attend the event or not.
* **Guest Details** (`guest_details`, select_multiple, required): If you are attending, select 'Yes' for each guest attending.
* **Contact Info** (`contact_info`, note, optional): Enter your contact information if you wish to be contacted by the host.
* **Phone** (`phone`, text, optional): Enter your phone number for contact purposes.
* **Date** (`date`, date, required): Choose your preferred date to attend the event.
* **Time** (`time`, time, optional): Choose your preferred time to attend the event.
* **Attending** (`attending`, select_one, required): Confirm whether you will attend the event or not.
* **Number of Guests** (`guests`, select_one, required): Indicate the number of guests you are bringing.
* **RSVP Message** (`rsvp_message`, note, optional): Leave a message for the host with any details or requests.
* **Guest Message** (`guest_message`, note, optional): Enter a message for your guests if you wish.
