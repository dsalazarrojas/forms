# range_selection_survey - Help Guide
## Purpose
This form is designed to collect data from users on various aspects of their experience, such as temperature ranges, meeting times, productivity levels, and team selections. The form is likely used for organizational purposes, such as scheduling meetings or evaluating team performance.

## How To Complete This Form

1. To complete this form, start by filling in the text fields for:
	* Temperature Range
	* Meeting Time Range
	* Productivity Range
	* Team Selection (select one team)
	* Meeting Time (in 24-hour format)
	* Start Time (in 24-hour format)
	* End Time (in 24-hour format)
	* Preferred Meeting Time (in 24-hour format)
	* Productivity 1-4 (enter numerical values)
2. For the team selection fields, select one or multiple teams as applicable.
3. Enter your email address and phone number in the corresponding fields.
4. Add any notes or comments you have in the "Notes" field.
5. Finally, submit the form to complete the survey.

## Field-by-Field Explanation

* **Temperature Range** (`temperature_range`, text, optional): Enter a range of temperature values.
	+ e.g., "20-30°C"
* **Meeting Time Range** (`meeting_time_range`, text, optional): Enter a range of meeting times.
	+ e.g., "9:00-12:00"
* **Team Selection** (`team_selection`, select_one, optional): Select one team from the list.
	+ e.g., "Team A"
* **Meeting Time** (`meeting_time`, time, optional): Enter the meeting time in 24-hour format.
	+ e.g., "10:00"
* **Start Time** (`start_time`, time, optional): Enter the start time in 24-hour format.
	+ e.g., "08:00"
* **End Time** (`end_time`, time, optional): Enter the end time in 24-hour format.
	+ e.g., "17:00"
* **Preferred Meeting Time** (`preferred_meeting_time`, time, optional): Enter the preferred meeting time in 24-hour format.
	+ e.g., "12:00"
* **Productivity 1-4** (`productivity_1`, `productivity_2`, `productivity_3`, `productivity_4`, number, optional): Enter numerical values for productivity levels.
	+ e.g., "8/10"
* **Temperature** (`temperature`, number, optional): Enter a numerical value for temperature.
	+ e.g., "25°C"
* **Meeting Time** (`meeting_time`, date, optional): Enter the meeting date.
	+ e.g., "2022-01-01"
* **Start Date** (`start_date`, date, optional): Enter the start date.
	+ e.g., "2022-01-01"
* **End Date** (`end_date`, date, optional): Enter the end date.
	+ e.g., "2022-01-01"
* **Notes** (`notes`, note, optional): Add any notes or comments.
* **Email** (`email`, email, optional): Enter your email address.
	+ e.g., "user@example.com"
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Team Selection 2-7** (`team_selection_2`, `team_selection_3`, `team_selection_4`, `team_selection_5`, `team_selection_6`, `team_selection_7`, select_multiple, optional): Select multiple teams from the list.
* **Team Selection 2-7** (`team_selection_2`, `team_selection_3`, `team_selection_4`, `team_selection_5`, `team_selection_6`, `team_selection_7`, select_multiple, optional): Select multiple teams from the list.
	+ e.g., "Team A, Team B"
