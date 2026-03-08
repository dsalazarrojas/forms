<thinking>
The form is used to schedule an online doctor appointment. The form requires the patient's information, appointment details, and doctor selection. The patient is asked to provide their name, email, phone number, medical practice address, and medical practice email. The patient must also select the available doctor, date, time, appointment length, reason for visit, and confirm or deny having medical history. The form includes spaces for special instructions, medical practice address, phone number, and a message. The patient must read and accept the terms and conditions before submitting the form. This form ensures that patients can book appointments online, and doctors can manage their availability and schedule.
</thinking>

# online_doctor_appointment_form - Help Guide
## Purpose
The online_doctor_appointment_form is used to schedule online appointments for patients.

## How To Complete This Form
To complete this form, follow these steps:
1. Click on the "Submit" button to start filling out the form.
2. Provide your personal details in the "Patient Information" section.
3. Select the "Appointment Details" section and choose the date and time for your appointment.
4. In the "Available Doctors" section, select the doctor you would like to see.
5. Confirm your selected doctor in the "Selected Doctor" section.
6. In the "Appointment Length" section, select the length of your appointment.
7. In the "Reason for Visit" section, select the reason for your visit.
8. You can optionally provide any relevant medical history in the "Medical History" section.
9. If you have any special instructions, please enter them in the "Special Instructions" section.
10. Confirm the "Medical Practice Address", "Medical Practice Email", and "Medical Practice Phone Number" of your doctor's office.
11. Provide a message if you have any additional information to share.
12. Read and accept the "Terms and Conditions".
13. Finally, sign the "Patient Signature" and "Doctor Signature" fields.

## Field-by-Field Explanation
- **Patient Information** (`patient_info`, `text`, `false`): Please enter your personal details.
  - This is where you will enter your name.
- **Appointment Details** (`appointment_details`, `text`, `false`): Please select the appointment date and time.
  - This is where you will select the date and time for your appointment.
- **Available Doctors** (`available_doctors`, `select_multiple`, `true`): Select a doctor from the list.
  - This is where you will select the doctor you would like to see.
- **Selected Doctor** (`selected_doctor`, `select_one`, `true`): Confirm your selected doctor.
  - This is where you will confirm the doctor you selected.
- **Date** (`appointment_date`, `date`, `true`): Select the appointment date.
  - This is where you will select the date for your appointment.
- **Time** (`appointment_time`, `time`, `true`): Select the appointment time.
  - This is where you will select the time for your appointment.
- **Time Slot** (`appointment_time_slot`, `select_multiple`, `false`): Select the time slot for your appointment.
  - This is where you will select the time slot for your appointment.
- **Appointment Length** (`appointment_length`, `select_multiple`, `true`): Select the length of your appointment.
  - This is where you will select the length of your appointment.
- **Reason for Visit** (`reason_for_visit`, `select_multiple`, `true`): Select the reason for your visit.
  - This is where you will select the reason for your visit.
- **Medical History** (`medical_history`, `note`, `false`): Provide any relevant medical history.
  - This is where you will enter any relevant medical history.
- **Special Instructions** (`special_instructions`, `text`, `false`): Enter any special instructions.
  - This is where you will enter any special instructions.
- **Medical Practice Address** (`medical_practice_address`, `text`, `true`): Enter your doctor's address.
  - This is where you will enter your doctor's address.
- **Medical Practice Email** (`medical_practice_email`, `email`, `true`): Enter your doctor's email.
  - This is where you will enter your doctor's email.
- **Medical Practice Phone** (`medical_practice_phone`, `text`, `true`): Enter your doctor's phone number.
  - This is where you will enter your doctor's phone number.
- **Message** (`patient_message`, `text`, `false`): Provide a message.
  - This is where you will enter any additional information.
- **Terms and Conditions** (`terms_and_conditions`, `text`, `false`): Read and accept the terms and conditions.
  - This is where you will read and accept the terms and conditions.
- **Patient Signature** (`patient_signature`, `text`, `true`): Sign this form to confirm your appointment.
  - This is where you will sign this form to confirm your appointment.
- **Doctor Signature** (`doctor_signature`, `text`, `true`): Sign this form to confirm your appointment.
  - This is where the doctor will sign this form to confirm your appointment.
