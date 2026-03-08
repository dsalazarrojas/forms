# Afternoon Absence Form - Help Guide
## Purpose
This form is used to notify the school of a student's intention to be absent during the afternoon session.

## How To Complete This Form
- Read the form carefully and fill in all required fields.
- Enter the parent or guardian's name, emergency contact number, and student's full name.
- Provide the student's ID number, if applicable.
- Select the date of absence and reason for absence.
- Choose the departure time and return status.
- Select the periods the student will be missing from classes.
- Submit the form.

## Field-by-Field Explanation
* **Parent or Guardian Name** (`parent_name`, text, required): Enter the name of the parent or guardian who will be responsible for the student's absence.
* **Emergency Contact Number** (`emergency_contact`, text, required): Enter the contact number of the emergency contact person.
* **Student Full Name** (`student_name`, text, required): Enter the full name of the student who will be absent.
* **Student ID Number** (`student_id`, text, required): Enter the student's ID number, if applicable.
* **Date of Absence** (`absence_date`, date, required): Select the date of the student's absence.
* **Reason for Absence** (`absence_reason`, select_one, required): Select the primary reason for the student's absence from the provided options.
* **If Other, please specify** (`other_reason`, text, optional): Provide a detailed reason if the primary reason is "Other".
* **Departure Time** (`departure_time`, time, required): Enter the time the student will leave the school premises.
* **Will the student return today?** (`return_status`, select_one, required): Indicate if the student is expected to return to school today.
* **Subjects or classes that will be missed** (`missed_classes`, select_multiple, optional): Select all applicable afternoon periods the student will be missing from classes.
