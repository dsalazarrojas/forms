# Baby Care Log - Help Guide
## Purpose
The Baby Care Log is a form designed to track and record the daily care and activities of a baby. It captures important information about the baby's feeding, sleeping, and health, allowing caregivers to monitor and report any variations or concerns.

## How To Complete This Form
To use the Baby Care Log, follow these steps:

1. Select a date to log the care and activities of the baby for that day.
2. Enter the baby's name and the caregiver's name.
3. Record the feeding times, types, and durations, including any notes about the baby's appetite and preferences.
4. Log the sleep schedule, including nap times and durations.
5. Report any medications or supplements given to the baby.
6. Record the baby's general mood and any observed symptoms.
7. Add any additional notes about the baby's activities, milestones, or concerns.

## Field-by-Field Explanation
* **Date** (`1`, `date`, required): Enter the date for which you're logging the baby's care and activities.
* **Baby Name** (`2`, `text`, required): Enter the name of the baby being cared for.
* **Caregiver Name** (`3`, `text`, required): Enter your name or the name of the person caring for the baby today.
* **Care Location** (`4`, `text`, optional): Specify where the baby is being cared for (e.g., home, daycare, relative's house).
* **-- Feeding Log --** (`5`, `note`, optional): A placeholder for the feeding log section.
* **First Feeding Time** (`6`, `time`, optional): Record the time of the baby's first feeding.
* **Feeding Type** (`7`, `select_one`, optional):
	+ Select one of the following options: Breastfeeding, Bottle with formula, Bottle with breast milk, Solids, Mixed.
* **Feeding Duration (in minutes)** (`8`, `number`, optional): Record the duration of the baby's feeding.
* **Second Feeding Time** (`9`, `time`, optional): Record the time of the baby's second feeding.
* **Feeding Type** (`10`, `select_one`, optional):
	+ Select one of the following options: Breastfeeding, Bottle with formula, Bottle with breast milk, Solids, Mixed.
* **Feeding Notes** (`11`, `text`, optional): Add any notes about the baby's feeding, including appetite level, preferences, or reactions.
* **-- Sleep Log --** (`12`, `note`, optional): A placeholder for the sleep log section.
* **First Nap Start Time** (`13`, `time`, optional): Record the start time of the baby's first nap.
* **First Nap Duration (in minutes)** (`14`, `number`, optional): Record the duration of the baby's first nap.
* **Second Nap Start Time** (`15`, `time`, optional): Record the start time of the baby's second nap.
* **Second Nap Duration (in minutes)** (`16`, `number`, optional): Record the duration of the baby's second nap.
* **Bedtime** (`17`, `time`, optional): Record the time when the baby went to sleep for the night.
* **Sleep Quality** (`18`, `select_one`, optional):
	+ Select one of the following options: Excellent, Good, Fair, Poor, Very restless.
* **-- Diaper Log --** (`19`, `note`, optional): A placeholder for the diaper log section.
* **Number of Wet Diapers Today** (`20`, `number`, optional): Record the number of wet diapers changed today.
* **Number of Dirty Diapers Today** (`21`, `number`, optional): Record the number of dirty diapers changed today.
* **-- Health Observations --** (`22`, `note`, optional): A placeholder for the health log section.
* **Temperature (if taken)** (`23`, `number`, optional): Record the baby's temperature, if taken.
* **Any Symptoms Observed?** (`24`, `text`, optional): Record any symptoms observed, such as rash, cough, or fever.
* **Medications or Supplements Given** (`25`, `text`, optional): Record any medications or supplements given to the baby.
* **Baby's General Mood** (`26`, `select_one`, optional):
	+ Select one of the following options: Happy and content, Generally happy, Fussy at times, Frequently fussy, Very irritable.
* **Additional Notes** (`27`, `text`, optional): Add any additional notes about the baby's activities, milestones, or concerns.

Note: This guide is based on the provided YAML fields and explains each field's purpose and requiredness status. Please review and adjust as needed to ensure accuracy and completeness.
