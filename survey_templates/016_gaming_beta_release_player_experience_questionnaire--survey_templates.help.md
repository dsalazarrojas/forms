<thinking>
We need to make sure we're targeting the right audience with this form. Based on the input schema, it appears that this survey is intended for players who have participated in a gaming beta release. The purpose of this form is likely to gather feedback from players on their experience with the game, including their goals, gameplay experience, encountered issues, control and difficulty level, and overall satisfaction. To ensure we're not duplicating efforts or collecting redundant data, let's review the form carefully and focus on essential fields that provide valuable insights. For example, it might be redundant to have "goals_in_game" and "goals_in_game" (id 8). We can merge or remove them to avoid confusion.
</thinking>

# Gaming Beta Release Player Experience Questionnaire - Help Guide
## Purpose
This form is designed to collect feedback from players who have participated in a gaming beta release. Your input will help us improve the game and provide a better experience for all players.

## How To Complete This Form
1. Carefully read through each question and provide your honest feedback.
2. Answer each question according to your experience with the game.
3. You can submit the form only once.

## Field-by-Field Explanation

* **Goals In Game** (`goals_in_game`, `text`, required: false): Please describe your goals in playing the game, for example, "Complete the levels" or "Collect all power-ups".
* **Gameplay Experience** (`gameplay_experience`, `text`, required: false): Describe your experience playing the game, including any notable moments or challenges you faced.
* **Issues Encountered** (`issues_encountered`, `select_multiple`, required: false): Check all issues that you encountered during gameplay:
	+ Yes
	+ No
* **Game Controls** (`game_controls`, `number`, required: false): Estimate the number of hours you played.
* **Difficulty Level** (`difficulty_level`, `number`, required: false): Rate the difficulty level of the game (e.g., 1-5).
* **Player Experience** (`player_experience`, `text`, required: false): Describe your overall experience playing the game.
* **Feedback** (`feedback`, `note`, required: false): Share any additional thoughts or comments about the game.
* **What were your goals in game?** (`goals_in_game`, `text`, required: false): This is a repeat of the first question, so please only answer if your goals are different from the first one. 
* **How would you describe your gameplay experience?** (`gameplay_experience_desc`, `text`, required: false): Describe your experience playing the game, including any notable moments or challenges you faced.
* **Select all issues that you encountered during gameplay** (`issues_encountered_desc`, `text`, required: false): Describe any issues you encountered during gameplay.
* **How many hours did you play?** (`game_controls_desc`, `number`, required: false): Estimate the number of hours you played.
* **How would you rate the difficulty level of the game?** (`difficulty_level_desc`, `number`, required: false): Rate the difficulty level of the game (e.g., 1-5).
* **How would you rate your player experience?** (`player_experience_desc`, `text`, required: false): Rate your overall experience playing the game.
* **Feedback** (`feedback_desc`, `note`, required: false): Share any additional thoughts or comments about the game.
