<thinking>

The purpose of this form is to track students out of class. It captures student information, reason for being out of class, date, time, assigned tool, and who created the entry. This form seems to be used in an educational setting, possibly in a school or educational institution. The form may be used by teachers or administrators to record absences or other out-of-class incidents. The form is quite straightforward, with no apparent dependencies or inter-form interactions. It appears to be a simple tracking tool without any complex logic or conditional fields.

</thinking>

# out_of_class_tracking_form - Help Guide
## Purpose
The **Out of Class Tracking Form** is used to record students who are absent from class for various reasons. This form helps teachers or administrators track student absences, ensuring that students receive support and accommodations when needed.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **Student Name** field with the name of the student who is out of class.
2. Enter the **Student ID** number if available.
3. Select the **Class Name** where the student was scheduled to be.
4. Briefly explain the **Reason** for the student's absence in the available space.
5. Enter the date of the event using the **Date** field in the format dd/mm/yyyy or dd/mm/yy.
6. Enter the time of the event using the **Time** field in 24-hour format (HH:MM).
7. If applicable, select the **Assigned Tool** or resource used during the student's absence.
8. Finally, type in the name of the **Created By** person who recorded the entry.

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, required): Enter the student's name who is absent from class.
* **Student ID** (`student_id`, number, optional): Enter the student's ID number (if available).
* **Class Name** (`class_name`, text, optional): Select the class where the student was scheduled to be.
* **Reason** (`reason`, text, optional): Briefly explain the reason for the student's absence.
* **Date** (`date`, date, optional): Enter the date of the event in dd/mm/yyyy or dd/mm/yy format.
* **Time** (`time`, time, optional): Enter the time of the event in 24-hour format (HH:MM).
* **Assigned Tool** (`assigned_tool`, text, optional): Select the assigned tool or resource used during the student's absence (if applicable).
* **Created By** (`created_by`, text, optional): Type in the name of the person who recorded the entry.
