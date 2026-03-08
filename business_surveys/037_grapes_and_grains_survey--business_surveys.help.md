# Grapes And Grains Survey - Help Guide
## Purpose
The Grapes And Grains Survey is designed to collect information about your preferences and consumption habits related to grapes and grains. Your responses will help us understand your behavior and preferences.

## How To Complete This Form
To complete this form, follow these steps:

1.  Start by reading the welcome message on the first page.
2.  Select your favorite type of grape on page 2.
3.  Indicate how often you consume grapes on page 3.
4.  Choose your favorite type of grain on page 4.
5.  Select how often you consume grains on page 5.
6.  Pick your favorite type of beer on page 6.
7.  Select your favorite type of wine on page 7.
8.  Enter your date of birth on page 8 (optional).
9.  Provide any comments you'd like to share on page 9 (optional).
10.  Enter your email address on page 10 (optional).
11.  Enter your phone number on page 11 (optional).
12.  Review and complete the survey on page 12.

## Field-by-Field Explanation

*   **Welcome to the survey** (`survey_start_page`, text, required: false): This page welcomes you to the survey. You can read the introduction and proceed with the survey.
*   **What is your favorite type of grape?** (`grapes`, select_multiple, required: true): Select one or more from the provided options. This will help us understand your favorite grape type.
*   **How often do you consume grapes?** (`grapes_preferred`, select_one, required: true): Select one from the options, indicating how often you consume grapes.
*   **What is your favorite type of grain?** (`grains`, select_multiple, required: true): Select one or more from the provided options, indicating your favorite grain type.
*   **How often do you consume grains?** (`grains_preferred`, select_one, required: true): Select one from the options, indicating how often you consume grains.
*   **What is your favorite type of beer?** (`beer`, select_one, required: true): Select one from the provided options, indicating your favorite type of beer.
*   **What is your favorite type of wine?** (`wine`, select_one, required: true): Select one from the options, indicating your favorite type of wine.
*   **Date of Birth** (`date_of_birth`, date, required: false): If you want to provide your date of birth, enter it in the format mm/dd/yyyy. This is an optional field.
*   **Comments** (`comments`, note, required: false): Provide any comments or feedback you'd like to share. This is an optional field.
*   **Email** (`email`, email, required: false): Enter your email address (optional).
*   **Phone** (`phone`, text, required: false): Enter your phone number (optional).
*   **Survey complete** (`survey_end_page`, note, required: false): Review and complete the survey on this page.
