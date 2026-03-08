# Weight Management Check In Form - Help Guide
## Purpose
This form is designed to help you track your progress and habits related to weight management. Please fill out the form with accurate and consistent information to get the best results.

## How To Complete This Form
1. Select the date for the week you are checking in on. 
2. Enter your current weight. 
3. Choose how often you exercise. 
4. Choose your current exercise level. 
5. Enter how many hours of sleep you get in a day. 
6. Enter your daily water intake in ounces. 
7. Check if you are taking any medications. 
8. Check if you are taking any supplements. 
9. Check if you are following a specific food or diet. 
10. Add any notes about your progress or challenges. 
11. Enter your email address if you want to receive any follow-up information. 
12. Enter your phone number if you want to receive any follow-up calls.

## Field-by-Field Explanation

* **Weekly Progress** (`week_progress`, `date`, required: false): Choose the date of the week you are checking in on.
* **Weight** (`weight`, `number`, required: false): Enter your current weight.
* **Exercise Frequency** (`exercise_frequency`, `select_one`, required: false): Choose how often you exercise, options are Daily, Weekly, or Monthly.
* **Exercise Level** (`exercise_level`, `select_one`, required: false): Choose your current exercise level, options are Beginner, Intermediate, or Advanced.
* **Sleep** (`sleep`, `number`, required: false): Enter how many hours of sleep you get in a day.
* **Water Intake** (`water_intake`, `number`, required: false): Enter your daily water intake in ounces.
* **Medications** (`medication`, `select_multiple`, required: false): Check if you are taking any medications. Options are None, True.
* **Supplements** (`supplements`, `select_multiple`, required: false): Check if you are taking any supplements. Options are None, True.
* **Food/Diet** (`food_diet`, `select_multiple`, required: false): Check if you are following a specific food or diet. Options are None, True.
* **Note** (`note`, `note`, required: false): Add any notes about your progress or challenges.
* **Email** (`email`, `email`, required: false): Enter your email address if you want to receive any follow-up information.
* **Phone** (`phone`, `text`, required: false): Enter your phone number if you want to receive any follow-up calls.
