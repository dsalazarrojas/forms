# university_interview_booking_form - Help Guide
## Purpose
This form is designed for university students to book an interview with a staff member to discuss academic matters or seek guidance.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your student details, including any relevant student number or ID.
2. Specify your interview preferences, including the date and time you are available.
3. Choose a mutually convenient interview date and time with the staff member.
4. Confirm that your booking is complete.

## Field-by-Field Explanation
* **Student Details** (`student_details`, text, required): Please fill in your name, student number or ID, and any other relevant details that you think would be helpful for the staff member to know.
* **Interview Preferences** (`interview_preferences`, text, required): Describe your availability and any specific time slots you are looking for.
* **Interview Date** (`interview_date`, date, required): Choose a date that you are available for the interview.
* **Interview Time** (`interview_time`, time, required): Select a time that you are available for the interview.
* **Preferred Interview Time** (`preferred_time`, time, optional): If you have a preferred time slot, please fill it in to help the staff member make the best arrangement.
* **Interview Duration** (`interview_duration`, number, required): Enter the expected duration of the interview, in minutes.
* **Booking Details** (`booking_details`, note, required): Please provide any additional information that you think would be helpful for the staff member to know.
* **Confirm Booking** (`confirm_booked`, select_one, optional): Check this box to confirm that your booking is complete.
