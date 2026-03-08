<thinking>...</thinking>

# Coronavirus Self Assessment Form - Help Guide

## Purpose
This form is designed to help individuals self-assess their symptoms, travel history, and medical conditions related to the coronavirus. It is intended to be a quick and easy way for individuals to gather information about their potential exposure to the virus and determine if they are at risk of infection.

**Before starting the assessment, please note that this form is not a replacement for medical advice. If you are experiencing symptoms or have concerns about your health, please contact a medical professional for guidance.**

## How To Complete This Form

To complete this form, simply follow these steps:

1. Enter your name in the `patient_name` field.
2. Enter your email address in the `email` field.
3. Enter your phone number in the `phone_number` field.
4. Select any symptoms you are experiencing from the `symptoms` field (you can select multiple symptoms).
5. Provide any travel history in the `travel_history` field.
6. For the `date_last_travelled` field, enter the date you last traveled.
7. If you have any symptoms, enter the duration of those symptoms in the `symptoms_duration` field.
8. Answer the travel history questions (`travel_history_last_30_days`, `travel_history_last_14_days`, `travel_history_last_7_days`) with "True" or "False", indicating if you have traveled or not in the last specified time period.
9. If you have a medical condition, enter a brief description in the `medical_condition` field.
10. If you have a medical condition, enter any symptoms you are experiencing in the `medical_condition_symptoms` field.
11. If you have a medical condition, enter any relevant medical facilities you have visited in the `medical_condition_medical_facilities` field.
12. If you have a medical condition, indicate if you have contacted a doctor in the `medical_condition_contact_doctor` field.
13. If you have a medical condition, enter the date and time of your last doctor visit in the `medical_condition_last_contact_date` and `medical_condition_last_contact_time` fields.
14. If you have a medical condition, enter your medical record number and provider in the `medical_condition_medical_record_number` and `medical_condition_medical_record_provider` fields.
15. Finally, enter the date of your last medical record update in the `medical_condition_medical_record_date` field.

## Field-by-Field Explanation

* **patient_name** (`patient_name`, text, required): Enter your name to identify yourself for the assessment.
* **email** (`email`, email, required): Enter your email address to contact you if needed.
* **phone_number** (`phone_number`, text, required): Enter your phone number to contact you if needed.
* **symptoms** (`symptoms`, select_multiple, required): Select any symptoms you are experiencing, such as fever, cough, or shortness of breath.
* **travel_history** (`travel_history`, text, required): Provide any recent travel history, including destinations and dates.
* **date_last_travelled** (`date_last_travelled`, date, required): Enter the date you last traveled.
* **symptoms_duration** (`symptoms_duration`, text, required): If you are experiencing symptoms, enter the duration of those symptoms.
* **travel_history_last_30_days** (`travel_history_last_30_days`, select_multiple, required): Answer "True" or "False" if you have traveled in the last 30 days.
* **travel_history_last_14_days** (`travel_history_last_14_days`, select_multiple, required): Answer "True" or "False" if you have traveled in the last 14 days.
* **travel_history_last_7_days** (`travel_history_last_7_days`, select_multiple, required): Answer "True" or "False" if you have traveled in the last 7 days.
* **medical_condition** (`medical_condition`, text, required): If you have a medical condition, enter a brief description.
* **medical_condition_symptoms** (`medical_condition_symptoms`, text, required): If you have a medical condition, enter any symptoms you are experiencing.
* **medical_condition_medical_facilities** (`medical_condition_medical_facilities`, text, required): If you have a medical condition, enter any relevant medical facilities you have visited.
* **medical_condition_contact_doctor** (`medical_condition_contact_doctor`, text, required): If you have a medical condition, indicate if you have contacted a doctor.
* **medical_condition_last_contact_date** (`medical_condition_last_contact_date`, date, required): If you have a medical condition, enter the date of your last doctor visit.
* **medical_condition_last_contact_time** (`medical_condition_last_contact_time`, time, required): If you have a medical condition, enter the time of your last doctor visit.
* **medical_condition_medical_record_number** (`medical_condition_medical_record_number`, text, required): If you have a medical condition, enter your medical record number.
* **medical_condition_medical_record_provider** (`medical_condition_medical_record_provider`, text, required): If you have a medical condition, enter your medical record provider.
* **medical_condition_medical_record_date** (`medical_condition_medical_record_date`, date, required): If you have a medical condition, enter the date of your last medical record update.

**Tips**

* Please answer each question carefully and accurately, as this information will be used to assess your risk of exposure to the coronavirus.
* If you are unsure about any of the questions, please contact a medical professional for guidance.
* This form is intended to be a quick and easy way to gather information, but it is not a substitute for medical advice. If you are experiencing symptoms or have concerns about your health, please contact a medical professional immediately.
