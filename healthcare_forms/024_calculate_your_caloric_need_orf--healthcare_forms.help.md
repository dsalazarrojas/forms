# Calculate Your Caloric Need Orf - Help Guide
## Purpose
This form helps you estimate your daily caloric needs based on your personal characteristics, activity level, and fitness goals.

## How To Complete This Form

1. Fill out the personal information section:
    * Enter your **Name** in the text field.
    * Select your **Age** from the number field.
    * Choose your **Gender** from the dropdown menu.
2. Provide your body measurements:
    * Enter your **Height** in feet and inches in the number fields.
    * Enter your **Current Weight** in pounds in the number field.
    * Optional: Enter your **Goal Weight** in pounds in the number field.
3. Choose your **Activity Level** from the dropdown menu.
4. Select your **Primary Goal** from the dropdown menu.
5. Select your preferred **Diet Type** from the dropdown menu.
6. Optionally, you can also specify your **Estimated Lean Muscle Mass** and **Body Fat Percentage**.
7. Finally, provide any additional information that may affect your nutrition in the **Additional Information** text field.

## Field-by-Field Explanation

* **Your Name** (`your_name`, text, required): Enter your full name to identify yourself.
* **Age** (`age`, number, required): Enter your age to determine your basal metabolic rate (BMR).
* **Gender** (`gender`, select_one, required): Select your gender to determine your BMR and activity multiplier.
* **Height - Feet** (`height_feet`, number, required): Enter your height in feet to determine your BMR.
* **Height - Inches** (`height_inches`, number, required): Enter your height in inches to determine your BMR.
* **Current Weight** (`current_weight`, number, required): Enter your current weight in pounds to determine your BMR.
* **Goal Weight** (`goal_weight`, number, optional): Enter your goal weight in pounds to determine your caloric needs.
* **Current Body Fat Percentage** (`body_fat_percent`, number, optional): Enter your current body fat percentage to determine your BMR.
* **Estimated Lean Muscle Mass** (`lean_muscle_mass`, number, optional): Estimate your lean muscle mass to determine your BMR.
* **Activity Level** (`activity_level`, select_one, required): Select your activity level to determine your activity multiplier.
* **Weekly Exercise Sessions** (`exercise_frequency`, number, optional): Enter the number of exercise sessions per week to determine your activity multiplier.
* **Primary Goal** (`primary_goal`, select_one, required): Select your primary goal to determine your caloric needs.
* **Diet Type** (`diet_type`, select_one, optional): Select your preferred diet type to determine your macronutrient ratios.
* **Preferred Diet Type** (`diet_type`, select_one, optional): Select your preferred diet type to determine your macronutrient ratios.
* **Additional Information** (`additional_notes`, text, optional): Provide any additional information that may affect your nutrition.
