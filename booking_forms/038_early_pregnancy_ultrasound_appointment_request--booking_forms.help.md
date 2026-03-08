# Early Pregnancy Ultrasound Appointment Request - Help Guide
## Purpose
The Early Pregnancy Ultrasound Appointment Request form is designed to gather essential information for scheduling an early pregnancy ultrasound appointment.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the patient's information, including their name and contact details.
2. Choose the date for the appointment.
3. Select the type of ultrasound appointment you are requesting.
4. Choose the time for the appointment from the available options.
5. If applicable, provide any relevant medical history or comments regarding the patient's condition.
6. Enter any other necessary details, such as insurance information or next appointment dates.

## Field-by-Field Explanation

* **Patient Info** (`patient_name`, `type: text`, required: false): Enter the name of the patient, as recorded in your patient chart.
* **Appointment Date** (`appointment_date`, `type: date`, required: false): Enter the date of the appointment you are requesting.
* **Ultrasound Type** (`ultrasound_type`, `type: select_one`, required: true): Select the type of ultrasound appointment you are requesting:
	+ Pregnancy Test
	+ Dating Scan
	+ Nuchal Translucency
* **Ultrasound Time** (`ultrasound_time`, `type: time`, required: false): Enter the time of the appointment.
* **Scheduling** (`scheduling`, `type: select_multiple`, required: true): Choose the time of the appointment from the available options:
	+ 7:00 am
	+ 8:00 am
	+ 9:00 am
	+ 1:00 pm
	+ 2:00 pm
	+ 3:00 pm
* **Doctor Info** (`doctor_info`, `type: note`, required: false): Enter any relevant medical information about the patient's healthcare provider.
* **Patient Comments** (`patient_comments`, `type: text`, required: false): Enter any comments or concerns you have regarding the patient's medical condition.
* **Booking Info** (`booking_info`, `type: text`, required: false): Enter any additional information about the booking.
* **Patient Details** (`patient_details`, `type: text`, required: false): Enter any relevant information about the patient's medical background.
* **Contact Phone** (`contact_phone`, `type: text`, required: false): Enter the patient's contact number.
* **Email** (`email`, `type: email`, required: false): Enter the patient's email address.
* **Address** (`address`, `type: text`, required: false): Enter the patient's address.
* **Medical History** (`medical_history`, `type: text`, required: false): Enter any relevant medical history or allergies.
* **Next Appointment** (`next_appointment`, `type: date`, required: false): Enter the date of the next appointment.
* **Doctor Info 2** (`doctor_info_2`, `type: note`, required: false): Enter any additional medical information about the patient's healthcare provider.
* **Insurance Info** (`insurance_info`, `type: text`, required: false): Enter the patient's insurance information.
* **Patient Phone** (`patient_phone`, `type: text`, required: false): Enter the patient's phone number.
* **Patient Name** (`patient_name`, `type: text`, required: false): Enter the patient's name (as it is in your patient chart).
* **Patient DOB** (`patient_dob`, `type: date`, required: false): Enter the patient's date of birth.
* **Patient Email** (`patient_email`, `type: email`, required: false): Enter the patient's email address.
* **Booking Time** (`booking_time`, `type: time`, required: false): Enter the time of the booking.
* **Booking Date** (`booking_date`, `type: date`, required: false): Enter the date of the booking.
* **Doctor Phone** (`doctor_phone`, `type: text`, required: false): Enter the healthcare provider's contact number.
* **Doctor Name** (`doctor_name`, `type: text`, required: false): Enter the healthcare provider's name.
* **Doctor DOB** (`doctor_dob`, `type: date`, required: false): Enter the healthcare provider's date of birth.
