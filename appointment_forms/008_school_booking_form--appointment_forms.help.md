# School Booking Form - Help Guide
## Purpose
This form is used to schedule appointments or meetings at a school. It collects information from the user to confirm or request a meeting with a specific resource such as a teacher, staff member, or facility.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Enter your name in the "Name" field. This is the name of the person requesting the booking.
2. Enter your email address in the "Email" field. This is the email address of the person requesting the booking.
3. Enter your phone number in the "Phone" field. This is the phone number of the person requesting the booking.
4. Select a date for the booking in the "Date" field. Please use the date in the format `YYYY-MM-DD`.
5. Select a time for the booking in the "Time" field. Please use the 24-hour format `HH:MM`.
6. Enter the duration of the booking in the "Duration" field. This is the length of time required for the meeting or event.
7. Select the resource you wish to book (e.g., teacher, staff member, or facility). This field is used to select the person or facility you want to meet with.
8. If necessary, enter a message to provide additional information about the booking. This is optional.
9. Review the "Terms and Conditions" field. This is a note for the user to review any relevant policies or agreements.
10. Confirm your booking selection by selecting the relevant options in the "Confirm" field. This is optional but recommended.

## Field-by-Field Explanation
* **Name** (`form_data_name`, text, required): Enter your name as the person requesting the booking.
* **Email** (`form_data_email`, email, required): Enter your email address so that the resource can contact you.
* **Phone** (`form_data_phone`, text, required): Enter your phone number so that the resource can contact you.
* **Date** (`form_data_date`, date, required): Select a date for the booking in the format `YYYY-MM-DD`.
* **Time** (`form_data_time`, time, required): Select a time for the booking in the 24-hour format `HH:MM`.
* **Duration** (`form_data_duration`, number, required): Enter the length of time needed for the meeting or event.
* **Resource** (`form_data_resource`, select_one, required): Select the person or facility you wish to book with.
* **Message** (`form_data_message`, text, optional): If needed, enter additional information about the booking.
* **Terms and Conditions** (`form_data_terms`, note, optional): Review the terms and conditions of the booking.
* **Confirm** (`form_data_confirm`, select_multiple, optional): Confirm your booking by selecting the relevant options.
