<thinking>

We're creating a form for users to acknowledge risks associated with participating in a tour led by a tour leader. This form, called the "Shark Tour Risk Acknowledgement," is essential to gather critical information from participants for emergency contact and tour logistics purposes. It's likely that users will be filling this out for a tour that involves some level of physical activity, such as hiking or water sports, where the participant's safety is at risk if the tour is not managed properly. The form will help the tour leader to know who to contact in case of an emergency and what information is necessary for the participant's well-being. It's also a good idea to make sure that the participant has a clear understanding of what is expected of them and what information is required to be filled out.

</thinking>

# Shark Tour Risk Acknowledgement - Help Guide
## Purpose
The Shark Tour Risk Acknowledgement form is used to gather critical information from tour participants, including emergency contact details and tour logistics, to ensure the participant's safety during the tour.

## How To Complete This Form

To complete this form, follow the instructions below:

1. **Participant Information**: This section is where you will enter your personal details.
2. **Contact Information**: This section is where you will provide details of your emergency contact, such as their name, relationship, phone number, and other information.
3. **Tour Leader Information**: In this section, you will select the information that the tour leader will need in case of an emergency, such as their name, phone number, and email.
4. **Tour Details**: Provide the date and time of the tour, as well as the location.
5. **Emergency Procedures**: Fill in the emergency exit and meeting point information in case of an emergency.

## Field-by-Field Explanation

* **Participant Information** (`participant_info`, `text`, required: false): Enter your personal details such as your name, age, and contact information.
* **Contact Number** (`contact_number`, `text`, required: false): Enter your contact number. This is the number that your emergency contact will use to reach you during the tour.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, required: false): Enter the name of your emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, `select_one`, required: true): Choose how you are related to your emergency contact, such as Mother, Father, Friend, Spouse, or Partner.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, required: false): Enter the phone number of your emergency contact.
* **Emergency Contact Email** (`emergency_contact_email`, `email`, required: false): Enter the email of your emergency contact.
* **Emergency Contact Address** (`emergency_contact_address`, `text`, required: false): Enter the address of your emergency contact.
* **Emergency Contact Other Info** (`emergency_contact_other_info`, `text`, required: false): Enter any other relevant information about your emergency contact.
* **Participant Declaration** (`participant_declaration`, `note`, required: false): Write a note to acknowledge that you have read and understood the risks associated with the tour.
* **Tour Leader Information** (`tour_leader_info`, `select_multiple`, required: true): Select the information that the tour leader will need in case of an emergency, such as their name, phone number, and email.
* **Tour Date** (`tour_date`, `date`, required: false): Enter the date of the tour.
* **Tour Time** (`tour_time`, `time`, required: false): Enter the time of the tour.
* **Tour Location** (`tour_location`, `text`, required: false): Enter the location of the tour.
* **Emergency Exit** (`emergency_exit`, `text`, required: false): Enter the emergency exit information.
* **Emergency Meeting Point** (`emergency_meeting_point`, `text`, required: false): Enter the meeting point in case of an emergency.

This form is designed to be filled out by participants prior to the tour to ensure that the tour leader has the necessary information in case of an emergency. Please fill out all fields as accurately and completely as possible.
