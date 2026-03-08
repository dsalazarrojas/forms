> <thinking>...</thinking>

Sprinting_Tournament_Entry_Form - Help Guide
## Purpose
This form is for registering participants for a sprinting event. It requires information about the participant, the event, and other details related to the sprinting event. The form is divided into several sections, each containing specific fields that need to be filled.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the participant information: Start by filling in the participant's details such as name, school, grade, phone, parent's name, and parent's email.
2. Select the participant's gender: Choose the participant's gender from the provided options.
3. Enter the participant's date of birth: Enter the participant's date of birth in the format of MM/DD/YYYY.
4. Choose the participant's T-Shirt size: Select the participant's T-Shirt size from the provided options.
5. Select the event type: Choose the type of event the participant will be participating in.
6. Enter the event date and time: Enter the date and time of the event.
7. Order T-Shirt: If the participant wants to order a T-Shirt, select the T-Shirt size and type from the provided options.
8. Fill in the event details: Enter the event ID, event date, event time, and event location.
9. Finally, review the form carefully before submitting it.

## Field-by-Field Explanation
* **Participant Name** (`participant_name`, text, required): Please enter the participant's name.
* **Participant School** (`participant_school`, text, required): Please enter the participant's school.
* **Participant Grade** (`participant_grade`, text, required): Please enter the participant's grade.
* **Participant Phone** (`participant_phone`, text, required): Please enter the participant's phone number.
* **Parent Name** (`parent_name`, text, optional): If the participant is a minor, please enter the parent's name.
* **Parent Email** (`parent_email`, email, optional): If the participant is a minor, please enter the parent's email.
* **Participant Gender** (`participant_gender`, select_one, required): Select the participant's gender from the provided options.
* **Participant Date of Birth** (`participant_dob`, date, required): Enter the participant's date of birth in the format of MM/DD/YYYY.
* **Participant T-Shirt Size** (`participant_t_shirt_size`, select_multiple, optional): Select the participant's T-Shirt size from the provided options.
* **Event Type** (`event_type`, select_one, required): Choose the type of event the participant will be participating in.
* **Event Date** (`event_date`, date, required): Enter the event date in the format of MM/DD/YYYY.
* **Event Time** (`event_time`, time, required): Enter the event time in the format of HH:MM AM/PM.
* **Participant T-Shirt Order** (`participant_t_shirt_order`, select_one, optional): If the participant wants to order a T-Shirt, select the T-Shirt size and type from the provided options.
* **Sprinting Event ID** (`sprinting_event_id`, text, required): Enter the sprinting event ID.
* **Sprinting Event Date** (`sprinting_event_date`, date, optional): Enter the sprinting event date in the format of MM/DD/YYYY.
* **Sprinting Event Time** (`sprinting_event_time`, time, optional): Enter the sprinting event time in the format of HH:MM AM/PM.
* **Sprinting Event Location** (`sprinting_event_location`, text, optional): Enter the location of the sprinting event.
* **Sprinting Event Organizer** (`sprinting_event_organizer`, text, optional): Enter the name of the sprinting event organizer.
* **Sprinting Event Division** (`sprinting_event_division`, text, optional): Enter the division of the sprinting event.
* **Sprinting Event Type** (`sprinting_event_type`, select_one, optional): Choose the type of sprinting event.
* **Sprinting Event Status** (`sprinting_event_status`, text, optional): Enter the status of the sprinting event.
* **Participant Sprint Type** (`participant_sprint_type`, select_one, required): Select the participant's sprint type from the provided options.
* **Participant Sprint Distance** (`participant_sprint_distance`, select_multiple, required): Select the participant's sprint distance from the provided options.
* **Participant Sprint Event ID** (`participant_sprint_event_id`, text, required): Enter the participant's sprint event ID.
* **Participant Sprint Event Date** (`participant_sprint_event_date`, date, optional): Enter the participant's sprint event date in the format of MM/DD/YYYY.
