# Check In Scheduling Survey - Help Guide
## Purpose
The Check In Scheduling Survey is designed to collect information from participants for scheduling purposes, ensuring that their preferences and needs are considered when organizing events or activities.

## How To Complete This Form
1. Fill out the form with the required information, which includes:
	* Participant's full name
	* Email address
	* Phone number (optional)
2. Select your preferred check-in date
3. Choose your preferred time slot
4. If applicable, provide an alternative date
5. Indicate if you are checking in as a group
6. Specify the size of your group (if checking in as a group)
7. Add any additional information or special requirements
8. Select your preferred method of communication for confirmation (email, SMS, or both)
9. Confirm your availability as stated above

## Field-by-Field Explanation
* **Participant Full Name** (`participant_name`, `text`, **required**): Enter your full name as it appears on your ID or driver's license.
* **Email Address** (`participant_email`, `email`, **required**): Enter your email address where you would like to receive communication about your check-in.
* **Phone Number** (`participant_phone`, `text`, **optional**): If you have a phone number where you can be reached, please enter it.
* **For which event are you checking in** (`event_name_selection`, `text`, **required**): Choose the event or activity you are checking in for.
* **Preferred Check-in Date** (`preferred_checkin_date`, `date`, **required**): Select your preferred date for check-in.
* **Preferred Time Slot** (`preferred_time_slot`, `select_one`, **required**): Choose your preferred time slot for check-in. Options:
	+ 08-00 AM - 10-00 AM
	+ 10-00 AM - 12-00 PM
	+ 01-00 PM - 03-00 PM
	+ 03-00 PM - 05-00 PM
* **Alternative Date (If primary unavailable)** (`alternative_date`, `date`, **optional**): If your primary preferred date is unavailable, provide an alternative date.
* **Are you checking in as a group** (`group_checkin`, `select_one`, **required**): Indicate if you are checking in as a group.
* **Total Group Size** (`group_size`, `number`, **optional**): If checking in as a group, specify the total size of your group (including yourself).
* **Any special requirements or assistance needed** (`special_requirements`, `text`, **optional**): If you have any special requirements or need assistance, please describe them here.
* **How would you like to receive your confirmation** (`reminder_pref`, `select_one`, **required**): Choose how you would like to receive your confirmation.
	+ Email Only
	+ SMS Only
	+ Both Email and SMS
* **I confirm my availability as stated above** (`survey_completion_ack`, `select_one`, **required**): Confirm that the information provided accurately reflects your availability.
* **Any other comments or questions** (`comments_field`, `text`, **optional**): If you have any other comments or questions, please provide them here.
