<thinking>...</thinking>

# vaccination_schedule_inquiry_form - Help Guide
## Purpose
This form is designed to collect information from patients about their vaccination schedule. It is used to gather details such as patient name, contact number, date of birth, vaccination history, schedule date and time, preferred language, schedule method, and follow-up reminders preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's name in the **Patient Name** field.
2. Enter the patient's contact number in the **Contact Number** field.
3. Enter the patient's date of birth in the **Date of Birth** field in the format MM/DD/YYYY.
4. Enter the patient's vaccination history in the **Vaccination History** field.
5. Select the date and time for the schedule in the **Schedule Date** and **Schedule Time** fields.
6. Choose the preferred language of communication for the patient in the **Preferred Language** field.
7. Select the method of scheduling the patient's appointment (e.g. In-clinic, Phone, Email, or Other).
8. If the schedule method is Other, enter the preferred method in the **Schedule Method Other** field.
9. Choose whether to send schedule reminders to the patient (e.g. True, False, or Only if needed) in the **Schedule Reminders** field.
10. Choose whether to send follow-up reminders to the patient (e.g. True, False) in the **Follow-up Reminders** field.

## Field-by-Field Explanation
* **Patient Name** (text, required, true): Enter the patient's full name.
* **Contact Number** (text, required, true): Enter the patient's contact number, including area code and phone number.
* **Date of Birth** (date, required, true): Enter the patient's date of birth in the format MM/DD/YYYY.
* **Vaccination History** (text, optional, false): Enter any relevant vaccination history for the patient.
* **Schedule Date** (date, required, true): Select the date for the schedule.
* **Schedule Time** (time, required, true): Select the time for the schedule.
* **Preferred Language** (select_one, required, true): Choose the language you prefer to communicate with the patient in English, Spanish, French, or Other.
* **Schedule Method** (select_one, required, true): Select how you will schedule the patient's appointment: In-clinic, Phone, Email, or Other.
* **Schedule Method Other** (text, required, false): Enter any other schedule method not listed above.
* **Schedule Reminders** (select_multiple, required, true): Choose whether to send schedule reminders to the patient (True, False, or Only if needed).
* **Follow-up Reminders** (select_multiple, required, false): Choose whether to send follow-up reminders to the patient (True, False).
