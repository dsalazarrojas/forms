<thinking>

To create this help guide, I'll first extract the form's purpose and key fields from the provided YAML. The purpose is to register participants for an event, and the key fields include participant details (name, email, phone), lens preferences, participant consent, course and workshop details (name, date, start time, location, capacity, price, length), and other additional information such as program details and participant notes.

Here's the extracted information in a more human-readable format:

* Participant details: The participant's name, email, and phone number.
* Lens preferences: The participant's preferred lens(es) to attend.
* Participant consent: The participant's consent to attend the event.
* Course and workshop details: The name, date, start time, location, capacity, price, and length of the course or workshop.

</thinking>

# expressive_lens_registration_form - Help Guide
## Purpose
This form is used to register participants for an event, including courses and workshops.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your participant details: Please fill out the "Participant Details" section with your name, email, and phone number.
2. Select your lens preferences: Choose the lens(es) you would like to attend from the "Lens Preferences" section.
3. Confirm your participant consent: Please indicate your consent to attend the event in the "Participant Consent" section.
4. Enter course and workshop details: Fill out the "Course/Workshop Details" section with the required information (name, date, start time, location, capacity, price, length).
5. Add any additional information: You can also add additional notes or comments in the "Participant Notes" section.

## Field-by-Field Explanation
* **Participant Details** (`participant_details`, `text`, required): Enter your name, email, and phone number to register as a participant.
* **Lens Preferences** (`lens_preferences`, `select_multiple`, required): Choose the lens(es) you would like to attend.
* **Participant Consent** (`participant_consent`, `note`, required): Indicate your consent to attend the event.
* **Email** (`participant_email`, `email`, required): Enter your email address.
* **Phone** (`participant_phone`, `text`, required): Enter your phone number.
* **Course/Workshop Details** (`course_details`, `text`, optional): Enter the name of the course or workshop you are interested in.
* **Workshop Details** (`workshop_details`, `text`, optional): Enter any additional details about the workshop you are interested in.
* **Program Details** (`program_details`, `text`, optional): Enter any additional details about the program you are interested in.
* **Course/Workshop Length** (`course_length`, `text`, optional): Enter the length of the course or workshop.
* **Workshop Length** (`workshop_length`, `text`, optional): Enter the length of the workshop.
* **Participant Notes** (`participant_notes`, `text`, optional): Add any additional comments or notes about your participation.
* **Participant Signature** (`participant_signature`, `text`, optional): Enter your signature.
