# fitness_coaching_admission_form - Help Guide
## Purpose
The Fitness Coaching Admission Form is designed to collect information from individuals interested in fitness coaching. This form allows you to express your preferences and needs, enabling our coaches to tailor their approach to you.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your personal details, including your first name, last name, and email address.
2. Specify your preferred workout day and time.
3. Provide information about your available days and times.
4. Enter emergency contact details, including the contact's first name, last name, phone number, and email address.
5. Indicate your preferred coach type, language, and location.
6. Share any medical conditions, allergies, or medications you'd like us to be aware of.
7. Add any additional information about yourself that you'd like to share with our coaches.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`last_name`, `text`, required): Enter your last name as it appears on your identification documents.
* **Email** (`email`, `email`, required): Enter a valid email address where you can be reached.
* **Phone** (`phone`, `text`, required): Enter your phone number in the format (XXX) XXX XXXX.
* **Preferred Workout Day** (`preferred_workout_day`, `select_one`, optional): Choose a day of the week you prefer for your workouts.
	+ Monday
	+ Tuesday
	+ Wednesday
	+ Thursday
	+ Friday
	+ Saturday
	+ Sunday
* **Preferred Workout Time** (`preferred_workout_time`, `select_multiple`, optional): Select the times of the day you prefer for your workouts.
	+ Morning
	+ Afternoon
	+ Evening
* **Available Days** (`available_days`, `select_multiple`, optional): Specify the days you are available for workouts.
	+ Monday
	+ Tuesday
	+ Wednesday
	+ Thursday
	+ Friday
	+ Saturday
	+ Sunday
* **Available Times** (`available_times`, `select_multiple`, optional): Choose the times you are available for workouts.
	+ Morning
	+ Afternoon
	+ Evening
* **Emergency Contact First Name** (`emergency_contact_first_name`, `text`, optional): Enter the first name of the emergency contact person.
* **Emergency Contact Last Name** (`emergency_contact_last_name`, `text`, optional): Enter the last name of the emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, optional): Enter the phone number of the emergency contact person.
* **Emergency Contact Email** (`emergency_contact_email`, `text`, optional): Enter the email address of the emergency contact person.
* **Preferred Coach Type** (`preferred_coach_type`, `select_one`, optional): Choose the preferred coach type.
	+ Female
	+ Male
* **Preferred Language** (`preferred_language`, `select_one`, optional): Choose the language you prefer for coaching sessions.
	+ English
	+ Spanish
* **Preferred Location** (`preferred_location`, `select_one`, optional): Choose the location for coaching sessions.
	+ Online
	+ In Person
* **Relationship** (`emergency_contact_relationship`, `text`, optional): Enter a brief description of your relationship with the emergency contact person.
* **Note** (`note`, `note`, optional): Add any additional information you'd like to share with our coaches.
* **Fitness Goal** (`fitness_goal`, `text`, optional): Enter your fitness goal (e.g., weight loss, muscle gain, endurance).
* **Medical Conditions** (`medical_conditions`, `text`, optional): List any medical conditions you'd like our coaches to be aware of.
* **Allergies** (`allergies`, `text`, optional): List any allergies or sensitivities you'd like us to be aware of.
* **Meditations** (`medications`, `text`, optional): List any medications you're currently taking or have taken in the past.
* **Doctor Info** (`doctor_info`, `text`, optional): Enter any relevant medical information from your doctor.
* **Doctor's Name** (`doctor_name`, `text`, optional): Enter your doctor's name.
* **Doctor's Phone** (`doctor_phone`, `text`, optional): Enter your doctor's phone number.
* **Doctor's Email** (`doctor_email`, `text`, optional): Enter your doctor's email address.
