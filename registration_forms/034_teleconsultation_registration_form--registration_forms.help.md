# Teleconsultation Registration Form - Help Guide
## Purpose
This Teleconsultation Registration Form collects essential information from patients for their scheduled appointments. It ensures that the provider has the necessary details to conduct the teleconsultation.

## How To Complete This Form
To complete the form, follow these steps:
1. Fill in your name.
2. Enter your contact number.
3. Enter your email.
4. Enter the medical record number (if applicable).
5. Choose the type of medical service you require.
6. Select the type of teleconsultation you need.
7. Enter the date and time of your appointment.
8. Choose the duration of your appointment.
9. Enter your provider's name (if applicable).

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter your name as it appears on your identification.
* **Contact Number** (`contact_number`, text, required): Enter your contact number that the provider can use to reach you.
* **Patient Email** (`patient_email`, email, required): Enter your email address that the provider can use to communicate with you.
* **Medical Record Number** (`medical_record_number`, text, optional): If you have a medical record number, enter it here. This is not required for most patients.
* **Provider Name** (`provider_name`, text, optional): If you have a specific provider assigned to you, enter their name here. This is not required for most patients.
* **Medical Service** (`medical_service`, select_one, required): Choose the type of medical service you need from the options provided.
* **Teleconsultation Type** (`teleconsultation_type`, select_multiple, required): Select the type of teleconsultation you require from the options provided.
* **Appointment Date** (`appointment_date`, date, required): Enter the date of your appointment.
* **Appointment Time** (`appointment_time`, time, required): Enter the time of your appointment.
* **Appointment Duration** (`appointment_duration`, number, required): Enter the duration of your appointment.
* **Teleconsultation Type** (already included in Teleconsultation Type field, select_multiple, required): This field is already covered in the Teleconsultation Type field, so you don't need to duplicate this information.
