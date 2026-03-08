# Guest Departure Notification - Help Guide
## Purpose
The Guest Departure Notification form is used to gather information about a guest's departure from the facility, including check-out date and time, contact details, and any additional comments.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the guest's room number in the Room Number field.
2. Select the check-out date from the calendar or enter the date in the format mm/dd/yyyy.
3. Enter the check-out time in 24-hour format (e.g., 14:00 for 2:00 PM).
4. Enter the departure time in 24-hour format (e.g., 14:00 for 2:00 PM).
5. Enter the guest's name.
6. Enter the guest's contact phone number.
7. Enter the guest's contact email address.
8. Enter any additional comments about the guest's stay.

## Field-by-Field Explanation
* **Room Number** (`room_number`, text, required): Enter the room number assigned to the guest.
* **check_out_date** (`check_out_date`, date, required): Select the date the guest will be checking out or enter the date in the format mm/dd/yyyy.
* **check_out_time** (`check_out_time`, time, required): Enter the check-out time in 24-hour format (e.g., 14:00 for 2:00 PM).
* **departure_time** (`departure_time`, time, required): Enter the departure time in 24-hour format (e.g., 14:00 for 2:00 PM).
* **guest_name** (`guest_name`, text, required): Enter the guest's name.
* **contact_phone** (`contact_phone`, text, optional): Enter the guest's contact phone number.
* **contact_email** (`contact_email`, email, optional): Enter the guest's contact email address.
* **comments** (`comments`, text, optional): Enter any additional comments about the guest's stay.
* **internal_comment** (`internal_comment`, text, optional): Enter any internal comments about the guest's stay or other facility-related information.
