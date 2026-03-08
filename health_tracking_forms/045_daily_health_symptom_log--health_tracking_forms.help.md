# Daily Health Symptom Log - Help Guide
## Purpose
The "Daily Health Symptom Log" form is a tool for monitoring and tracking your health status, medications, and other relevant information on a daily basis. This form helps you keep a record of your symptoms, health conditions, and any interactions with healthcare professionals.

## How To Complete This Form

1. Start by filling out the "Symptom Log" sections, which ask you to report any symptoms you are experiencing. You can select multiple symptoms from the list provided.
2. Next, enter your morning and evening health status, using the options "Excellent", "Very good", "Good", "Fair", or "Poor".
3. Record your morning and evening medications, if any.
4. Track your vital signs, such as temperature, blood pressure, or other measurements.
5. Report your sleep quality on a scale of 1-10.
6. Record your wake-up time in hours since midnight.
7. Log your exercise activities, if any.
8. Add any additional notes or comments about your health.
9. Finally, indicate if you have a doctor visit scheduled, and if so, enter the details of the visit.

## Field-by-Field Explanation

* **Symptom Log** (`symptom_log`, `select_multiple`, required: false): Report any symptoms you are experiencing, selecting multiple options from the list provided. Examples: Fever, Cough, Fatigue, etc.
* **Morning Health Status** (`health_status_1`, `select_multiple`, required: false): Rate your health status in the morning as "Excellent", "Very good", "Good", "Fair", or "Poor".
* **Morning Medications** (`medication_log_1`, `text`, required: false): Enter any medications you are taking in the morning.
* **Morning Vital Signs** (`vital_signs_1`, `note`, required: false): Record any vital signs you have taken in the morning, such as temperature, blood pressure, etc.
* **Evening Symptoms** (`symptom_log_2`, `select_multiple`, required: false): Report any symptoms you are experiencing in the evening, selecting multiple options from the list provided.
* **Evening Health Status** (`health_status_2`, `select_multiple`, required: false): Rate your health status in the evening as "Excellent", "Very good", "Good", "Fair", or "Poor".
* **Evening Medications** (`medication_log_2`, `text`, required: false): Enter any medications you are taking in the evening.
* **Evening Vital Signs** (`vital_signs_2`, `note`, required: false): Record any vital signs you have taken in the evening, such as temperature, blood pressure, etc.
* **Sleep Quality** (`sleep_quality`, `number`, required: false): Report your sleep quality on a scale of 1-10.
* **Wake Up Time** (`wake_up_time`, `time`, required: false): Record your wake-up time in hours since midnight.
* **Exercise** (`exercise_log_1`, `text`, required: false): Record any exercise activities you have done.
* **Additional Notes** (`notes`, `note`, required: false): Add any additional comments or notes about your health.
* **Doctor Visit** (`doctor_visit_1`, `select_one`, required: false): Indicate if you have a doctor visit scheduled.
* **Doctor Name** (`doctor_name_1`, `text`, required: false): Enter the name of your doctor.
* **Doctor Phone** (`doctor_phone_1`, `text`, required: false): Enter the phone number of your doctor.
* **Doctor Location** (`doctor_location_1`, `text`, required: false): Enter the location of your doctor's office.
* **Doctor Department** (`doctor_department_1`, `text`, required: false): Enter the department or specialty of your doctor.
* **Doctor Appointment** (`doctor_appointment_1`, `date`, required: false): Enter the date of your doctor appointment.
* **Doctor Notes** (`doctor_notes_1`, `note`, required: false): Add any notes or comments about your doctor visit.
