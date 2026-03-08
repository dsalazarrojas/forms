# Community Theater RSVP Form - Help Guide
## Purpose
This form is for community theater event attendees to RSVP, select their event date and time, and provide details about their attendance. It helps us understand your needs and preferences to ensure a great experience.

## How To Complete This Form

1.  **Full Name**: Enter your first and last name to help us personalize your experience.
2.  **Email Address**: Enter your email address for confirmation and updates.
3.  **Phone Number (Optional)**: Provide your contact number for any necessary communication.
4.  **Event**: Select the performance or event for which you are RSVPing.
5.  **Event Date**: Choose the date for the selected event.
6.  **Attendance Status**: Confirm if you will be attending, and if not, provide a reason.
7.  **Number of Guests**: Enter the number of people attending with you, including yourself.
8.  **Guest Names**: List the full names of all attendees.
9.  **Seating Preference**: Select your seating preference from the available options.
10.  **Ticket Type**: Choose the type of admission you require.
11.  **Dinner Options (if applicable)**: If the event offers a pre-show dinner, select your preference.
12.  **Dietary Restrictions or Allergies (if applicable)**: Select any dietary restrictions or allergies you have.
13.  **Dietary Details (if applicable)**: Provide additional details about your dietary needs.
14.  **Accessibility Needs (if applicable)**: Select any accessibility needs you may have.
15.  **Accessibility Details (if applicable)**: Describe your accessibility needs to help us accommodate you.
16.  **Transportation Method**: Choose how you plan to get to the theater.
17.  **Parking Information (if needed)**: Select if you require parking information.
18.  **Backstage Tour (if interested)**: Express your interest in a backstage tour.
19.  **Cast Meet and Greet (if interested)**: Choose if you want to attend a cast meet and greet.
20.  **Merchandise (if interested)**: Select if you're interested in purchasing merchandise.
21.  **First Time Attending (if applicable)**: Confirm if this is your first time at our theater.
22.  **How Did You Hear About This Event (if applicable)**: Select the source of your referral or how you heard about this event.
23.  **Special Occasion (if applicable)**: Confirm if you're celebrating a special occasion.
24.  **Special Occasion Details (if applicable)**: Provide details about the special occasion, if applicable.
25.  **Additional Comments or Requests (if any)**: Share any additional comments or requests you might have.

## Field-by-Field Explanation
*   **Full Name**: <a href="https://example.com">First and last name</a> (`guest_full_name`, text, **Required**): Enter your full name as it appears on your ID or as you prefer it to be displayed.
*   **Email Address**: <a href="https://example.com">Email Address for confirmation and updates</a> (`guest_email`, email, **Required**): Enter your email address to receive updates about the event.
*   **Phone Number (Optional)**: Enter your phone number for any necessary communication. This is optional, but it helps us contact you if needed.
*   **Event**: <select multiple> <a href="https://example.com">Select the performance or event</a> (`rsvp_event`, select_one, **Required**): Choose the event you're RSVPing for, such as "Opening Night Gala" or "Spring Musical - Evening Show".
*   **Event Date**: <select> <a href="https://example.com">Select the date</a> (`event_date`, date, **Required**): Pick the date of the event you're RSVPing for.
*   **Attendance Status**: <select one> <a href="https://example.com">Yes, I will attend</a>, <a href="https://example.com">No, I cannot attend</a>, or <a href="https://example.com">Maybe, will confirm later</a> (`attendance_status`, select_one, **Required**): Confirm your attendance or provide a reason if you cannot attend.
*   **Number of Guests**: <a href="https://example.com">Enter the number of guests attending with you</a> (`number_of_guests`, number, **Required**): Include the number of people attending with you, including yourself.
*   **Guest Names**: <a href="https://example.com">List full names of all attendees</a> (`guest_names`, text, **Optional**): Enter the full names of all attendees attending with you.
*   **Seating Preference**: <select one> <a href="https://example.com">Orchestra (Front)</a>, <a href="https://example.com">Orchestra (Middle)</a>, <a href="https://example.com">Orchestra (Back)</a>, <a href="https://example.com">Mezzanine</a>, <a href="https://example.com">Balcony</a>, <a href="https://example.com">No preference</a>, or <a href="https://example.com">Accessible seating needed</a> (`seating_preference`, select_one, **Required**): Choose your seating preference from the available options.
*   **Ticket Type**: <select one> <a href="https://example.com">General Admission</a>, <a href="https://example.com">Senior (65+)</a>, <a href="https://example.com">Student (with ID)</a>, <a href="https://example.com">Child (under 12)</a>, <a href="https://example.com">Subscriber</a>, <a href="https://example.com">Donor/Member</a>, <a href="https://example.com">Complimentary</a>, or <a href="https://example.com">Press/Media</a> (`ticket_type`, select_one, **Required**): Select the type of ticket you need for the event.
*   **Dinner Options**: <select one> <a href="https://example.com">Yes, I will join you</a>, <a href="https://example.com">No, not interested</a>, or <a href="https://example.com">Maybe</a> (`dinner_attendance`, select_one, **Optional**): Choose if you want to join the pre-show dinner.
*   **Dietary Restrictions or Allergies**: <select multiple> <a href="https://example.com">None</a>, <a href="https://example.com">Vegetarian</a>, <a href="https://example.com">Vegan</a>, <a href="https://example.com">Gluten-Free</a>, <a href="https://example.com">Dairy-Free</a>, <a href="https://example.com">Nut Allergy</a>, <a href="https://example.com">Shellfish Allergy</a>, <a href="https://example.com">Kosher</a>, <a href="https://example.com">Halal</a>, or <a href="https://example.com">Other</a> (`dietary_restrictions`, select_multiple, **Optional**): Select any dietary restrictions or allergies you have.
*   **Dietary Details**: <a href="https://example.com">Enter additional details about your dietary needs</a> (`dietary_details`, text, **Optional**): Provide any additional details about your dietary needs.
*   **Accessibility Needs**: <select multiple> <a href="https://example.com">None</a>, <a href="https://example.com">Wheelchair accessible seating</a>, <a href="https://example.com">Assistive listening device</a>, <a href="https://example.com">Large print program</a>, <a href="https://example.com">Sign language interpreter</a>, <a href="https://example.com">Audio description</a>, <a href="https://example.com">Service animal accommodation</a>, or <a href="https://example.com">Other</a> (`accessibility_needs`, select_multiple, **Optional**): Select any accessibility needs you may have.
*   **Accessibility Details**: <a href="https://example.com">Describe your accessibility needs</a> (`accessibility_details`, text, **Optional**): Provide any additional details about your accessibility needs.
*   **Transportation Method**: <select one> <a href="https://example.com">Personal vehicle</a>, <a href="https://example.com">Public transportation</a>, <a href="https://example.com">Ride-share (Uber/Lyft)</a>, <a href="https://example.com">Theater shuttle (if available)</a>, <a href="https://example.com">Walking</a>, or <a href="https://example.com">Other</a> (`transportation_method`, select_one, **Optional**): Choose your transportation method to the theater.
*   **Parking Information**: <select one> <a href="https://example.com">No, I'm familiar with the area</a>, <a href="https://example.com">Yes, please send parking information</a>, or <a href="https://example.com">Yes, I need accessible parking</a> (`parking_needed`, select_one, **Optional**): Confirm if you need parking information.
*   **Backstage Tour**: <select one> <a href="https://example.com">Yes, very interested</a>, <a href="https://example.com">Maybe, depends on schedule</a>, or <a href="https://example.com">No, not interested</a> (`backstage_tour`, select_one, **Optional**): Express your interest in a backstage tour.
*   **Cast Meet and Greet**: <select one> <a href="https://example.com">Yes, very interested</a>, <a href="https://example.com">Maybe, depends on schedule</a>, or <a href="https://example.com">No, not interested</a> (`cast_meetgreet`, select_one, **Optional**): Choose if you want to attend a cast meet and greet.
*   **Merchandise**: <select one> <a href="https://example.com">Yes, definitely</a>, <a href="https://example.com">Maybe</a>, or <a href="https://example.com">No, thank you</a> (`merchandise_interest`, select_one, **Optional**): Select if you're interested in purchasing merchandise.
*   **First Time Attending**: <select one> <a href="https://example.com">Yes, first time</a>, <a href="https://example.com">No, I've been before</a>, or <a href="https://example.com">I'm a regular subscriber</a> (`first_time_attendee`, select_one, **Required**): Confirm if this is your first time at our theater.
*   **How Did You Hear About This Event**: <select one> <a href="https://example.com">Email Newsletter</a>, <a href="https://example.com">Social Media</a>, <a href="https://example.com">Theater Website</a>, <a href="https://example.com">Friend or Family</a>, <a href="https://example.com">Newspaper/ Magazine</a>, <a href="https://example.com">Radio</a>, <a href="https://example.com">Previous Attendant</a>, or <a href="https://example.com">Other</a> (`how_heard_about`, select_one, **Optional**): Select the source of your referral or how you heard about this event.
*   **Special Occasion**: <select one> <a href="https://example.com">False</a>, <a href="https://example.com">Birthday</a>, <a href="https://example.com">Anniversary</a>, <a href="https://example.com">Date Night</a>, <a href="https://example.com">Family Outing</a>, <a href="https://example.com">Corporate Event</a>, or <a href="https://example.com">Other</a> (`special_occasion`, select_one, **Optional**): Confirm if this is a special occasion.
*   **Special Occasion Details**: <a href="https://example.com">Enter details about the special occasion</a> (`special_occasion_details`, text, **Optional**): Provide details about the special occasion if applicable.
*   **Additional Comments or Requests**: <a href="https://example.com">Enter any additional comments or requests</a> (`additional_comments`, text, **Optional**): Share any additional comments or requests you might have.
*   **RSVP Date**: <a href="https://example.com">Today's date</a> (`rsvp_date`, date, **Required**): Enter today's date to confirm your RSVP.

## Tips

*   Please ensure you've selected the correct event and date for your attendance.
*   If you have any accessibility needs, please provide details to help us accommodate you.
*   If you're celebrating a special occasion, we might have a special surprise for you!
