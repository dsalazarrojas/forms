<thinking>As a form designer and technical writer, I'll create a help guide for the Shift Patterns And Mental Fatigue Survey form. I'll make sure to clearly explain the form's purpose, how to complete it, and what each field means, based on the provided YAML fields.</thinking>

# Shift Patterns And Mental Fatigue Survey - Help Guide
## Purpose
This form is designed to collect information about your shift patterns and mental fatigue. It's meant to be completed by individuals who work irregular or non-traditional hours or shifts. The data collected will help us understand how shift patterns affect mental fatigue and overall wellbeing.

## How To Complete This Form

To complete this form, simply follow these steps:

1. Read each section carefully and answer the questions truthfully.
2. Fill in the required fields, marked with an asterisk (\*).
3. For text fields, type in your response as accurately as possible.
4. Select your response for dropdown fields (e.g., "High", "Medium", "Low" for Overall Wellbeing).
5. For date fields, select the correct date in the format YYYY-MM-DD.
6. For time fields, select the correct time in 24-hour format (e.g., 08:00 for 8:00 AM).
7. Finally, submit the form when you've completed all the fields.

## Field-by-Field Explanation

* **Shift Patterns** (Page 1):
	+ **Shift Patterns** (`shift_patterns`, `text`, required: false): Describe your typical shift patterns (e.g., morning, afternoon, night shifts, or irregular shifts).
* **Sleep Patterns** (Page 1):
	+ **Sleep Patterns** (`sleep_patterns`, `text`, required: false): Describe your sleep patterns (e.g., regular, irregular, or variable sleep schedules).
* **Fatigue Score** (Page 1):
	+ **Fatigue Score** (`fatigue_score`, `number`, required: false): Rate your fatigue level on a scale from 0 to 10 (e.g., 5 for moderate fatigue).
* **Physical Health** (Page 1):
	+ **Physical Health** (`physical_health`, `text`, required: false): Describe your overall physical health (e.g., good, fair, or poor).
* **Mental Health** (Page 1):
	+ **Mental Health** (`mental_health`, `text`, required: false): Describe your overall mental health (e.g., good, fair, or poor).
* **Stress Score** (Page 1):
	+ **Stress Score** (`stress_score`, `number`, required: false): Rate your stress level on a scale from 0 to 10 (e.g., 5 for moderate stress).
* **Burnout Score** (Page 1):
	+ **Burnout Score** (`burnout_score`, `number`, required: false): Rate your burnout level on a scale from 0 to 10 (e.g., 5 for moderate burnout).
* **Overall Wellbeing** (Page 2):
	+ **Overall Wellbeing** (`overall_wellbeing`, `select_one`, required: true): Select your overall wellbeing level (High, Medium, or Low).
* **Work Hours** (Page 2):
	+ **Work Hours** (`work_hours`, `select_multiple`, required: true): Select the number of hours you work per shift (8, 12, 16, 20, or 24).
* **Work Hours Frequency** (Page 2):
	+ **Work Hours Frequency** (`work_hours_frequency`, `date`, required: false): Select the frequency of your work hours (e.g., every day, alternate days).
* **Work Hours Variation** (Page 2):
	+ **Work Hours Variation** (`work_hours_variation`, `date`, required: false): Select the variation in your work hours (e.g., morning, afternoon).
* **Work Hours Duration** (Page 2):
	+ **Work Hours Duration** (`work_hours_duration`, `date`, required: false): Select the duration of your work hours (e.g., 1-2 hours, 2-4 hours).
* **Work Hours Start Time** (Page 2):
	+ **Work Hours Start Time** (`work_hours_start_time`, `time`, required: false): Select the start time of your work hours in 24-hour format (e.g., 08:00).
* **Work Hours End Time** (Page 2):
	+ **Work Hours End Time** (`work_hours_end_time`, `time`, required: false): Select the end time of your work hours in 24-hour format (e.g., 17:00).
* **Shift Patterns Frequency** (Page 3):
	+ **Shift Patterns Frequency** (`shift_patterns_frequency`, `text`, required: false): Describe the frequency of your shift patterns (e.g., every shift, alternate shifts).
* **Shift Patterns Variation** (Page 3):
	+ **Shift Patterns Variation** (`shift_patterns_variation`, `text`, required: false): Describe the variation in your shift patterns (e.g., morning, afternoon, night).
* **Shift Patterns Duration** (Page 3):
	+ **Shift Patterns Duration** (`shift_patterns_duration`, `text`, required: false): Describe the duration of your shift patterns (e.g., short, long).
* **Shift Patterns Start Time** (Page 3):
	+ **Shift Patterns Start Time** (`shift_patterns_start_time`, `text`, required: false): Select the start time of your shift patterns (e.g., 08:00).
* **Shift Patterns End Time** (Page 3):
	+ **Shift Patterns End Time** (`shift_patterns_end_time`, `text`, required: false): Select the end time of your shift patterns (e.g., 17:00).
* **Sleep Patterns Frequency** (Page 4):
	+ **Sleep Patterns Frequency** (`sleep_patterns_frequency`, `text`, required: false): Describe the frequency of your sleep patterns (e.g., every day, alternate days).
* **Sleep Patterns Variation** (Page 4):
	+ **Sleep Patterns Variation** (`sleep_patterns_variation`, `text`, required: false): Describe the variation in your sleep patterns (e.g., morning, afternoon).
* **Sleep Patterns Duration** (Page 4):
	+ **Sleep Patterns Duration** (`sleep_patterns_duration`, `text`, required: false): Describe the duration of your sleep patterns (e.g., short, long).
* **Sleep Patterns Start Time** (Page 4):
	+ **Sleep Patterns Start Time** (`sleep_patterns_start_time`, `time`, required: false): Select the start time of your sleep patterns (e.g., 23:00).
* **Sleep Patterns End Time** (Page 4):
	+ **Sleep Patterns End Time** (`sleep_patterns_end_time`, `time`, required: false): Select the end time of your sleep patterns (e.g., 07:00).
* **Comments** (Page 5):
	+ **Comments** (`comments`, `text`, required: false): Add any additional comments or explanations about your shifts, sleep patterns, or wellbeing.

Note that fields marked as "required" are mandatory and must be filled in. Fields not marked as "required" are optional and can be left blank.
