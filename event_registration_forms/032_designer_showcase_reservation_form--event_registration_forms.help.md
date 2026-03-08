<thinking>
The purpose of this form is to register events for a showcase or exhibition. It appears to be designed for event organizers or coordinators to collect information about an event, such as its name, dates, and attendees, as well as the designers and other relevant details. The form is likely used to gather necessary information for event planning and execution. However, upon reviewing the fields, it seems there might be some redundancy in the fields, such as 'event_name', 'start_date', 'end_date', 'venue', 'attendees', 'designer', 'notes', 'email', 'phone', 'submitter' fields. Some of these fields might be redundant or could be merged. It would be beneficial to review the form's purpose and fields to ensure that they are well-organized and efficient. Additionally, the form does not appear to have any validation or error checking, which could lead to incorrect or incomplete submissions. It would be good to consider adding validation and error checking mechanisms to the form to ensure the accuracy and completeness of the data collected.
</thinking>

# designer_showcase_reservation_form - Help Guide
## Purpose
The designer_showcase_reservation_form is a form designed to register events for a showcase or exhibition. It is intended to collect information about the event, such as its name, dates, attendees, and designers.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter the name of the event in the "Event Name" field.
2. Select the start date of the event in the "start_date" field.
3. Select the end date of the event in the "end_date" field.
4. Enter the venue of the event in the "venue" field.
5. Select the number of attendees for the event in the "Attendees" field.
6. Indicate whether the event has designers in attendance in the "designer" field.
7. Add any additional notes about the event in the "notes" field.
8. Enter the email of the submitter in the "email" field.
9. Enter the phone number of the submitter in the "phone" field.
10. Provide any additional information about the submitter in the "designer_info" field.
11. Enter the name of the submitter in the "submitters_name" field.
12. Enter the organization of the submitter in the "submitters_organization" field.
13. Enter any additional information about the submitter in the "submitters_designer" field.
14. Enter the phone number of the submitter in the "submitters_phone" field.

## Field-by-Field Explanation

* **Event Name** (`event_name`, text, required): Enter the name of the event.
* **start_date** (`start_date`, date, required): Select the start date of the event.
* **end_date** (`end_date`, date, required): Select the end date of the event.
* **venue** (`venue`, text, required): Enter the venue of the event.
* **Attendees** (`attendees`, select_multiple, required): Select the number of attendees for the event.
* **designer** (`designer`, select_multiple, required): Indicate whether the event has designers in attendance.
* **notes** (`notes`, note, required): Add any additional notes about the event.
* **email** (`email`, email, required): Enter the email of the submitter.
* **phone** (`phone`, text, required): Enter the phone number of the submitter.
* **designer_info** (`designer_info`, note, required): Provide any additional information about the submitter.
* **submitters_name** (`submitters_name`, text, required): Enter the name of the submitter.
* **submitters_organization** (`submitters_organization`, text, required): Enter the organization of the submitter.
* **submitters_designer** (`submitters_designer`, text, required): Provide any additional information about the submitter.
* **submitters_phone** (`submitters_phone`, text, required): Enter the phone number of the submitter.
