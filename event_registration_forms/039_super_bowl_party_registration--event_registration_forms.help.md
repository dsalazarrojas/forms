# Super Bowl Party Registration - Help Guide
## Purpose
This form is used to gather information from users who are interested in hosting or attending a Super Bowl party. It is a private registration form for a specific event and users are expected to register only once.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name and contact information as the event host.
2. Provide the expected number of guests attending the party.
3. Indicate if you will be providing food and drink for your guests.
4. List any special requests you may have for your guests.
5. Confirm if you will be attending the party (yes or no).
6. Enter your email address for contact purposes.

## Field-by-Field Explanation
* **Event Host** (`event_host_contact`, text, required): Enter your name and contact information as the event host.
* **Guest Count** (`guest_count`, number, optional): Enter the expected number of guests attending the party.
* **Food and Drink** (`food_preferences`, select_multiple, optional): Check all that apply to indicate if you will be providing food and drink for your guests:
	+ Yes
	+ No
* **Special Requests** (`special_requests`, text, optional): List any special requests you may have for your guests.
* **RSVP** (`rsvp`, select_one, optional): Confirm if you will be attending the party:
	+ Yes
	+ No
* **Email** (`email`, email, optional): Enter your email address for contact purposes.
