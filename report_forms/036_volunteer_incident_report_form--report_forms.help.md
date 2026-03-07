<thinking>
We need to ensure that the form is used for its intended purpose and that users understand what information to provide. The form is meant to collect data about incidents involving volunteers, including the date of the incident, the location, the type of volunteer involved, a detailed description of what happened, and follow-up information. To prevent duplication, we should check if a similar incident has been reported recently.

The form is for reporting incidents that have occurred involving volunteers. If the same incident has already been reported, the user should not be able to submit the form again.

To complete the form, users will need to provide information about the incident, including the date it occurred, the location, the type of volunteer involved, and a detailed description of what happened. They will also need to indicate whether the incident was reported or not, and if follow-up is required. If follow-up is required, they will need to provide additional notes about the next steps. Finally, they will need to provide contact information for the reporting volunteer.

Each field should be filled out accurately and completely, but users should not need to provide redundant information if an incident has already been reported.
</thinking>

# Volunteer Incident Report Form - Help Guide
## Purpose
The Volunteer Incident Report Form is a tool to collect information about incidents involving volunteers. It helps ensure that incidents are reported and followed up on accurately and thoroughly.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form to ensure you are providing information about a new incident. If the same incident has already been reported, do not submit the form again.
2. Fill out the form with the required information: date the incident occurred, location, type of volunteer involved, a detailed description of what happened, and whether the incident was reported or not.
3. Indicate if follow-up is required and provide additional notes if needed.
4. Provide contact information for the reporting volunteer.

## Field-by-Field Explanation

* **Date Occurred** (`date_occurred`, date, required/optional): Enter the date the incident occurred.
* **Volunteer Location** (`volunteer_location`, text, required/optional): Enter the location where the incident occurred.
* **Volunteer Type** (`volunteer_type`, select_one, required/optional): Choose the type of volunteer involved in the incident (Volunteer, Staff Member, or Contractor).
* **Incident Description** (`incident_description`, text, required/optional): Provide a detailed description of what happened.
* **Incident Outcome** (`incident_outcome`, select_one, required/optional): Indicate whether the incident was reported or not.
* **Follow-up Required** (`follow_up_required`, select_multiple, required/optional): Check if follow-up is required. If so, provide additional notes in the **Follow-up Notes** field.
* **Follow-up Notes** (`follow_up_notes`, note, required/optional): Enter additional follow-up notes, such as action items or next steps.
* **Reporting Volunteer's Name** (`reporting_volunteer_name`, text, required/optional): Enter the name of the volunteer reporting the incident.
* **Reporting Volunteer's Email** (`reporting_volunteer_email`, email, required/optional): Enter the email of the volunteer reporting the incident.
* **Reporting Volunteer's Contact** (`reporting_volunteer_contact`, text, required/optional): Enter the contact information for the volunteer reporting the incident.
* **Incident Reported To** (`incident_reported_to`, select_one, required/optional): Choose who the incident was reported to (Volunteer Coordinator, Program Director, or Executive Director).
* **Incident Reported By** (`incident_reported_by`, select_one, required/optional): Choose who reported the incident (Volunteer, Staff Member, or Contractor).

## Tips

* Be accurate and complete when filling out the form.
* Only submit new incidents.
* If follow-up is required, provide additional notes to ensure next steps are taken.
