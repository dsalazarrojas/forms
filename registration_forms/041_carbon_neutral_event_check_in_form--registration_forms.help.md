<thinking>
To create a help guide that's clear and concise, I'll assume that the form is used for registering attendees to an event, especially one with a focus on sustainability. The form likely aims to collect relevant information about the attendees, their transportation methods, accommodation preferences, and sustainability commitments. The form might already have duplicate registrations, so it's essential to include a note about not duplicating entries. 

Before proceeding, please note that this form is for attendees who are interested in the event's focus on carbon neutrality and sustainability. If you've already registered or attended a similar event, please do not register again, as it will not be possible to make changes to your previous registration.

</thinking>

# Carbon Neutral Event Check In Form - Help Guide
## Purpose
This form is designed to collect information about attendees for a carbon-neutral event. It's used to track attendee demographics, transportation methods, accommodation preferences, and sustainability commitments. 

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Ensure that you've selected the correct transportation method and accommodation preferences.
3. Indicate your sustainability commitments and interests.
4. Optionally, select the sessions or workshops you're interested in attending.
5. If you're staying overnight, select your accommodation type.
6. Indicate any dietary restrictions or preferences.
7. Select your preferred meal options.
8. Indicate your carbon offset preference and amount.
9. Choose any additional sustainability actions you'll take during the event.
10. Optionally, provide any additional information or special needs.

## Field-by-Field Explanation

* **Event name** (`event_name`, `text`, required): Enter the name of the event you're attending.
* **Event date** (`event_date`, `date`, required): Enter the date of the event in the format MM/DD/YYYY.
* **First name** (`first_name`, `text`, required): Enter your first name.
* **Last name** (`last_name`, `text`, required): Enter your last name.
* **Email address** (`email`, `email`, required): Enter your email address for communication and updates.
* **Phone number** (`phone`, `text`, optional): Enter your phone number for contact purposes.
* **Organization or company** (`organization`, `text`, optional): If you're representing an organization or company, enter its name.
* **How are you arriving at the event?** (`arrival_method`, `select_one`, required): Select the method of transportation you'll use to arrive at the event.
* **Approximate travel distance (miles)** (`travel_distance`, `number`, optional): Enter the distance you'll travel to the event.
* **Are you staying overnight?** (`staying_overnight`, `select_one`, optional): Indicate if you'll be staying overnight at the event.
* **Accommodation type (if staying)** (`accommodation_type`, `select_one`, optional): If you're staying overnight, select the type of accommodation you'll use.
* **Dietary restrictions or preferences** (`dietary_restrictions`, `text`, optional): Enter any dietary restrictions or preferences you have.
* **Meal selections for the event** (`meal_selections`, `select_multiple`, optional): Select the meal options you're interested in.
* **Sustainability commitment** (`sustainability_commitment`, `note`, optional): This is a note about the event's focus on sustainability.
* **Carbon offset preference** (`carbon_offset_preference`, `select_one`, optional): Select your preference for carbon offset.
* **Carbon offset amount** (`offset_amount`, `number`, optional): Enter the amount you'd like to offset.
* **Sustainability actions you'll take at event** (`sustainability_actions`, `select_multiple`, optional): Select all the additional sustainability actions you'll take during the event.
* **Sessions/workshops interested in** (`session_interest`, `select_multiple`, optional): Select the sessions or workshops you're interested in attending.
* **Interested in volunteering at the event?** (`volunteer_interest`, `select_one`, optional): Indicate if you're interested in volunteering.
* **Any additional information or special needs?** (`additional_information`, `text`, optional): Enter any additional information or special needs you have.
