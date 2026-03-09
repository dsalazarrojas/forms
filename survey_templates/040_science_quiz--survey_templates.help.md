# Science Quiz - Help Guide
## Purpose
This form is designed to create and administer science quizzes. It appears to be for teachers, researchers, or anyone who wants to create a science quiz for educational or assessment purposes.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in the relevant fields with your science quiz details:
    *   **Science Quiz Form ID**: Select an ID for your quiz.
    *   **Science Quiz Form Name**: Enter a name for your quiz.
    *   **Science Quiz Form Label**: Enter a label or title for your quiz.
    *   **Science Quiz Form Description**: Add a description of your quiz.
    *   **Assigned Tool**: Enter the tool associated with your quiz.
    *   **Assigned Tool Type**: Select the type of tool assigned to your quiz.
    *   **Assigned Tool Name**: Enter the name of the tool assigned to your quiz.
    *   **Assigned Tool Version**: Enter the version of the tool assigned to your quiz.
    *   **Assigned Tool Description**: Add a description of the tool assigned to your quiz.
2.  Add the quiz details:
    *   **Question Type**: Select the type of question.
    *   **Difficulty**: Choose the difficulty level of the question.
    *   **Topic**: Select relevant topics for the question.
    *   **Subject**: Select relevant subjects for the question.
    *   **Time Limit**: Set a time limit for the quiz.
    *   **Duration**: Set a duration for the quiz.
    *   **Date Created**: Enter the date the quiz was created.
    *   **Time Created**: Enter the time the quiz was created.
    *   **Date Modified**: Enter the date the quiz was last modified.
    *   **Time Modified**: Enter the time the quiz was last modified.
    *   **Notes**: Add any additional notes about the quiz.
    *   **Email**: Enter an email address associated with the quiz.
    *   **Phone**: Enter a phone number associated with the quiz.

## Field-by-Field Explanation
*   **What is the science quiz?** (`science_quiz_form_id`, `string`, required): Enter a unique ID for your science quiz.
*   **Answer** (`answer`, `string`, required): Enter the answer to the quiz question.
*   **Question** (`question`, `string`, required): Enter the question to be asked.
*   **Question Type** (`question_type`, `select_one`, required): Select the type of question to be asked.
*   **Difficulty** (`question_difficulty`, `select_multiple`, required): Choose the difficulty level of the question.
*   **Topic** (`question_topic`, `select_multiple`, required): Select the topics relevant to the question.
*   **Subject** (`question_subject`, `select_multiple`, required): Select the subjects relevant to the question.
*   **Time Limit** (`time_limit`, `number`, required): Set a time limit for the quiz.
*   **Duration** (`duration`, `number`, required): Set a duration for the quiz.
*   **Date Created** (`date_created`, `date`, required): Enter the date the quiz was created.
*   **Time Created** (`time_created`, `time`, required): Enter the time the quiz was created.
*   **Date Modified** (`date_modified`, `date`, required): Enter the date the quiz was last modified.
*   **Time Modified** (`time_modified`, `time`, required): Enter the time the quiz was last modified.
*   **Notes** (`notes`, `note`, required): Add any additional notes about the quiz.
*   **Email** (`email`, `email`, required): Enter an email address associated with the quiz.
*   **Phone** (`phone`, `text`, required): Enter a phone number associated with the quiz.

Note: This guide is based on my best effort to understand the form fields. If any field label is weak or unclear, I've tried to explain it in a way that makes sense.
