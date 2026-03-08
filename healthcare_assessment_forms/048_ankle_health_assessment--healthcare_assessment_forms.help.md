# Ankle Health Assessment - Help Guide
## Purpose
The Ankle Health Assessment is a form designed to gather information about your ankle health. It helps us understand your symptoms, medical history, and treatment goals to provide personalized advice and care.

## How To Complete This Form
To complete this form, follow these steps:
1. Provide your full name in the field marked "Full Name".
2. Enter your date of birth in the format `MM/DD/YYYY` in the "Date of Birth" field.
3. Enter your contact email address in the "Email Address" field.
4. Enter your contact phone number in the "Phone Number" field.
5. Select the affected ankle by choosing one of the options in the "Which Ankle Is Affected" field.
6. Choose how long you have had symptoms in the "How Long Have You Had Symptoms" field.
7. Report your current pain level on a 0-10 scale in the "Current Pain Level" field.
8. Report your worst pain level in the past week on a 0-10 scale in the "Worst Pain Level in Past Week" field.
9. Specify where you feel the pain in the "Where Is the Pain Located" field (select all that apply).
10. Choose the types of pain you experience in the "What Type of Pain Do You Experience" field (select all that apply).
11. Report whether you have swelling, and if so, specify when it's worst in the "Do You Have Swelling" field.
12. Report whether you experience stiffness, and if so, specify when it's present in the "Do You Experience Stiffness" field.
13. Report whether your ankle feels unstable, and if so, specify how often in the "Does Your Ankle Feel Unstable" field.
14. Report how symptoms affect your daily activities in the "How Do Symptoms Affect Daily Activities" field.
15. Report your walking ability in the "Walking Ability" field.
16. Report your stair climbing ability in the "Stair Climbing Ability" field.
17. Report any exercise or sports limitations in the "Exercise or Sports Limitations" field.
18. Specify what makes your symptoms worse in the "What Makes Symptoms Worse" field (select all that apply).
19. Specify what makes your symptoms better in the "What Makes Symptoms Better" field (select all that apply).
20. Report any previous ankle injuries, and provide details if necessary in the "Previous Ankle Injuries" field.
21. List any previous treatments in the "Previous Treatments" field (select all that apply).
22. List any current medications in the "Current Medications" field.
23. Report any relevant medical conditions in the "Relevant Medical Conditions" field.
24. Report your typical footwear in the "Typical Footwear" field.
25. Report your general activity level in the "General Activity Level" field.
26. Specify what your treatment goals are in the "What Are Your Treatment Goals" field (select all that apply).
27. Add any additional comments or information in the "Additional Comments" field.

## Field-by-Field Explanation

* **Full Name** (`patient_name`, text, required): Enter your full name as it appears on your identification.
* **Date of Birth** (`date_of_birth`, date, required): Enter your birth date in the format `MM/DD/YYYY`.
* **Email Address** (`email`, email, required): Enter your contact email address.
* **Phone Number** (`phone`, text, required): Enter your contact phone number.
* **Which Ankle Is Affected** (`affected_ankle`, select_one, required): Select the affected ankle, either left, right, or both.
* **How Long Have You Had Symptoms** (`symptom_duration`, select_one, required): Choose how long you have had symptoms, from less than 1 week to over 1 year.
* **Current Pain Level** (`pain_level_current`, select_one, required): Report your current pain level on a 0-10 scale.
* **Worst Pain Level in Past Week** (`pain_level_worst`, select_one, required): Report your worst pain level in the past week on a 0-10 scale.
* **Where Is the Pain Located** (`pain_location`, select_multiple, required): Specify where you feel the pain in the options provided (select all that apply).
* **What Type of Pain Do You Experience** (`pain_type`, select_multiple, required): Specify the types of pain you experience in the options provided (select all that apply).
* **Do You Have Swelling** (`swelling_present`, select_one, required): Report whether you have swelling, and if so, specify when it's worst.
* **When Is Swelling Worst** (`swelling_timing`, select_one, required): Report when swelling is worst, if you have swelling.
* **Do You Experience Stiffness** (`stiffness`, select_one, required): Report whether you experience stiffness, and if so, specify when it's present.
* **Does Your Ankle Feel Unstable** (`instability`, select_one, required): Report whether your ankle feels unstable, and if so, specify how often.
* **How Do Symptoms Affect Daily Activities** (`activity_impact`, select_one, required): Report how symptoms affect your daily activities.
* **Walking Ability** (`walking_ability`, select_one, required): Report your walking ability in the options provided.
* **Stair Climbing Ability** (`stairs_ability`, select_one, required): Report your stair climbing ability in the options provided.
* **Exercise or Sports Limitations** (`exercise_limitation`, select_one, required): Report any exercise or sports limitations.
* **What Makes Symptoms Worse** (`aggravating_factors`, select_multiple, required): Specify what makes your symptoms worse in the options provided (select all that apply).
* **What Makes Symptoms Better** (`relieving_factors`, select_multiple, required): Specify what makes your symptoms better in the options provided (select all that apply).
* **Previous Ankle Injuries** (`previous_injuries`, select_one, required): Report any previous ankle injuries, and provide details if necessary.
* **Injury Details** (`injury_details`, text, required): Provide details about previous injuries.
* **Previous Treatments** (`previous_treatment`, select_multiple, required): List any previous treatments you have received (select all that apply).
* **Current Medications** (`current_medications`, text, required): List any current medications.
* **Relevant Medical Conditions** (`medical_conditions`, text, required): Report any relevant medical conditions you have.
* **Typical Footwear** (`footwear_type`, select_one, required): Report your typical footwear.
* **General Activity Level** (`activity_level`, select_one, required): Report your general activity level in the options provided.
* **What Are Your Treatment Goals** (`goals`, select_multiple, required): Specify your treatment goals in the options provided (select all that apply).
* **Additional Comments** (`additional_comments`, text, required): Add any additional comments or information.

## Tips
* Please answer all questions to the best of your ability.
* If you are unsure about any field, please consult with your healthcare provider.
* Provide as much detail as possible when describing previous injuries and treatments.
* If you have any other information you think is relevant, please include it in the "Additional Comments" field.
