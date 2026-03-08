# photo_session_booking_form - Help Guide
## Purpose
The "photo_session_booking_form" is a crucial tool for photography session management, ensuring accurate and organized data entry for both clients and photographers.
## How To Complete This Form
To fill out this form, start by selecting the session date and start time for the photography session. Then, choose whether or not there is a photographer assigned to the session. If so, include a note with the photographer's name. Next, determine if the client is attending the session and if a client has been assigned. Add notes for the client if necessary. After that, fill in the booking date and time, as well as the duration of the session. You can also include an email, phone number, address, city, and state for the client. Finally, choose the type of session and provide any other details if necessary.
## Field-by-Field Explanation

* **Session Date** (`session_date`, date, required: false)
	+ This field is used to record the date of the photography session.
* **Start Time** (`start_time`, time, required: false)
	+ Enter the start time of the photography session.
* **Duration** (`duration`, number, required: false)
	+ Specify the length of the session in hours.
* **Photographer** (`photographer`, select_one, required: false)
	+ Choose whether or not there is a photographer assigned to the session.
* **Photographer Notes** (`photographer_note`, note, required: false)
	+ Add any notes or information about the assigned photographer.
* **Client** (`client`, select_multiple, required: false)
	+ Select whether or not the client is attending the session.
* **Client Notes** (`client_note`, note, required: false)
	+ Include any client-specific notes or instructions.
* **Booking Date** (`booking_date`, date, required: false)
	+ Enter the date of the booking.
* **Booking Time** (`booking_time`, time, required: false)
	+ Specify the time of the booking.
* **Booking Duration** (`booking_duration`, number, required: false)
	+ Enter the duration of the booking.
* **Email** (`email`, email, required: false)
	+ Enter the client's email address.
* **Phone** (`phone`, text, required: false)
	+ Provide the client's phone number.
* **Address** (`address`, text, required: false)
	+ Enter the client's address.
* **City** (`city`, text, required: false)
	+ Specify the city of the client.
* **State** (`state`, text, required: false)
	+ Enter the state of the client's location.
* **Zip** (`zip`, text, required: false)
	+ Enter the client's zip code.
* **Session Type** (`session_type`, select_one, required: false)
	+ Choose the type of session (e.g. portrait, wedding, etc.).
* **Session Type Other** (`session_type_other`, text, required: false)
	+ Provide additional details about the session type if "Session Type" options are not sufficient.
* **Session Type Other Other** (`session_type_other_other`, text, required: false)
	+ Enter any other specifics about the session type.
* **Message** (`message`, note, required: false)
	+ Include any general notes or comments about the session.
* **Client Signature** (`client`, select_one, required: false)
	+ Indicate whether or not the client has signed.
* **Photographer Signature** (`photographer_signing`, select_one, required: false)
	+ Choose whether or not the photographer has signed.
* **Additional Notes** (no specific label, note, required: false)
	+ Enter any additional notes or comments about the session.
