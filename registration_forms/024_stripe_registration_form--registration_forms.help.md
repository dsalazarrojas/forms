<thinking>
This form is intended to collect registration information for players and teams. It is likely used for some kind of sports or event registration process. The form has a mix of text, email, phone number, and date fields for both player and team information. Some fields like `player_address` and `team_address` have the type `note` which suggests that they are meant for more detailed information.

To confirm, this form is meant for player and team registration for some kind of event or sports-related activity. If this is not the case, please let me know and I will revise the help guide accordingly.
</thinking>

# stripe_registration_form - Help Guide
## Purpose
The Stripe Registration Form is used for players and teams to register for some kind of event or sports-related activity.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the required fields with accurate and complete information.
2. Make sure to enter valid email addresses for players and teams.

## Field-by-Field Explanation
* **Team Name** (`team_name`, text, optional): Enter the name of the team.
* **Player Name** (`player_name`, text, optional): Enter the name of the player.
* **Player Email** (`player_email`, email, optional): Enter a valid email address for the player.
* **Team Email** (`team_email`, email, optional): Enter a valid email address for the team.
* **Player Phone** (`player_phone`, text, optional): Enter the player's phone number.
* **Player Phone Extension** (`player_phone_ext`, text, optional): Enter the player's phone extension (e.g., "ext. 123").
* **Team Phone** (`team_phone`, text, optional): Enter the team's phone number.
* **Player Date of Birth** (`player_dob`, date, optional): Enter the player's date of birth.
* **Team Date of Birth** (`team_dob`, date, optional): Enter the team's date of birth.
* **Player Address** (`player_address`, note, optional): Enter a detailed address for the player.
* **Team Address** (`team_address`, note, optional): Enter a detailed address for the team.
* **Player City** (`player_city`, text, optional): Enter the city of the player's address.
