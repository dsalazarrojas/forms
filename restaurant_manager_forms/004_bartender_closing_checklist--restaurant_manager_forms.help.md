# Bartender Closing Checklist - Help Guide
## Purpose
The Bartender Closing Checklist is a guide to help bartenders complete their closing duties efficiently and accurately.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the **Closing date** in the "Closing date" field with the date you are closing the shift.
2. Enter your **Bartender name** in the "Bartender name" field with your name.
3. Fill in the **Shift start time** and **Shift end time** fields with the start and end times of your shift.
4. Answer each question in the **Equipment and Supplies** section, indicating whether the respective task is true or false or if there's a discrepancy.
	* **Bar counter cleaned and sanitized:** Check if the bar counter is clean and sanitized.
	* **Ice machine cleaned and restocked:** Check if the ice machine is clean and restocked.
	* **All glasses washed, dried, and properly stored:** Check if all glasses are washed, dried, and stored properly.
	* **All bottles accounted for and secured:** Check if all bottles are accounted for and secured.
5. Answer each question in the **Inventory Checks** section, indicating the status of the respective inventory:
	* **Liquor inventory status:** Check if the liquor inventory status is adequate, low, or critical.
	* **Any missing or damaged bottles?:** Check if there are any missing or damaged bottles.
6. Answer each question in the **Cash and Till** section:
	* **Cash till balanced:** Check if the cash till is balanced or if there's a variance over or under $5.
	* **If discrepancy exists, document amount:** If there's a discrepancy, enter the amount.
7. Answer each question in the **Final Items** section:
	* **Trash removed and bins emptied:** Check if trash is removed and bins are emptied.
	* **Lights turned off and bar secured:** Check if lights are turned off and the bar is secured.
8. Write any **Manager or next shift notes** if needed.
9. In the **Checklist Complete** field, select "I Confirm" if you confirm that the checklist is complete and accurate. Otherwise, select "Needs Review."

## Field-by-Field Explanation

* **Closing date** (`closing_date`, date, required): The date you are closing the shift.
* **Bartender name** (`bartender_name`, text, required): Your name as the bartender.
* **Shift start time** (`shift_start_time`, time, required): The start time of your shift.
* **Shift end time** (`shift_end_time`, time, required): The end time of your shift.
* **Bar counter cleaned and sanitized** (`bar_cleaned`, select_one, required): Check if the bar counter is clean and sanitized.
* **Ice machine cleaned and restocked** (`ice_machine_cleaned`, select_one, required): Check if the ice machine is clean and restocked.
* **All glasses washed, dried, and properly stored** (`glasses_stored`, select_one, required): Check if all glasses are washed, dried, and stored properly.
* **All bottles accounted for and secured** (`bottles_accounted`, select_one, required): Check if all bottles are accounted for and secured.
* **Liquor inventory status** (`liquor_inventory`, select_one, required): Check if the liquor inventory status is adequate, low, or critical.
* **Any missing or damaged bottles?** (`missing_bottles`, text, optional): If there are any missing or damaged bottles, describe them.
* **Mixers and supplies restocked** (`mixers_restocked`, select_one, required): Check if mixers and supplies are restocked.
* **Cash till balanced** (`till_balanced`, select_one, required): Check if the cash till is balanced or if there's a variance over or under $5.
* **If discrepancy exists, document amount** (`cash_discrepancy`, number, optional): If there's a discrepancy, document the amount.
* **Trash removed and bins emptied** (`trash_removed`, select_one, required): Check if trash is removed and bins are emptied.
* **Lights turned off and bar secured** (`lights_locked`, select_one, required): Check if lights are turned off and the bar is secured.
* **Manager or next shift notes** (`manager_notes`, text, optional): Write any notes for the manager or next shift.
* **Checklist Complete** (`checklist_complete`, select_one, required): Select "I Confirm" if you confirm that the checklist is complete and accurate; otherwise, select "Needs Review."

## Tips

* Use the form as a guide to ensure you complete all tasks accurately and thoroughly.
* Review the form carefully before confirming that the checklist is complete.
* If you have any issues or discrepancies, document them according to the form instructions.
