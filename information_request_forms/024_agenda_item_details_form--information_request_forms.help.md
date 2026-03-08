<thinking>
As a form designer and technical writer, I must understand the internal reasoning behind the form to create an effective user guide.
This form appears to be part of a meeting or agenda management system, likely used to collect and manage agenda items for meetings. The form's purpose is to capture essential details about each agenda item, making it easier for meeting organizers and attendees to review, discuss, and decide on the items. I'll review the form's fields to ensure I provide a clear and concise guide for end-users.
</thinking>

# Agenda Item Details Form - Help Guide
## Purpose
The Agenda Item Details Form is used to capture and manage essential information about each agenda item for meetings. This form helps meeting organizers and attendees to review, discuss, and make decisions about the items in a structured and organized way.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Meeting Date** in the correct format (mm/dd/yyyy).
2. Fill in the **Submitted by** field with the name of the person submitting the agenda item.
3. Provide a brief **Agenda Title** that describes the item.
4. Type in a detailed **Description** of the agenda item.
5. Choose the desired **Desired Outcome** for the agenda item from the options: Decision, Discussion, or Information.
6. If applicable, enter the estimated time **Minutes Requested** for the agenda item.
7. Add any relevant **Attachments** description.
8. Indicate the **Priority** level of the agenda item: High, Medium, or Low.
9. (Optional) Enter a **Contact Phone** number for follow-up purposes.

## Field-by-Field Explanation
### Meeting Information
* **Meeting Date** (`meeting_date`, date, required): Enter the date of the meeting in the correct format (mm/dd/yyyy).

### Meeting Information
* **Submitted by** (`submitted_by`, text, required): Fill in the name of the person submitting the agenda item.
* **Agenda Title** (`agenda_title`, text, required): Provide a brief title describing the item.
* **Description** (`description`, text, required): Type in a detailed description of the agenda item.
* **Desired Outcome** (`desired_outcome`, select_one, required): Choose the desired outcome for the agenda item: Decision, Discussion, or Information.
* **Attachments** (`attachments`, text, optional): Add any supporting documents description.
* **Priority** (`priority`, select_one, required): Indicate the priority level: High, Medium, or Low.
* (Optional) **Contact Phone** (`contact_phone`, text, optional): Enter a contact phone number for follow-up purposes.
