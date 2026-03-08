# FMEA Training Quiz - Help Guide
## Purpose
The FMEA Training Quiz form is designed to gather relevant data about the training session held during an FMEA meeting. This form helps assess the effectiveness of the training and evaluate the learning experience.

## How To Complete This Form
To complete the form, follow these steps:

1. Select the relevant fields based on the specific training session you attended.
2. Enter the correct session number as it appears on the session schedule.
3. Enter the actual date of the training session.
4. Enter the actual start and end time of the training session.
5. Enter your unique trainer ID assigned by the training team.
6. Enter your name as a trainer.
7. Rate your performance as a trainer, choosing from the options: Good, Fair, or Poor.
8. Enter the unique ID of the learner(s) attending the session.
9. Enter the name(s) of the learner(s) attending the session.
10. Indicate whether the learner(s) attended the session.
11. Enter the question(s) or topic(s) covered during the session.
11. Enter your response or answer to the question(s) or topic(s) covered.

## Field-by-Field Explanation
* **Session Number** (`session_number`, number, required): Enter the correct session number as it appears on the session schedule.
* **Session Date** (`session_date`, date, required): Enter the actual date of the training session.
* **Session Time** (`session_time`, time, required): Enter the actual start and end time of the training session.
* **Trainer ID** (`trainer_id`, number, required): Enter your unique trainer ID assigned by the training team.
* **Trainer Name** (`trainer_name`, text, required): Enter your name as a trainer.
* **Trainer Rating** (`trainer_rating`, select_one, required): Rate your performance as a trainer, choosing from the options: Good, Fair, or Poor.
* **Learner ID** (`learner_id`, number, required): Enter the unique ID of the learner(s) attending the session.
* **Learner Name** (`learner_name`, text, required): Enter the name(s) of the learner(s) attending the session.
* **Learner Attendance** (`learner_attendance`, select_multiple, required): Indicate whether the learner(s) attended the session, choosing from the options: Yes, No.
* **Question** (`question`, text, required): Enter the question(s) or topic(s) covered during the session.
* **Answer** (`answer`, text, required): Enter your response or answer to the question(s) or topic(s) covered during the session.
