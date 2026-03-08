<thinking>Form purpose: This form is designed to help users calculate their Body Mass Index (BMI) and body fat percentage based on their height, weight, and other personal characteristics. It collects user-provided information such as name, email address, gender, age, height, weight, and other measurements to estimate their body fat percentage. The form also asks for the user's fitness goal and activity level to provide a more accurate calculation. The calculated results will be displayed on the screen, and users can choose to receive the results via email as well. This form is intended for personal use and is not for medical purposes. If you have any health concerns, please consult a healthcare professional.</thinking>

# Calculate Body Mass Index And Body Fat Percentage - Help Guide
## Purpose
This form is designed to calculate your Body Mass Index (BMI) and body fat percentage based on your height, weight, and other personal characteristics. It is intended for personal use and is not for medical purposes. If you have any health concerns, please consult a healthcare professional.

## How To Complete This Form

1. Fill in your full name to identify yourself.
2. Enter your email address if you want to receive the results via email.
3. Choose your gender to ensure accurate calculation.
4. Enter your age in years.
5. Choose the unit of measurement for your height.
6. Enter your height (feet and inches or centimeters).
7. Choose the unit of measurement for your weight.
8. Enter your current weight.
9. (Optional) Enter your waist circumference and the unit of measurement for it.
10. (Optional) Enter your neck circumference and the unit of measurement for it.
11. (Optional) Enter your hip circumference and the unit of measurement for it.
12. Choose your activity level to ensure accurate calculation.
13. Select your fitness goal to provide more accurate calculation.
14. Choose how you want to receive the results.
15. Add any additional notes if needed.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, required): Please enter your full name for identification purposes.
* **Email Address** (`email_address`, email, optional): If you want to receive the results via email, enter your email address here.
* **Calculation Date** (`calculation_date`, date, required): This field will display the date when the calculation is performed.
* **Gender** (`gender`, select_one, required): Choose your gender to ensure accurate calculation.
* **Age** (`age`, number, required): Please enter your age in years.
* **Height Unit** (`height_unit`, select_one, required): Choose the unit of measurement for your height (Feet and inches, Centimeters, Meters).
* **Height in Feet/Inches** (`height_feet`, number, optional): Enter your height in feet and inches. If you chose centimeters as the unit, this field will be ignored.
* **Height in Centimeters** (`height_cm`, number, optional): Enter your height in centimeters. If you chose feet and inches as the unit, this field will be ignored.
* **Weight Unit** (`weight_unit`, select_one, required): Choose the unit of measurement for your weight (Pounds, Kilograms).
* **Weight** (`weight`, number, required): Please enter your current weight.
* **BMI Calculation** (`bmi_calculation_note`, note, optional): This is a note about how your BMI will be calculated.
* **Waist Circumference** (`waist_circumference`, number, optional): Enter your waist circumference and the unit of measurement for it.
* **Waist Measurement Unit** (`waist_unit`, select_one, optional): Choose the unit of measurement for your waist.
* **Neck Circumference** (`neck_circumference`, number, optional): Enter your neck circumference and the unit of measurement for it.
* **Hip Circumference** (`hip_circumference`, number, optional): Enter your hip circumference and the unit of measurement for it.
* **Activity Level** (`activity_level`, select_one, optional): Choose your activity level to ensure accurate calculation.
* **Fitness Goal** (`fitness_goal`, select_one, optional): Select your fitness goal to provide more accurate calculation.
* **Body Fat Calculation** (`body_fat_calculation_note`, note, optional): This is a note about how your body fat percentage will be estimated.
* **How to Receive Results** (`results_delivery`, select_one, optional): Choose how you want to receive the results (Display on screen only, Email results, Both).
* **Additional Notes** (`additional_notes`, text, optional): Add any additional information if needed.
