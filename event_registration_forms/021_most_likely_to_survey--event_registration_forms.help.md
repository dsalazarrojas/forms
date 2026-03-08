# most_likely_to_survey - Help Guide
## Purpose
The "most_likely_to_survey" form collects information from participants about their likelihood to participate in surveys. This form is used for event registration or participant information collection.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the participant information section with your personal details.
2. Enter the name of the event you are registering for.
3. Provide a brief prediction about your likelihood to participate in surveys for this event.
4. Select your most likely option from the list of options provided.
5. Provide a specific date and time for your prediction.
6. Enter your estimated probability of participation as a number between 0 and 100.
7. Leave any additional comments about your prediction.
8. Enter your email address for communication purposes.
9. Provide your phone number for communication purposes.

## Field-by-Field Explanation
* **participant_info** (`participant_info`, `text`, required: false): This field is for participant information and is a general text input. Enter your name and any other relevant details.
* **event_name** (`event_name`, `text`, required: false): Enter the name of the event you are registering for.
* **participant_prediction** (`participant_prediction`, `text`, required: false): Provide a brief prediction about your likelihood to participate in surveys for this event.
* **most_likely_to_surveys** (`most_likely_to_surveys`, `select_multiple`, required: false): Select your most likely option from the list of options provided.
* **prediction_type** (`prediction_type`, `select_one`, required: false): Select the type of prediction you are making.
* **prediction_date** (`prediction_date`, `date`, required: false): Enter the specific date for your prediction.
* **prediction_time** (`prediction_time`, `time`, required: false): Enter the specific time for your prediction.
* **prediction_probability** (`prediction_probability`, `number`, required: false): Enter your estimated probability of participation as a number between 0 and 100.
* **comments** (`comments`, `note`, required: false): Leave any additional comments about your prediction.
* **email** (`email`, `email`, required: false): Enter your email address for communication purposes.
* **phone** (`phone`, `text`, required: false): Enter your phone number for communication purposes.
