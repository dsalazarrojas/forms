<thinking>
The form is designed to capture information about incidents that occur on tour guides, such as dates, locations, and descriptions of what happened. This form is likely used by tour guides to report incidents that may have occurred during their tours, or by tour administrators to collect information about past incidents to prevent future occurrences. This form should not be duplicated for every single incident, but rather used to report multiple incidents in bulk.
</thinking>

# Tour Guide Incident Form - Help Guide
## Purpose
The Tour Guide Incident Form is used to report incidents that occur on tour guides. This form helps tour guides and administrators to collect and track information about past incidents, reducing the risk of future occurrences.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the date the incident occurred from the calendar.
2. Enter the location of the incident.
3. Provide a brief description of what happened.
4. Select the current status of the incident (Active or Inactive).
5. Identify the tour guide who reported the incident (Yes or No).
6. Identify the category of the incident (Yes or No).
7. Enter the email address of the tour guide who reported the incident (optional).
8. Enter the phone number of the tour guide who reported the incident (optional).
9. Add any additional notes about the incident reported by the tour guide (optional).
10. Click "Submit" to save the form.

## Field-by-Field Explanation
* **Incident Date** (`incident_date`, date, required: false): Enter the date the incident occurred. Select the date from the calendar to ensure accuracy.
* **Incident Location** (`incident_location`, text, required: false): Enter the location where the incident happened. This could be a specific room, building, or area.
* **Incident Description** (`incident_description`, text, required: false): Provide a brief description of what happened during the incident.
* **Incident Status** (`incident_status`, select_one, required: false): Select the current status of the incident (Active or Inactive).
* **Incident Reporter** (`incident_reporter`, select_multiple, required: false): Identify the tour guide who reported the incident (Yes or No).
* **Incident Category** (`incident_category`, select_multiple, required: false): Identify the category of the incident (Yes or No).
* **Incident Reporter Email** (`incident_reporter_email`, email, required: false): Enter the email address of the tour guide who reported the incident (optional).
* **Incident Reporter Phone** (`incident_reporter_phone`, text, required: false): Enter the phone number of the tour guide who reported the incident (optional).
* **Incident Reporter Notes** (`incident_reporter_notes`, note, required: false): Add any additional notes about the incident reported by the tour guide (optional).
* **Submit** (`submit`, text, required: false): Click "Submit" to save the form.
