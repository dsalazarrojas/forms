<thinking>

The "new_member_fitness_assessment_form" is designed to collect information from new members about their health and fitness goals. This form is used to gather relevant data for our team to understand the member's medical history, fitness goals, and other essential details.

Before proceeding, please note that this form is only required to be filled out by new members. It is intended to provide our team with the necessary information to tailor our services and advice to each member's specific needs.

Please make sure to fill out this form carefully and accurately, as it will help us provide you with the best possible experience.

</thinking>

# new_member_fitness_assessment_form - Help Guide
## Purpose
The purpose of this form is to collect information from new members about their health and fitness goals.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill out the new_member_information page with your details.
2. Provide your contact information, including phone number and address.
3. Specify your emergency contact information.
4. Select the medical history and conditions that apply to you.
5. Indicate if you have any allergies or medical conditions.
6. Choose your fitness goals and exercise history.
7. Answer questions about your medication usage, physical activity, and smoking history.
8. Provide information about your medical provider and insurance.
9. Answer questions about your surgery history.
10. Submit the form to complete the assessment.

## Field-by-Field Explanation

* **New Member Information** (`new_member_information`, text, required/optional): Please fill out this field with your details, including your first and last name.
* **First Name** (`first_name`, text, required/optional): Enter your first name.
* **Last Name** (`last_name`, text, required/optional): Enter your last name.
* **Email** (`email`, email, required/optional): Enter your email address.
* **Date of Birth** (`date_of_birth`, date, required/optional): Enter your date of birth.
* **Weight** (`weight`, number, required/optional): Enter your weight.
* **Height** (`height`, number, required/optional): Enter your height.
* **Contact Information** (`contact_information`, select_multiple, required/true): Choose one or more of the following options:
	+ First Name and Last Name
	+ Phone
	+ Address
* **Emergency Contact** (`emergency_contact`, select_multiple, required/true): Choose one or more of the following options:
	+ First Name and Last Name
	+ Phone
	+ Address
* **Medical History** (`medical_history`, select_one, required/true): Choose one of the following medical history options:
	+ High Blood Pressure
	+ High Cholesterol
	+ Diabetes
	+ Heart Problems
	+ Other
* **Allergies** (`allergies`, select_multiple, required/false): Choose one or more of the following allergy options:
	+ Food
	+ Medications
	+ Environmental
* **Medical Conditions** (`medical_conditions`, select_multiple, required/false): Choose one or more of the following medical condition options:
	+ High Blood Pressure
	+ High Cholesterol
	+ Diabetes
	+ Heart Problems
	+ Other
* **Fitness Goals** (`fitness_goals`, text, required/false): Enter your fitness goals.
* **Exercise History** (`exercise_history`, text, required/false): Describe your exercise history.
* **Medication Usage** (`medication_usage`, select_multiple, required/false): Choose one or more of the following medication usage options:
	+ True
	+ False
* **Physical Activity** (`physical_activity`, select_multiple, required/false): Choose one or more of the following physical activity options:
	+ True
	+ False
* **Smoking History** (`smoking_history`, select_multiple, required/false): Choose one or more of the following smoking history options:
	+ True
	+ False
* **Medical Provider** (`medical_provider`, text, required/false): Enter your medical provider's name.
* **Doctor's Name** (`doctor_name`, text, required/false): Enter your doctor's name.
* **Medical Insurance** (`medical_insurance`, text, required/false): Enter your medical insurance information.
* **Surgery History** (`surgery_history`, select_multiple, required/false): Choose one or more of the following surgery history options:
	+ True
	+ False
