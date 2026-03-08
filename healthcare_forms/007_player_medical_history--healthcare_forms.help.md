</thinking>

# Player Medical History - Help Guide

## Purpose
The "Player Medical History" form is used to collect and document a player's medical history, including any relevant health information and medical conditions that may impact their participation in activities.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the player's name in the `player_name` field.
2. Select the player's date of birth in the `birth_date` field.
3. Enter the player's health card number in the `health_card_number` field.
4. If applicable, list the player's emergency contact's name in the `emergency_contact_name` field.
5. If applicable, enter the emergency contact's phone number in the `emergency_contact_phone_number` field.
6. List any allergies or medical conditions that the player is currently experiencing in the `allergies` field.
7. List any pre-existing medical conditions, such as illnesses, in the `illnesses` field.
8. List any previous sports injuries that the player has experienced in the `previous_sports_injuries` field.
9. Select whether the player's family has a history of heart disease or stroke in the `family_history_of_heart_disease_or_stroke` field.
10. Confirm whether the player has all their organs or not in the `have_all_organs` field.
11. Select whether the player has a family history of heart disease or stroke in the `have_family_history_of_heart_disease_or_stroke` field.
12. Confirm whether the player has all their organs in the `have_all_your_organs` field.

## Field-by-Field Explanation
* **player_name** (`player_name`, text, required/optional): Enter the player's name as it appears on their health card.
* **birth_date** (`birth_date`, date, required/optional): Select the player's date of birth.
* **health_card_number** (`health_card_number`, text, required/optional): Enter the player's health card number.
* **emergency_contact_name** (`emergency_contact_name`, text, required/optional): If the player has an emergency contact, enter their name.
* **emergency_contact_phone_number** (`emergency_contact_phone_number`, text, required/optional): If the player has an emergency contact, enter their phone number.
* **allergies** (`allergies`, text, required/optional): List any allergies or medical conditions that the player is currently experiencing.
* **illnesses** (`illnesses`, text, required/optional): List any pre-existing medical conditions.
* **previous_sports_injuries** (`previous_sports_injuries`, text, required/optional): List any previous sports injuries.
* **family_history_of_heart_disease_or_stroke** (`family_history_of_heart_disease_or_stroke`, select_multiple, required/optional): Select whether the player's family has a history of heart disease or stroke.
* **have_all_organs** (`have_all_organs`, select_one, required/optional): Confirm whether the player has all their organs.
* **have_family_history_of_heart_disease_or_stroke** (`have_family_history_of_heart_disease_or_stroke`, select_one, required/optional): Confirm whether the player has a family history of heart disease or stroke.
* **have_all_your_organs** (`have_all_your_organs`, select_one, required/optional): Confirm whether the player has all their organs.
