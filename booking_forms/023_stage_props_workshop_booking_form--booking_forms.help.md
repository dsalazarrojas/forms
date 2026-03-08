# Stage Props Workshop Booking Form - Help Guide
## Purpose
The Stage Props Workshop Booking Form is designed to be a simple and efficient way for users to submit a booking request for a Stage Props Workshop.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the following fields:
	* Participant Information (Page 1)
	* Participant Name
	* Participant Email
	* Participant Phone
	* Event Name
	* Event Date
	* Event Time
	* Booking Message (optional)
	* Participant Comments (optional)
2. Select a booking status from the "Booking Status" dropdown menu.
3. Optionally, add a Form Submission PDF.

## Field-by-Field Explanation
### Participant Information (Page 1)
* **Participant Name** (`participant_name`, text, required): Enter the participant's name.
* **Participant Email** (`participant_email`, email, required): Enter the participant's email address.
* **Participant Phone** (`participant_phone`, text, required): Enter the participant's phone number.
* **Event Name** (`event_name`, text, required): Enter the event name.
* **Event Date** (`event_date`, date, required): Enter the event date in the correct format (YYYY-MM-DD).
* **Event Time** (`event_time`, time, required): Enter the event time.
* **Booking Message** (`booking_message`, text, optional): Enter any additional information about the booking.
* **Participant Comments** (`participant_comments`, text, optional): Enter any additional comments about the participant.
* **Booking Status** (`booking_status`, select_one, required): Select the booking status (Active or Inactive).
* **Form Submission PDF** (`form_submission_pdf`, note, required): This field is displayed as a PDF of the form submission.
