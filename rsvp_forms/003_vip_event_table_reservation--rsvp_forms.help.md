<thinking>
The purpose of this form is to help event organizers and staff efficiently manage VIP event reservations by collecting relevant guest information in one centralized location. This form ensures that all required fields are filled out correctly, reducing errors and ensuring that events run smoothly.
</thinking>

# vip_event_table_reservation - Help Guide
## Purpose
The **VIP Event Table Reservation Form** is a centralized platform for event organizers to collect essential information from guests, allowing them to efficiently manage VIP event reservations.

## How To Complete This Form
To complete this form, please follow these steps:

1. Ensure you have all necessary information before filling out the form.
2. Select the correct RSVP method (Web, Phone, or Email).
3. Fill out the form accurately and thoroughly.

## Field-by-Field Explanation
### Guest Email (Required)
* **Guest Email** (`guest_email`, email, required): Enter the guest's email address for communication purposes.

### Event Name (Required)
* **Event Name** (`event_name`, text, required): Enter the name of the event the guest is attending.

### Reservation Date (Required)
* **Reservation Date** (`reservation_date`, date, required): Enter the date the guest is reserving a table for.

### Reservation Time (Required)
* **Reservation Time** (`reservation_time`, time, required): Enter the time of the reserved table.

### Reservation Notes (Optional)
* **Reservation Notes** (`reservation_notes`, text, optional): Provide any additional comments or notes about the guest's reservation.

### Number of Guests (Required)
* **Number of Guests** (`number_of_guests`, number, required): Enter the number of guests in the party.

### Special Requests (Optional)
* **Special Requests** (`special_requests`, select_one, optional): Select any special requests, such as:
	+ Food Allergy
	+ Dietary Restrictions
	+ Special Equipment

### RSVP Method (Required)
* **RSVP Method** (`rsvp_method`, select_one, required): Select how the guest would like to RSVP:
	+ Web
	+ Phone
	+ Email

### Assigned Contact (Optional)
* **Assigned Contact** (`assigned_contact`, select_multiple, optional): Select who will be contacted about the reservation:
	+ Event Organizer
	+ Event Manager
	+ Reservations Coordinator

### Comments (Optional)
* **Comments** (`comments`, note, optional): Enter any additional comments or notes about the guest's reservation.
