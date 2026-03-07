<thinking>
To create a user-facing help guide for the "Gym Equipment Reservation Form", I need to determine the form's purpose and required fields. 

The form appears to be for reserving gym equipment, and it seems that some fields are not required. 

I will assume that the form is for a gym to reserve equipment for members, and the non-required fields are optional. 

This assumption is based on the fact that the form has fields for "reserved_by" and "assigned_to", which implies that the reservation is made on behalf of someone, and "reservation_status" which might indicate the status of the reservation. 

Please let me correct me if I'm wrong.
</thinking>

# Gym Equipment Reservation Form - Help Guide
## Purpose
The Gym Equipment Reservation Form is a tool to reserve gym equipment for members. Please use this form to inform the gym management of your equipment needs.

## How To Complete This Form
1. Fill out this form completely if you are making a reservation.
2. Select "Yes" for "assigned_to" to indicate that the equipment is reserved for someone else. If the equipment is for your own use, select "No".
3. Select "Yes" for "reserved_by" to indicate that the reservation is made on your behalf. If the reservation is made by someone else, select "No".
4. Choose the start and end dates for your reservation.
5. Enter the reservation time in hours.
6. Leave a note to provide additional information about your reservation.
7. You can also select the status of your reservation as "Active" or "Inactive".

## Field-by-Field Explanation
* **Equipment** (`equipment`, select_multiple, not required):
	+ Select all the equipment you would like to reserve.
* **start_date** (`start_date`, date, not required):
	+ Enter the start date of your reservation.
* **end_date** (`end_time`, time, not required):
	+ Enter the end date of your reservation.
* **reservation_time** (`reservation_time`, number, not required):
	+ Enter the reservation time in hours. Please note that this is a numerical value.
* **Notes** (`notes`, note, not required):
	+ Leave a note to provide additional information about your reservation.
* **Assigned to** (`assigned_to`, select_one, not required):
	+ Select "Yes" if the reservation is for someone else. If the reservation is for you, select "No".
* **Reserved by** (`reserved_by`, select_one, not required):
	+ Select "Yes" if the reservation is made on your behalf. If the reservation is made by you, select "No".
* **reservation_status** (`reservation_status`, select_one, not required):
	+ Select "Active" if the reservation is active. Select "Inactive" if the reservation is inactive.
