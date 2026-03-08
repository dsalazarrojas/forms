<thinking>
The form purpose is to collect user registrations for events organized by Surf Sports, including competitions, showcases, and other events. To prevent duplicate registrations, we'll be checking the event field to ensure users are registering for the correct event.
This form should only be used for events specifically organized by Surf Sports. If you're interested in participating in events not associated with Surf Sports, please contact us for assistance.
Before starting the form, please make sure to select the correct event you wish to register for. This will help prevent confusion and errors during the registration process.
</thinking>

# Surf Sports Mini Carnival Registration Form - Help Guide
## Purpose
The Surf Sports Mini Carnival Registration Form is designed to collect user registrations for events organized by Surf Sports. This form will help us track attendance and ensure a smooth event execution.

## How To Complete This Form
1. Start by carefully reviewing the events listed in the "Event" dropdown menu.
2. Select the correct event you wish to register for.
3. Complete the required fields, which include First Name, Last Name, Date of Birth, and Phone.
4. Enter your Date of Birth in the format MM/DD/YYYY.
5. Enter your Time of Day in the format HH:MM AM/PM.
6. Enter your Email address for correspondence and communication.
7. Select one or more countries you are a citizen of or currently reside in.

## Field-by-Field Explanation

* **Event**: (`event_id`, select_one, required false) - Select the event you wish to register for (e.g., Surf Competition, Surf Showdown, or Surf Jam).
* **First Name**: (`first_name`, text, required true) - Enter your first name as it appears on your official documents.
* **Last Name**: (`last_name`, text, required true) - Enter your last name as it appears on your official documents.
* **Date Of Birth**: (`date_of_birth`, date, required true) - Enter your date of birth in the format MM/DD/YYYY.
* **Time**: (`time_of_day`, time, required false) - Enter the time of day you plan to arrive at the event (if not specified by the event).
* **Phone**: (`phone`, text, required false) - Enter your phone number for contact purposes.
* **E-mail**: (`email`, email, required true) - Enter your email address for correspondence and communication.
* **Country**: (`country`, select_multiple, required false) - Select one or more countries you are a citizen of or currently reside in (e.g., USA, Canada, Australia).
