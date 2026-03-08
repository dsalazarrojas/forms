# Snowboard Survey - Help Guide
## Purpose
This is the Snowboard Survey form, designed to gather information from snowboarders about their preferences, experiences, and opinions. The form is used to collect data that will help us better understand the snowboarding community and improve our services.

## How To Complete This Form
To complete the form, follow these steps:

1. Start by reading the instructions and ensuring you have all the necessary information to complete the form.
2. Answer each question carefully, and if you have any questions or doubts, don't hesitate to ask.
3. Fill in all required fields, which are marked with an asterisk (\*).
4. For select multiple and select one fields, choose the options that best apply to you.
5. For date and time fields, use the format `YYYY-MM-DD` and `HH:MM:SS` respectively.
6. Once you have completed all the fields, review your answers carefully and make sure to click the "Submit" button to send your survey.

## Field-by-Field Explanation

* **snowboard_survey_id** (`snowboard_survey_id`, text, required): This is your unique ID for the survey. Please enter a valid ID.
* **demographics** (`demographics`, select_multiple, optional): Choose all that apply to you:
	+ Male
	+ Female
	+ Other
* **age_range** (`age_range`, number, required): Enter your age range.
* **years_snowboarding** (`years_snowboarding`, number, optional): How many years have you been snowboarding?
* **how_often_snowboard** (`how_often_snowboard`, select_multiple, optional): How often do you go snowboarding?
	+ Never
	+ Rarely
	+ Occasionally
	+ Frequently
	+ Very Frequently
* **how_long_snowboard** (`how_long_snowboard`, time, required): How long have you been snowboarding in the last 30 days?
* **what_type_snowboard** (`what_type_snowboard`, select_one, optional): What type of snowboarder are you?
	+ Snowboard
	+ Snowboard Freeride
	+ Splitboard
	+ Skis
	+ Wakeboard
	+ Skis Freeride
* **what_feature_like** (`what_feature_like`, select_multiple, optional): What features do you like about snowboarding?
	+ Powder
	+ Park
	+ Freeride
	+ All-Mountain
	+ Recreational
* **how_satisfied_snowboard** (`how_satisfied_snowboard`, select_one, optional): How satisfied are you with snowboarding?
	+ Very Satisfied
	+ Somewhat Satisfied
	+ Neutral
	+ Somewhat Dissatisfied
	+ Very Dissatisfied
* **how_likely_recommend** (`how_likely_recommend`, select_one, optional): How likely are you to recommend snowboarding to others?
	+ Very Likely
	+ Somewhat Likely
	+ Neutral
	+ Somewhat Unlikely
	+ Very Unlikely
* **open_ended_comment** (`open_ended_comment`, text, optional): Do you have any additional comments or thoughts about snowboarding?
* **additional_info** (`additional_info`, text, optional): Is there anything else you'd like to share about yourself or your snowboarding experience?
* **contact_info** (`contact_info`, text, optional): Would you like to be contacted for further information or follow-up questions?
* **email** (`email`, email, optional): Your email address for contact purposes.
* **additional_comments** (`additional_comments`, text, optional): Do you have any additional comments or thoughts about the survey or your experience?
* **survey_date** (`survey_date`, date, optional): Date of submission (YYYY-MM-DD).
* **survey_time** (`survey_time`, time, optional): Time of submission (HH:MM:SS).
* **submit** (`submit`, text, required): This is the final step to send your survey. Double-check your answers before clicking.

Note: The form's structure and field labels should match the provided YAML fields, but some slight rewording was done for clarity and readability. Let me know if you'd like any changes!
