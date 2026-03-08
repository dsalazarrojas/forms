# Character Name Voting Form - Help Guide
## Purpose
The Character Name Voting Form is a tool used to collect character name votes, enabling users to express their preferences and select their top choice. The collected data can be used to analyze demographics and understand user opinions.

## How To Complete This Form
To fill out this form, follow these steps:

1.  Read the form description and instructions to understand the purpose and rules.
2.  Enter your name (optional) and email (optional) for verification or follow-up purposes.
3.  Select up to three character names that you prefer (character_choices).
4.  Choose your single top choice (top_choice).
5.  Enter a comment or reason for your choice (comment) if you wish.
6.  Select your age group (respondent_age_group).
7.  Agree or decline to the consent terms (consent_terms).
8.  Enter the date you cast your vote (submission_date).
9.  Leave any extra feedback or comments (extra_feedback) you may have.

## Field-by-Field Explanation

*   **-- Character Name Voting --** (`header`, `note`, required: false): This section serves as a title and introduction to the form, explaining its purpose and guidelines.
*   **voter name** (`voter_name`, `text`, required: false): Enter your name, which is optional for keeping votes anonymous.
*   **voter email** (`voter_email`, `email`, required: false): Provide your email address, which is optional for verification or follow-up purposes.
*   **character choices** (`character_choices`, `select_multiple`, required: true): Select up to three preferred character names from the given options.
*   **top choice** (`top_choice`, `select_one`, required: true): Choose your single preferred character name from the given options.
*   **comment** (`comment`, `text`, required: false): Enter a comment or reason for your choice, which is optional.
*   **respondent age group** (`respondent_age_group`, `select_one`, required: false): Select your age group to help analyze demographics.
*   **consent terms** (`consent_terms`, `select_one`, required: true): Agree or decline to the consent terms, which is a mandatory agreement to the rules and privacy policy.
*   **submission date** (`submission_date`, `date`, required: true): Enter the date you cast your vote.
*   **extra feedback** (`extra_feedback`, `text`, required: false): Leave any extra feedback or comments you may have.

## Tips
*   Make sure to fill out all required fields.
*   Select up to three character names for character_choices, as you are only allowed to choose one for top_choice.
*   Ensure that you agree to the consent terms to submit your vote.
*   Enter the correct submission date to ensure accurate tracking of votes.
