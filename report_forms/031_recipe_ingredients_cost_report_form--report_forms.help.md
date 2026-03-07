<thinking>
This form is intended to help users generate a report on the cost of ingredients for a specific recipe. The form is part of a larger system for managing recipes and their associated costs. This guide is for end-users who need to complete this form to report on the costs of specific ingredients in a recipe.
</thinking>

# recipe_ingredients_cost_report_form - Help Guide

## Purpose
The "recipe_ingredients_cost_report_form" is used to report on the cost of individual ingredients in a recipe. This form helps you provide detailed information about each ingredient, including its ID, name, cost, and quantity, as well as any additional comments.

## How To Complete This Form
To complete this form, follow these steps:

1. Make sure to fill out all required fields (marked as `*Required*`) to ensure accurate reporting.
2. For each ingredient, provide the following information:
	* `ingredient_id`: Enter the ID of the ingredient as provided by the system.
	* `ingredient_name`: Enter the name of the ingredient as it appears on the label or in the recipe.
	* `cost`: Enter the total cost of the ingredient as a decimal value (e.g., 1.99 for $1.99).
	* `quantity`: Enter the amount of the ingredient used in the recipe (e.g., 2 for 2 cups).
	* `unit_price`: Enter the price per unit of the ingredient (e.g., 1.49 per pound).
	* `total_cost`: Enter the total cost of the ingredient in the recipe (calculated as `cost` x `quantity` x `unit_price`).
	* `ingredient_comments`: Provide any additional comments about the ingredient (optional).

## Field-by-Field Explanation

* **header**: (ID: 1)
	+ A note field for general information or comments about the report.
* **ingredient_id** (ID: 2):
	+ Enter the ID of the ingredient as provided by the system. This helps the system track the ingredient accurately.
* **ingredient_name** (ID: 3):
	+ Enter the name of the ingredient as it appears on the label or in the recipe.
* **cost** (ID: 4):
	+ Enter the total cost of the ingredient as a decimal value (e.g., 1.99 for $1.99).
* **quantity** (ID: 5):
	+ Enter the amount of the ingredient used in the recipe (e.g., 2 for 2 cups).
* **unit_price** (ID: 6):
	+ Enter the price per unit of the ingredient (e.g., 1.49 per pound).
* **total_cost** (ID: 7):
	+ Enter the total cost of the ingredient in the recipe (calculated as `cost` x `quantity` x `unit_price`).
* **ingredient_comments** (ID: 8):
	+ Provide any additional comments about the ingredient, such as its quality or any issues with the quantity or cost.
* **submit** (ID: 9):
	+ Select the "Submit" option to complete and submit the report for review.
