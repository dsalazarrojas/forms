# Customer Journey Mapping Workshop Registration - Help Guide
## Purpose
This form is used to collect information from customers about their workshop registration process. It helps us understand who is attending, what workshops they are interested in, and what their needs are.

## How To Complete This Form
1. Fill in your name in the "Attendee Name" field.
2. Enter your email address in the "Email" field.
3. Enter your phone number in the "Phone" field.
4. Select the date and time of the workshop you will be attending in the "Workshop Date" and "Workshop Time" fields.
5. Indicate if you will be attending with any colleagues or team members in the "Will you be attending with any colleagues or team members?" field.
6. Choose the current status of the workshop from the "Workshop Status" dropdown menu.
7. Select the primary manager of the workshop from the "Workshop Manager" dropdown menu.
8. If you have any additional notes or questions, type them in the "Additional Notes" field.
9. Answer "Yes" or "No" to the question "Is this workshop manager available?"
10. Answer "Yes" or "No" to the question "Is this workshop active?"
11. Answer "Yes" or "No" to the question "Will you be attending other workshops in the future?"
12. Type in any other questions or concerns you have about the workshop in the "Other Questions" field.
13. Finally, type in any closing message or thank you note in the "Thank you for participating" field.

## Field-by-Field Explanation
* **Workshop Name** (`workshop_name`, text, required): This is the name of the workshop you are registering for.
* **Attendee Name** (`attendee_name`, text, required): Please enter your name as it appears on your ID or passport.
* **Email** (`email`, email, required): Enter a valid email address that we can use to contact you about the workshop.
* **Phone** (`phone`, text, required): Enter your phone number for follow-up contact.
* **Workshop Date** (`workshop_date`, date, required): Select the date of the workshop you are registering for.
* **Workshop Time** (`workshop_time`, time, required): Select the time of the workshop you are registering for.
* **Will you be attending with any colleagues or team members?** (`attendees`, select_multiple, required): Check "Yes" if you will be attending with colleagues or team members.
* **Workshop Status** (`workshop_status`, select_one, required): Choose the current status of the workshop from the dropdown menu.
* **Workshop Manager** (`workshop_manager`, select_one, required): Select the primary manager of the workshop from the dropdown menu.
* **Additional Notes** (`workshop_notes`, note, optional): If you have any additional information about the workshop, type it in here.
* **Is this workshop manager available?** (`workshop_manager_2`, select_one, optional): Check "Yes" or "No" to indicate if the workshop manager is available.
* **Is this workshop active?** (`workshop_status_2`, select_one, optional): Check "Yes" or "No" to indicate if the workshop is active.
* **Additional Notes** (`additional_notes`, text, optional): If you have any other comments or questions, type them in here.
* **Will you be attending other workshops in the future?** (`future_workshops`, text, optional): Type "Yes" or "No" to indicate if you will be attending other workshops.
* **Is there anything else you'd like to share about future workshops?** (`future_questions`, text, optional): Type any other comments or questions you have about future workshops.
* **Other Questions** (`other_questions`, text, optional): If you have any other questions or concerns, type them in here.
* **Thank you for participating** (`thank_you`, text, optional): Type a closing message or thank you note. 
* **End Message** (`end_message`, text, optional): Leave an open field for any final comments or notes.
