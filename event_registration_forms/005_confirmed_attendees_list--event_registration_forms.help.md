# Confirmed Attendees List - Help Guide
## Purpose
The "Confirmed Attendees List" form is used to collect and store information about attendees that have already been confirmed to attend an event. This form helps event staff and organizers to gather essential details about each attendee, ensuring a smooth and enjoyable experience for everyone.

## How To Complete This Form
To fill out this form, follow these steps:

1. Ensure you have been confirmed to attend the event by a staff member.
2. Select the correct event from the list.
3. Fill out the event-specific details such as event name, date, and location.
4. Enter your contact information, including first name, last name, email address, and phone number.
5. Select your job title, organization, and industry (if applicable).
6. Indicate your registration details, such as the date you registered and the type of registration.
7. Select your attendance status and payment status.
8. If necessary, indicate any dietary requirements or restrictions.
9. Specify any accessibility needs or accommodations required.
10. Choose your preferred sessions or events you plan to attend.
11. If you need assistance with hotel or transportation arrangements, indicate that as well.
12. Provide contact information for an emergency contact person (if applicable).
13. Specify how you heard about the event.
14. Add any special notes or requests.
15. Confirm who confirmed your attendance and date of confirmation.

## Field-by-Field Explanation
* **Event Name** (`event_name`, `text`, required): Enter the name of the event you are attending.
* **Event Date** (`event_date`, `date`, required): Enter the date of the event.
* **Event Location** (`event_location`, `text`, required): Enter the location of the event, including the venue name and address.
* **First Name** (`attendee_first_name`, `text`, required): Enter your first name.
* **Last Name** (`attendee_last_name`, `text`, required): Enter your last name.
* **Email Address** (`attendee_email`, `email`, required): Enter your primary contact email address.
* **Phone Number** (`attendee_phone`, `text`, required): Enter your contact phone number.
* **Job Title** (`job_title`, `text`, optional): If applicable, enter your current job title or position.
* **Organization** (`organization`, `text`, optional): If applicable, enter the name of your organization or company.
* **Industry** (`industry`, `select_one`, optional): Select the industry sector you belong to (e.g., Technology, Healthcare, Education).
* **Registration Date** (`registration_date`, `date`, required): Enter the date you registered for the event.
* **Registration Type** (`registration_type`, `select_one`, required): Select the type of registration (e.g., Full Conference, Single Day, Virtual Attendance).
* **Attendance Status** (`attendance_status`, `select_one`, required): Select the status of your attendance (Confirmed, Pending, Waitlisted, Cancelled).
* **Payment Status** (`payment_status`, `select_one`, required): Select the payment status (Paid, Pending, Waived, Complimentary).
* **Dietary Requirements** (`dietary_requirements`, `select_multiple`, optional): Select any dietary restrictions or preferences (e.g., Vegetarian, Vegan, Gluten-Free).
* **Dietary Notes** (`dietary_notes`, `text`, optional): Enter any additional details about your dietary needs.
* **Accessibility Requirements** (`accessibility_needs`, `select_multiple`, optional): Select any accessibility accommodations needed (e.g., Wheelchair Access, Sign Language Interpreter).
* **Sessions of Interest** (`session_preferences`, `select_multiple`, optional): Select the sessions or events you plan to attend.
* **T-Shirt Size** (`t_shirt_size`, `select_one`, optional): Select the size of T-Shirt you would like to receive (if applicable).
* **Accommodation Assistance Needed** (`accommodation_needed`, `select_one`, optional): Indicate if you need help with hotel recommendations (True/False).
* **Transportation Assistance Needed** (`transportation_needed`, `select_one`, optional): Indicate if you need information about transportation options (True/False).
* **Emergency Contact Name** (`emergency_contact_name`, `text`, optional): Enter the name of your emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, optional): Enter the phone number of your emergency contact person.
* **How Did You Hear About This Event** (`how_did_you_hear`, `select_one`, optional): Select where you heard about the event (e.g., Email Invitation, Social Media, Website).
* **Special Notes or Requests** (`special_notes`, `text`, optional): Enter any special notes or requests you have.
* **Confirmed By** (`confirmed_by`, `text`, required): Enter the name of the staff member who confirmed your attendance.
* **Confirmation Date** (`confirmation_date`, `date`, required): Enter the date when your attendance was confirmed.
