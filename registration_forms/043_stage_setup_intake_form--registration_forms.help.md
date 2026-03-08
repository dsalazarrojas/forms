# stage_setup_intake_form - Help Guide
## Purpose
This form is used to collect stage setup information from users.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form fields as accurately as possible.
2. Make sure to answer all required fields (indicated by an asterisk \*).
3. For fields with multiple options, select the most relevant one.
4. Double-check your answers before submitting.

## Field-by-Field Explanation
* **Stage Setup Details** (`stage_setup_details`, text, required: false): Enter a brief description of the stage setup.
* **EventType** (`event_type`, select_one, required: false): Select 'Yes' if the event is taking place. 
* **StageName** (`stage_name`, text, required: false): Enter the name of the stage.
* **DateTime** (`date_time`, date, required: false): Enter the date of the event.
* **StageSize** (`stage_size`, number, required: false): Enter the size of the stage.
* **StageLayout** (`stage_layout`, text, required: false): Enter a brief description of the stage layout.
* **StageEquipment** (`stage_equipment`, select_multiple, required: false): Select 'Yes' if the stage has a certain type of equipment.
* **EventVenue** (`event_venue`, select_one, required: false): Select 'Yes' if the event is taking place in a venue.
* **EventDate** (`event_date`, date, required: false): Enter the date of the event.
* **EventStart** (`event_start_time`, time, required: false): Enter the start time of the event.
