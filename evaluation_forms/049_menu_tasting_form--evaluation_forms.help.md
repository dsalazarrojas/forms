<thinking>
This form is likely used in a food tasting context, possibly for rating and reviewing restaurants or food items. The goal is to collect information about a specific event, food item, and user's evaluation. It's possible that this form is part of a quality control process to assess the quality of food served at restaurants. The form might be used by restaurant managers or quality assurance teams to collect data that helps to identify areas for improvement. Before completing this form, make sure the information you provide is accurate and relevant to the specific menu item being evaluated. 
</thinking>

# Menu Tasting Form - Help Guide
## Purpose
The Menu Tasting Form is designed to gather information about menu items and the quality of food served at restaurants. This form helps to collect ratings and feedback for quality control and improvement purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Restaurant Id** to identify the specific restaurant being evaluated.
2. Select a date for the event when you tasted the menu item.
3. Enter the name of the food item you tasted.
4. Describe the food item's quality, providing as much detail as possible about the dish.
5. Evaluate the food item using the rating scale (Excellent, Good, Fair, or Needs Improvement).
6. Optional: Add any comments about the food item.
7. Enter the numerical value associated with your rating (e.g., 4 for "Excellent").
8. Enter the numerical value to represent the rating you provided (e.g., "4" for "Excellent").
9. Provide additional notes about your evaluation.

## Field-by-Field Explanation

* **Restaurant Id** (`restaurant_id`, `number`, required): Enter the restaurant's unique identifier to associate the evaluation with the correct establishment.
* **Event Date** (`event_date`, `date`, required): Select the date when you tasted the menu item.
* **Event Time** (`event_time`, `time`, optional): Optional field to specify the time of the event.
* **Food Item Name** (`food_item_name`, `text`, required): Enter the name of the menu item you tasted.
* **Food Item Description** (`food_item_description`, `text`, required): Describe the quality of the food item, providing details about its taste, presentation, and overall quality.
* **Rating Scale** (`prophets_scale`, `select_one`, required): Evaluate the menu item using the provided rating scale (Excellent, Good, Fair, or Needs Improvement).
* **Rating Comment** (`rating_comment`, `text`, optional): Optional field for adding additional comments about the menu item.
* **Rating Value** (`prophets_value`, `number`, required): Enter the numerical value associated with your rating (e.g., "4" for "Excellent").
* **Rating Notes** (`rating_notes`, `text`, optional): Provide any additional notes or comments about your evaluation.
