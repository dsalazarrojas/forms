<thinking>
This form is for users to book a time slot on a video wall display. The form collects contact information, a specific booking date and time, whether the display requires a meeting or event, and a terms agreement.
</thinking>

# video_wall_display_booking_form - Help Guide
## Purpose
The video wall display booking form is used to book a time slot on the video wall display for events, meetings, and other purposes.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill out the **Contact Information** form with your name and contact details.
2. Select a **Booking Date and Time** that suits your needs.
3. Indicate whether the booking is for a **Display Requirements** (yes/no).
4. Review and agree to the **Terms Agreement**.

## Field-by-Field Explanation

* **Contact Information (user_details)**: Enter your name and contact details so we can get in touch with you to confirm your booking.
	+ Type: `text`
	+ Required: Yes
* **Booking Date and Time (booking_date)**: Select a specific date and time for your booking.
	+ Type: `date`
	+ Required: Yes
* **Display Requirements (display_requirements)**: Indicate whether the booking is for a meeting or event.
	+ Type: `select_one`
	+ Required: Yes
	+ Options: Yes, No
* **Terms Agreement (terms_agreement)**: Review and agree to the terms and conditions of your booking.
	+ Type: `text`
	+ Required: Yes
