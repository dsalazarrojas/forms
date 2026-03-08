<thinking>... This form is intended to be used to record the check-in and check-out of students during school hours. It is used to track student attendance, provide a record of the reasons for late arrivals or early departures, and facilitate communication between parents and school staff. Before proceeding, ensure that you are completing this form for a valid reason and not duplicating an existing entry...</thinking>

# Check In Out Form - Help Guide
## Purpose
The Check In Out Form is used to record the check-in and check-out of students during school hours, providing a record of attendance and reasons for late arrivals or early departures.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the student's **Student Full Name** in the "Student Full Name" field.
2. Enter the student's **Student ID Number** in the "Student ID Number" field.
3. Select the student's **Grade Level** from the "Grade Level" dropdown menu.
4. Choose the **Action Type**: "Check-In (Late Arrival)" or "Check-Out (Early Departure)".
5. Enter the **Current Time** in the format "HH:MM AM/PM" in the "Current Time" field.
6. If applicable, select the reason for the check-in or check-out from the "Reason for Entry or Exit" dropdown menu.
7. Enter any **Additional Explanation** in the "Additional Explanation" field.
8. If checking out, enter the **Parent or Guardian Name**.
9. If checking out, select "True" for "Parent ID Verified".
10. The **Processing Staff Member** will enter their name and sign off with a "Verified and Logged" confirmation.

## Field-by-Field Explanation
* **Student Full Name** (`student_full_name`, text, required): Enter the student's full name, as it appears on their ID card or in your records.
* **Student ID Number** (`student_id_number`, text, required): Enter the student's unique ID number, as listed on their ID card or in your records.
* **Grade Level** (`student_grade_level`, select_one, required): Select the student's grade level from the dropdown menu. Choose one of the following: Kindergarten, 1st Grade, 2nd Grade, 3rd Grade, 4th Grade, 5th Grade, Middle School, or High School.
* **Action Type** (`action_type`, select_one, required): Choose the type of action being taken: Check-In (Late Arrival) or Check-Out (Early Departure).
* **Current Time** (`log_timestamp`, time, required): Enter the current time in the format "HH:MM AM/PM".
* **Reason for Entry or Exit** (`reason_for_check_in_out`, select_one, required): Select the reason for the check-in or check-out from the dropdown menu. Choose one of the following: Medical Appointment, Illness, Family Emergency, Late Bus / Transportation, Personal, or School Activity.
* **Additional Explanation** (`detailed_explanation`, text, optional): Provide any additional information or explanation for the check-in or check-out.
* **Parent or Guardian Name** (`parent_guardian_name`, text, optional): Enter the name of the parent or guardian if checking out.
* **Parent ID Verified** (`id_verified`, select_one, required if checking out): Select "True" if the parent's ID was verified.
* **Processing Staff Member** (`staff_member_name`, text, required): Enter the name of the staff member processing this form.
* **Staff Acknowledgment Signature** (`staff_verification_ack`, select_one, required): Select "Verified and Logged" to sign off this form.
