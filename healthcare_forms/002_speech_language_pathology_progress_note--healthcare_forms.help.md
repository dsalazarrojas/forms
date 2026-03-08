# Speech/Language Pathology Progress Note - Help Guide
## Purpose

This form is used to document the progress of a patient's speech or language pathology treatment.

## How To Complete This Form

1. Select the "Language Therapist" who will be responsible for the patient's sessions.
2. Fill out the "Patient ID" field with the patient's unique identifier.
3. Enter the "Date" of the current session.
4. Choose the "Speech Therapy Type" that applies to the patient's treatment.
5. Update the "Sessions Completed" field with the number of sessions completed so far.
6. Update the "Total Sessions Required" field with the estimated number of sessions required for the patient.
7. Enter "Progress Notes" on the patient's progress and any changes to their treatment plan.
8. Select all applicable options for "Appointments Scheduled".
9. Select all applicable options for "Bookings Made".
10. Enter the "Next Appointment Date" for the patient's next session.

## Field-by-Field Explanation

* **Language Therapist** (`Language Therapist`, `select_one`, required: false): Select the therapist responsible for the patient's sessions.
* **Patient ID** (`patient_id`, `number`, required: false): Enter the patient's unique identifier.
* **Date** (`date`, `date`, required: false): Enter the date of the current session.
* **Speech Therapy Type** (`speech_therapy_type`, `select_one`, required: false): Choose the type of speech therapy the patient is receiving.
* **Sessions Completed** (`sessions_completed`, `number`, required: false): Update the number of sessions completed so far.
* **Total Sessions Required** (`total_sessions_required`, `number`, required: false): Update the estimated number of sessions required for the patient.
* **Progress Notes** (`progress_notes`, `note`, required: false): Enter free-text notes on the patient's progress and any changes to their treatment plan.
* **Appointments Scheduled** (`appointments_scheduled`, `select_multiple`, required: false): Select all applicable options for upcoming appointments.
* **Bookings Made** (`bookings_made`, `select_multiple`, required: false): Select all applicable options for bookings made for the patient.
* **Next Appointment Date** (`next_appointment_date`, `date`, required: false): Enter the date of the next appointment.

## Tips

* Consistency is key; fill out each field for every session.
* Review and update previous sessions' progress notes for continuity.
* This form is intended for healthcare professionals, so keep your notes clear and concise.
