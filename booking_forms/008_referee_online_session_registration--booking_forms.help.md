<thinking>
The form purpose is to collect information for a referee's online session registration. The form is designed to gather data such as the session date, time, referee's name and details, league and association names, contact information, and other relevant details. This form ensures the accurate and efficient collection of information for the online session, making it easier to manage and track the session registrations. This form is likely to be used by organizations that conduct online sessions for referees, such as referee training programs or online meeting registrations for refereeing committees.

To prevent form duplication, we can implement a unique identifier for each session, which will be stored in the database. This way, if a user attempts to register for the same session more than once, the system will prevent the duplicate submission and notify the user.

The form is designed to be filled out by referees to register for an online session. The form is split into multiple pages, each with its own set of fields. The following is a field-by-field explanation of the form.

</thinking>

# Referee Online Session Registration - Help Guide
## Purpose
This form is designed to collect information for a referee's online session registration.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the session date for your training session.
2. Choose the time for your training session.
3. Enter your name and other relevant details.
4. Enter your email and phone number for contact.
5. Select the league and association name (if applicable).
6. Choose a time slot for your training session.
7. Review and agree to the terms and conditions.

## Field-by-Field Explanation

* **Session Date** (`session_date`, date, required: false): Select the date for your training session.
* **Session Time** (`session_time`, time, required: false): Select the time for your training session.
* **Referee Name** (`referee_name`, text, required: false): Enter your name as a referee.
* **League Name** (`league_name`, text, required: false): Enter the name of the league you are registered with.
* **Association Name** (`association_name`, text, required: false): Enter the name of the association you are registered with.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone** (`phone`, text, required: false): Enter your phone number.
* **Region** (`region`, text, required: false): Enter the region you are registered in.
* **Training Location** (`training_location`, text, required: false): Enter the location of the training session.
* **First Name** (`referee_details_first_name`, text, required: false): Enter your first name.
* **Last Name** (`referee_details_last_name`, text, required: false): Enter your last name.
* **Email (Details)** (`referee_details_email`, email, required: false): Enter your email address for details.
* **Phone (Details)** (`referee_details_phone`, text, required: false): Enter your phone number for details.
* **Licence ID** (`referee_details_licence_id`, text, required: false): Enter your referee licence ID.
* **Licence Type** (`referee_details_licence_type`, select_one, required: false): Select your referee licence type.
* **Time Slot 1** (`scheduling_time_slot_1`, select_one, required: false): Choose a time slot for your training session.
* **Time Slot 2** (`scheduling_time_slot_2`, select_one, required: false): Choose another time slot for your training session.
* **Time Slot 3** (`scheduling_time_slot_3`, select_one, required: false): Choose the final time slot for your training session.
* **Notes** (`submission_notes`, note, required: false): Add any additional notes about your session.
* **Attachments** (`submission_attachments`, text, required: false): Attach any relevant files or documents.
* **Terms and Conditions** (`submission_terms`, select_one, required: false): Review and agree to the terms and conditions of the session.

This help guide is designed to be concrete, concise, and practical for users to understand and fill out the form correctly.
