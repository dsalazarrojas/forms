<thinking>

The purpose of this form is to collect information from team members about a social event. The form is used to gather data on the team name, event details (name, date, start and end time, duration), attendees (who attended and who did not), event location, food provided, and feedback. Additionally, it collects information on the department and team lead responsible for the event, as well as any additional comments. The form also asks about the type and frequency of the event, and if there are any suggestions for future events.

To avoid duplication, please ensure that you are not submitting a duplicate survey for the same event. If you are unsure about any of the information, please check with your team lead or the event organizer.

This form is designed to be completed by team members. If you are not a team member, please do not submit this form.

</thinking>

# team_social_event_survey - Help Guide
## Purpose
The team_social_event_survey is a form used to collect information from team members about a social event.

## How To Complete This Form
1. Fill in the team name, event name, and event date.
2. Choose the correct start and end time for the event.
3. Enter the duration of the event.
4. Select whether attendees attended or did not attend.
5. Enter the event location, or select "other" and provide the correct location.
6. Choose if food was provided.
7. Enter any additional feedback or comments.
8. Select the department responsible for the event.
9. Choose the team lead for the event.
10. Enter the email and phone number of the team lead (if applicable).
11. Enter any comments about the event.
12. Select the type of event.
13. Select the frequency of the event.
14. Enter any event suggestions.
15. Finally, submit the form.

## Field-by-Field Explanation
* **Team Name** (`team_name`, text, required): Enter the name of the team that organized the event.
* **Event Name** (`event_name`, text, required): Enter the name of the event.
* **Date of Event** (`date_of_event`, date, required): Enter the date of the event.
* **Start Time** (`start_time`, time, required): Enter the start time of the event.
* **End Time** (`end_time`, time, required): Enter the end time of the event.
* **Duration** (`duration`, number, required): Enter the duration of the event.
* **Attendees** (`attendees`, select_multiple, required): Select who attended and who did not attend.
* **Attendees Who Did Not Attend** (`attendees_who_did_not_attend`, select_multiple, required): Select who did not attend.
* **Event Location** (`event_location`, text, required): Enter the location of the event. If the location is not listed, select "other".
* **If other, please specify** (`event_location_other`, text): Enter a different location if the event was not held at a standard location.
* **Food Provided** (`food_provided`, select_one, required): Select whether food was provided.
* **Any Additional Feedback** (`feedback`, text, required): Enter any additional comments about the event.
* **Department** (`department`, select_one, required): Select the department responsible for the event.
* **Team Lead** (`team_lead`, select_one, required): Select the team lead responsible for the event.
* **Email** (`email`, email, required): Enter the email of the team lead (if applicable).
* **Phone** (`phone`, text, required): Enter the phone number of the team lead (if applicable).
* **Comments** (`comments`, note): Enter any comments or feedback about the event.
* **Type of Event** (`event_type`, select_one, required): Select the type of event.
* **Event Type Other** (`event_type_other`, text): Enter a different type if the event is not listed.
* **Event Frequency** (`event_frequency`, select_one, required): Select the frequency of the event.
* **Event Frequency Other** (`event_frequency_other`, text): Enter a different frequency if the event is not listed.
* **Event Suggestion** (`event_suggestion`, text): Enter any suggestions for future events.
* **Submitted By** (`submitted_by`, text): Enter the name of the person submitting the form.

Note: Some fields are marked as "required" but this does not necessarily mean they are required to be completed. They are simply flagged as required for this specific form.
