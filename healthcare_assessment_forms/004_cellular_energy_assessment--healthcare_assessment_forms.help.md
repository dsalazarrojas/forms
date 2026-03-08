# Cellular Energy Assessment - Help Guide
## Purpose
The Cellular Energy Assessment form is designed to evaluate a patient's cellular energy level, which is a critical aspect of their overall health status.

## How To Complete This Form

1. Please provide your personal contact information (patient name) on the first page.
2. Enter the date of the assessment on the second page.
3. Select your energy level rating on the third page.
4. Indicate the times of day when you experience energy dips.
5. Report your average hours of sleep per night.
6. Confirm whether you feel rested after waking up.
7. Specify the frequency of your physical activity.
8. Select all relevant symptoms you have experienced recently.
9. Indicate your common dietary habits.
10. Provide any medical conditions or medications you are currently taking.
11. Summarize your health status.
12. Finally, report your overall health perception.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Please enter your name as it appears on your identification documents.
* **Date of Assessment** (`assessment_date`, date, required): Please enter the date of the assessment in YYYY-MM-DD format.
* **Energy Level Rating (1-10)** (`daily_energy_scale`, select_one, required): Please select the number that best indicates your current energy level, with 10 being excellent and 1 being poor.
* **Energy Dips** (`energy_dip_times`, select_multiple, optional): Select all times of day when you experience energy dips.
* **Average Hours of Sleep per Night** (`average_sleep_hours`, number, required): Please enter the average hours of sleep you get per night.
* **Do you wake up feeling rested?** (`feel_rested_status`, select_one, required): Confirm whether you typically wake up feeling rested.
* **Frequency of Physical Activity** (`activity_frequency`, select_one, required): Select the frequency of your physical activity.
* **Recent Symptoms** (`recently_experienced_symptoms`, select_multiple, optional): Select all symptoms you have experienced recently.
* **Common Dietary Habits** (`dietary_habits`, select_multiple, optional): Select the dietary habits that best match your current diet.
* **Chronic Conditions or Medications** (`chronic_conditions_meds`, text, optional): Please list any chronic conditions or medications you are currently taking.
* **Overall Health Perception** (`health_perception`, select_one, required): Please select the best description of your overall health status.
