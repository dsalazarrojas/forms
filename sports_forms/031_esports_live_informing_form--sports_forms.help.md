# esports_live_informing_form - Help Guide
## Purpose
The esport_live_informing_form is used to collect live information about esports events.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure that you have all the necessary information about the event, including the event ID and event name.
2. Enter the event ID and event name in their respective fields.
3. Choose the teams participating in the event from the select_multiple options.
4. Enter the participant's name, which is required for event reporting.
5. Select the match type and match status from the options provided.
6. If applicable, enter the match score.
7. Enter a live update message, if necessary.
8. Select the type of live update, if applicable.
9. Enter the live update time.
10. Add any additional notes, if necessary.
11. Enter the contact information, including email and phone number.
12. Finally, click "Submit" to save the information.

## Field-by-Field Explanation
### Event ID (ID 1)
* **Event ID** (`number`, required): Enter the unique ID of the event.

### Event Name (ID 2)
* **Event Name** (`text`, required): Enter the name of the event.

### Event Start Time (ID 3)
* **Event Start Time** (`date`, optional): Enter the start time of the event, if known.

### Team One (ID 4)
* **Team One** (`select_multiple`, required): Choose the team participating in the event.

### Team Two (ID 5)
* **Team Two** (`select_multiple`, required): Choose the second team participating in the event.

### Participant Name (ID 6)
* **Participant Name** (`text`, required): Enter the name of the participant.

### Match Type (ID 7)
* **Match Type** (`select_one`, required): Select the type of match.

### Match Status (ID 8)
* **Match Status** (`select_one`, required): Select the status of the match.

### Match Score (ID 9)
* **Match Score** (`number`, optional): Enter the score of the match, if applicable.

### Live Update Message (ID 10)
* **Live Update Message** (`text`, optional): Enter a message to update the live information.

### Live Update Type (ID 11)
* **Live Update Type** (`select_one`, required): Select the type of live update.

### Live Update Time (ID 12)
* **Live Update Time** (`time`, required): Enter the time of the live update.

### Note (ID 13)
* **Note** (`note`, optional): Add any additional notes about the event.

### Email (ID 14)
* **Email** (`email`, required): Enter the email address of the contact person.

### Phone (ID 15)
* **Phone** (`text`, required): Enter the phone number of the contact person.

### Submit (ID 16)
* **Submit** (`text`, required): Click to submit the information.

### Email Address (ID 17)
* **Email Address** (`email`, optional): Enter the email address.

### Phone Number (ID 18)
* **Phone Number** (`text`, optional): Enter the phone number.

### Event URL (ID 19)
* **Event URL** (`text`, optional): Enter the URL of the event.

### Live Stream URL (ID 20)
* **Live Stream URL** (`text`, optional): Enter the URL of the live stream.

### Event Image (ID 21)
* **Event Image** (`text`, optional): Enter the URL of the event image.

Note that this help guide is based on the provided YAML schema and assumes that the fields and options are as specified.
