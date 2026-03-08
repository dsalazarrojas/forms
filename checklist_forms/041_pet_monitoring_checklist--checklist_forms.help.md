# Pet Monitoring Checklist - Help Guide
## Purpose
The Pet Monitoring Checklist is a form designed to help pet caregivers track and record essential information about a pet's health status, food and water intake, medication administration, and follow-up appointments.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant options for each category, such as "Yes" or "No" for questions about food and water intake, medication administration, and follow-up appointments.
2. Enter the date for questions related to pet vital signs and follow-up appointments.
3. Provide a detailed description in the text field for "Pet Condition" if the pet's health status is not "Yes" or "No".
4. Choose the next follow-up option, "Yes" or "No", to indicate the next follow-up appointment.

## Field-by-Field Explanation
- **Pet Food and Water** (`pet_food_and_water`, select_multiple, required): This field is used to track whether the pet has been fed and given water within the last 24 hours. Select "Yes" for both "Food" and "Water" if the pet has been fed and given water.
- **Medication Administered** (`medication_administered`, select_multiple, required): This field is used to track whether medication has been administered to the pet. Select "Yes" if the pet has received medication.
- **Pet Vital Signs** (`pet_vital_signs`, date, required): Enter the date for the pet's vital signs, such as temperature, pulse, and blood pressure.
- **Pet Condition** (`pet_condition`, text, optional): Describe the pet's health condition in detail, if not "Yes" or "No" is selected for "Pet Health Condition".
- **Follow-up** (`follow_up`, date, required): Enter the date for the next follow-up appointment.
- **Follow-up Time** (`follow_up_time`, time, required): Select the time for the next follow-up appointment.
- **Next Follow-up** (`next_follow_up`, select_one, required): Choose "Yes" if there is a follow-up appointment scheduled.
- **Pet Health Condition** (`pet_health_condition`, select_one, required): Select "Yes" if the pet's health condition is good, "No" otherwise.
- **Notes** (`notes`, note, optional): Provide any additional notes or comments about the pet's care.
