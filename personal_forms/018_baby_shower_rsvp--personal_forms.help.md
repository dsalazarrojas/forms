<thinking>

The form "Baby Shower RSVP" is used to collect information from guests about their plans to attend a baby shower event. The form is designed to be completed by guests who are invited to the event. The form should not be completed by the person whose baby shower it is, as this information is typically managed internally.

This form is likely to be used by event planners or hosts to track guest responses, plan for logistics and headcount, and ensure that all guests have a pleasant experience. The form should be filled out once by each guest to ensure accurate tracking of responses.

</thinking>

# Baby Shower RSVP - Help Guide

## Purpose
The "Baby Shower RSVP" form is used to collect information from guests about their plans to attend a baby shower event, allowing hosts to track responses and plan accordingly.

## How To Complete This Form

To complete this form, follow these steps:

1. Start by providing your full name in the "Your Full Name" field.
2. Enter your email address in the "Email Address" field to receive confirmation of your response.
3. If you are bringing additional guests, enter their names in the "Names of Additional Guests" field.
4. Select your response to attending the event from the "Will You Attend" options.
5. If you need help with transportation, select "True" in the "Do You Need Transportation Help" field.
6. If you have any dietary restrictions or preferences, enter them in the "Dietary Restrictions or Allergies" field.
7. If you have a preferred beverage, select it from the "Beverage Preference" options.
8. If you are bringing a gift, select the type of gift you plan to bring in the "Type of Gift" field.
9. If you are willing to help with the event, select the tasks you can assist with from the "Tasks You Can Help With" options.
10. If you have any song requests, enter them in the "Song Requests" field.
11. If you have a message for the expectant parents, enter it in the "Message for Expectant Parents" field.
12. If you are bringing additional guests, select how you know the parents from the "How Do You Know the Parents" options.
13. Finally, enter the current date in the "Date of Response" field.

## Field-by-Field Explanation

* **Your Full Name** (`guest_name`, `text`, required): Enter the name of the person responding to this form.
* **Email Address** (`guest_email`, `email`, required): Enter your email address to receive confirmation of your response.
* **Phone Number** (`guest_phone`, `text`, optional): Enter your phone number, if desired.
* **Will You Attend** (`attendance_status`, `select_one`, required): Select "Yes, I will attend", "No, I cannot attend", or "Maybe, will confirm later".
* **Number of Additional Guests** (`additional_guests`, `number`, required): Enter the number of additional guests you are bringing, including yourself.
* **Names of Additional Guests** (`guest_names`, `text`, optional): Enter the names of the additional guests, if any.
* **Dietary Restrictions or Allergies** (`dietary_restrictions`, `text`, optional): Enter any dietary restrictions or allergies you have.
* **Beverage Preference** (`beverage_preference`, `select_one`, optional): Select your preferred beverage.
* **Will You Bring a Gift** (`bringing_gift`, `select_one`, optional): Select "True", "Gift card", or "Bringing something homemade".
* **Type of Gift** (`gift_type`, `text`, optional): Enter the type of gift you plan to bring.
* **Willing to Help with Event** (`helping_with_event`, `select_one`, optional): Select the tasks you can assist with.
* **Tasks You Can Help With** (`help_tasks`, `select_multiple`, optional): Select the specific tasks you can help with.
* **Do You Need Transportation Help** (`transportation_needed`, `select_one`, optional): Select "True" if you need help with transportation.
* **Song Requests** (`song_requests`, `text`, optional): Enter any song requests you have.
* **Message for Expectant Parents** (`message_for_parents`, `text`, optional): Enter a message or wish for the expectant parents.
* **How Do You Know the Parents** (`how_know_parents`, `select_one`, optional): Select how you know the parents.
* **Date of Response** (`rsvp_date`, `date`, required): Enter the current date.
