# Patient Appointment Communication Form - Help Guide
## Purpose
This form is used to collect and record information about patient appointments, including patient details, appointment schedule, and any relevant communication from the provider. It helps healthcare professionals to effectively communicate with patients and ensure accurate record-keeping.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's name in the **patient_name** field.
2. Select the date of the appointment in the **date** field.
3. Choose the time of the appointment in the **time** field.
4. Enter the name of the healthcare provider in the **provider_name** field.
5. Select whether the appointment is **Active** or **Inactive** in the **appointment_status** field.
6. Choose any additional appointment types that apply, such as **Yes** or **No**, in the **appointment_type** field.
7. Enter any relevant patient preferences in the **patient_preferences** field.
8. Enter any message from the healthcare provider in the **provider_message** field.

## Field-by-Field Explanation
* **patient_name** (text, required): Enter the patient's name.
* **date** (date, required): Select the date of the appointment.
* **time** (time, required): Choose the time of the appointment.
* **provider_name** (text, required): Enter the name of the healthcare provider.
* **appointment_type** (select_multiple, optional): Select any additional appointment types that apply.
	+ **Yes**: Appointment is scheduled.
	+ **No**: Appointment is not scheduled.
* **appointment_status** (select_one, optional): Select whether the appointment is **Active** or **Inactive**.
	+ **Active**: Appointment is scheduled and ready to be performed.
	+ **Inactive**: Appointment is not scheduled or cancelled.
* **patient_preferences** (text, optional): Enter any relevant patient preferences.
* **provider_message** (text, optional): Enter any message from the healthcare provider.
