# remote-patient-monitoring-form - Help Guide
## Purpose
The remote-patient-monitoring-form is used to collect patient information for remote monitoring. This includes demographic data, medical conditions, device settings, notification preferences, vital signs, patient status, and any additional notes.

## How To Complete This Form
To complete the remote-patient-monitoring-form, follow these steps:

1. Enter the patient's name in the "Patient Name" field.
2. Enter the patient's date of birth in the "Date of Birth" field.
3. Describe the patient's medical condition in the "Medical Condition" field.
4. Select "Yes" or "No" to indicate whether the patient has specific device settings (e.g., medication management).
5. Select "Yes" or "No" to indicate whether the patient has specific notification settings (e.g., SMS updates).
6. Select "Yes" or "No" for each vital sign relevant to the patient's condition (e.g., heart rate, blood pressure).
7. Enter the patient's current status in the "Patient Status" field.
8. Add any additional notes about the patient's condition in the "Notes" field (optional).

## Field-by-Field Explanation
* **Patient Name** (1, text, required): Enter the patient's name as it appears on their identification documents.
* **Date of Birth** (2, date, required): Enter the patient's date of birth in YYYY-MM-DD format.
* **Medical Condition** (3, text, required): Describe the patient's current medical condition, including any relevant diagnoses or treatments.
* **Device Settings** (4, select_one, required): Select "Yes" if the patient has specific device settings (e.g., medication management), or "No" otherwise.
* **Notification Settings** (5, select_one, required): Select "Yes" if the patient requires notifications (e.g., SMS updates), or "No" otherwise.
* **Vital Signs** (6, select_multiple, required): Select "Yes" for each vital sign that applies to the patient's condition (e.g., "Yes" for heart rate, "Yes" for blood pressure, etc.).
* **Patient Status** (7, text, required): Enter the patient's current status, such as "stable", "stable but requires monitoring", or "critical".
* **Notes** (8, note, optional): Add any additional notes about the patient's condition, including any recent updates or concerns.
