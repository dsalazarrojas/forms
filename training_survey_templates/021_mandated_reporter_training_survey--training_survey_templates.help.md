<thinking>... internal reasoning and validation block ...

This form is a mandated reporter training survey, used to collect feedback and ratings from participants after a training session. It's intended to gather information about the participant's experience and perception of the training session, as well as the care team's performance. The form should only be completed by participants who have received training.

The form is divided into several sections, each focused on a different aspect of the training session. This guide will walk through each section and explain what information to provide for each field.

</thinking>

# mandated_reporter_training_survey - Help Guide
## Purpose
This form is used to collect feedback and ratings from participants after a training session.

## How To Complete This Form

1. Please provide the following information:
	* Your name, as it appears on your ID card
	* The date of the training session you attended
	* The time of the training session you attended (if applicable)
	* The school where you received the training
	* The name of the nonprofit organization where you received the training
2. Rate your experience with the care team that conducted the training:
	* Confidence Rating: Rate your confidence in the care team's ability to answer questions about the topic of the training
	* Care Team Rating: Rate the care team's performance overall
3. Rate the school's performance:
	* School Rating: Rate the school's overall performance in providing the training
4. Rate the care team's performance:
	* Care Team Confidence: Rate your confidence in the care team's confidence in their own abilities
5. Provide any additional comments or feedback:
	* Participant Comments: Any additional comments or thoughts about your experience
	* Care Team Comments: Any additional comments or feedback about the care team's performance

## Field-by-Field Explanation

* **Participant Name** (`participant_name`, text, required: false): Your name as it appears on your ID card.
* **Training Date** (`training_date`, date, required: false): The date of the training session you attended.
* **Training Time** (`training_time`, time, required: false): The time of the training session you attended (if applicable).
* **School Name** (`school_name`, text, required: false): The name of the school where you received the training.
* **Nonprofit Name** (`nonprofit_name`, text, required: false): The name of the nonprofit organization where you received the training.
* **Care Team** (`care_team`, text, required: false): The name of the care team that conducted the training.
* **Training Location** (`training_location`, text, required: false): The location of the training session you attended.
* **Participant Feedback** (`participant_feedback`, text, required: false): Any additional comments or thoughts about your experience.
* **Confidence Rating** (`confidence_rating`, select_one, required: true): Rate your confidence in the care team's ability to answer questions about the topic of the training, using the following options:
	+ Very Low
	+ Low
	+ Medium
	+ High
* **Participant Rating** (`participant_rating`, select_multiple, required: true): Rate the participant's overall experience, using the following options:
	+ Very Low
	+ Low
	+ Medium
	+ High
* **Care Team Rating** (`care_team_rating`, select_multiple, required: true): Rate the care team's overall performance, using the following options:
	+ Very Low
	+ Low
	+ Medium
	+ High
* **School Rating** (`school_rating`, select_multiple, required: true): Rate the school's overall performance in providing the training, using the following options:
	+ Very Low
	+ Low
	+ Medium
	+ High
* **Care Team Confidence** (`care_team_confidence`, select_multiple, required: true): Rate your confidence in the care team's confidence in their own abilities, using the following options:
	+ Very Low
	+ Low
	+ Medium
	+ High
* **Participant Comments** (`participant_comments`, text, required: false): Any additional comments or feedback about your experience.
* **Care Team Comments** (`care_team_comments`, text, required: false): Any additional comments or feedback about the care team's performance.

Please note that the participant's name is not required to be completed, as this form is intended for optional feedback. However, it's recommended to provide the participant's name as it appears on their ID card for reference purposes.

Please ensure that you complete the form honestly and to the best of your ability, and do not hesitate to provide any additional comments or feedback.
