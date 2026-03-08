# Casino Night Registration Form - Help Guide
## Purpose
The Casino Night Registration Form is a necessary step for attendees to register for the Casino Night event. It collects essential information about the event and the attendee, ensuring that you receive the correct tickets and accommodations.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of registration you want to complete (e.g., General Admission, VIP, etc.).
2. Fill in the event details (Event Name, Event Date, Event Start Time, and Event Location or Venue).
3. Enter your personal contact information (First Name, Last Name, Email Address, and Phone Number).
4. Provide information about your party (Number of Guests and Names of Additional Guests).
5. Choose your preferred payment method (e.g., Credit Card, Debit Card, etc.).
6. Enter any additional comments or requests.

## Field-by-Field Explanation
- **Event Name** (`event_name`, `text`, required): Enter the name of the event you are registering for.
- **Event Date** (`event_date`, `date`, required): Enter the date of the event (MM/DD/YYYY).
- **Event Start Time** (`event_start_time`, `time`, required): Enter the start time of the event (HH:MM AM/PM).
- **Event Location or Venue** (`event_location`, `text`, required): Enter the location of the event.
- **First Name** (`first_name`, `text`, required): Enter your first name.
- **Last Name** (`last_name`, `text`, required): Enter your last name.
- **Email Address** (`email`, `email`, required): Enter your email address.
- **Phone Number** (`phone`, `text`, required): Enter your phone number.
- **Number of Guests** (`number_of_guests`, `number`, required): Enter the number of guests attending the event.
- **Names of Additional Guests** (`guest_names`, `text`, optional): List the names of any additional guests attending the event.
- **Seating Preferences** (`seating_preferences`, `text`, optional): Enter any specific seating preferences you may have.
- **Any Dietary Restrictions?** (`dietary_restrictions`, `text`, optional): If you have any dietary restrictions, list them here.
- **Accessibility or Special Needs** (`accessibility_needs`, `text`, optional): If you require any special accommodations, list them here.
- **Registration Type** (`registration_type`, `select_one`, required): Select the type of registration you are completing (e.g., General Admission, VIP, etc.).
- **Ticket Cost Per Person** (`ticket_cost`, `number`, optional): Enter the total cost per person for the event.
- **Total Registration Cost** (`total_cost`, `number`, required): Enter the total cost of registration.
- **Preferred Payment Method** (`payment_method`, `select_one`, required): Select your preferred payment method (e.g., Credit Card, Debit Card, etc.).
- **Additional Comments or Requests** (`additional_comments`, `text`, optional): Enter any additional comments or requests you may have.
