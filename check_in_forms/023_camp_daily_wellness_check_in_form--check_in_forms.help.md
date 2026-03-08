# Camp Daily Wellness Check In Form - Help Guide

## Purpose
The Camp Daily Wellness Check In Form is a tool used by staff members to monitor and record the well-being and condition of campers. It is an essential part of ensuring the health and safety of campers, and helps staff to identify any potential issues that may affect their stay.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the date of check-in using the provided date field.
2. Fill in the camper's name in the "Camper Name" field.
3. Select the cabin group that the camper is assigned to.
4. Record the camper's body temperature, if available.
5. Identify any observed physical symptoms.
6. Rate the camper's energy level on a scale of 1 (Very Low) to 5 (Full Energy).
7. Choose how the camper is feeling emotionally.
8. Report on the camper's appetite at the last meal.
9. Indicate whether the camper is cleared for all physical activities or if any restrictions apply.
10. Provide any staff observations and notes.
11. Confirm if any medication was administered today.
12. Enter the name of the staff member conducting the check-in.
13. Record the time of the check-in.
14. If necessary, indicate if a referral to the infirmary is required.

## Field-by-Field Explanation

* **Date of Check-in** (`check_in_date`, date, required): Enter the date of the check-in using the provided date field.
* **Camper Name** (`camper_name_check_in`, text, required): Enter the name of the camper being checked in.
* **Cabin - Group Name** (`cabin_group_assignment`, text, required): Select the cabin group that the camper is assigned to.
* **Body Temperature (F)** (`current_body_temp`, number, required): Record the camper's body temperature, if available.
* **Observed Physical Symptoms** (`physical_symptoms_observed`, select_multiple, required): Choose from the list of observed symptoms, selecting all that apply.
* **Energy Level Rating** (`energy_level_rating`, number, required): Rate the camper's energy level on a scale of 1 (Very Low) to 5 (Full Energy).
* **Emotional Well-being Status** (`wellness_emotional_status`, select_one, required): Choose how the camper is feeling emotionally.
* **Last Meal Appetite** (`last_meal_appetite`, select_one, required): Report on the camper's appetite at the last meal.
* **Clearance for Physical Activities** (`physical_activity_clearance`, select_one, required): Indicate whether the camper is cleared for all physical activities or if any restrictions apply.
* **Staff Observations and Notes** (`wellness_staff_notes`, text, optional): Provide any staff observations and notes.
* **Was Medication Administered Today?** (`medication_administered_today`, select_one, required): Confirm if any medication was administered today.
* **Staff Member Name (Conducting Check)** (`check_in_conducted_by`, text, required): Enter the name of the staff member conducting the check-in.
* **Time of Check-in** (`wellness_submission_timestamp`, time, required): Record the time of the check-in.
* **Referral to Infirmary Needed?** (`infirmary_referral_needed`, select_one, required): If necessary, indicate if a referral to the infirmary is required.
