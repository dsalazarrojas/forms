# steam_app_id_validation_form - Help Guide
## Purpose
This form is used to validate the Steam app ID for a specific user.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in your Steam app ID.
2.  Enter your user ID.
3.  Provide your profile link.
4.  Add a profile image if necessary.
5.  Provide any evidence required by the system.
6.  Check your game ID status (Yes/No).
7.  Check your Steam tag status (Yes/No).
8.  Enter your game name.
9.  Select your game tags (Yes/No, select multiple).
10.  Optionally provide more details about your validation request.

## Field-by-Field Explanation

* **Steam App Id** (`steam_app_id`, `number`, required/optional): This field is used to enter your Steam app ID, a unique identifier for your Steam account.
* **User Id** (`user_id`, `number`, required/optional): This field is used to enter your user ID, another unique identifier for your Steam account.
* **Profile Link** (`profile_link`, `text`, required/optional): This field is used to enter the link to your Steam profile.
* **Profile Image** (`profile_image`, `text`, required/optional): This field is used to upload or enter the URL of your profile image.
* **Evidence** (`evidence`, `note`, required/optional): This field is used to provide any evidence required by the system to validate your Steam app ID.
* **Game Id** (`game_id`, `select_one`, required/optional): This field is used to check if your game ID is active (Yes/No).
* **Steam Tag** (`steam_tag`, `select_one`, required/optional): This field is used to check if your Steam tag is active (Yes/No).
* **Game Name** (`game_name`, `text`, required/optional): This field is used to enter the name of the game associated with your Steam app ID.
* **Game Tag** (`game_tag`, `select_multiple`, required/optional): This field is used to select multiple tags associated with your Steam game.
* **Validation Request Details** (`validation_request_details`, `note`, required/optional): This field is used to optionally provide more details about your validation request.
