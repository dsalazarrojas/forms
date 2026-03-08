# Club House Special Seats Registration - Help Guide

## Purpose
This form is designed for attendees to register for special seats at a Club House event. It collects necessary information for seating arrangements, event details, and payment processing.

## How To Complete This Form
1. Fill in the "Full Name" field with the attendee's name.
2. Enter the attendee's Email Address for confirmation purposes.
3. Select the Member Status from the provided options (Active member, Guest, etc.).
4. Select the event and fill in its name.
5. Enter the event date and event start time.
6. Choose a venue for the event.
7. Select the preferred seating type or location for the attendee.
8. If needed, specify the seat number for assigned seats.
9. If needed, confirm if the attendee has a companion who will be attending.
10. Enter the companion's name, email address (if applicable), and confirm if they have any accessibility needs.
11. Enter the total party size.
12. Check if the attendee has any special requirements or accessibility needs.
13. If applicable, mention any dietary restrictions.
14. Enter the ticket price per person and calculate the total cost for the party.
15. Confirm the registration status (Complete payment, Payment pending, etc.).

## Field-by-Field Explanation

* **Full Name** (`attendee_name`, `text`, required): Enter the attendee's full name.
* **Email Address** (`email_address`, `email`, required): Enter the attendee's email address for confirmation purposes. A confirmation will be sent to this address.
* **Phone Number** (`phone_number`, `text`, optional): If you'd like to be contacted for any reason, please enter your phone number.
* **Member Status** (`member_status`, `select_one`, required): Select your member status: Active member, Guest, VIP member, Supporter, or Other.
* **Event Name** (`event_name`, `text`, required): Select the event name from the provided list.
* **Event Date** (`event_date`, `date`, required): Choose the date of the event.
* **Event Start Time** (`event_time`, `time`, required): Choose the start time of the event.
* **Venue Name** (`venue_name`, `text`, required): Select the event venue.
* **Seat Type or Location** (`seat_type`, `select_one`, required): Choose the preferred seating type or location: Front row - center, Front row - side, Middle section - center, Middle section - side, Back section - center, VIP premium seats, Wheelchair accessible.
* **Specific Seat Number** (`seat_number`, `text`, optional): If seats are pre-assigned, enter the specific seat number.
* **Need Companion Seating** (`companion_seating`, `select_one`, required): Confirm if you have a companion attending with you.
* **Companion Name** (`companion_name`, `text`, optional): If you have a companion, enter their name.
* **Companion Email Address** (`companion_email`, `email`, optional): If your companion needs confirmation, enter their email address.
* **Total Party Size** (`party_size`, `number`, required): Enter the total number of people in your group.
* **Accessibility or Special Needs** (`accessibility_needs`, `select_one`, optional): If you have any special requirements or accessibility needs, select the relevant option.
* **Dietary Restrictions** (`dietary_restrictions`, `text`, optional): If you have any dietary restrictions, enter them here.
* **Ticket Price** (`ticket_price`, `number`, required): Enter the price per person for the ticket.
* **Total Cost** (`total_cost`, `number`, optional): Calculate the total cost by multiplying the ticket price by the party size.
* **Registration Status** (`registration_status`, `select_one`, required): Confirm your registration status: Complete payment, Payment pending, Need invoice.
