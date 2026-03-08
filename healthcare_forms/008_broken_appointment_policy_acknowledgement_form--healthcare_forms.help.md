# Broken Appointment Policy Acknowledgement Form - Help Guide
## Purpose
The "Broken Appointment Policy Acknowledgement Form" is used to document and track patients' missed appointments, ensuring that they understand the practice's policy regarding no-shows and the potential consequences of missing appointments.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out all required fields, including your name, date of birth, phone number, email address (if applicable), and other relevant details.
2. Select the type of appointment that was missed from the provided options.
3. Choose the reason for missing the appointment from the provided options or describe why you missed the appointment.
4. Check the box to acknowledge that you understand and accept the practice's broken appointment policy.
5. Select if you wish to reschedule your appointment.
6. If rescheduling is desired, choose a preferred date for the rescheduled appointment.
7. Sign and date the form to confirm your acknowledgement.

## Field-by-Field Explanation
- **Patient Full Name** (`patient_name`, `text`, required): Please enter your full name as it appears on your medical record.
- **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth.
- **Patient ID Number** (`patient_id`, `text`, required): Enter your medical record number or patient ID.
- **Phone Number** (`phone_number`, `text`, required): Enter your contact phone number.
- **Email Address** (`email_address`, `email`, optional): Enter your email address (if you have one).
- **Missed Appointment Date** (`missed_appointment_date`, `date`, required): Enter the date of the missed appointment.
- **Missed Appointment Time** (`missed_appointment_time`, `time`, required): Enter the time of the missed appointment.
- **Type of Appointment** (`appointment_type`, `select_one`, required): Select the type of appointment that was missed from the provided options.
- **Provider Name** (`provider_name`, `text`, required): Enter the name of the healthcare provider for the appointment.
- **Reason for Missing Appointment** (`reason_for_miss`, `select_one`, required): Select the reason for missing the appointment from the provided options or describe why you missed the appointment.
- **Reason for Missing Appointment Description** (`reason_description`, `text`, optional): Provide any additional details about missing the appointment (if applicable).
- **Broken Appointment Policy Notice** (`policy_explanation`, `note`, required): This is a notice explaining the practice's policy regarding missed appointments.
- **Missed Appointment Fee** (`missed_appointment_fee`, `note`, required): This is a reminder that a fee may be charged for missed appointments.
- **Cancellation Notice Required** (`cancellation_notice`, `note`, required): This is a reminder to provide at least 24 hours notice for cancellations.
- **Policy Acknowledged** (`policy_acknowledged`, `select_one`, required): Check to confirm you understand and accept the practice's broken appointment policy.
- **Reschedule Intent** (`reschedule_intent`, `select_one`, required): Select if you wish to reschedule your appointment.
- **Preferred Reschedule Date** (`preferred_reschedule_date`, `date`, optional): If rescheduling is desired, enter your preferred date for the rescheduled appointment.
- **Date Signed** (`signature_date`, `date`, required): Date of this acknowledgement.
- **Patient Signature** (`patient_signature`, `text`, required): Sign your name to confirm your acknowledgement.
