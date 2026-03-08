<thinking>...I'm checking the form design and requirements to ensure I understand the context and purpose of the form... It appears the form is for chiropractors to request time off from work, and the goal is to reschedule or cancel appointments. To confirm, this form will be used by patients to provide necessary information for the chiropractor's time off request. I will also check for non-duplication and ensure that all required fields are clearly defined. I'm ready to proceed with creating the user-facing help guide...</thinking>

# Chiropractic Appointment Time Off Form - Help Guide
## Purpose
This form is designed to be used by patients to request time off from a chiropractor. You will need to fill out this form to inform the clinic of your availability and provide a reason for your request.

## How To Complete This Form
To complete this form, simply fill in the required information and submit it to the clinic.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, `text`, required): Enter your full name as it appears on your records.
* **Patient Email** (`patient_email`, `email`, required): Enter your email address, which will be used for appointment confirmations and messages.
* **Appointment Date** (`appointment_date`, `date`, required): Enter the date of your scheduled appointment that you would like to cancel or reschedule.
* **Reason for Time Off** (`time_off_reason`, `text`, required): Briefly explain why you are requesting time off.
* **Prefer Reschedule or Cancel** (`prefer_reschedule`, `select_one`, required): Choose whether you would like to reschedule or cancel your appointment.
* **Preferred New Date** (`preferred_new_date`, `date`, optional): If you are requesting to reschedule, provide a preferred date for your appointment. If left blank, the clinic will contact you for alternatives.
* **Contact Phone** (`contact_phone`, `text`, required): Enter your contact phone number, which will be used by the clinic to contact you regarding your request.
* **Additional Notes** (`additional_notes`, `text`, optional): Any other information you would like to share with the clinic, such as your availability for future appointments.

## Tips
* Please ensure all required fields are filled out to ensure your request is processed correctly.
* If you are requesting to reschedule, please provide a preferred date to help the clinic plan alternative arrangements.
* If you have any additional information or concerns, please include it in the "Additional Notes" field.
