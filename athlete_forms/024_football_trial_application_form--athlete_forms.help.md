# Football Trial Application Form - Help Guide
## Purpose
The Football Trial Application Form is a comprehensive form designed to collect information from athletes during a trial. It includes sections for athlete details, trial details, contact information, medical history, and trial outcomes. This form is intended to be used by trial administrators to manage and track trial information.

## How To Complete This Form
To complete this form, follow these steps:

1. **Fill in Athlete Details**: Enter the athlete's name, email, and date of birth in the "Athlete Details" section.
2. **Enter Trial Details**: Provide information about the trial, including the start and end dates and times, duration, and status update.
3. **Add Contact Information**: Enter the contact person's name, email, and phone number in the "Contact Details" section.
4. **Provide Medical Information**: Enter the athlete's medical history and upload a medical certificate if required.
5. **Record Trial Outcome**: Select the trial outcome from the options provided and add any comments or reasons for the outcome.
6. **Enter Trial Conductor Information**: Enter the trial conductor's email, phone number, and notes in the "Trial Conductor" section.
7. **Submit the Form**: Review all sections before submitting the form.

## Field-by-Field Explanation
### Athlete Details
* **Athlete Details** (`athlete_details`, text, required: false): Enter the athlete's name, email, and date of birth.
### Trial Details
* **Trial Details** (`trial_details`, text, required: false): Provide information about the trial, including start and end dates and times.
### Contact Details
* **Contact Details** (`contact_details`, text, required: false): Enter the contact person's name, email, and phone number.
### Emergency Contact
* **Emergency Contact** (`emergency_contact`, text, required: false): Enter the emergency contact person's name, email, and phone number.
### Medical History
* **Medical History** (`medical_history`, text, required: false): Enter the athlete's medical history.
### Emergency Medical
* **Emergency Medical** (`emergency_medical`, text, required: false): Enter any emergency medical information.
### Trial Status
* **Trial Status** (`trial_status`, text, required: false): Select the trial status from the options provided.
### Trial Outcome
* **Trial Outcome** (`trial_outcome`, select_multiple, required: false): Select one or more of the trial outcomes provided (Passed, Rejected, Retired).
### Trial Outcome Reason
* **Trial Outcome Reason** (`trial_outcome_reason`, text, required: false): Enter the reason for the trial outcome.
### Trial Outcome Comments
* **Trial Outcome Comments** (`trial_outcome_comments`, text, required: false): Enter comments about the trial outcome.
### Medical Certificate
* **Medical Certificate** (`medical_certificate`, text, required: false): Upload a medical certificate if required.
### Trial Conductor
* **Trial Conductor** (`trial_conductor`, text, required: false): Enter the trial conductor's name, email, and notes.
### Trial Start Date
* **Trial Start Date** (`trial_start_date`, date, required: false): Enter the trial start date.
### Trial Start Time
* **Trial Start Time** (`trial_start_time`, time, required: false): Enter the trial start time.
### Trial End Date
* **Trial End Date** (`trial_end_date`, date, required: false): Enter the trial end date.
### Trial End Time
* **Trial End Time** (`trial_end_time`, time, required: false): Enter the trial end time.
### Trial Duration
* **Trial Duration** (`trial_duration`, number, required: false): Enter the trial duration.
### Trial Status Update
* **Trial Status Update** (`trial_status_update`, text, required: false): Enter any trial status updates.
### Trial Status Update By
* **Trial Status Update By** (`trial_status_update_by`, text, required: false): Enter the person who updated the trial status.
### Trial Conductor Email
* **Trial Conductor Email** (`trial_conductor_email`, email, required: false): Enter the trial conductor's email.
### Trial Conductor Phone
* **Trial Conductor Phone** (`trial_conductor_phone`, text, required: false): Enter the trial conductor's phone number.
### Trial Conductor Address
* **Trial Conductor Address** (`trial_conductor_address`, text, required: false): Enter the trial conductor's address.
### Trial Conductor Notes
* **Trial Conductor Notes** (`trial_conductor_notes`, text, required: false): Enter any notes about the trial conductor.
### Trial Admin Notes
* **Trial Admin Notes** (`trial_admin_notes`, text, required: false): Enter any additional notes about the trial.

Note: This guide is based on the provided YAML structure and explanations of each field. However, please review and adjust according to your specific use case and requirements.
