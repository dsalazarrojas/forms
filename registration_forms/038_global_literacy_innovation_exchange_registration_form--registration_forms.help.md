# Global Literacy Innovation Exchange Registration Form - Help Guide
## Purpose
The Global Literacy Innovation Exchange Registration Form is designed to gather information about users who want to participate in the Global Literacy Innovation Exchange. This form is used to collect basic contact information, language proficiency, and event preferences to ensure that users can be matched with the right opportunities.

## How To Complete This Form
1. Enter your First Name in the "First Name" field.
2. Enter your Last Name in the "Last Name" field.
3. Enter your email address in the "Email" field (format: `example@example.com`).
4. Enter your phone number in the "Phone" field (format: `123-456-7890`).
5. Select your language proficiency in the "Which language do you speak?" field by choosing "Yes" or "No".
6. If you speak an other language, select "Yes" in "Other language" field and enter the name of that language in the "Other language" field.
7. Enter the date you are available to participate in the "Date" field (format: `2022-01-01`).
8. Enter the time you are available to participate in the "Time" field (format: `12:00`).
9. Select your availability for the event in the "Type of Event" field by choosing "Yes" or "No".
10. Select the venues you are available to participate in the "Venues" field by choosing "Yes" or "No".
11. Select the dates you are available to participate in the "Dates" field by choosing "Yes" or "No".
12. If there are other venues you are interested in, select "Yes" in the "Other Venues" field and enter the name of that venue in the "Other Venues" field.
13. If there are other types of events you are interested in, select "Yes" in the "Other Types of Events" field and enter the name of that event type in the "Other Types of Events" field.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Which language do you speak?** (`select_language`, select_one, optional): Select "Yes" if you speak the language, select "No" if not.
* **Other language** (`select_language_other`, select_multiple, optional): Select "Yes" if you speak other languages and enter the name of that language.
* **Date** (`date`, date, required): Enter the date you are available to participate.
* **Time** (`time`, time, required): Enter the time you are available to participate.
* **Type of Event** (`select_event_type`, select_one, optional): Select "Yes" if you are available for the event, select "No" if not.
* **Venues** (`select_event_venues`, select_multiple, optional): Select "Yes" if you are available for the venue, select "No" if not.
* **Dates** (`select_event_dates`, select_multiple, optional): Select "Yes" if you are available for the date, select "No" if not.
* **Other Venues** (`select_event_venues_other`, select_multiple, optional): Select "Yes" if you are interested in other venues and enter the name of that venue.
* **Other Types of Events** (`select_event_types_other`, select_multiple, optional): Select "Yes" if you are interested in other types of events and enter the name of that event type.
* **Note** (`note`, note, optional): Enter any additional comments or information.
