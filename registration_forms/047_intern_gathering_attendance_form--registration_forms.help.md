# <string> - Help Guide
## Purpose
This form is designed to collect information from attendees for events organized by the specified <string>. The form asks for basic attendee information and event details to help the organizers keep track of the event.

## How To Complete This Form
To complete this form, follow these steps:

* Read the form instructions carefully and fill in the required information.
* Enter your <Name> in the Name field.
* Indicate whether you will attend the event by choosing <Role/Prophet> from the options.
* If you are attending the event, enter the event date in the <Event Date> field.
* Enter the number of days you plan to <Attendance Duration> in the <Attendance Duration> field.
* If you are attending the event, select the attendees you are bringing in the <Attendees> field.
* Enter the <Contact Number> of the person you are representing.
* Enter your <Email> address.
* Optionally, enter any additional comments or <Comments> in the <Comments> field.
* Optionally, include any additional <Notes> about the event.
* If you have uploaded any files related to the event, enter the <Uploaded Files> in the <Uploaded Files> field.
* Finally, select the date when you <Submitted On> the form.

## Field-by-Field Explanation
* **Event** (`event`, `text`, required): Enter the title of the event.
* **Name** (`name`, `text`, required): Enter your full name.
* **Organization** (`organization`, `text`, required): Enter the name of the organization you represent.
* **Role/Prophet** (`roleprophets`, `select_multiple`, required): Indicate whether you are a role or prophet attending the event.
* **Event Date** (`eventdate`, `date`, required): Enter the date of the event in the format DD/MM/YYY.
* **Attendance Duration** (`attendanceduration`, `number`, required): Enter the number of days you plan to attend the event.
* **Attendees** (`attendees`, `select_multiple`, required): List the attendees you are bringing to the event.
* **Attendee** (`attendeename`, `text`, required): Enter the name of the attendees you are bringing.
* **Contact Number** (`contactnumber`, `text`, required): Enter the contact number of the person you are representing.
* **Email** (`email`, `email`, required): Enter your email address.
* **Comments** (`comments`, `text`, required): Enter any comments about the event.
* **Notes** (`notes`, `note`, required): Enter any additional notes about the event.
* **Uploaded Files** (`uploadedfiles`, `text`, required): Enter any uploaded files related to the event.
* **Submitted On** (`submittedon`, `date`, required): Enter the date when you submitted the form.
