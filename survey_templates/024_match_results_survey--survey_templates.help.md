<thinking>... (internal reasoning block)

We need to verify that the form is being used to collect information about a sports match. The "match_outcome" and "home_score" and "away_score" fields suggest that the form is for recording the result of a match between two teams, with the home team playing against the away team. The "match_winner" field further supports this, indicating that the form is interested in determining which team won the match.

The "match_date" and "match_time" fields indicate that the form may also be interested in when and where the match took place. The "match_winner" field and "referee_id" fields suggest that the form may be used to track the match's outcome and any referees involved. The "match_venue" field further supports this, indicating that the form is interested in where the match took place.

Given this analysis, the form is likely being used to collect data about a sports match, specifically the match's outcome, scores, and details about the match's timing and location.

</thinking>
# Match Results Survey - Help Guide

## Purpose
This form is designed to collect information about a sports match. It gathers details about the match's outcome, scores, and timing. This data is essential for tracking and analyzing the performance of teams and players.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the outcome of the match in the "Match Outcome" field.
2. Enter the scores of the home and away teams in the "Home Score" and "Away Score" fields, respectively.
3. Select the winner of the match in the "Match Winner" field.
4. Enter any additional match outcome information in the "Other Match Outcome" field.
5. Enter the date and time of the match in the "Match Date" and "Match Time" fields.
6. Choose the match's time zone in the "Match Time Zone" field.
7. Select whether the match had a referee in the "Referee" field.
8. Select whether the match took place at a specific venue in the "Venue" field.

## Field-by-Field Explanation

* **Match Outcome** (`match_outcome`, text, optional): Enter a brief description of the match's outcome.
* **Home Score** (`home_score`, number, optional): Enter the score of the home team.
* **Away Score** (`away_score`, number, optional): Enter the score of the away team.
* **Match Winner** (`match_winner`, select_one, optional): Select the team that won the match.
* **Other Match Outcome** (`match_outcome_other`, text, optional): Enter any additional information about the match's outcome.
* **Match Date** (`match_date`, date, optional): Enter the date of the match.
* **Match Time** (`match_time`, time, optional): Enter the time of the match.
* **Match Time Zone** (`match_time_zone`, text, optional): Enter the time zone of the match.
* **Referee** (`referee_id`, select_multiple, optional): Select whether the match had a referee.
* **Venue** (`match_venue`, select_multiple, optional): Select whether the match took place at a specific venue.
