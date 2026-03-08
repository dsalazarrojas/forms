# Food Consumption Survey - Help Guide

## Purpose
This form is designed to collect data about an individual's fast food consumption habits, focusing on frequency, amount, timing, and other relevant details.

## How To Complete This Form

To complete this form, follow these steps:

1. Answer the required fields, marked with an asterisk (*), which are:
	* Food Frequency: Select how often you consume fast food.
	* Food Amount: Provide the amount of fast food consumed.
	* Fast Food Consumption Time: Choose the time of day when you typically consume fast food.
	* Fast Food Consumption Date: Enter the date(s) when you last consumed fast food.
2. Optional fields, such as Other Foods Consumed and Notes, can provide additional context or information about your fast food consumption habits.

## Field-by-Field Explanation

* **Fast Food Consumption Frequency**: (`fast_food_consumption_frequency`, `select_multiple`, optional)
	+ Select one or more times when you consume fast food (e.g., 'Yes', 'No').
* **Fast Food Consumption Amount**: (`fast_food_consumption_amount`, `number`, required)
	+ Enter the amount of fast food consumed (e.g., 1 serving, 2 slices, etc.).
* **Food Frequency**: (`food_frequency`, `select_one`, optional)
	+ Choose how often you consume food in general (e.g., Never, Less than once a week, etc.).
* **Food Amount**: (`food_amount`, `number`, required)
	+ Provide the amount of food consumed (e.g., 1 serving, 2 slices, etc.).
* **Food Type**: (`food_type`, `select_one`, optional)
	+ Select the type of food you typically consume (e.g., Fast Food, Fruits, etc.).
* **Food Group**: (`food_group`, `select_one`, required)
	+ Choose the food group that best describes your fast food consumption (e.g., Sweets, Fruits, etc.).
* **Fast Food Consumption Time**: (`fast_food_consumption_time`, `time`, required)
	+ Select the time of day when you typically consume fast food (e.g., Morning, Afternoon, etc.).
* **Fast Food Consumption Date**: (`fast_food_consumption_date`, `date`, required)
	+ Enter the date(s) when you last consumed fast food.
* **Other Foods Consumed**: (`other_foods_consumed`, `text`, optional)
	+ Provide any other foods you have consumed (e.g., additional details or exceptions to your fast food consumption).
* **Notes**: (`notes`, `note`, optional)
	+ Add any additional comments or thoughts about your fast food consumption habits.
