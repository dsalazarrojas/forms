# request-an-appointment-form - Help Guide
## Purpose
This form is used to schedule appointments. Please fill out the form with your details to schedule a meeting with a medical professional.

## How To Complete This Form
1. Fill out all required fields (marked as "Required").
2. Enter your details accurately and completely.
3. Review and confirm the appointment details before submitting.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, `required`): Enter your first name.
* **Last Name** (`last_name`, `text`, `required`): Enter your last name.
* **Email** (`email`, `email`, `required`): Enter your email address.
* **Phone** (`phone`, `text`, `required`): Enter your phone number.
* **Date** (`date`, `date`, `required`): Select the date for the appointment.
* **Time** (`time`, `time`, `required`): Select the time for the appointment.
* **Medical Practice** (`medical_practice`, `text`, `required`): Enter the medical practice name.
* **Medical Professional** (`medical_professional`, `text`, `required`): Enter the medical professional's name.
* **Appointment Date** (`appointment_date`, `date`, `required`): Select the date for the appointment.
* **Appointment Time** (`appointment_time`, `time`, `required`): Select the time for the appointment.
* **Message** (`message`, `text`, `required`): Enter a message for the appointment.
* **Select Professional** (`select_professional`, `select_multiple`, `optional`): Select one or more professionals to meet with.
* **Select Practice** (`select_practice`, `select_multiple`, `required`): Select one or more medical practices.
* **Medical Condition** (`medical_condition`, `text`, `optional`): If applicable, enter any medical conditions.
* **Preferred Date** (`preferred_date`, `date`, `required`): Select your preferred appointment date.
* **Preferred Time** (`preferred_time`, `time`, `required`): Select your preferred appointment time.
* **Appointment Type** (`appointment_type`, `select_one`, `required`): Select the type of appointment (e.g., routine check-up, emergency).
* **Appointment Reason** (`appointment_reason`, `text`, `optional`): Enter the reason for the appointment.
* **Follow-up** (`follow_up`, `select_one`, `required`): Select follow-up options.
* **Confirm Email** (`confirm_email`, `email`, `required`): Enter your email address to confirm.
* **Confirm Phone** (`confirm_phone`, `text`, `required`): Enter your phone number to confirm.
* **Confirm Date** (`confirm_date`, `date`, `required`): Select the confirm appointment date.
* **Confirm Time** (`confirm_time`, `time`, `required`): Select the confirm appointment time.
* **Confirm Message** (`confirm_message`, `text`, `required`): Enter a confirm message.
* **Confirm Select Professional** (`confirm_select_professional`, `select_multiple`, `required`): Select one or more professionals to confirm with.
* **Confirm Select Practice** (`confirm_select_practice`, `select_multiple`, `required`): Select one or more medical practices to confirm.
