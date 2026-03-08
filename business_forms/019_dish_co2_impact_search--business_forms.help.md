<thinking>...</thinking>

This form is intended to help users estimate the potential impact of different dishes on CO2 emissions. It asks for information about the dish's name, cuisine type, list of ingredients, quantity of each ingredient, unit of measurement for each ingredient, sourcing of ingredients, calculation options (high, medium, or low impact), estimated CO2 emissions, and unit of measurement for CO2 emissions. This form is likely used for internal business operations such as inventory management, supply chain optimization, or environmental impact assessments.

</thinking>

# dish-co2-impact-search - Help Guide
## Purpose
The purpose of this form is to help users estimate the potential impact of different dishes on CO2 emissions. It collects information about the dish, its ingredients, and estimated emissions to aid in internal business operations such as inventory management, supply chain optimization, or environmental impact assessments.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the name of the dish you want to assess.
2. Select the cuisine type of the dish.
3. List the ingredients used in the dish.
4. Enter the quantity of each ingredient.
5. Choose the unit of measurement for each ingredient.
6. Select where the ingredients are sourced (optional).
7. Choose how you want to calculate the impact (High, Medium, or Low).
8. Enter the estimated CO2 emissions.
9. Choose the unit of measurement for CO2 emissions.

## Field-by-Field Explanation

* **Dish Name** (`dish_name`, text, required): Enter the name of the dish you want to assess. This is the first step in understanding the dish's composition and impact.
* **Cuisine** (`cuisine`, text, required): Select the cuisine type of the dish to help narrow down the impact assessment.
* **Ingredient List** (`ingredient_list`, text, required): List the ingredients used in the dish, separated by commas.
* **Ingredient Quantity** (`ingredient_quantity`, number, required): Enter the quantity of each ingredient. This will help calculate the dish's overall impact.
* **Ingredient Unit** (`ingredient_unit`, text, required): Choose the unit of measurement for each ingredient (e.g., grams, liters).
* **Ingredient Sourcing** (`ingredient_sourcing`, text, optional): If relevant, select where the ingredients are sourced (e.g., local farm, factory, store).
* **Calculation Options** (`calculation_options`, select_multiple, required): Select how you want to calculate the impact (High, Medium, or Low).
* **Estimated CO2 Impact** (`estimated_co2`, number, required): Enter the estimated CO2 emissions of the dish.
* **Unit of Measure** (`unit_of_measure`, text, required): Choose the unit of measurement for CO2 emissions (e.g., grams CO2, kg CO2).
* **CO2 Emissions Reduction per Unit** (`co2_emissions_reduction_per_unit`, text, optional): Enter the CO2 emissions reduction per unit of the dish (if applicable).
