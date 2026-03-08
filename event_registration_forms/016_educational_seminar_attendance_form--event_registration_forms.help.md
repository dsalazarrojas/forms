# educationalSeminarAttendanceForm - Help Guide
## Purpose
The educational seminar attendance form is used to collect information from attendees about their attendance to an educational seminar. This form is only for attendees.

## How To Complete This Form

To complete this form, follow the steps below:

1. Enter your participant information (name, email, and date of birth) in the "Participant Information" page.
2. Select your arrival time in the "Time of Arrival" page.
3. Indicate whether you will attend the seminar.
4. If you have any additional comments, enter them in the "Additional Comments" page.
5. Enter your phone number for communication purposes.
6. Review and submit the form.

## Field-by-Field Explanation

* **Participant Information (Participant Information)** (`participant`, text, required: false): Enter your name, and optionally, your email and date of birth.
* **email (email)** (`email`, email, required: false): Enter your email address.
* **name (name)** (`name`, text, required: false): Enter your name.
* **date_of_birth (date of birth)** (`date_of_birth`, date, required: false): Enter your date of birth.
* **Time of Arrival (time_of_arrival)** (`time_of_arrival`, time, required: false): Select your time of arrival for the seminar.
* **Attend (seminar_attendance)** (`Attend/Do Not Attend`, select_one, required: true): Choose whether you will attend or not attend the seminar.
* **Additional Comments (additional_comments)** (`additional_comments`, text, required: false): Enter any additional comments about your participation.
* **phone (phone)** (`phone`, text, required: false): Enter your phone number for contact purposes.
