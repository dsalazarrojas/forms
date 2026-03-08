# Hearing Results Notification Form - Help Guide
## Purpose
The purpose of this form is to provide a standardized way of communicating hearing test results to patients. It is designed to be filled out by healthcare professionals after conducting a hearing test, and it helps in ensuring that the patient is informed and scheduled for follow-up appointments as necessary.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's name.
2. Enter the patient's date of birth.
3. Enter the date the hearing test was conducted.
4. Enter the date the test was completed.
5. Provide a brief summary of the test results.
6. Write a detailed report from the audiologist.
7. Choose a follow-up schedule for the patient (e.g., Audiologist Report Sent, No Follow-up Scheduling, or Scheduled for Follow-up).
8. Enter the date of the scheduled follow-up appointment (if applicable).
9. Add any additional comments or remarks.
10. Enter the medical record number (if applicable).
11. Enter the doctor's name (if applicable).
12. Briefly describe the test results (if applicable).

## Field-by-Field Explanation
* **Hearing Results Notification Form** (Page 1): This is the title of the form and is not a field to be filled out.
* **Patient Name** (`patient_name`, text, optional): Enter the patient's name.
* **Patient Date of Birth** (`patient_dob`, date, optional): Enter the patient's date of birth in the format `YYYY-MM-DD`.
* **Prophets** (`prophets`, date, optional): This field is likely a typo and seems to be unrelated to the other fields. Please ignore or fill in a placeholder value.
* **Date Test Conducted** (`date_test_conducted`, date, optional): Enter the date the hearing test was conducted.
* **Date Test Completed** (`date_test_completed`, date, optional): Enter the date the test was completed.
* **Test Results** (`test_results`, text, optional): Provide a brief summary of the test results.
* **Audiologist Report** (`audiologist_report`, text, optional): Write a detailed report from the audiologist.
* **Follow-up Scheduling** (`follow_up_scheduling`, select_one, required): Choose how to schedule the follow-up appointment:
	+ Audiologist Report Sent: The patient will receive a report from the audiologist.
	+ No Follow-up Scheduling: No follow-up appointment is scheduled.
	+ Scheduled for Follow-up: The patient has a follow-up appointment scheduled.
* **Scheduled Follow-up** (`scheduled_follow_up`, date, optional): Enter the date of the scheduled follow-up appointment.
* **Comments** (`comments`, text, optional): Add any additional comments or remarks.
* **Medical Record Number** (`medical_record_number`, text, optional): Enter the medical record number (if applicable).
* **Doctor's Name** (`doctor_name`, text, optional): Enter the doctor's name (if applicable).
* **Test Results** (`test_results`, text, optional): This field seems to be redundant and can be ignored.
