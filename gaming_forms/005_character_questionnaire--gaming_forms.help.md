<thinking>As a seasoned expert in form design and technical writing, I'll create a comprehensive user-facing help guide for this character questionnaire form. This guide will break down the purpose of the form, step-by-step instructions on how to complete it, and a field-by-field explanation of each field. I'll also ensure that the explanations are concrete, concise, and practical, taking into account the provided YAML fields.</thinking>

# Character Questionnaire - Help Guide
## Purpose
This Character Questionnaire is designed to collect information about your character in a role-playing game (RPG) or fantasy setting. It will help you create a comprehensive character profile that will help you and your party collaborate on your adventure and make informed decisions about your character's development and interactions.

## How To Complete This Form

1. Fill in the form with your character information, following each field's instructions.
2. Enter your Player Name, which will be used to identify you within the party.
3. Select your Character Class, which determines your character's profession or role within the party.
4. Choose your Character Race, which defines your character's species or ancestry.
5. Enter your Character Level, which represents your character's experience and abilities.
6. Select your Character Alignment, which reflects your character's moral and ethical compass.
7. Enter your Strength Score, which represents your character's physical power rating.
8. Enter your Dexterity Score, which represents your character's agility and reflexes.
9. Enter your Constitution Score, which represents your character's health and endurance.
10. Enter your Intelligence Score, which represents your character's mental acuity.
11. Enter your Wisdom Score, which represents your character's insight and perception.
12. Enter your Charisma Score, which represents your character's social influence.
13. Choose your Character Background, which tells the story of your character's origin.
14. Enter your Special Abilities, which are unique powers or skills your character possesses.
15. Enter your Starting Equipment, which includes your character's initial gear and items.
16. Enter your Character Goal, which is your primary objective within the party.
17. Select your Role in the Party, which defines your character's contribution to the group.
18. Enter your Character Flaw, which is a weakness or vice that makes your character interesting.
19. Enter any Additional Traits that define your character beyond the standard attributes.

## Field-by-Field Explanation

* **Player Name** (`player_name`, `text`, required): Enter your gaming name, which will be used to identify you within the party.
* **Character Name** (`character_name`, `text`, required): Enter the full name of your character.
* **Character Class** (`character_class`, `select_one`, required): Choose from one of the following classes: Warrior, Mage, Rogue, Cleric, Ranger, Paladin, Bard, Druid.
* **Character Race** (`character_race`, `select_one`, required): Choose from one of the following racial options: Human, Elf, Dwarf, Orc, Halfling, Dragonborn, Tiefling, Gnome.
* **Character Level** (`character_level`, `number`, required): Enter your character's current experience level.
* **Character Alignment** (`character_alignment`, `select_one`, required): Choose from one of the following alignments: Lawful Good, Neutral Good, Chaotic Good, Lawful Neutral, Neutral Evil, Chaotic Neutral, Lawful Evil, Neutral Evil, Chaotic Evil.
* **Strength Score** (`strength_score`, `number`, required): Enter your character's physical power rating.
* **Dexterity Score** (`dexterity_score`, `number`, required): Enter your character's agility and reflexes rating.
* **Constitution Score** (`constitution_score`, `number`, required): Enter your character's health and endurance rating.
* **Intelligence Score** (`intelligence_score`, `number`, required): Enter your character's mental acuity rating.
* **Wisdom Score** (`wisdom_score`, `number`, required): Enter your character's insight and perception rating.
* **Charisma Score** (`charisma_score`, `number`, required): Enter your character's social influence rating.
* **Character Background** (`background`, `select_one`, required): Choose from one of the following backgrounds: Acolyte, Criminal, Folk Hero, Noble, Sage, Soldier, Urchin, Custom.
* **Special Abilities** (`special_abilities`, `text`, optional): Enter any unique powers or skills your character possesses.
* **Starting Equipment** (`equipment`, `text`, required): Enter your character's initial gear and items.
* **Character Goal** (`character_goal`, `text`, required): Enter your primary objective within the party.
* **Role in the Party** (`party_role`, `select_one`, required): Choose from one of the following roles: Tank, Damage Dealer, Support, Healer, Controller, Scout, Face.
* **Character Flaw** (`character_flaw`, `text`, optional): Enter a weakness or vice that makes your character interesting.
* **Additional Traits** (`additional_traits`, `text`, optional): Enter any other defining characteristics beyond the standard attributes.
