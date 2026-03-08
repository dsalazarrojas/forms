# Cable Car Reservation Form - Help Guide
## Purpose
This form is designed to help you book a scenic cable car experience. It collects essential information to ensure a smooth and enjoyable journey for you and your group. The form is divided into several sections to guide you through the process.

## How To Complete This Form

To complete this form, follow these steps:

1.  Fill in your primary guest's full name and select a desired journey date.
2.  Choose your preferred timeslot for the journey, considering our availability.
3.  Select the type of journey you're interested in, such as one-way or round-trip.
4.  Provide the number of adults, children, and seniors in your group.
5.  Indicate if any guest requires wheelchair access or if you'll be bringing an assistance animal.
6.  Enter your email address and mobile phone number for communication and weather alerts.
7.  If you're part of a larger group, provide the group or tour name.
8.  Confirm that you understand the non-refundable nature of tickets within 24 hours of departure.

## Field-by-Field Explanation

*   **Primary Guest Full Name** (`primary_guest_name`, `text`, required): Enter the full name of the primary guest making the booking.
*   **Desired Journey Date** (`reservation_date`, `date`, required): Choose the date for your scenic cable car experience.
*   **Preferred Timeslot** (`preferred_timeslot`, `select_one`, required): Select the timeslot you prefer for your journey, considering our availability.
*   **Journey Type** (`journey_type`, `select_one`, required): Choose the type of journey you're interested in, such as one-way, one-way down, round trip, or full-day unlimited.
*   **Number of Adults** (`adult_count`, `number`, required): Enter the number of adults in your group, aged 13-64.
*   **Number of Children** (`child_count`, `number`, optional): Enter the number of children in your group, aged 3-12.
*   **Number of Seniors** (`senior_count`, `number`, optional): Enter the number of seniors in your group, aged 65 and above.
*   **Wheelchair Access** (`wheelchair_access`, `select_one`, required): Indicate if any guest requires wheelchair access.
*   **Assistance Animal** (`assistance_animal`, `select_one`, optional): Indicate if you'll be bringing an assistance animal.
*   **Additional Assistance Needed** (`additional_assistance`, `text`, optional): Describe any additional assistance you may need for your journey.
*   **Email Address** (`contact_email`, `email`, required): Enter your email address for confirmation and digital tickets.
*   **Mobile Phone Number** (`contact_phone`, `text`, required): Enter your mobile phone number for weather alerts or delay notifications.
*   **Group or Tour Name** (`group_name`, `text`, optional): Provide the name of your group or tour, if applicable.
*   **I Understand Tickets are Non-Refundable** (`acknowledgment`, `select_one`, required): Confirm that you understand tickets are non-refundable within 24 hours of departure.
