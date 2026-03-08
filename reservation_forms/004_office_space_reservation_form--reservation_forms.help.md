# office_space_reservation_form - Help Guide
## Purpose
The purpose of this form is to reserve an office space for a specific period of time.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the space type you wish to reserve (e.g., Meeting Room, Office, Storage Room).
2. Input the start and end dates for your reservation.
3. Enter your name and email address.
4. Provide a brief description of your reservation (e.g., meeting name, purpose).
5. Optional: Input your phone number and ID (if applicable).
6. Select whether the form has been submitted (True/False).
7. Input the submit date and time (if submitted).
8. Input the name and email address of the submitter.
9. Optional: Input the submitter's phone number and ID (if applicable).
10. Select whether the form has been submitted by the submitter (True/False).
11. Input the submitter's submit date and time (if submitted).
12. Input any additional notes from the submitter.

## Field-by-Field Explanation

* **Space** (Space, select_one, required): Select the type of space you wish to reserve (e.g., Meeting Room, Office, Storage Room).
* **Start Date** (start_date, date, required): Input the start date of your reservation.
* **End Date** (end_date, date, required): Input the end date of your reservation.
* **Start Time** (start_time, time, required): Input the start time of your reservation.
* **End Time** (end_time, time, required): Input the end time of your reservation.
* **Name** (name, text, required): Input your name.
* **Email** (email, email, required): Input your email address.
* **Phone** (phone, text, required): Input your phone number.
* **Capacity** (capacity, number, required): Input the capacity of the reserved space (e.g., number of people).
* **Space Description** (space_description, text, required): Provide a brief description of your reservation (e.g., meeting name, purpose).
* **Space Status** (space_status, select_one, required): Select the status of the reserved space (Available, Reserved, Unavailable).
* **Notes** (notes, text, required): Input any additional notes about your reservation.
* **User ID** (user_id, number, required): Input your ID (if applicable).
* **Form Submitted** (form_submitted, select_one, required): Select whether the form has been submitted (True/False).
* **Submit Date** (submit_date, date, required): Input the date the form was submitted.
* **Submit Time** (submit_time, time, required): Input the time the form was submitted.
* **Submitter** (submitter, text, required): Input the name of the submitter.
* **Submitter Email** (submitter_email, email, required): Input the email address of the submitter.
* **Submitter Phone** (submitter_phone, text, required): Input the phone number of the submitter.
* **Submitter ID** (submitter_id, number, required): Input the ID of the submitter.
* **Submitter Form ID** (submitter_form_id, text, required): Input the ID of the submitter's form.
* **Submitter Notes** (submitter_notes, text, required): Input any additional notes from the submitter.
* **Submitter Form Submitted** (submitter_form_submitted, select_one, required): Select whether the submitter's form has been submitted (True/False).
* **Submitter Submit Date** (submitter_submit_date, date, required): Input the date the submitter's form was submitted.
* **Submitter Submit Time** (submitter_submit_time, time, required): Input the time the submitter's form was submitted.
