<thinking>
A form for users to register media training appointments. The form is designed to collect relevant information from participants about their preferences and details for the training sessions. The form fields are meant to be optional, allowing users to provide as much or as little information as they need. The form's fields are designed to be completed by participants, and the information gathered will be used by trainers to schedule and tailor media training sessions accordingly. This form does not require duplicate submissions, and users can submit the form once they have completed all the required and optional fields.

</thinking>

# media_training_appointment_form - Help Guide
## Purpose
This form is used for users to register for media training appointments with a trainer. Participants can select their preferred training type, schedule an appointment date and time, and provide their contact information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Participant Name to identify yourself.
2. Select the type of training you are interested in (In-house or External).
3. Choose a date for your appointment (in the format mm/dd/yyyy).
4. Select a time for your appointment (in 24-hour format, e.g., 14:00 for 2:00 PM).
5. If you have a preferred media type (Video, Audio, or Text), select all that apply.
6. If you have a Participant Email address, enter it so we can contact you.
7. If you have a Participant Phone number, enter it so we can contact you.
8. Enter the name of your preferred trainer (if known).

## Field-by-Field Explanation
* **Participant Name** (`participant_name`, text, required: false): Enter your name as you want to be addressed during the training session.
* **Training Type** (`training_type`, select_one, required: false): Choose the type of training you are interested in: In-house or External.
* **Appointment Date** (`appointment_date`, date, required: false): Select a date for your appointment in the format mm/dd/yyyy.
* **Appointment Time** (`appointment_time`, time, required: false): Select a time for your appointment in 24-hour format (e.g., 14:00 for 2:00 PM).
* **Media Type** (`media_type`, select_multiple, required: false): Select all media types you are interested in (Video, Audio, or Text).
* **Participant Email** (`participant_email`, email, required: false): Enter your email address if you want us to contact you.
* **Participant Phone** (`participant_phone`, text, required: false): Enter your phone number if you want us to contact you.
* **Trainer Name** (`trainer_name`, text, required: false): Enter the name of your preferred trainer if known.

## Tips
* Please ensure to fill in all required and optional fields as much as possible to help us tailor the training session to your needs.
* If you have any special requests or requirements, please let us know in the comments section or through other means of communication.
