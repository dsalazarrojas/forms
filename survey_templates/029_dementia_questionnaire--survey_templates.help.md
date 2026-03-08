# Dementia Questionnaire - Help Guide

## Purpose
This form is designed to collect information about a patient's medical history, symptoms, and treatment for dementia. It is intended for use by healthcare professionals to gather data on patients with dementia.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the medical practitioner who has been treating the patient from the dropdown list.
2. Choose the symptoms the patient is currently experiencing from the multiple-choice options.
3. Select the patient's medical history from the multiple-choice options.
4. Choose the patient's current medication from the dropdown list.
5. Add any additional notes about the patient's case in the Notes field.
6. Enter the patient's email address.
7. Enter the patient's phone number.
8. Record the date and time of the last consultation.
9. Add any further notes from the medical practitioner in the Medical Practitioner Notes field.
10. Add any further notes from the patient in the Patient Notes field.
11. Record the date and time of the last visit.
12. Select the frequency of the last visit from the dropdown list.

## Field-by-Field Explanation

* **Medical Practitioner** (`medical_practitioner`, select_one, required): Select the medical practitioner who has been treating the patient.
* **Cognitive Functioning** (`cognitive_functioning`, select_multiple, required): Choose the cognitive functions that are affected, such as Memory, Language, Attention, or Problem-solving.
* **Symptoms** (`symptoms`, select_multiple, required): Select the symptoms the patient is currently experiencing, such as Confusion, Mood changes, Agitation, or Sleep disturbances.
* **Medical History** (`medical_history`, select_multiple, required): Select the patient's medical history, including HIV, Cancer, Stroke, or Traumatic Brain Injury.
* **Medication** (`medication`, select_one, required): Choose the patient's current medication, such as Aromatherapy, Cognitive therapy, or Medication.
* **Notes** (`notes`, note, required): Add any additional notes about the patient's case.
* **Email** (`email`, email, required): Enter the patient's email address.
* **Phone** (`phone`, text, required): Enter the patient's phone number.
* **Date** (`date`, date, required): Record the date of the last consultation.
* **Time** (`time`, time, required): Record the time of the last consultation.
* **Medical Practitioner Notes** (`medical_practitioner_notes`, note, required): Add any further notes from the medical practitioner.
* **Patient Notes** (`patient_notes`, note, required): Add any further notes from the patient.
* **Date Last Seen** (`date_last_seen`, date, required): Record the date of the last visit.
* **Time Last Seen** (`time_last_seen`, time, required): Record the time of the last visit.
* **Frequency Last Seen** (`frequency_last_seen`, select_one, required): Select the frequency of the last visit, such as Daily, Weekly, Monthly, or Never.
