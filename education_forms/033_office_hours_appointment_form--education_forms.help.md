<thinking>
This form is designed to schedule office hours appointments for students with various staff members. The purpose of this form is to allow students to request meetings with staff members in order to discuss various topics. This form is not intended for other purposes, such as scheduling events or managing staff availability.
</thinking>

# office_hours_appointment_form - Help Guide
## Purpose
The office hours appointment form is used to schedule office hours appointments for students with staff members. This form helps students request meetings with staff to discuss specific topics.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the date you would like to schedule your office hours appointment.
2.  Enter your name.
3.  Select the duration of your meeting.
4.  Enter the topic you would like to discuss during your meeting.
5.  Enter any additional details about your meeting.
6.  Enter your email address.
7.  Enter the location of your meeting (optional).
8.  Enter the start and end time of your meeting.
9.  Enter your phone number (optional).
10.  Select the staff member you would like to meet with (Academic Adviser or Office Hours).
11.  Enter any additional comments or notes.

## Field-by-Field Explanation
* **Office Hours Date** (`office_hours_date`, date, required: false): Enter the date you would like to schedule your office hours appointment. This field is optional, but it helps staff members plan their availability.
* **Student Name** (`student_name`, text, required: true): Enter your name as a student.
* **Meeting Duration** (`meeting_duration`, number, required: true): Select the duration of your meeting (e.g., 15 minutes, 30 minutes).
* **Meeting Topic** (`meeting_topic`, text, required: true): Enter the topic you would like to discuss during your meeting.
* **Meeting Details** (`meeting_details`, text, required: false): Enter any additional details about your meeting.
* **Student Email** (`student_email`, email, required: true): Enter your email address.
* **Meeting Location** (`meeting_location`, text, required: false): Enter the location of your meeting (optional).
* **Meeting Time** (`meeting_time`, time, required: true): Enter the time of your meeting.
* **Meeting Start Time** (`meeting_start_time`, time, required: true): Enter the start time of your meeting.
* **Meeting End Time** (`meeting_end_time`, time, required: true): Enter the end time of your meeting.
* **Student Phone** (`student_phone`, text, required: false): Enter your phone number (optional).
* **Staff** (`staff`, select_one, required: true): Select the staff member you would like to meet with (Academic Adviser or Office Hours).
* **Comments** (`comments`, text, required: false): Enter any additional comments or notes.
