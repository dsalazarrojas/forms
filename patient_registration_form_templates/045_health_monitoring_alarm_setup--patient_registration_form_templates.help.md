# Health Monitoring Alarm Setup - Help Guide
## Purpose
This form is used to set up alarm systems for patients, which will trigger alerts when certain conditions are met.

## How To Complete This Form
1. Select whether to set up a "Registration Form Setup" for the patient, or skip it.
2. Enter the "Alarm Setup Details" if you have chosen to set up the form.
3. Choose the "Alarm Frequency" at which the alarm should be triggered.
4. Set the "Alarm Threshold" value, which will determine when the alarm should be triggered.
5. Decide whether to receive "Alarm Notification" when the alarm is triggered.

## Field-by-Field Explanation
* **Registration Form Setup** (`patient_registration_form_setup`, select_multiple, required/optional): Choose whether to set up a registration form for the patient. This will allow you to gather more information about the patient's needs and requirements.
* **Alarm Setup Details** (`setup_details`, text, optional): Enter any additional details about the alarm setup, such as any relevant medical conditions or allergies.
* **Alarm Frequency** (`alarm_frequency`, select_one, required/optional): Choose how often the alarm should be triggered, such as once, daily, weekly, biweekly, or monthly.
* **Alarm Threshold** (`alarm_threshold`, number, required/optional): Set the value that will trigger the alarm. This should be a numeric value that represents the threshold at which the alarm should be triggered.
* **Alarm Notification** (`alarm_notification`, select_multiple, required/optional): Decide whether to receive notifications when the alarm is triggered.
