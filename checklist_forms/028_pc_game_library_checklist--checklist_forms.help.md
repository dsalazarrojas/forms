# PC Game Library Checklist - Help Guide
## Purpose
The PC Game Library Checklist form is designed to collect information about a user's collection of PC games. This form helps us understand the user's gaming preferences, habits, and collection.

## How To Complete This Form

1. Select the platform on which you played or own the game (PC, Console, or Mobile).
2. Enter the game's title.
3. Choose the year the game was released.
4. Select the game's publisher.
5. Choose who owns the game (Self, Friend, or Family).
6. Indicate the game's progress (Completed, Not Started, or In Progress).
7. Add any notes about the game.
8. Select any applicable tags for the game (Genre, Series, or Multiplayer).
9. Enter the game's rating (on a scale of 1/5 to 5/5).
10. Enter the game's price.
11. Select any platforms on which you own the game (PC, Console, or Mobile).
12. (Optional) Enter the date you acquired the game.
13. (Optional) Enter the date and time you last played the game.
14. (Optional) Report your playtime for the game.
15. (Optional) Enter the date you last played the game.
16. (Optional) Indicate if the game is on your wishlist.
17. (Optional) Enter the date the game was added to your wishlist.
18. (Optional) Add any additional notes about the game.
19. (Optional) Select any additional tags for the game (Genre, Series, or Multiplayer).
20. (Optional) Indicate if the game is part of a series.
21. (Optional) Indicate if the game has multiplayer capabilities.
22. (Optional) Indicate if the game is completed.
23. (Optional) Enter the date the game was completed.
24. (Optional) Select the rating for the game (1/5 to 5/5).
25. (Optional) Indicate if the game can be replayed.
26. (Optional) Select the replay value for the game (True or False).

## Field-by-Field Explanation
* **Platform** (`game_platform`, `select_one`, required): Select the platform on which you played or own the game (PC, Console, or Mobile).
* **Game Title** (`game_title`, `text`, required): Enter the name of the game.
* **Release Year** (`game_year`, `number`, required): Enter the year the game was released.
* **Publisher** (`game_publisher`, `select_one`, required): Select the game's publisher (Electronic Arts, Ubisoft, or Bethesda).
* **Owned By** (`game_owner`, `select_one`, required): Choose who owns the game (Self, Friend, or Family).
* **Progress** (`game_progress`, `select_multiple`, required): Indicate the game's progress (Completed, Not Started, or In Progress).
* **Notes** (`game_notes`, `note`, optional): Add any notes or comments about the game.
* **Tags** (`game_tags`, `select_multiple`, optional): Select any applicable tags for the game (Genre, Series, or Multiplayer).
* **Rating** (`game_rating`, `number`, required): Enter the game's rating (on a scale of 1/5 to 5/5).
* **Price** (`game_price`, `number`, required): Enter the game's price.
* **Platforms Owned** (`game_platform_owned`, `select_multiple`, required): Select any platforms on which you own the game (PC, Console, or Mobile).
* **Owned Date** (`game_owned_date`, `date`, optional): (Optional) Enter the date you acquired the game.
* **Last Played** (`game_last_played`, `time`, optional): (Optional) Enter the date and time you last played the game.
* **Playtime** (`game_playtime`, `number`, optional): (Optional) Report your playtime for the game.
* **Acquired** (`game_acquired`, `date`, optional): (Optional) Enter the date you last played the game.
* **Wishlist** (`game_wishlist`, `select_one`, optional): Indicate if the game is on your wishlist.
* **Wishlist Date** (`game_wishlist_date`, `date`, optional): (Optional) Enter the date the game was added to your wishlist.
* **Notes (2)** (`game_notes`, `note`, optional): (Optional) Add any additional notes about the game.
* **Tags (2)** (`game_tags`, `select_multiple`, optional): (Optional) Select any additional tags for the game (Genre, Series, or Multiplayer).
* **Series** (`game_series`, `select_one`, optional): (Optional) Indicate if the game is part of a series.
* **Multiplayer** (`game_multiplayer`, `select_one`, optional): (Optional) Indicate if the game has multiplayer capabilities.
* **Completed** (`game_completed`, `select_one`, optional): (Optional) Indicate if the game is completed.
* **Completed Date** (`game_completed_date`, `date`, optional): (Optional) Enter the date the game was completed.
* **Rating (2)** (`game_rating`, `select_one`, optional): (Optional) Select the rating for the game (1/5 to 5/5).
* **Replay** (`game_replay`, `select_one`, optional): Indicate if the game can be replayed.
* **Replay Value** (`game_replay`, `select_one`, optional): (Optional) Select the replay value for the game (True or False).
