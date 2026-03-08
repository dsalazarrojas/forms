# Scavenger Hunt Feedback Survey - Help Guide
## Purpose
This form is designed to collect feedback from users who have participated in the scavenger hunt event. The survey aims to gather information about their overall experience, difficulties they faced, and suggestions for improvement. The responses will help us understand how to enhance the event for future participants.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select one of the options in each field to answer the question. For select_one fields like "What was your overall experience like?" and "Scavenger Hunt Activity", you can choose one of the available options from the dropdown menu.
2. In fields like "Suggestions", you can select multiple options that apply to you. You can choose one or more of the options that best describe your suggestions.
3. For number fields like "Difficulty Level", "Overall Rating", "How long did you play for?", "How long did the event last?", "Number of teams", "Team Size", and "Number of participants", you can type a numerical value.
4. Make sure to answer each question honestly and thoroughly.

## Field-by-Field Explanation
* **What was your overall experience like?** (`scavenger_hunt_form_name`, select_one, required: false): Please select the best description of your overall experience during the event.
* **Difficulty Level** (`difficulty_level`, number, required: false): If you experienced any difficulties during the event, please indicate the level of difficulty you faced, where 1 is very easy and 10 is very difficult.
* **Overall Rating** (`rating`, number, required: false): Rate your overall experience on a scale of 1-10, where 1 is the lowest and 10 is the highest.
* **Suggestions** (`suggestions`, select_multiple, required: false): Think about your experience and suggest ways to improve the event. You can select one or more of the options below:
	+ Improve game content
	+ Improve event staff
	+ Improve event timing
	+ Improve game rules
	+ Other (please specify)
* **Scavenger Hunt Activity** (`scavenger_hunt_activity`, select_one, required: false): Select the type of scavenger hunt activity that best describes your experience:
	+ Scavenger hunt event
	+ Social gathering
	+ Game
	+ Other (please specify)
* **How long did you play for?** (`game_duration`, time, required: false): Estimate the time you spent playing the scavenger hunt game.
* **How long did the event last?** (`event_duration`, time, required: false): Estimate the total duration of the event.
* **Number of teams** (`participant_teams`, number, required: false): If you participated in a team, indicate the number of teams you were part of.
* **Number of participants** (`participant_count`, number, required: false): Estimate the total number of participants in the event.
* **Team Size** (`team_size`, number, required: false): If you were part of a team, indicate the size of your team.
