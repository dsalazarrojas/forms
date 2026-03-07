<thinking>
Internal reasoning block: This form is intended to collect data on player performance during a season, including details such as player ID, coach ID, season start date, and game statistics. It also collects data on game outcomes, team ratings, and player ratings. The form is designed to be filled out by a coach or staff member to report on the performance of players in different games and seasons.
Please make sure to review the form carefully and ensure that all required fields are filled out accurately. 
Duplicate or missing data might lead to incorrect analysis or report generation.
</thinking>

# Player Performance Season Report Form - Help Guide

## Purpose
This form is used to track and report on player performance during a season. It collects data on player details, game outcomes, and ratings.

## How To Complete This Form

1. Select the Player ID of the player being reported on.
2. Choose the Coach ID who is reporting on the player.
3. Enter the Season Start Date, which marks the beginning of the season.
4. Enter the Player Name of the player being reported on.
5. Choose the Sport the player competes in (Soccer, Basketball, Baseball).
6. Indicate if the player is a Yes or No for playing in a specific game.
7. Enter the number of Games Played during the season.
8. Enter the Win Percentage achieved by the player during the season.
9. Choose the Player Performance level (5, 10, 15, or 20).
10. Enter the evaluation of the player in text format.
11. Enter any additional Notes for the player.
12. (Optional) Select multiple Game Types for the player's performance.
13. (Optional) Enter the Game Date for each selected Game Type.
14. (Optional) Enter the Game Time for each selected Game Type.
15. (Optional) Select the Game Outcome for each selected Game Type.
16. (Optional) Choose the Player Rating (Good or Fair).
17. (Optional) Choose the Team Rating (Good or Fair).
18. (Optional) Enter the Team Name associated with the player.
19. (Optional) Enter the Team Name 2 associated with the player.
20. (Optional) Select the Game Outcome 2 for the player.
21. (Optional) Select the Game Outcome 3 for the player.
22. (Optional) Select the Game Outcome 4 for the player.
23. (Optional) Select the Game Outcome 5 for the player.
24. (Optional) Select the Game Outcome 6 for the player.

## Field-by-Field Explanation

* **Player Id** (`player_id`, `number`, required): Enter the ID of the player being reported on. This is a required field that helps identify the player's profile.
* **Coach Id** (`coach_id`, `select_one`, required): Choose the ID of the coach who is reporting on the player. This is a required field that helps track who is making the report.
* **Season Start Date** (`season_start_date`, `date`, required): Enter the date that marks the beginning of the season. This is a required field that helps determine the timeframe of the report.
* **Player Name** (`player_name`, `text`, required): Enter the name of the player being reported on. This is a required field that helps identify the player's profile.
* **Sport** (`sport`, `select_one`, required): Choose the sport the player competes in (Soccer, Basketball, Baseball). This is a required field that helps identify the player's sport.
* **Player Position** (`position`, `select_one`, required): Indicate if the player is a Yes or No for playing in a specific game. This is a required field that helps track the player's availability.
* **Games Played** (`game_count`, `number`, required): Enter the number of games played by the player during the season. This is a required field that helps track the player's performance.
* **Win Percentage** (`win_percentage`, `number`, required): Enter the win percentage achieved by the player during the season. This is a required field that helps evaluate the player's performance.
* **Player Performance** (`player_performance`, `select_one`, required): Choose the player's performance level (5, 10, 15, or 20). This is a required field that helps evaluate the player's performance.
* **Evaluation** (`evaluation`, `text`, required): Enter the evaluation of the player in text format. This is a required field that helps gather more information on the player's performance.
* **Notes** (`notes`, `note`, required): Enter any additional notes for the player. This is a required field that helps capture any extra details.
* **Game Type** (`game_type`, `select_multiple`, optional): (Optional) Select multiple Game Types for the player's performance. This field is optional and helps identify the different types of games played.
* **Game Date** (`game_date`, `date`, optional): (Optional) Enter the Game Date for each selected Game Type. This field is optional and helps track the dates of games played.
* **Game Time** (`game_time`, `time`, optional): (Optional) Enter the Game Time for each selected Game Type. This field is optional and helps track the start time of games played.
* **Game Outcome** (`game_outcome`, `select_one`, optional): (Optional) Select the Game Outcome for each selected Game Type. This field is optional and helps track the outcome of games played.
* **Player Rating** (`player_rating`, `select_one`, optional): (Optional) Choose the Player Rating (Good or Fair). This field is optional and helps evaluate the player's rating.
* **Team Rating** (`team_rating`, `select_one`, optional): (Optional) Choose the Team Rating (Good or Fair). This field is optional and helps evaluate the team's rating.
* **Team Name** (`team_name`, `text`, optional): (Optional) Enter the team name associated with the player. This field is optional and helps identify the team's name.
* **Team Name 2** (`team_name_2`, `text`, optional): (Optional) Enter the team name 2 associated with the player. This field is optional and helps identify the team's name.
* **Game Outcome 2** (`game_outcome_2`, `select_one`, optional): (Optional) Select the Game Outcome 2 for the player. This field is optional and helps track the outcome of games played.
* **Game Outcome 3** (`game_outcome_3`, `select_one`, optional): (Optional) Select the Game Outcome 3 for the player. This field is optional and helps track the outcome of games played.
* **Game Outcome 4** (`game_outcome_4`, `select_one`, optional): (Optional) Select the Game Outcome 4 for the player. This field is optional and helps track the outcome of games played.
* **Game Outcome 5** (`game_outcome_5`, `select_one`, optional): (Optional) Select the Game Outcome 5 for the player. This field is optional and helps track the outcome of games played.
* **Game Outcome 6** (`game_outcome_6`, `select_one`, optional): (Optional) Select the Game Outcome 6 for the player. This field is optional and helps track the outcome of games played.

## Tips
* Review all fields carefully before submitting to ensure accuracy.
* Check that all required fields are filled out.
* Double-check game outcomes for each selected Game Type to ensure correct reporting.
* Enter team names for all team fields if applicable.
* Enter game dates and times if applicable.
* If unsure about any field, refer back to the form's purpose and available options for clarification.
