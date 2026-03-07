<thinking>
The purpose of this form, "Sleep Log," is likely to gather information about an individual's sleep habits and patterns. However, without knowing the internal logic and usage context of this form, I'm inferring its purpose. This form could be used by coaches or wellness providers to help individuals track and monitor their sleep quality, timing, and other relevant factors. It may be used for research, personal development, or coaching purposes. The form's layout and fields suggest a mix of quantitative and qualitative data collection, which could help in identifying patterns and trends.
</thinking>

# Sleep Log - Help Guide
## Purpose
The "Sleep Log" form is used to collect information about an individual's sleep habits and patterns.

## How To Complete This Form
1. Fill out the "sleep_log" field with a brief description of your sleep experience.
2. Enter the time you went to sleep and wake up in the corresponding fields.
3. Select a sleep quality rating and a corresponding sleep routine from the dropdown menus.
4. Optionally, choose a sleep location, reason for waking up, and sleep frequency.
5. Rate the sleep quality on a scale.
6. Select how frequently you log your sleep data.
7. Indicate who submitted the data (you or a coach/wellness provider).
8. Optionally, select the date the data was submitted.

## Field-by-Field Explanation
* **Sleep Log** (`sleep_log`, `text`, required): Describe your sleep experience in a few words.
* **Sleep Time** (`sleep_time`, `time`, required): Enter the time you went to sleep.
* **Sleep Quality** (`sleep_quality`, `number`, required): Rate your sleep quality from 1 to 10.
* **Wake-up Time** (`wake_up_time`, `time`, required): Enter the time you woke up.
* **Bed Time** (`bedtime`, `time`, required): Enter the time you went to bed.
* **Sleep Routine** (`sleep_routine`, `select_one`, optional): Choose a routine that contributed to your sleep.
* **Sleep Location** (`sleep_location`, `text`, optional): Describe the location where you slept.
* **Wake-up Reason** (`wake_up_reason`, `select_one`, optional): Choose the reason for waking up.
* **Sleep Quality Rating** (`sleep_quality_rating`, `number`, optional): Rate your sleep quality.
* **Sleep Log Frequency** (`sleep_log_frequency`, `select_multiple`, optional): Select how frequently you log your sleep data.
* **Submitted By** (`submitted_by`, `select_one`, required): Choose who submitted the data (you or a coach/wellness provider).
* **Submitted On** (`submitted_on`, `date`, optional): Select the date the data was submitted.
