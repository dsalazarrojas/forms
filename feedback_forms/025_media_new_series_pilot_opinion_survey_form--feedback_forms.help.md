<thinking>
To determine if a user has already completed the form and to prevent duplication of feedback, we should first check if they have already submitted the form. We can do this by checking the form's submission ID, if one exists. This way, we can ensure that the user is only prompted to fill out the form again if they haven't already completed it.
</thinking>

# media_new_series_pilot_opinion_survey_form - Help Guide
## Purpose
The "media_new_series_pilot_opinion_survey_form" is designed to gather feedback from users who have viewed a new series pilot episode. The form collects information on the user's viewing experience, overall reception, and suggestions for improvement.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the form with your honest feedback and opinions.
2. Answer each question in a way that reflects your actual experience with the series pilot episode.
3. Make sure to fill out all required fields (if applicable).
4. Submit the form to share your feedback with us.

## Field-by-Field Explanation

* **New Series Pilot Opinion Survey**:
	+ (id: 1, text, required: false): This is a text field where you can provide any additional comments or feedback about the series pilot episode.
* **How would you rate the viewing experience?**:
	+ (id: 2, number, required: false): Rate the viewing experience on a scale of 1-5, where 1 is the lowest and 5 is the highest.
* **Overall reception**:
	+ (id: 3, number, required: false): Rate the overall reception of the series pilot episode on a scale of 1-5, where 1 is the lowest and 5 is the highest.
* **Would you be interested in future episodes?**:
	+ (id: 4, select_multiple, required: false): Choose one or more options that reflect your level of interest in future episodes.
	+ (options: Interest in future episodes, Not interested in future episodes, Undecided on future episodes)
* **What suggestions do you have for improvement?**:
	+ (id: 5, text, required: false): This is a text field where you can provide any suggestions for improvement for the series pilot episode.
* **Email**:
	+ (id: 6, email, required: false): Enter your email address so we can contact you for further feedback.
* **Phone**:
	+ (id: 7, text, required: false): Enter your phone number so we can contact you for further feedback.
* **Date and time watched**:
	+ (id: 8, date, required: false): Enter the date and time when you watched the series pilot episode.
* **Time watched**:
	+ (id: 9, time, required: false): Enter the time duration of the series pilot episode.
* **How do you typically consume media?**:
	+ (id: 10, select_one, required: false): Choose how you usually consume media (Watching TV shows on a computer or mobile device, Watching TV shows on a TV set, Listening to podcasts or radio, Reading articles or books, Other).
* **How often do you typically consume media?**:
	+ (id: 11, select_one, required: false): Choose how often you usually consume media (Every day, Several times a week, Occasionally, Rarely, Never).
