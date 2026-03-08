# shayo_market_survey - Help Guide
## Purpose
The Shayo Market Survey form is a data collection tool used to gather information about users' preferences and contact details.

## How To Complete This Form
To complete this form, please follow these steps:
1. Select your favorite entertainment options (music, sports, movies) by choosing the relevant checkboxes.
2. Choose your preferred location where you most often spend your time (home, office).
3. Provide the correct time of day you are most active.
4. Enter your date of birth in the format `mm/dd/yyyy`.
5. Enter your email address.
6. Enter your phone number.
7. If you have any additional comments or notes, you can provide them in the text box.

## Field-by-Field Explanation

* **User Preferences** (`user_preferences`, `select_multiple`, required: false): Choose your favorite entertainment genres. You can select one or more from the options provided.
* **Location** (`location`, `select_one`, required: false): Choose where you most often spend your time (home, office).
* **Time of Day** (`time_of_day`, `time`, required: true): Enter the time of day when you are most active.
* **Date of Birth** (`date_of_birth`, `date`, required: true): Enter your date of birth in the format `mm/dd/yyyy`.
* **Email** (`email`, `email`, required: true): Enter your email address.
* **Phone Number** (`phone_number`, `text`, required: true): Enter your phone number.
* **Notes** (`notes`, `note`, required: false): If you have any additional comments or notes, you can enter them here.
