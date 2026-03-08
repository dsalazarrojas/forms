# player-medical-history - Help Guide
## Purpose
The purpose of this form is to collect medical information from players to ensure their safety and well-being during sports events.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter the Player Name in the designated field.
2. Enter the birth date of the player.
3. Enter the Health Card Number.
4. Enter the Emergency Contact Name.
5. Enter the Emergency Contact Phone Number.
6. Select the player's medical history regarding allergies.
7. Select the player's medical history regarding illnesses.
8. Select the player's medical history regarding medications.
9. Select the player's medical history regarding previous sports injuries.
10. Select the player's family history of heart disease or stroke.
11. Select the player's medical history regarding paired organs.
12. Select the player's medical history regarding asthma or heart conditions.
13. Select the player's medical history regarding other medical conditions.

## Field-by-Field Explanation

* **Player Name** (`player_name`, text, required: false): Enter the player's name as it appears on their identification.
* **Birth Date** (`birth_date`, date, required: true): Enter the player's birth date in the mm/dd/yyyy format.
* **Health Card Number** (`health_card_number`, text, required: true): Enter the player's health card number or ID number.
* **Emergency Contact Name** (`emergency_contact_name`, text, required: true): Enter the name of the emergency contact person.
* **Emergency Contact Phone Number** (`emergency_contact_phone_number`, text, required: true): Enter the phone number of the emergency contact person.
* **Allergies** (`allergies`, select_multiple, required: false): Select all the player's allergies from the list.
* **Illnesses** (`illnesses`, select_multiple, required: false): Select all the player's illnesses from the list.
* **Medications** (`medications`, select_multiple, required: false): Select all the player's medications from the list.
* **Previous Sports Injuries** (`previous_sports_injuries`, select_multiple, required: false): Select all the player's previous sports injuries from the list.
* **Family History of Heart Disease or Stroke** (`family_heart_disease_stroke`, select_one, required: true): Select if the player has a family history of heart disease or stroke.
* **Do you Have All of Your Paired Organs?** (`paired_organs`, select_one, required: true): Select if the player has all of their paired organs.
* **Do You Have Asthma or a Heart Condition?** (`asthma_heart_condition`, select_one, required: true): Select if the player has asthma or a heart condition.
* **Other Medical Conditions** (`other_conditions`, select_multiple, required: false): Select all other medical conditions the player has.
