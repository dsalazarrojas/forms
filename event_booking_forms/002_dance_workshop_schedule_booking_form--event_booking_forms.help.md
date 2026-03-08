# Dance Workshop Schedule Booking Form - Help Guide
## Purpose
This form is used to collect and organize essential information for booking and scheduling dance workshops. It covers details about the workshop, instructor, and client.

## How To Complete This Form
1. The workshop administrator will complete the first half of the form, providing details about the workshop.
2. The client will complete the second half of the form to book and confirm their attendance.

## Field-by-Field Explanation

* **Workshop Details** (`workshop_details`, text, optional): Briefly describe the workshop, including the type of dance, style, or focus.
* **Name** (`name`, text, optional): Enter your full name as you would like to be listed in our records.
* **Email** (`email`, email, optional): Enter your email address for communication purposes.
* **Phone** (`phone`, text, optional): Enter your phone number for further contact.
* **Workshop Date** (`workshop_date`, date, optional): Select the date for the workshop.
* **Workshop Start Time** (`workshop_start_time`, time, optional): Select the start time for the workshop.
* **Workshop Duration** (`workshop_duration`, number, optional): Enter the length of the workshop (in minutes).
* **Workshop End Time** (`workshop_end_time`, time, optional): Select the end time for the workshop.
* **Workshop Description** (`workshop_description`, text, optional): Describe the workshop in more detail, including any specific instructions or requirements.
* **Instructor Details** (`instructor_details`, text, optional): Provide any additional information about the instructor or workshop leader.
* **Booking Date** (`booking_date`, date, optional): Select the date you would like to book the workshop.
* **Booking Time** (`booking_time`, time, optional): Select the time for the booking.
* **Booking Status** (`booking_status`, select_one, true): Choose the booking status: 
  + **Pending**: The booking is pending confirmation.
  + **Confirmed**: The booking is confirmed.
  + **Cancelled**: The booking is cancelled.
* **Notes** (`notes`, note, optional): Leave any additional comments or notes about your booking.
* **Confirmation** (`confirmation`, select_multiple, true): 
  + **True**: You agree to the workshop terms and conditions.
  + **False**: You do not agree to the workshop terms and conditions.
* **Studio Confirmation** (`studio_confirmation`, select_multiple, true): 
  + **True**: The studio confirms the booking.
  + **False**: The studio does not confirm the booking.
* **Client Confirmation** (`client_confirmation`, select_multiple, true): 
  + **True**: You confirm the booking.
  + **False**: You do not confirm the booking.
* **Client Message** (`client_message`, text, optional): Leave a message for the client.
* **Additional Notes** (`additional_notes`, text, optional): Leave any additional comments or notes about the booking.

Note: The fields marked as required (true) are mandatory and need to be filled in for the form to be completed accurately.
