# Calorie Count Form - Help Guide
## Purpose
The Calorie Count Form is a tool used to track a patient's daily nutrition and physical activity data. This form collects information on calorie intake, macronutrient intake, physical activity, and sleep patterns.
## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's full name in the "Patient Full Name" field.
2. Select the date of the tracking session in the "Tracking Date" field.
3. Record the patient's current weight in pounds or kilograms in the "Current Weight (lbs/kg)" field.
4. In the "Detailed Daily Intake" field, list all meals, snacks, and calorie counts for the day.
5. Enter the estimated total calorie intake for the day in the "Total Estimated Calorie Count" field.
6. If applicable, report the patient's protein, carbohydrate, and fat intakes in grams in the "Protein Intake (Grams)", "Carbohydrate Intake (Grams)", and "Fat Intake (Grams)" fields respectively.
7. Record the patient's water intake in ounces in the "Water Intake (fl oz)" field.
8. If applicable, report the number of servings of vegetables consumed in the "Servings of Vegetables" field.
9. If applicable, report the duration and type of physical activity in the "Physical Activity Duration (Minutes)" and "Type of Exercise" fields.
10. Record the sleep duration in hours in the "Sleep Duration (Hours)" field.
11. Rate the patient's energy level on a scale of 1 (Very Low) to 5 (Peak Energy) in the "Energy Level Today" field.
12. If applicable, enter any practitioner observation notes in the "Practitioner Observation Notes" field.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, text, required): Enter the patient's full name.
* **Tracking Date** (`tracking_date`, date, required): Select the date of the tracking session.
* **Current Weight (lbs/kg)** (`patient_weight`, number, required): Record the patient's current weight in pounds or kilograms.
* **Detailed Daily Intake** (`daily_meals_log`, text, required): List all meals, snacks, and calorie counts for the day.
* **Total Estimated Calorie Count** (`total_calorie_estimate`, number, required): Enter the estimated total calorie intake for the day.
* **Protein Intake (Grams)** (`protein_intake_g`, number, optional): If applicable, report the patient's protein intake in grams.
* **Carbohydrate Intake (Grams)** (`carb_intake_g`, number, optional): If applicable, report the patient's carbohydrate intake in grams.
* **Fat Intake (Grams)** (`fat_intake_g`, number, optional): If applicable, report the patient's fat intake in grams.
* **Water Intake (fl oz)** (`water_intake_fl_oz`, number, required): Record the patient's water intake in ounces.
* **Servings of Vegetables** (`vegetable_servings`, number, optional): If applicable, report the number of servings of vegetables consumed.
* **Physical Activity Duration (Minutes)** (`exercise_duration_mins`, number, optional): If applicable, report the duration of physical activity.
* **Type of Exercise** (`exercise_type`, text, optional): If applicable, report the type of exercise performed.
* **Sleep Duration (Hours)** (`sleep_duration_hrs`, number, required): Record the sleep duration in hours.
* **Energy Level Today** (`mood_energy_rating`, number, required): Rate the patient's energy level on a scale of 1 (Very Low) to 5 (Peak Energy).
* **Practitioner Observation Notes** (`medical_practitioner_notes`, text, optional): If applicable, enter any practitioner observation notes.

## Tips
* Please ensure that all fields are completed accurately and honestly to ensure reliable data collection.
* If unsure about a field or option, please consult with the healthcare professional filling out the form.
* This form is for tracking and monitoring patient progress, not for making dietary recommendations. Consult with a healthcare professional for personalized guidance.
