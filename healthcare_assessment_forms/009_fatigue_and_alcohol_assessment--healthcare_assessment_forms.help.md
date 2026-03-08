# Fatigue and Alcohol Assessment - Help Guide
## Purpose
The Fatigue and Alcohol Assessment form is designed to collect data on a patient's fatigue levels and alcohol consumption habits. This information is crucial for healthcare professionals to make informed decisions about patient care.

## How To Complete This Form
To complete this form, please follow these steps:
1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Provide your email address in the "Email" field.
4. Enter your phone number in the "Phone Number" field.
5. Enter your date of birth in the "Date of Birth" field in the format MM/DD/YYYY.
6. Select your current fatigue level on the "Fatigue Scale" (0-25).
7. Answer "True" or "False" to the question "Have you consumed alcohol today?"
8. If you answered "True" to the previous question, enter the number of drinks consumed in the "If yes, how many drinks?" field.
9. Enter the time you finished your shift in the "Shift End Time" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, Text, Required): Enter your first name as it is written on your identification documents.
* **Last Name** (`last_name`, Text, Required): Enter your last name as it is written on your identification documents.
* **Email** (`email`, Email, Required): Enter your valid email address.
* **Phone Number** (`phone_number`, Text, Required): Enter your contact phone number.
* **Date of Birth** (`date_of_birth`, Date, Required): Enter your date of birth in the format MM/DD/YYYY.
* **Fatigue Scale** (`fatigue_scale`, Select One, Required): Select your current fatigue level on the scale of 0-25.
* **Have you consumed alcohol today?** (`have_alcohol_today`, Select One, Required): Answer "True" if you have consumed alcohol today, "False" otherwise.
* **If yes, how many drinks?** (`alcohol_consumed`, Number, Required if answered "True" to the previous question): Enter the number of drinks consumed if you answered "True" to the previous question.
* **Shift End Time** (`shift_end_time`, Time, Required): Enter the time you finished your shift in the format HH:MM.
