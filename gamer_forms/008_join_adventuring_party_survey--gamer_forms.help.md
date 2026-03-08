<thinking>
# join_adventuring_party_survey - Help Guide
## Purpose
This form is designed to collect information from players about their preferences and requirements for joining an adventuring party. It's meant to be used by adventurers, game masters, or event organizers to gather data about potential party members' interests, special needs, and other relevant details.
</thinking>

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your player information in the **Player Info** field (Page 1).
2. Provide details about your desired adventure (Page 1).
3. Specify your role in the adventuring party (Page 1).
4. Choose your preferred options from **Player Preferences** (Page 1).
5. Add any special requests in the **Special Requests** field (Page 1).
6. Add any additional notes in the **Notes** field (Page 1).
7. If necessary, select the date and time of your desired adventure (Page 1).

## Field-by-Field Explanation
* **Player Info** (`player_info`, `text`, required/optional): Enter your name, email, or any other relevant contact information.
* **Adventure Details** (`adventure_details`, `text`, required/optional): Describe the type of adventure you're looking for (e.g., dungeon crawl, exploration, puzzle-solving).
* **Party Details** (`party_details`, `select_multiple`, required/optional): Specify your role in the adventuring party:
	+ Leader: You'll lead the party.
	+ Member: You'll be a part of the party, but not the leader.
	+ Guest: You'll observe or join temporarily.
* **Player Preferences** (`player_preferences`, `select_one`, required/true): Choose your preferred option:
	+ Option 1
	+ Option 2
	+ Option 3
* **Special Requests** (`special_requests`, `text`, required/optional): Add any special needs or requirements you have.
* **Notes** (`notes`, `note`, required/optional): Add any other information you'd like to share with the adventuring party.
* **Date & Time** (`date_and_time`, `date`, required/optional): If you have a specific date and time in mind for your adventure, enter it here.
* **Time of Day** (`time_of_day`, `time`, required/optional): If you have a specific time of day for your adventure, enter it here.
