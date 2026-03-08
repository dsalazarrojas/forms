<thinking>
To create a user-facing help guide for the "sickness_absence_history_form", the form is intended to record and track employee absences due to sickness. This form will allow users to input employee information, absence dates, reason for absence, and other relevant details. By understanding the purpose and requirements of this form, we can create a comprehensive guide for users to complete it accurately.

The form is divided into several sections that need to be filled out:

*   Employee information: This section includes fields for the employee ID and name.
*   Absence details: This section includes fields for the absence dates, reason, and absence type.
*   Manager approval: This section includes fields for manager approval and supporting documents.
*   Additional details: This section includes fields for doctor notes, manager notes, and employee status.

Each field in the form is crucial in providing a complete picture of the employee's absence history. Therefore, it is essential to fill out each field accurately.

</thinking>

# sickness_absence_history_form - Help Guide
## Purpose
The "sickness_absence_history_form" is a form used to record and track employee absences due to sickness. It helps in documenting the absence history of employees for future reference.

## How To Complete This Form
1.  Select the "Employee ID" field to input the employee's identification number.
2.  Enter the employee's "Name" in the designated field.
3.  Enter the "Absence Dates" for the absence period.
4.  Provide the "Reason" for the absence.
5.  Select the "Absence Type" from the provided options.
6.  Select the "Manager Approval" status.
7.  If required, upload "Supporting Documents" and provide the "Supporting Documents URL".
8.  Enter the "Doctor's Note".
9.  Enter the "Manager's Notes".
10. Select the "Employee Status" and "Form Submitter" status.

## Field-by-Field Explanation

*   **Employee Id (1)** (`number`, `required`): Enter the employee's identification number.
*   **Employee Name (2)** (`text`, `required`): Enter the employee's name.
*   **Absence Dates (3)** (`date`, `required`): Enter the absence dates (start and end dates if applicable).
*   **Reason (4)** (`text`, `required`): Provide the reason for the absence.
*   **Reason Supporting Documents (5)** (`text`, `required`): Provide the relevant supporting documents.
*   **Absence Start Date (6)** (`date`, `required`): Enter the start date of the absence.
*   **End Date (7)** (`date`, `optional`): Enter the end date of the absence (if applicable).
*   **Absence Type (8)** (`select_one`, `required`): Select the type of absence (e.g., leave of absence, sickness).
*   **Manager Approval (9)** (`select_multiple`, `required`): Select the manager's approval status (approved, denied, pending).
*   **Manager Notes (12)** (`text`, `optional`): Enter any relevant notes from the manager.
*   **Doctor's Note (10)** (`text`, `optional`): Enter the note from the doctor.
*   **Supporting Documents URL (11)** (`text`, `optional`): Provide a URL to view supporting documents.
*   **Employee Status (13)** (`select_one`, `required`): Select the employee's status (active, inactive).
*   **Form Submitter (14)** (`select_one`, `required`): Select whether the form was submitted or not.
*   **Form Modified (15)** (`select_one`, `optional`): Select whether the form was modified or not.

Note: The form is designed to be completed accurately to provide a comprehensive record of employee absences due to sickness. Each field is crucial in providing the necessary information for accurate tracking and reference.

**Tips**

*   Double-check the fields for accuracy and completeness before submitting the form.
*   Use clear and concise language when filling out fields like "Manager Notes" and "Doctor's Note".
