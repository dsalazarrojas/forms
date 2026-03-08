# Access Control Check In Form - Help Guide
## Purpose
The Access Control Check In Form is used to collect information from event attendees for security and logistical purposes, including verifying attendee identities and ensuring authorized access to event areas.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in all required fields.
2. Ensure the Guest Full Name and Guest Email are accurate and correct.
3. Enter a valid Registration or Ticket ID.
4. Select the ID Type Presented (e.g., Driver License, Passport, etc.).
5. Choose the Authorized Event Areas you are allowed to access.
6. Indicate if a parking permit was issued.
7. Confirm if a welcome kit or badge was provided.
8. Accept the event safety protocols.
9. Enter the actual check-in time.
10. Enter your Staff Initials for verification purposes.

## Field-by-Field Explanation
* **Guest Full Name** (`guest_name`, text, required): Enter the full name of the guest being checked in.
* **Guest Email** (`guest_email`, email, required): Enter the email address associated with the guest's registration.
* **Registration or Ticket ID** (`registration_id`, text, required): Enter the unique barcode or alphanumeric ID associated with the guest's registration.
* **ID Type Presented** (`id_type_presented`, select_one, required): Select the type of ID presented, such as Driver License, Passport, etc.
* **Authorized Event Areas** (`authorized_event_areas`, select_multiple, required): Choose the areas you are authorized to access based on your ticket level.
* **Was a parking permit issued?** (`parking_permit_issued`, select_one, required): Indicate if a parking permit was issued to the guest.
* **Was the welcome kit or badge provided?** (`welcome_kit_provided`, select_one, required): Confirm if a welcome kit or badge was given to the guest.
* **I have read and accepted the event safety protocols** (`safety_protocols_accepted`, select_one, required): Accept the event safety protocols as part of the check-in process.
* **Actual Check-in Time** (`check_in_time`, time, required): Record the time the guest was checked in.
* **Staff Initials for Verification** (`staff_initials`, text, required): Enter your staff initials for verification purposes.
