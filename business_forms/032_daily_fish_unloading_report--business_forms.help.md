<thinking>
This guide will help users understand the purpose and completion process of the "Daily Fish Unloading Report" form. The form's purpose is to record information about fish unloading events, including the date of unloading, the vessel involved, the landing site, the species of fish, the quantity of fish, and any comments. The form is intended for use by fishery or seafood industry professionals who need to report on daily fish unloading events. 

The form is designed to be completed on a daily basis, hence the name "Daily Fish Unloading Report". It is likely used by people responsible for managing fish unloading operations, such as fishermen, warehouse staff, or quality control inspectors. 

The form's fields and options are designed to collect specific information related to fish unloading events. The "Unloading Date" field is a date field, which is likely used to track when the fish was unloaded. The "Vessel Name" field is for entering the name of the vessel that was unloading the fish. The "Landing Site" field is likely where the fish was unloaded, and "Fish Species" field is for selecting the type of fish being unloaded. "Quantity" field is self explanatory, for entering the quantity of fish unloaded, and "Condition" field is for reporting on the condition of the fish, which could be good, damaged, or rotten. "Comments" field is for any additional comments or information about the unloading event.

The form's fields are all optional, which means users can choose not to fill them if not relevant. However, this should be used judiciously as missing information can make it difficult for others to process the report correctly.
</thinking>

# Daily Fish Unloading Report - Help Guide

## Purpose
The Daily Fish Unloading Report is a form used to record information about fish unloading events.

## How To Complete This Form
1. Fill in the date of unloading in the "Unloading Date" field.
2. Enter the name of the vessel that unloaded the fish in the "Vessel Name" field.
3. Enter the site where the fish was unloaded in the "Landing Site" field.
4. Select the type of fish being unloaded in the "Fish Species" field.
5. Enter the quantity of fish unloaded in the "Quantity" field.
6. Report on the condition of the fish in the "Condition" field.
7. Add any additional comments or information about the unloading event in the "Comments" field.

## Field-by-Field Explanation
* **Unloading Date** (`unloading_date`, `date`, required: false): Enter the date of unloading.
* **Vessel Name** (`unloading_vessel`, `text`, required: false): Enter the name of the vessel that unloaded the fish.
* **Landing Site** (`unloading_site`, `text`, required: false): Enter the site where the fish was unloaded.
* **Fish Species** (`fish_species`, `select_one`, required: false): Select the type of fish being unloaded.
	+ Options: cod, halibut, salmon, other
* **Quantity** (`fish_quantity`, `number`, required: false): Enter the quantity of fish unloaded.
* **Condition** (`fish_condition`, `select_multiple`, required: false): Report on the condition of the fish.
	+ Options: good, damaged, rotten
* **Comments** (`comments`, `note`, required: false): Add any additional comments or information about the unloading event.
