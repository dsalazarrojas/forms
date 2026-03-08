<thinking>...</thinking>

# ida_moana_jr_musical_production_registration_form - Help Guide

## Purpose
This form is used to register students for a musical production, gathering essential information for the production team. The form collects data on the student's name, contact details, production role, and performance schedule. It also includes fields for director, teacher, class, school, and other relevant details.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the student's name in the **Student Name** field.
2. Provide the student's email address in the **Email** field.
3. Enter the student's phone number in the **Phone** field (if applicable).
4. Select the student's role in the production from the list (Lead, Supporting, Ensemble).
5. Enter any other roles not listed in the **Other Role** field (if applicable).
6. Select the director of the production from the list (Director 1, Director 2, Director 3).
7. Select the teacher for the student from the list (Teacher 1, Teacher 2, Teacher 3).
8. Enter the class and school details in the corresponding fields.
9. Enter the parent's name, email address, and phone number (if applicable).
10. Select the performance date and time from the calendar.
11. Enter the venue for the performance.
12. Add any additional notes about the student's involvement in the **Notes** field (if applicable).
13. Select the tool assigned to the student in the **Assigned Tool** field.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter the name of the student.
* **Email** (`student_email`, email, required): Enter the student's email address.
* **Phone** (`student_phone`, text, optional): Enter the student's phone number (if applicable).
* **Production Name** (`production_name`, text, required): Enter the name of the production.
* **Role** (`role`, select_one, required): Select the student's role in the production from the list (Lead, Supporting, Ensemble).
* **Other Role** (`role_other`, text, optional): Enter any other roles not listed in the **Role** field (if applicable).
* **Director** (`director`, select_one, required): Select the director of the production from the list (Director 1, Director 2, Director 3).
* **Teacher** (`teacher`, select_one, required): Select the teacher for the student from the list (Teacher 1, Teacher 2, Teacher 3).
* **Class** (`class`, text, required): Enter the class where the student is enrolled.
* **School** (`school`, text, required): Enter the school attended by the student.
* **Parent Name** (`parent_name`, text, optional): Enter the parent's name (if applicable).
* **Parent Email** (`parent_email`, email, required): Enter the parent's email address (if applicable).
* **Parent Phone** (`parent_phone`, text, optional): Enter the parent's phone number (if applicable).
* **Guardian Name** (`guardian_name`, text, optional): Enter the guardian's name (if applicable).
* **Guardian Email** (`guardian_email`, email, optional): Enter the guardian's email address (if applicable).
* **Guardian Phone** (`guardian_phone`, text, optional): Enter the guardian's phone number (if applicable).
* **Performance Date** (`performance_date`, date, required): Select the performance date from the calendar.
* **Performance Time** (`performance_time`, time, required): Select the performance time from the calendar.
* **Venue** (`venue`, text, required): Enter the location where the performance will take place.
* **Notes** (`notes`, note, optional): Add any additional notes about the student's involvement in the production.
* **Submitted By** (`submitted_by`, text, required): Enter the name of the person who submitted the form.
* **Submitted On** (`submitted_on`, date, required): Select the date when the form was submitted.
* **Updated By** (`updated_by`, text, required): Enter the name of the person who last updated the form.
* **Updated On** (`updated_on`, date, required): Select the date when the form was last updated.
* **Assigned Tool** (`assigned_tool`, text, required): Enter the tool assigned to the student.
