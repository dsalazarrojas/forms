<thinking>
We're creating a help guide for the "Football Pick'em Contest Entry" form. This form is likely used for users to submit their picks for a sports contest, specifically football. The form is designed to gather information from participants, including their team picks, scores, and other relevant details. The form may be used in a competitive or recreational context, such as office fantasy football leagues or social gatherings.

The form is probably designed to prevent duplication or ensure that each participant's entry is unique. This suggests that the form may be using some form of validation or submission checking.
</thinking>

# Football Pick'em Contest Entry - Help Guide
## Purpose
This form is designed to collect participant information and their picks for a football contest. To complete this form, follow these steps:

## How To Complete This Form
1. Ensure you have all the required information and details ready before starting.
2. Fill out the "Participant" section with your name, email, and phone number (if applicable).
3. Choose your team picks from the dropdown menu in the "Team Picks" section.
4. Select the game number that corresponds to the game you are choosing a pick for in the "Game Selections" section.
5. Enter your submission details, such as your predicted score, in the "Submission Details" section.
6. Enter your participant score and team points in the "Participant Score" and "Team Points" sections.

## Field-by-Field Explanation
* **Participant** (`participant_name`, text, required): Enter your name in this field to associate your picks with your identity.
* **Email** (`participant_email`, email, required): Enter your email address so we can contact you with any updates or results.
* **Phone** (`participant_phone`, text, optional): If you'd like to be contacted via phone, enter your phone number here.
* **Team Picks** (`team_picks`, select_multiple, required): Choose your team picks from the dropdown menu. This field is required to ensure that each participant's entry is unique.
* **Game Selections** (`game_selections`, select_one, required): Choose the game number that corresponds to the game you are choosing a pick for.
* **Submission Details** (`submission_details`, text, required): Enter your predicted score or submission details in this field.
* **Participant Score** (`participant_score`, number, required): Enter your participant's predicted score.
* **Team Points** (`team_points`, number, required): Enter your team's points for the chosen game.
* **Game Information** (`game_info`, text, optional): Enter any additional information about the game, if desired.
* **Game Information** (`game_selections`, select_one, required): This field is not necessary as it's not visible in the field-by-field explanation, but it's worth noting as it might be used for internal validation or submission purposes.
