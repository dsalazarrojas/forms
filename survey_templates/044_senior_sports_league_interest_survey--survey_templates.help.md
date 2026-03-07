<thinking>...</thinking>

**senior_sports_league_interest_survey - Help Guide**

## Purpose
This form is used to gauge interest levels among seniors for joining a sports league. It is intended to gather information on their availability and preferences for playing sports during the week.

## How To Complete This Form
To complete this form, follow these steps:

1. Please answer the questions on each page as they appear. The form is divided into several pages with different questions.
2. On each page, select the corresponding options for your answers.
3. If a question is not relevant to you, please select "No" for select_multiple questions and do not enter anything for text fields.
4. Fill out the "Notes" field if you have any additional comments or concerns.

## Field-by-Field Explanation

* **Welcome**: This is a page header that greets you and provides an overview of the form. No action is required here.
* **What is your interest level in the senior sports league?** (`interest_level`, select_one, required: false)
	+ Select one of the following options:
		- High
		- Low
* **Which days of the week can you play on Monday?** (`days_of_week_1`, select_multiple, required: false)
	+ Select all the days you are available to play on Monday:
		- Yes
		- No
* **What time of day would you like to play on Monday?** (`time_of_day_1`, time, required: false)
	+ Enter a time in 24-hour format (e.g. 14:00 for 2:00 PM)
* **Which days of the week can you play on Tuesday?** (`days_of_week_2`, select_multiple, required: false)
	+ Select all the days you are available to play on Tuesday:
		- Yes
		- No
* **What time of day would you like to play on Tuesday?** (`time_of_day_2`, time, required: false)
	+ Enter a time in 24-hour format (e.g. 14:00 for 2:00 PM)
* **Email** (`email`, email, required: false)
	+ Enter a valid email address that we can use to contact you.
* **Phone** (`phone`, text, required: false)
	+ Enter a phone number where we can reach you.
* **Notes** (`note`, note, required: false)
	+ Add any additional comments or concerns you may have.

## Tips

* Please fill out each page completely and accurately to help us understand your availability and preferences.
* If you have any questions or need clarification on any of the questions, feel free to ask.
