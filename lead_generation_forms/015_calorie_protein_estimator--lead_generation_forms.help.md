<thinking>
I'm going to design this form's user-facing help guide. To start with, I'll break down the form's purpose: the Calorie Protein Estimator form aims to estimate a user's daily caloric needs and dietary requirements based on their personal details, fitness goals, and activity level. The form asks for basic demographic information, such as name, contact email, age, and biological sex, as well as more specific details like body weight, activity level, and dietary preferences. The form then uses these inputs to guide the user towards a recommended caloric intake and provides a report that can be sent to the user for reference.

Before proceeding, let's confirm that the form's purpose is for users to estimate their daily caloric needs and get a report based on their inputted data.

</thinking>

# Calorie Protein Estimator - Help Guide
## Purpose
This form estimates your daily caloric needs and provides recommendations based on your personal details and fitness goals.

## How To Complete This Form

1. Enter your name to identify yourself in the form.
2. Provide your email address to receive a report with your estimated caloric needs.
3. Select your age to help us understand your physical characteristics.
4. Choose your biological sex to help us tailor our estimations.
5. Enter your current weight to help us understand your body composition.
6. Choose your weight unit (lbs or kg) to ensure accurate calculations.
7. Select your activity level to help us understand your energy expenditure.
8. Choose your primary fitness goal to determine your caloric target.
9. Select your goal intensity to set the desired rate of progress.
10. (Optional) Enter your estimated body fat percentage if you want to use this information for more tailored estimations.
11. Choose your dietary preference for protein intake.
12. (Optional) Select a desired date for achieving your goal, if applicable.
13. Consent to receive a report with your calculated results.
14. Read the disclaimer to understand that this is an estimation and consult a professional before starting any diet or exercise plan.

## Field-by-Field Explanation

* **Your Name** (`user_name_full`, text, required): Enter your full name to help us identify you and tailor the report.
* **Your Email Address** (`contact_email_lead`, email, required): We will send your report to this email address. Double-check for accuracy before submitting the form.
* **Your Age** (`age_years`, number, required): This will help us understand your physical characteristics.
* **Biological Sex** (`biological_gender`, select_one, required): This helps us tailor our estimations. Select "Male" or "Female" based on your sex assigned at birth.
* **Current Body Weight** (`current_body_weight`, number, required): Enter your weight in pounds or kilograms for accurate estimations.
* **Weight Unit** (`weight_unit`, select_one, required): Choose between pounds or kilograms for accurate weight calculations.
* **Activity Level** (`activity_level_est`, select_one, required): Select the one that best describes your daily physical activity level.
* **Primary Fitness Goal** (`fitness_goal`, select_one, required): Choose your main motivation for using this form.
* **Goal Intensity** (`goal_intensity`, select_one, required): Select the desired rate of progress for your goal.
* **Estimated Current Body Fat %** (`current_body_fat_est`, number, optional): If you know your body fat percentage, provide it for more tailored estimations. Use visual guides or scales to ensure accuracy.
* **Dietary Preference - Protein** (`protein_preference`, select_one, optional): Choose your preference for protein intake in your diet.
* **Desired Goal Achievement Date** (`estimated_target_date`, date, optional): If you want to know when you can achieve your goal, enter a specific date.
* **Consent to Receive Fitness Tips** (`lead_consent`, select_one, required): Confirm that you consent to receive additional fitness tips.
* **Disclaimer** (`calculation_disclaimer`, note, required): Read this section carefully, as this is an estimation and consult a professional before starting any new diet or exercise plan.
