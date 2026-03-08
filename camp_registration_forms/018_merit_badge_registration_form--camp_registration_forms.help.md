<thinking>
This form is designed for registering merit badges for events, allowing users to input details about the camp, person participating, and event specifics. The form ensures that the required information is accurately and comprehensively collected for efficient record-keeping and reporting.
</thinking>

# Merit Badge Registration Form - Help Guide

## Purpose
This form is used to register participants in merit badge events, providing a centralized location for collecting and maintaining information about these events. It's essential to provide accurate and up-to-date information for efficient planning and reporting purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of event you are registering the participant for (Day Camp, Residential Camp, or Backpack Camp).
2. Enter the date and time of the event.
3. Input the name of the person participating.
4. Select multiple persons from the given options (Scout, Leader, or Staff).
5. Enter the email address of the person participating.
6. Choose the merit badge(s) the person will be earning.
7. Input the person's description and event description.
8. Specify the event location.

## Field-by-Field Explanation

* **Camp Details** (`camp_details`, text, required): Enter a brief description of the camp event.
* **Event** (`event_details`, select_one, optional): Choose the type of event from Day Camp, Residential Camp, or Backpack Camp. This will help in determining the specific requirements and rules for the event.
* **Event Date** (`event_date`, date, optional): Enter the date of the event.
* **Event Time** (`event_time`, time, required): Specify the exact time of the event.
* **Person** (`person_name`, text, required): Enter the name of the person participating.
* **Select Multiple Persons** (`person_selection`, select_multiple, optional): Select all persons that will be attending the event (e.g., Scout, Leader, or Staff).
* **Email** (`person_email`, email, optional): Enter the email address of the person participating. Note that this field is not required but recommended for future reference and communication.
* **Badge** (`badge_selection`, select_one, optional): Choose the merit badge(s) the person will be earning.
* **Select Multiple Badges** (`badge_multi_selection`, select_multiple, optional): Select multiple merit badges the person will be earning.
* **Person Description** (`person_description`, text, required): Enter a brief description of the person participating.
* **Event Description** (`event_description`, text, required): Enter a description of the event.
* **Event Location** (`event_location`, text, required): Enter the location of the event.
* **Submit** (`submit_button`, text, required): Click this button to submit the form and register the participant for the event.

## Tips
- Double-check that you have filled out all required fields.
- Make sure to select the correct event type and enter accurate event details.
- For multiple person registrations, separate each person's information with a new instance of the form.
- Review and verify the provided information before submission to ensure accuracy.
