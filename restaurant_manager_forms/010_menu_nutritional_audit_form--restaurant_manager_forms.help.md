<thinking>...</thinking>

# Menu Nutritional Audit Form - Help Guide

## Purpose
The Menu Nutritional Audit Form is used to collect and audit nutritional information of menu items in the restaurant. It helps ensure that the menu items are accurately labeled with their nutritional content, including calorie count, ingredients, and other relevant nutritional information. This form is used by restaurant staff to review and update the nutritional information of menu items on a regular basis.

## How To Complete This Form
1. Fill in the "Item Number" field with the number assigned to the menu item being audited.
2. Enter the name of the menu item in the "Item Name" field.
3. Enter the price of the item in the "Price" field.
4. Choose the serving size of the menu item from the provided options.
5. Select the review location where the audit was conducted (e.g. "Yes" for inside the restaurant or "No" for outside).
6. Enter any review comments or additional information about the menu item in the "Review Comments" field.
7. Select the relevant nutritional information for each of the "Nutrition Info 1-10" fields, as applicable to the menu item.

## Field-by-Field Explanation

### Main Menu
This is the main section of the form where you can select the menu section, subsection, category, and tag for the menu item.

* **Menu Section** (`menu_section`, select_one, required): Select the main menu section where the item is located (e.g. "Yes" for Main Course, "No" for Desserts).
* **Menu Subsection** (`menu_subsection`, select_one, required): Select the submenu section where the item is located (e.g. "Yes" for Pasta, "No" for Salad).
* **Menu Category** (`menu_category`, select_one, required): Select the category of the menu item (e.g. "Yes" for Meat, "No" for Veggie).
* **Menu Tag** (`menu_tag`, select_one, required): Select the relevant tag for the menu item (e.g. "Yes" for Gluten-free, "No" for Vegan).

### Item Details
* **Item Number** (`food_item_id`, number, required): Enter the number assigned to the menu item.
* **Item Name** (`food_item_name`, text, required): Enter the name of the menu item.
* **Price** (`item_price`, number, required): Enter the price of the menu item.
* **Serving Portion** (`portion_size`, number, required): Select the serving size of the menu item.

### Review Information
* **Review Location** (`review_location`, select_one, required): Select the location where the audit was conducted (e.g. "Yes" for inside the restaurant or "No" for outside).
* **Review Comments** (`review_comments`, text, required): Enter any review comments or additional information about the menu item.
* **Review Date** (`review_date`, date, required): Enter the date of the review.

### Nutrition Information
* **Nutrition Info 1-10** (`nutrition_info_1`, select_multiple, required): Select the applicable nutritional information for each of the nutrition_info fields.

### Additional Information
* **Photos** (`photos`, text, optional): Enter any photos of the menu item, if applicable.
