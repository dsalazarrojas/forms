<thinking>
This form is designed for gathering feedback from users who attended a drama workshop, with the aim of improving future workshops. The form is part of a broader effort to collect data on the effectiveness and impact of the workshops. The form will likely be used by organizers of the workshop to get a general idea of how participants perceive the workshop and what they enjoyed most about it.
</thinking>

# drama_workshop_feedback_survey - Help Guide
## Purpose
This form is a feedback survey for participants of a drama workshop. It's designed to gather information about your experience and opinions on the workshop. Your feedback is valuable to help us improve future workshops.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "Participant Name" field.
2. Write a brief comment on your experience and opinions about the workshop in the "Feedback" field.
3. Choose how you would rate your overall feedback on the workshop in the "Rate the workshop" field.
4. Indicate whether you attended the workshop ("Attended Workshop") and the session ("Attended Session").
5. Choose the time slot you attended the workshop in the "Time Slot" field.
6. Enter the date and time of the workshop in the "Date of Workshop" and "Time of Workshop" fields.

## Field-by-Field Explanation

* **Participant Name** (`participant_name`, text, required: false): Please enter your name.
* **Workshop Title** (`workshop_title`, text, required: false): This is a text field for you to enter the title of the workshop you attended.
* **How would you rate your overall feedback on this workshop?** (`feedback`, select_one, required: false):
	+ Excellent: I was very satisfied with the workshop
	+ Good: I was satisfied with the workshop
	+ Fair: I was neutral about the workshop
	+ Poor: I was dissatisfied with the workshop
* **Rate the workshop** (`rating`, number, required: false): Enter a number between 1 and 5 to rate your overall experience.
* **Comments** (`comment`, text, required: false): Write your thoughts and comments about the workshop.
* **Attended Workshop** (`attended_workshop`, select_one, required: false):
	+ True: I attended the workshop
	+ False: I did not attend the workshop
* **Attended Session** (`attended_session`, select_one, required: false):
	+ Yes: I attended the session
	+ No: I did not attend the session
* **Session Length** (`session_length`, number, required: false): Enter the length of the session in hours.
* **Time Slot** (`time_slot`, text, required: false): Enter the time slot you attended the workshop.
* **Date of Workshop** (`date_workshop`, date, required: false): Enter the date of the workshop.
* **Time of Workshop** (`time_workshop`, time, required: false): Enter the time of the workshop.
