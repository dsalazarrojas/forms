# Concert Ticket Registration Form - Help Guide
## Purpose
This form is designed to collect registration information from attendees for a concert ticket event. It helps the event organizers gather necessary details for a smooth registration process.

## How To Complete This Form
- Please fill in the form completely and accurately.
- Ensure that the registrant name and email are correct and up-to-date.
- Choose the correct ticket category that suits your requirements.
- Enter the number of tickets you wish to register for.
- Provide the names of all attendees in your party if applicable.
- If you have any accessibility needs, please describe them in the provided field.
- Select your current payment status for the registration.
- If you have any special requests (e.g., dietary or seating preferences), please mention them in this field.
- Read and follow the confirmation instructions carefully after submission.

## Field-by-Field Explanation

* **Registrant name** (`registrant_name`, text, required): Enter your full name as it appears on your ID or passport.
* **Email** (`email`, email, required): Enter a valid email address for registration confirmation and updates.
* **Phone number** (`phone`, text, optional): Provide your contact phone number for any further communication.
* **Ticket category** (`ticket_category`, select_one, required): Choose from Standard, VIP, Student, or Group categories.
* **Number of tickets** (`number_of_tickets`, number, required): Enter the number of tickets you wish to register for.
* **Attendee names** (`attendee_names`, text, optional): If registering multiple people, list their names separated by commas or enter each name on a new line.
* **Accessibility needs** (`accessibility_needs`, text, optional): Describe any accessibility needs you or your group may have.
* **Payment status** (`payment_status`, select_one, required): Select Paid, Pending, or Invoice as your current payment status.
* **Special requests** (`special_requests`, text, optional): Mention any special requests, such as dietary or seating preferences.
* **Confirmation instructions** (`confirmation_instructions`, note, optional): This is for event organizers to provide next steps after registration.
