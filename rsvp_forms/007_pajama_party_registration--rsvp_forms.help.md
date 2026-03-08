# Pajama Party Registration - Help Guide
## Purpose
This form is intended to collect information from participants and attendees of a Pajama Party event.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the **Event Name**, which is the title of the event you will be attending.
2. Enter your **Participant Name** and **Participant Age**, which will help the organizers track your attendance.
3. Select your **Relationship** with the participant, such as Parent or Teacher.
4. If necessary, enter your **Contact Email** and **Contact Phone** for easy communication.
5. Specify your **Participant Diet**, which can be Vegetarian, Vegan, or Omnivore.
6. If you have a specific **Diet Other**, please enter it in the provided field.
7. Enter the number of **Participant Quantity** attending with you.
8. If you have an **Attendee**, please enter their **Attendee Name** and **Attendee Age**.
9. Select the **Attendee Relationship** with your attendee.
10. Specify the **Attendee Diet** and **Attendee Quantity**.
11. Choose your **Participant Gender** and **Attendee Gender**.
12. Enter the **Participant Quantity (Slash)**, which represents the number of participants attending with you, divided by the number of groups.
13. Enter the start and end dates and times of the **Event Start** and **Event End**.
14. If you are attending the event at multiple venues, please enter the **Venue 1** and **Venue 2** details.

## Field-by-Field Explanation
* **Event Name** (`event_name`, `text`, required: false): Enter the title of the event you will be attending.
* **Participant Name** (`participant_name`, `text`, required: false): This field is not actually part of the form but seems to be a typo in the inputSchema. If you are a participant, please enter your name here.
* **Participant Age** (`participant_age`, `number`, required: false): Enter your age for the event registration.
* **Relationship** (`participant_relationship`, `select_one`, required: false): Select your relationship with the participant (Parent, Teacher, or Other).
* **Contact Email** (`contact_email`, `email`, required: false): Enter your email for contact purposes.
* **Contact Phone** (`contact_phone`, `text`, required: false): Enter your phone number for contact purposes.
* **Participant Diet** (`participant_diet`, `select_multiple`, required: false): Choose your dietary preferences (Vegetarian, Vegan, or Omnivore).
* **Other** (`participant_diet_other`, `text`, required: false): Enter any other dietary preferences if not listed (e.g., gluten-free).
* **Participant Quantity** (`participant_quantity`, `number`, required: false): Enter the number of participants attending with you.
* **Attendee Name** (`attendee_name`, `text`, required: false): This field is likely intended for the attendee's name if they are attending the event.
* **Attendee Age** (`attendee_age`, `number`, required: false): Enter the attendee's age for the event.
* **Attendee Relationship** (`attendee_relationship`, `select_one`, required: false): Choose the relationship between you and the attendee (Parent, Teacher, or Other).
* **Attendee Diet** (`attendee_diet`, `select_multiple`, required: false): Choose the attendee's dietary preferences (Vegetarian, Vegan, or Omnivore).
* **Attendee Quantity** (`attendee_quantity`, `number`, required: false): Enter the number of attendees attending with you.
* **Participant Gender** (`participant_gender`, `select_one`, required: false): Select your gender (Male, Female, or Other).
* **Attendee Gender** (`attendee_gender`, `select_one`, required: false): Select the attendee's gender (Male, Female, or Other).
* **Participant Quantity (Slash)** (`participant_quantity_slash`, `number`, required: false): Enter the number of participants attending with you, divided by the number of groups.
* **Event Start** (`event_start`, `date`, required: false): Enter the start date and time of the event.
* **Event End** (`event_end`, `time`, required: false): Enter the end date and time of the event.
* **Venue 1** and **Venue 2** (`venue_1_1`, `text`, `venue_1_2`, `text`, required: false): Enter the details of the venues you will be attending the event at.
