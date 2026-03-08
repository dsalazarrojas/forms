# trip_medical_form - Help Guide
## Purpose
The trip_medical_form is used to capture the necessary medical information for students to travel on school trips. This information includes medical history, medications, and emergency contact details.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out all required fields marked with an asterisk (*) symbol.
2. If you are a student under 18, please ask a parent or guardian to sign the form after completion.
3. Ensure all fields are accurate and up-to-date.

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, *): Enter the student's name as it appears on their official government-issued ID.
* **Student ID** (`student_id`, number, *): Enter the student's student ID number.
* **Student Email** (`student_email`, email): Enter the student's email address.
* **Parent Name** (`parent_name`, text, *): Enter the parent or guardian's name.
* **Parent Relationship** (`parent_relationship`, select_one, *): Indicate if the parent or guardian has given their consent for the student to attend the trip.
* **Medical History** (`medical_history`, text, *): Describe any known medical history or conditions that the student may have.
* **Medical Condition** (`medical_condition`, text, *): Describe any ongoing medical conditions the student has that may impact their ability to participate in the trip.
* **Medication** (`medication`, text, *): List any medications the student is currently taking.
* **Allergy** (`allergy`, select_multiple, *): Indicate any known allergies the student has.
* **Medical Supervision** (`medical_supervision`, date, *): Record the date of the last medical supervision meeting or check-up.
* **Emergency Contact Name** (`emergency_contact_name`, text, *): Enter the name of the emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, *): Enter the phone number of the emergency contact person.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, select_one, *): Indicate if the emergency contact person is a parent or guardian.
* **Doctor** (`doctor`, text, *): Enter the name of the student's doctor.
* **Doctor Phone** (`doctor_phone`, text, *): Enter the doctor's phone number.
* **Doctor Address** (`doctor_address`, text, *): Enter the doctor's address.
* **Emergency Contact Address** (`emergency_contact_address`, text, *): Enter the address of the emergency contact person.
* **Doctor Specialty** (`doctor_specialty`, text, *): Enter the doctor's specialty or area of practice.
* **Doctor Notes** (`doctor_notes`, text, *): Enter any additional notes about the student's medical condition or treatment.
* **School Name** (`school_name`, text, *): Enter the name of the school the student attends.
* **School Phone** (`school_phone`, text, *): Enter the school's phone number.
* **School Address** (`school_address`, text, *): Enter the school's address.
* **Trip Dates** (`trip_dates`, date, *): Enter the dates of the trip.
* **Trip Details** (`trip_details`, text, *): Enter any additional details about the trip.
* **Submitted By** (`submitted_by`, text, *): Enter the name of the person submitting the form.
