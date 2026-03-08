# music_class_participant_application_form - Help Guide

## Purpose
This form is used by students to apply for a music class. It gathers information about the student's demographic details, musical preferences, and availability to ensure that the instructor can prepare for the class.

## How To Complete This Form

1. Fill in your full name in the "Full Name" field.
2. If you have a preferred instrument, enter it in the "Instrument" field. Note that this field is optional.
3. Provide your contact information, including your email and phone number, in the "Contact Information" and "Email" and "Phone" fields.
4. Select your musical preferences from the dropdown menu in the "Musical Preferences" field.
5. If you have any additional musical preferences, you can enter them in the "Other" field.
6. Select your start date and start time for the class in the "Start Date" and "Start Time" fields.
7. If you have any end dates or end times, you can enter them in the "End Date" and "End Time" fields. Note that these fields are optional.
8. Enter any instructor notes or additional notes for the class in the "Instructor Notes" and "Additional Notes" fields. These fields are optional.
9. Enter any notes for the student to review in the "Student Notes" field. This field is optional.
10. Enter the class schedule and duration in the "Class Schedule" and "Class Duration" fields. These fields are optional.
11. Enter your age in the "Student Age" field. This field is required.

## Field-by-Field Explanation

* **Full Name** (`name`, `text`, required): Enter your full name.
* **Instrument** (`instrument`, `text`, optional): If you have a preferred instrument, enter it here.
* **Contact Information** (`contact_information`, `note`, optional): Enter your contact information, such as your address or any other relevant details.
* **Email** (`contact_email`, `email`, required): Enter your email address.
* **Phone** (`contact_phone`, `text`, optional): Enter your phone number.
* **Musical Preferences** (`musical_preferences`, `select_multiple`, optional): Select your musical preferences from the dropdown menu.
* **Other** (`musical_preferences_2`, `select_multiple`, optional): If you have any additional musical preferences, enter them here.
* **Availability** (`availability`, `time`, optional): Enter your availability for the class. Note that this field is not currently used in this form.
* **Start Date** (`start_date`, `date`, required): Select the date you wish to start the class.
* **Start Time** (`start_time`, `time`, required): Select the time you wish to start the class.
* **End Date** (`end_date`, `date`, optional): If you have a specific end date for the class, enter it here. Note that this field is optional.
* **End Time** (`end_time`, `time`, optional): If you have a specific end time for the class, enter it here. Note that this field is optional.
* **Instructor Notes** (`instructor_notes`, `note`, optional): Enter any notes for the instructor.
* **Additional Notes** (`additional_notes`, `note`, optional): Enter any additional notes for the instructor or student.
* **Student Notes** (`student_notes`, `note`, optional): Enter any notes for the student to review.
* **Class Schedule** (`class_schedule`, `note`, optional): Enter the class schedule.
* **Class Duration** (`class_duration`, `note`, optional): Enter the class duration.
* **Class Length** (`class_length`, `number`, optional): Enter the class length.
* **Student Age** (`student_age`, `number`, required): Enter your age.
