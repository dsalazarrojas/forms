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
