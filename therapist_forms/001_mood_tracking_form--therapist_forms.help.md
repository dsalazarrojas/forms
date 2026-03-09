# mood_tracking_form - Help Guide
## Purpose
The mood_tracking_form is a questionnaire designed to help patients or individuals track their mood, emotions, and other relevant factors over a certain period. It provides a way to gather information about their mental state at different intervals, aiding in better understanding and management.

## How To Complete This Form
To fill out the mood_tracking_form, follow these steps:
1. **User Name**: Enter your name as it appears on your records.
2. **Feelings**: Select the feelings you are currently experiencing.
3. **Emotions**: Choose how you are feeling.
4. **Energy Level**: Enter your current energy level, using the number value.
5. **Mood Score**: Enter a number value to rate your current mood.
6. **Notes**: Add any additional comments or notes about your current state.
7. **Date**: Enter the date you are completing this form.
8. **Time**: Enter the time you are completing this form.
9. **Email**: Enter your email address if you want to be contacted.
10. **Phone**: Enter your phone number if you want to be contacted.
11. **Additional Info**: Choose if you have any additional information.
12. **Rating**: Enter a number value to rate your current state.
13. **Scale**: Choose the scale you are using.
14. **Frequency**: Choose the frequency of your current state.
15. **Intensity**: Choose the intensity of your current state.
16. **Duration**: Choose the duration of your current state.
17. **Mood Tracking Form ID**: This is not a user-facing field and can be ignored.

## Field-by-Field Explanation
* **User Name** (`user_name`, text, required: false): Enter your name as it appears on your records.
* **Feelings** (`feelings`, select_multiple, required: false): Select the feelings you are currently experiencing.
* **Emotions** (`emotions`, select_one, required: false): Choose how you are feeling.
* **Energy Level** (`energy_level`, number, required: false): Enter your current energy level, using the number value.
* **Mood Score** (`mood_score`, number, required: false): Enter a number value to rate your current mood.
* **Notes** (`notes`, note, required: false): Add any additional comments or notes about your current state.
* **Date** (`date`, date, required: false): Enter the date you are completing this form.
* **Time** (`time`, time, required: false): Enter the time you are completing this form.
* **Email** (`email`, email, required: false): Enter your email address if you want to be contacted.
* **Phone** (`phone`, text, required: false): Enter your phone number if you want to be contacted.
* **Additional Info** (`additional_info`, select_one, required: false): Choose if you have any additional information.
* **Rating** (`rating`, number, required: false): Enter a number value to rate your current state.
* **Scale** (`scale`, select_one, required: false): Choose the scale you are using.
* **Frequency** (`frequency`, select_one, required: false): Choose the frequency of your current state.
* **Intensity** (`intensity`, select_one, required: false): Choose the intensity of your current state.
* **Duration** (`duration`, select_one, required: false): Choose the duration of your current state.
* **Mood Tracking Form ID** (`mood_tracking_form_therapist_form_id`, select_one, required: false): This field is not user-facing and can be ignored.
