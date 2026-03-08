# field_trip_check_out_form - Help Guide
## Purpose
The field_trip_check_out_form is used to record student field trip information, including student and guardian contact details, trip location, and other relevant details.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the student's name in the "Student Name" field.
2. Enter the student's ID in the "Student ID" field.
3. Enter the guardian's name in the "Guardian Name" field.
4. Enter the guardian's phone number in the "Guardian Phone" field (format: 10 digits).
5. Select "Yes" or "No" for the student's grade level in the "Student Grade" field.
6. Enter the teacher's name in the "Teacher Name" field.
7. Enter the teacher's phone number in the "Teacher Phone" field (format: 10 digits).
8. Enter the trip location in the "Trip Location" field.
9. Enter any comments or notes in the "Comments" field.
10. If applicable, have the student, teacher, and bus sign the form in their respective signature fields (optional).
11. Select who submitted the form in the "Form Submitted By" field.
12. If applicable, repeat the process for a second teacher and bus.

## Field-by-Field Explanation
* **Student Name** (`Student Name`, `text`, required): Enter the student's name.
* **Student ID** (`Student ID`, `number`, required): Enter the student's ID number.
* **Guardian Name** (`Guardian Name`, `text`, required): Enter the guardian's name.
* **Guardian Phone** (`Guardian Phone`, `text`, required): Enter the guardian's phone number in 10 digits.
* **Bus** (`Bus`, `select_multiple`, required): Select "Yes" or "No" for bus availability.
* **Teacher Name** (`Teacher Name`, `text`, required): Enter the teacher's name.
* **Teacher Phone** (`Teacher Phone`, `text`, required): Enter the teacher's phone number in 10 digits.
* **Student Grade** (`Student Grade`, `select_one`, required): Select "Yes" or "No" for student grade level.
* **Teacher Email** (`Teacher Email`, `email`, required): Enter the teacher's email address.
* **Date** (`Date`, `date`, required): Enter the trip date.
* **Time** (`Time`, `time`, required): Enter the trip time.
* **Trip Location** (`Trip Location`, `text`, required): Enter the trip location.
* **Comments** (`Comments`, `note`, required): Enter any comments or notes about the trip.
* **Student Signature** (`Student Signature`, `note`, optional): Sign the form with your student's signature (optional).
* **Teacher Signature** (`Teacher Signature`, `note`, optional): Sign the form with your teacher's signature (optional).
* **Bus Signature** (`Bus Signature`, `note`, optional): Sign the form with your bus's signature (optional).
* **Form Submitted By** (`Form Submitted By`, `select_one`, required): Select who submitted the form (e.g., chatjimmy, chatjane, chatdennis).
* **Teacher Name 2** (`Teacher Name 2`, `text`, optional): Enter the second teacher's name.
* **Teacher Phone 2** (`Teacher Phone 2`, `text`, optional): Enter the second teacher's phone number in 10 digits.
* **Comments 2** (`Comments 2`, `note`, optional): Enter any comments or notes about the second teacher.
* **Student Signature 2** (`Student Signature 2`, `note`, optional): Sign the form with your student's signature (optional).
* **Teacher Signature 2** (`Teacher Signature 2`, `note`, optional): Sign the form with your teacher's signature (optional).
* **Bus Signature 2** (`Bus Signature 2`, `note`, optional): Sign the form with your bus's signature (optional).
* **Form Submitted By 2** (`Form Submitted By 2`, `select_one`, optional): Select who submitted the form (e.g., chatjimmy, chatjane, chatdennis).
* **Comments 3** (`Comments 3`, `note`, optional): Enter any additional comments or notes about the trip.

Note: All fields marked as "optional" can be skipped if not applicable.
