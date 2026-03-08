# e_slam_book - Help Guide
## Purpose
The e_slam_book form is designed to collect information about events and activities from various departments within an educational institution. This includes details such as contact person, event name, date, time, location, description, and more.

## How To Complete This Form
1. Fill out all required fields, denoted by *asterisks.
2. Enter the contact person and their contact number (if applicable).
3. Choose the event name from the options.
4. Select the event date using the date input field.
5. If applicable, select the event time using the time input field.
6. Enter a brief description of the event.
7. Select the location from the options.
8. If applicable, enter the email address of the contact person.
9. Enter any additional notes about the event.
10. Select the submitter from the options.

## Field-by-Field Explanation

* **Form ID 1** (`form_id_1`, number, required): This field is used to uniquely identify the form. Please enter a unique number.
* **Contact Person** (`contact_person`, text, required): Enter the name and title/position of the person responsible for the event.
* **Contact Number** (`contact_number`, text, optional): If applicable, enter the contact person's phone number.
* **Event Name** (`event_name`, select_one, required): Choose the name of the event from the options.
* **Event Date** (`event_date`, date, required): Select the date of the event using the calendar input field.
* **Event Time** (`event_time`, time, optional): If applicable, select the time of the event using the clock input field.
* **Description** (`description`, text, required): Enter a brief description of the event.
* **Location** (`location`, select_multiple, required): Select all applicable locations related to the event.
* **Email** (`email`, email, optional): If applicable, enter the contact person's email address.
* **Notes** (`notes`, note, optional): Enter any additional notes about the event.
* **Submitter** (`submitter`, select_one, required): Select the person or department responsible for submitting the form.
