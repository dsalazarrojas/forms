<thinking>

The purpose of this form is to collect information about guests attending an event, ensuring that event planners have a clear record of their contacts and guests' details. This form is meant to be simple and straightforward, making it easy for users to provide the necessary information. 

The form collects data for a single guest, including their name, email, phone number, and other relevant details. It also allows users to specify if the guest is a client, colleague, or colleague's guest, and if they have additional contacts. The form does not require users to provide any unnecessary information, keeping it concise and user-friendly.

</thinking>

# Simple Guest List Form - Help Guide
## Purpose
The Simple Guest List Form is designed to collect basic information about your guests attending an event. This form helps event planners keep track of who's attending, making it easier to organize and follow up with them.

## How To Complete This Form
To complete this form, follow these steps:

1. Click on the "Submit" button to start filling out the form.
2. Fill out each field with the required information.
3. If you have additional contacts, select "Yes" in the "Additional Contacts" field.
4. If the guest is a client, colleague, or colleague's guest, select the corresponding option in the "Attendee Type" field.
5. Fill out the "Event Date" and "Event Time" fields with the relevant information about the event.
6. Enter the "Event Location" of the event.
7. Once you have filled out all the required fields, click on the "Submit" button to complete the form.

## Field-by-Field Explanation
### Guest List
* **Guest List** (`guest_list`, `note`, required: false): This is the main field where you can take note of any important information related to the guest.
### Event Contact
* **Event Contact** (`event_contact`, `text`, required: false): Enter the name or title of the person responsible for the event.
### Guest Name
* **Guest Name** (`guest_name`, `text`, required: false): Enter the name of the guest.
### Guest Email
* **Guest Email** (`guest_email`, `email`, required: false): Enter the guest's email address.
### Guest Phone
* **Guest Phone** (`guest_phone`, `text`, required: false): Enter the guest's phone number.
### Notes
* **Notes** (`notes`, `text`, required: false): Leave any additional notes about the guest.
### Additional Contacts
* **Additional Contacts** (`additional_contacts`, `select_multiple`, required: false): Check if you have additional contacts for the guest.
### Attendee Type
* **Attendee Type** (`attendee_type`, `select_one`, required: false): Choose whether the guest is a Client, Colleague, or Colleague's Guest.
### Event Date
* **Event Date** (`event_date`, `date`, required: false): Enter the date of the event.
### Event Time
* **Event Time** (`event_time`, `time`, required: false): Enter the time of the event.
### Event Location
* **Event Location** (`event_location`, `text`, required: false): Enter the location of the event.
