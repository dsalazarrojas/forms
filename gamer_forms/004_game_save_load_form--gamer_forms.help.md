# Game Save Load Form - Help Guide
## Purpose
The Game Save Load Form is designed to allow users to save or load their game progress. It gathers information about the game, such as game ID, platform, and status.

## How To Complete This Form
To complete the Game Save Load Form, follow these steps:

1. Select the action you want to perform: Save or Load from the "Game Save/Load" dropdown menu.
2. Enter the Game ID, which is a unique identifier for the game you want to save or load.
3. Choose the platform where the game was saved or loaded, such as PC, Console, or Mobile.
4. Select the status of the game, which can be Saved, Loaded, or Error.
5. Add any additional Notes about the game progress.

## Field-by-Field Explanation
* **Game Save/Load** (`game_save_load_form`, select_one, required: false): Select the action you want to perform on the game, either Save or Load.
* **Game ID** (`game_id`, text, required: false): Enter the unique identifier for the game you want to save or load.
* **Platform** (`platform`, select_multiple, required: false): Choose the platform where the game was saved or loaded, such as PC, Console, or Mobile.
* **Status** (`game_status`, select_one, required: false): Select the status of the game, which can be Saved, Loaded, or Error.
* **Notes** (`notes`, note, required: false): Add any additional information about the game progress.
