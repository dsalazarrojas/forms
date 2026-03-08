# Student Transportation Form - Help Guide
## Purpose
The Student Transportation Form is designed to record and track student transportation details, including student name, school ID, and transportation method, among other relevant information.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the student name in the corresponding field.
2. Select the school ID that applies to the student (if any).
3. Choose the transportation method used (e.g., Bus, Car, Train, Plane, or Other).
4. Fill in any relevant notes about the transportation (if needed).
5. Enter the student's email (if applicable).
6. Enter the student's phone number (if applicable).
7. Select the category that this transportation form falls under (e.g., School Counselor Forms).
8. Choose the output file format for the form (e.g., "003 student transportation form--school counselor forms").
9. Add any additional information about the student or transportation in the text field.

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, required): Enter the student's full name.
* **School ID** (`school_id`, number, optional): Enter the school ID associated with the student.
* **Bus Number** (`bus_number`, text, optional): Enter the bus number (if applicable).
* **Date** (`date`, date, optional): Select the date of the transportation.
* **Time** (`time`, time, optional): Select the time of the transportation.
* **Transportation Method** (`transportation_method`, select_one, optional): Choose how the student was transported (e.g., Bus, Car, Train, Plane, or Other).
* **Note** (`note`, note, optional): Add any relevant notes about the transportation.
* **Email** (`email`, email, optional): Enter the student's email (if applicable).
* **Phone** (`phone`, text, optional): Enter the student's phone number (if applicable).
* **Category** (`student_transportation_form_category`, select_multiple, optional): Select the category that this transportation form falls under (e.g., School Counselor Forms or Other).
* **Assigned Tool** (`assigned_tool`, select_one, optional): Choose the tool assigned to this form (e.g., chatjimmy or other tool).
* **Form ID** (`form_id`, number, optional): Enter the form ID (not applicable).
* **Output File** (`output_file`, select_one, optional): Choose the output file format (e.g., "003 student transportation form--school counselor forms" or other file).
* **Form Description** (`form_description`, note, optional): Add any additional information about the form.
* **Other** (`other`, text, optional): Add any other relevant details.
* **School IDs** (`school_id_1`, `school_id_2`, `...`, text, optional): Enter the school ID associated with the student (multiple fields for multiple schools).

Note: The fields that are not explicitly marked as "required" can be left blank if not applicable.
