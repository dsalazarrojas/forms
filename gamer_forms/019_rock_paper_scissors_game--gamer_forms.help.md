# rock_paper_scissors_game - Help Guide
## Purpose
The "rock_paper_scissors_game" form is designed to guide users through a rock, paper, scissors game or quiz, collecting user input and displaying results.

## How To Complete This Form
To complete this form, follow these steps:

1. On the first page, select "Yes" if you want to play a game, or "No" if you don't.
2. If you selected "Yes", you will be presented with options for "rock", "paper", and "scissors". Select one of these options to proceed.
3. Once you've made your selection, click the "Submit" button to display the results.

## Field-by-Field Explanation
* **user_input** (`user_input`, select_multiple, required): Select "Yes" if you want to play a game, or "No" if you don't.
* **rock** (`choice_rock`, select_one, required): Select one of the options to proceed with the game.
* **paper** (`choice_paper`, select_one, required): Select one of the options to proceed with the game.
* **scissors** (`choice_scissors`, select_one, required): Select one of the options to proceed with the game.
* **result_rock** (`result_rock`, text, optional): Displays the outcome of the game related to "rock".
* **result_paper** (`result_paper`, text, optional): Displays the outcome of the game related to "paper".
* **result_scissors** (`result_scissors`, text, optional): Displays the outcome of the game related to "scissors".
* **Submit** (`submit_button`, text, required): Click to submit your game selections and display the results.
