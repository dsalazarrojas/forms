# Event Date Selection Form - Help Guide
## Purpose
The Event Date Selection Form is a tool for collecting event date and time selection information. It is designed to be a part of a larger event planning and scheduling process.

## How To Complete This Form
To complete this form, follow these steps:

* Select the event date you wish to use from the options provided on "Event Date Selection".
* If you select "Event Date Selection 2", you will be asked to provide a second event date on the "Event Date 2" field.
* For each event date, select the start and end time from the "Start Time" and "End Time" options.
* Choose the date format for the event dates from the "Date Format" options.
* Select the time zone for the event dates from the "Timezone" options.

## Field-by-Field Explanation

* **Event Date Selection** (`event_date_selection`, select_one, required: false)
	+ This field is used to select whether to use the first event date.
* **Event Date** (`event_date`, date, required: false)
	+ This field is used to enter a date for the selected event date in the chosen date format.
* **Start Time** (`start_time`, select_one, required: false)
	+ This field is used to select the start time for the event date.
* **End Time** (`end_time`, select_one, required: false)
	+ This field is used to select the end time for the event date.
* **Date Format** (`date_format`, select_multiple, required: false)
	+ This field is used to select the date format to be used for the event dates.
* **Timezone** (`timezone`, select_multiple, required: false)
	+ This field is used to select the time zone to be used for the event dates.
* **Event Date Selection 2** (`event_date_selection_2`, select_one, required: false)
	+ This field is used to select whether to use a second event date.
* **Event Date 2** (`event_date_2`, date, required: false)
	+ This field is used to enter a second event date in the chosen date format.
