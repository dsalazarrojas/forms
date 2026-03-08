<thinking>
This form is used to gather information about a support schedule, including contact details, shift coverage, and notes. It is intended to be filled out by support staff to provide a clear overview of their schedule and ensure that all necessary information is recorded.

This form should not be filled out by customers or external parties, as it contains sensitive internal information. 

The form consists of several sections, each with its own set of fields. The fields are:

* Contact Details: This section asks for the contact information of the support staff, including their name, phone number, and email.
* Shift Coverage: This section asks for information about the shift coverage, including the scheduled hours and start and end dates.
* Notes: This section allows for additional notes to be added by the support staff.
* Team Members: This section allows the user to select multiple team members who are assigned to the shift.
* Assigned Support: This section asks for the assigned support team or individual.
* Assigned IT: This section asks for the assigned IT team or individual.
* Shift Status: This section asks for the status of the shift, such as "available" or "unavailable".
* Shift Type: This section asks for the type of shift, such as "day" or "night".
* Notes Internal and External: This section allows for additional internal and external notes to be added by the support staff.

The fields are all optional, except for "Team Members", "Assigned Support", "Assigned IT", "Shift Status", and "Shift Type", which are required.
</thinking>

# Support Schedule Overview - Help Guide
## Purpose
The Support Schedule Overview form is used to gather information about a support schedule, including contact details, shift coverage, and notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Contact Details" section with the relevant contact information.
2. Enter the shift coverage information in the "Shift Coverage" section.
3. Add any additional notes in the "Notes" section.
4. Select the team members assigned to the shift in the "Team Members" section.
5. Assign the support and IT teams in the "Assigned Support" and "Assigned IT" sections, respectively.
6. Select the status and type of shift in the "Shift Status" and "Shift Type" sections, respectively.
7. Add any internal or external notes in the "Notes Internal" and "Notes External" sections, respectively.

## Field-by-Field Explanation
* **Contact Name** (`contact_name`, text, optional): Enter the contact name.
* **Contact Phone** (`contact_phone`, text, optional): Enter the contact phone number.
* **Contact E-mail** (`contact_email`, email, optional): Enter the contact email address.
* **Shift Coverage** (`shift_coverage`, text, optional): Enter the shift coverage information.
* **Scheduled Hours** (`scheduled_hours`, number, optional): Enter the scheduled hours.
* **Start Date** (`start_date`, date, optional): Enter the start date.
* **End Date** (`end_date`, date, optional): Enter the end date.
* **Start Time** (`start_time`, time, optional): Enter the start time.
* **End Time** (`end_time`, time, optional): Enter the end time.
* **Notes** (`notes`, note, optional): Enter any additional notes.
* **Internal Comments** (`internal_comments`, text, optional): Enter internal comments.
* **Team Members** (`team_members`, select_multiple, required): Select the team members assigned to the shift.
* **Assigned Support** (`assigned_support`, select_one, required): Assign the support team or individual.
* **Assigned IT** (`assigned_it`, select_one, required): Assign the IT team or individual.
* **Shift Status** (`shift_status`, select_multiple, required): Select the shift status.
* **Shift Type** (`shift_type`, select_one, required): Select the shift type.
* **Notes Internal** (`notes_internal`, text, optional): Enter internal notes.
* **Notes External** (`notes_external`, text, optional): Enter external notes.
* **Contact External Notes** (`contact_external_notes`, text, optional): Enter contact external notes.
