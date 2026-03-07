<thinking>

To create a user-facing help guide for the "Favorite Food Survey" form, we need to understand the purpose and requirements of the form. The form appears to be a survey designed to collect information about users' favorite foods, including their name, type of food, ratings, contact information, and additional comments. 

This form is likely intended to gather data for marketing or research purposes, and it's crucial to ensure that users understand the purpose and structure of the form to complete it accurately and effectively.

The provided YAML fields indicate that the form is a multi-page form with 14 fields, including text, select, number, email, text, note, date, time, and text fields. To create the help guide, we should break down the form into sections and explain each field clearly and concisely, ensuring that users understand what information is required and how to complete each field.

</thinking>

# Favorite Food Survey - Help Guide
## Purpose
This survey is designed to help us understand your favorite foods and preferences. Please take a few minutes to complete this form, and we'll use your input to improve our food offerings.

## How To Complete This Form
1. Answer each question carefully and accurately.
2. Make sure to fill in all required fields (marked as "required").
3. For select fields (like "What type of food do you like?"), select one or multiple options that apply to you.
4. For rating fields (like "Rate your food"), enter a numerical value between 1 and 100.
5. Enter your email address in the correct format (username@domain.com).
6. Enter your phone number in the format XXX-XXX-XXXX.
7. Enter any additional comments or notes about your favorite food.

## Field-by-Field Explanation

* **Favorite Food Survey** (`survey_title`, text, required): Enter a brief title for this survey.
* **Food Name** (`food_name`, text, required): Enter the name of your favorite food.
* **What type of food do you like?** (`food_type`, select_multiple, required): Select one or multiple types of food that you enjoy (e.g., Burger, Fruits, Vegetables).
* **Rate your food** (`food_rating`, number, required): Rate your favorite food on a scale of 1-100.
* **Email** (`email`, email, required): Enter your email address in the format username@domain.com.
* **Phone** (`phone`, text, required): Enter your phone number in the format XXX-XXX-XXXX.
* **Note** (`note`, note, required): Enter any additional comments or notes about your favorite food.
* **Date** (`date`, date, required): Enter the date in the format MM/DD/YYYY.
* **Time** (`time`, time, required): Enter the time in the format HH:MM AM/PM.
* **Additional Comments** (`survey_comments`, text, required): Enter any additional comments about your favorite food.
* **Food Survey Type** (`food_survey_type`, select_one, required): Select the type of food survey you are taking (e.g., Pizza, Salad, Steak).
* **Favorite Food 1** (`favorite_food_1`, text, required): Enter the name of your favorite food.
* **Favorite Food 2** (`favorite_food_2`, text, required): Enter the name of your second favorite food.
* **Favorite Food 3** (`favorite_food_3`, text, required): Enter the name of your third favorite food.

Note: Make sure to review your answers carefully before submitting the form. If you have any questions or concerns, feel free to contact us.
