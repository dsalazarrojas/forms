<thinking>
The form is used by library administrators to reserve a book for a specific 
time, date and for a patron. It will help patrons to make requests to 
reserve a book, which will trigger the librarian to take action. 

This form should only be used by library administrators, it is not intended 
for general public. 

</thinking>

# Library Reservation Form - Help Guide
## Purpose
This form is used by library administrators to record and track library book 
reservations. 

## How To Complete This Form
To use this form, follow these steps:

1. Select the book you wish to reserve from the "book_selection" field.
2. Choose the date and time you would like to reserve the book for.
3. Provide your name, email and phone number so that we can contact you 
about your reservation.
4. If you wish to leave a message, you can do so in the "message" field.
5. Once you have completed the form, click the "submit" button to send 
the form to the library.

## Field-by-Field Explanation
* **library_reservation_form** (`library_reservation_form`, text, required: false)
	+ This is the title of the form, which is used to identify the 
purpose of the form.
* **book_selection** (`book_selection`, select_one, required: true)
	+ Select the book you wish to reserve from the drop-down list.
* **date_selected** (`date_selected`, date, required: true)
	+ Choose the date you would like to reserve the book for.
* **time_selected** (`time_selected`, time, required: true)
	+ Choose the time you would like to reserve the book for.
* **librarian_details** (`librarian_details`, text, required: false)
	+ This field can be used by librarians to add any additional notes 
about the reservation.
* **name** (`name`, text, required: true)
	+ Please enter your name.
* **email** (`email`, email, required: true)
	+ Please enter your email address so that we can contact you about 
your reservation.
* **phone** (`phone`, text, required: true)
	+ Please enter your phone number so that we can contact you about 
your reservation.
* **message** (`message`, text, required: false)
	+ If you have any additional comments or requests, please enter 
them here.
* **confirm** (`confirm`, select_one, required: true)
	+ Confirm that you wish to reserve the book.
* **confirm_message** (`confirm_message`, text, required: false)
	+ If you wish to leave a message with your confirmation, please 
enter it here.
* **reservation_date** (`reservation_date`, date, required: true)
	+ Enter the date you would like to reserve the book for.
* **reservation_time** (`reservation_time`, time, required: true)
	+ Enter the time you would like to reserve the book for.
* **reservation_status** (`reservation_status`, select_one, required: true)
	+ Status of the reservation.
* **reservation_comments** (`reservation_comments`, text, required: false)
	+ Any additional comments about the reservation.
* **notes** (`notes`, text, required: false)
	+ Librarian's notes.
* **librarian_notes** (`librarian_notes`, text, required: false)
	+ Librarian's notes for internal use.
* **form_completion** (`form_completion`, select_one, required: true)
	+ Status of the form completion.
* **form_comments** (`form_comments`, text, required: false)
	+ Any additional comments about the form completion.
* **librarian_comments** (`librarian_comments`, text, required: false)
	+ Librarian's comments.
* **submit** (`submit`, text, required: true)
	+ Click this button to submit the form.

## Tips
* Please make sure to fill in all required fields.
* If you have any questions or concerns, please contact the library.
* The form will be reviewed and processed within 24 hours.
* Please note that the reservation is not confirmed until the librarian has 
reviewed and processed the form.
