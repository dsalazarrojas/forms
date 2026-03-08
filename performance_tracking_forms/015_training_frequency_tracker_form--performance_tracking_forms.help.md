# Training Frequency Tracker Form - Help Guide
## Purpose
The Training Frequency Tracker Form is designed to record and store information about training sessions, including the coach's name, participant's name, program date, start date, end date, frequency of training, training day, training time, training duration, location, and any additional notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Form Title**, a brief description of the training program.
2. Enter the **Coach Name**, the name of the coach or instructor who will be conducting the training session.
3. Enter the **Participant Name**, the name of the person participating in the training session.
4. Enter the **Program Date**, the date on which the training program will take place.
5. Enter the **Start Date**, the date when the training program will start.
6. Enter the **End Date**, the date when the training program will end.
7. Select the **Frequency**, how often the training session will occur (e.g., weekly, biweekly, monthly).
8. Choose the **Training Day**, the day of the week on which the training will take place (e.g., Monday, Tuesday, Wednesday).
9. Enter the **Training Time**, the time of day the training will start.
10. Enter the **Training Duration**, the length of the training session in hours.
11. Enter the **Location**, the venue or location where the training will take place.
12. Add any **Notes**, any additional information that is relevant to the training session.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, required: false): A brief description of the training program.
* **Coach Name** (`name`, text, required: false): The name of the coach or instructor who will be conducting the training session.
* **Participant Name** (`participant_name`, text, required: false): The name of the person participating in the training session.
* **Program Date** (`program_date`, date, required: false): The date on which the training program will take place.
* **Start Date** (`start_date`, date, required: false): The date when the training program will start.
* **End Date** (`end_date`, date, required: false): The date when the training program will end.
* **Frequency** (`frequency`, text, required: false): How often the training session will occur (e.g., weekly, biweekly, monthly).
* **Training Day** (`training_day`, select_one, required: false): The day of the week on which the training will take place (e.g., Monday, Tuesday, Wednesday).
* **Training Time** (`training_time`, time, required: false): The time of day the training will start.
* **Training Duration** (`training_duration`, number, required: false): The length of the training session in hours.
* **Location** (`location`, text, required: false): The venue or location where the training will take place.
* **Notes** (`notes`, note, required: false): Any additional information that is relevant to the training session.
* **Participant Email** (`participant_email`, email, required: false): The email address of the participant.
* **Participant Phone** (`participant_phone`, text, required: false): The phone number of the participant.
* **Participant Name** (`participant_name`, text, required: false): The name of the participant (this field should be avoided for consistency, consider removing or deprecating it).
