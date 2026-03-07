<thinking>
To create a user-facing help guide for the "Venue Management Report" form, we need to understand the purpose and requirements of the form. This form is likely used to manage and update venue-related information, such as reporting incidents, assigning maintenance needs, and tracking venue status. The fields provided in the form YAML file suggest that users can report incidents, update venue status, select a facility team member, choose an event space, and provide additional details such as date and time of the incident. The form seems to cater to various user groups, including facility team members, maintenance workers, and possibly administrators or coordinators. The required fields are minimal, indicating that the form is designed to be relatively straightforward and easy to use. However, it's essential to ensure that users understand the form's purpose and how to fill it out correctly to get the most out of the information it collects. Let's create a help guide that addresses these needs.

The form is likely used in an institutional or commercial setting, such as event management, facilities management, or maintenance services. Its primary goal is to collect and track information about venue status, incidents, and maintenance needs.

</thinking>

# Venue Management Report - Help Guide
## Purpose

The Venue Management Report form is designed to collect and track information about venue status, incidents, and maintenance needs. This form will help facility team members, maintenance workers, and administrators to keep the venue's condition up-to-date, report incidents, and manage maintenance requirements.

## How To Complete This Form

To complete this form, follow these steps:

1.  Review the form sections carefully, and ensure you understand the required and optional fields.
2.  Start by filling out the **Venue Status** section, where you can update the current status of the venue. If the venue status is unchanged, select "None".
3.  In the **Report Incident** section, provide a brief description of the incident. This could include details such as the date and time it occurred.
4.  If the incident requires maintenance, select the relevant **Maintenance Needs** field to specify the type of maintenance required.
5.  In the **Facility Team** section, choose the member of the facility team responsible for handling the incident or maintenance.
6.  Select the **Event Space** where the incident or maintenance occurred, if applicable.
7.  In the **Date of Incident** and **Time of Incident** fields, enter the date and time the incident occurred.
8.  Provide a detailed description of the incident in the **Description of Incident** field.
9.  Choose the **Maintenance Status** of the venue, which could be Active, Inactive, or Unknown, based on the incident or maintenance needs.
10.  Finally, add any additional comments or information regarding the incident or maintenance in the **Comments** field.

## Field-by-Field Explanation

* **Venue Status** (`venue_status_update`, text): Enter the current status of the venue. This is a free-text field where you can provide a short description of the venue's status.
* **Report Incident** (`incident_reporting`, text): Describe the incident that occurred. This could be a brief summary of what happened.
* **Maintenance Needs** (`maintenance_needs`, text): Specify the type of maintenance required for the incident or issue.
* **Facility Team** (`facility_team`, select_one): Choose the member of the facility team responsible for handling the incident or maintenance. This could be a Facility Manager, Facility Coordinator, or Maintenance Worker.
* **Event Space** (`event_space`, select_multiple): Select the event space where the incident or maintenance occurred. This could be an Auditorium, Ballroom, or Conference Room.
* **Date of Incident** (`date_of_incident`, date): Enter the date the incident occurred.
* **Time of Incident** (`time_of_incident`, time): Enter the time the incident occurred.
* **Description of Incident** (`description_of_incident`, text): Provide a detailed description of what happened.
* **Maintenance Status** (`maintenance_status`, select_one): Choose the current maintenance status of the venue, which could be Active, Inactive, or Unknown.
* **Comments** (`comments`, text): Add any additional comments or information regarding the incident or maintenance.

## Tips

*   Always ensure that you have reviewed the form sections carefully before filling out the form.
*   If the incident or maintenance requires immediate attention, mark it as a high priority.
*   If you are unsure about any field, ask a colleague or supervisor for clarification.
*   Use the **Comments** field to provide any additional context or information that may be helpful for other users.
*   Review the form regularly to ensure that you have the most up-to-date information about the venue's status and maintenance needs.
