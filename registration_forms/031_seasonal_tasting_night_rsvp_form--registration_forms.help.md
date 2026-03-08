# Seasonal Tasting Night RSVP Form - Help Guide
## Purpose
This form is used to RSVP to the seasonal tasting night event, which is a culinary event where guests can sample different seasonal dishes.

## How To Complete This Form
To complete this form, simply follow the instructions below:

1. Enter your name in the "guest_name" field.
2. Provide your email address in the "guest_email" field.
3. Enter your phone number in the "guest_phone" field.
4. Check the "dietary_restrictions" field to indicate if you have any dietary restrictions. You can select multiple options if necessary.
5. If you have any specific dietary restrictions, please select the corresponding options in the "dietary_restrictions_options" field.
6. Enter the number of guests attending with you in the "number_guests" field.
7. Provide the date and time you plan to RSVP to in the "rsvp_date" and "rsvp_time" fields.
8. Select the date of the actual event in the "event_date" field.

## Field-by-Field Explanation
- **Form Title** (`form_title`, `text`, required: false): Enter a brief title for your RSVP.
  - This field is optional and provides a space for you to enter a brief title or message.
- **Guest Name** (`guest_name`, `text`, required: false): Enter your name.
  - This field is required to record your name.
- **Guest Email** (`guest_email`, `email`, required: false): Enter your email address.
  - This field is not required but is useful for us to contact you back.
- **Phone Number** (`guest_phone`, `text`, required: false): Enter your phone number.
  - This field is not required but is useful for us to contact you back.
- **Dietary Restrictions** (`dietary_restrictions`, `select_multiple`, required: false): Check if you have any dietary restrictions.
  - This field allows you to indicate if you have any dietary restrictions such as "Yes" or "No".
- **Dietary Restrictions Options** (`dietary_restrictions_options`, `select_one`, required: false): If you have any dietary restrictions, select the corresponding options.
  - This field allows you to specify any dietary restrictions such as "Gluten Free", "Vegetarian", or "Vegan".
- **Number of Guests** (`number_guests`, `number`, required: false): Enter the number of guests attending with you.
  - This field is not required but is useful for us to know how many guests to expect.
- **RSVP Date** (`rsvp_date`, `date`, required: false): Provide the date you plan to RSVP to.
  - This field is not required but is useful for us to track when you RSVPed.
- **RSVP Time** (`rsvp_time`, `time`, required: false): Provide the time you plan to RSVP to.
  - This field is not required but is useful for us to track when you RSVPed.
- **Event Date** (`event_date`, `date`, required: false): Select the date of the actual event.
  - This field is required but is hidden, this is the date of the actual event.
