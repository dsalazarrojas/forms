<thinking>...</thinking>

# healthy_human_evaluation_form - Help Guide

## Purpose
This form is used to evaluate a person's health status, gathering information about their general health, vital signs, and other related metrics.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required and optional fields as applicable to the individual being evaluated.
2. For fields with a select_one or select_multiple type, choose the corresponding option from the dropdown menu.
3. For fields with a number type, enter a numeric value.

## Field-by-Field Explanation

* **User Information** (`user_information`, text, required: false): Enter the individual's name, date of birth, or any other relevant information. This field is optional but helps us to get a better understanding of the person's identity.
* **General Health** (`general_health`, select_one, required: false): Choose one of the three options: "healthy", "unhealthy", or "other" (if the person's health status doesn't fit into the other two categories).
* **Blood Pressure** (`blood_pressure`, number, required: false): Enter the individual's blood pressure reading, typically in mmHg format (e.g., 120/80 mmHg).
* **Heart Rate** (`heart_rate`, select_multiple, required: false): Select all that apply from the list: "low", "normal", or "high".
* **Respiratory Rate** (`respiratory_rate`, select_one, required: false): Choose one of the three options: "fast", "slow", or "normal".
* **Blood Sugar** (`blood_sugar`, number, required: false): Enter the individual's blood sugar reading, typically in mmol/L or mg/dL format (e.g., 8.5 mmol/L).
* **Weight** (`weight`, number, required: false): Enter the individual's weight in kilograms or pounds (e.g., 70 kg or 154 lbs).
* **Height** (`height`, number, required: false): Enter the individual's height in centimeters or inches (e.g., 175 cm or 68 in).
* **Body Mass Index (BMI)** (`body_mass_index`, number, required: false): Enter the individual's BMI, calculated from their weight and height (not directly entered, but calculated from previous fields).
