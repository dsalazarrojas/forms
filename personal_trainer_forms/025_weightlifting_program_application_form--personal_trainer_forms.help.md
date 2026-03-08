# Weightlifting Program Application Form - Help Guide
## Purpose
This form is designed for individuals interested in joining a weightlifting program. It is used to gather information about your fitness level, medical history, and other relevant details to ensure your safety and suitability for the program.

## How To Complete This Form

1.  Fill out the form with your personal details, including your name, email, and other information.
2.  Provide information about your fitness level, including your weight classifications and reps completed.
3.  Disclose any medical conditions, including heart conditions, joint or back pain, and other conditions.
4.  Provide emergency contact information, including a contact person and their phone number.
5.  Select your preferred coach and date and time for your program.

## Field-by-Field Explanation

* **User Details**: Enter your name, email, and other personal details to get started with the program.
	+ **User Details** (`user_details`, text, required): Enter your name, email, and other personal details.
* **Program Details**: Describe your fitness goals and preferences for the program.
	+ **Program Details** (`program_details`, text, required): Describe your fitness goals and preferences for the program.
* **Emergency Details**: Provide emergency contact information.
	+ **Emergency Details** (`emergency_details`, text, required): Provide emergency contact information.
* **Medical Details**: Disclose any medical conditions.
	+ **Medical Details** (`medical_details`, text, required): Disclose any medical conditions.
* **Medical Condition**: Select your medical condition.
	+ **Medical Condition** (`medical_condition_select`, select_one, required): Select your medical condition.
* **Weight Classifications**: Select your weight classification.
	+ **Weight Classifications** (`weight_classifications`, select_multiple, required): Select your weight classification.
* **Coach Preferred**: Select your preferred coach.
	+ **Coach Preferred** (`coach_preferred`, select_one, required): Select your preferred coach.
* **Emergency Contact Person**: Enter the name and phone number of your emergency contact person.
	+ **Emergency Contact Person** (`emergency_contact_person`, text, optional): Enter the name and phone number of your emergency contact person.
* **Emergency Contact Phone**: Enter the phone number of your emergency contact person.
	+ **Emergency Contact Phone** (`emergency_contact_phone`, text, optional): Enter the phone number of your emergency contact person.
* **Medical Insurance**: Enter your medical insurance information.
	+ **Medical Insurance** (`medical_insurance`, text, optional): Enter your medical insurance information.
* **Doctor**: Enter the name of your doctor.
	+ **Doctor** (`doctor`, text, optional): Enter the name of your doctor.
* **Doctor's Phone**: Enter the phone number of your doctor.
	+ **Doctor's Phone** (`doctor_phone`, text, optional): Enter the phone number of your doctor.
* **Doctor Name**: Enter the name of your doctor.
	+ **Doctor Name** (`doctor_name`, text, optional): Enter the name of your doctor.
* **Date**: Select a date for your program.
	+ **Date** (`date`, date, required): Select a date for your program.
* **Time**: Select a time for your program.
	+ **Time** (`time`, time, required): Select a time for your program.
* **Medical Condition Select 2**: Select a medical condition.
	+ **Medical Condition Select 2** (`medical_condition_select_2`, select_one, required): Select a medical condition.
* **Coach Preferred 2**: Select your preferred coach.
	+ **Coach Preferred 2** (`coach_preferred_2`, select_one, required): Select your preferred coach.
* **Coach**: Enter the name of your coach.
	+ **Coach** (`coach`, text, optional): Enter the name of your coach.
* **Coach's Phone**: Enter the phone number of your coach.
	+ **Coach's Phone** (`coach_phone`, text, optional): Enter the phone number of your coach.
* **Note**: Enter any additional notes about your program.
	+ **Note** (`note_2`, text, optional): Enter any additional notes about your program.
* **Weight**: Enter your weight.
	+ **Weight** (`weight`, number, required): Enter your weight.
* **Reps**: Enter the number of reps you can complete.
	+ **Reps** (`rep`, number, required): Enter the number of reps you can complete.

## Tips

* Make sure to fill out all required fields.
* Be honest when disclosing medical conditions.
* Select a date and time that works for you.
