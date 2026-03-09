# Massage Booking Form - Help Guide
## Purpose
This form is used to collect information for massage bookings. It helps the spa or wellness center schedule and manage massage appointments.

## How To Complete This Form
To complete this form, follow these steps:

*   Select a date and time for your massage.
*   Choose the type and duration of your massage.
*   Provide your contact information: Client Name, Email, and Phone Number.
*   Optionally, provide additional details such as Massage Description, Therapist Name, Therapist Phone, and Therapist Email.
*   Choose your preferred payment method and appointment status.

## Field-by-Field Explanation

* **Select a Date and Time** (`schedule_a_massage`, select_one): Select a date and time for your massage appointment. Choose a date from the calendar and select a time slot that suits you best.
* **Massage Type** (`select_a_massage_type`, select_one): Choose the type of massage you want to book. Select from the options available: 60 min, 90 min, and 120 min.
* **Select a Massage Duration** (`select_a_massage_duration`, select_one): Select the duration of your massage, which is also one of the options available: 60 min, 90 min, or 120 min.
* **Select a Time** (`select_a_time`, time): Select a time for your massage appointment. Note that this field is not related to the duration, but rather the specific time of day for your appointment.
* **Select a Date** (`select_a_date`, date): Select a date for your massage appointment.
* **Select a Client** (`select_a_client`, select_one): Choose a client for your massage appointment, which is likely a staff member or a therapist.
* **Client Name** (`client_name`, text): Provide your name for the massage booking.
* **Client Email** (`client_email`, email): Enter your email address for contact purposes.
* **Client Phone** (`client_phone`, text): Enter your phone number for contact purposes.
* **Massage Description** (`massage_description`, text): Optionally, describe the reason for your massage booking.
* **Therapist Name** (`therapist_name`, text): Optionally, provide the name of the therapist assigned to your massage.
* **Therapist Phone** (`therapist_phone`, text): Optionally, enter the phone number of the assigned therapist.
* **Therapist Email** (`therapist_email`, email): Optionally, enter the email address of the assigned therapist.
* **Massage Notes** (`massage_notes`, text): Optionally, add any additional notes about your massage booking.
* **Payment Method** (`payment_method`, select_one): Choose how you want to pay for your massage, which is either Cash or Credit.
* **Appointment Status** (`appointment_status`, select_one): Select the status of your massage appointment, which is either Confirmed or Cancelled.
* **Select a Client** (`select_a_client`, select_one): This field is not clearly labeled as it seems to be a duplicate of the `select_a_client` field.
