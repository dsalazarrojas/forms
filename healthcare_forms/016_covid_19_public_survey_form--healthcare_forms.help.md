<thinking>
To confirm, I will create a user-facing help guide for the "COVID 19 Public Survey Form" that explains its purpose, instructions, and field-by-field explanation to assist end users in understanding the form's requirements and objectives.
</thinking>

# COVID 19 Public Survey Form - Help Guide
## Purpose
The COVID 19 Public Survey Form is a tool designed to collect data on public perceptions and opinions regarding the COVID-19 vaccine. This form aims to gather information on various aspects of vaccine awareness, confidence, and behavior, which will help inform future public health initiatives.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select your age group from the provided options.
2. Enter your current location (Region/City).
3. Indicate if you have received a COVID-19 vaccine.
4. If yes, select the type of vaccine you received.
5. If no, answer if you plan to get vaccinated in the future.
6. Explain your decision on why you chose to get or plan to get vaccinated.
7. Rate your confidence in the safety of available vaccines on a scale of 1-5.
8. Select all sources from which you primarily get your vaccine information.
9. Decide if you would recommend the COVID-19 vaccine to your friends and family.
10. Provide any additional comments or concerns regarding COVID-19 vaccination.

## Field-by-Field Explanation

* **What is your age group?** (`age_group`, `select_one`, required)
Select one of the provided age groups to indicate your age.
* **Your Current Location (Region/City)** (`location_region`, `text`, required)
Enter your current location, which will help us understand the geographical distribution of vaccine awareness.
* **Have you received a COVID-19 vaccine?** (`vaccine_received`, `select_one`, required)
Choose 'True' if you have received the vaccine, 'False' otherwise.
* **If yes, which vaccine did you receive?** (`vaccine_type`, `select_one`, required)
If you have received the vaccine, select the type of vaccine you received.
* **If no, do you plan to get vaccinated in the future?** (`vaccination_plan`, `select_one`, required)
If you have not received the vaccine, select if you plan to get vaccinated in the future.
* **If no, what is the primary reason for your vaccination decision?** (`vaccine_decision_reason`, `text`, required)
Explain why you have not chosen to get vaccinated.
* **On a scale of 1-5, how confident are you in the safety of available vaccines?** (`safety_confidence`, `number`, required)
Rate your confidence in the safety of available vaccines.
* **Where do you primarily get your vaccine information?** (`info_sources`, `select_multiple`, required)
Select all sources from which you primarily get your vaccine information.
* **Would you recommend the COVID-19 vaccine to your friends and family?** (`vaccine_recommendation`, `select_one`, required)
Decide if you would recommend the COVID-19 vaccine to your friends and family.
* **Additional comments or concerns regarding COVID-19 vaccination** (`survey_comments`, `text`, optional)
Provide any additional comments or concerns regarding COVID-19 vaccination.

This help guide will assist end users in completing the form and understanding its requirements and objectives.
