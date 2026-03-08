# speakers-inquiry-form - Help Guide
## Purpose
The speakers-inquiry-form is used to gather information about speaker availability for an event.

## How To Complete This Form
1. Fill in the event name and date.
2. Choose the event time.
3. Select the speaking formats that the event requires.
4. Choose the target audience for the event.
5. Enter the expected number of attendees.
6. Specify the number of speakers requested.
7. Enter the budget for the event.
8. Fill in the speaker's name.
9. Enter the speaker's contact information.

## Field-by-Field Explanation

* **Event Name** (`event-name`, text, required): Enter the name of the event.
* **Event Date** (`event-date`, date, required): Enter the date of the event in the format MM/DD/YYYY.
* **Event Time** (`event-time`, time, required): Enter the start time of the event in the format 12:00 AM.
* **Speaking Formats** (`speaking-formats`, select_multiple, required): Select all speaking formats that the event requires.
	+ Option 1: Option 1
	+ Option 2: Option 2
	+ Option 3: Option 3
	+ Option 4: Option 4
* **Target Audience** (`target-audience`, select_one, required): Choose the target audience for the event.
	+ Option 1: Option 1
	+ Option 2: Option 2
	+ Option 3: Option 3
* **Expected Number** (`expected-number`, number, required): Enter the expected number of attendees.
* **Speakers Requested** (`speakers-requested`, select_multiple, required): Select the number of speakers requested.
	+ Option 1: Option 1
	+ Option 2: Option 2
* **Budget Amount** (`budget-amount`, number, required): Enter the budget for the event.
* **Speaker Name** (`speaker-name`, text, required): Enter the speaker's name.
* **Speaker Contact** (`speaker-contact`, text, required): Enter the speaker's contact information.
