<thinking>
We have here a form used for registering participants to an event. The event types are "Pole Bending Event", "Event", "Event 1", "Event 2", and "Event 3". The event "Pole Bending Event" might be specific to a certain event type that requires participants with the ability to bend poles. The form also asks for participant type with options "Participant 1", "Participant 2", "Participant 3", "Participant 4", and "Participant 5". The form does not ask for payment method, but it is still required. This seems unusual. It would be helpful to know the logic or rules behind this.
</thinking>

# Pole Bending Event Registration - Help Guide
## Purpose

This form is used for registering participants to an event. Please fill out this form to provide required information about the participant.

## How To Complete This Form

1. Select the correct event type for the participant from the "Event Type" dropdown.
2. Choose the participant types the participant belongs to.
3. Fill out the participant's information.
4. Optionally, provide payment information.
5. Choose whether the participant will be attending the event ("Yes" or "No").

## Field-by-Field Explanation

* **Participant Information** (`participant_info`, `text`, required/optional): This section is where you will input general information about the participant.
* **Event Details** (`event_details`, `text`, required/optional): This section is not currently in use.
* **Contact Information** (`contact_info`, `text`, required/optional): This section is not currently in use.
* **Payment Information** (`payment_info`, `text`, required/optional): This section is not currently in use.
* **Event Participants** (`event_participants`, `select_multiple`, required/optional): Choose whether the participant will be attending the event ("Yes" or "No").
* **Participant Name** (`participant_name`, `text`, required/optional): This is the participant's name.
* **First Name** (`participant_first_name`, `text`, required/optional): This is the participant's first name.
* **Last Name** (`participant_last_name`, `text`, required/optional): This is the participant's last name.
* **Email** (`participant_email`, `email`, required/optional): This is the participant's email address.
* **Phone** (`participant_phone`, `text`, required/optional): This is the participant's phone number.
* **Address** (`participant_address`, `text`, required/optional): This is the participant’s address.
* **Payment Method** (`payment_method`, `text`, required/optional): This is not currently in use. It seems this should be filled out, but the rules around payment are not clear.
* **Event Type** (`event_type`, `select_one`, required/true): Choose the correct event type for the participant. 
* **Participant Type** (`participant_type`, `select_multiple`, required/true): Choose the participant types the participant belongs to.
* **Birthday** (`participant_birthday`, `date`, required/optional): This is the participant’s birthday.
* **Start Date** (`participant_start_date`, `date`, required/optional): This is the participant's start date. This field is currently not in use in this form.
* **Payment Type** (`participant_start_date`, `text`, required/true): This field is required but it seems it is not in use and it is not clear how it is used.
