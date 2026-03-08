# Hockey Equipment Checklist - Help Guide
## Purpose
The Hockey Equipment Checklist is a tool for teams to keep track of the necessary equipment for their players, including specific roles such as goaltenders and defense players.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Team Details section with information about the team.
2. In the Hockey Equipment List section, select the required equipment for the team.
3. In the Goalie Equipment section, select the specific equipment required for the goaltender(s).
4. Review and confirm the player positions and defense positions selected.

## Field-by-Field Explanation

* **Team Details**: (`team_details`, text, required)
	+ This section requires the team's information, such as team name, contact information, or other relevant details.
* **Hockey Equipment List**: (`hockey_equipment_list`, select_multiple, required)
	+ Select all the required equipment for the team, including Stick, Helmet, Pads, Gloves, Skates, and Shin Guards.
* **Goalie Equipment**: (`goalie_equipment`, select_one, required)
	+ Select the specific equipment required for the goaltender(s), such as Goalie Mask, Goalie Gloves, Pads, or Shin Guards.
* **Player Position**: (`player_position_1`, select_multiple, optional)
	+ Select the positions of the players on the team, such as Goalie, Forward, or Defense.
* **Goalie Mask**: (`goalie_mask`, select_one, optional)
	+ This field seems to be redundant with Goalie Equipment and can be ignored. However, if it's meant to be used for specific goalie masks, it can be kept for clarity.
* **Defense Position**: (`defense_position`, select_multiple, optional)
	+ Select the defense positions on the team, such as Defense 1 or Defense 2.
* **Goalie Mask**: (repeated field, optional)
	+ Please note that this field is repeated and can be removed for simplicity.
* **Additional Equipment Types**: (`additional_equipement_types`, select_multiple, optional)
	+ This field is redundant with Hockey Equipment List and can be ignored.
* **Player Position 1-6**: (`player_position_1`, `player_position_2`, `player_position_3`, `player_position_4`, `player_position_5`, `player_position_6`, select_multiple, optional)
	+ These fields are redundant and can be merged into a single section called Player Position.
* **Player Position**: (`player_position`, select_multiple, optional)
	+ Select the positions of the players on the team, such as Goalie, Forward, or Defense.
