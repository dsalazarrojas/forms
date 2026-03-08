# Hospital Emergency System Effectiveness Evaluation - Help Guide
## Purpose
This form is designed to gather feedback from patients on their experience with the hospital's emergency system. The information collected will help us identify areas of improvement and provide insights to enhance the emergency care and services provided.

## How To Complete This Form
1. Please select all the options that apply to your recent visit to the hospital's emergency department.
2. Choose the correct date and time of your visit.
3. Enter the number of healthcare staff members present during your visit.
4. Select the attitude of the staff you interacted with during your visit.
5. Choose all the facilities and equipment that were available and used during your visit.
6. If you have any additional comments or suggestions, please provide them in the box below.
7. Finally, rate your overall experience with the hospital's emergency system.

## Field-by-Field Explanation

* **Emergency Care** (`emergency_care`, select_multiple, required):
	+ Check all the emergency care options that applied to your visit (e.g., triage, treatment, medication, etc.).
* **Visit Date** (`visit_date`, date, required):
	+ Enter the date of your visit to the hospital's emergency department.
* **Visit Time** (`visit_time`, time, required):
	+ Choose the time of your visit to the hospital's emergency department.
* **Staff Attendance** (`staff_attendance`, number, required):
	+ Enter the number of healthcare staff members you interacted with during your visit.
* **Staff Attitude** (`staff_attitude`, select_one, required):
	+ Select how you perceived the attitude of the staff you interacted with during your visit (e.g., Very Good, Good, Fair, Poor).
* **Facilities and Equipment** (`facilities_and_equipment`, select_multiple, required):
	+ Choose all the facilities and equipment that were available and used during your visit (e.g., beds, wheelchairs, monitors, etc.).
* **Comments** (`comments`, text, optional):
	+ Provide any additional comments or suggestions you have about your experience with the hospital's emergency system.
* **Rating** (`rating`, select_one, required):
	+ Rate your overall experience with the hospital's emergency system (e.g., Very Good, Good, Fair, Poor).
