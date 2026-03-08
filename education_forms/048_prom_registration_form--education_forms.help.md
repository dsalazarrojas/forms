<thinking>...checking for relevance and non-duplication...</thinking>

# Prom Registration Form - Help Guide
## Purpose
The Prom Registration Form is used to collect information from students who are attending the school prom. This form is designed to gather necessary details such as guest information, meal preferences, and event details to ensure a smooth and enjoyable prom experience for all attendees.

## How To Complete This Form
To complete this form, please follow these steps:
1. Review each section of the form carefully to ensure you provide accurate and complete information.
2. Fill in your response to each question honestly and thoroughly.
3. For questions that are not applicable, please select "None" or "No" to indicate this.

## Field-by-Field Explanation
* **Title** (`title`, **string**, required): The title of the form is for reference purposes only and does not require a response.
* **Main Page** (`main_page`, **text**, optional): This is the main page of the form, but no specific information is required from this field.
* **Guest Information** (`guest_info`, **select_multiple**, optional):
	+ Select "Yes" if you are bringing a guest.
	+ Select "No" if you are not bringing a guest.
* **Meal Preference** (`meal_purpose`, **select_one**, optional):
	+ Select "Yes" if you would like to purchase a meal ticket.
	+ Select "No" if you do not want to purchase a meal ticket.
* **Ticket Sales** (`ticket_sales`, **number**, optional): Enter the number of tickets you would like to purchase.
* **Phone Number** (`phone_number`, **text**, optional): This is where you can enter your phone number for contact purposes.
* **Email Address** (`email_address`, **email**, optional): This is where you can enter your email address for contact purposes.
* **Event Details** (`event_details`, **text**, optional): Describe any special event-related details, such as dress code or parking information, that we should be aware of.
* **Event Time** (`event_time`, **time**, optional): Enter the time of the event for reference purposes.
