<thinking>
The event registration form is designed to be filled out by users to provide event organizers with detailed information about their event seating arrangements. This form should only be used for events such as weddings, conferences, and festivals, which require specific seating arrangements. The form's purpose is to ensure that event organizers can create effective seating plans for their attendees. 
</thinking>

# Event Seating Arrangement Form - Help Guide
## Purpose
The Event Seating Arrangement Form is a tool for event organizers to collect information about their event's seating arrangements. This information helps them create efficient seating plans for attendees.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the type of event you are hosting by choosing one of the available options (wedding, conference, or festival).
2.  Enter the number of guests that will be attending your event.
3.  Select the desired seating arrangement for your event (round, rectangular, or buffet).
4.  Choose the size of the tables you need (small, large, or extra large).
5.  Select the layout of the tables in the venue (linear, U-shaped, or horseshoe).
6.  Indicate if you want attendees to be able to move around freely (Yes or No).
7.  Select the type of tablecloth you desire (white, black, or red).
8.  Choose the type of chair you need (standard, VIP, or wheelchair accessible).
9.  Select the design of the tablecloth (plain, lace, or flowers).

## Field-by-Field Explanation
* **Event Type** (`event_type`, select_one, required: false): Choose the type of event you are hosting (wedding, conference, or festival).
* **Number of Guests** (`number_of_guests`, number, required: false): Enter the number of guests that will be attending your event.
* **Seating Arrangement** (`seating_arrangement`, select_multiple, required: false): Select the desired seating arrangement for your event (round, rectangular, or buffet).
* **Table Size** (`table_size`, select_one, required: false): Choose the size of the tables you need (small, large, or extra large).
* **Table Layout** (`table_layout`, select_multiple, required: true): Select the layout of the tables in the venue (linear, U-shaped, or horseshoe).
* **Seat Position** (`seat_position`, select_multiple, required: false): Indicate if you want attendees to be able to move around freely (Yes or No).
* **Tablecloth** (`tablecloth`, select_one, required: false): Select the type of tablecloth you desire (white, black, or red).
* **Chair Type** (`chair_type`, select_one, required: false): Choose the type of chair you need (standard, VIP, or wheelchair accessible).
* **Tablecloth Type** (`tablecloth_type`, select_one, required: false): Select the design of the tablecloth you desire (plain, lace, or flowers).
