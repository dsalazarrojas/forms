# health_coaching_questionnaire - Help Guide

## Purpose
The purpose of this form is to help health coaches or professionals understand your current health concerns, goals, and habits. It is not a comprehensive medical assessment, but rather a tool for guidance and support.

## How To Complete This Form

To complete this form, please answer each question to the best of your ability. Be as detailed as possible, and do not hesitate to ask if you need clarification on any question.

## Field-by-Field Explanation

* **Introduction**: This is a text field where you can provide any additional information or context about your health concerns, goals, or habits.
* **What are your current health concerns?** (`health_concerns`, `text`, `true`): Please describe your current health concerns, such as physical or mental health issues.
* **What are your health goals?** (`health_goals`, `text`, `true`): Share your health goals, such as losing weight, improving sleep, or increasing physical activity.
* **Do you have any medical history?** (`medical_history`, `select_one`, `false`): Select one of the following options:
	+ High Blood Pressure
	+ Diabetes
	+ High Cholesterol
	+ Other
* **Do you have any allergies?** (`allergies`, `select_multiple`, `false`): Select all that apply:
	+ None
	+ Food
	+ Environmental
* **What medications do you take?** (`medications`, `text`, `false`): List the medications you are currently taking.
* **Are there any dietary restrictions?** (`diet_restrictions`, `select_one`, `false`): Select one of the following options:
	+ True
	+ False
* **How often do you exercise?** (`exercise_frequency`, `select_one`, `true`): Select one of the following options:
	+ Daily
	+ 2-3 times per week
	+ 1-2 times per week
	+ Less than once per week
* **What is the quality of your sleep?** (`sleep_quality`, `select_one`, `true`): Select one of the following options:
	+ Good
	+ Fair
	+ Poor
* **Social support** (`social_support`, `select_multiple`, `false`): Select all that apply:
	+ Family
	+ Friends
	+ Neighbors
* **Are you experiencing stress?** (`stress`, `select_one`, `false`): Select one of the following options:
	+ True
	+ False
* **Mental health** (`mental_health`, `select_multiple`, `false`): Select all that apply:
	+ Anxiety
	+ Depression
	+ Other
* **Physical activity** (`physical_activity`, `select_one`, `false`): Select one of the following options:
	+ True
	+ False
* **Do you smoke?** (`smoking`, `select_one`, `false`): Select one of the following options:
	+ True
	+ False
* **Do you use alcohol?** (`alcohol_use`, `select_one`, `false`): Select one of the following options:
	+ True
	+ False
* **Do you have substance abuse?** (`substance_abuse`, `select_one`, `false`): Select one of the following options:
	+ True
	+ False
* **Do you have any medical conditions?** (`medical_conditions`, `text`, `false`): List any medical conditions you have.
* **Do you experience any side effects from your medication?** (`medications_side_effects`, `text`, `false`): List any side effects from your medication.
* **Have you undergone any medical tests recently?** (`medical_tests`, `text`, `false`): Describe any recent medical tests you have undergone.
* **Do you have any previous illnesses?** (`previous_illnesses`, `text`, `false`): List any previous illnesses you have had.
* **Do you have any previous injuries?** (`previous_injuries`, `text`, `false`): List any previous injuries you have had.
* **Medical care** (`medical_care`, `select_multiple`, `false`): Select all that apply:
	+ Primary Care
	+ Specialist
	+ Alternative
* **Who would you like to see support you in achieving your health goals?** (`health_goals_support`, `select_multiple`, `false`): Select all that apply:
	+ Family
	+ Friends
	+ Health Care Provider
* **Emergency contact** (`emergency_contact`, `text`, `false`): Provide the name and contact information of an emergency contact.
* **Any final comments?** (`final_comments`, `text`, `false`): Share any additional comments or thoughts you may have.

## Tips

* Please answer each question to the best of your ability.
* Be as detailed as possible when answering questions.
* If you need clarification on any question, do not hesitate to ask.
* This form is not a comprehensive medical assessment, but rather a tool for guidance and support. Consult your healthcare provider for personalized medical advice.
