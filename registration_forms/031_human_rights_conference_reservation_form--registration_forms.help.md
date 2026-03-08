# human_rights_conference_reservation_form - Help Guide
## Purpose
This form is used to reserve a spot at a human rights conference. It collects attendee information, dietary restrictions, meal preferences, payment status, and emergency contact details to ensure a smooth and enjoyable experience for all attendees.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your reservation details on the first page.
2. Enter your attendee information on the second page.
3. Fill out the contact details on the third page.
4. Select your dietary restrictions and meal preferences on the subsequent pages.
5. Review and complete any other sections as required.

## Field-by-Field Explanation

* **Reservation Details** (`reservation_details`, text, optional): Provide a brief description of your reservation request.
* **Attendee Info** (`attendee_info`, text, optional): Enter your name and any other relevant attendee details.
* **Contact Details** (`contact_details`, text, optional): Enter your contact name and any other relevant contact details.
* **Payment Info** (`payment_info`, text, optional): Enter your payment information or any other relevant payment details.
* **Dietary Restrictions** (`dietary_restrictions`, select_multiple, optional):
  + **None**: Select this option if you don't have any dietary restrictions.
  + **Vegan**: You are a vegan and do not consume any animal products.
  + **Gluten-Free**: You have gluten intolerance or sensitivity and require a gluten-free diet.
  + **Other**: If you have other dietary restrictions, select this option and provide more information.
* **Meal Preferences** (`meal_preferences`, select_multiple, optional):
  + **Morning**: You prefer to have a meal in the morning.
  + **Afternoon**: You prefer to have a meal in the afternoon.
  + **Evening**: You prefer to have a meal in the evening.
  + **Other**: If you have other meal preferences, select this option and provide more information.
* **Meal Options** (`meal_options`, select_multiple, optional):
  + **Lunch**: You would like to have lunch provided.
  + **Dinner**: You would like to have dinner provided.
  + **Snacks**: You would like to have snacks provided.
  + **No Meal**: You do not require any meals.
* **Religious Affiliations** (`religious_affiliations`, text, optional): Enter any relevant religious affiliations or dietary requirements.
* **Emergency Info** (`emergency_info`, note, optional): Provide any emergency contact information or instructions.
* **Emergency Contact** (`emergency_contact`, text, optional): Enter the name and contact information of your emergency contact.
* **Payment Status** (`payment_status`, select_one, optional):
  + **Paid**: You have already paid for your reservation.
  + **Pending**: Your payment is still pending.
