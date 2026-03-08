# Recipe Ingredients Cost Report Form - Help Guide
## Purpose
The Recipe Ingredients Cost Report Form is used to report on the costs associated with specific ingredients in a recipe. This information can be used for financial reporting, cost management, or other business purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Select "Yes" or "No" to indicate whether the cost report form is being used for a specific recipe.
2. Enter the date of when the cost report form is being used.
3. Enter the cost associated with the recipe ingredients.
4. Choose the type of cost (e.g., "Yes" or "No") to indicate the type of cost being reported.
5. Enter the quantity of the ingredients used.
6. Enter the unit price of each ingredient.
7. Calculate the total cost by multiplying the quantity and unit price.

## Field-by-Field Explanation

* **Cost Report Form** (`recipe_ingredients_cost_report_form`, text, required): This is the main field for the cost report form. Enter "Yes" or "No" to indicate whether the form is being used for a specific recipe.
* **Date** (`date`, date, required): Enter the date when the cost report form is being used.
* **Recipe Cost Form** (`recipe_cost_form`, select_multiple, required): Choose "Yes" or "No" to indicate the type of cost being reported (e.g., for a specific recipe).
* **Cost** (`cost`, number, required): Enter the cost associated with the recipe ingredients.
* **Cost Type** (`cost_type`, select_one, required): Choose "Yes" or "No" to indicate the type of cost (e.g., yes or no).
* **Quantity** (`quantity`, number, required): Enter the quantity of the ingredients used.
* **Unit Price** (`unit_price`, number, required): Enter the unit price of each ingredient.
* **Total Cost** (`total_cost`, number, required): Calculate the total cost by multiplying the quantity and unit price, or enter it manually if the calculation is known.

## Tips
- Ensure that you have selected "Yes" or "No" correctly for the recipe cost form and cost type fields.
- Double-check the calculations for the total cost to ensure accuracy.
- Use the correct date and cost fields to ensure that the report is accurate and up-to-date.
