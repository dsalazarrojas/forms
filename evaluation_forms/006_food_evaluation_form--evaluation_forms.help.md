# Food Evaluation Form - Help Guide
## Purpose
The Food Evaluation Form is designed to gather information from customers about their dining experience, including the quality of food, service, and overall satisfaction. This data will help the food service industry improve their offerings and customer experiences.

## How To Complete This Form
1. Fill out the form completely and honestly.
2. Enter your name to identify yourself.
3. Select the quality of the food and service you experienced.
4. Rate the price of the food on a scale of 1 to 10.
5. Rate your overall satisfaction on a scale of 1 to 10.
6. Enter the date and time of your visit.
7. Enter your email address for contact purposes.
8. Enter your phone number for contact purposes.
9. Provide any additional feedback or comments.
10. Select the tool used to complete this form.
11. Select the category of this form.
12. (Optional) If the category selected is "Other", enter the other category.

## Field-by-Field Explanation
* **Food** (`name`, `text`, required): Enter your name as it appears on your identification or as you would like to be known.
* **Quality of Food** (`food_quality`, `select_multiple`, required): Rate the quality of the food you received. Choose from: Excellent, Good, Fair, Poor.
* **Quality of Service** (`service_quality`, `select_multiple`, required): Rate the quality of the service you received. Choose from: Excellent, Good, Fair, Poor.
* **Price of Food** (`food_price`, `number`, required): Rate the price of the food on a scale of 1 to 10.
* **Overall Satisfaction** (`overall_satisfaction`, `number`, required): Rate your overall satisfaction on a scale of 1 to 10.
* **Date** (`date`, `date`, required): Enter the date of your visit in YYYY-MM-DD format.
* **Time** (`time`, `time`, optional): Enter the time of your visit.
* **Email** (`email`, `email`, required): Enter your email address for contact purposes.
* **Phone** (`phone`, `text`, required): Enter your phone number for contact purposes.
* **Feedback** (`feedback`, `note`, required): Provide any additional feedback or comments you have.
* **Tool** (`assigned_tool`, `select_one`, required): Choose the tool or platform used to complete this form.
* **Category** (`category`, `select_one`, required): Select the category for this form. Choose from: Evaluation Forms, Other.
* **Other Category** (`category_other`, `select_multiple`, optional): If you selected "Other" for the category, choose an alternative category.
* **Comments** (`comments`, `text`, optional): Provide any additional comments or thoughts.
