<thinking>

Internal reasoning to determine the form purpose and check for relevance and non-duplication:
This form is designed for collecting information from teams and players to register for a tournament. The form includes fields for tournament information, team information, player information, and contact details. The purpose of this form is to gather essential data for the tournament organizers to effectively manage the registration process. It is likely that this form will be used by tournament organizers, administrators, or coordinators to collect relevant details from teams and players before the tournament starts.

Form Purpose: To register teams and players for a tournament.

Form Type: Tournament Registration Form

Form Fields:
- **Tournament Information** (page 1): This section collects general information about the tournament.
- **Team Information** (page 2): This section gathers details about the team, including team name and abbreviation.
- **Player Information** (page 3): This section collects information about each player, including name, abbreviation, and contact details.
- **Registration Details** (page 4): This section captures registration date and time, and other specific details.

After reviewing the form fields, it appears that this form is a comprehensive registration form designed to collect all necessary information from teams and players. There are no fields that are redundant or unnecessary for a standard tournament registration process.

</thinking>

# Tournament Registration Form - Help Guide
## Purpose
The purpose of this form is to register teams and players for a tournament.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the **Tournament Information** section with the required details about the tournament.
2. Provide **Team Information**, including the team name and abbreviation.
3. Fill in **Player Information**, including name, abbreviation, and contact details for each player.
4. Answer **Team Manager** and **Team Coaches** questions with either "Yes" or "No".
5. Fill in the **Registration Date** and **Registration Time**.
6. Provide **Team Contact Details**, including email and phone number.
7. Fill in **Player Contact Details**, including email and phone number.

## Field-by-Field Explanation
### Page 1: Tournament Information
* **Tournament Title** (`title`, text, required): Enter the name of the tournament.
* **Registration Date** (`registration_date`, date, required): Enter the date of the tournament registration.
* **Registration Time** (`registration_time`, time, required): Enter the time of the tournament registration.

### Page 2: Team Information
* **Team Name** (`team_name`, text, required): Enter the name of the team.
* **Team Abbreviation** (`team_name_abbr`, text, required): Enter the team abbreviation.
* **Team Type** (`team_type`, text, optional): Enter the type of team (if any).

### Page 3: Player Information
* **Player Name** (`player_name`, text, required): Enter the name of the player.
* **Player Abbreviation** (`player_name_abbr`, text, required): Enter the player abbreviation.
* **Player Type** (`player_type`, text, optional): Enter the type of player (if any).
* **Player Manager Information** (`player_manager_info`, text, optional): Enter any additional information about the player manager.

### Page 4: Registration Details
* **Team Manager** (`team_manager`, select_one, optional): Answer "Yes" if the team manager is present, "No" otherwise.
* **Team Coaches** (`team_coaches`, select_multiple, optional): Answer "Yes" or "No" for each coach.
* **Players Count** (`players_count`, number, optional): Enter the number of players in the team.
* **Players Information** (`players_info`, text, optional): Enter any additional information about the players.
* **Player Contact Details** (page 5-6):
	+ **Team Email** (`team_email`, email, required): Enter the team email.
	+ **Team Phone** (`team_phone`, text, required): Enter the team phone number.
	+ **Player Email** (`player_email`, email, required): Enter the player email.
	+ **Player Phone** (`player_phone`, text, required): Enter the player phone number.
	+ **Player Information** (`player_info`, text, optional): Enter any additional information about the player.
