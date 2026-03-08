# League Participation Monitoring Form - Help Guide
## Purpose
The League Participation Monitoring Form is used to track and monitor the participation status of athletes in a league, including the start and end dates, participation status, and additional information such as contact details.

## How To Complete This Form

To complete this form, follow these steps:

1. **Enter the league name**: The `league_name` field is where you enter the name of the league you are monitoring.
2. **Enter the athlete's ID**: The `athlete_id` field is where you enter the ID number of the athlete you are monitoring.
3. **Select the start date**: The `start_date` field is where you select the start date of the league. Use the calendar icon to select the date.
4. **Select the end date**: The `end_date` field is where you select the end date of the league. Use the calendar icon to select the date.
5. **Enter the tournament ID**: The `tournament_id` field is where you enter the ID number of the tournament associated with the league. This field is optional.
6. **Enter the league ID**: The `league_id` field is where you enter the ID number of the league. This field is not required.
7. **Select the participation status**: The `participation_status` field is a dropdown menu where you select the participation status of the athlete. Options are:
	* In: The athlete is participating in the league.
	* Out: The athlete is not participating in the league.
	* Pending: The athlete's participation status is pending.
8. **Add notes**: The `notes` field is where you can enter any additional information about the athlete's participation.
9. **Enter email**: The `email` field is where you enter the email address of the athlete. This field is optional.
10. **Enter phone number**: The `phone` field is where you enter the phone number of the athlete. This field is optional.

## Field-by-Field Explanation
* **League Name** (`league_name`, text, required): Enter the name of the league you are monitoring.
* **Athlete Id** (`athlete_id`, number, optional): Enter the ID number of the athlete you are monitoring.
* **Start Date** (`start_date`, date, optional): Select the start date of the league using the calendar icon.
* **End Date** (`end_date`, date, optional): Select the end date of the league using the calendar icon.
* **Tournament Id** (`tournament_id`, number, optional): Enter the ID number of the tournament associated with the league.
* **League Id** (`league_id`, number, optional): Enter the ID number of the league.
* **Participation Status** (`participation_status`, select_one, optional): Select the participation status of the athlete from the dropdown menu:
	+ In: The athlete is participating in the league.
	+ Out: The athlete is not participating in the league.
	+ Pending: The athlete's participation status is pending.
* **Notes** (`notes`, note, optional): Enter any additional information about the athlete's participation.
* **Email** (`email`, email, optional): Enter the email address of the athlete.
* **Phone** (`phone`, text, optional): Enter the phone number of the athlete.
