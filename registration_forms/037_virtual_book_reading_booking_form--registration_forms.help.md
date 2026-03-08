# virtual_book_reading_booking_form - Help Guide
## Purpose
The virtual book reading booking form is a tool for participants to provide their details and preferences for a virtual book reading session. It helps the organizers to gather the necessary information to manage the session efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your participant name and email in the corresponding fields.
2. Fill out your preferences by selecting 'Yes' or 'No' as per your choice.
3. Select the book you want to read by choosing 'Yes' or 'No' from the options provided.
4. Enter the book title and author.
5. Choose your preferred session date and time using the provided input field.
6. Select your preferred timezone.
7. Add any participant notes you have.

## Field-by-Field Explanation

* **Virtual Book Reading Booking** (`form_header`, text, required): This is the header of the form with the title of the virtual book reading session.
* **Participant Name** (`participant_name`, text, required): Enter your name as a participant.
* **Email** (`participant_email`, email, required): Enter your email address for communication purposes.
* **Phone** (`participant_phone`, text, required): Enter your phone number for any further communication.
* **Preferences** (`participant_preferences`, select_multiple): Select your preferences for the session, such as whether you want to be notified or not.
* **Book Selection** (`book_selection`, select_one): Select the book you want to read from the provided options.
* **Book Title** (`book_title`, text, required): Enter the title of the book you selected.
* **Author** (`book_author`, text, required): Enter the author of the book you selected.
* **Session Date** (`session_date`, date, required): Choose the date for the virtual book reading session.
* **Session Time** (`session_time`, time, required): Choose the time for the virtual book reading session.
* **Session Timezone** (`session_timezone`, text, required): Select your preferred timezone for the session.
* **Participant Notes** (`participant_notes`, note, required): Add any additional notes about yourself as a participant.
* **Virtual Book Reading Booking** (`form_footer`, text, required): This is the footer of the form with a message for the participant to read.
