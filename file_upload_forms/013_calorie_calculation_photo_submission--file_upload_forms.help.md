# Calorie Calculation Photo Submission - Help Guide
## Purpose
The Calorie Calculation Photo Submission form is designed to collect user-submitted photos and data for the estimation of calories consumed during a meal or snack. This form aims to gather information on participant's meal details, including meal type, time consumed, description of food items, and other relevant factors.
## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your participant name in the `Participant Name` field.
2.  Enter the date of meal submission in the `Today - Date of Entry` field.
3.  Select the type of meal being submitted (e.g., `Breakfast`, `Lunch`, `Dinner`) in the `Which meal are you submitting?` field.
4.  Record the time the meal was consumed in the `Time Consumed` field.
5.  List all food items and their quantities consumed in the `Description of Food Items` field.
6.  If applicable, list any beverages consumed in the `Beverages Consumed` field.
7.  If applicable, provide additional context about the meal in the `Additional Context` field.
8.  Upload a photo of the meal to be submitted, or provide the filename if uploaded separately.

## Field-by-Field Explanation
### 1. **Participant Name** (`user_name`, `text`, required)
Enter your name as it appears on your participant identification card.

### 2. **Today - Date of Entry** (`current_date`, `date`, required)
Enter the date on which you are submitting the meal photo.

### 3. **Which Meal are you submitting?** (`meal_type`, `select_one`, required)
Select the type of meal you are submitting (e.g., `Breakfast`, `Lunch`, `Dinner`)

### 4. **Time Consumed** (`meal_time`, `time`, required)
Enter the time at which you consumed the meal.

### 5. **Description of Food Items** (`food_description`, `text`, required)
List all food items and their quantities consumed.

### 6. **Beverages Consumed** (`beverages_consumed`, `text`, optional)
List any beverages consumed during the meal, if applicable.

### 7. **Photo Submission Instructions** (`photo_placeholder`, `note`, optional)
Please ensure the photo is clear and taken from a top-down angle for accurate portion estimation.

### 8. **Image File Name or Reference** (`photo_link_or_ref`, `text`, required)
If uploading separately, provide the filename here.

### 9. **Perceived Portion Size** (`portion_size_subjective`, `select_one`, required)
Select the perceived size of the portion you consumed (`Small`, `Medium`, `Large`, `Extra Large`).

### 10. **Hunger Level Before Meal** (`hunger_rating_pre`, `number`, required)
Record your hunger level before eating from 1 (Not hungry) to 5 (Starving).

### 11. **Fullness Level After Meal** (`fullness_rating_post`, `number`, required)
Record your fullness level after eating from 1 (Still hungry) to 5 (Overstuffed).

### 12. **Where did you eat this meal?** (`locations_of_consumption`, `text`, optional)
Enter the location where you consumed the meal.

### 13. **Additional Context** (`additional_meal_context`, `text`, optional)
Provide any additional context about the meal (e.g., eating while distracted, social dining).
