# Plant Root Training Log Form - Help Guide
## Purpose
This form is used to record and track training sessions for plants.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the General Information section with the relevant details about the plant being trained.
2. Select the type of root training in the Root Training dropdown menu.
3. Enter the duration of the training session in the Duration field.
4. Select the training session from the Training Session dropdown menu.
5. Enter the date and time of the training session in the Training Date and Training Time fields.
6. Enter the location where the training session took place in the Training Location field.
7. Enter the name and title of the trainer and trainee in the Trainer and Trainee fields.
8. Optionally, select any equipment used during the training session in the Equipment Used field.
9. Leave any additional notes about the training session in the Notes field.

## Field-by-Field Explanation
### General Information
* **General Information** (`title`, `text`, required: false): Enter the name of the plant being trained.
### Root Training
* **Root Training** (`root_training`, `select`, required: true): Select the type of root training the plant received.
### Training Session
* **Training Session** (`training_session`, `select_one`, required: true): Choose the specific training session from the list.
### Duration
* **Duration** (`training_duration`, `number`, required: true): Enter the duration of the training session in hours.
### Training Date
* **Training Date** (`training_date`, `date`, required: true): Enter the date of the training session.
### Training Time
* **Training Time** (`training_time`, `time`, required: true): Enter the time of the day the training session took place.
### Training Location
* **Training Location** (`training_location`, `text`, required: false): Enter the location where the training session took place.
### Trainer
* **Trainer** (`trainer`, `text`, required: true): Enter the name and title of the person training the plant.
### Trainee
* **Trainee** (`trainee`, `text`, required: true): Enter the name of the plant being trained.
### Equipment Used
* **Equipment Used** (`equipment_used`, `select_multiple`, required: false): Choose the equipment used during the training session (e.g. Camera, Microscope, Other).
### Notes
* **Notes** (`notes`, `note`, required: false): Leave any additional notes about the training session.
