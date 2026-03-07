<thinking>
The purpose of this form is to create and manage invitations for VIP events. The form allows users to input various details about the event, including the date, time, location, and attendees. The form also includes options for sending invites and setting the event status. Users can choose to send invitations via different methods and add notes about the event. This form is likely used by administrators or event coordinators to manage VIP events within a sales-related context.
The form is not designed for duplicate or irrelevant submissions, as the required fields ensure that users input necessary information for each event.
</thinking>

# vip_event_invitation_form - Help Guide
## Purpose
This form is designed to create and manage invitations for VIP events.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the **User** option for the event:
	* Choose the correct user option to associate with the event.
2. Select the **Event** option for the event:
	* Choose one or more event options to determine the type of event.
3. Input the **Event Date** and **Event Time** for the event:
	* Enter the date and time of the event.
4. Input the **Event Location** and **Event Description** for the event:
	* Provide a detailed description of the event and its location.
5. Select the **Client**:
	* Choose whether the client is attending the event.
6. Input the **Client Email** and **Client Phone**:
	* Enter the client's email and phone number.
7. Select the **VIP Guests**:
	* Choose whether VIP guests are attending the event.
8. Select **Send Invites** and **Invite Method**:
	* Choose whether to send invites and select the method for sending invites.
9. Input the **Invite Message** and **Send Date** and **Send Time**:
	* Create a message for the invites and set the date and time for sending.
10. Add **Notes** for the event:
	* Provide additional details about the event.
11. Select the **Event Status**:
	* Choose the status of the event (Active or Inactive).

## Field-by-Field Explanation
- **User** (`user`, `select_one`, required): Select the user associated with the event.
- **Event** (`event`, `select_multiple`, required): Choose one or more event options.
- **Event Date** (`event_date`, `date`, required): Input the date of the event.
- **Event Time** (`event_time`, `time`, required): Input the time of the event.
- **Event Location** (`event_location`, `text`, required): Input the location of the event.
- **Event Description** (`event_description`, `text`, required): Provide a detailed description of the event.
- **Client** (`client`, `select_one`, required): Choose whether the client is attending the event.
- **Client Email** (`client_email`, `email`, required): Input the client's email.
- **Client Phone** (`client_phone`, `text`, required): Input the client's phone number.
- **VIP Guests** (`vip_guests`, `select_multiple`, required): Choose whether VIP guests are attending the event.
- **Send Invites** (`send_invites`, `select_one`, required): Choose whether to send invites.
- **Invite Method** (`invite_method`, `select_one`, required): Select the method for sending invites.
- **Invite Message** (`invite_message`, `text`, required): Create a message for the invites.
- **Send Date** (`send_date`, `date`, required): Set the date for sending invites.
- **Send Time** (`send_time`, `time`, required): Set the time for sending invites.
- **Notes** (`notes`, `text`, required): Provide additional details about the event.
- **Event Status** (`event_status`, `select_one`, required): Choose the status of the event (Active or Inactive).
- **Event ID** (`event_id`, `text`, required): Input the Event ID.
- **Form Version** (`form_version`, `text`, required): Input the form version.
- **Created By** (`created_by`, `text`, required): Input the created by field.
- **Created At** (`created_at`, `date`, required): Input the created at field.
- **Updated By** (`updated_by`, `text`, required): Input the updated by field.
- **Updated At** (`updated_at`, `date`, required): Input the updated at field.
- **Deleted By** (`deleted_by`, `text`, required): Input the deleted by field.
- **Deleted At** (`deleted_at`, `date`, required): Input the deleted at field.

Note: The fields marked as "required" are mandatory fields and need to be filled out.
