# virtual_table_reservation_form - Help Guide
## Purpose
The virtual table reservation form is used to collect details about reservations for virtual tables. This form helps to gather necessary information to confirm and process the reservation.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the reservation details: Date, Start Time, and Duration to provide a clear understanding of your reservation.
2. Specify the number of guests attending the reservation.
3. Enter your phone number for contact purposes.
4. Add any additional notes about your reservation.
5. Select your preferred email address for communication.
6. Confirm your reservation by selecting 'Yes' or 'No' from the options.
7. Select one or more tables for your reservation.
8. Confirm your reservation by clicking the 'Submit' option.

## Field-by-Field Explanation

* **Reservation Details** (`reservation_details`, text, required: false): This field is where you can input any additional details about your reservation.
* **Date** (`reservation_date`, date, required: false): Enter the date of your reservation.
* **Start Time** (`start_time`, time, required: false): Specify the start time of your reservation.
* **Duration** (`duration`, number, required: false): Input the length of your reservation in hours.
* **Number of Guests** (`number_of_guests`, number, required: false): State the number of people attending your reservation.
* **Phone** (`phone`, text, required: false): Enter your phone number for contact purposes.
* **Reservation Note** (`reservation_note`, note, required: false): Add any additional notes about your reservation.
* **Email** (`email`, email, required: false): Specify your email address for communication.
* **Confirm** (`confirm`, select_one, required: false): Confirm your reservation by selecting 'Yes' or 'No'.
* **Table Selection** (`table_selection`, select_multiple, required: false): Select one or more tables for your reservation.
* **Select a Table** (`table_selection_hint`, select_multiple, required: false): This field serves as a hint for the Table Selection field.
* **Confirm Reservation** (`confirm_reservation`, select_one, required: false): Confirm your reservation by selecting 'Submit' or 'Cancel'.

## Tips

* Make sure to fill in all required fields.
* Double-check your reservation details before submitting.
* If you have any questions or need clarification, contact the relevant contact person.
