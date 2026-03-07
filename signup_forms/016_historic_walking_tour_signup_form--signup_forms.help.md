</thinking>

# historic_walking_tour_signup_form - Help Guide

## Purpose
This form is designed to allow participants to sign up for a historic walking tour. The form collects information about the participant's preferred tour date, time, and scheduling, as well as their personal details such as email and phone number. This information will be used to schedule the tour and ensure that the participant is aware of the tour's details.

## How To Complete This Form

To complete this form, follow these steps:

* Enter the date you would like to go on the tour in the "Tour Date" field.
* Select the time of day for the tour in the "Tour Time" field.
* Choose the type of tour you would like to schedule by selecting "Morning", "Afternoon", or "Evening" in the "Tour Scheduling" field.
* Enter your name in the "Participant Name" field.
* Enter your email address in the "Participant Email" field.
* Enter your phone number in the "Participant Phone" field.
* If you have any special requests or notes, enter them in the "Participant Note" field.
* You can leave the "Submission Date" and "Submission Time" fields blank, as they are not required for the tour.

## Field-by-Field Explanation

* **Historic Walking Tour Signup Form** (`intro`, text, required: false): This is the title of the form, which is not a field to fill in.
* **Tour Date** (`tour_date`, date, required: false): Enter the date you would like to go on the tour. Please use the standard date format (YYYY-MM-DD).
* **Tour Time** (`tour_time`, time, required: false): Select the time of day for the tour.
* **Tour End Time** (`tour_time_ending`, time, required: false): The tour will end at this time. This field is not required, but it's a good idea to select a time that works for you.
* **Participant Name** (`participant_name`, text, required: false): Enter your name.
* **Tour Scheduling** (`tour_scheduling`, select_one, required: false): Select the type of tour you'd like to schedule:
	+ Morning
	+ Afternoon
	+ Evening
* **Participant Email** (`participant_email`, email, required: false): Enter your email address.
* **Participant Phone** (`participant_phone`, text, required: false): Enter your phone number.
* **Participant Note** (`participant_note`, note, required: false): Enter any special requests or notes, such as mobility issues or language requirements.
* **Submission Date** (`submission_date`, date, required: false): This field is not required, and you can leave it blank.
* **Submission Time** (`submission_time`, time, required: false): This field is not required, and you can leave it blank.

Note: Please make sure to fill in all the required fields to ensure that your tour is scheduled correctly. If you have any questions or need assistance, feel free to contact us.
