# Personal Training Client Intake Form - Help Guide
## Purpose
This form is designed to collect personal and health-related data from clients to create a tailored fitness training plan.

## How To Complete This Form
To complete this form, please fill in the fields as follows:
1. Enter your first name and last name in the "First name" and "Last name" fields.
2. Enter your email address in the "Email" field.
3. Enter your phone number in the "Phone" field.
4. If applicable, enter your date of birth in the "Date of birth" field.
5. Enter your height in the "Height" field.
6. Enter your weight in the "Weight" field.
7. Select your fitness goals in the "Fitness goals" field (Weight loss, Muscle gain, Cardiovascular health).
8. Select your exercise preferences in the "Exercise preferences" field (Running, Cycling, Swimming).
9. If you have any medical conditions, enter them in the "Medical conditions" field.
10. Enter your emergency contact information, including the person's name and their relationship to you, in the "Emergency contact" field.
11. If you have an emergency contact, select their relationship to you (Spouse, Family member, Emergency contact).
12. If you have an insurance provider, select "Yes" or "No" in the "Insurance provider" field.

## Field-by-Field Explanation
* **First name** (`first_name`, text, optional): Please enter your first name.
* **Last name** (`last_name`, text, optional): Please enter your last name.
* **Date of birth** (`date_of_birth`, date, optional): Please enter your date of birth if applicable.
* **Email** (`email`, email, optional): Please enter your email address.
* **Phone** (`phone`, text, optional): Please enter your phone number.
* **Height** (`height`, number, optional): Please enter your height in inches.
* **Weight** (`weight`, number, optional): Please enter your weight in pounds.
* **Fitness goals** (`fitness_goals`, select_one, optional): Please select one of the following:
	+ Weight loss
	+ Muscle gain
	+ Cardiovascular health
* **Exercise preferences** (`exercise_preferences`, select_multiple, optional): Please select all that apply:
	+ Running
	+ Cycling
	+ Swimming
* **Medical conditions** (`medical_conditions`, note, optional): Please enter any medical conditions that may affect your training.
* **Emergency contact** (`emergency_contact`, select_multiple, optional): Please select all that apply:
	+ Spouse
	+ Family member
	+ Emergency contact
* **Emergency contact relationship** (`emergency_contact_relationship`, text, optional): Please enter the relationship of your emergency contact to you.
* **Insurance provider** (`insurance_provider`, select_one, optional): Please select "Yes" or "No" if you have an insurance provider.
