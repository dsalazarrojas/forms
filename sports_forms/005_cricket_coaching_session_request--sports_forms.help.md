# Cricket Coaching Session Request - Help Guide
## Purpose
The Cricket Coaching Session Request form is designed to schedule coaching sessions with coaches who have varying levels of experience and availability. This form captures essential information from both coaches and participants, ensuring a smooth and efficient booking process.

## How To Complete This Form
1. Select a cricket academy or institution from the available options.
2. Enter the date and time for the coaching request.
3. Provide the coach's name, participant's name, email, and phone number.
4. Select the coach's experience level, available days, and available time slots.
5. Choose the coaching level (individual, group, or team) and maximum number of participants.
6. Set the session duration and fee.
7. Select the payment method and payment date and time.
8. Add any additional information or notes about the session.
9. Review and submit the form to finalize the coaching session request.

## Field-by-Field Explanation

* **Cricket Academy Name** (`cricket_academy_name`, text, required): Enter the name of the cricket academy or institution requesting the coaching session.
* **Coaching Request Date** (`coaching_request_date`, date, required): Enter the date for the coaching session.
* **Start Date** (`start_date`, date, required): Enter the start date of the coaching session.
* **End Date** (`end_date`, date, required): Enter the end date of the coaching session.
* **Start Time** (`start_time`, time, required): Enter the start time of the coaching session.
* **End Time** (`end_time`, time, required): Enter the end time of the coaching session.
* **Coach Name** (`coach_name`, text, required): Enter the coach's name providing the session.
* **Participant Name** (`participant_name`, text, required): Enter the name of the participant or team requesting the coaching session.
* **Participant Email** (`participant_email`, email, required): Enter the email address of the participant or team.
* **Participant Phone** (`participant_phone`, text, required): Enter the phone number of the participant or team.
* **Cricket Field** (`cricket_field`, select_one, required): Select the specific cricket field where the session will take place.
* **Coach Experience** (`coach_experience`, select_multiple, required): Select the coach's experience level (beginner, intermediate, advanced).
* **Available Days** (`available_days`, select_one, required): Select the days the coach is available to conduct the session.
* **Available Time** (`available_time`, select_multiple, required): Select the available time slots for the session.
* **Coaching Level** (`coaching_level`, select_one, required): Choose the coaching level (individual, group, or team).
* **Session Duration** (`session_duration`, number, required): Enter the duration of the coaching session.
* **Max Participants** (`max_participants`, number, required): Enter the maximum number of participants for the session.
* **Fee** (`fee`, number, required): Enter the fee for the coaching session.
* **Additional Fees** (`additional_fees`, text, optional): Enter any additional fees or charges.
* **Payment Method** (`payment_method`, select_one, required): Select the method of payment (bank transfer, online transfer, cash).
* **Payment Date** (`payment_date`, date, required): Enter the date of payment.
* **Payment Time** (`payment_time`, time, required): Enter the time of payment.
* **Notes** (`notes`, text, optional): Add any additional information or notes about the session.
* **Form Submission Status** (`form_submission_status`, select_one, optional): Select the status of the form submission (pending, submitted, cancelled, completed).
