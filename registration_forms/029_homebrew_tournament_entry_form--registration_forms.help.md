# Homebrew Tournament Entry Form - Help Guide
## Purpose
This form is designed to gather information about entries for a homebrew tournament. It is essential to provide accurate and unique data for each entry.

## How To Complete This Form
To complete this form, follow these steps:

1.  Ensure you have all the necessary information about your entry.
2.  Fill in the `homebrew_tournament_entry_form` field with a brief description of your entry.
3.  Enter the name of the homebrew tournament in the `homebrew_tournament_name` field.
4.  If the competition has an ID, please provide it in the `competition_id` field.
5.  Select the type(s) of brew you are entering (e.g., Beer, Mead, Cider, Seltzer) in the `brew_type` field.
6.  Choose the style of the beer (e.g., Lager, Ale, Pilsner, Stout, Porter, Saison, Sour, Gose, Berliner, Wheat) from the `beer_style` field.
7.  If your entry is a session beer, select the style and taplist in the corresponding fields.
8.  Enter the name of the brewer(s) responsible for the entry in the `competition_brewer` and `entry_brewer` fields.
9.  Provide a list of beers on the taplist for your entry in the `entry_taplist` field.
10.  Enter a label for your entry in the `entry_label` field.
11.  If your entry is a session beer, provide a list of beers on the taplist in the `session_taplist` field.
12.  Enter a label for your session beer in the `session_label` field.
13.  Add any additional notes or comments about your entry in the `notes` and `entry_notes` fields.
14.  If your entry is a session beer, add any notes or comments about the session in the `session_notes` field.

## Field-by-Field Explanation
* **HomebrewTournamentEntryForm** (`homebrew_tournament_entry_form`, text, optional): A brief description of your entry.
* **HomebrewTournamentName** (`homebrew_tournament_name`, text, optional): The name of the homebrew tournament.
* **Competition ID** (`competition_id`, text, optional): The ID of the competition (if applicable).
* **Brew Type** (`brew_type`, select_multiple, optional): Select the type(s) of brew you are entering (e.g., Beer, Mead, Cider, Seltzer).
* **Beer Style** (`beer_style`, select_one, optional): Choose the style of the beer (e.g., Lager, Ale, Pilsner, Stout, Porter, Saison, Sour, Gose, Berliner, Wheat).
* **Session Beer** (`session_beer`, text, optional): If your entry is a session beer, enter the style and taplist.
* **Competition Brewer** (`competition_brewer`, text, optional): The name of the brewer responsible for the entry in the competition.
* **Entry Brewer** (`entry_brewer`, text, optional): The name of the brewer responsible for the entry.
* **Entry Taplist** (`entry_taplist`, text, optional): A list of beers on the taplist for your entry.
* **Entry Label** (`entry_label`, text, optional): A label for your entry.
* **Session Taplist** (`session_taplist`, text, optional): A list of beers on the taplist for your session beer.
* **Session Label** (`session_label`, text, optional): A label for your session beer.
* **Notes** (`notes`, text, optional): Additional notes or comments about your entry.
* **Entry Notes** (`entry_notes`, text, optional): Additional notes or comments about your entry.
* **Session Notes** (`session_notes`, text, optional): Additional notes or comments about the session.
