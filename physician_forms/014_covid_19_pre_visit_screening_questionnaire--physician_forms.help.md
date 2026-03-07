<thinking>
This form is intended for patients to provide information about themselves before visiting a healthcare provider. The purpose of the form is to gather essential details necessary for the healthcare provider to assess the patient's situation and prepare for the visit.
The form is designed to be completed by the patient before their scheduled appointment. The patient will be asked to provide personal and medical information to ensure their safety and the safety of others.
This form is not intended for patients with specific medical conditions or concerns that require immediate attention. Patients with such conditions should contact their healthcare provider separately.
</thinking>

# COVID 19 Pre Visit Screening Questionnaire - Help Guide
## Purpose
This form is used to gather essential information from patients before their scheduled appointment. The information collected will help the healthcare provider assess the patient's situation and prepare for the visit.

## How To Complete This Form
To complete this form, follow these steps:

1. Please fill in your full name as it appears on your identification.
2. Select the date of your scheduled appointment.
3. Choose the appointment time.
4. Enter the name of your healthcare provider.
5. Answer the questions about your symptoms and medical status.
6. Select the best way to contact you for pre-visit updates.

## Field-by-Field Explanation
### Patient Full Name
* **Patient Full Name** (`patient_full_name`, `text`, Required): Enter your full name as it appears on your identification.
### Scheduled Appointment Date and Time
* **Scheduled Appointment Date** (`appt_date`, `date`, Required): Choose the date of your scheduled appointment.
* **Appointment Time** (`appt_time`, `time`, Required): Choose the time of your scheduled appointment.
### Medical Provider
* **Provider Name** (`medical_provider`, `text`, Required): Enter the name of your healthcare provider.
### Symptom Screening
* **Have you had any COVID-19 symptoms in the last 7 days?** (`symptoms_7days`, `select_one`, Required): Select `True` if you have experienced any COVID-19 symptoms in the last 7 days. Symptoms include fever, cough, sore throat, etc.
* **Is anyone in your household currently experiencing symptoms?** (`household_symptoms`, `select_one`, Required): Select `True` if anyone in your household is experiencing COVID-19 symptoms.
* **Are you currently waiting for the results of a COVID-19 test?** (`waiting_test`, `select_one`, Required): Select `True` if you are waiting for the results of a COVID-19 test.
* **Are you fully vaccinated against COVID-19?** (`vaccination_status`, `select_one`, Required): Select `True` if you are fully vaccinated against COVID-19. Select `Partial` if you are partially vaccinated.
### Contact Information
* **Best way to contact you for pre-visit updates** (`contact_method`, `select_one`, Required): Select the best way to contact you for pre-visit updates (phone call, text message, or email).
### Verification
* **I certify that my answers are honest and accurate** (`verification_cert`, `select_one`, Required): Select `True` to confirm that your answers are honest and accurate.

## Tips
* Please provide accurate and honest information about your symptoms and medical status.
* If you are unsure about any of the questions, contact your healthcare provider for guidance.
* If you have any concerns or questions, contact your healthcare provider for assistance.
