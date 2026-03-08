<thinking>

To create a user-facing help guide for the Talent Hunt Form, we first need to understand its purpose. The form is designed to collect information about upcoming talent search events, including event details, talent information, and contact person details. This form is used to gather data for the internal talent hunt process. It's essential to ensure that the form is completed correctly to provide accurate and relevant information for the internal teams to make informed decisions.

We also need to check if there are any duplication of effort or overlapping fields that might cause confusion for the end-users. The form fields seem to be well-delineated with clear labels and no duplication. Each field is assigned a unique ID, and the field types are consistent throughout the form. However, it's crucial to double-check the form fields for any potential issues during the design phase.


# Talent Hunt Form - Help Guide

## Purpose
The Talent Hunt Form is designed to collect information about upcoming talent search events. This form helps internal teams gather accurate and relevant data for the talent hunt process.

## How To Complete This Form
To complete the form successfully, follow these steps:

1.  Fill out the "What is the name of the talent search event?" field with the name of the event.
2.  Enter the location where the event will take place.
3.  Provide the date and time of the event.
4.  Select the type of event (Live Performance, Pre-Recorded Video, or Virtual Event).
5.  List any required skills for the event.
6.  Describe the event in more detail.
7.  Provide the contact person's name and email address.
8.  Enter the contact person's phone number.
9.  Set the event date.
10. Select the event status (Not Started, In Progress, or Completed).

## Field-by-Field Explanation

*   **What is the name of the talent search event?** (`talent_search_event`, text, required: false) - This field is where you enter the name of the event.
*   **Location** (`location`, text, required: false) - Enter the location where the event will take place.
*   **Date and Time** (`date_time`, date, required: false) - Provide the date and time of the event.
*   **Event Type** (`event_type`, select_one, required: false) - Choose the type of the event (Live Performance, Pre-Recorded Video, or Virtual Event).
*   **Event Description** (`event_description`, text, required: false) - Describe the event in more detail.
*   **Required Skills** (`required_skills`, select_multiple, required: false) - List any required skills for the event (e.g., Singing, Dancing, Acting).
*   **Talent Details** (`talent_details`, text, required: false) - Provide any additional information about the talent.
*   **Contact Person** (`contact_person`, text, required: false) - Enter the name of the contact person.
*   **Email** (`contact_person_email`, email, required: false) - Enter the contact person's email address.
*   **Phone** (`contact_person_phone`, text, required: false) - Enter the contact person's phone number.
*   **Event Date** (`event_date`, date, required: false) - Set the event date.
*   **Event Time** (`event_time`, time, required: false) - Set the event time.
*   **Event Duration** (`event_duration`, number, required: false) - Enter the event duration.
*   **Event Notes** (`event_notes`, note, required: false) - Enter any additional notes for the event.
*   **Form Submitter** (`form_submitter`, text, required: false) - Enter your name.
*   **Email** (`form_submitter_email`, email, required: false) - Enter your email address.
*   **Phone** (`form_submitter_phone`, text, required: false) - Enter your phone number.
*   **Event Status** (`event_status`, select_one, required: false) - Choose the status of the event (Not Started, In Progress, or Completed).

Note: Some fields are not required, but providing accurate information will help internal teams make informed decisions during the talent hunt process. Make sure to fill out the form completely and accurately for the best results.
