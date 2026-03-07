<thinking>
We need to create a user-facing help guide for the "Fitness Assessment Form" that covers its purpose, how to complete it, and a field-by-field explanation. This form appears to be related to gathering information about an individual's physical and mental well-being. The purpose of this form is likely to assess the fitness level and overall health status of users, possibly for medical or athletic purposes. To complete the form, users will need to provide various types of information, including general information, physical activity levels, and medical history. We should aim to make the explanations clear and concise, avoiding duplication and ambiguity.
</thinking>

# Fitness Assessment Form - Help Guide

## Purpose
The Fitness Assessment Form is designed to gather information about an individual's physical and mental well-being, aiming to assess their fitness level and overall health status.

## How To Complete This Form

1.  Please fill out the form with accurate and honest information about yourself.
2.  Make sure to provide all required information, marked with an asterisk (\*).
3.  If a question or field has options, select the one that best describes your situation.
4.  If a field is a note, provide a brief explanation or description.

## Field-by-Field Explanation

* **General Information** (`general_info`, text, not required): This field is for providing any general information about yourself that is relevant to your fitness status. Please provide any details you think are necessary.
* **Physical Activity** (`physical_activity`, select_one, not required): Select the level of physical activity you regularly engage in:
	+ Sedentary: You do not engage in regular physical activity.
	+ Lightly active: You engage in light physical activity, such as walking or light exercise.
	+ Very active: You engage in regular physical activity, such as sports or intense exercise.
	+ Extremely active: You engage in very regular physical activity, such as intense sports or exercise.
* **Height** (`height`, number, not required): Please provide your height in inches or meters.
* **Weight** (`weight`, number, not required): Please provide your weight in pounds or kilograms.
* **Blood Pressure** (`blood_pressure`, select_one, not required): Select your current blood pressure level:
	+ Low: Your blood pressure is lower than average.
	+ Normal: Your blood pressure is average.
	+ High: Your blood pressure is higher than average.
* **Medications** (`medication`, note, not required): If you take any medications, please list and describe them briefly.
* **Allergies** (`allergies`, note, not required): If you have any allergies, please list and describe them briefly.
* **Medical Condition** (`medical_condition`, note, not required): If you have any medical conditions, please describe them briefly.
* **Emergency Contact** (`emergency_contact`, note, not required): Please provide the name and contact information of an emergency contact person.
* **Medical History** (`medical_history`, note, not required): If you have any medical history, please describe it briefly.
* **Family History** (`family_history`, note, not required): If you have any family medical history, please describe it briefly.
* **Social History** (`social_history`, note, not required): If you have any relevant social history, please describe it briefly.
* **Mental Health** (`mental_health`, note, not required): If you have any mental health concerns, please describe them briefly.
* **Exercise Frequency** (`exercise_frequency`, select_multiple, not required): Select the frequency of your regular exercise:
	+ Daily
	+ Several times a week
	+ Rarely
* **Sleep Pattern** (`sleep_pattern`, select_multiple, not required): Select your typical sleep pattern:
	+ 7-8 hours
	+ 6-7 hours
	+ Less than 6 hours
	+ More than 8 hours
