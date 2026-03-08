# untitled form - Help Guide
## Purpose
This form is a Baking Contest Application Form, designed for bakers to apply for a baking contest. The form collects essential information to assess the applicant's baking skills and preferences.

## How To Complete This Form

1. Fill in your form ID, which is a unique identifier for your application.
2. Provide a brief description of yourself and your baking skills.
3. Enter your form name, which can be a descriptive title for your baking contest entry.
4. Select the category that best fits your baking style (e.g., cakes, cookies, pies, pastries, tarts, muffins, bread).
5. Enter your contact email address to ensure we can reach you for any questions or further information.
6. Enter your phone number so we can contact you for any follow-up questions.
7. Enter your name and title to help us recognize and address you.
8. Enter your address so we can send you contest-related updates and information.
9. Enter the city where you live.
10. Enter the state where you live.
11. Enter your zip code.
12. Enter the date of the baking contest (if known).
13. Enter the time of the baking contest (if known).
14. Select the types of baking you enjoy (e.g., cakes, cookies, pies).
15. Enter the ingredients you use for baking (e.g., flour, sugar, eggs, butter, milk).
16. Repeat step 15 for up to 4 ingredients.

## Field-by-Field Explanation

* **Form Id**: (`form_id`, `number`, required) A unique identifier for your application.
* **Baking Contest Application Form**: (`form_name`, `text`, required) A descriptive title for your baking contest entry.
* **Description**: (`description`, `text`, optional) A brief description of yourself and your baking skills.
* **Form Name**: (`form_name_2`, `text`, optional) A second name or title for your application.
* **Category**: (`category`, `select_one`, required) Select the type of baking you enjoy (e.g., cakes, cookies, pies).
* **Form Description**: (`form_description`, `text`, optional) A longer description of your baking contest entry.
* **Form Id 2**: (`form_id_2`, `number`, optional) A second unique identifier for your application.
* **Description 2**: (`description_2`, `text`, optional) A second description of yourself and your baking skills.
* **Category 2**: (`category_2`, `select_one`, optional) Select a second category or type of baking you enjoy.
* **Contact Email**: (`contact_email`, `email`, required) Enter your email address so we can contact you.
* **Contact Number**: (`contact_number`, `text`, required) Enter your phone number so we can contact you.
* **Contact Name**: (`contact_name`, `text`, required) Enter your name and title.
* **Contact Title**: (`contact_title`, `text`, required) Enter your title or position.
* **Address**: (`address`, `text`, required) Enter your postal address.
* **City**: (`city`, `text`, required) Enter the city where you live.
* **State**: (`state`, `text`, required) Enter the state where you live.
* **Zip**: (`zip`, `text`, required) Enter your zip code.
* **Date**: (`date`, `date`, required) Enter the date of the baking contest (if known).
* **Time**: (`time`, `time`, required) Enter the time of the baking contest (if known).
* **Baking Type**: (`baking_type`, `select_multiple`, required) Select the types of baking you enjoy (e.g., cakes, cookies, pies).
* **Ingredient List**: (`ingredient_list`, `text`, required) Enter a list of ingredients you use for baking.
* **Ingredient 1**: (`ingredient1`, `select_multiple`, required) Select up to 4 ingredients you use for baking.
* **Ingredient 2**: (`ingredient2`, `select_multiple`, required) Select up to 4 ingredients you use for baking.
* **Ingredient 3**: (`ingredient3`, `select_multiple`, required) Select up to 4 ingredients you use for baking.
* **Ingredient 4**: (`ingredient4`, `select_multiple`, required) Select up to 4 ingredients you use for baking.

Note: The fields are labeled as required if they have a corresponding "required" field in the YAML definition.
