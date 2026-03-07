<thinking>ML Tournament Registration Form is used to collect data for an ML (Machine Learning) tournament. This form is intended for teams and individuals to provide information about a tournament, including team name, location, time, and other relevant details. The form has 21 fields in total, each designed to capture a specific piece of information. To prevent errors, users must fill out the form carefully and completely. The form should not be filled out multiple times as each submission creates a new record in the database. Ensure that each field is filled out according to the instructions and the options provided.</thinking>

# ML Tournament Registration Form - Help Guide
## Purpose
The ML Tournament Registration Form is used to collect data for an ML (Machine Learning) tournament. This form is intended for teams and individuals to provide information about a tournament, including team name, location, time, and other relevant details.

## How To Complete This Form

1. Fill out the form completely and carefully.
2. Ensure each field is filled out according to the instructions and options provided.
3. Avoid filling out the form multiple times, as this will create duplicate records in the database.

## Field-by-Field Explanation

* **Team Name** (`team_name`, text, required): Enter the name of your team, including any necessary abbreviations.
* **Team Lead** (`team_lead`, text, required): Enter the name of the team lead or captain.
* **Team Members** (`team_members`, select_multiple, optional): Check the box if your team has members participating in the tournament.
* **Tournament Name** (`tournament_name`, text, required): Enter a unique name for your tournament.
* **Tournament Date** (`tournament_date`, date, required): Enter the date of the tournament in the format MM/DD/YYYY.
* **Tournament Time** (`tournament_time`, time, required): Enter the time of the tournament in the format HH:MM AM/PM.
* **Tournament Location** (`tournament_location`, text, required): Enter the location where the tournament will take place.
* **Venue** (`tournament_venue`, select_one, required): Select the venue type for the tournament (Stadium, Arena, Field).
* **Organizer** (`tournament_organizer`, text, required): Enter the name of the event organizer.
* **ML Tournament ID** (`ml_tournament_id`, text, required): Enter a unique ID for your tournament.
* **Tournament Type** (`ml_tournament_type`, select_one, required): Select the type of tournament (Single Elimination, Double Elimination, Round Robin).
* **Format** (`ml_tournament_format`, select_one, required): Select the tournament format (Knockout, Bracket, League).
* **ELO** (`ml_tournament_elo`, select_one, required): Select whether the tournament uses ELO (True or False).
* **Scoreboard** (`ml_tournament_scoreboard`, select_one, required): Select whether the tournament has a scoreboard (True or False).
* **Pairing** (`ml_tournament_pairing`, select_one, required): Select the pairing method for the tournament (Random or Bye).
* **Rounds** (`ml_tournament_rounds`, number, required): Enter the number of rounds in the tournament.
* **Duration** (`ml_tournament_duration`, number, required): Enter the duration of each round.
* **Start Time** (`ml_tournament_start_time`, time, required): Enter the start time of the tournament.
* **End Time** (`ml_tournament_end_time`, time, required): Enter the end time of the tournament.
* **Status** (`ml_tournament_status`, select_one, required): Select the status of the tournament (Scheduled, Postponed, Cancelled).
* **Notes** (`ml_tournament_notes`, note, optional): Enter any additional notes or comments about the tournament.
* **Registrations** (`ml_tournament_registrations`, select_multiple, optional): Check the box if registrations are accepted for the tournament.
* **Entrants** (`ml_tournament_entrants`, select_multiple, optional): Check the box if entrants are allowed to participate in the tournament.
* **Draws** (`ml_tournament_draws`, select_multiple, optional): Check the box if draws are allowed in the tournament.
* **Results** (`ml_tournament_results`, select_multiple, optional): Check the box if results are recorded for the tournament.
