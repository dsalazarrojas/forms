<thinking>
This form is designed to assess an individual's overall health status, providing a general evaluation of their physical and mental health. This is not a medical diagnosis and is meant to be used as a self-assessment tool. Please answer the questions honestly to receive an accurate evaluation. This form is divided into sections, each addressing a specific aspect of health. You will be asked about basic demographic information, lifestyle habits, medical history, mental health, and wellness practices.
</thinking>

# Am I Healthy Quiz - Help Guide

## Purpose
This form is meant to be used as a general health assessment tool for individuals seeking a self-evaluation of their overall health status. Please answer the questions with honesty and accuracy.

## How To Complete This Form
To complete this form, simply follow the instructions for each section. For numerical questions, please enter your values. For select-type questions, choose your answer from the available options. Be sure to review the instructions for each field for specific guidance.

## Field-by-Field Explanation
* **-- Am I Healthy Quiz --** (1, `section_introduction`, `note`, `required: false`): This section provides an introduction to the quiz and its purpose.
* **-- Basic Information --** (2, `section_demographics`, `note`, `required: false`): This section asks for basic demographic information. Please provide your age, gender, and other relevant details.
* **Age** (3, `age`, `number`, `required: true`): Please enter your age in years.
* **Gender** (4, `gender`, `select_one`, `required: false`): Choose your gender from the provided options.
* **Height** (5, `height`, `number`, `required: true`): Please enter your height in inches.
* **Weight** (6, `weight`, `number`, `required: true`): Please enter your weight in pounds.
* **-- Lifestyle Habits --** (7, `section_lifestyle`, `note`, `required: false`): This section inquires about your lifestyle habits, including exercise frequency and types.
* **How often do you exercise** (8, `exercise_frequency`, `select_one`, `required: true`): Choose how often you exercise from the provided options.
* **Types of Exercise** (9, `exercise_type`, `select_multiple`, `required: false`): Select all the types of exercise you participate in.
* **How many hours of sleep do you get per night** (10, `sleep_hours`, `number`, `required: true`): Please enter the average number of hours you sleep per night.
* **How would you rate your sleep quality** (11, `sleep_quality`, `select_one`, `required: true`): Choose how you rate your sleep quality from the provided options.
* **How many glasses of water do you drink daily** (12, `water_intake`, `number`, `required: true`): Please enter the number of glasses of water you drink per day.
* **-- Nutrition Habits --** (13, `section_nutrition`, `note`, `required: false`): This section asks about your nutrition habits, including fruit and vegetable servings.
* **How many servings of fruit do you eat daily** (14, `fruit_servings`, `number`, `required: true`): Please enter the number of servings of fruit you eat per day.
* **How many servings of vegetables do you eat daily** (15, `vegetable_servings`, `number`, `required: true`): Please enter the number of servings of vegetables you eat per day.
* **How often do you eat fast food** (16, `fast_food_frequency`, `select_one`, `required: true`): Choose how often you eat fast food from the provided options.
* **How often do you eat processed foods** (17, `processed_food_consumption`, `select_one`, `required: true`): Choose how often you eat processed foods from the provided options.
* **-- Substance Use --** (18, `section_substances`, `note`, `required: false`): This section asks about your substance use habits.
* **Smoking Status** (19, `smoking_status`, `select_one`, `required: true`): Choose your smoking status from the provided options.
* **Cigarettes per Day** (20, `cigarettes_per_day`, `number`, `required: false`): Please enter the number of cigarettes you smoke per day (if applicable).
* **How often do you consume alcohol** (21, `alcohol_consumption`, `select_one`, `required: true`): Choose how often you consume alcohol from the provided options.
* **Average Number of Drinks per Week** (22, `drinks_per_week`, `number`, `required: false`): Please enter the number of drinks you consume per week (if applicable).
* **Do you use recreational drugs** (23, `recreational_drugs`, `select_one`, `required: true`): Choose whether you use recreational drugs from the provided options.
* **-- Mental and Emotional Health --** (24, `section_mental_health`, `note`, `required: false`): This section inquires about your mental and emotional health.
* **How would you rate your current stress level** (25, `stress_level`, `select_one`, `required: true`): Choose how you rate your current stress level from the provided options.
* **How do you manage stress** (26, `stress_management`, `select_multiple`, `required: false`): Select all the ways you manage stress.
* **How would you describe your overall mood** (27, `mood_rating`, `select_one`, `required: true`): Choose how you describe your overall mood from the provided options.
* **How satisfied are you with your social relationships** (28, `social_connections`, `select_one`, `required: true`): Choose how you rate your satisfaction with your social relationships.
* **-- Medical History --** (29, `section_medical`, `note`, `required: false`): This section asks about your medical history, including chronic health conditions and medications.
* **Do you have any chronic health conditions** (30, `chronic_conditions`, `select_multiple`, `required: true`): Select all the chronic health conditions you have.
* **Do you take prescription medications regularly** (31, `medications`, `select_one`, `required: true`): Choose whether you take prescription medications regularly from the provided options.
* **When was your last medical checkup** (32, `last_checkup`, `select_one`, `required: true`): Choose when your last medical checkup was from the provided options.
* **Family History of Major Diseases** (33, `family_history`, `select_multiple`, `required: false`): Select all the major diseases in your family history.
* **-- Current Symptoms --** (34, `section_symptoms`, `note`, `required: false`): This section inquires about your current symptoms.
* **Are you experiencing any current symptoms** (35, `current_symptoms`, `select_multiple`, `required: true`): Select all the symptoms you are experiencing.
* **How would you rate the severity of your symptoms** (36, `symptom_severity`, `select_one`, `required: false`): Choose how you rate the severity of your symptoms.
* **-- Wellness Practices --** (37, `section_wellness`, `note`, `required: false`): This section asks about your wellness practices, including preventive care and health goals.
* **Do you stay up to date with preventive care** (38, `preventive_care`, `select_one`, `required: true`): Choose whether you stay up to date with preventive care from the provided options.
* **Do you have current health or fitness goals** (39, `health_goals`, `select_one`, `required: true`): Choose whether you have current health or fitness goals from the provided options.
* **-- Quiz Completion --** (40, `section_result`, `note`, `required: false`): This section thanks you for completing the quiz.
* **How would you rate your overall health** (41, `overall_health_rating`, `select_one`, `required: true`): Choose how you rate your overall health from the provided options.
* **Are you interested in making health improvements** (42, `health_improvement_interest`, `select_one`, `required: true`): Choose whether you are interested in making health improvements from the provided options.
* **Email Address for Results** (43, `email_results`, `email`, `required: false`): If you'd like to receive personalized recommendations, please enter your email address.
