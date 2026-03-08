# TV Series Release Viewer Feedback Form - Help Guide
## Purpose
The TV Series Release Viewer Feedback Form is designed to collect feedback from viewers on new TV series releases. This feedback will help the TV show's team to understand what viewers think about the latest releases and make informed decisions on future content.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the release date of the episode or season you are giving feedback on.
2. Enter the episode number (if applicable).
3. Enter the title of the episode.
4. Choose the genre of the episode (e.g., Action, Comedy, etc.).
5. Select the season number (if applicable).
6. Write a short description of the episode.
7. Rate the episode from 1 to 10.
8. Write your feedback about the episode.
9. Enter your email address (optional).
10. Enter your phone number (optional).
11. Select the category of the feedback (e.g., Action, Comedy, etc.).
12. Select the person the feedback is being assigned to (e.g., chatjimmy, jenny, etc.).
13. Write any additional comments about the feedback.
14. Select the type of submission (e.g., Feedback, Review, etc.).
15. Select the submission type again, as this is a required field.
16. Enter the date and time of submission.

## Field-by-Field Explanation

* **Release Date** (`release_date`, date, optional): This field is used to select the release date of the episode or season you are giving feedback on. Enter the date in the correct format (YYYY-MM-DD).
* **Release Episode Number** (`release_episode_number`, number, optional): This field is used to enter the episode number of the release you are giving feedback on.
* **Episode Name** (`episode_name`, text, optional): This field is used to enter the title of the episode.
* **Genre** (`genre`, select_one, optional): This field is used to select the genre of the episode (e.g., Action, Comedy, etc.).
* **Season Number** (`season_number`, number, optional): This field is used to select the season number of the episode or release.
* **Episode Description** (`episode_description`, text, optional): This field is used to write a short description of the episode.
* **Overall Rating** (`overall_rating`, number, optional): This field is used to rate the episode from 1 to 10.
* **Feedback** (`feedback`, text, optional): This field is used to write your feedback about the episode.
* **Email** (`email`, email, optional): This field is used to enter your email address (optional).
* **Phone** (`phone`, text, optional): This field is used to enter your phone number (optional).
* **Category** (`category`, select_multiple, optional): This field is used to select the category of the feedback (e.g., Action, Comedy, etc.).
* **Assigned To** (`assigned_to`, select_one, optional): This field is used to select the person the feedback is being assigned to (e.g., chatjimmy, jenny, etc.).
* **Comments** (`comments`, text, optional): This field is used to write any additional comments about the feedback.
* **Submission Type** (`submission_type`, select_multiple, optional): This field is used to select the type of submission (e.g., Feedback, Review, etc.).
* **Submission Type** (second instance of `submission_type`, select_multiple, required): This field is used to confirm the submission type (required).
* **Submission Date** (`submission_date`, date, optional): This field is used to enter the date and time of submission in the correct format (YYYY-MM-DD).
* **Submission Time** (`submission_time`, time, optional): This field is used to enter the time of submission.
* **Submitter Location** (`submitter_location`, text, optional): This field is used to enter your location.
