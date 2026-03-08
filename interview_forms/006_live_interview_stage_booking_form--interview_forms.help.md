<thinking>
This form is intended to book a live interview stage, which involves booking a specific time and date for an interview. To confirm that the correct person is booking the interview, we need to capture details such as the candidate's name and contact information. To prevent over-booking of the same time slot by multiple people, we'll be storing the selected slot status as 'Yes' or 'No' to track availability. Additionally, we'll be tracking the duration of the interview to ensure that we're prepared with enough resources.
</thinking>

# Live Interview Stage Booking Form - Help Guide

## Purpose
The Live Interview Stage Booking Form is used to book a live interview stage for candidates. Fill out this form to book an interview at a specific date and time.

## How To Complete This Form

1. Select the desired date of the interview using the date field.
2. Choose the time slot for the interview using the Book Your Interview Time field.
3. Select the duration of the interview using the Select Duration field.
4. Provide your name and contact information as the candidate in the Candidate Name and Contact Info fields.
5. Confirm your availability for the selected time slot using the Select a Slot field.
6. Click the Submit button to complete the form and book the interview.

## Field-by-Field Explanation

* **Live Interview Stage Booking Form** (`interview_stage_booking_form`, text, required: false):
    This is the title of the form.
* **Book Your Interview Time** (`interview_stage_time`, time, required: false):
    Select the time slot for the interview.
* **Select a Date** (`interview_stage_date`, date, required: false):
    Choose the date for the interview.
* **Select a Slot** (`interview_stage_slot`, select_one, required: false):
    Confirm that the selected time slot is available or not.
* **Select Duration** (`interview_stage_duration`, select_multiple, required: false):
    Choose the duration of the interview.
* **Candidate Name** (`candidate_name`, text, required: false):
    Enter your name as the candidate.
* **Contact Info** (`candidate_contact_info`, text, required: false):
    Enter your contact information as the candidate.
* **Availability** (`candidate_availability`, text, required: false):
    Confirm your availability for the interview.
* **Select Yes/No for Slot Status** (`interview_stage_slot`, select_one, required: false):
    Confirm that the selected time slot is available or not.
