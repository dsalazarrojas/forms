# Boxing League Registration Form - Help Guide
## Purpose
This form collects personal and boxing-related information from athletes seeking to register for a boxing league. The form aims to classify participants according to their weight class and experience level to ensure a fair and safe competition environment.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your personal information, including your first and last names, date of birth, email address, and phone number.
2. Select your gender for weight class classification.
3. Provide information about your boxing experience, including your level of experience and the number of years you have been actively training.
4. Specify your current weight and preferred weight class.
5. Choose your primary fighting style.
6. Confirm your medical clearance status and report any recent injuries or health concerns.
7. If applicable, provide your gym or club affiliation and the name of your primary coach.
8. Finally, read and agree to the terms and waiver of the boxing league.

## Field-by-Field Explanation
### First Name (Required)
* **First Name** (`first_name`, `text`, required): Enter your legal first name.
### Last Name (Required)
* **Last Name** (`last_name`, `text`, required): Enter your legal last name.
### Date of Birth
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in MM/DD/YYYY format.
### Gender
* **Gender** (`gender`, `select_one`, required): Select Male, Female, Non-binary, or Other for weight class classification.
### Email Address (Required)
* **Email Address** (`email`, `email`, required): Enter your primary contact email address.
### Phone Number (Required)
* **Phone Number** (`phone`, `text`, required): Enter your contact phone number.
### Boxing Experience Level (Required)
* **Boxing Experience Level** (`experience_level`, `select_one`, required): Choose Beginner, Intermediate, Advanced, Professional, or Amateur champion based on your level of experience.
### Years of Boxing Experience
* **Years of Boxing Experience** (`years_experience`, `number`, required): Enter the total years you have been actively training for boxing.
### Current Weight
* **Current Weight** (`current_weight`, `number`, required): Enter your current weight in pounds.
### Preferred Weight Class (Required)
* **Preferred Weight Class** (`weight_class`, `select_one`, required): Select an appropriate weight division based on your weight class.
### Fighting Style
* **Fighting Style** (`fighting_style`, `select_one`, optional): Choose a primary fighting technique, such as Aggressive, Technical, Defensive, Counter-puncher, or Balanced.
### Medical Clearance for Competition
* **Medical Clearance for Competition** (`medical_clearance`, `select_one`, required): Confirm if you have obtained medical clearance for competition, or if you have not obtained clearance or if it is pending approval.
### Recent Injuries or Health Concerns
* **Recent Injuries or Health Concerns** (`injuries_list`, `text`, optional): Report any recent injuries or health concerns that may affect your competition.
### Home Gym or Boxing Club
* **Home Gym or Boxing Club** (`gym_name`, `text`, optional): If applicable, enter the name of your current training location.
### Primary Coach Name
* **Primary Coach Name** (`coach_name`, `text`, optional): Enter the name of your primary coach.
### Agreement and Waiver
* **Agreement and Waiver** (`waiver_acceptance`, `select_one`, required): Read and agree to the terms and waiver of the boxing league, acknowledging the risks and rules involved.
