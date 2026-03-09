# Community Health Behavior Assessment Form - Help Guide
## Purpose
This form is designed to collect information about your demographic and health habits to help us better understand your overall health behavior.

## How To Complete This Form
To complete this form, simply fill out each section as thoroughly and accurately as possible. If you are unsure about a particular question, try your best to answer based on your memory or estimates. Do not hesitate to ask for help if you need clarification on any question.

## Field-by-Field Explanation
* **Name (Optional)** (`respondent_name`, `text`, Optional): This is the field where you can optionally provide your name if you wish to share it.
* **Date of Birth** (`date_of_birth`, `date`, True): Please enter your date of birth in MM/DD/YYYY format.
* **Gender** (`gender`, `select_one`, True): Please select your gender identity from the given options.
* **ZIP Code** (`zip_code`, `text`, True): Enter your ZIP code to help us locate your area.
* **Height** (`height`, `text`, False): If you know your height, please enter it in feet and inches.
* **Weight** (`weight`, `number`, False): If you know your weight, please enter it in pounds.
* **Smoking Status** (`smoking_status`, `select_one`, True): Please select your smoking status from the given options.
* **Cigarettes Per Day** (`cigarettes_per_day`, `number`, False): If you smoke, please enter the number of cigarettes you smoke per day.
* **Alcohol Consumption** (`alcohol_consumption`, `select_one`, True): Please select how often you consume alcohol from the given options.
* **Drinks Per Week** (`drinks_per_week`, `number`, False): If you consume alcohol, please enter the average number of drinks you consume per week.
* **Exercise Frequency** (`exercise_frequency`, `select_one`, True): Please select how often you exercise from the given options.
* **Types of Exercise** (`exercise_type`, `select_multiple`, False): If you exercise, please select the types of activities you do.
* **Daily Fruit and Vegetable Servings** (`fruit_vegetable_servings`, `number`, True): Please enter the average number of servings of fruits and vegetables you consume per day.
* **Fast Food Consumption** (`fast_food_frequency`, `select_one`, True): Please select how often you consume fast food from the given options.
* **Average Hours of Sleep** (`sleep_hours`, `number`, True): Please enter the average number of hours you sleep per night.
* **Sleep Quality** (`sleep_quality`, `select_one`, True): Please rate your sleep quality from the given options.
* **Stress Level** (`stress_level`, `select_one`, True): Please rate your current stress level from the given options.
* **Stress Management Techniques** (`stress_management`, `select_multiple`, False): If you manage stress, please select the techniques you use.
* **Last Preventive Care Visit** (`preventive_care`, `select_one`, True): Please select when you last visited a preventive care provider.
* **Health Goals** (`health_goals`, `text`, False): This is an optional field where you can describe your health goals.
* **Barriers to Better Health** (`health_barriers`, `text`, False): This is an optional field where you can describe barriers to better health.
