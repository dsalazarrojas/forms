# Match Performance Evaluation - Help Guide
## Purpose
The Match Performance Evaluation form is designed to collect data on the performance of a team in a match. It includes fields for match details, team and player information, and evaluation of the match.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the date and time of the match.
2. Enter the location where the match took place.
3. Input the name of the team that participated in the match.
4. Input the score achieved by the team.
5. Input the name of the player being evaluated.
6. Select the position of the player in the team.
7. Evaluate the performance of the player using the options provided.
8. Evaluate the overall performance of the match using the options provided.
9. Provide any areas for improvement for the team in the text box.

## Field-by-Field Explanation
* **Match Date** (`match_date`, `date`, required): Enter the date of the match in the format MM/DD/YY.
* **Match Time** (`match_time`, `time`, required): Enter the time of the match in the format HH:MM AM/PM.
* **Match Location** (`match_location`, `text`, required): Enter the exact location where the match took place.
* **Team Name** (`team_name`, `text`, required): Input the full name of the team that participated in the match.
* **Team Score** (`team_score`, `number`, required): Input the score achieved by the team in the match.
* **Player Name** (`player_name`, `text`, required): Input the name of the player being evaluated.
* **Player Position** (`player_position`, `select_one`, required): Select the position of the player in the team (Goalkeeper, Defender, Midfielder, Forward).
* **Player Performance** (`player_performance`, `select_multiple`, required): Evaluate the performance of the player using the options excellent, good, average, poor, very poor.
* **Overall Evaluation** (`overall_evaluation`, `select_one`, required): Evaluate the overall performance of the match using the options excellent, good, average, poor, very poor.
* **Areas for Improvement** (`areas_for_improvement`, `text`, required): Provide specific areas for improvement for the team.
