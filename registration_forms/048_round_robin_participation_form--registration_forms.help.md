<thinking>

This form is used to register participants for a round robin participation. The form captures essential information about the participant, such as name, email, and availability. This information will help to manage the participant schedule for the round robin participation.

Before proceeding, ensure that the form is not a duplicate by checking the participant's name in the database. 

</thinking>

# Round Robin Participation Form - Help Guide
## Purpose
The purpose of this form is to register participants for a round robin participation. 

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Session** name in the first field.
2. Select a **Date** for the session using the calendar icon.
3. Choose the **Time** for the session.
4. Enter your **Participant Name** as it should appear in the participant roster.
5. Enter your **Participant Email** if you wish to receive notifications.
6. Select your **Availability** by choosing one day of the week from the dropdown menu.
7. Confirm your **Availability** by selecting all the days you are available. Note that this will override your previous selection.
8. Enter any additional **Notes** about your participation if necessary.
9. (Optional) Enter the **Event Date** and **Event Time** if your session is not part of the regular round robin participation.

## Field-by-Field Explanation
* **Session** (`round_robin_session`, text, required): Enter the name of the session you want to participate in.
* **Date** (`session_date`, date, required): Select the date of the session using the calendar icon.
* **Time** (`session_time`, time, required): Choose the time of the session.
* **Participant Name** (`participant_name`, text, required): Enter your name as it should appear in the participant roster.
* **Participant Email** (`participant_email`, email, optional): Enter your email address if you wish to receive notifications.
* **Availability** (`participant_availability`, select_one, required): Select one day of the week when you are available to participate.
* **Confirm Availability** (`confirm_participant_availability`, select_multiple, required): Confirm your availability by selecting all the days you are available. Note that this will override your previous selection.
* **Notes** (`notes`, note, optional): Enter any additional notes about your participation.
* **Event Date** (`event_date`, date, optional): Enter the date of the event, if different from the regular round robin participation.
* **Event Time** (`event_time`, time, optional): Choose the time of the event, if different from the regular round robin participation.

## Tips
- Make sure to select only one day of the week for the **Availability** field.
- Confirm your availability correctly by selecting all the days you are available in the **Confirm Availability** field.
- The **Event Date** and **Event Time** fields are only required if your session is not part of the regular round robin participation.
