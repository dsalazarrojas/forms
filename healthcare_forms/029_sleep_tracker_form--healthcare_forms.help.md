# sleep_tracker_form - Help Guide
## Purpose
The sleep_tracker_form is designed to help users track their sleep habits. This form collects information about users' sleep patterns, quality, and frequency to help monitor and improve sleep.

## How To Complete This Form
To complete the sleep_tracker_form, follow these steps:

1. Click on the "Start" button to begin filling out the form.
2. Enter your sleep patterns in the "Sleep Patterns" field. This field is for you to describe your sleep patterns in a few words or sentences.
3. Rate your sleep quality on a scale of 1-5 in the "Sleep Quality" field.
4. Enter your sleep duration in the "Sleep Duration" field.
5. Enter your wake-up time in the "Wake Time" field.
6. Enter your sleep time in the "Sleep Time" field.
7. Select your preferred sleep frequency from the options provided in the "Sleep Frequency" field.
8. Optionally, provide more details about your sleep frequency in the "Sleep Frequency Options" field.
9. Add any additional notes about your sleep frequency in the "Sleep Frequency Note" field.

## Field-by-Field Explanation
* **Sleep Patterns** (`sleep_patterns`, text, required): This field is for describing your sleep patterns, such as whether you sleep better at night or during the day.
* **Sleep Quality** (`sleep_quality`, number, required): This field is a rating from 1 to 5, where 1 is poor and 5 is excellent.
* **Sleep Duration** (`sleep_duration`, number, required): This field is for entering the length of time you sleep.
* **Wake Time** (`wake_time`, time, required): This field is for entering the time you wake up.
* **Sleep Time** (`sleep_time`, time, required): This field is for entering the time you go to sleep.
* **Sleep Frequency** (`sleep_frequency`, select_multiple, required): This field allows you to select from multiple options for when you sleep, such as morning, afternoon, and night.
* **Sleep Frequency Options** (`sleep_frequency_options`, select_one, required): This field is for selecting a specific option from the ones provided in the "Sleep Frequency" field.
* **Sleep Frequency Note** (`sleep_frequency_note`, note, required): This field is for adding any additional notes about your sleep frequency.
