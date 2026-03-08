# Adventure Sports Reservation Form - Help Guide
## Purpose
This form is used to collect information from users to reserve a spot in an adventure sports event.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Reserver name**, which is your full name for booking purposes.
2. Choose the **Activity type** for the event you wish to reserve.
3. Select the desired **Reservation date** for the event.
4. Enter the **Number of participants** attending the event.
5. Choose your preferred **Payment option** (Pay now, Pay on arrival, or Invoice).
6. If necessary, provide any **Special requests** for additional arrangements.
7. Enter your **Contact phone** number for booking confirmation.
8. If required, select **Confirmation required** to receive a confirmation call.

## Field-by-Field Explanation
* **Reserver name** (`reserver_name`, text, required): Enter your full name for booking purposes.
* **Activity type** (`activity_type`, text, required): Choose the type of adventure sports event you wish to reserve.
* **Reservation date** (`reservation_date`, date, required): Select the date you would like to reserve a spot for.
* **Number of participants** (`participant_count`, number, required): Enter the total number of attendees.
* **Payment option** (`payment_option`, select_one, required): Choose how you would like to make payment for the event (Pay now, Pay on arrival, or Invoice).
* **Special requests** (`special_requests`, text, optional): If you need to make any special requests, enter them here.
* **Contact phone** (`contact_phone`, text, required): Enter your contact phone number for booking confirmation.
* **Confirmation required** (`confirmation_required`, select_one, optional): If you need to receive a confirmation call, select 'True'.
