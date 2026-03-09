# Family Needs Survey - Help Guide
## Purpose
The Family Needs Survey is a tool designed to collect data about a family's needs and resources. This information will be used to determine the level of assistance or guidance required to support the family's well-being.

## How To Complete This Form
1. Please select the number of household members.
2. If you have any household income, enter the amount below.
3. List the total household expenses.
4. Select the types of food needs that the family requires.
5. List any household expenses not covered in the previous field.
6. If you have any assets, enter the amount.
7. Select the type of assets you have.
8. Select the types of household needs that are required and not covered by your income.
9. Indicate if any household needs are urgent.

## Field-by-Field Explanation
* **Family Needs** (`family_needs_survey`, `text`, not required):
	+ Please describe the family's overall needs and concerns.
* **Household Members** (`household_members`, `select_multiple`, not required):
	+ Select the number of household members.
	+ Options: 1, 2, 3, 4, 5, 6, 7, 8, More
* **Household Income** (`household_income`, `number`, not required):
	+ If you have any household income, enter the amount below.
* **Household Expenses** (`household_expenses`, `text`, not required):
	+ List the total household expenses.
* **Food Needs** (`food_needs`, `select_one`, not required):
	+ Select the types of food needs that the family requires.
	+ Options: Food, Clothing, Shelter, Medical, Transportation, Education, Other
* **Household Needs** (`household_needs`, `text`, not required):
	+ List any household needs not covered in the previous field.
* **Household Assets** (`household_assets`, `number`, not required):
	+ If you have any assets, enter the amount below.
* **Type of Assets** (`household_assets_type`, `select_one`, not required):
	+ Select the type of assets you have.
	+ Options: Assets, Property, Vehicle, Other, None
* **Household Needs 2** (`household_needs_2`, `select_multiple`, required):
	+ Select the types of household needs that are required and not covered by your income.
* **Household Needs 3** (`household_needs_3`, `select_one`, not required):
	+ Indicate if any household needs are urgent.
	+ Options: Yes, No
