# Retail Employee Shift Satisfaction Poll - Help Guide
## Purpose
This form is designed to help us understand your experiences and feelings during your retail shift. Your input will help us make adjustments and improvements to ensure you have a more positive and productive work environment.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in your shift date to help us track your shift experiences over time.
2. Report how many hours you worked during your shift.
3. Tell us how you feel about your work during this shift. You can choose from very frustrating, somewhat frustrating, neutral, somewhat satisfying, or very satisfying.
4. Rate how much help you received from your supervisor. You can choose from not at all, somewhat, quite a bit, or very much.
5. Rate how much help you received from your colleagues. You can choose multiple options: not at all, somewhat, quite a bit, or very much.
6. Rate your overall feelings about your shift. You can choose from very bad, somewhat bad, neutral, somewhat good, or very good.
7. Finally, share any thoughts or comments about your shift experience.

## Field-by-Field Explanation

* **Shift Date** (`shift_date`, date, required: false): Enter the date of your shift in the format MM/DD/YYYY.
* **Shift Hours Worked** (`shift_hours_worked`, number, required: false): Enter the number of hours you worked during your shift.
* **Feel Good About Work** (`feel_good_about_work`, select_multiple, required: false): How do you feel about your work during this shift? Choose one or more of the following:
	+ Very frustrating
	+ Somewhat frustrating
	+ Neutral
	+ Somewhat satisfying
	+ Very satisfying
* **Feel Helped By Supervisor** (`feel_helped_by_supervisor`, select_one, required: false): Rate how much help you received from your supervisor:
	+ Not at all
	+ Somewhat
	+ Quite a bit
	+ Very much
* **Feel Helped By Colleagues** (`feel_helped_by_colleagues`, select_multiple, required: false): Rate how much help you received from your colleagues:
	+ Not at all
	+ Somewhat
	+ Quite a bit
	+ Very much
* **Overall Feelings** (`overall_feelings`, select_one, required: false): Rate your overall feelings about your shift:
	+ Very bad
	+ Somewhat bad
	+ Neutral
	+ Somewhat good
	+ Very good
* **Shift Comments** (`shift_comments`, text, required: false): Share any thoughts or comments about your shift experience.
