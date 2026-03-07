# Christmas Party RSVP Form - Help Guide
## Purpose
This form is designed for employees and their families to RSVP to the Christmas Party. It collects information about your attendance, dietary requirements, potluck contribution, and other preferences. Please fill out the form to let us know if you'll be attending and to help us plan the event.

## How To Complete This Form

1. Fill out the form completely and accurately to help us plan the event.
2. Make sure to include your email address and phone number so we can reach out to you with event updates.
3. Select your RSVP status and indicate if you'll be bringing any guests.
4. If you have any dietary requirements, please select all that apply.
5. If you're planning to bring a dish, choose what type of dish you'll bring and describe it in detail.
6. Let us know if you'll be participating in the gift exchange and what type of gifts you prefer.
7. If you need transportation or have any parking questions, let us know.
8. Finally, provide any additional comments or questions you may have.

## Field-by-Field Explanation

* **Full Name** (`guest_name`, `text`, **required**): Enter your first and last name.
* **Email Address** (`email_address`, `email`, **required**): For event confirmation and updates. Please make sure to enter a valid email address.
* **Phone Number** (`phone_number`, `text`, **optional**): For urgent updates or to arrange transportation.
* **RSVP Status** (`rsvp_status`, `select_one`, **required**): Will you be attending the party? Select "Yes I will attend" if you can make it.
* **Number Attending** (`number_attending`, `select_one`, **required**): How many people from your household will be attending.
* **Bringing Children** (`bringing_children`, `select_one`, **required**): Will children be attending? Select "Yes" if you'll be bringing kids.
* **Children Ages** (`children_ages`, `text`, **optional**): List the ages of the children attending.
* **Dietary Requirements** (`dietary_requirements`, `select_multiple`, **required**): Select all the dietary requirements that apply to you or your family members.
* **Dietary Details** (`dietary_details`, `text`, **optional**): Please specify any additional dietary needs you may have.
* **Dish to Share** (`dish_to_share`, `select_one`, **optional**): What type of dish will you bring for the potluck?
* **Dish Description** (`dish_description`, `text`, **optional**): Describe the dish you'll be bringing.
* **Gift Exchange** (`gift_exchange`, `select_one`, **required**): Will you participate in the gift exchange? Select "Yes I will participate" if you'll be bringing a gift.
* **Gift Type Preference** (`gift_type`, `select_one`, **optional**): If you'll be participating in the gift exchange, what type of gift do you prefer?
* **Transportation Needed** (`transportation_needed`, `select_one`, **required**): Do you need transportation to or from the party?
* **Parking Question** (`parking_question`, `select_one`, **required**): Do you have any parking questions or need information?
* **Song Requests** (`song_requests`, `text`, **optional**): Suggest some songs you'd like to hear at the party.
* **Special Requests** (`special_requests`, `text`, **optional**): Any special requests or accommodations you may need.
* **Message to Host** (`message_to_host`, `text`, **optional**): Any message or questions for the host.
* **How Did You Hear About Party** (`how_heard`, `select_one`, **optional**): How did you hear about the party?
