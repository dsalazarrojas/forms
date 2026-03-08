<thinking>
This form is designed to collect information from participants before scheduling an appointment. The goal is to ensure that the participant's needs and preferences are understood and met during the appointment. To prevent duplicates, this form will check for participant information in the database and prevent scheduling if a duplicate is found. The form is divided into two main sections: "General Information" and "Appointment Details." The "General Information" section captures the participant's name, email address, phone number, and preferred contact method for reminders. The "Appointment Details" section collects information on the type of appointment, preferred date and time, and any special requirements or additional comments. This guide will walk you through each field to help you navigate the form smoothly.</thinking>

# Check In Scheduling Survey - Help Guide
## Purpose
This form is designed to collect information from participants before scheduling an appointment. It helps our team understand your needs and preferences to ensure a successful appointment.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Ensure that all required fields are filled in.
3. Review your selections carefully before submitting.

## Field-by-Field Explanation
* **Full Name** (`participant_name`, `text`, required): Enter your full name as it appears on your official documents.
* **Email Address** (`email_address`, `email`, required): Enter your primary email address where you can receive appointment reminders and notifications.
* **Phone Number** (`phone_number`, `text`, required): Enter your primary phone number where you can receive appointment reminders and notifications.
* **Type of Appointment** (`appointment_type`, `select_one`, required): Choose the type of appointment you need: Initial Consultation, Follow-up Visit, Regular Check-in, Emergency Appointment, or Virtual Meeting.
* **Preferred Date** (`preferred_date`, `date`, required): Select a date for your appointment from the provided options.
* **Preferred Time** (`preferred_time`, `time`, required): Select a time slot for your appointment from the provided options.
* **Alternative Date** (`alternative_date`, `date`, required=false): If your preferred date is not available, provide an alternative date for your appointment. (Note: This field is optional.)
* **Reason for Visit** (`reason_for_visit`, `text`, required): Briefly describe the purpose of your appointment.
* **Is this your first visit?** (`first_time_visitor`, `select_one`, required): If you're a new client, choose "Yes, first time" and provide your details. If you're a returning client, choose "No, returning visitor".
* **Special Requirements** (`special_requirements`, `text`, required=false): Describe any accessibility needs or special accommodations you may need during your appointment.
* **Reminder Preference** (`reminder_preference`, `select_one`, required): Choose how you'd like to receive reminders: Email only, SMS only, Both email and SMS, or No reminders.
* **How did you hear about us?** (`how_did_you_hear`, `select_one`, required=false): Help us understand how you found our services. Choose Online search, Social media, Friend or family referral, Professional referral, Advertisement, or Other.
* **Additional Comments** (`additional_comments`, `text`, required=false): If you have any other information you'd like to share with us, use this field.
* **I confirm the information provided is accurate** (`confirmation_consent`, `select_one`, required): Confirm that the information you've provided is accurate by selecting "Yes, I confirm".
