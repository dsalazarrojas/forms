<thinking>
Please review the provided YAML to understand the form's purpose and fields. The form is called "COVID 19 Recovery Assessment Form" and is intended to assess patients' recovery status after COVID-19. The fields are categorized into various sections, including patient information (patient_full_name), recovery dates (recovery_start_date), physical symptoms (energy_level_scale, persistent_symptoms_list, respiratory_status_cat, exercise_tolerance_level), mental health (mental_health_summary), medication information (medication_changes_text), follow-up appointments (follow_up_appt_date), and healthcare team communication (healthcare_team_concerns, monitoring_acknowledgment). This form aims to collect detailed information about the patient's recovery process, including their energy levels, symptoms, and interactions with their healthcare team. To avoid duplication, this form might be used as a follow-up assessment after an initial patient consultation. Please ensure that the patient's data will be treated with confidentiality and care.
</thinking>

# COVID 19 Recovery Assessment Form - Help Guide
## Purpose
This form is designed to collect information about your recovery status after COVID-19. Please fill out the form thoroughly and accurately to help your healthcare team monitor your progress and provide better care.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out your patient full name in the "Patient Full Name" field.
2. Enter the date when your symptoms significantly improved.
3. Rate your current energy level on the "Current Energy Level" scale from 1 to 10.
4. Select all the symptoms that you are still experiencing from the list provided in "Are you still experiencing any of the following?"
5. Choose your current respiratory status from the options in "Current Respiratory Status".
6. Rate your exercise tolerance level from the options in "Exercise Tolerance".
7. Describe any concerns or issues related to mental health and emotional wellbeing in the "Mental Health and Emotional Wellbeing" field.
8. If you have made any changes to your medications during recovery, please type them in the "Have there been any changes to your medications during recovery?" field.
9. Enter the date of your next scheduled follow-up appointment in the "Next Scheduled Follow-up Appointment" field.
10. If you have any questions or concerns to share with your healthcare team, please type them in the "Specific questions or concerns for your healthcare team" field.
11. Confirm that you understand this form is for monitoring purposes and does not replace emergency care by selecting "I understand" from the "I understand this is for monitoring purposes and does not replace emergency care" field.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_full_name`, text, required): Your full name as a patient.
* **Estimated Start Date of Recovery** (`recovery_start_date`, date, required): The date when your symptoms significantly improved.
* **Current Energy Level** (`energy_level_scale`, number, required): Rate your current energy level on a scale from 1 (Very Low) to 10 (Full Strength).
* **Are you still experiencing any of the following?** (`persistent_symptoms_list`, select_multiple, required): Select all the symptoms that you are still experiencing.
* **Current Respiratory Status** (`respiratory_status_cat`, select_one, required): Choose your current respiratory status from the provided options.
* **Exercise Tolerance** (`exercise_tolerance_level`, select_one, required): Rate your exercise tolerance level from the provided options.
* **Mental Health and Emotional Wellbeing** (`mental_health_summary`, text, required): Describe any concerns or issues related to mental health and emotional wellbeing.
* **Have there been any changes to your medications during recovery?** (`medication_changes_text`, text, required): If you have made any changes to your medications during recovery, please type them in this field.
* **Next Scheduled Follow-up Appointment** (`follow_up_appt_date`, date, required): Enter the date of your next scheduled follow-up appointment.
* **Specific questions or concerns for your healthcare team** (`healthcare_team_concerns`, text, required): If you have any questions or concerns to share with your healthcare team, please type them in this field.
* **I understand this is for monitoring purposes and does not replace emergency care** (`monitoring_acknowledgment`, select_one, required): Confirm that you understand this form is for monitoring purposes and does not replace emergency care by selecting "I understand" from the options.
