<thinking>
This form is used to document the reasons for no-show appointments and to gather information about the appointment details. Before completing this form, ensure that you have reviewed the patient's file and have the necessary information available. This form should only be completed for appointments that were not attended by the patient. If the patient did attend the appointment, do not complete this form.

To complete this form, follow the instructions below.

Please note that this form is for internal use only and should not be completed by patients or their representatives.
</thinking>

# Endoscopy Appointment No Show Report - Help Guide
## Purpose
This form is used to document the reasons for no-show appointments and to gather information about the appointment details.

## How To Complete This Form
1. Fill in the patient's identifier, which is used to identify the patient in our system.
2. Enter the date of the appointment that was not attended by the patient.
3. Select the reason(s) why the patient did not attend the appointment.
4. Confirm that the appointment was not attended by selecting 'Yes' in the 'No Show Confirmation' field.
5. Enter the reason for cancellation (if applicable).
6. Enter the name of the clinic where the appointment was scheduled.
7. Enter the name of the doctor who was to perform the appointment.
8. Enter the patient's name.
9. Enter any follow-up notes or comments about the appointment.
10. Enter the date for follow-up.
11. Select the follow-up status of the patient (active or inactive).
12. Enter any review notes or comments.
13. Select the no-show status of the patient (active or inactive).
14. Enter the clinic location where the appointment was scheduled.
15. Enter any review comments.
16. Enter the name of the person who reviewed the appointment.
17. Enter the name of the person who will follow-up with the patient.
18. Confirm that the appointment was not attended by selecting 'Yes' in the 'No Show Confirmed' field.

## Field-by-Field Explanation

* **Patient Identifier** (`patient_identifier`, text, required): Enter the patient's identifier, which is used to identify the patient in our system.
* **Appointment Date** (`appointment_date`, date, required): Enter the date of the appointment that was not attended by the patient.
* **Reason for Not Showing Up** (`no_show_reason`, select_multiple, required): Select the reason(s) why the patient did not attend the appointment.
* **No Show Confirmation** (`no_show_confirmed`, select_one, required): Confirm that the appointment was not attended by selecting 'Yes'.
* **Cancellation Reason** (`no_show_cancellation_reason`, text, required): Enter the reason for cancellation (if applicable).
* **Clinic Name** (`clinic_name`, text, required): Enter the name of the clinic where the appointment was scheduled.
* **Doctor Name** (`doctor_name`, text, required): Enter the name of the doctor who was to perform the appointment.
* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Follow-up Note** (`follow_up_note`, text, required): Enter any follow-up notes or comments about the appointment.
* **Follow-up Date** (`follow_up_date`, date, required): Enter the date for follow-up.
* **Follow-up Status** (`follow_up_status`, select_multiple, required): Select the follow-up status of the patient (active or inactive).
* **Review Note** (`review_note`, text, required): Enter any review notes or comments.
* **No Show Status** (`no_show_status`, select_multiple, required): Select the no-show status of the patient (active or inactive).
* **Clinic Location** (`clinic_location`, text, required): Enter the clinic location where the appointment was scheduled.
* **Review Comment** (`review_comment`, text, required): Enter any review comments.
* **Review by Name** (`review_by_name`, text, required): Enter the name of the person who reviewed the appointment.
* **Follow-up by** (`follow_up_by`, text, required): Enter the name of the person who will follow-up with the patient.
* **No Show Confirmed** (`no_show_confirmed`, select_one, required): Confirm that the appointment was not attended by selecting 'Yes'.
