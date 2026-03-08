# Heart Rate - Help Guide
## Purpose
The Heart Rate form is used for medical professionals to collect and record heart rate information from patients. This information is essential for further medical evaluation, diagnosis, and treatment planning.

## How To Complete This Form
1. Fill in the **Patient Name** field with the patient's name.
2. Provide any relevant **Medical History** in the **Medical History** field.
3. Select any relevant **Medications** the patient is currently taking from the list of options.
4. Choose any **Allergies** the patient has from the list of options.
5. Enter the patient's **Heart Rate** in the designated field.
6. Record the **Date of Visit** and **Time of Visit** for accurate tracking.
7. Enter the **Doctor's Name** (or medical staff member's name) who attended the visit.
8. Enter the patient's **Patient Number** if applicable.
9. Finally, select the **Doctor/Medical Staff** who attended the visit from the list of options.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, optional): Enter the patient's full name.
* **Medical History** (`medical_history`, text, optional): Provide any relevant medical history that may impact the patient's heart rate.
* **Medications** (`medications`, select_multiple, optional): Select any medications the patient is currently taking.
* **Allergies** (`allergies`, select_one, optional): Choose any allergies the patient has.
* **Heart Rate** (`heart_rate`, number, optional): Enter the patient's current heart rate.
* **Date of Visit** (`date_of_visit`, date, optional): Record the date of the visit.
* **Time of Visit** (`time_of_visit`, time, optional): Record the time of the visit.
* **Doctor Name** (`doctor_name`, email, optional): Enter the doctor's name or email address.
* **Patient Number** (`patient_number`, number, optional): Enter the patient's identification number if applicable.
* **Doctor/Medical Staff** (`medical_staff`, select_one, optional): Select the doctor or medical staff member who attended the visit from the list of options.
